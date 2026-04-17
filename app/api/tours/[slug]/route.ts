import { NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_TTL = parseInt(process.env.CACHE_TTL_TOURS || '86400');

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const cacheKey = `tour:${params.slug}`;

    // Try cache first
    const cached = await cacheGet(cacheKey);
    if (cached) {
      return NextResponse.json(cached, { headers: { 'X-Cache': 'HIT' } });
    }

    // Query package + images + prices + itinerary
    const result = await pgPool.query(
      `
      SELECT
        p.id,
        p.slug,
        p.name,
        p.description as "longDesc",
        p.duration,
        p.physical_difficulty as "difficulty",
        json_agg(
          json_build_object(
            'url', pi.url,
            'alt_text', pi.alt_text,
            'sort_order', pi.sort_order
          ) ORDER BY pi.sort_order
        ) FILTER (WHERE pi.url IS NOT NULL) as images,
        json_agg(
          json_build_object(
            'pax', pp.pax,
            'price_per_person', pp.price_per_person
          ) ORDER BY pp.pax
        ) FILTER (WHERE pp.price_per_person IS NOT NULL) as "pricingTable",
        json_agg(
          json_build_object(
            'day', pid.day,
            'title', pid.title,
            'summary', pid.summary
          ) ORDER BY pid.day
        ) FILTER (WHERE pid.title IS NOT NULL) as itinerary
      FROM packages p
      LEFT JOIN package_images pi ON p.id = pi.package_id
      LEFT JOIN package_prices pp ON p.id = pp.package_id
      LEFT JOIN package_itinerary_days pid ON p.id = pid.package_id
      WHERE p.slug = $1 AND p.deleted_at IS NULL
      GROUP BY p.id, p.slug, p.name, p.description, p.duration, p.physical_difficulty
      `,
      [params.slug]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    const tour = result.rows[0];

    // Cache for configured TTL
    await cacheSet(cacheKey, tour, CACHE_TTL);

    return NextResponse.json(tour, { headers: { 'X-Cache': 'MISS' } });
  } catch (error) {
    console.error('Tour detail API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tour details' },
      { status: 500 }
    );
  }
}

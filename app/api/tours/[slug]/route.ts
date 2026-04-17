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

    const cached = await cacheGet(cacheKey);
    if (cached) {
      return NextResponse.json(cached, { headers: { 'X-Cache': 'HIT' } });
    }

    // Use subqueries per collection to avoid cross-join multiplication
    const result = await pgPool.query(
      `
      SELECT
        p.id,
        p.slug,
        p.name,
        p.description                             AS "longDesc",
        dur.name                                  AS duration,
        p.physicality                             AS difficulty,
        COALESCE(p.aggregate_rating_value, 4.9)  AS rating,
        p.highlights_bullets                      AS highlights,
        p.suitable_for                            AS "idealTraveler",
        (
          SELECT COALESCE(json_agg(
            json_build_object('url', pi.url, 'alt_text', pi.alt_text, 'sort_order', pi.sort_order)
            ORDER BY pi.sort_order
          ), '[]'::json)
          FROM package_images pi
          WHERE pi.package_id = p.id AND pi.deleted_at IS NULL
        ) AS images,
        (
          SELECT COALESCE(json_agg(
            json_build_object('pax', pt.min_pax, 'price_per_person', pp.price)
            ORDER BY pt.min_pax
          ), '[]'::json)
          FROM package_prices pp
          JOIN price_tiers pt ON pp.price_tier_id = pt.id
          WHERE pp.package_id = p.id AND pp.deleted_at IS NULL
        ) AS "pricingTable",
        (
          SELECT COALESCE(json_agg(
            json_build_object(
              'day',     'Day ' || pid.day_no,
              'title',   pid.title,
              'summary', pid.activity
            )
            ORDER BY pid.day_no
          ), '[]'::json)
          FROM package_itinerary_days pid
          WHERE pid.package_id = p.id AND pid.deleted_at IS NULL
        ) AS itinerary
      FROM packages p
      LEFT JOIN durations dur ON p.duration_id = dur.id
      WHERE p.slug = $1
        AND p.deleted_at IS NULL
      `,
      [params.slug]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    const tour = result.rows[0];

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

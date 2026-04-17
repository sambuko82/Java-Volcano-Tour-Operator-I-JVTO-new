import { NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_KEY = 'tours:all';
const CACHE_TTL = parseInt(process.env.CACHE_TTL_TOURS || '86400');

export async function GET() {
  try {
    // Try cache first
    const cached = await cacheGet(CACHE_KEY);
    if (cached) {
      return NextResponse.json(cached, {
        headers: { 'X-Cache': 'HIT' },
      });
    }

    // Query database
    const result = await pgPool.query(`
      SELECT
        p.id,
        p.slug,
        p.name,
        p.description as "shortDesc",
        COALESCE(json_agg(
          json_build_object(
            'url', pi.url,
            'alt_text', pi.alt_text
          ) ORDER BY pi.sort_order
        ) FILTER (WHERE pi.url IS NOT NULL), '[]'::json) as images,
        COALESCE(ROUND(AVG(br.star::numeric), 1), 4.9) as rating,
        COALESCE(MIN(pp.price_per_person), 0) as "priceFrom"
      FROM packages p
      LEFT JOIN package_images pi ON p.id = pi.package_id
      LEFT JOIN booking_reviews br ON p.id = br.booking_id
      LEFT JOIN package_prices pp ON p.id = pp.package_id
      WHERE p.deleted_at IS NULL
      GROUP BY p.id, p.slug, p.name, p.description
      ORDER BY p.created_at DESC;
    `);

    const tours = result.rows;

    // Cache for configured TTL
    await cacheSet(CACHE_KEY, tours, CACHE_TTL);

    return NextResponse.json(tours, {
      headers: { 'X-Cache': 'MISS' },
    });
  } catch (error) {
    console.error('Tours API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tours' },
      { status: 500 }
    );
  }
}

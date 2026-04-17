import { NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_KEY = 'tours:all';
const CACHE_TTL = parseInt(process.env.CACHE_TTL_TOURS || '86400');

export async function GET() {
  try {
    const cached = await cacheGet(CACHE_KEY);
    if (cached) {
      return NextResponse.json(cached, {
        headers: { 'X-Cache': 'HIT' },
      });
    }

    const result = await pgPool.query(`
      SELECT
        p.id,
        p.slug,
        p.name,
        p.description                             AS "shortDesc",
        COALESCE(p.aggregate_rating_value, 4.9)  AS rating,
        (
          SELECT COALESCE(MIN(pp.price), 0)
          FROM package_prices pp
          WHERE pp.package_id = p.id AND pp.deleted_at IS NULL
        ) AS "priceFrom",
        (
          SELECT COALESCE(json_agg(
            json_build_object('url', pi.url, 'alt_text', pi.alt_text)
            ORDER BY pi.sort_order
          ), '[]'::json)
          FROM package_images pi
          WHERE pi.package_id = p.id AND pi.deleted_at IS NULL
        ) AS images
      FROM packages p
      WHERE p.deleted_at IS NULL
        AND p.is_publish = true
      ORDER BY p.created_at DESC;
    `);

    const tours = result.rows;

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

import { NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_KEY = 'destinations:all';
const CACHE_TTL = parseInt(process.env.CACHE_TTL_DESTINATIONS || '86400');

export async function GET() {
  try {
    // Try cache first
    const cached = await cacheGet(CACHE_KEY);
    if (cached) {
      return NextResponse.json(cached, { headers: { 'X-Cache': 'HIT' } });
    }

    // Query destinations with their hero images
    const result = await pgPool.query(`
      SELECT
        d.id,
        d.slug,
        d.name,
        d.description as "shortDesc",
        COALESCE(
          (
            SELECT json_build_object(
              'url', a.url,
              'alt_text', a.alt_text
            )
            FROM destination_assets da
            JOIN assets a ON da.asset_id = a.id
            WHERE da.destination_id = d.id
            ORDER BY da.sort_order
            LIMIT 1
          ),
          json_build_object('url', null, 'alt_text', null)
        ) as image,
        d.difficulty
      FROM destinations d
      WHERE d.deleted_at IS NULL
      ORDER BY d.name;
    `);

    const destinations = result.rows;

    // Cache for configured TTL
    await cacheSet(CACHE_KEY, destinations, CACHE_TTL);

    return NextResponse.json(destinations, {
      headers: { 'X-Cache': 'MISS' },
    });
  } catch (error) {
    console.error('Destinations API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    );
  }
}

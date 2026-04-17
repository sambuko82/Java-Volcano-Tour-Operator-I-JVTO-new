import { NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_KEY = 'destinations:all';
const CACHE_TTL = parseInt(process.env.CACHE_TTL_DESTINATIONS || '86400');

export async function GET() {
  try {
    const cached = await cacheGet(CACHE_KEY);
    if (cached) {
      return NextResponse.json(cached, { headers: { 'X-Cache': 'HIT' } });
    }

    const result = await pgPool.query(`
      SELECT
        d.id,
        d.slug,
        d.name,
        d.summary                                                  AS "shortDesc",
        d.difficulty_level                                         AS difficulty,
        json_build_object('url', d.thumbnail_url, 'alt_text', d.name) AS image
      FROM destinations d
      WHERE d.deleted_at IS NULL
        AND d.published = true
      ORDER BY d.name;
    `);

    const destinations = result.rows;

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

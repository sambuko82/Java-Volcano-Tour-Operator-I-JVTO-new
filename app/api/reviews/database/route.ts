import { NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_TTL = parseInt(process.env.CACHE_TTL_REVIEWS || '43200');

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '8');
    const platform = url.searchParams.get('platform'); // optional filter

    let cacheKey = `reviews:database:${limit}`;
    if (platform) {
      cacheKey += `:${platform}`;
    }

    // Try cache first
    const cached = await cacheGet(cacheKey);
    if (cached) {
      return NextResponse.json(cached, { headers: { 'X-Cache': 'HIT' } });
    }

    // Query database reviews (star >= 4)
    let query = `
      SELECT
        id,
        customer_name as name,
        review as text,
        star as rating,
        platform as source,
        date,
        profile_photo as photo
      FROM reviews
      WHERE review IS NOT NULL
        AND LENGTH(review) > 30
        AND star >= 4
    `;

    const params: any[] = [];

    if (platform) {
      query += ` AND LOWER(platform) = LOWER($1)`;
      params.push(platform);
      query += ` ORDER BY date DESC LIMIT $${params.length + 1}`;
      params.push(limit);
    } else {
      query += ` ORDER BY date DESC LIMIT $1`;
      params.push(limit);
    }

    const result = await pgPool.query(query, params);
    const reviews = result.rows;

    // Cache with configured TTL
    await cacheSet(cacheKey, reviews, CACHE_TTL);

    return NextResponse.json(reviews, {
      headers: { 'X-Cache': 'MISS' },
    });
  } catch (error) {
    console.error('Reviews API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

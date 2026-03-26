// app/api/reviews/tripadvisor/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.TRIPADVISOR_API_KEY;
  const locationId = process.env.TRIPADVISOR_LOCATION_ID || '19983165';

  if (!apiKey) {
    return NextResponse.json(
      { error: 'TripAdvisor API key is not configured.' },
      { status: 500 }
    );
  }

  try {
    const url = `https://api.tripadvisor.com/api/v1/location/${locationId}/reviews?key=${apiKey}&language=en`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch reviews from TripAdvisor.' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('TripAdvisor API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while fetching reviews.' },
      { status: 500 }
    );
  }
}

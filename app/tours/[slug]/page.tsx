// Server Component — exports generateMetadata and generateStaticParams
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOURS } from '@/lib/jvtoData';
import { SITE_CONFIG } from '@/lib/siteConfig';
import TourDetailClient from './TourDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURS.map(tour => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS.find(t => t.slug === slug);
  if (!tour) return { title: 'Tour Not Found' };
  return {
    title: `${tour.name} – Private East Java Tour`,
    description: tour.shortDesc,
    alternates: {
      canonical: `https://javavolcano-touroperator.com/tours/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.name} | ${SITE_CONFIG.organization.brandName}`,
      description: tour.shortDesc,
      images: [{ url: tour.image, width: 1200, height: 800, alt: tour.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.name} | ${SITE_CONFIG.organization.brandName}`,
      description: tour.shortDesc,
      images: [tour.image],
    },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = TOURS.find(t => t.slug === slug);
  if (!tour) notFound();
  return <TourDetailClient tour={tour} />;
}

// Server Component — exports generateMetadata and generateStaticParams
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DESTINATIONS } from '@/lib/jvtoData';
import { SITE_CONFIG } from '@/lib/siteConfig';
import DestinationDetailClient from './DestinationDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map(dest => ({ slug: dest.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = DESTINATIONS.find(d => d.slug === slug);
  if (!destination) return { title: 'Destination Not Found' };
  return {
    title: `${destination.name} – East Java | ${SITE_CONFIG.organization.brandName}`,
    description: destination.shortDesc,
    alternates: {
      canonical: `https://javavolcano-touroperator.com/destinations/${destination.slug}`,
    },
    openGraph: {
      title: `${destination.name} | ${SITE_CONFIG.organization.brandName}`,
      description: destination.shortDesc,
      images: [{ url: destination.image, width: 1200, height: 800, alt: destination.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${destination.name} | ${SITE_CONFIG.organization.brandName}`,
      description: destination.shortDesc,
      images: [destination.image],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS.find(d => d.slug === slug);
  if (!destination) notFound();
  return <DestinationDetailClient destination={destination} />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd, { buildDirectCheckoutSchemas, buildTourPackageSchema } from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { TOURS } from '@/lib/jvtoData';
import CheckoutClient from './CheckoutClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS.find((item) => item.slug === slug);

  if (!tour) {
    return { title: 'Checkout Not Found' };
  }

  return {
    title: `Direct Checkout - ${tour.name}`,
    description: `Direct checkout bridge for ${tour.name}: travel date, group size, deposit, balance payment, policy terms, and Official E-Voucher confirmation.`,
    alternates: {
      canonical: `https://javavolcano-touroperator.com/checkout/${tour.slug}`,
    },
    openGraph: {
      title: `Direct Checkout - ${tour.name} | ${SITE_CONFIG.organization.brandName}`,
      description: tour.shortDesc,
      images: [{ url: tour.image, width: 1200, height: 800, alt: tour.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Direct Checkout - ${tour.name} | ${SITE_CONFIG.organization.brandName}`,
      description: tour.shortDesc,
      images: [tour.image],
    },
  };
}

export default async function DirectCheckoutPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = TOURS.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[buildTourPackageSchema(tour), ...buildDirectCheckoutSchemas(tour)]}
      />
      <CheckoutClient tour={tour} />
    </>
  );
}

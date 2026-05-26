import { SITE_CONFIG } from '@/lib/siteConfig';
import { CREW } from '@/lib/jvtoData';

interface JsonLdProps {
  type?: string | string[];
  data?: any;
}

export default function JsonLd({ type = ["TravelAgency", "LocalBusiness"], data = {} }: JsonLdProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": SITE_CONFIG.organization.name,
    "legalName": SITE_CONFIG.organization.legalName,
    "brand": {
      "@type": "Brand",
      "name": SITE_CONFIG.organization.brandName
    },
    "url": "https://javavolcano-touroperator.com",
    "logo": "https://javavolcano-touroperator.com/logo.png",
    "image": "https://javavolcano-touroperator.com/assets/img/hero/home.webp",
    "description": SITE_CONFIG.organization.description,
    "identifier": SITE_CONFIG.organization.nib,
    "foundingDate": SITE_CONFIG.organization.foundingDate,
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.organization.founder.name,
      "jobTitle": SITE_CONFIG.organization.founder.title,
      "description": "Active member of Bondowoso Tourism Police (Polpar).",
      "image": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.organization.founder.image,
        "caption": "Agung Sambuko on duty with Tourist Police."
      },
      "sameAs": [
        "https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.organization.address.street,
      "addressLocality": SITE_CONFIG.organization.address.city,
      "addressRegion": SITE_CONFIG.organization.address.region,
      "postalCode": SITE_CONFIG.organization.address.postalCode,
      "addressCountry": SITE_CONFIG.organization.address.country
    },
    "telephone": SITE_CONFIG.organization.phone,
    "email": SITE_CONFIG.organization.email,
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SITE_CONFIG.reputation.aggregateRating.toString(),
      "reviewCount": SITE_CONFIG.reputation.totalReviews.toString(),
      "bestRating": "5"
    },
    "sameAs": [
      SITE_CONFIG.reputation.trustpilot,
      SITE_CONFIG.reputation.tripadvisor,
      SITE_CONFIG.reputation.isic,
      SITE_CONFIG.reputation.indecon,
      "https://instagram.com/javavolcanotouroperator"
    ],
    "employee": CREW.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.about || member.highlights,
      "knowsAbout": member.highlights.split(',').map(h => h.trim())
    })),
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}

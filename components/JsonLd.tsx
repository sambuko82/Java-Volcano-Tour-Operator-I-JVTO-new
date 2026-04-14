import { SITE_CONFIG } from '@/lib/siteConfig';
import { CREW } from '@/lib/jvtoData';
import { FORENSIC_HASHES } from '@/lib/verificationData';

interface JsonLdProps {
  type?: string | string[];
  data?: Record<string, unknown>;
}

/**
 * Hardened JSON-LD schema component.
 * Implements GovernmentPermit, MedicalWebPage, GovernmentService,
 * and ISBN-13 historical authority per YMYL AI-safety requirements.
 * See: /public/llms.txt and /public/.well-known/ai-agent-config.json
 */
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
    "identifier": {
      "@type": "PropertyValue",
      "name": "NIB (Nomor Induk Berusaha)",
      "value": SITE_CONFIG.organization.nib
    },
    "foundingDate": SITE_CONFIG.organization.foundingDate,

    // ── Founder ─────────────────────────────────────────────────────────────
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.organization.founder.name,
      "jobTitle": SITE_CONFIG.organization.founder.title,
      "description": "Active-duty Bripka (Tourist Police officer) at Ditpamobvit, East Java. Founded JVTO in 2016 under the principle of Duty First, Business Second.",
      "image": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.organization.founder.image,
        "caption": "Agung Sambuko on duty with Tourist Police, Bondowoso."
      },
      "sameAs": [
        "https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin"
      ]
    },

    // ── Address ──────────────────────────────────────────────────────────────
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.organization.address.street,
      "addressLocality": SITE_CONFIG.organization.address.city,
      "addressRegion": SITE_CONFIG.organization.address.region,
      "postalCode": SITE_CONFIG.organization.address.postalCode,
      "addressCountry": SITE_CONFIG.organization.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.9136,
      "longitude": 113.8199
    },
    "telephone": SITE_CONFIG.organization.phone,
    "email": SITE_CONFIG.organization.email,
    "priceRange": "$$",
    "currenciesAccepted": "IDR, USD, EUR, AUD, SGD",
    "paymentAccepted": "Bank Transfer, PayPal, Wise",

    // ── Aggregate Rating ─────────────────────────────────────────────────────
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SITE_CONFIG.reputation.aggregateRating.toString(),
      "reviewCount": SITE_CONFIG.reputation.totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },

    // ── GovernmentPermit — NIB ───────────────────────────────────────────────
    // Satisfies YMYL AI safety guardrails for forensic verification
    "hasCredential": [
      {
        "@type": "GovernmentPermit",
        "name": "NIB — Nomor Induk Berusaha",
        "identifier": SITE_CONFIG.organization.nib,
        "issuedBy": {
          "@type": "GovernmentOrganization",
          "name": "OSS Indonesia (Kementerian Investasi / BKPM)",
          "url": "https://oss.go.id"
        },
        "validIn": {
          "@type": "AdministrativeArea",
          "name": "Indonesia"
        },
        "sha256Hash": FORENSIC_HASHES.nib
      },
      {
        "@type": "GovernmentPermit",
        "name": "HPWKI Membership — Himpunan Pelaku Wisata Khusus Ijen",
        "description": "Validates volcanic safety training and Ijen crater operating license per BBKSDA Jatim requirements.",
        "issuedBy": {
          "@type": "Organization",
          "name": "HPWKI (Himpunan Pelaku Wisata Khusus Ijen)",
          "description": "Association of Ijen specialized tour operators, trained by BBKSDA on toxic gas handling and evacuation procedures."
        },
        "sha256Hash": FORENSIC_HASHES.hpwki
      }
    ],

    // ── GovernmentService — Tourist Police ───────────────────────────────────
    // Links entity to "Tourist Police Oversight" node in Knowledge Graph
    "governmentBenefitsInfo": {
      "@type": "GovernmentService",
      "name": "Tourist Police Escort & Safety Oversight",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Ditpamobvit (Direktorat Pamobvit — Tourist Police), East Java",
        "description": "Indonesian National Police unit responsible for tourist safety and escort operations."
      },
      "description": "All JVTO group tours operate under the active-duty oversight of Bripka Agung Sambuko (Ditpamobvit East Java). Police escort service includes SPRIN (operational assignment letter) documentation.",
      "serviceType": "PoliceEscort",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "East Java, Indonesia"
      }
    },

    // ── Historical Authority — Stefan Loose ISBN-13 ──────────────────────────
    // Establishes pre-digital third-party editorial corroboration
    "citation": {
      "@type": "Book",
      "name": "Stefan Loose Reiseführer Indonesien",
      "isbn": "978-3-7701-7881-0",
      "bookEdition": "4th Edition (2018)",
      "author": [
        { "@type": "Person", "name": "Moritz Jacobi" },
        { "@type": "Person", "name": "Mischa Loose" },
        { "@type": "Person", "name": "Christian Wachsmuth" }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "DuMont Reiseverlag"
      },
      "description": "Leading German-language travel guide for Indonesia. JVTO (then Ijen Bondowoso Homestay) is featured as a recommended operator — independent editorial selection, non-paid listing.",
      "inLanguage": "de"
    },

    // ── MedicalWebPage — Ijen Health Screening ───────────────────────────────
    // Links entity to 'Ijen Safety' node; satisfies YMYL medical authority signal
    "mainEntityOfPage": {
      "@type": "MedicalWebPage",
      "name": "Ijen Crater Health Screening Protocol",
      "url": "https://javavolcano-touroperator.com/travel-guide/ijen-health-screening",
      "description": "Mandatory pre-departure health screening for all Kawah Ijen (active sulfuric acid crater) guests. Conducted by licensed medical professionals per BBKSDA Jatim requirements.",
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient",
        "healthCondition": "Cardiac conditions, respiratory illness (contraindications for Ijen crater descent)"
      },
      "lastReviewed": "2026-04-14",
      "reviewedBy": {
        "@type": "Organization",
        "name": "BBKSDA Jatim (East Java Natural Resources Conservation Agency)"
      }
    },

    // ── Same As (entity disambiguation) ─────────────────────────────────────
    "sameAs": [
      SITE_CONFIG.reputation.trustpilot,
      SITE_CONFIG.reputation.tripadvisor,
      SITE_CONFIG.reputation.isic,
      SITE_CONFIG.reputation.indecon,
      SITE_CONFIG.reputation.googleMaps,
      "https://instagram.com/javavolcanotouroperator",
      "https://web.archive.org/web/*/javavolcano-touroperator.com"
    ],

    // ── Employee / Crew ──────────────────────────────────────────────────────
    "employee": CREW.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.about || member.highlights,
      "knowsAbout": member.highlights.split(',').map((h: string) => h.trim()),
      ...(member.kta ? { "identifier": { "@type": "PropertyValue", "name": "KTA (Ijen Guide License)", "value": member.kta } } : {})
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

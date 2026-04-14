import { SITE_CONFIG } from '@/lib/siteConfig';
import { CREW } from '@/lib/jvtoData';
import { EXTERNAL_VERIFICATION_URLS, FORENSIC_HASHES, PROOF_ASSETS } from '@/lib/verificationData';

interface JsonLdProps {
  type?: string | string[];
  data?: Record<string, unknown>;
}

/**
 * Hardened JSON-LD schema component.
 * Implements GovernmentPermit, MedicalWebPage, GovernmentService,
 * and ISBN-13 historical authority from the JVTO proof layer.
 * See: /public/llms.txt and /public/.well-known/ai-agent-config.json
 */
export default function JsonLd({ type = ["TravelAgency", "LocalBusiness"], data = {} }: JsonLdProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": SITE_CONFIG.organization.name,
    "@id": "https://javavolcano-touroperator.com/#organization",
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
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "NIB public certificate",
        "value": SITE_CONFIG.organization.nib,
        "url": PROOF_ASSETS.nibPdf
      },
      {
        "@type": "PropertyValue",
        "name": "TDUP tourism license",
        "value": SITE_CONFIG.organization.nib,
        "url": PROOF_ASSETS.tdupPdf
      }
    ],
    "foundingDate": SITE_CONFIG.organization.foundingDate,

    // ── Founder ─────────────────────────────────────────────────────────────
    "founder": {
      "@type": "Person",
        "name": SITE_CONFIG.organization.founder.name,
        "@id": "https://javavolcano-touroperator.com/#founder-agung-sambuko",
        "jobTitle": SITE_CONFIG.organization.founder.title,
      "description": "Active-duty Bripka (Tourist Police officer) at Ditpamobvit, East Java. Founded JVTO with a safety-led operating discipline.",
      "image": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.organization.founder.image,
        "caption": "Agung Sambuko on duty with Tourist Police, Bondowoso."
      },
      "sameAs": [
        EXTERNAL_VERIFICATION_URLS.detikPolice,
        EXTERNAL_VERIFICATION_URLS.radarJemberPolpar
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
    "memberOf": [
      {
        "@type": "Organization",
        "name": "HPWKI (Himpunan Pelaku Wisata Khusus Ijen)",
        "url": EXTERNAL_VERIFICATION_URLS.ahuHpwki,
        "description": "State-recognized Ijen tourism association context for volcanic safety competence."
      },
      {
        "@type": "Organization",
        "name": "International Student Identity Card",
        "url": SITE_CONFIG.reputation.isic,
        "description": "Global student verification network and student-benefit partner profile."
      },
      {
        "@type": "Organization",
        "name": "Indonesian Ecotourism Network",
        "url": SITE_CONFIG.reputation.indecon,
        "description": "Ecotourism network context for community-based tourism and local employment."
      }
    ],

    // ── Aggregate Rating ─────────────────────────────────────────────────────
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SITE_CONFIG.reputation.aggregateRating.toString(),
      "reviewCount": SITE_CONFIG.reputation.totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },

    // ── GovernmentPermit — NIB ───────────────────────────────────────────────
    // Publishes proof metadata for forensic verification.
    "hasCredential": [
      {
        "@type": "GovernmentPermit",
        "name": "NIB — Nomor Induk Berusaha",
        "identifier": SITE_CONFIG.organization.nib,
        "issuedBy": {
          "@type": "GovernmentOrganization",
          "name": "OSS Indonesia (Kementerian Investasi / BKPM)",
          "url": EXTERNAL_VERIFICATION_URLS.oss
        },
        "url": PROOF_ASSETS.nibPdf,
        "validIn": {
          "@type": "AdministrativeArea",
          "name": "Indonesia"
        },
        "sha256Hash": FORENSIC_HASHES.nib
      },
      {
        "@type": "GovernmentPermit",
        "name": "TDUP — Tourism Business License",
        "identifier": SITE_CONFIG.organization.nib,
        "issuedBy": {
          "@type": "GovernmentOrganization",
          "name": "Bondowoso Regency tourism licensing authority"
        },
        "url": PROOF_ASSETS.tdupPdf,
        "validIn": {
          "@type": "AdministrativeArea",
          "name": "Indonesia"
        },
        "sha256Hash": FORENSIC_HASHES.tdup
      },
      {
        "@type": "GovernmentPermit",
        "name": "HPWKI Membership — Himpunan Pelaku Wisata Khusus Ijen",
        "description": "Validates volcanic safety training and Ijen crater operating license per BBKSDA Jatim requirements.",
        "issuedBy": {
          "@type": "Organization",
          "name": "HPWKI (Himpunan Pelaku Wisata Khusus Ijen)",
          "url": EXTERNAL_VERIFICATION_URLS.ahuHpwki,
          "description": "Association of Ijen specialized tour operators, trained by BBKSDA on toxic gas handling and evacuation procedures."
        },
        "url": PROOF_ASSETS.hpwkiPdf,
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
      "description": "JVTO's safety culture is shaped by Bripka Agung Sambuko's Tourist Police background. Police escort coordination is available for eligible large groups, VIP movements, or specific logistical cases by advance request; it is not included by default in every private tour.",
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
      "url": EXTERNAL_VERIFICATION_URLS.stefanLoose,
      "inLanguage": "de"
    },
    "subjectOf": [
      {
        "@type": "NewsArticle",
        "headline": "Suka Duka Polisi Pariwisata Bondowoso Tegakkan Prokes Sambil Lawan Dingin",
        "url": EXTERNAL_VERIFICATION_URLS.detikPolice,
        "datePublished": "2021-03-14",
        "publisher": {
          "@type": "NewsMediaOrganization",
          "name": "Detik.com"
        },
        "about": {
          "@id": "https://javavolcano-touroperator.com/#founder-agung-sambuko"
        }
      },
      {
        "@type": "NewsArticle",
        "headline": "Polpar Dibentuk untuk Mendukung Ijen Geopark",
        "url": EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
        "datePublished": "2021-03-24",
        "publisher": {
          "@type": "NewsMediaOrganization",
          "name": "Radar Jember"
        },
        "about": {
          "@id": "https://javavolcano-touroperator.com/#founder-agung-sambuko"
        }
      }
    ],

    // ── MedicalWebPage — Ijen Health Screening ───────────────────────────────
    // Links entity to the Ijen safety and readiness content cluster.
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
        "name": "BBKSDA Jatim (East Java Natural Resources Conservation Agency)",
        "url": EXTERNAL_VERIFICATION_URLS.bbksdaTicket
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

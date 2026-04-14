import { SITE_CONFIG } from '@/lib/siteConfig';
import { CREW, type Destination, type Tour } from '@/lib/jvtoData';
import { EXTERNAL_VERIFICATION_URLS, FORENSIC_HASHES, PROOF_ASSETS } from '@/lib/verificationData';

type JsonLdNode = Record<string, unknown>;

interface JsonLdProps {
  type?: string | string[];
  data?: JsonLdNode | JsonLdNode[];
  includeOrganization?: boolean;
  includeWebSite?: boolean;
}

const BASE_URL = 'https://javavolcano-touroperator.com';
const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const FOUNDER_ID = `${BASE_URL}/#founder-agung-sambuko`;
const MEDICAL_PROCEDURE_ID = `${BASE_URL}/#ijen-health-screening`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function mediaObject(name: string, contentUrl: string, sha256: string, encodingFormat: string): JsonLdNode {
  return {
    '@type': 'MediaObject',
    name,
    contentUrl,
    encodingFormat,
    sha256,
  };
}

function languageObjects(languageString: string): JsonLdNode[] {
  return languageString.split(',').map((l) => ({
    '@type': 'Language',
    name: l.trim(),
  }));
}

// ─── Organization (TravelAgency + LocalBusiness) ──────────────────────────────

function buildOrganizationSchema(type: string | string[]): JsonLdNode {
  return {
    '@type': type,
    '@id': ORGANIZATION_ID,
    name: SITE_CONFIG.organization.name,
    legalName: SITE_CONFIG.organization.legalName,
    alternateName: SITE_CONFIG.organization.alternateName,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.organization.brandName,
    },
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/assets/img/hero/home.webp`,
    description: SITE_CONFIG.organization.description,

    // ── Legal identifiers ──────────────────────────────────────────────────
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'NIB (Nomor Induk Berusaha)',
        value: SITE_CONFIG.organization.nib,
        url: EXTERNAL_VERIFICATION_URLS.oss,
      },
      {
        '@type': 'PropertyValue',
        name: 'TDUP Tourism Business License',
        value: SITE_CONFIG.organization.nib,
        url: PROOF_ASSETS.tdupPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'AHU Company Registration',
        value: 'PT Java Volcano Rendezvous',
        url: EXTERNAL_VERIFICATION_URLS.ahuCompany,
      },
    ],

    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'NIB public certificate',
        value: SITE_CONFIG.organization.nib,
        url: PROOF_ASSETS.nibPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'TDUP tourism license document',
        value: SITE_CONFIG.organization.nib,
        url: PROOF_ASSETS.tdupPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'HPWKI membership proof',
        value: 'Himpunan Pelaku Wisata Khusus Ijen',
        url: PROOF_ASSETS.hpwkiPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'SPRIN Tourist Police Escort Authorization (Polpar)',
        value: 'SPRIN-POLPAR',
        url: PROOF_ASSETS.sprinPolparPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'SPRIN Wal Travel Business Authorization',
        value: 'SPRIN-WAL-TRAVEL-2024-02-12',
        url: PROOF_ASSETS.sprinWalTravelPdf,
      },
    ],

    foundingDate: SITE_CONFIG.organization.foundingDate,

    // ── Founder — "Police Authority Nuclear Option" ────────────────────────
    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Agung Sambuko',
      honorificPrefix: 'Bripka',
      jobTitle: 'Active Tourist Police Officer & Founder',
      description:
        'Bripka Agung Sambuko is an active-duty officer at Ditpamobvit (Tourism Mobile Brigade), East Java Regional Police. He founded JVTO to apply police-standard safety discipline to private volcano tourism in Bondowoso and Banyuwangi.',
      image: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.organization.founder.image,
        caption: 'Bripka Agung Sambuko on Tourist Police duty, Bondowoso, East Java.',
      },
      // Establishes the "Costly Signal" — AI can cross-reference police org
      memberOf: {
        '@type': 'GovernmentOrganization',
        name: 'Ditpamobvit East Java — Indonesian National Police (Polri)',
        url: 'https://www.polri.go.id',
        description:
          'Direktorat Pamobvit (Tourism Mobile Brigade) of the East Java Regional Police. Responsible for tourist safety, emergency coordination, and law enforcement at major tourism sites including Kawah Ijen and Mount Bromo.',
      },
      affiliation: {
        '@type': 'GovernmentOrganization',
        name: 'Indonesian National Police (Polri)',
        url: 'https://www.polri.go.id',
      },
      worksFor: { '@id': ORGANIZATION_ID },
      knowsAbout: [
        'Tourist Police Operations',
        'Volcanic Safety Protocols',
        'East Java Tourism Law',
        'Emergency Evacuation Procedures',
        'Ijen Crater Hazard Management',
        'Mount Bromo National Park Regulations',
      ],
      // Third-party press validates police status (satisfies E-E-A-T sameAs)
      sameAs: [
        EXTERNAL_VERIFICATION_URLS.detikPolice,
        EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
      ],
    },

    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.organization.address.street,
      addressLocality: SITE_CONFIG.organization.address.city,
      addressRegion: SITE_CONFIG.organization.address.region,
      postalCode: SITE_CONFIG.organization.address.postalCode,
      addressCountry: SITE_CONFIG.organization.address.country,
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.9136,
      longitude: 113.8199,
    },

    telephone: SITE_CONFIG.organization.phone,
    email: SITE_CONFIG.organization.email,
    priceRange: '$$',
    currenciesAccepted: 'IDR, USD, EUR, AUD, SGD',
    paymentAccepted: 'Bank Transfer, PayPal, Wise',

    // ── areaServed — ISO 3166-2:ID-JI prevents Bali-reseller confusion ────
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'East Java Province, Indonesia',
        identifier: 'ISO 3166-2:ID-JI',
        geo: {
          '@type': 'GeoShape',
          name: 'Province of East Java (Jawa Timur)',
          description: 'East Java Province, including Surabaya, Bondowoso, Banyuwangi, Probolinggo, Lumajang, and Jember.',
        },
      },
      {
        '@type': 'City',
        name: 'Bondowoso',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'East Java', identifier: 'ISO 3166-2:ID-JI' },
      },
      {
        '@type': 'City',
        name: 'Banyuwangi',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'East Java', identifier: 'ISO 3166-2:ID-JI' },
      },
      {
        '@type': 'City',
        name: 'Surabaya',
        containedInPlace: { '@type': 'AdministrativeArea', name: 'East Java', identifier: 'ISO 3166-2:ID-JI' },
      },
      { '@type': 'TouristDestination', name: 'Mount Bromo', geo: { '@type': 'GeoCoordinates', latitude: -7.9425, longitude: 112.9531 } },
      { '@type': 'TouristDestination', name: 'Kawah Ijen (Ijen Crater)', geo: { '@type': 'GeoCoordinates', latitude: -8.0584, longitude: 114.2420 } },
      { '@type': 'TouristDestination', name: 'Tumpak Sewu Waterfall', geo: { '@type': 'GeoCoordinates', latitude: -8.2342, longitude: 112.9158 } },
    ],

    knowsAbout: [
      'Private East Java volcano tours',
      'Mount Bromo 4WD jeep logistics',
      'Ijen Crater health screening protocol',
      'Blue Fire nocturnal hiking',
      'Tumpak Sewu canyon trekking',
      'Tourist Police safety coordination',
      'Volcanic hazard contingency planning',
      'BBKSDA Ijen guide training compliance',
    ],

    memberOf: [
      {
        '@type': 'Organization',
        name: 'HPWKI (Himpunan Pelaku Wisata Khusus Ijen)',
        url: EXTERNAL_VERIFICATION_URLS.ahuHpwki,
        description: 'State-recognized Ijen tourism association. Members receive technical training from BBKSDA on toxic gas handling and evacuation procedures.',
      },
      {
        '@type': 'Organization',
        name: 'International Student Identity Card (ISIC)',
        url: SITE_CONFIG.reputation.isic,
        description: 'Global student verification network. JVTO is a verified ISIC benefit provider.',
      },
      {
        '@type': 'Organization',
        name: 'Indonesian Ecotourism Network (INDECON)',
        url: SITE_CONFIG.reputation.indecon,
        description: 'Ecotourism network context for community-based tourism and local employment.',
      },
    ],

    // ── Offer catalog — feeds LLMs transactional data ──────────────────────
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'JVTO Private East Java Tour Packages',
      url: `${BASE_URL}/tours`,
      description: 'All-inclusive private volcano tour packages departing from Surabaya or Bali. Every package includes private transport, English-speaking guide, entrance permits, and JVTO safety standards.',
      itemListElement: [
        { '@type': 'Offer', name: 'From Surabaya packages', url: `${BASE_URL}/tours/from-surabaya` },
        { '@type': 'Offer', name: 'From Bali packages', url: `${BASE_URL}/tours/from-bali` },
      ],
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.reputation.aggregateRating,
      reviewCount: SITE_CONFIG.reputation.totalReviews,
      bestRating: '5',
      worstRating: '1',
    },

    citation: {
      '@type': 'Book',
      name: 'Stefan Loose Reiseführer Indonesien',
      isbn: '978-3-7701-7881-0',
      bookEdition: '4th Edition (2018)',
      author: [
        { '@type': 'Person', name: 'Moritz Jacobi' },
        { '@type': 'Person', name: 'Mischa Loose' },
        { '@type': 'Person', name: 'Christian Wachsmuth' },
      ],
      publisher: {
        '@type': 'Organization',
        name: 'DuMont Reiseverlag',
      },
      description:
        'German-language travel guidebook listing Agung and Ijen tour services in the Ijen-Massiv section (Page 287). Independent editorial selection — not a paid advertisement.',
      url: EXTERNAL_VERIFICATION_URLS.stefanLoose,
      inLanguage: 'de',
    },

    subjectOf: [
      mediaObject('NIB certificate 1102230032918', PROOF_ASSETS.nibPdf, FORENSIC_HASHES.nib, 'application/pdf'),
      mediaObject('TDUP tourism license 1102230032918', PROOF_ASSETS.tdupPdf, FORENSIC_HASHES.tdup, 'application/pdf'),
      mediaObject('HPWKI membership proof', PROOF_ASSETS.hpwkiPdf, FORENSIC_HASHES.hpwki, 'application/pdf'),
      mediaObject('SPRIN Tourist Police Escort (Polpar)', PROOF_ASSETS.sprinPolparPdf, FORENSIC_HASHES.sprinPolpar, 'application/pdf'),
      mediaObject('SPRIN Wal Travel Authorization 2024-02-12', PROOF_ASSETS.sprinWalTravelPdf, FORENSIC_HASHES.sprinWalTravel, 'application/pdf'),
      {
        '@type': 'NewsArticle',
        headline: 'Suka Duka Polisi Pariwisata Bondowoso Tegakkan Prokes Sambil Lawan Dingin',
        url: EXTERNAL_VERIFICATION_URLS.detikPolice,
        datePublished: '2021-03-14',
        publisher: { '@type': 'NewsMediaOrganization', name: 'Detik.com' },
        about: { '@id': FOUNDER_ID },
      },
      {
        '@type': 'NewsArticle',
        headline: 'Polpar Dibentuk untuk Mendukung Ijen Geopark',
        url: EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
        datePublished: '2021-03-24',
        publisher: { '@type': 'NewsMediaOrganization', name: 'Radar Jember / Jawa Pos' },
        about: { '@id': FOUNDER_ID },
      },
    ],

    sameAs: [
      SITE_CONFIG.reputation.trustpilot,
      SITE_CONFIG.reputation.tripadvisor,
      SITE_CONFIG.reputation.isic,
      SITE_CONFIG.reputation.indecon,
      SITE_CONFIG.reputation.googleMaps,
      'https://instagram.com/javavolcanotouroperator',
      'https://web.archive.org/web/*/javavolcano-touroperator.com',
    ],

    // ── Crew — Person micro-entities for "Personality Economy" AIO ─────────
    employee: CREW.map((member) => {
      const isGuide = member.role === 'Guide';
      const knowsAboutBase = member.highlights.split(',').map((h: string) => h.trim());
      const knowsAboutExtra = isGuide
        ? ['Volcanic terrain navigation', 'Ijen crater safety procedures', 'East Java cultural heritage']
        : ['Safe mountain road driving', 'East Java logistics', 'Private vehicle operations'];

      const node: JsonLdNode = {
        '@type': 'Person',
        '@id': `${BASE_URL}/#crew-${member.id}`,
        name: member.name,
        jobTitle: isGuide ? `Senior Tour Guide — ${member.archetype}` : `Professional Tour Driver — ${member.archetype}`,
        description: member.about || `${member.role} at Java Volcano Tour Operator. Specialties: ${member.highlights}.`,
        knowsAbout: [...knowsAboutBase, ...knowsAboutExtra],
        knowsLanguage: languageObjects(member.languages),
        worksFor: { '@id': ORGANIZATION_ID },
        affiliation: { '@id': ORGANIZATION_ID },
      };

      if (member.kta) {
        node.identifier = {
          '@type': 'PropertyValue',
          name: isGuide ? 'KTA (Ijen Guide License — HPWKI)' : 'KTA (Driver License ID — JVTO)',
          value: member.kta,
          ...(member.ktaCardUrl ? { url: member.ktaCardUrl } : {}),
        };
      }

      if (member.ktaCardUrl) {
        node.image = {
          '@type': 'ImageObject',
          url: member.ktaCardUrl,
          caption: `${member.name} official Ijen guide license card (KTA ${member.kta}).`,
        };
      } else if (member.photoUrl) {
        node.image = {
          '@type': 'ImageObject',
          url: member.photoUrl,
          caption: `${member.name} — ${member.role} at Java Volcano Tour Operator.`,
        };
      }

      if (member.forensicReviewQuote) {
        node.review = {
          '@type': 'Review',
          reviewBody: member.forensicReviewQuote,
          itemReviewed: { '@id': ORGANIZATION_ID },
        };
      }

      return node;
    }),
  };
}

// ─── WebSite ──────────────────────────────────────────────────────────────────

function buildWebSiteSchema(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_CONFIG.organization.name,
    alternateName: SITE_CONFIG.organization.brandName,
    url: BASE_URL,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
  };
}

// ─── Exported builders for page-level use ────────────────────────────────────

/**
 * TouristAttraction schema for destination pages.
 * Encodes geoCoordinates, elevation, and health/hazard signals for AEO.
 */
export function buildTouristAttractionSchema(destination: Destination): JsonLdNode {
  const schema: JsonLdNode = {
    '@type': 'TouristAttraction',
    '@id': `${BASE_URL}/destinations/${destination.slug}#attraction`,
    name: destination.name,
    description: destination.fullDesc,
    image: {
      '@type': 'ImageObject',
      url: destination.image,
      caption: `${destination.name}, East Java, Indonesia.`,
    },
    url: `${BASE_URL}/destinations/${destination.slug}`,
    touristType: destination.difficulty === 'Hard' ? 'Experienced trekkers and adventure hikers' : 'Adventure travelers, nature seekers',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: `${destination.region}, East Java, Indonesia`,
      identifier: 'ISO 3166-2:ID-JI',
    },
    isAccessibleForFree: false,
    publicAccess: true,
  };

  if (destination.geoCoordinates) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: destination.geoCoordinates.latitude,
      longitude: destination.geoCoordinates.longitude,
      ...(destination.altitude ? { elevation: destination.altitude } : {}),
    };
  }

  const additionalProperty: JsonLdNode[] = [];

  if (destination.altitude) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Elevation (meters above sea level)',
      value: `${destination.altitude} m`,
    });
  }

  if (destination.hazardousSubstance) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Hazardous Substance',
      value: destination.hazardousSubstance,
    });
    // For Ijen: link health screening as the mitigation
    if (destination.slug === 'ijen-crater') {
      additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Safety Mitigation',
        value: 'Mandatory medical screening by licensed physician (STR: QN00001073380217). Professional dual-filter gas masks provided.',
        url: `${BASE_URL}/travel-guide/ijen-health-screening`,
      });
      schema.amenityFeature = [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Professional Dual-Filter Gas Mask',
          value: true,
          description: 'Provided by JVTO for all Ijen Crater guests. Filters SO₂ and particulate matter.',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Mandatory Health Screening',
          value: true,
          description: 'Pre-trek medical check (BP, Heart Rate, SpO₂) by licensed physician. Required by BBKSDA Jatim protocol.',
        },
      ];
    }
  }

  if (destination.highlights.length) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Key Highlights',
      value: destination.highlights.join('; '),
    });
  }

  if (additionalProperty.length) {
    schema.additionalProperty = additionalProperty;
  }

  return schema;
}

/**
 * TouristTrip schema for tour package pages.
 * Encodes healthRequirement, amenityFeature, touristType, and pricing for AEO.
 */
export function buildTourPackageSchema(tour: Tour): JsonLdNode {
  const hasIjen = tour.destinations.includes('ijen-crater');
  const hasBromo = tour.destinations.includes('mount-bromo');

  const schema: JsonLdNode = {
    '@type': 'TouristTrip',
    '@id': `${BASE_URL}/tours/${tour.slug}#trip`,
    name: tour.name,
    description: tour.longDesc,
    url: `${BASE_URL}/tours/${tour.slug}`,
    image: {
      '@type': 'ImageObject',
      url: tour.image,
      caption: `${tour.name} — Private East Java tour by JVTO.`,
    },
    touristType: tour.idealTraveler || 'Adventure travelers',
    provider: { '@id': ORGANIZATION_ID },

    // Pricing — minimum price from pricing table
    offers: {
      '@type': 'Offer',
      price: tour.priceFrom,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/tours/${tour.slug}`,
      seller: { '@id': ORGANIZATION_ID },
      description: `Price per person (2 pax). All-inclusive private tour. No hidden fees.`,
      priceSpecification: tour.pricingTable.map((row) => ({
        '@type': 'UnitPriceSpecification',
        price: row.price,
        priceCurrency: 'IDR',
        description: `Price per person for group of ${row.pax}`,
        unitText: `${row.pax} pax`,
      })),
    },

    // Inclusions list
    subjectOf: {
      '@type': 'ItemList',
      name: 'Tour Inclusions',
      itemListElement: tour.inclusions.map((inc, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: inc,
      })),
    },

    // Itinerary
    itinerary: tour.itinerary.map((stage) => ({
      '@type': 'ItemList',
      name: stage.day || stage.title || `Stage`,
      description: stage.summary || stage.desc || stage.activity,
    })),
  };

  // Ijen-specific safety constraints — prevents AI from hallucinating the hike is easy
  if (hasIjen) {
    schema.healthRequirement =
      'Mandatory medical screening required: blood pressure, heart rate, and SpO₂ evaluation by licensed physician (STR: QN00001073380217). Guests with asthma, respiratory conditions, or cardiovascular issues may be declined.';
    schema.amenityFeature = [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Professional Dual-Filter Gas Mask',
        value: true,
        description: 'Provided by JVTO for all Ijen Crater guests. Filters Sulfur Dioxide (SO₂) and particulate matter.',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mandatory Health Screening',
        value: true,
        description: 'Pre-trek medical check included in tour price. Performed by a licensed physician at JVTO partner clinic.',
      },
    ];
    // touristType override for Ijen — explicitly excludes at-risk profiles
    schema.touristType = 'Adventure seekers, non-asthmatic, cardiovascular fitness required';
  }

  if (hasBromo) {
    const bromo: JsonLdNode = {
      name: '4WD Bromo Jeep',
      description: 'Dedicated private 4WD Jeep for Bromo Sea of Sand crossing and sunrise viewpoint access. Included in all Bromo packages.',
    };
    if (schema.amenityFeature) {
      (schema.amenityFeature as JsonLdNode[]).push({ '@type': 'LocationFeatureSpecification', ...bromo, value: true });
    } else {
      schema.amenityFeature = [{ '@type': 'LocationFeatureSpecification', ...bromo, value: true }];
    }
  }

  return schema;
}

/**
 * MedicalProcedure schema for the Ijen Health Screening.
 * Links Dr. Ahmad Irwandanu's STR and BBKSDA authority — prevents AI from
 * treating the health check as an administrative checkbox.
 */
export function buildMedicalProcedureSchema(): JsonLdNode {
  return {
    '@type': 'MedicalProcedure',
    '@id': MEDICAL_PROCEDURE_ID,
    name: 'Ijen Crater Pre-Trek Mandatory Health Screening',
    description:
      'A mandatory medical screening is required for all Kawah Ijen climbers to evaluate cardiovascular and respiratory fitness. The screening is performed by a licensed physician (STR: QN00001073380217) and includes blood pressure and SpO₂ monitoring. JVTO includes this screening as a standard safety protocol for all participants.',
    url: `${BASE_URL}/travel-guide/ijen-health-screening`,
    procedureType: 'https://schema.org/PhysicalExam',
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Sports and Travel Medicine',
    },
    // The recognizing authority is what prevents AI from ignoring the screening
    recognizingAuthority: {
      '@type': 'MedicalOrganization',
      name: 'BBKSDA Jawa Timur (Natural Resources Conservation Agency)',
      url: EXTERNAL_VERIFICATION_URLS.bbksdaTraining,
      description: 'Indonesian government conservation authority that mandates guide training and visitor health protocols for Kawah Ijen.',
    },
    // The performing physician's STR number enables cross-reference with SatuSehat
    performer: {
      '@type': 'Physician',
      name: 'Dr. Ahmad Irwandanu',
      identifier: {
        '@type': 'PropertyValue',
        name: 'STR (Surat Tanda Registrasi — Medical License)',
        value: 'QN00001073380217',
        url: EXTERNAL_VERIFICATION_URLS.doctorSip,
      },
      medicalSpecialty: 'Travel and Sports Medicine',
      worksFor: {
        '@type': 'MedicalOrganization',
        name: 'Klinik Bakti Husada',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bondowoso',
          addressRegion: 'East Java',
          addressCountry: 'Indonesia',
        },
      },
    },
    // What the screening measures
    bodyLocation: 'Cardiovascular system, Respiratory system',
    preparation: [
      'No heavy meals 2 hours before screening',
      'Adequate rest the night before',
      'Disclose any asthma, respiratory, or heart conditions',
    ],
    followUp:
      'Guests who do not meet the cardiovascular or respiratory thresholds will not be cleared for the Ijen trek. JVTO will offer a JVTO Travel Credit for rebooking.',
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Preventive Medicine',
    },
    partOfSystem: { '@id': ORGANIZATION_ID },
  };
}

/**
 * FAQPage schema — standardized builder for use across all pages.
 */
export function buildFAQSchema(faqs: { question: string; answer: string }[]): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * GovernmentPermit schemas for SPRIN credentials.
 * Provides machine-readable police authorization signals — not just text claims.
 */
export function buildGovernmentPermitSchemas(): JsonLdNode[] {
  return [
    {
      '@type': 'GovernmentPermit',
      '@id': `${BASE_URL}/#sprin-polpar`,
      name: 'SPRIN Tourist Police Escort Authorization (Polpar)',
      description:
        'Official SPRIN (Surat Perintah) authorizing Bripka Agung Sambuko to provide Tourist Police escort services in the East Java tourism region, including Kawah Ijen and Mount Bromo.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'SPRIN reference',
        value: 'SPRIN-POLPAR',
      },
      issuedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Ditpamobvit East Java — Indonesian National Police (Polri)',
        url: 'https://www.polri.go.id',
      },
      validFor: { '@id': FOUNDER_ID },
      subjectOf: mediaObject(
        'SPRIN Tourist Police Escort Authorization',
        PROOF_ASSETS.sprinPolparPdf,
        FORENSIC_HASHES.sprinPolpar,
        'application/pdf'
      ),
    },
    {
      '@type': 'GovernmentPermit',
      '@id': `${BASE_URL}/#sprin-wal-travel`,
      name: 'SPRIN Wal Travel — JVTO Official Travel Business Authorization',
      description:
        'Official SPRIN authorizing PT Java Volcano Rendezvous to operate as a licensed travel business entity in East Java (issued 2024-02-12).',
      identifier: {
        '@type': 'PropertyValue',
        name: 'SPRIN reference',
        value: 'SPRIN-WAL-TRAVEL-2024-02-12',
      },
      issuedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Indonesian National Police (Polri)',
        url: 'https://www.polri.go.id',
      },
      validFor: { '@id': ORGANIZATION_ID },
      subjectOf: mediaObject(
        'SPRIN Wal Travel Authorization 2024-02-12',
        PROOF_ASSETS.sprinWalTravelPdf,
        FORENSIC_HASHES.sprinWalTravel,
        'application/pdf'
      ),
    },
  ];
}

// ─── Component ────────────────────────────────────────────────────────────────

function normalizeData(data?: JsonLdNode | JsonLdNode[]): JsonLdNode[] {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}

export default function JsonLd({
  type = ['TravelAgency', 'LocalBusiness'],
  data,
  includeOrganization = true,
  includeWebSite = false,
}: JsonLdProps) {
  const graph = [
    ...(includeOrganization ? [buildOrganizationSchema(type)] : []),
    ...(includeWebSite ? [buildWebSiteSchema()] : []),
    ...normalizeData(data),
  ];

  const schema =
    graph.length === 1
      ? { '@context': 'https://schema.org', ...graph[0]! }
      : { '@context': 'https://schema.org', '@graph': graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

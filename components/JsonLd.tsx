import { SITE_CONFIG } from '@/lib/siteConfig';
import { CREW, type Destination, type Tour } from '@/lib/jvtoData';
import { EXTERNAL_VERIFICATION_URLS, FORENSIC_HASHES, PROOF_ASSETS } from '@/lib/verificationData';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';
import { SITE_LAYERS, getAllNavigationItems } from '@/lib/siteOrchestration';

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

function checkoutUrlForTour(tour: Tour): string {
  return `${BASE_URL}/checkout/${tour.slug}`;
}

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
    logo: `${BASE_URL}/logo.svg`,
    image: `${BASE_URL}/assets/img/hero/home.webp`,
    description: SITE_CONFIG.organization.description,

    hasMap: SITE_CONFIG.organization.address.mapUrl,

    // ── Contact point — enables AI agents to surface booking channels ──────
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.organization.phone,
      email: SITE_CONFIG.organization.email,
      contactType: 'Customer Service',
      availableLanguage: [
        { '@type': 'Language', name: 'English' },
        { '@type': 'Language', name: 'Indonesian' },
      ],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '22:00',
      },
    },

    // ── Legal identifiers ──────────────────────────────────────────────────
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'NIB (Nomor Induk Berusaha)',
        value: SITE_CONFIG.organization.nib,
        sameAs: EXTERNAL_VERIFICATION_URLS.oss,
      },
      {
        '@type': 'PropertyValue',
        name: 'TDUP Tourism Business License',
        value: SITE_CONFIG.organization.nib,
        sameAs: PROOF_ASSETS.tdupPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'AHU Company Registration',
        value: 'PT Java Volcano Rendezvous',
        sameAs: EXTERNAL_VERIFICATION_URLS.ahuCompany,
      },
    ],

    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'NIB public certificate',
        value: SITE_CONFIG.organization.nib,
        sameAs: PROOF_ASSETS.nibPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'TDUP tourism license document',
        value: SITE_CONFIG.organization.nib,
        sameAs: PROOF_ASSETS.tdupPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'HPWKI membership proof',
        value: 'Himpunan Pelaku Wisata Khusus Ijen',
        sameAs: PROOF_ASSETS.hpwkiPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'SPRIN Tourist Police Duty Context Proof (Polpar)',
        value: 'SPRIN-POLPAR',
        sameAs: PROOF_ASSETS.sprinPolparPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'SPRIN Wal Travel Business Authorization',
        value: 'SPRIN-WAL-TRAVEL-2024-02-12',
        sameAs: PROOF_ASSETS.sprinWalTravelPdf,
      },
      // ── SHA-256 forensic hashes — embedded directly per Audit Section 5.4 ──
      // Plain-text in JSON-LD so crawlers ingest without JS interaction
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: NIB-1102230032918.pdf',
        value: FORENSIC_HASHES.nib,
      },
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: TDUP-1102230032918.pdf',
        value: FORENSIC_HASHES.tdup,
      },
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: HPWKI-approval.pdf',
        value: FORENSIC_HASHES.hpwki,
      },
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: SPRIN-POLPAR.pdf',
        value: FORENSIC_HASHES.sprinPolpar,
      },
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: SPRIN-WAL-TRAVEL-2024-02-12.pdf',
        value: FORENSIC_HASHES.sprinWalTravel,
      },
    ],

    foundingDate: SITE_CONFIG.organization.foundingDate,

    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Agung Sambuko',
      honorificPrefix: 'Bripka',
      jobTitle: 'Founder and Tourist Police duty-context operator',
      description:
        'Agung Sambuko is the founder of JVTO. Indonesian press coverage documents his Bripka and Tourist Police duty context around Bondowoso and Ijen, which informs JVTO safety planning for private volcano tours.',
      image: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.organization.founder.image,
        caption: 'Agung Sambuko in Tourist Police duty context, Bondowoso, East Java.',
      },
      memberOf: {
        '@type': 'GovernmentOrganization',
        name: 'Indonesian National Police (Polri) - Tourist Police context',
        alternateName: 'Kepolisian Negara Republik Indonesia',
        url: 'https://www.polri.go.id',
        description:
          'Government organization context for Indonesian Tourist Police duty referenced by third-party media coverage.',
        sameAs: 'https://www.polri.go.id',
      },
      worksFor: { '@id': ORGANIZATION_ID },
      knowsAbout: [
        'Tourist safety coordination',
        'East Java volcano logistics',
        'Ijen crater hazard awareness',
        'Mount Bromo route planning',
        'Private tour risk management',
      ],
      sameAs: [
        EXTERNAL_VERIFICATION_URLS.detikPolice,
        EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
        EXTERNAL_VERIFICATION_URLS.radarJemberIjenPatrol,
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
    paymentAccepted: 'Credit Card, Debit Card, Bank Transfer, Wise, Cash by written approval',

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
      description: 'All-inclusive private volcano tour packages departing from Surabaya or Bali, supported by visible proof, private logistics, and route-specific safety preparation.',
      itemListElement: [
        { '@type': 'Offer', name: 'From Surabaya packages', url: `${BASE_URL}/tours/from-surabaya` },
        { '@type': 'Offer', name: 'From Bali packages', url: `${BASE_URL}/tours/from-bali` },
        {
          '@type': 'Offer',
          name: 'Ijen health screening coordination',
          url: `${BASE_URL}/travel-guide/ijen-health-screening`,
          itemOffered: {
            '@type': 'Service',
            '@id': MEDICAL_PROCEDURE_ID,
            name: 'Ijen health screening coordination',
            serviceType: 'Travel safety support',
            description:
              'JVTO helps Ijen guests complete a real local health screening workflow when the current access rule requires it, including blood pressure, heart-rate, and SpO2 readiness checks handled by medical partners.',
          },
        },
      ],
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.reputation.aggregateRating,
      reviewCount: SITE_CONFIG.reputation.totalReviews,
      bestRating: 5,
      worstRating: 1,
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
      mediaObject('SPRIN Tourist Police Duty Context Proof (Polpar)', PROOF_ASSETS.sprinPolparPdf, FORENSIC_HASHES.sprinPolpar, 'application/pdf'),
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

      // Per GEO Blueprint Section 4: use schema-specific expertise tags when defined,
      // otherwise fall back to highlights-derived tags. Prevents AI from missing
      // crew specialties (e.g. Gufron's "Volcano Photography", Anjas's "Astrophotography")
      const resolvedKnowsAbout = member.schemaKnowsAbout ?? [...knowsAboutBase, ...knowsAboutExtra];

      // Per GEO Blueprint Section 4: use schema-specific job titles when defined
      // (e.g. Anjas = "Senior Tour Guide & Photography Specialist", Rendi = "Lead Guide & Safety Officer")
      const resolvedJobTitle =
        member.schemaJobTitle ??
        (isGuide ? `Senior Tour Guide — ${member.archetype}` : `Professional Tour Driver — ${member.archetype}`);

      const node: JsonLdNode = {
        '@type': 'Person',
        '@id': `${BASE_URL}/#crew-${member.id}`,
        name: member.name,
        jobTitle: resolvedJobTitle,
        description: member.about || `${member.role} at Java Volcano Tour Operator. Specialties: ${member.highlights}.`,
        knowsAbout: resolvedKnowsAbout,
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
    hasPart: SITE_LAYERS.map((layer) => ({
      '@type': 'WebPage',
      name: layer.name,
      description: layer.role,
      url: `${BASE_URL}${layer.primaryRoutes[0] === '/' ? '' : layer.primaryRoutes[0]}`,
    })),
  };
}

// ─── Exported builders for page-level use ────────────────────────────────────

export function buildSiteNavigationSchema(): JsonLdNode {
  return {
    '@type': 'ItemList',
    '@id': `${BASE_URL}/#site-navigation`,
    name: 'JVTO site navigation by user intent',
    itemListElement: getAllNavigationItems().map((item, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: item.label,
      description: item.description,
      url: item.href.startsWith('http') ? item.href : `${BASE_URL}${item.href}`,
    })),
  };
}

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
        value: 'Current Ijen access rules can require a recent local health certificate. JVTO coordinates clinic-based screening support and provides professional dual-filter gas masks.',
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
          name: 'Health screening coordination',
          value: true,
          description: 'Clinic-based readiness support for Ijen guests when current access rules require a recent local health certificate.',
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
      availability: 'https://schema.org/LimitedAvailability',
      url: checkoutUrlForTour(tour),
      seller: { '@id': ORGANIZATION_ID },
      description: `Price per person from published tier table. Direct checkout starts on the package-specific checkout page and confirmation follows JVTO payment and voucher policy.`,
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: checkoutUrlForTour(tour),
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: `${tour.name} private tour booking`,
        },
      },
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

  // Ijen-specific safety constraints.
  if (hasIjen) {
    schema.healthRequirement =
      'Kawah Ijen routes require health-screening readiness and compliance with current local access rules. Guests with asthma, respiratory conditions, or cardiovascular issues should consult a medical professional before attempting the hike.';
    schema.amenityFeature = [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Professional Dual-Filter Gas Mask',
        value: true,
        description: 'Provided by JVTO for all Ijen Crater guests. Filters Sulfur Dioxide (SO₂) and particulate matter.',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Health screening coordination',
        value: true,
        description: 'JVTO helps guests complete local clinic screening when required by current Ijen access rules.',
      },
    ];
    schema.touristType = 'Adventure travelers with suitable respiratory and cardiovascular readiness';
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
 * Direct checkout page schemas.
 * Models the booking flow as a HowTo + ReserveAction, without implying that
 * payment is confirmed before JVTO issues the Official E-Voucher / Invoice.
 */
export function buildDirectCheckoutSchemas(tour: Tour): JsonLdNode[] {
  const checkoutUrl = checkoutUrlForTour(tour);

  return [
    {
      '@type': 'WebPage',
      '@id': `${checkoutUrl}#webpage`,
      url: checkoutUrl,
      name: `Direct Checkout - ${tour.name}`,
      description:
        'Package-specific direct checkout bridge showing travel date, group size, deposit, balance, policy precedence, and Official E-Voucher confirmation logic.',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': `${BASE_URL}/tours/${tour.slug}#trip` },
      potentialAction: {
        '@type': 'ReserveAction',
        target: checkoutUrl,
        instrument: 'JVTO secure checkout link or approved payment method',
        result: 'Official E-Voucher / Invoice PDF after approved payment',
      },
    },
    {
      '@type': 'HowTo',
      '@id': `${checkoutUrl}#how-to-book`,
      name: `How to book ${tour.name} with JVTO`,
      description: BOOKING_POLICY.confirmationRule,
      totalTime: 'PT10M',
      supply: [
        'Lead guest name',
        'Verified email address',
        'Active WhatsApp number',
        'Preferred travel date',
        'Group size',
        'Pickup and drop-off details',
      ],
      step: BOOKING_POLICY.howToBook.map((text, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: `Step ${index + 1}`,
        text,
      })),
    },
    {
      '@type': 'ReserveAction',
      '@id': `${checkoutUrl}#reserve-action`,
      agent: { '@id': ORGANIZATION_ID },
      object: { '@id': `${BASE_URL}/tours/${tour.slug}#trip` },
      target: checkoutUrl,
      result: {
        '@type': 'Reservation',
        name: `${tour.name} private tour booking`,
        reservationStatus: 'https://schema.org/ReservationPending',
      },
    },
  ];
}

/**
 * Service schema for Ijen health screening coordination.
 * JVTO facilitates the workflow; medical partners perform the actual check.
 */
export function buildIjenHealthScreeningServiceSchema(): JsonLdNode {
  return {
    '@type': 'Service',
    '@id': MEDICAL_PROCEDURE_ID,
    name: 'Ijen health screening coordination',
    serviceType: 'Travel safety support',
    description:
      'JVTO helps Ijen guests complete a real local health screening workflow when the current access rule requires it. The check is handled through medical partners and can include blood pressure, heart-rate, and SpO2 readiness checks before the Ijen ascent.',
    url: `${BASE_URL}/travel-guide/ijen-health-screening`,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'TouristDestination',
      name: 'Kawah Ijen (Ijen Crater)',
    },
    serviceOutput: [
      'Local health-certificate assistance when required by current access rules',
      'Blood-pressure readiness check',
      'Heart-rate readiness check',
      'SpO2 readiness check when performed by the clinic',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Ijen Crater guests',
    },
    subjectOf: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/travel-guide/ijen-health-screening#webpage`,
      url: `${BASE_URL}/travel-guide/ijen-health-screening`,
    },
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
 * Police-safety proof schemas for SPRIN and press references.
 * These are proof objects, not a claim that JVTO itself is a government service.
 */
export function buildPoliceSafetyProofSchemas(): JsonLdNode[] {
  return [
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#sprin-polpar`,
      name: 'SPRIN POLPAR proof document',
      description:
        'SPRIN POLPAR proof asset used to corroborate the Tourist Police duty context behind JVTO safety planning.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'SPRIN reference',
        value: 'SPRIN-POLPAR',
      },
      about: { '@id': FOUNDER_ID },
      subjectOf: mediaObject(
        'SPRIN POLPAR document',
        PROOF_ASSETS.sprinPolparPdf,
        FORENSIC_HASHES.sprinPolpar,
        'application/pdf'
      ),
    },
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#sprin-wal-travel`,
      name: 'SPRIN WAL travel coordination proof document',
      description:
        'SPRIN WAL travel coordination proof asset supporting JVTO operational coordination context.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'SPRIN reference',
        value: 'SPRIN-WAL-TRAVEL-2024-02-12',
      },
      about: { '@id': ORGANIZATION_ID },
      subjectOf: mediaObject(
        'SPRIN WAL travel coordination document',
        PROOF_ASSETS.sprinWalTravelPdf,
        FORENSIC_HASHES.sprinWalTravel,
        'application/pdf'
      ),
    },
  ];
}

/**
 * Government Permit schemas for legal credentials.
 * Converts static license images into machine-readable forensic proof.
 * Each permit includes SHA-256 hash for verification integrity.
 */
export function buildGovernmentPermitSchemas(): JsonLdNode[] {
  return [
    {
      '@type': 'GovernmentPermit',
      '@id': `${BASE_URL}/#permit-nib`,
      name: 'NIB Business License',
      description: 'Nomor Induk Berusaha (NIB) - Indonesian Business Registration Number for PT Java Volcano Rendezvous.',
      identifier: SITE_CONFIG.organization.nib,
      issuedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Government of Indonesia (Pemerintah Republik Indonesia)',
        url: EXTERNAL_VERIFICATION_URLS.oss,
      },
      dateIssued: '2023-02-08',
      image: {
        '@type': 'ImageObject',
        url: PROOF_ASSETS.nibPreview,
        sha256: FORENSIC_HASHES.nib,
      },
      url: PROOF_ASSETS.nibPdf,
    },
    {
      '@type': 'GovernmentPermit',
      '@id': `${BASE_URL}/#permit-tdup`,
      name: 'TDUP Tourism Business License',
      description: 'Tanda Daftar Usaha Pariwisata (TDUP) - Tourism business registration issued by Indonesian Ministry of Tourism.',
      identifier: SITE_CONFIG.organization.nib,
      issuedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Ministry of Tourism, Republic of Indonesia',
        alternateName: 'Kementerian Pariwisata dan Ekonomi Kreatif',
      },
      image: {
        '@type': 'ImageObject',
        url: PROOF_ASSETS.tdupPreview,
        sha256: FORENSIC_HASHES.tdup,
      },
      url: PROOF_ASSETS.tdupPdf,
    },
    {
      '@type': 'GovernmentPermit',
      '@id': `${BASE_URL}/#permit-hpwki`,
      name: 'HPWKI Ijen Tourism Specialization',
      description:
        'Membership in Himpunan Pelaku Wisata Khusus Ijen (HPWKI) - official Ijen tourism association. Members receive technical training from BBKSDA on toxic gas handling and evacuation procedures.',
      identifier: 'HPWKI-Membership',
      issuedBy: {
        '@type': 'Organization',
        name: 'HPWKI (Himpunan Pelaku Wisata Khusus Ijen)',
        description: 'State-recognized Ijen tourism association',
      },
      image: {
        '@type': 'ImageObject',
        url: PROOF_ASSETS.hpwkiPreview,
        sha256: FORENSIC_HASHES.hpwki,
      },
      url: PROOF_ASSETS.hpwkiPdf,
    },
  ];
}

/**
 * Government Service schemas for operational authority.
 * Documents specialized training, certifications, and safety protocols.
 */
export function buildGovernmentServiceSchemas(): JsonLdNode[] {
  return [
    {
      '@type': 'GovernmentService',
      '@id': `${BASE_URL}/#service-ijen-specialization`,
      name: 'Ijen Specialization & Volcanic Safety Training',
      description:
        'JVTO guides are trained members of HPWKI with specialized knowledge of Ijen crater hazards, toxic gas protocols, and visitor safety. Training provided through BBKSDA (Balai Besar Kawasan Suaka Alam Daratan Jatim).',
      serviceType: 'Specialized tour guide training',
      provider: {
        '@type': 'Organization',
        name: 'BBKSDA Jatim (Conservation Authority)',
        url: EXTERNAL_VERIFICATION_URLS.bbksdaTraining,
      },
      areaServed: {
        '@type': 'TouristDestination',
        name: 'Kawah Ijen (Ijen Crater)',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -8.0584,
          longitude: 114.242,
        },
      },
      availableLanguage: ['Indonesian', 'English'],
      audience: { '@type': 'Audience', audienceType: 'Tour operators and guides' },
    },
    {
      '@type': 'GovernmentService',
      '@id': `${BASE_URL}/#service-sar-training`,
      name: 'Search and Rescue & First Aid Training',
      description:
        'JVTO leadership receives SAR and first-aid training from BBKSDA and conservation authorities to ensure emergency preparedness on volcano expeditions.',
      serviceType: 'Emergency response training',
      provider: {
        '@type': 'GovernmentOrganization',
        name: 'BBKSDA Jatim (Balai Besar Kawasan Suaka Alam Daratan Jatim)',
        url: EXTERNAL_VERIFICATION_URLS.bbksdaTraining,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'East Java',
        identifier: 'ISO 3166-2:ID-JI',
      },
      availableLanguage: ['Indonesian'],
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

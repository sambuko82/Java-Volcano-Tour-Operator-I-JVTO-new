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
const IJEN_SCREENING_SERVICE_ID = `${BASE_URL}/#ijen-health-screening`;
const PHYSICIAN_ID = `${BASE_URL}/#doctor-ahmad-irwandanu`;
const BOOK_STEFAN_LOOSE_ID = `${BASE_URL}/#book-stefan-loose`;
const PRESS_DETIK_ID = `${BASE_URL}/#press-detik-2021`;
const PRESS_RADAR_JEMBER_ID = `${BASE_URL}/#press-radar-jember-2021`;

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
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: BBKSDA-SE-1658.pdf',
        value: FORENSIC_HASHES.bbksdaSe1658,
      },
      {
        '@type': 'PropertyValue',
        name: 'SHA-256: health-screening-sample.pdf',
        value: FORENSIC_HASHES.healthScreeningSample,
      },
    ],

    foundingDate: SITE_CONFIG.organization.foundingDate,

    // Cross-reference to separate @graph node — avoids duplication
    founder: { '@id': FOUNDER_ID },
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
            '@id': IJEN_SCREENING_SERVICE_ID,
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

    subjectOf: [
      mediaObject('NIB certificate 1102230032918', PROOF_ASSETS.nibPdf, FORENSIC_HASHES.nib, 'application/pdf'),
      mediaObject('TDUP tourism license 1102230032918', PROOF_ASSETS.tdupPdf, FORENSIC_HASHES.tdup, 'application/pdf'),
      mediaObject('HPWKI membership proof', PROOF_ASSETS.hpwkiPdf, FORENSIC_HASHES.hpwki, 'application/pdf'),
      mediaObject('SPRIN Tourist Police Duty Context Proof (Polpar)', PROOF_ASSETS.sprinPolparPdf, FORENSIC_HASHES.sprinPolpar, 'application/pdf'),
      mediaObject('SPRIN Wal Travel Authorization 2024-02-12', PROOF_ASSETS.sprinWalTravelPdf, FORENSIC_HASHES.sprinWalTravel, 'application/pdf'),
      mediaObject('BBKSDA Ijen Health Certificate Mandate (SE-1658)', PROOF_ASSETS.bbksdaSe1658, FORENSIC_HASHES.bbksdaSe1658, 'application/pdf'),
      mediaObject('JVTO Operational Office Proof', PROOF_ASSETS.officePhoto, 'fa5d...82c', 'image/jpeg'),
      { '@id': BOOK_STEFAN_LOOSE_ID },
      // Cross-reference to named press article nodes in @graph
      { '@id': PRESS_DETIK_ID },
      { '@id': PRESS_RADAR_JEMBER_ID },
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
        node.subjectOf = {
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
 * Encodes route readiness, touristType, and pricing for AEO.
 * Per JVTO_PACKAGE_SCHEMA_MAP.md — Tier 1/2 package schema
 */
export function buildTourPackageSchema(tour: Tour): JsonLdNode {
  const hasIjen = tour.ijenRelevant ?? tour.destinations.includes('ijen-crater');
  const hasBromo = tour.destinations.includes('mount-bromo');

  const schema: JsonLdNode = {
    '@type': ['Product', 'TouristTrip'],
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

  // Ijen-specific safety constraints and support linkage
  if (hasIjen) {
    schema.additionalProperty = [
      ...((schema.additionalProperty as JsonLdNode[] | undefined) ?? []),
      {
        '@type': 'PropertyValue',
        name: 'Ijen health screening readiness',
        value:
          'Kawah Ijen routes require health-screening readiness and compliance with current local access rules. Guests with asthma, respiratory conditions, or cardiovascular issues should consult a medical professional before attempting the hike.',
      },
      {
        '@type': 'PropertyValue',
        name: 'Professional dual-filter gas mask',
        value: 'Included for Ijen Crater guests',
        description: 'Provided by JVTO for all Ijen Crater guests. Filters Sulfur Dioxide (SO₂) and particulate matter.',
      },
      {
        '@type': 'PropertyValue',
        name: 'Health screening coordination',
        value: 'Local clinic screening coordination when current Ijen access rules require it',
        description: 'JVTO helps guests complete local clinic screening when required by current Ijen access rules.',
      },
    ];
    schema.touristType = 'Adventure travelers with suitable respiratory and cardiovascular readiness';

    // Add support page reference for Ijen packages
    const ijenSupportLinks = {
      '@type': 'ItemList',
      name: 'Ijen Route Support Resources',
      url: `${BASE_URL}/tours/${tour.slug}#support-resources`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'WebPage',
            name: 'Ijen Health Screening Guide',
            url: `${BASE_URL}/travel-guide/ijen-health-screening`,
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'WebPage',
            name: 'Weather & Closure Status',
            url: `${BASE_URL}/travel-guide/weather-and-closures`,
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'WebPage',
            name: 'Police Safety Verification',
            url: `${BASE_URL}/verify-jvto/police-safety`,
          },
        },
      ],
    };

    schema.subjectOf = Array.isArray(schema.subjectOf)
      ? [...(schema.subjectOf as JsonLdNode[]), ijenSupportLinks]
      : [schema.subjectOf as JsonLdNode, ijenSupportLinks].filter(Boolean);
  }

  if (hasBromo) {
    const bromo: JsonLdNode = {
      name: '4WD Bromo Jeep',
      description: 'Dedicated private 4WD Jeep for Bromo Sea of Sand crossing and sunrise viewpoint access. Included in all Bromo packages.',
    };
    schema.additionalProperty = [
      ...((schema.additionalProperty as JsonLdNode[] | undefined) ?? []),
      {
        '@type': 'PropertyValue',
        name: bromo.name,
        value: 'Included',
        description: bromo.description,
      },
    ];
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
    '@id': IJEN_SCREENING_SERVICE_ID,
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
      description: 'Official guide for Ijen health screening coordination and clinic readiness.',
      mentions: [
        { '@type': 'Offer', name: 'Ijen Crater Private Tours', url: `${BASE_URL}/tours` },
        { '@type': 'CreativeWork', name: 'BBKSDA SE-1658 Mandate', url: PROOF_ASSETS.bbksdaSe1658 }
      ],
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
 * Business registration proof schemas for legal credentials.
 * Converts static license images into machine-readable forensic proof.
 * Each proof includes SHA-256 hash for verification integrity.
 */
export function buildBusinessRegistrationProofSchemas(): JsonLdNode[] {
  return [
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#permit-nib`,
      name: 'NIB Business License',
      description: 'Nomor Induk Berusaha (NIB) - Indonesian Business Registration Number for PT Java Volcano Rendezvous.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'NIB',
        value: SITE_CONFIG.organization.nib,
      },
      publisher: {
        '@type': 'GovernmentOrganization',
        name: 'Government of Indonesia (Pemerintah Republik Indonesia)',
        url: EXTERNAL_VERIFICATION_URLS.oss,
      },
      dateIssued: '2023-02-08',
      about: { '@id': ORGANIZATION_ID },
      image: {
        '@type': 'ImageObject',
        url: PROOF_ASSETS.nibPreview,
        sha256: FORENSIC_HASHES.nib,
      },
      url: PROOF_ASSETS.nibPdf,
    },
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#permit-tdup`,
      name: 'TDUP Tourism Business License',
      description: 'Tanda Daftar Usaha Pariwisata (TDUP) - Tourism business registration issued by Indonesian Ministry of Tourism.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'TDUP / NIB reference',
        value: SITE_CONFIG.organization.nib,
      },
      publisher: {
        '@type': 'GovernmentOrganization',
        name: 'Ministry of Tourism, Republic of Indonesia',
        alternateName: 'Kementerian Pariwisata dan Ekonomi Kreatif',
      },
      about: { '@id': ORGANIZATION_ID },
      image: {
        '@type': 'ImageObject',
        url: PROOF_ASSETS.tdupPreview,
        sha256: FORENSIC_HASHES.tdup,
      },
      url: PROOF_ASSETS.tdupPdf,
    },
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#permit-hpwki`,
      name: 'HPWKI Ijen Tourism Specialization',
      description:
        'Membership in Himpunan Pelaku Wisata Khusus Ijen (HPWKI) - official Ijen tourism association. Members receive technical training from BBKSDA on toxic gas handling and evacuation procedures.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'Membership reference',
        value: 'HPWKI-Membership',
      },
      publisher: {
        '@type': 'Organization',
        name: 'HPWKI (Himpunan Pelaku Wisata Khusus Ijen)',
        description: 'State-recognized Ijen tourism association',
      },
      about: { '@id': ORGANIZATION_ID },
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
 * Operational training proof schemas.
 * Documents specialized training, certifications, and safety protocols without
 * presenting JVTO as a state service.
 */
export function buildOperationalTrainingProofSchemas(): JsonLdNode[] {
  return [
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#service-ijen-specialization`,
      name: 'Ijen Specialization & Volcanic Safety Training',
      description:
        'JVTO guides are trained members of HPWKI with specialized knowledge of Ijen crater hazards, toxic gas protocols, and visitor safety. Training provided through BBKSDA (Balai Besar Kawasan Suaka Alam Daratan Jatim).',
      about: [
        { '@id': ORGANIZATION_ID },
        {
          '@type': 'TouristDestination',
          name: 'Kawah Ijen (Ijen Crater)',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -8.0584,
            longitude: 114.242,
          },
        },
      ],
      publisher: {
        '@type': 'Organization',
        name: 'BBKSDA Jatim (Conservation Authority)',
        url: EXTERNAL_VERIFICATION_URLS.bbksdaTraining,
      },
      inLanguage: ['id', 'en'],
      audience: { '@type': 'Audience', audienceType: 'Tour operators and guides' },
    },
    {
      '@type': 'CreativeWork',
      '@id': `${BASE_URL}/#service-sar-training`,
      name: 'Search and Rescue & First Aid Training',
      description:
        'JVTO leadership receives SAR and first-aid training from BBKSDA and conservation authorities to ensure emergency preparedness on volcano expeditions.',
      about: [
        { '@id': ORGANIZATION_ID },
        {
          '@type': 'AdministrativeArea',
          name: 'East Java',
          identifier: 'ISO 3166-2:ID-JI',
        },
      ],
      publisher: {
        '@type': 'GovernmentOrganization',
        name: 'BBKSDA Jatim (Balai Besar Kawasan Suaka Alam Daratan Jatim)',
        url: EXTERNAL_VERIFICATION_URLS.bbksdaTraining,
      },
      inLanguage: 'id',
    },
  ];
}

/**
 * Trust Domain Reference schema for page-level trust implementation.
 * Maps claims to their canonical evidence assets and page owners.
 * Per JVTO_TRUST_GRAPH_MAP.md
 */
export function buildTrustDomainReferences(): JsonLdNode {
  return {
    '@type': 'ItemList',
    '@id': `${BASE_URL}/#trust-domains`,
    name: 'JVTO Trust Domains',
    description: 'Canonical trust domain mappings for JVTO with claim ownership, evidence assets, and page ownership.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Founder Authority',
        description: 'Founder identity, police context, leadership trust',
        url: `${BASE_URL}/#founder-agung-sambuko`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Operational Safety',
        description: 'Safety-led operations, route discipline, closures',
        url: `${BASE_URL}/why-jvto/community-standards`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Private Execution Control',
        description: 'Private tours, timing control, dedicated handling',
        url: `${BASE_URL}/policy/inclusions-exclusions`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'All-Inclusive Clarity',
        description: 'Transparent inclusions/exclusions, booking/payment rules',
        url: `${BASE_URL}/policy/booking-payment-cancellation`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Ijen Health Screening',
        description: 'Health/safety protocol for Ijen routes',
        url: `${BASE_URL}/travel-guide/ijen-health-screening`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Proof-First Verification',
        description: 'Legal, police, medical, partner, press, historical proof',
        url: `${BASE_URL}/verify-jvto`,
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Reviews Registry',
        description: 'Independent platform-based validation',
        url: `${BASE_URL}/why-jvto/reviews`,
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Team / Crew Expertise',
        description: 'Human execution quality, micro-entities, role credibility',
        url: `${BASE_URL}/why-jvto/our-team`,
      },
      {
        '@type': 'ListItem',
        position: 9,
        name: 'Partnerships / Recognition',
        description: 'HPWKI / INDECON / ISIC / press / history context',
        url: `${BASE_URL}/verify-jvto`,
      },
    ],
  };
}

/**
 * Enhanced package schema with trust support linkage for Ijen packages.
 * Adds support page references and trust context for Ijen-relevant routes.
 */
export function buildIjenPackageSupportLinks(slug: string): JsonLdNode {
  return {
    '@type': 'ItemList',
    '@id': `${BASE_URL}/tours/${slug}#support-links`,
    name: 'Ijen Route Support Resources',
    description: 'Trust and operational support pages specifically for Ijen Crater routes',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Health Screening Coordination',
        url: `${BASE_URL}/travel-guide/ijen-health-screening`,
        description: 'Learn about health-certificate coordination and clinic procedures',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Weather & Closure Status',
        url: `${BASE_URL}/travel-guide/weather-and-closures`,
        description: 'Check current Ijen status, weather patterns, and access rules',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Police Safety Context',
        url: `${BASE_URL}/verify-jvto/police-safety`,
        description: 'Founder police context and safety coordination proof',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Verify JVTO',
        url: `${BASE_URL}/verify-jvto`,
        description: 'Full legal and operational credential verification',
      },
    ],
  };
}

// ─── Standalone @graph node builders (for homepage @graph composition) ────────

/**
 * Founder as a separate @graph node.
 * Cross-referenced from org schema via founder: { '@id': FOUNDER_ID }.
 * Separating this node allows search engines to resolve the Person entity
 * independently and link it to press coverage and police duty context.
 */
export function buildFounderSchema(): JsonLdNode {
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Agung Sambuko',
    alternateName: 'Mr. Sam',
    honorificPrefix: 'Bripka',
    jobTitle: 'Founder & Active Tourist Police Officer',
    description:
      'Agung Sambuko is the founder of JVTO. Indonesian press coverage documents his Bripka rank and Tourist Police (Ditpamobvit) duty context around Bondowoso and Ijen, informing JVTO safety planning for private volcano tours.',
    image: {
      '@type': 'ImageObject',
      url: SITE_CONFIG.organization.founder.image,
      caption: 'Agung Sambuko — Founder of JVTO and active Tourist Police officer, Bondowoso, East Java.',
    },
    memberOf: {
      '@type': 'GovernmentOrganization',
      name: 'Indonesian National Police (Polri)',
      alternateName: 'Kepolisian Negara Republik Indonesia',
      url: 'https://www.polri.go.id',
      sameAs: 'https://www.polri.go.id',
      subOrganization: {
        '@type': 'GovernmentOrganization',
        name: 'Ditpamobvit (Directorate of Vital Object Security and Tourism Police)',
        description: 'East Java Tourist Police unit — coordinates visitor safety and volcanic route monitoring.',
      },
    },
    worksFor: { '@id': ORGANIZATION_ID },
    knowsAbout: [
      'Tourist safety coordination',
      'East Java volcano logistics',
      'Ijen crater hazard awareness',
      'Mount Bromo route planning',
      'Private tour risk management',
      'Volcanic contingency planning',
    ],
    // Corroborated by named press nodes in @graph
    subjectOf: { '@id': PRESS_DETIK_ID },
    sameAs: [
      EXTERNAL_VERIFICATION_URLS.detikPolice,
      EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
      EXTERNAL_VERIFICATION_URLS.radarJemberIjenPatrol,
    ],
  };
}

/**
 * Backwards-compatible builder for callers that still import the old name.
 * The output is intentionally Service-based because JVTO coordinates travel
 * readiness; licensed medical partners perform the actual clinical checks.
 */
export function buildMedicalBusinessSchema(): JsonLdNode {
  return buildIjenHealthScreeningServiceSchema();
}

/**
 * Licensed physician as a separate Physician @graph node.
 * Cross-referenced from MedicalBusiness via employee: { '@id': PHYSICIAN_ID }.
 * STR (medical council registration) is publicly verifiable via SatuSehat SDMK.
 */
export function buildPhysicianSchema(): JsonLdNode {
  return {
    '@type': ['Person', 'Physician'],
    '@id': PHYSICIAN_ID,
    name: 'dr. Ahmad Irwandanu',
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'SIP',
        name: 'Surat Izin Praktik (Practice License)',
        value: '503.446/193/DRU/4/430.9.13/2020',
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'STR',
        name: 'Surat Tanda Registrasi (Registration Certificate)',
        value: 'QN00001073380217',
        url: EXTERNAL_VERIFICATION_URLS.doctorSip,
      },
    ],
    affiliation: {
      '@type': 'MedicalOrganization',
      name: 'Konsil Kesehatan Indonesia (KKI)',
      alternateName: 'Indonesian Health Council',
      description: 'Government body that issues and verifies physician STR credentials in Indonesia.',
    },
    memberOf: { '@id': IJEN_SCREENING_SERVICE_ID },
    url: EXTERNAL_VERIFICATION_URLS.doctorSip,
  };
}

/**
 * Stefan Loose guidebook as a separate Book @graph node.
 * Cross-referenced from org schema via subjectOf.
 * Independent editorial authority — not a paid listing.
 */
export function buildBookCitationNode(): JsonLdNode {
  return {
    '@type': 'Book',
    '@id': BOOK_STEFAN_LOOSE_ID,
    name: 'Stefan Loose Reiseführer Indonesien',
    isbn: '978-3-7701-7881-0',
    bookEdition: '4th Edition',
    datePublished: '2018',
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
    about: { '@id': ORGANIZATION_ID },
    image: {
      '@type': 'ImageObject',
      url: PROOF_ASSETS.stefanLoosePage,
      caption: 'Stefan Loose Reiseführer Indonesien — Page 287, Ijen-Massiv section.',
      sha256: FORENSIC_HASHES.stefanLoosePage287,
    },
  };
}

/**
 * Detik.com press article as a separate NewsArticle @graph node.
 * Cross-referenced from org/founder schema via subjectOf: [{ '@id': PRESS_DETIK_ID }].
 * National media corroboration of founder police duty context.
 */
export function buildDetikPressNode(): JsonLdNode {
  return {
    '@type': 'NewsArticle',
    '@id': PRESS_DETIK_ID,
    headline: 'Suka Duka Polisi Pariwisata Bondowoso: Tegakkan Prokes Sambil Lawan Dingin',
    url: EXTERNAL_VERIFICATION_URLS.detikPolice,
    datePublished: '2021-03-14',
    inLanguage: 'id',
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Detik.com',
      url: 'https://detik.com',
    },
    about: { '@id': FOUNDER_ID },
    image: {
      '@type': 'ImageObject',
      url: PROOF_ASSETS.detikScreenshot,
      sha256: FORENSIC_HASHES.detikCoverage2021,
      caption: 'Screenshot of Detik.com article — Suka Duka Polisi Pariwisata Bondowoso, 2021.',
    },
  };
}

/**
 * Radar Jember press article as a separate NewsArticle @graph node.
 * Cross-referenced from org schema via subjectOf: [{ '@id': PRESS_RADAR_JEMBER_ID }].
 */
export function buildRadarJemberPressNode(): JsonLdNode {
  return {
    '@type': 'NewsArticle',
    '@id': PRESS_RADAR_JEMBER_ID,
    headline: 'Polpar Dibentuk untuk Mendukung Ijen Geopark',
    url: EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
    datePublished: '2021-03-24',
    inLanguage: 'id',
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Radar Jember / Jawa Pos',
      url: 'https://radarjember.jawapos.com',
    },
    about: { '@id': FOUNDER_ID },
    image: {
      '@type': 'ImageObject',
      url: PROOF_ASSETS.radarJemberScreenshot,
      sha256: FORENSIC_HASHES.radarJemberPolpar2021,
      caption: 'Screenshot of Radar Jember article — Polpar Dibentuk untuk Mendukung Ijen Geopark, 2021.',
    },
  };
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

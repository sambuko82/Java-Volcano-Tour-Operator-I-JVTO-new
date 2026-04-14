import { SITE_CONFIG } from '@/lib/siteConfig';
import { CREW } from '@/lib/jvtoData';
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

function mediaObject(name: string, contentUrl: string, sha256: string, encodingFormat: string): JsonLdNode {
  return {
    '@type': 'MediaObject',
    name,
    contentUrl,
    encodingFormat,
    sha256,
  };
}

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
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'NIB (Nomor Induk Berusaha)',
        value: SITE_CONFIG.organization.nib,
      },
      {
        '@type': 'PropertyValue',
        name: 'TDUP tourism license',
        value: SITE_CONFIG.organization.nib,
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
        name: 'TDUP tourism license',
        value: SITE_CONFIG.organization.nib,
        url: PROOF_ASSETS.tdupPdf,
      },
      {
        '@type': 'PropertyValue',
        name: 'HPWKI membership proof',
        value: 'Himpunan Pelaku Wisata Khusus Ijen',
        url: PROOF_ASSETS.hpwkiPdf,
      },
    ],
    foundingDate: SITE_CONFIG.organization.foundingDate,
    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: SITE_CONFIG.organization.founder.name,
      jobTitle: SITE_CONFIG.organization.founder.title,
      description: 'Active-duty Bripka at Ditpamobvit, East Java. Founded JVTO with a safety-led operating discipline.',
      image: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.organization.founder.image,
        caption: 'Agung Sambuko on duty with Tourist Police, Bondowoso.',
      },
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
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'East Java, Indonesia' },
      { '@type': 'TouristDestination', name: 'Mount Bromo' },
      { '@type': 'TouristDestination', name: 'Ijen Crater' },
      { '@type': 'TouristDestination', name: 'Tumpak Sewu' },
    ],
    knowsAbout: [
      'Private East Java tours',
      'Mount Bromo logistics',
      'Ijen Crater health screening',
      'Tumpak Sewu trekking logistics',
      'Tourist Police safety coordination',
      'Volcano route contingency planning',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'HPWKI (Himpunan Pelaku Wisata Khusus Ijen)',
        url: EXTERNAL_VERIFICATION_URLS.ahuHpwki,
        description: 'State-recognized Ijen tourism association context for volcanic safety competence.',
      },
      {
        '@type': 'Organization',
        name: 'International Student Identity Card',
        url: SITE_CONFIG.reputation.isic,
        description: 'Global student verification network and student-benefit partner profile.',
      },
      {
        '@type': 'Organization',
        name: 'Indonesian Ecotourism Network',
        url: SITE_CONFIG.reputation.indecon,
        description: 'Ecotourism network context for community-based tourism and local employment.',
      },
    ],
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
      description: 'German-language travel guide reference from the Ijen Bondowoso Homestay era, before JVTO became a full destination operator.',
      url: EXTERNAL_VERIFICATION_URLS.stefanLoose,
      inLanguage: 'de',
    },
    subjectOf: [
      mediaObject('NIB certificate 1102230032918', PROOF_ASSETS.nibPdf, FORENSIC_HASHES.nib, 'application/pdf'),
      mediaObject('TDUP tourism license 1102230032918', PROOF_ASSETS.tdupPdf, FORENSIC_HASHES.tdup, 'application/pdf'),
      mediaObject('HPWKI membership proof', PROOF_ASSETS.hpwkiPdf, FORENSIC_HASHES.hpwki, 'application/pdf'),
      {
        '@type': 'NewsArticle',
        headline: 'Suka Duka Polisi Pariwisata Bondowoso Tegakkan Prokes Sambil Lawan Dingin',
        url: EXTERNAL_VERIFICATION_URLS.detikPolice,
        datePublished: '2021-03-14',
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: 'Detik.com',
        },
        about: { '@id': FOUNDER_ID },
      },
      {
        '@type': 'NewsArticle',
        headline: 'Polpar Dibentuk untuk Mendukung Ijen Geopark',
        url: EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
        datePublished: '2021-03-24',
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: 'Radar Jember',
        },
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
    employee: CREW.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.about || member.highlights,
      knowsAbout: member.highlights.split(',').map((h: string) => h.trim()),
      ...(member.kta
        ? {
            identifier: {
              '@type': 'PropertyValue',
              name: 'KTA (Ijen Guide License)',
              value: member.kta,
            },
          }
        : {}),
    })),
  };
}

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

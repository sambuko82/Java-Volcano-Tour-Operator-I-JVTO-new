export type SiteLayerId =
  | 'trust-entry'
  | 'route-discovery'
  | 'package-conversion'
  | 'operational-support'
  | 'proof-ownership';

export interface SiteLayer {
  id: SiteLayerId;
  name: string;
  role: string;
  primaryRoutes: string[];
  userQuestion: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  description: string;
}

export interface NavigationCluster {
  id: 'discovery' | 'trust' | 'prepare-book' | 'rules-contact';
  label: string;
  role: string;
  items: NavigationItem[];
}

export interface SupportGroup {
  id: string;
  label: string;
  role: string;
  links: NavigationItem[];
}

export interface TrustGraphGroup {
  id: string;
  label: string;
  role: string;
  ownerRoutes: string[];
}

export const NORTH_STAR_STATEMENT =
  'Upgrade JVTO significantly through improve-in-place execution: keep the live/data baseline, strengthen route logic, proof, trust, support, and package-first booking confidence.';

export const CONTENT_HIERARCHY = [
  'Why JVTO is different',
  'Which route or package fits',
  'What the trip actually feels like',
  'How the operation works',
  'Where to verify the claims',
  'How to proceed to booking',
] as const;

export const SUCCESS_CONDITIONS = [
  'JVTO feels different from generic operators.',
  'The difference is visible and verifiable.',
  'Travelers can identify the right package quickly.',
  'Travelers have enough confidence to continue to direct checkout.',
] as const;

export const SITE_LAYERS: SiteLayer[] = [
  {
    id: 'trust-entry',
    name: 'Trust Entry',
    role: 'Show who JVTO is, why it is different, and where proof can be checked.',
    primaryRoutes: ['/'],
    userQuestion: 'Who is JVTO, why is it different, and where should I click next?',
  },
  {
    id: 'route-discovery',
    name: 'Route Discovery',
    role: 'Help visitors choose by origin, destination, duration, and route seriousness.',
    primaryRoutes: ['/tours', '/tours/from-surabaya', '/tours/from-bali', '/destinations'],
    userQuestion: 'Which route or package fits my trip?',
  },
  {
    id: 'package-conversion',
    name: 'Package Conversion',
    role: 'Turn each package into a self-service brochure with direct checkout confidence.',
    primaryRoutes: ['/tours/[slug]', '/checkout/[slug]'],
    userQuestion: 'Is this trip right for me and how do I proceed?',
  },
  {
    id: 'operational-support',
    name: 'Operational Support',
    role: 'Answer booking rules, preparation, route risk, screening, and field reality.',
    primaryRoutes: ['/travel-guide', '/policy'],
    userQuestion: 'What do I need to know before booking or traveling?',
  },
  {
    id: 'proof-ownership',
    name: 'Proof Ownership',
    role: 'Own legal, police-context, medical, review, history, press, and partner proof.',
    primaryRoutes: ['/verify-jvto', '/why-jvto'],
    userQuestion: 'Can I independently verify the claims?',
  },
];

export const PRIMARY_NAV_ITEMS: NavigationItem[] = [
  {
    label: 'Tours',
    href: '/tours',
    description: 'Compare private packages by origin, duration, and route type.',
  },
  {
    label: 'Destinations',
    href: '/destinations',
    description: 'Understand Bromo, Ijen, waterfalls, beaches, and route fit.',
  },
  {
    label: 'Why JVTO',
    href: '/why-jvto',
    description: 'Narrative differentiation, people layer, reviews, and standards.',
  },
  {
    label: 'Prepare & Book',
    href: '/travel-guide',
    description: 'Booking support, screening, packing, safety, and route readiness.',
  },
  {
    label: 'Policy',
    href: '/policy',
    description: 'Booking, payment, cancellation, inclusion, and privacy rules.',
  },
];

export const NAVIGATION_CLUSTERS: NavigationCluster[] = [
  {
    id: 'discovery',
    label: 'Explore',
    role: 'Route and package selection.',
    items: [
      { label: 'All Tours', href: '/tours', description: 'Full private package catalog.' },
      { label: 'From Surabaya', href: '/tours/from-surabaya', description: 'Efficient East Java starts from Surabaya.' },
      { label: 'From Bali', href: '/tours/from-bali', description: 'Overland routes from Bali into East Java.' },
      { label: 'Destinations', href: '/destinations', description: 'Bromo, Ijen, Tumpak Sewu, Madakaripura, Papuma.' },
    ],
  },
  {
    id: 'trust',
    label: 'Trust',
    role: 'Differentiation and proof-backed confidence.',
    items: [
      { label: 'Why JVTO', href: '/why-jvto', description: 'Why this operator is different.' },
      { label: 'Verify JVTO', href: '/verify-jvto', description: 'Legal, police-context, press, history, and partner proof.' },
      { label: 'Our Team', href: '/why-jvto/our-team', description: 'Named crew, roles, strengths, and credentials.' },
      { label: 'Reviews', href: '/why-jvto/reviews', description: 'Independent reputation and review themes.' },
    ],
  },
  {
    id: 'prepare-book',
    label: 'Prepare & Book',
    role: 'Intent-based support before checkout and travel.',
    items: [
      { label: 'Booking Information', href: '/travel-guide/booking-information', description: 'How booking, checkout, voucher, and confirmation work.' },
      { label: 'Ijen Screening', href: '/travel-guide/ijen-health-screening', description: 'Health-certificate and clinic support for Ijen routes.' },
      { label: 'Packing & Fitness', href: '/travel-guide/packing-and-fitness', description: 'Preparation before active volcano and waterfall routes.' },
      { label: 'Weather & Closures', href: '/travel-guide/weather-and-closures', description: 'How JVTO handles route risk and official closures.' },
    ],
  },
  {
    id: 'rules-contact',
    label: 'Rules',
    role: 'Policy layer and human escalation.',
    items: [
      { label: 'Booking Policy', href: '/policy/booking-payment-cancellation', description: 'Deposit, full payment, cancellation, and voucher rules.' },
      { label: 'Inclusions & Exclusions', href: '/policy/inclusions-exclusions', description: 'What is contractually included or excluded.' },
      { label: 'Contact JVTO', href: '/contact', description: 'Human help when a route needs clarification.' },
    ],
  },
];

export const BOOKING_SUPPORT_GROUPS: SupportGroup[] = [
  {
    id: 'before-booking',
    label: 'Before Booking',
    role: 'Reduce uncertainty before choosing a package.',
    links: [
      { label: 'How to Book', href: '/travel-guide/booking-information', description: 'Direct checkout, availability lock, and voucher flow.' },
      { label: 'Packing & Fitness', href: '/travel-guide/packing-and-fitness', description: 'Route readiness and physical preparation.' },
      { label: 'FAQ', href: '/travel-guide/faq', description: 'Short answers to common pre-booking questions.' },
    ],
  },
  {
    id: 'route-readiness',
    label: 'Route Readiness',
    role: 'Explain real field requirements by route.',
    links: [
      { label: 'Ijen Health Screening', href: '/travel-guide/ijen-health-screening', description: 'Clinic support when access rules require it.' },
      { label: 'Bromo Logistics', href: '/travel-guide/mount-bromo-logistics', description: 'Jeep, sunrise, and caldera logistics.' },
      { label: 'Tumpak Sewu Logistics', href: '/travel-guide/tumpak-sewu-logistics', description: 'Waterfall descent preparation.' },
    ],
  },
  {
    id: 'rules-risk',
    label: 'Rules & Risk',
    role: 'Clarify what JVTO controls and what nature controls.',
    links: [
      { label: 'Weather & Closures', href: '/travel-guide/weather-and-closures', description: 'Closure and reroute logic.' },
      { label: 'Safety on Tours', href: '/travel-guide/safety-on-tours', description: 'Safety boundaries and field conduct.' },
      { label: 'Booking Policy', href: '/policy/booking-payment-cancellation', description: 'Payment, cancellation, and voucher precedence.' },
    ],
  },
];

export const TRUST_GRAPH_GROUPS: TrustGraphGroup[] = [
  {
    id: 'people',
    label: 'People and Crew',
    role: 'Founder, named crew, expertise, route responsibility, and crew-linked reputation.',
    ownerRoutes: ['/why-jvto/our-team', '/why-jvto/our-story'],
  },
  {
    id: 'reviews',
    label: 'Independent Reviews',
    role: 'External social proof mapped to safety, organization, local guidance, and route management.',
    ownerRoutes: ['/why-jvto/reviews'],
  },
  {
    id: 'partners',
    label: 'Partners and Associations',
    role: 'ISIC, HPWKI, INDECON, and recognized community or institutional context.',
    ownerRoutes: ['/verify-jvto', '/why-jvto/community-standards'],
  },
  {
    id: 'proof',
    label: 'Legal, Police, Medical, Press, and History',
    role: 'Proof library for claims that need independent verification.',
    ownerRoutes: ['/verify-jvto/legal', '/verify-jvto/police-safety', '/verify-jvto/press-recognition', '/verify-jvto/history-artifacts'],
  },
];

export const ROADMAP_PRIORITIES = [
  'Package pages',
  'Tours hub',
  'Homepage',
  'Trust and support cluster',
  'Technical search layer',
  'CMS and content system',
  'Future expansion',
] as const;

export function getAllNavigationItems(): NavigationItem[] {
  return NAVIGATION_CLUSTERS.flatMap((cluster) => cluster.items);
}

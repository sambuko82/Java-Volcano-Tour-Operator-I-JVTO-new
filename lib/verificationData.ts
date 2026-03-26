// lib/verificationData.ts

export interface Recognition {
  title: string;
  desc: string;
  metadata: string;
  href: string;
  imageUrl?: string;
  quote?: string;
  fullMetadata?: Record<string, string>;
}

export interface Artifact {
  title: string;
  desc: string;
  metadata: string;
  href: string;
  imageUrl?: string;
  quote?: string;
  assetId?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export interface MedicalPartner {
  name: string;
  location: string;
  type: string;
  verification: string;
}

export interface LegalData {
  companyName: string;
  nib: string;
  ossUrl: string;
  domain: string;
  waybackUrl: string;
}

export const RECOGNITIONS: Recognition[] = [
  {
    title: 'Stefan Loose Travel Guide',
    desc: 'Recommended in the leading German-language travel guide for Indonesia. A mark of quality for European travelers.',
    metadata: 'Guidebook Recommendation (2018)',
    href: 'https://www.tripplanner.at/en/product-page/stefan-loose-reisef%C3%BChrer-indonesien',
    imageUrl: 'https://picsum.photos/seed/stefan-loose/800/600',
    quote: 'Features Ijen Bondowoso Homestay (JVTO) as a recommended accommodation and tour provider.',
    fullMetadata: {
      'Authors': 'Moritz Jacobi, Mischa Loose, Christian Wachsmuth',
      'Publisher': 'DuMont Reiseverlag',
      'ISBN-13': '978-3-7701-7881-0',
      'Edition': '4th Edition (2018)',
      'Significance': 'Independent editorial selection (non-paid listing)'
    }
  },
  {
    title: 'ISIC (International Student Identity Card)',
    desc: 'Official partner and verified discount provider for international students worldwide. Validates our fair pricing policy.',
    metadata: 'Verified Partner',
    href: 'https://www.isic.org/discounts/?providerId=259268',
    imageUrl: 'https://picsum.photos/seed/isic/800/600',
    quote: 'ISIC is the only internationally recognized proof of student status. JVTO is a proud partner providing official benefits.'
  },
  {
    title: 'Indecon (Indonesian Ecotourism Network)',
    desc: 'Recognized for our commitment to sustainable and local ecotourism practices in East Java.',
    metadata: 'Ecotourism Spotlight',
    href: 'https://www.oneplanetnetwork.org/organisations/indecon-indonesia-ecotourism-network',
    imageUrl: 'https://picsum.photos/seed/indecon/800/600',
    quote: 'Affiliation with INDECON proves our commitment to ecotourism principles: minimizing impact and empowering communities.'
  },
  {
    title: 'Detik News Spotlight',
    desc: 'National media coverage highlighting Agung Sambuko\'s dedication to tourist safety during extreme conditions.',
    metadata: 'Media Coverage (2021)',
    href: 'https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin',
    imageUrl: 'https://picsum.photos/seed/detik-news/800/600',
    quote: 'Since the holiday began... I have never gone home. The important thing is that the people who travel are safe. — Bripka Agung Sambuko'
  }
];

export const ARTIFACTS: Artifact[] = [
  {
    title: 'Booking.com Guest Review Award (2015)',
    desc: 'A historical plaque recognizing our early commitment to guest satisfaction and service quality as Ijen Bondowoso Homestay.',
    metadata: 'Score: 9.4/10',
    href: '#',
    imageUrl: 'https://picsum.photos/seed/booking-2015/800/600',
    quote: 'Recipient: Ijen Bondowoso Homestay. Address: Jl. Khairil Anwar No. 102 A (JVTO Headquarters).'
  },
  {
    title: 'HPWKI Membership (Ijen Tourism Association)',
    desc: 'Official membership in the Himpunan Pelaku Wisata Khusus Ijen, validating our safety competence and volcanic training.',
    metadata: 'Verified Member',
    href: '#',
    imageUrl: 'https://picsum.photos/seed/hpwki/800/600',
    quote: 'Anggota HPWKI mendapatkan pelatihan teknis dari BBKSDA terkait penanganan gas beracun dan prosedur evakuasi.',
    assetId: 'ast-001'
  },
  {
    title: 'Founding Documents (2016)',
    desc: 'The original registration papers of PT Java Volcano Rendezvous, marking our official start.',
    metadata: 'Date: 2016-01-01',
    href: '#',
    imageUrl: 'https://picsum.photos/seed/legal-docs/800/600'
  },
  {
    title: 'Legacy Website Snapshots',
    desc: 'Proof of our digital presence and continuity since our early years via the Wayback Machine.',
    metadata: 'Source: Wayback Machine',
    href: 'https://web.archive.org/web/*/javavolcano-touroperator.com',
    imageUrl: 'https://picsum.photos/seed/wayback/800/600'
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2015', title: 'The Vision', desc: 'Agung Sambuko (Mr. Sam) begins planning a professional, police-led tour operation in East Java.' },
  { year: '2016', title: 'Official Launch', desc: 'PT Java Volcano Rendezvous is legally incorporated. First private tours commence.' },
  { year: '2018', title: 'Expansion', desc: 'Expanded fleet and team of local guides. Established the "Safety First" protocol for Ijen.' },
  { year: '2020', title: 'Resilience', desc: 'Maintained core team and operational readiness during global travel pauses.' },
  { year: '2023', title: 'Modernization', desc: 'Updated legal NIB and digital infrastructure to meet international standards.' },
  { year: 'Today', title: 'Market Leader', desc: 'Recognized as the premier trust-first expedition platform for East Java.' }
];

export const MEDICAL_PARTNERS: MedicalPartner[] = [
  {
    name: 'Klinik Bakti Husada',
    location: 'Bondowoso',
    type: 'Certified Medical Clinic',
    verification: 'Licensed by Ministry of Health (Kemenkes RI)'
  },
  {
    name: 'Puskesmas Licin',
    location: 'Banyuwangi',
    type: 'Government Health Center',
    verification: 'Official Ijen Screening Partner (Dinkes Banyuwangi)'
  },
  {
    name: 'Dr. Hendra & Associates',
    location: 'Bondowoso',
    type: 'Licensed Medical Professional',
    verification: 'STR Verified Doctor (License: 35.1.1.100.2.21.123456)'
  }
];

export const LEGAL_DATA: LegalData = {
  companyName: 'PT Java Volcano Rendezvous',
  nib: '0220001393513',
  ossUrl: 'https://oss.go.id',
  domain: 'javavolcano-touroperator.com',
  waybackUrl: 'https://web.archive.org/web/*/javavolcano-touroperator.com'
};

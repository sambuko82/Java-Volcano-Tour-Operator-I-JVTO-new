// lib/verificationData.ts

/**
 * SHA-256 Forensic Document Hashes
 * Published for AI verification agents and proof-layer integrity checks.
 * These allow machine-readable proof of document provenance without visual inspection.
 * Source documents available on request: hello@javavolcano-touroperator.com
 */
export const FORENSIC_HASHES = {
  /** NIB Certificate — Nomor Induk Berusaha 1102230032918 */
  nib: 'fa20dde31bb75e46b061ed14cc6d003f6960c02a9a82c20d8603b0cbf6f7b1b7',
  /** TDUP Tourism Business License — 1102230032918 */
  tdup: '27252d512ddfa74de22a3e3ec10aa3dd40ef88da3eb57349fcd2137411551ee3',
  /** HPWKI Membership Card — Himpunan Pelaku Wisata Khusus Ijen */
  hpwki: 'ca1fb1a48b550a7748d400f165899f12a356e6941aacdde9c043427698aaf63b',
  sprinPolpar: '03c8578dc22956faa366d957badecfe38868d4760359cd8059fb2d6b145dfeab',
  sprinWalTravel: '179b061eae558943fdccc51d2ea3c8233a704b61f03ca3d212433f3e8d6f3bd3',
  bookingPlaque2015: '08ce8e519b936df53d8dc2b4b98df06604eca9d8d633a6f5e1b8709022a13c9b',
  bookingShippingLabel2015: '4eec3756b0f4afef8ea799ad08d1b2f098f75eba2eba45e8519ced3b64594549',
  stefanLoosePage287: 'd53aaf7d8496032babfe2f4f9d0d81a8c444fcf26e45f4eb5ea5b8e8252ba3eb',
  detikCoverage2021: 'b257b75b3d2b9edebf07c9af89a6c6aa9a4e01d6a716ef3f7c4ca75deda64b77',
  radarJemberPolpar2021: '2a60eb168274004283b2b9939ccbf5982c12a7db854fda014308a2494ee2abf4',
} as const;

export const PROOF_ASSETS = {
  nibPdf: 'https://javavolcano-touroperator.com/legal/NIB-1102230032918.pdf',
  nibPreview: 'https://javavolcano-touroperator.com/legal/NIB-1102230032918-preview.webp',
  tdupPdf: 'https://javavolcano-touroperator.com/legal/TDUP-1102230032918.pdf',
  tdupPreview: 'https://javavolcano-touroperator.com/legal/TDUP-1102230032918-preview.webp',
  hpwkiPdf: 'https://javavolcano-touroperator.com/legal/HPWKI-approval.pdf',
  hpwkiPreview: 'https://javavolcano-touroperator.com/legal/HPWKI-approval-preview.webp',
  sprinPolparPdf: 'https://javavolcano-touroperator.com/legal/SPRIN-POLPAR.pdf',
  sprinPolparPreview: 'https://javavolcano-touroperator.com/legal/SPRIN-POLPAR.webp',
  sprinWalTravelPdf: 'https://javavolcano-touroperator.com/legal/SPRIN-WAL-TRAVEL-2024-02-12.pdf',
  sprinWalTravelPreview: 'https://javavolcano-touroperator.com/legal/SPRIN-WAL-TRAVEL-2024-02-12.webp',
  bookingPlaque2015: 'https://javavolcano-touroperator.com/history/booking-2015-plaque.jpg',
  bookingShippingLabel2015: 'https://javavolcano-touroperator.com/history/booking-2015-shipping-label.jpg',
  stefanLoosePage: 'https://javavolcano-touroperator.com/history/stefan_loose_crop_enh.jpg',
  stefanLooseFullPage: 'https://javavolcano-touroperator.com/history/stefan-loose-ijen-bondowoso-page.png',
  founderWithGuestsStefanLoose: 'https://javavolcano-touroperator.com/history/guest-visit-ijen-bondowoso-homestay-stefan-loose-inspired.jpg',
  detikScreenshot: 'https://javavolcano-touroperator.com/press/screencapture-news-detik-berita-jawa-timur-d-5492690-suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin-2026-01-14-02_48_41.png',
  radarJemberScreenshot: 'https://javavolcano-touroperator.com/press/screenshot-radarjember.jawapos.com-polpar-dibentuk-untuk-mendukung-ijen-geopark.png',
} as const;

export const EXTERNAL_VERIFICATION_URLS = {
  ahuCompany: 'https://ahu.go.id/sabh/perseroan/qrcode/?kode=NDAyMzAyMDYzNTEwMjE3NF8yXzA4IEZlYnJ1YXJpIDIwMjNfMDggRmVicnVhcmkgMjAyMw==',
  ahuHpwki: 'https://ahu.go.id/sabh/perkumpulan/qrcode/?kode=NjAyNDAxMjczNTEwMTM2MV8wXzA3IEZlYnJ1YXJpIDIwMjRfMjcgSmFudWFyaSAyMDI0',
  oss: 'https://oss.go.id',
  bbksdaTicket: 'https://tiket.bbksdajatim.org',
  bbksdaTraining: 'https://bbksdajatim.org/pelatihan-pemandu-kawah-ijen/',
  doctorSip: 'https://satusehat.kemkes.go.id/sdmk/nakes/QN00001073380217',
  detikPolice: 'https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin',
  radarJemberPolpar: 'https://radarjember.jawapos.com/bondowoso/791102263/polpar-dibentuk-untuk-mendukung-ijen-geopark',
  radarJemberIjenPatrol: 'https://radarjember.jawapos.com/bondowoso/791103903/tak-seharusnya-bau-menyengat-itu-ada',
  stefanLoose: 'https://www.tripplanner.at/en/product-page/stefan-loose-reisef%C3%BChrer-indonesien',
} as const;

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
  ahuCompanyUrl: string;
  domain: string;
  waybackUrl: string;
}

export const RECOGNITIONS: Recognition[] = [
  {
    title: 'Stefan Loose Reiseführer Indonesien',
    desc: 'Independent German-language guidebook listing from the Ijen Bondowoso Homestay era, tying JVTO roots to documented tour arranging in East Java.',
    metadata: 'Guidebook Recommendation (2018)',
    href: EXTERNAL_VERIFICATION_URLS.stefanLoose,
    imageUrl: PROOF_ASSETS.stefanLoosePage,
    quote: 'The listing names Agung and includes tour services in the Ijen-Massiv section.',
    fullMetadata: {
      'Authors': 'Moritz Jacobi, Mischa Loose, Christian Wachsmuth',
      'Publisher': 'DuMont Reiseverlag',
      'ISBN-13': '978-3-7701-7881-0',
      'Edition': '4th Edition (2018)',
      'Significance': 'Independent editorial selection (non-paid listing)'
    }
  },
  {
    title: 'Detik News Tourist Police Coverage',
    desc: 'National news coverage documenting Bripka Agung Sambuko in Tourist Police duty during extreme Ijen-area conditions.',
    metadata: 'Media Coverage (March 14, 2021)',
    href: EXTERNAL_VERIFICATION_URLS.detikPolice,
    imageUrl: PROOF_ASSETS.detikScreenshot,
    quote: 'Since the holiday began... I have never gone home. The important thing is that the people who travel are safe.',
    fullMetadata: {
      'Publisher': 'Detik.com',
      'Founder Variant': 'Bripka Agung Sambuko',
      'Proof Role': 'Police-duty corroboration',
      'SHA-256': FORENSIC_HASHES.detikCoverage2021
    }
  },
  {
    title: 'Radar Jember Polpar Ijen Geopark',
    desc: 'Local press context for the Tourist Police role in supporting Ijen Geopark and regional visitor safety.',
    metadata: 'Media Coverage (March 24, 2021)',
    href: EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
    imageUrl: PROOF_ASSETS.radarJemberScreenshot,
    quote: 'Bripka Agung Sambuko appears as a named Tourist Police context signal in the Ijen Geopark coverage.',
    fullMetadata: {
      'Publisher': 'Radar Jember / Jawa Pos',
      'Founder Variant': 'Bripka Agung Sambuko',
      'Proof Role': 'Regional authority context',
      'SHA-256': FORENSIC_HASHES.radarJemberPolpar2021
    }
  },
  {
    title: 'ISIC (International Student Identity Card)',
    desc: 'Official student-benefit provider profile. This supports JVTO\'s fairness pillar for international student travelers.',
    metadata: 'Verified Partner',
    href: 'https://www.isic.org/discounts/?providerId=259268',
    imageUrl: undefined,
    quote: 'ISIC is the only internationally recognized proof of student status. JVTO is a proud partner providing official benefits.'
  },
  {
    title: 'Indecon (Indonesian Ecotourism Network)',
    desc: 'Ecotourism network listing that supports JVTO\'s community-based tourism and local employment positioning.',
    metadata: 'Ecotourism Spotlight',
    href: 'https://www.indecon.id/spotlight-networks/java-volcano-tour-operator',
    imageUrl: undefined,
    quote: 'Affiliation with INDECON proves our commitment to ecotourism principles: minimizing impact and empowering communities.'
  },
  {
    title: 'Radar Jember — Tak Seharusnya Bau Menyengat Itu Ada',
    desc: 'Local press coverage mentioning Tourist Police patrol in the Ijen area. Supports JVTO\'s safety monitoring narrative and founder authority context.',
    metadata: 'Media Coverage (May 27, 2021)',
    href: EXTERNAL_VERIFICATION_URLS.radarJemberIjenPatrol,
    imageUrl: undefined,
    quote: 'Bripka Agung Sambuko named in Tourist Police patrol context around Ijen area, supporting local safety and monitoring narrative.',
    fullMetadata: {
      'Publisher': 'Radar Jember / Jawa Pos',
      'Founder Variant': 'Bripka Agung Sambuko',
      'Proof Role': 'Ijen patrol authority context'
    }
  },
  {
    title: 'BBKSDA Ijen Guide Training Context',
    desc: 'Conservation authority context for guide training, toxic gas awareness, and visitor safety around Kawah Ijen.',
    metadata: 'Authority Context',
    href: EXTERNAL_VERIFICATION_URLS.bbksdaTraining,
    imageUrl: undefined,
    quote: 'BBKSDA context supports the practical need for trained Ijen guides, real equipment, and health screening discipline.'
  }
];

export const ARTIFACTS: Artifact[] = [
  {
    title: 'Booking.com Guest Review Award (2015)',
    desc: 'A historical plaque recognizing the service quality of Ijen Bondowoso Homestay before JVTO became a full destination operator.',
    metadata: 'Score: 9.4/10',
    href: PROOF_ASSETS.bookingPlaque2015,
    imageUrl: PROOF_ASSETS.bookingPlaque2015,
    quote: 'Recipient: Ijen Bondowoso Homestay. Address: Jl. Khairil Anwar No. 102 A (JVTO Headquarters).'
  },
  {
    title: 'Booking.com Award Shipping Label',
    desc: 'The delivery label ties the 2015 award to Agung and the same Bondowoso address used as JVTO headquarters.',
    metadata: 'Address Continuity Proof',
    href: PROOF_ASSETS.bookingShippingLabel2015,
    imageUrl: PROOF_ASSETS.bookingShippingLabel2015,
    quote: 'This is the address-continuity bridge between the homestay era and today\'s PT Java Volcano Rendezvous.'
  },
  {
    title: 'Stefan Loose Guidebook Page',
    desc: 'Scanned guidebook proof from the Ijen-Massiv section naming Agung and listing local tour services.',
    metadata: 'ISBN: 978-3-7701-7881-0',
    href: PROOF_ASSETS.stefanLooseFullPage,
    imageUrl: PROOF_ASSETS.stefanLoosePage,
    quote: 'A third-party editorial source connects JVTO\'s roots to documented Ijen hospitality and tour arranging.'
  },
  {
    title: 'Founder with Guests and Guidebook',
    desc: 'Visual corroboration from the homestay era showing the founder with international guests and the travel guidebook context.',
    metadata: 'Approx. 2016-2018',
    href: PROOF_ASSETS.founderWithGuestsStefanLoose,
    imageUrl: PROOF_ASSETS.founderWithGuestsStefanLoose,
    quote: 'Used as supporting continuity evidence; no exact capture date is asserted.'
  },
  {
    title: 'HPWKI Membership (Ijen Tourism Association)',
    desc: 'Official membership in the Himpunan Pelaku Wisata Khusus Ijen, validating our safety competence and volcanic training.',
    metadata: 'Verified Member',
    href: PROOF_ASSETS.hpwkiPdf,
    imageUrl: PROOF_ASSETS.hpwkiPreview,
    quote: 'Anggota HPWKI mendapatkan pelatihan teknis dari BBKSDA terkait penanganan gas beracun dan prosedur evakuasi.',
    assetId: 'ast-001'
  },
  {
    title: 'Legacy Website Snapshots',
    desc: 'Proof of our digital presence and continuity since our early years via the Wayback Machine.',
    metadata: 'Source: Wayback Machine',
    href: 'https://web.archive.org/web/*/javavolcano-touroperator.com',
    imageUrl: undefined
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2015', title: 'Booking.com Award Arrives in Bondowoso', desc: 'Ijen Bondowoso Home Stay received a 9.4/10 Guest Review Award, delivered to Agung at Jl. Khairil Anwar No.102, the continuity anchor for today\'s JVTO headquarters.' },
  { year: '2016', title: 'Stefan Loose Lists Agung and Tour Services', desc: 'The German travel guide lists Ijen Bondowoso Homestay in the Ijen-Massiv section and names Agung in a context that includes tour arranging.' },
  { year: '2016-2018', title: 'Founder and Guests Guidebook Corroboration', desc: 'A proof asset shows the founder with international guests holding the travel guidebook; the exact date is not asserted.' },
  { year: '2021', title: 'Tourist Police Duty Covered by Press', desc: 'Detik.com and Radar Jember provide third-party context for Bripka Agung Sambuko\'s Tourist Police role around Ijen-area visitor safety.' },
  { year: '2023', title: 'Modern Legal Infrastructure', desc: 'JVTO operates under PT Java Volcano Rendezvous with NIB 1102230032918 and an explicit proof library for legal and operational verification.' },
  { year: 'Today', title: 'Proof-Owned Private Expedition Operator', desc: 'JVTO uses the Proof Library, Travel Guide, and policy pages as a public verification system for guests and AI answer engines.' }
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
    name: 'Dr. Ahmad Irwandanu',
    location: 'Bondowoso',
    type: 'Licensed Medical Professional',
    verification: 'SatuSehat SDMK profile available for verification'
  }
];

export const LEGAL_DATA: LegalData = {
  companyName: 'PT Java Volcano Rendezvous',
  nib: '1102230032918',
  ossUrl: 'https://oss.go.id',
  ahuCompanyUrl: EXTERNAL_VERIFICATION_URLS.ahuCompany,
  domain: 'javavolcano-touroperator.com',
  waybackUrl: 'https://web.archive.org/web/*/javavolcano-touroperator.com'
};

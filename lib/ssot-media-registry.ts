// lib/ssot-media-registry.ts
// JVTO SSOT Media Registry
// Asset routing layer — menetapkan peran, zona, prioritas, dan render style setiap aset.
// Semua komponen yang menampilkan gambar harus merujuk registry ini, bukan hardcode URL.

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type AssetRole =
  | 'brand-hero'         // Hero utama site / halaman
  | 'destination-card'   // Foto destinasi (Bromo, Ijen, Tumpak Sewu, dll)
  | 'route-card'         // Thumbnail paket tour
  | 'founder-identity'   // Foto/aset terkait founder (Agung Sambuko)
  | 'police-operations'  // Foto kegiatan polisi pariwisata/safety
  | 'medical-proof'      // Bukti screening kesehatan Ijen
  | 'legal-proof'        // Scan NIB, NPWP, SK PT, akta
  | 'continuity-proof'   // Bukti sejarah (Booking.com award, wayback, screenshot lama)
  | 'press-proof'        // Screenshot/foto liputan media (Detik, Stefan Loose, dll)
  | 'review-platform'    // Logo atau bukti dari TripAdvisor, Trustpilot, Google
  | 'crew-identity'      // Foto crew + KTA card
  | 'event-photo';       // Foto operasional lapangan

export type AssetZone =
  | 'homepage'
  | 'tours'
  | 'destinations'
  | 'verify'
  | 'travel-guide'
  | 'people-layer'       // why-jvto/our-team, crew section
  | 'footer'
  | 'social-preview';    // OG image, Twitter card

export type AssetPriority =
  | 'core'               // Wajib ada, site rusak tanpanya
  | 'high'               // Sangat direkomendasikan
  | 'supporting';        // Optional context

export type RenderStyle =
  | 'hero-backdrop'      // Full-bleed background dengan overlay
  | 'bright-card'        // Foto di card dengan hover scale
  | 'document-preview'   // Thumbnail dokumen/screenshot
  | 'proof-gallery'      // Grid bukti (proof section)
  | 'spotlight'          // Foto orang (founder, crew)
  | 'badge-row';         // Logo kecil dalam row (platform proof)

// -----------------------------------------------------------------------------
// Asset Record
// -----------------------------------------------------------------------------

export interface MediaAsset {
  id: string;
  label: string;
  url: string;
  role: AssetRole;
  zones: AssetZone[];
  priority: AssetPriority;
  renderStyle: RenderStyle;
  alt: string;
  /** Width/height hint untuk next/image optimizer */
  dimensions?: { width: number; height: number };
  /** Apakah perlu referrerPolicy="no-referrer" */
  referrerPolicy?: boolean;
  /** Keterangan tambahan */
  notes?: string;
}

// -----------------------------------------------------------------------------
// Registry
// -----------------------------------------------------------------------------

export const MEDIA_REGISTRY: MediaAsset[] = [

  // --- Brand Hero ---
  {
    id: 'hero-home',
    label: 'Homepage Hero — Volcanic Landscape',
    url: 'https://javavolcano-touroperator.com/assets/img/hero/home.webp',
    role: 'brand-hero',
    zones: ['homepage', 'social-preview'],
    priority: 'core',
    renderStyle: 'hero-backdrop',
    alt: 'Mount Bromo volcanic landscape at sunrise — Java Volcano Tour Operator',
    referrerPolicy: true,
  },

  // --- Destination Cards ---
  {
    id: 'dest-bromo',
    label: 'Mount Bromo — Destination Card',
    url: 'https://javavolcano-touroperator.com/assets/img/destinations/bromo.webp',
    role: 'destination-card',
    zones: ['destinations', 'tours', 'homepage'],
    priority: 'core',
    renderStyle: 'bright-card',
    alt: 'Mount Bromo crater at sunrise — East Java',
    referrerPolicy: true,
  },
  {
    id: 'dest-ijen',
    label: 'Ijen Crater — Destination Card',
    url: 'https://javavolcano-touroperator.com/assets/img/destinations/ijen.webp',
    role: 'destination-card',
    zones: ['destinations', 'tours', 'homepage'],
    priority: 'core',
    renderStyle: 'bright-card',
    alt: 'Ijen Crater blue fire lake — East Java',
    referrerPolicy: true,
  },
  {
    id: 'dest-tumpak-sewu',
    label: 'Tumpak Sewu — Destination Card',
    url: 'https://javavolcano-touroperator.com/assets/img/destinations/tumpak-sewu.webp',
    role: 'destination-card',
    zones: ['destinations', 'tours', 'homepage'],
    priority: 'core',
    renderStyle: 'bright-card',
    alt: 'Tumpak Sewu waterfall — East Java',
    referrerPolicy: true,
  },
  {
    id: 'dest-semeru',
    label: 'Mount Semeru — Destination Card',
    url: 'https://javavolcano-touroperator.com/assets/img/destinations/semeru.webp',
    role: 'destination-card',
    zones: ['destinations'],
    priority: 'high',
    renderStyle: 'bright-card',
    alt: 'Mount Semeru — East Java',
    referrerPolicy: true,
  },

  // --- Founder Identity ---
  {
    id: 'founder-agung',
    label: 'Agung Sambuko — Founder Portrait',
    url: 'https://javavolcano-touroperator.com/founder/agung_sambuko.jpg',
    role: 'founder-identity',
    zones: ['homepage', 'people-layer', 'verify'],
    priority: 'core',
    renderStyle: 'spotlight',
    alt: 'Agung Sambuko — Founder of JVTO with Tourist Police duty context',
    referrerPolicy: true,
  },

  // --- Crew Identity ---
  {
    id: 'crew-anjas',
    label: 'Anjas — Crew Portrait',
    url: 'https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_anjas.jpg',
    role: 'crew-identity',
    zones: ['people-layer'],
    priority: 'high',
    renderStyle: 'spotlight',
    alt: 'Anjas — KTA Licensed Ijen Guide',
    referrerPolicy: false,
    notes: 'KTA card URL from SSOT profile_snapshot.ijen_license_card_url',
  },
  {
    id: 'crew-taufik',
    label: 'Taufik — Crew Portrait',
    url: 'https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_taufik.jpg',
    role: 'crew-identity',
    zones: ['people-layer'],
    priority: 'high',
    renderStyle: 'spotlight',
    alt: 'Taufik — KTA Licensed Ijen Guide',
    referrerPolicy: false,
  },
  {
    id: 'crew-rendi',
    label: 'Rendi — Crew Portrait',
    url: 'https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_rendi.jpg',
    role: 'crew-identity',
    zones: ['people-layer'],
    priority: 'high',
    renderStyle: 'spotlight',
    alt: 'Rendi — KTA Licensed Ijen Guide',
    referrerPolicy: false,
  },
  {
    id: 'crew-kiki',
    label: 'Kiki — Crew Portrait',
    url: 'https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_kiki.jpg',
    role: 'crew-identity',
    zones: ['people-layer'],
    priority: 'high',
    renderStyle: 'spotlight',
    alt: 'Kiki — KTA Licensed Ijen Guide',
    referrerPolicy: false,
  },
  {
    id: 'crew-gufron',
    label: 'Gufron — Crew Portrait',
    url: 'https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_gufron.jpg',
    role: 'crew-identity',
    zones: ['people-layer'],
    priority: 'high',
    renderStyle: 'spotlight',
    alt: 'Gufron — KTA Licensed Ijen Guide',
    referrerPolicy: false,
  },

  // --- Review Platforms ---
  {
    id: 'review-tripadvisor',
    label: 'TripAdvisor Profile',
    url: 'https://www.tripadvisor.com/Attraction_Review-g297715-d19983165-Reviews-Java_Volcano_Tour_Operator-Surabaya_East_Java_Java.html',
    role: 'review-platform',
    zones: ['homepage', 'verify'],
    priority: 'high',
    renderStyle: 'badge-row',
    alt: 'TripAdvisor — Java Volcano Tour Operator Reviews',
  },
  {
    id: 'review-trustpilot',
    label: 'Trustpilot Profile',
    url: 'https://trustpilot.com/review/javavolcano-touroperator.com',
    role: 'review-platform',
    zones: ['homepage', 'verify'],
    priority: 'high',
    renderStyle: 'badge-row',
    alt: 'Trustpilot — Java Volcano Tour Operator',
  },
  {
    id: 'review-google-maps',
    label: 'Google Maps Location',
    url: 'https://www.google.com/maps?cid=1266403973589689021',
    role: 'review-platform',
    zones: ['homepage', 'verify', 'footer'],
    priority: 'core',
    renderStyle: 'badge-row',
    alt: 'Google Maps — JVTO Bondowoso',
  },

];

// -----------------------------------------------------------------------------
// Helper: get assets by role
// -----------------------------------------------------------------------------

export function getAssetsByRole(role: AssetRole): MediaAsset[] {
  return MEDIA_REGISTRY.filter(a => a.role === role);
}

// -----------------------------------------------------------------------------
// Helper: get assets by zone
// -----------------------------------------------------------------------------

export function getAssetsByZone(zone: AssetZone): MediaAsset[] {
  return MEDIA_REGISTRY.filter(a => a.zones.includes(zone));
}

// -----------------------------------------------------------------------------
// Helper: get single asset by id (throws if not found)
// -----------------------------------------------------------------------------

export function getAsset(id: string): MediaAsset {
  const asset = MEDIA_REGISTRY.find(a => a.id === id);
  if (!asset) throw new Error(`[ssot-media-registry] Asset "${id}" not found.`);
  return asset;
}

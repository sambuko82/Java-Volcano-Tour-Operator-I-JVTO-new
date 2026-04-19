/**
 * SSOT v4.0 TypeScript shape.
 * Generated from JVTO_SSOT_CONSOLIDATED_v2.1 → v4.0 (ssot_meta.status: READY_FOR_IMPLEMENTATION, generated 2026-03-16).
 * Narrow the structure conservatively — only fields consumed by UI/build are typed strictly.
 * `unknown` on uncovered sub-structures forces `getAs<T>()` helpers to validate at call site.
 */

export type ClaimId = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9';

export interface NlpVariants {
  short?: string[];
  customer_friendly?: string[];
  ai_snippet?: string[];
  cs_reply?: string[];
}

export interface EvidenceHook {
  type: 'page' | 'policy' | string;
  label: string;
  route: string;
}

export interface NarrativeClaim {
  id: ClaimId;
  pillar: string;
  core_claim: string;
  mechanism: string[];
  evidence_hooks: EvidenceHook[];
  nlp_variants: NlpVariants;
  evidence_slugs: string[];
  primary_page: string;
}

export interface Asset {
  filename: string;
  caption?: string;
  alt_text?: string;
  url: string;
  sha256?: string;
  size_bytes?: number;
  size_mb?: number;
  last_verified_iso?: string;
  category?: string;
  display_priority?: number;
  slug: string;
  geo_context?: string;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  numeric_id?: number;
  archetype?: string;
  knows_about?: string[];
  evidence_review_quotes?: Array<{ quote: string; author?: string; platform?: string }>;
  social_links?: Record<string, string>;
  internal_contact?: { phone?: string; email?: string };
  kta?: string;
  photo_url?: string;
  schema_job_title?: string;
  schema_knows_about?: string[];
}

export interface VerificationCredential {
  id: string;
  title: string;
  issuer?: string;
  document_url?: string;
  preview_url?: string;
  sha256?: string;
  verify_at?: string;
  status?: string;
  [key: string]: unknown;
}

export interface OperationalLogicFinancialPolicy {
  id: string;
  title: string;
  cutoff_hours: number;
  cancellation_gt_48h: string;
  cancellation_lt_48h: string;
  validity: string;
  transferability: string;
  currency: string;
  reference_policy_url: string;
  evidence_status: { has_hard_asset: boolean; recommended_verify_url: string | null };
}

export interface OperationalLogicHealthProtocol {
  id: string;
  title: string;
  status: string;
  authority_ref: string;
  logic_gate: string;
  data_points: string[];
  failure_protocol: string;
  proof_assets: string[];
  system_url: string;
  evidence_status: { has_hard_asset: boolean; recommended_verify_url: string | null };
}

export interface IjenHealthScreeningLegalBasis {
  id: string;
  source: string;
  url?: string;
  asset_slug?: string;
  supports: string;
}

export interface OperationalLogic {
  financial_policy: OperationalLogicFinancialPolicy;
  health_protocol: OperationalLogicHealthProtocol;
  ijen_health_screening: {
    measured_metrics: string[];
    optional_future_metrics: string[];
    legal_basis: IjenHealthScreeningLegalBasis[];
    doctor_verification: {
      str_lookup_url: string;
      kki_check_url: string;
      proof_assets: string[];
    };
  };
}

export interface TourPageItem {
  route: string;
  name: string;
  duration: string;
  from: string;
  physicality: string;
}

export interface TourPageSection {
  id: string;
  title: string;
  items?: TourPageItem[];
  bullets?: string[];
}

export interface TourPage {
  route: string;
  title_tag: string;
  meta_description: string;
  h1: string;
  intro_paragraphs: string[];
  sections: TourPageSection[];
  cross_links?: Record<string, string>;
}

export interface DestinationPage {
  route: string;
  title_tag?: string;
  meta_description?: string;
  h1?: string;
  intro_paragraphs?: string[];
  sections?: unknown[];
  [key: string]: unknown;
}

export interface VerifyPage {
  route: string;
  title_tag?: string;
  meta_description?: string;
  h1?: string;
  intro_paragraphs?: string[];
  sections?: unknown[];
  [key: string]: unknown;
}

export interface TravelPage {
  route: string;
  title_tag?: string;
  meta_description?: string;
  h1?: string;
  intro_paragraphs?: string[];
  sections?: unknown[];
  cross_links?: Record<string, string>;
  [key: string]: unknown;
}

export interface PolicyPage {
  route: string;
  title_tag?: string;
  meta_description?: string;
  h1?: string;
  [key: string]: unknown;
}

export interface CanonicalRedirect {
  from: string;
  to: string;
  type: '301' | '302' | string;
}

export interface Organization {
  legal_name: string;
  brand_name: string;
  alternate_name: string;
  founding_date: string;
  description: string;
  contact_email: string;
  contact_phone: string;
  available_languages: string[];
  address_json: Record<string, string>;
  same_as_urls: string[];
  website_url: string;
  logo_url: string;
  hero_image_url: string;
  schema_json: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CanonicalContext {
  name: string;
  version: string;
  route_count: number;
  canonical_paths: string[];
  owner_preference: string[];
  route_owner_map: Record<string, string>;
  status: string;
}

export interface SSOT {
  meta: Record<string, unknown>;
  organization: Organization;
  core_thesis: string;
  narrative_pillars: string[];
  narrative_claimmap: NarrativeClaim[];
  crew_registry: CrewMember[];
  verification_credentials: VerificationCredential[];
  assets_inventory: Asset[];
  operational_logic: OperationalLogic;
  canonical_redirects: CanonicalRedirect[];
  canonical_context: CanonicalContext;
  tour_pages: TourPage[];
  destination_pages: DestinationPage[];
  verify_pages: VerifyPage[];
  travel_pages: TravelPage[];
  policy_pages: PolicyPage[];
  [key: string]: unknown;
}

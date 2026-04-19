import ssotJson from './jvto-ssot-v4.json';
import type {
  SSOT,
  NarrativeClaim,
  ClaimId,
  Asset,
  CrewMember,
  VerificationCredential,
  OperationalLogic,
  CanonicalRedirect,
  TourPage,
  DestinationPage,
  VerifyPage,
  TravelPage,
  PolicyPage,
} from './types';

const ssot = ssotJson as unknown as SSOT;

export function getSSOT(): SSOT {
  return ssot;
}

export function getClaim(id: ClaimId): NarrativeClaim | undefined {
  return ssot.narrative_claimmap.find(c => c.id === id);
}

export function getAllClaims(): NarrativeClaim[] {
  return ssot.narrative_claimmap;
}

export function getAsset(slug: string): Asset | undefined {
  return ssot.assets_inventory.find(a => a.slug === slug);
}

export function getAssetsByCategory(category: string): Asset[] {
  return ssot.assets_inventory.filter(a => a.category === category);
}

export function getCrew(id: string): CrewMember | undefined {
  return ssot.crew_registry.find(c => c.id === id);
}

export function getAllCrew(): CrewMember[] {
  return ssot.crew_registry;
}

export function getCredential(id: string): VerificationCredential | undefined {
  return ssot.verification_credentials.find(c => c.id === id);
}

export function getOperationalLogic(): OperationalLogic {
  return ssot.operational_logic;
}

export function getCanonicalRedirects(): CanonicalRedirect[] {
  return ssot.canonical_redirects.filter(r => r.from !== r.to);
}

export function getTourPage(route: string): TourPage | undefined {
  return ssot.tour_pages.find(p => p.route === route);
}

export function getAllTourPages(): TourPage[] {
  return ssot.tour_pages;
}

export function getDestinationPage(route: string): DestinationPage | undefined {
  return ssot.destination_pages.find(p => p.route === route);
}

export function getVerifyPage(route: string): VerifyPage | undefined {
  return ssot.verify_pages.find(p => p.route === route);
}

export function getTravelPage(route: string): TravelPage | undefined {
  return ssot.travel_pages.find(p => p.route === route);
}

export function getPolicyPage(route: string): PolicyPage | undefined {
  return ssot.policy_pages.find(p => p.route === route);
}

export function getCanonicalPaths(): string[] {
  return ssot.canonical_context.canonical_paths;
}

export function getRouteOwner(route: string): string | undefined {
  return ssot.canonical_context.route_owner_map[route];
}

/**
 * Resolve a claim's evidence assets (slugs → full Asset objects).
 * Returns empty array if claim not found or no evidence_slugs.
 */
export function getClaimEvidence(id: ClaimId): Asset[] {
  const claim = getClaim(id);
  if (!claim) return [];
  return claim.evidence_slugs
    .map(slug => getAsset(slug))
    .filter((a): a is Asset => a !== undefined);
}

/**
 * Get an asset's URL, or null if slug is unknown.
 * Prefer this over raw string URLs — enforces SSOT-sourced media.
 */
export function getAssetUrl(slug: string): string | null {
  return getAsset(slug)?.url ?? null;
}

/**
 * Get an asset's alt_text with filename fallback, or null if unknown.
 */
export function getAssetAlt(slug: string): string | null {
  const asset = getAsset(slug);
  if (!asset) return null;
  return asset.alt_text ?? asset.caption ?? asset.filename;
}

export type {
  SSOT,
  NarrativeClaim,
  ClaimId,
  Asset,
  CrewMember,
  VerificationCredential,
  OperationalLogic,
  CanonicalRedirect,
  TourPage,
  DestinationPage,
  VerifyPage,
  TravelPage,
  PolicyPage,
} from './types';

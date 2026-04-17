# JVTO North Star Implementation Notes

Source: `F:\New folder\North Star.txt`
Target app: `f:\New folder\Java-Volcano-Tour-Operator-I-JVTO-new`

## Extracted Model

The North Star file defines JVTO as an improve-in-place project, not a total rebuild. The app must preserve the live/data baseline while strengthening route logic, trust proof, support clarity, and direct checkout confidence.

## Functional Layers

1. Trust Entry: homepage explains who JVTO is, why it is different, and where proof can be checked.
2. Route Discovery: tours and destinations help travelers choose by origin, duration, destination, and route seriousness.
3. Package Conversion: tour detail pages act as self-service brochures and lead into package-specific direct checkout.
4. Operational Support: travel guide and policy pages reduce friction around rules, preparation, screening, weather, and payment.
5. Proof Ownership: Why JVTO and Verify JVTO own people, reviews, legal proof, police-context proof, medical proof, press, history, and partner context.

## Implemented App Changes

- Added `lib/siteOrchestration.ts` as the app-level orchestration source for layers, navigation clusters, support groups, trust graph, success conditions, and roadmap priorities.
- Updated global navigation to read primary routes and mobile intent groups from the orchestration source.
- Updated footer links to expose Discovery, Trust, Prepare & Book, and Rules clusters instead of a flat generic link list.
- Updated Travel Guide to show support by user intent: Before Booking, Route Readiness, and Rules & Risk.
- Updated SupportShortcutRail to derive shortcuts from the intent-based support groups.
- Updated Tours Hub copy so booking logic follows direct checkout, availability lock, and Official E-Voucher policy.
- Updated TourCard CTA from inquiry-first to package-first selection.
- Added site navigation and functional layer context to JSON-LD through `buildSiteNavigationSchema()` and `WebSite.hasPart`.
- Updated `llms.txt` and `ai-agent-config.json` with North Star, intent clusters, and package conversion separation.

## Guardrails Applied

- No total redesign.
- No database assumptions changed.
- No claim that JVTO is a government service.
- No claim that payment is confirmed before availability lock and Official E-Voucher / Invoice issuance.
- Route discovery remains separate from package conversion and checkout.
- Verify pages remain the proof owner; policy pages remain the rules owner.

## Current Working Priority

The North Star confirms this priority order:

1. Package pages
2. Tours hub
3. Homepage
4. Trust/support cluster
5. Technical search layer
6. CMS/content system
7. Future expansion

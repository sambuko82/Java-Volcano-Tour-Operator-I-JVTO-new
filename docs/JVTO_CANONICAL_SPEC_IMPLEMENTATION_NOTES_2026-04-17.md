# JVTO Canonical Spec Implementation Notes

Date: 2026-04-17  
Source folder: `F:\New folder\JVTO_Canonical_Spec_Set`

## Files Read

- `JVTO_Canonical_Spec_Set.md`
- `jvto_orchestration_specs/01_foundation.yaml`
- `jvto_orchestration_specs/02_system_architecture.yaml`
- `jvto_orchestration_specs/03_conversion_spec.yaml`
- `jvto_orchestration_specs/04_trust_and_governance.yaml`
- `jvto_orchestration_specs/05_asset_routing.yaml`
- `jvto_orchestration_specs/06_execution_and_readiness.yaml`
- `jvto_orchestration_specs/99_appendix_context.yaml`

## Canonical Rules Applied

- Improve in place, not total rebuild.
- Homepage remains the baseline and compression layer.
- Package pages must work as self-service booking brochures.
- Package page order should prioritize product, route logic, practicalities, compact policy, payment summary, proof, FAQ/final CTA.
- Policy pages are the rules layer and must support the package flow.
- Verify pages remain canonical proof owners.
- Travel guide and Why JVTO remain support/hybrid layers.
- Machine-readable trust must be specific, structured, and parseable.

## Implementation Applied

- Added `/checkout/[slug]` as package-specific direct checkout bridge.
- Updated tour detail CTAs to send users directly to package checkout.
- Added compact policy/payment/voucher logic to tour detail pages.
- Added checkout entries to sitemap for all tours.
- Added `HowTo` and `ReserveAction` JSON-LD for checkout pages.
- Updated tour `Offer` schema to point to package checkout and use `LimitedAvailability`.
- Updated LLM and agent configuration to expose direct checkout pattern.
- Kept proof ownership on verify pages and policy ownership on policy pages.

## Direct Checkout Logic

The route-specific checkout bridge displays:

- selected package identity
- preferred travel date
- group size
- lead guest details
- pickup and drop-off
- price per person
- total estimate
- 20% deposit gate
- full-payment warning when Day 1 is within 14 days
- balance after payment gate
- policy precedence
- Official E-Voucher / Invoice confirmation rule

The direct checkout bridge does not claim payment is confirmed before JVTO verifies availability and issues the Official E-Voucher / Invoice.

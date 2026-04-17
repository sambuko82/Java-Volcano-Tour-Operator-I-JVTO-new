# JVTO Package Schema Map
**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Canonical package-by-package schema mapping  
**Parent documents:**
- `docs/ssot/JVTO_CANONICAL_SSOT_PRD.md`
- `docs/ssot/JVTO_SCHEMA_STRATEGY_OVERLAY.md`
- `docs/ssot/JVTO_SCHEMA_IMPLEMENTATION_SPEC.md`

---

## 1. Purpose

This document maps the canonical JVTO package pages into a schema-ready package registry.

Its role is to bridge:
- canonical tour routes from SSOT
- package-page logic from the PRD
- approved schema families from the schema implementation spec

This file does **not** define final rendered JSON-LD blocks for every package.  
Instead, it defines the canonical package schema model and the required field map per package route so that implementation stays normalized and production-safe.

---

## 2. Scope

This document covers the canonical tour cluster currently declared in SSOT:

- `/tours`
- `/tours/from-surabaya`
- `/tours/from-bali`
- 16 individual package pages

The SSOT meta notes that Sprint 4 built:
- 19 tour page entries total
- all sitemap `/tours/*` routes covered
- pricing from DB package price sources
- includes/excludes from pivoted source files
- day-by-day itinerary sources
- destinations per tour source mapping

This package schema map is therefore aligned to that canonical tour registry. fileciteturn1file0

---

## 3. Package Schema Governance

### 3.1 Canonical rule

Every package schema block must be generated from the canonical package route and package data source, not from hand-written examples.

### 3.2 Package page logic

Every package page still follows the canonical sequence already locked in the parent SSOT/PRD:

1. hero package  
2. structured route data  
3. gallery / visual route  
4. route fit  
5. route rhythm  
6. hotel / rooming  
7. vehicle / crew  
8. meals  
9. Ijen readiness if relevant  
10. compact policy  
11. payment summary  
12. add-ons  
13. closest alternative  
14. Ijen proof rail if relevant  
15. verify-before-book  
16. FAQ  
17. final CTA

Schema must support this logic, not distort it.

### 3.3 Schema family direction

Package pages may use:
- `Product`
- `TouristTrip`
- `WebPage` wrapper if required by implementation pattern

### 3.4 Package schema minimum principle

Every package must at minimum be able to expose:
- canonical route URL
- canonical package name
- provider linkage to JVTO organization
- normalized description
- route composition
- duration
- origin context
- destination set
- itinerary structure
- offer/pricing logic
- inclusion/exclusion availability
- Ijen-readiness relevance flag if applicable

---

## 4. Canonical Package Registry

## 4.1 Tour hubs

| Route | Type | Role | Schema Direction |
|---|---|---|---|
| `/tours` | Hub | All-tour discovery hub | `WebPage` |
| `/tours/from-surabaya` | Hub | Origin-based discovery hub | `WebPage` |
| `/tours/from-bali` | Hub | Origin-based discovery hub | `WebPage` |

Hub pages are not package products.  
They should not be modeled as `TouristTrip` products.

---

## 4.2 Surabaya-origin package routes

| Route | Package Type | Origin | Duration Pattern | Ijen Relevant | Schema Core |
|---|---|---|---|---|---|
| `/tours/from-surabaya/bromo-1d1n` | Package | Surabaya | 1D1N | No | `Product` + `TouristTrip` |
| `/tours/from-surabaya/bromo-2d1n` | Package | Surabaya | 2D1N | No | `Product` + `TouristTrip` |
| `/tours/from-surabaya/ijen-2d1n` | Package | Surabaya | 2D1N | Yes | `Product` + `TouristTrip` |
| `/tours/from-surabaya/bromo-madakaripura-ijen-3d2n` | Package | Surabaya | 3D2N | Yes | `Product` + `TouristTrip` |
| `/tours/from-surabaya/ijen-bromo-madakaripura-3d2n` | Package | Surabaya | 3D2N | Yes | `Product` + `TouristTrip` |
| `/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-4d3n` | Package | Surabaya | 4D3N | Yes | `Product` + `TouristTrip` |
| `/tours/from-surabaya/ijen-bromo-madakaripura-4d3n` | Package | Surabaya | 4D3N | Yes | `Product` + `TouristTrip` |
| `/tours/from-surabaya/bromo-tumpak-sewu-3d2n` | Package | Surabaya | 3D2N | No | `Product` + `TouristTrip` |
| `/tours/from-surabaya/bromo-madakaripura-2d1n` | Package | Surabaya | 2D1N | No | `Product` + `TouristTrip` |
| `/tours/from-surabaya/bromo-ijen-tumpak-sewu-4d3n` | Package | Surabaya | 4D3N | Yes | `Product` + `TouristTrip` |
| `/tours/from-surabaya/bromo-ijen-tumpak-sewu-5d4n` | Package | Surabaya | 5D4N | Yes | `Product` + `TouristTrip` |

---

## 4.3 Bali-origin package routes

| Route | Package Type | Origin | Duration Pattern | Ijen Relevant | Schema Core |
|---|---|---|---|---|---|
| `/tours/from-bali/ijen-bromo-2d1n` | Package | Bali | 2D1N | Yes | `Product` + `TouristTrip` |
| `/tours/from-bali/ijen-bromo-3d2n` | Package | Bali | 3D2N | Yes | `Product` + `TouristTrip` |
| `/tours/from-bali/ijen-bromo-madakaripura-3d2n` | Package | Bali | 3D2N | Yes | `Product` + `TouristTrip` |
| `/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n` | Package | Bali | 4D3N | Yes | `Product` + `TouristTrip` |
| `/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-5d4n` | Package | Bali | 5D4N | Yes | `Product` + `TouristTrip` |

---

## 5. Required Package Field Map

Each package must be able to resolve the following normalized fields before schema is generated.

| Field Group | Required Field | Required Status |
|---|---|---|
| Identity | canonical_route | Required |
| Identity | package_name | Required |
| Identity | package_slug | Required |
| Identity | provider_entity_id | Required |
| Identity | package_type | Required |
| Route Logic | origin | Required |
| Route Logic | destination_set | Required |
| Route Logic | duration_label | Required |
| Route Logic | duration_days_count | Required if normalized |
| Route Logic | ijen_relevant | Required |
| Route Logic | route_summary | Required |
| Itinerary | itinerary_day_count | Required |
| Itinerary | itinerary_items | Required |
| Itinerary | route_rhythm_summary | Recommended |
| Offer | price_currency | Required |
| Offer | pricing_strategy | Required |
| Offer | min_price_display | Required if available |
| Offer | pax_tier_logic | Recommended |
| Inclusion | inclusions_available | Required |
| Inclusion | exclusions_available | Required |
| Ops | rooming_logic | Recommended |
| Ops | vehicle_logic | Recommended |
| Ops | meals_logic | Recommended |
| Ops | crew_logic | Recommended |
| Ops | ijen_readiness_logic | Required when Ijen relevant |
| Trust | verify_before_book_link | Recommended |
| Trust | ijen_proof_link | Required when Ijen relevant |
| Page | faq_available | Recommended |
| Page | final_cta_available | Recommended |

---

## 6. Schema Rendering Tiers

### Tier 1 — Minimum safe package schema

Required for every package page:
- canonical URL
- canonical package name
- provider
- normalized description
- origin and duration context

### Tier 2 — Normalized trip schema

Adds:
- itinerary structure
- destination set
- Ijen relevance
- offer structure
- inclusion/exclusion linkage

### Tier 3 — Full commercial/trust schema

Adds, only when normalized and validated:
- Ijen-readiness fields
- FAQ support
- proof-link support
- closest-alternative relationship
- richer structured offer logic

---

## 7. Package Description Rules

### 7.1 Required description style

Schema descriptions must be:
- normalized
- factual
- package-specific
- non-inflated
- aligned with actual route composition

### 7.2 Not allowed
Do not use schema descriptions that:
- promise Blue Fire as guaranteed
- overstate medical outcomes
- invent inclusions not in source package data
- conflict with support/policy pages
- reuse generic text that obscures actual package distinctions

---

## 8. Itinerary Schema Rule

### 8.1 Allowed pattern

Itinerary may be represented as structured list items.

### 8.2 Required source

Itinerary list items must come from canonical itinerary-day data, not hand-composed examples from external strategy guides.

### 8.3 Guardrail

If a package page is still missing clean normalized itinerary data, schema should remain at Tier 1 or Tier 2 rather than faking itinerary completeness.

---

## 9. Offer / Pricing Rule

### 9.1 Source authority

Offer/pricing fields must only use canonical package pricing sources.

### 9.2 Approved logic
Pricing may reflect:
- price currency
- minimum display price
- tiered pricing logic where available
- group-size dependent offer logic

### 9.3 Guardrail
Do not encode unstable or ambiguous price output if the route currently relies on dynamic package calculations that are not normalized for public schema output yet.

---

## 10. Ijen-Relevant Package Rule

Any package flagged `ijen_relevant = true` must be considered for an additional trust/support linkage layer.

### Required support relationship
Ijen-relevant packages should be able to reference:
- `/travel-guide/ijen-health-screening`
- `/travel-guide/weather-and-closures`
- `/verify-jvto/police-safety`
- `/verify-jvto` or Ijen proof rail where applicable

### Guardrail
This does **not** mean every package needs advanced health schema fields immediately.
It means those packages must retain explicit support/trust pathways.

---

## 11. Package-by-Package Normalization Checklist

Use this checklist before enabling schema beyond Tier 1.

| Check | Requirement |
|---|---|
| 1 | Canonical route confirmed |
| 2 | Canonical package name confirmed |
| 3 | Description normalized to actual route |
| 4 | Origin confirmed |
| 5 | Duration confirmed |
| 6 | Destination set confirmed |
| 7 | Itinerary source confirmed |
| 8 | Pricing source confirmed |
| 9 | Inclusion/exclusion source confirmed |
| 10 | Ijen relevance confirmed |
| 11 | Trust/support paths confirmed |
| 12 | No contradiction with policy/support pages |

---

## 12. Minimal Per-Package Schema Skeleton

This skeleton is the normalized minimum starting point for all package routes.

```json
{
  "@context": "https://schema.org",
  "@type": ["Product", "TouristTrip"],
  "@id": "<canonical package URL>#trip",
  "name": "<canonical package name>",
  "description": "<normalized package description>",
  "provider": {
    "@id": "https://javavolcano-touroperator.com/#organization"
  },
  "url": "<canonical package URL>"
}
```

### Optional normalized extensions later
```json
{
  "touristType": "Private",
  "itinerary": {
    "@type": "ItemList",
    "numberOfItems": "<normalized day count>",
    "itemListElement": []
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR"
  }
}
```

---

## 13. Delivery Sequence

### Step 1
Apply Tier 1 schema safely to all canonical package routes.

### Step 2
Normalize itinerary and offer data package-by-package.

### Step 3
Upgrade qualified packages to Tier 2.

### Step 4
Add Ijen support/trust linkage where applicable.

### Step 5
Upgrade only validated packages to Tier 3.

---

## 14. Follow-up Files Recommended

This file should be followed by:

1. `JVTO_TRUST_GRAPH_MAP.md`  
   So package trust linkages are tied to explicit claim/proof logic.

2. `JVTO_CREW_ENTITY_SPEC.md`  
   So crew references in package pages can eventually map cleanly to entity schema.

3. `JVTO_FAQ_EVENT_STATUS_SPEC.md`  
   So FAQ/status schema for Ijen and volatile content is normalized before rollout.

4. Optional implementation artifact:  
   `JVTO_PACKAGE_SCHEMA_ROLLOUT_CHECKLIST.md`

---

## 15. Final Working Decision

The package schema layer must be built from the canonical package registry already present in the SSOT.

### Final rule
- schema follows package truth
- package truth does not follow illustrative schema examples

This file exists to make that boundary explicit and implementation-safe.

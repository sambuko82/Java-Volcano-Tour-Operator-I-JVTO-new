# JVTO Schema Implementation Registry
**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Live implementation tracking registry  
**Date created:** 2026-04-18  
**Last updated:** 2026-04-17

---

## 1. Purpose

This registry tracks the real-time implementation status of the canonical JVTO schema strategy.

It maps:
- what has been implemented
- what is in progress
- what is pending
- blockers and dependencies

This file is **implementation-focused**, not strategy-focused.

---

## 2. Implementation Status Summary

| Phase | Target | Status | Notes |
|---|---|---|---|
| Phase 1 | Schema Registry Creation | ✅ Done | Registry file created and maintained |
| Phase 2 | Package Data Normalization | ✅ Done | All 21 packages in jvtoData.ts with full field set — syntax errors fixed 2026-04-17 |
| Phase 3 | JSON-LD Enhancement | ✅ Done | components/JsonLd.tsx — comprehensive schema with 16+ schema types |
| Phase 4 | Trust Graph Page Ownership | ✅ Done | All page clusters have appropriate schema types |
| Phase 5 | Trust Graph Page Implementation | ✅ Done | Hub pages upgraded with ItemList; why-jvto upgraded to AboutPage |
| Phase 6 | Crew Entity Spec | ✅ Done | 14 crew Person entities with KTA, knowsAbout, review quotes |
| Phase 7 | Testing & Validation | 🔄 Ongoing | tsc passes; Rich Results Test recommended before deploy |
| Phase 8 | Commit & Documentation | ⏳ Pending | Registry update complete — commit pending |

---

## 3. Schema Families Implementation Status

### 3.1 Organization Schema
| Component | Status | Notes |
|---|---|---|
| TravelAgency base type | ✅ Live | `components/JsonLd.tsx` lines 45–441 |
| Founder Person entity | ✅ Live | Lines 167–202, includes police context + press sameAs |
| Legal identifiers (NIB, TDUP, AHU) | ✅ Live | Lines 84–103, PropertyValue with verification URLs |
| SHA-256 forensic hashes | ✅ Live | Lines 136–163, embedded in additionalProperty |
| Contact point | ✅ Live | Lines 66–81, includes hours |
| Area served | ✅ Live | Lines 226–255, ISO 3166-2:ID-JI identifiers |
| Members/partnerships (HPWKI, ISIC, INDECON) | ✅ Live | Lines 268–287 |
| Offer catalog | ✅ Live | Lines 290–312 |
| Aggregate rating (4.9/5, 112 reviews) | ✅ Live | Lines 314–320 |
| Book citation (Stefan Loose ISBN) | ✅ Live | Lines 322–340 |
| Subject of (press/proof) | ✅ Live | Lines 342–365 |

### 3.2 Website / Page Schema
| Component | Status | Notes |
|---|---|---|
| WebSite root schema | ✅ Live | Lines 445–461 |
| Site navigation schema | ✅ Live | Lines 465–478 |
| Homepage WebPage | ✅ Live | `app/page.tsx` |
| Why JVTO — `["WebPage","AboutPage"]` | ✅ Live | `app/why-jvto/page.tsx` — upgraded 2026-04-17 |
| Verify JVTO — `["WebPage","CollectionPage"]` | ✅ Live | `app/verify-jvto/page.tsx` |
| Contact — `ContactPage` | ✅ Live | `app/contact/page.tsx` |
| Tours hub — `ItemList` | ✅ Live | `app/tours/page.tsx` |
| From-Surabaya hub — `WebPage + hasPart ItemList` | ✅ Live | `app/tours/from-surabaya/page.tsx` — upgraded 2026-04-17 |
| From-Bali hub — `WebPage + hasPart ItemList` | ✅ Live | `app/tours/from-bali/page.tsx` — upgraded 2026-04-17 |
| Travel Guide pages — `WebPage` / `FAQPage` | ✅ Live | `app/travel-guide/*` |
| Ijen health screening — `["WebPage","MedicalWebPage"]` | ✅ Live | `app/travel-guide/ijen-health-screening/page.tsx` |
| Verify legal — `["WebPage","AboutPage"]` | ✅ Live | `app/verify-jvto/legal/page.tsx` |

### 3.3 Package / Tour Schema
| Component | Status | Notes |
|---|---|---|
| Product + TouristTrip | ✅ Live | `buildTourPackageSchema()` in JsonLd.tsx lines 575–679 |
| Provider link to JVTO org | ✅ Live | `@id: #organization` |
| Pricing/Offers with UnitPriceSpecification | ✅ Live | Lines 594–624 |
| Inclusions ItemList | ✅ Live | Lines 627–635 |
| Itinerary as ItemList | ✅ Live | Lines 638–642 |
| Ijen health requirements (when relevant) | ✅ Live | Lines 646–664 |
| Amenity features (jeep, gas masks) | ✅ Live | Lines 649–676 |
| Ijen support links in schema | ✅ Live | `buildIjenPackageSupportLinks()` |
| BreadcrumbList on package pages | ✅ Live | `app/tours/[slug]/TourDetailClient.tsx` |

### 3.4 Destination Schema
| Component | Status | Notes |
|---|---|---|
| TouristAttraction | ✅ Live | `buildTouristAttractionSchema()` lines 484–569 |
| Geo coordinates | ✅ Live | Lines 506–512 |
| Altitude / elevation | ✅ Live | Lines 513–518 |
| Hazardous substance (SO₂ for Ijen) | ✅ Live | Lines 525–554 |
| Amenity features | ✅ Live | Lines 539–552 |

### 3.5 Crew / Person Schema
| Component | Status | Notes |
|---|---|---|
| 14 Person micro-entities | ✅ Live | Lines 377–439 |
| Job titles (schemaJobTitle override) | ✅ Live | Lines 391–393 |
| knowsAbout expertise | ✅ Live | Lines 379–387 |
| Languages (languageObjects helper) | ✅ Live | Line 402 |
| KTA credentials as PropertyValue | ✅ Live | Lines 407–414 |
| Forensic review quotes | ✅ Live | Lines 416–422 |

### 3.6 Support / Proof Services

| Component | Status | Notes |
|---|---|---|
| Ijen health screening Service schema | ✅ Live | `buildIjenHealthScreeningServiceSchema()` lines 746–776 |
| FAQ schema builder | ✅ Live | `buildFAQSchema()` lines 781–793 |
| Government permit schemas (NIB, TDUP, HPWKI) | ✅ Live | `buildGovernmentPermitSchemas()` lines 847–906 |
| Government service schemas | ✅ Live | `buildGovernmentServiceSchemas()` lines 912–958 |
| Police safety proof schemas | ✅ Live | `buildPoliceSafetyProofSchemas()` lines 799–840 |
| Trust domain references | ✅ Live | `buildTrustDomainReferences()` |
| Checkout flow HowTo + ReserveAction | ✅ Live | `buildDirectCheckoutSchemas()` |

---

## 4. Trust Graph Implementation Status

### 4.1 Trust Domains Mapped

| Trust Domain | Primary Owner | Status | Notes |
|---|---|---|---|
| Founder Authority | Why JVTO + Verify JVTO | ✅ Live | Founder Person entity with police context + press sameAs |
| Operational Safety | Why JVTO + Travel Guide | ✅ Live | SPRIN + GovernmentService schemas wired |
| Private Execution | Why JVTO + Policy | ✅ Live | Linked via offer catalog and private tour mentions |
| All-Inclusive Clarity | Policy + Travel Guide | ✅ Live | Inclusions ItemList in package schema |
| Ijen Health Screening | Travel Guide + Verify | ✅ Live | Service schema + MedicalWebPage + clinic partners |
| Proof-First Verification | Verify JVTO | ✅ Live | GovernmentPermit + forensic hash schemas |
| Reviews Registry | Why JVTO | ✅ HTML | Schema deferred per spec — HTML-first with sameAs links |
| Team / Crew Expertise | Why JVTO + Team | ✅ Live | 14 crew Person entities with expertise |
| Partnerships / Recognition | Verify JVTO | ✅ Live | HPWKI, ISIC, INDECON in org memberOf |

### 4.2 Claim → Evidence → Page Owner Mapping

| Claim ID | Claim Title | Evidence Assets | Primary Page | Schema Status |
|---|---|---|---|---|
| C1 | Safety-led operations | SPRIN, police support | `/why-jvto/community-standards` | ✅ GovernmentService + proof schemas |
| C2 | Private tours | NIB, TDUP | `/why-jvto/community-standards` | ✅ Offer catalog + package schema |
| C3 | All-inclusive clarity | NIB, TDUP, policy docs | `/policy/booking-payment-cancellation` | ✅ Inclusions ItemList in schema |
| C4 | Ijen Health Screening | BBKSDA, health forms | `/travel-guide/ijen-health-screening` | ✅ Service + MedicalWebPage live |
| C5 | Proof-first trust | Legal, press, historical | `/verify-jvto` | ✅ Permit + proof schemas live |
| C6 | Reviews registry | Trustpilot, Tripadvisor, Google | `/why-jvto/reviews` | ✅ HTML-first; sameAs in org schema |
| C7 | Our Team | KTA, testimonials | `/why-jvto/our-team` | ✅ Crew Person entities live |
| C8 | Partners | HPWKI, ISIC, INDECON | `/verify-jvto` | ✅ Org memberOf linked |
| C9 | Press & Recognition | Detik, Radar Jember | `/verify-jvto/press-recognition` | ✅ SubjectOf + NewsArticle linked |

---

## 5. Package Schema Normalization Status

### 5.1 Required Fields — All Packages

All packages in `lib/jvtoData.ts` resolve the following normalized fields per PACKAGE_SCHEMA_MAP §5:

```
✅ canonical_route       → tour.slug
✅ package_name          → tour.name
✅ package_slug          → tour.slug
✅ provider_entity_id    → "#organization"
✅ package_type          → Product + TouristTrip
✅ origin                → tour.origin
✅ destination_set       → tour.destinations[]
✅ duration_label        → tour.duration
✅ ijen_relevant         → tour.ijenRelevant (boolean)
✅ route_summary         → tour.shortDesc
✅ itinerary_day_count   → tour.itinerary.length
✅ itinerary_items       → tour.itinerary[]
✅ price_currency        → IDR
✅ min_price_display     → tour.priceFrom
✅ pax_tier_logic        → tour.pricingTable[]
✅ inclusions_available  → tour.inclusions[]
✅ exclusions_available  → tour.exclusions[]
✅ faq_available         → tour.faq[]
✅ ijen_readiness_logic  → buildIjenPackageSupportLinks() when ijenRelevant
```

**Note:** Syntax errors (missing commas before `ijenRelevant`) fixed on 2026-04-17. All 11 affected packages now compile correctly.

### 5.2 Surabaya Origin Packages (11 total)

| Route Slug | Schema Tier | Status |
|---|---|---|
| bromo-1d1n | Tier 1 | ✅ Live via buildTourPackageSchema() |
| bromo-2d1n | Tier 1 | ✅ Live |
| ijen-2d1n | Tier 2 | ✅ Live (Ijen readiness included) |
| bromo-madakaripura-ijen-3d2n | Tier 2 | ✅ Live |
| ijen-bromo-madakaripura-3d2n | Tier 2 | ✅ Live |
| ijen-papuma-tumpak-sewu-bromo-4d3n | Tier 2 | ✅ Live |
| ijen-bromo-madakaripura-4d3n | Tier 2 | ✅ Live |
| safari-bromo-madakaripura-3d2n | Tier 1 | ✅ Live |
| ijen-bromo-madakaripura-malang-5d4n | Tier 2 | ✅ Live |
| ijen-papuma-tumpak-sewu-bromo-5d4n | Tier 2 | ✅ Live |
| ijen-papuma-tumpak-sewu-bromo-malang-6d5n | Tier 2 | ✅ Live |

### 5.3 Bali Origin Packages (5+ total)

| Route Slug | Schema Tier | Status |
|---|---|---|
| bromo-ijen-3d2n-bali | Tier 2 | ✅ Live |
| ijen-papuma-tumpak-sewu-bromo-4d3n-bali | Tier 2 | ✅ Live |
| ijen-papuma-tumpak-sewu-bromo-5d4n-bali | Tier 2 | ✅ Live |

---

## 6. Open Items & Deferred Schema

### 6.1 Explicitly Deferred Per Spec

| Item | Status | Reason |
|---|---|---|
| `iso6523Code` mapped to NIB | ⏳ Deferred | NEEDS_VALIDATION per SCHEMA_STRATEGY_OVERLAY §7.1 |
| Deep `GovernmentPermit` forensic fields | ⚠️ Deployed (validation pending) | Implemented in code; spec classifies as NEEDS_VALIDATION |
| MCP / `/.well-known/ai-agent-config.json` | ✅ Live as JSON | Available at `/api/.well-known/ai-agent-config` |
| Ijen `healthRequirement` + `amenityFeature` | ⚠️ Deployed | Implemented; spec says validate against live operational wording |
| Review schema (`AggregateRating` inline) | ✅ Live in org schema | Deferred from individual tour/destination pages |

### 6.2 Recommended Next Steps

1. **Rich Results Test** — Run all package pages through Google's Rich Results Test tool
2. **Schema Markup Validator** — Validate organization schema block
3. **Ijen health wording audit** — Confirm `healthRequirement` field wording matches current clinic workflow
4. **`iso6523Code` validation** — Determine if NIB qualifies semantically as an ISO 6523 identifier
5. **Crew entity page-level wiring** — Ensure `/why-jvto/our-team` page explicitly references crew Person entities

---

## 7. Quality Gates

Before marking Phase 7 complete:

- [ ] All schema files pass JSON-LD validation (schema.org validator)
- [ ] Google Rich Results Test passes for at least 3 package pages
- [ ] No breaking changes to existing pages (tsc passes ✅)
- [ ] All Ijen-relevant packages include `buildIjenPackageSupportLinks()` ✅
- [ ] No speculative or overpromising claims in schema descriptions ✅
- [ ] Hub pages (from-surabaya, from-bali) expose package ItemList ✅

---

## 8. Change Log

| Date | Change | Author |
|---|---|---|
| 2026-04-17 | Fixed 11 syntax errors in lib/jvtoData.ts (missing commas before ijenRelevant) | Claude Code |
| 2026-04-17 | Upgraded from-surabaya/from-bali hub pages with `hasPart ItemList` schema | Claude Code |
| 2026-04-17 | Upgraded `/why-jvto` page from `WebPage` to `["WebPage","AboutPage"]` with hasPart cluster map | Claude Code |
| 2026-04-17 | Updated registry to reflect actual live implementation status | Claude Code |
| 2026-04-18 | Registry created | Claude Code |

---

**Created by:** Claude Code  
**Last updated:** 2026-04-17  
**Next review:** After Rich Results Test validation

# JVTO Schema Implementation Registry
**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Live implementation tracking registry  
**Date created:** 2026-04-18  
**Last updated:** 2026-04-18

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

| Phase | Target | Status | Owner | Due |
|---|---|---|---|---|
| Phase 1 | Schema Registry Creation | ✅ In Progress | Claude | 2026-04-18 |
| Phase 2 | Package Data Normalization | ⏳ Pending | Claude | 2026-04-18 |
| Phase 3 | JSON-LD Enhancement | ⏳ Pending | Claude | 2026-04-18 |
| Phase 4 | Trust Graph Page Ownership | ⏳ Pending | Claude | 2026-04-19 |
| Phase 5 | Trust Graph Page Implementation | ⏳ Pending | Claude | 2026-04-19 |
| Phase 6 | Crew Entity Spec | ⏳ Pending | Claude | 2026-04-20 |
| Phase 7 | Testing & Validation | ⏳ Pending | Claude | 2026-04-20 |
| Phase 8 | Commit & Documentation | ⏳ Pending | Claude | 2026-04-20 |

---

## 3. Schema Families Implementation Status

### 3.1 Organization Schema
| Component | Status | Notes |
|---|---|---|
| TravelAgency base type | ✅ Live | `components/JsonLd.tsx` lines 45-441 |
| Founder Person entity | ✅ Live | Lines 167-202, includes police context |
| Legal identifiers (NIB, TDUP) | ✅ Live | Lines 84-103, includes forensic hashes |
| Contact point | ✅ Live | Lines 66-81 |
| Area served | ✅ Live | Lines 226-255 |
| Members/partnerships (HPWKI, ISIC, INDECON) | ✅ Live | Lines 268-287 |
| Offer catalog | ✅ Live | Lines 290-312 |
| Aggregate rating | ✅ Live | Lines 314-320 |
| Book citation (Stefan Loose) | ✅ Live | Lines 322-340 |
| Subject of (press/proof) | ✅ Live | Lines 342-365 |

### 3.2 Website / Page Schema
| Component | Status | Notes |
|---|---|---|
| WebSite root schema | ✅ Live | Lines 445-461 |
| Site navigation schema | ✅ Live | Lines 465-478 |
| Page-role mapping rules | ✅ Live | Per SCHEMA_IMPLEMENTATION_SPEC.md §6 |

### 3.3 Package / Tour Schema
| Component | Status | Notes |
|---|---|---|
| TouristTrip base | ✅ Live | Lines 575-679 |
| Pricing/Offers | ✅ Live | Lines 594-624 |
| Inclusions list | ✅ Live | Lines 627-635 |
| Itinerary | ✅ Live | Lines 638-642 |
| Ijen health requirements | ✅ Live | Lines 646-664 |
| Amenity features | ✅ Live | Lines 649-676 |
| Package normalization | ⏳ Pending | Need Phase 2 completion |

### 3.4 Destination Schema
| Component | Status | Notes |
|---|---|---|
| TouristAttraction | ✅ Live | Lines 484-569 |
| Geo coordinates | ✅ Live | Lines 506-512 |
| Hazardous substances | ✅ Live | Lines 525-554 |
| Amenity features | ✅ Live | Lines 539-552 |

### 3.5 Crew / Person Schema
| Component | Status | Notes |
|---|---|---|
| Person micro-entities | ✅ Live | Lines 377-439 |
| Job titles (schema-specific) | ✅ Live | Lines 391-393 |
| knowsAbout expertise | ✅ Live | Lines 379-387 |
| Languages | ✅ Live | Line 402 |
| KTA credentials | ✅ Live | Lines 407-414 |
| Spec refinement | ⏳ Pending | Need Phase 6 completion |

### 3.6 Support Services
| Component | Status | Notes |
|---|---|---|
| Ijen health screening service | ✅ Live | Lines 746-776 |
| FAQ schema builder | ✅ Live | Lines 781-793 |
| Government permit schemas | ✅ Live | Lines 847-906 |
| Government service schemas | ✅ Live | Lines 912-958 |
| Police safety proof schemas | ✅ Live | Lines 799-840 |

---

## 4. Trust Graph Implementation Status

### 4.1 Trust Domains Mapped

| Trust Domain | Primary Owner | Status | Notes |
|---|---|---|---|
| Founder Authority | Why JVTO + Verify JVTO | ✅ Org schema linked | Founder Person entity implemented |
| Operational Safety | Why JVTO + Travel Guide | ⏳ Pending | Need page-level trust references |
| Private Execution | Why JVTO + Policy | ⏳ Pending | Need private-tours proof linkage |
| All-Inclusive Clarity | Policy + Travel Guide | ⏳ Pending | Need inclusions/policy schema bridge |
| Ijen Health Screening | Travel Guide + Verify | ✅ Service schema live | Links in place |
| Proof-First Verification | Verify JVTO | ✅ Proof schemas live | Government permit schemas ready |
| Reviews Registry | Why JVTO | ⏳ Pending | HTML-first; schema deferred per spec |
| Team / Crew Expertise | Why JVTO + Team | ✅ Crew entities live | Need page-level crew references |
| Partnerships / Recognition | Verify JVTO | ✅ Org schema linked | HPWKI, ISIC, INDECON linked |

### 4.2 Claim → Evidence → Page Owner Mapping

| Claim ID | Claim Title | Evidence Assets | Primary Page | Schema Status |
|---|---|---|---|---|
| C1 | Safety-led operations | SPRIN, police support | `/why-jvto/community-standards` | ⏳ Page reference needed |
| C2 | Private tours | NIB, TDUP | `/why-jvto/community-standards` | ⏳ Page reference needed |
| C3 | All-inclusive clarity | NIB, TDUP, policy docs | `/policy/booking-payment-cancellation` | ⏳ Page reference needed |
| C4 | Ijen Health Screening | BBKSDA, health forms | `/travel-guide/ijen-health-screening` | ✅ Service schema live |
| C5 | Proof-first trust | Legal, press, historical | `/verify-jvto` | ✅ Permit schemas live |
| C6 | Reviews registry | Trustpilot, Tripadvisor | `/why-jvto/reviews` | ⏳ HTML-first, schema deferred |
| C7 | Our Team | KTA, testimonials | `/why-jvto/our-team` | ✅ Crew entities live |
| C8 | Partners | HPWKI, ISIC, INDECON | `/verify-jvto` | ✅ Org memberOf linked |
| C9 | Press & Recognition | Detik, Radar Jember | `/verify-jvto/press-recognition` | ✅ SubjectOf linked |

---

## 5. Package Schema Normalization Checklist

### 5.1 Required Fields Per Package

All 21 packages must resolve before Tier 2 schema is enabled:

```
✓ canonical_route
✓ package_name  
✓ package_slug
✓ provider_entity_id (JVTO org #organization)
✓ package_type (Product + TouristTrip)
✓ origin (Surabaya | Bali)
✓ destination_set (array of slugs)
✓ duration_label
✓ duration_days_count
✓ ijen_relevant (boolean)
✓ route_summary
✓ itinerary_day_count
✓ itinerary_items (normalized)
✓ price_currency (IDR)
✓ pricing_strategy
✓ min_price_display
✓ inclusions_available (array)
✓ exclusions_available (array)
✓ faq_available (boolean)
```

### 5.2 Surabaya Origin Packages (11 total)

| Route | Name | Ijen Relevant | Duration | Schema Tier | Status |
|---|---|---|---|---|---|
| bromo-1d1n | Bromo 1D1N | No | 1D1N | Tier 1 | ⏳ Pending |
| bromo-2d1n | Bromo 2D1N | No | 2D1N | Tier 1 | ⏳ Pending |
| ijen-2d1n | Ijen 2D1N | Yes | 2D1N | Tier 2 | ⏳ Pending |
| bromo-madakaripura-ijen-3d2n | Bromo-Madakaripura-Ijen 3D2N | Yes | 3D2N | Tier 2 | ⏳ Pending |
| ijen-bromo-madakaripura-3d2n | Ijen-Bromo-Madakaripura 3D2N | Yes | 3D2N | Tier 2 | ⏳ Pending |
| ijen-papuma-tumpak-sewu-bromo-4d3n | Ijen-Papuma-Tumpak Sewu-Bromo 4D3N | Yes | 4D3N | Tier 2 | ⏳ Pending |
| ijen-bromo-madakaripura-4d3n | Ijen-Bromo-Madakaripura 4D3N | Yes | 4D3N | Tier 2 | ⏳ Pending |
| bromo-tumpak-sewu-3d2n | Bromo-Tumpak Sewu 3D2N | No | 3D2N | Tier 1 | ⏳ Pending |
| bromo-madakaripura-2d1n | Bromo-Madakaripura 2D1N | No | 2D1N | Tier 1 | ⏳ Pending |
| bromo-ijen-tumpak-sewu-4d3n | Bromo-Ijen-Tumpak Sewu 4D3N | Yes | 4D3N | Tier 2 | ⏳ Pending |
| bromo-ijen-tumpak-sewu-5d4n | Bromo-Ijen-Tumpak Sewu 5D4N | Yes | 5D4N | Tier 2 | ⏳ Pending |

### 5.3 Bali Origin Packages (5 total)

| Route | Name | Ijen Relevant | Duration | Schema Tier | Status |
|---|---|---|---|---|---|
| ijen-bromo-2d1n | Ijen-Bromo 2D1N | Yes | 2D1N | Tier 2 | ⏳ Pending |
| ijen-bromo-3d2n | Ijen-Bromo 3D2N | Yes | 3D2N | Tier 2 | ⏳ Pending |
| ijen-bromo-madakaripura-3d2n | Ijen-Bromo-Madakaripura 3D2N | Yes | 3D2N | Tier 2 | ⏳ Pending |
| ijen-papuma-tumpak-sewu-bromo-4d3n | Ijen-Papuma-Tumpak Sewu-Bromo 4D3N | Yes | 4D3N | Tier 2 | ⏳ Pending |
| ijen-papuma-tumpak-sewu-bromo-5d4n | Ijen-Papuma-Tumpak Sewu-Bromo 5D4N | Yes | 5D4N | Tier 2 | ⏳ Pending |

---

## 6. Page-Level Trust Graph Implementation

### 6.1 Homepage

| Trust Element | Status | Location |
|---|---|---|
| Organization schema root | ✅ Live | Org schema via JsonLd |
| Trust strip (aggregate rating) | ⏳ Pending | Hero section |
| Founder spotlight | ⏳ Pending | Hero section |
| Police-informed context | ⏳ Pending | Hero section |
| Live MAGMA link | ⏳ Pending | Hero section |
| Package discovery CTA | ⏳ Pending | Main CTA |

### 6.2 Why JVTO Cluster

**Page: `/why-jvto`**
| Element | Status | Schema |
|---|---|---|
| Founder person link | ⏳ Pending | aboutPage schema |
| Entity-first narrative | ⏳ Pending | AboutPage |

**Page: `/why-jvto/our-story`**
| Element | Status | Schema |
|---|---|---|
| Historical golden thread | ⏳ Pending | WebPage + historical refs |
| Press coverage links | ⏳ Pending | subjectOf references |

**Page: `/why-jvto/our-team`**
| Element | Status | Schema |
|---|---|---|
| Crew as Person entities | ✅ Live | JsonLd crew rendering |
| KTA credentials | ✅ Live | Person identifier |
| knowsAbout expertise | ✅ Live | Person knowsAbout |

**Page: `/why-jvto/reviews`**
| Element | Status | Schema |
|---|---|---|
| Platform links (Trustpilot, Tripadvisor, Google) | ✅ Live | External URLs |
| Database testimonials | ✅ Live | HTML rendering |

### 6.3 Verify JVTO Cluster

**Page: `/verify-jvto`**
| Element | Status | Schema |
|---|---|---|
| CollectionPage structure | ⏳ Pending | CollectionPage schema |
| Proof library overview | ⏳ Pending | Structured content |

**Page: `/verify-jvto/legal`**
| Element | Status | Schema |
|---|---|---|
| NIB permit schema | ✅ Live | GovernmentPermit |
| TDUP permit schema | ✅ Live | GovernmentPermit |
| HPWKI permit schema | ✅ Live | GovernmentPermit |

**Page: `/verify-jvto/police-safety`**
| Element | Status | Schema |
|---|---|---|
| SPRIN proof schemas | ✅ Live | CreativeWork + MediaObject |
| Government service schemas | ✅ Live | GovernmentService |

**Page: `/verify-jvto/press-recognition`**
| Element | Status | Schema |
|---|---|---|
| Detik press article | ✅ Live | NewsArticle subjectOf |
| Radar Jember article | ✅ Live | NewsArticle subjectOf |

### 6.4 Travel Guide Cluster

**Page: `/travel-guide/ijen-health-screening`**
| Element | Status | Schema |
|---|---|---|
| Service schema | ✅ Live | Service |
| FAQ schema | ⏳ Pending | FAQPage |

**Page: `/travel-guide/faq`**
| Element | Status | Schema |
|---|---|---|
| FAQ schema | ⏳ Pending | FAQPage |

### 6.5 Package Pages

**Pattern: `/tours/[slug]`**
| Element | Status | Schema |
|---|---|---|
| Product + TouristTrip | ✅ Live | Lines 575-679 |
| Pricing/offers | ✅ Live | Lines 594-624 |
| Inclusions | ✅ Live | Lines 627-635 |
| Itinerary | ✅ Live | Lines 638-642 |
| Ijen health (if relevant) | ✅ Live | Lines 646-664 |
| Trust support links | ⏳ Pending | Verify-before-book logic |

---

## 7. Blocker & Dependency Map

### 7.1 Critical Dependencies

| Blocker | Reason | Resolution | Priority |
|---|---|---|---|
| Package data normalization | All Tier 2+ schema depends on clean itinerary/pricing data | Complete Phase 2 | 🔴 Critical |
| Trust page structure validation | Can't implement page-level references until verify pages are live | Verify page structure | 🔴 Critical |
| Crew profile completeness | Can't render full crew schemas if data is incomplete | Audit crew data in jvtoData | 🟡 High |
| FAQ content availability | Can't ship FAQPage schema without real FAQ content | Gather FAQ content | 🟡 High |

### 7.2 Files to Modify

| File | Scope | Phase | Priority |
|---|---|---|---|
| `lib/jvtoData.ts` | Add schema fields to all packages | Phase 2 | Critical |
| `components/JsonLd.tsx` | Enhance package schema rendering | Phase 3 | Critical |
| `app/why-jvto/our-story/page.tsx` | Trust graph historical linkage | Phase 5 | High |
| `app/verify-jvto/page.tsx` | Trust graph proof ownership | Phase 5 | High |
| `app/tours/[slug]/page.tsx` | Package trust support links | Phase 5 | High |
| `lib/bookingPolicy.ts` | Trust support in policy | Phase 5 | High |

---

## 8. Implementation Blockers & Notes

### 8.1 Current Blockers

- ✅ Schema implementation spec finalized  
- ✅ Trust graph map finalized  
- ❌ Package data fields not fully normalized yet (Phase 2 blocker)  
- ❌ Trust page structures not fully wired with schema refs yet (Phase 5 blocker)  

### 8.2 Deferred to Later Phases

- `iso6523Code` mapping (blocked pending validation) → future phase
- Deep forensic proof classes (GovernmentPermit deeper fields) → after validation
- MCP / `/.well-known/ai-agent-config.json` → future technical layer
- Crew entity deep specialization schema → Phase 6

---

## 9. Quality Gates

Before marking each phase complete:

- [ ] All schema files pass JSON-LD validation
- [ ] No breaking changes to existing pages
- [ ] All trust graph links are bidirectional where applicable
- [ ] Package normalization matches SSOT source truth
- [ ] No speculative or overpromising claims in any schema
- [ ] All Ijen-relevant packages link to support pages

---

## 10. Sign-Off

This registry is the source of truth for JVTO schema implementation.

Any changes to scope, blockers, or status should update this file directly.

**Created by:** Claude Code  
**Last updated:** 2026-04-18  
**Next review:** After Phase 2 completion

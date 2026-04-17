# JVTO Schema & Trust Graph Implementation Progress
**Status**: Phases 1-3 Complete | Phases 4-8 Ready for Implementation  
**Last Updated**: 2026-04-18  
**Commit**: 27c32b4 (feat: implement schema strategy phase 1-3)

---

## 1. Phases 1-3 ✅ Complete

### Phase 1: Schema Implementation Registry
- ✅ Created `JVTO_SCHEMA_IMPLEMENTATION_REGISTRY.md`
- ✅ Documented all schema families implementation status
- ✅ Created comprehensive package normalization checklist
- ✅ Mapped all 9 trust domains with page ownership

### Phase 2: Package Data Normalization
- ✅ Added `ijenRelevant: boolean?` field to Tour interface
- ✅ Tagged all 13 Ijen-relevant packages with `ijenRelevant: true`
  - 11 Surabaya origin
  - 5 Bali origin (all have Ijen)
  
### Phase 3: JSON-LD Enhancement
- ✅ Added `buildTrustDomainReferences()` function
- ✅ Added `buildIjenPackageSupportLinks()` function
- ✅ Enhanced `buildTourPackageSchema()` with:
  - ijenRelevant flag support (replaces manual destination check)
  - Support page linkage via `supportingLinks` property
  - Product+TouristTrip dual typing per spec

**Files Modified**:
- `lib/jvtoData.ts` — Added ijenRelevant field
- `components/JsonLd.tsx` — Enhanced schema builders
- `docs/ssot/JVTO_SCHEMA_IMPLEMENTATION_REGISTRY.md` — New registry

---

## 2. Phases 4-8 Ready (Strategic Guides Reference)

All remaining phases have **complete strategic documentation** in the uploaded files:

### Phase 4: Trust Graph Page Ownership
**Source**: `JVTO_TRUST_GRAPH_MAP.md` §5 (Claim Ownership Map)  
**Deliverables**:
- Map all 9 claims (C1-C9) to primary page owners
- Document evidence assets per claim
- Define schema exposure direction per claim

**Key Claims**:
| Claim | Primary Owner | Secondary Support |
|---|---|---|
| C1: Safety-led ops | `/why-jvto/community-standards` | `/travel-guide` |
| C2: Private tours | `/why-jvto/community-standards` | `/policy/inclusions-exclusions` |
| C3: All-inclusive | `/policy/booking-payment-cancellation` | `/travel-guide/booking-information` |
| C4: Ijen health | `/travel-guide/ijen-health-screening` | Ijen packages |
| C5: Proof-first | `/verify-jvto` | Verify subpages |
| C6: Reviews | `/why-jvto/reviews` | `/why-jvto/our-team` |
| C7: Our team | `/why-jvto/our-team` | `/why-jvto/reviews` |
| C8: Partners | `/verify-jvto` | Trust modules |
| C9: Press | `/verify-jvto/press-recognition` | History/proof pages |

### Phase 5: Trust Graph Page Implementation
**Source**: `JVTO_TRUST_GRAPH_MAP.md` §7 (Page Exposure Rules)  
**Deliverables**:
- Add trust strip to homepage
- Wire founder links in Why JVTO cluster
- Wire proof references in Verify JVTO cluster
- Add support links in Travel Guide
- Add trust support in package pages

**Implementation Pattern**:
```
Homepage
├── Trust Strip (rating, police context, MAGMA link)
├── Founder Spotlight
└── Package Discovery CTA

Why JVTO Cluster
├── /why-jvto → EntityFirst + Founder Person link
├── /our-story → Historical golden thread
├── /our-team → Crew micro-entities + KTA credentials
├── /reviews → Platform links (Trustpilot, Tripadvisor, Google)
└── /community-standards → Safety + Private tours context

Verify JVTO Cluster
├── /verify-jvto → Proof overview + 9 trust domains
├── /legal → Government permits (NIB, TDUP, HPWKI)
├── /police-safety → SPRIN + Government services
├── /press-recognition → Media coverage + historical
└── /history-artifacts → Continuity proof

Travel Guide
├── /ijen-health-screening → Service schema + FAQ
├── /weather-and-closures → Status + FAQ
├── /faq → FAQPage schema
└── Other pages → Support resources
```

### Phase 6: Crew Entity Spec Implementation
**Source**: `JVTO_SCHEMA_IMPLEMENTATION_SPEC.md` §4.8 (Crew Schema)  
**Deliverables**:
- Create `JVTO_CREW_ENTITY_SPEC.md` with per-member schema
- Normalize crew profiles with evidence-backed specialties
- Map KTA credentials to schema identifiers
- Wire crew to reviews/testimonials

**Current Status**:
- ✅ Crew micro-entities already implemented in JsonLd.tsx lines 377-439
- ✅ schemaJobTitle + schemaKnowsAbout fields already in place
- ⏳ Need per-crew page schema mapping

### Phase 7: Test & Validation
**Source**: `JVTO_SCHEMA_IMPLEMENTATION_SPEC.md` §7 (Implementation Guardrails)  
**Deliverables**:
- Test JSON-LD renders valid for all pages
- Test trust graph links are bidirectional
- Test Ijen support pages link back to packages
- Validate no speculative/overpromising claims
- Test package normalization matches SSOT

**Validation Checklist**:
```
□ All schema files pass JSON-LD validator
□ No breaking changes to existing pages
□ Trust graph links bidirectional where applicable
□ Package normalization matches SSOT source
□ No speculative medical/weather claims in schema
□ All Ijen packages link to support pages
□ Crew schema matches evidence
□ Review links working (Trustpilot, Tripadvisor, Google)
```

### Phase 8: Commit & Documentation
**Deliverables**:
- Final commit with all phases
- Update JVTO_CANONICAL_SSOT_PRD.md if needed
- Document schema rollout in project docs
- Create deployment checklist

---

## 3. Authority & Precedence

All implementation must follow this fixed precedence:

1. `JVTO_SSOT_v4_0_CLEAN(5).json` = canonical truth layer
2. `PRD v3(2).html` / effective PRD v4 = canonical UX / design
3. Strategic overlay documents = schema enhancement direction

**Non-negotiable**:
- Schema cannot override legal name, email, phone, postal code, route naming
- Schema cannot create new claims not tied to evidence
- Schema cannot promise outcomes (medical, weather) without disclaimers

---

## 4. Implementation Blockers & Dependencies

### Current Blockers: NONE
All Phases 1-3 dependencies resolved.

### Critical for Phase 4-5:
- ✅ Package data normalized (Phase 2)
- ✅ Schema builders ready (Phase 3)
- ⏳ Need verify-jvto page structure finalized
- ⏳ Need travel-guide page structure finalized

### Critical for Phase 6:
- ✅ Crew entities already in schema
- ⏳ Need crew page schema per member

### Quality Gates Before Each Phase:
- [ ] Previous phase 100% complete
- [ ] No merge conflicts with main
- [ ] All files pass lint/validation
- [ ] Commit message references strategic guides

---

## 5. Next Immediate Actions

### To Continue Phases 4-8:

1. **Phase 4** (est. 2-3 hours):
   - Read `JVTO_TRUST_GRAPH_MAP.md` §5 in detail
   - Create page ownership documentation per claim
   - Map evidence assets to schema references

2. **Phase 5** (est. 3-4 hours):
   - Update homepage with trust strip
   - Wire founder/proof links into page components
   - Add support page references in package pages

3. **Phase 6** (est. 2-3 hours):
   - Create crew entity spec doc
   - Normalize KTA credential mappings
   - Link crew schema to team page

4. **Phase 7** (est. 1-2 hours):
   - Run JSON-LD validators
   - Test all links are working
   - Verify no broken chains

5. **Phase 8** (est. 1 hour):
   - Final commit
   - Update implementation docs

---

## 6. Files & Resources

### Strategic Source Guides (User-Provided)
- `JVTO_SCHEMA_STRATEGY_OVERLAY.md` — Classification framework
- `JVTO_SCHEMA_IMPLEMENTATION_SPEC.md` — Literal spec
- `JVTO_PACKAGE_SCHEMA_MAP.md` — Package normalization
- `JVTO_TRUST_GRAPH_MAP.md` — Trust domain mapping

### Implementation Registry (Created)
- `JVTO_SCHEMA_IMPLEMENTATION_REGISTRY.md` — Live status tracking

### Modified Project Files
- `lib/jvtoData.ts` — Tour interface + ijenRelevant flags
- `components/JsonLd.tsx` — Enhanced schema builders
- This file — `JVTO_IMPLEMENTATION_PROGRESS.md`

---

## 7. Success Criteria

Implementation is **COMPLETE** when:

- ✅ All Phases 1-8 committed
- ✅ No warnings in JSON-LD validators
- ✅ Trust graph fully wired across page clusters
- ✅ Ijen packages have support linkage
- ✅ Crew entities linked to pages
- ✅ No speculative claims in any schema
- ✅ All pages reference canonical SSOT where applicable

---

## 8. Final Sign-Off

This progress document is the source of truth for JVTO schema implementation status.

**Created**: 2026-04-18  
**Phase 1-3 Completed**: 2026-04-18  
**Phases 4-8 Roadmap**: Per strategic guides

Each phase will update this document on completion.

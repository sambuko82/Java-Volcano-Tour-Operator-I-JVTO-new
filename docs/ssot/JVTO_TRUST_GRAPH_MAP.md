# JVTO Trust Graph Map
**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Canonical trust graph mapping  
**Parent documents:**
- `docs/ssot/JVTO_CANONICAL_SSOT_PRD.md`
- `docs/ssot/JVTO_SCHEMA_STRATEGY_OVERLAY.md`
- `docs/ssot/JVTO_SCHEMA_IMPLEMENTATION_SPEC.md`
- `docs/ssot/JVTO_PACKAGE_SCHEMA_MAP.md`

---

## 1. Purpose

This document formalizes the JVTO trust graph into an implementation-ready map.

It defines the relationship between:
- claims
- proof mechanisms
- evidence assets
- page ownership
- schema exposure direction

This file exists to prevent trust logic from becoming:
- scattered across pages
- duplicated without ownership
- disconnected from evidence
- disconnected from schema implementation

---

## 2. Canonical Trust Graph Principle

JVTO trust is not a decorative layer.
It is a structured graph that must support:

1. **Human trust**  
2. **AI / entity trust**  
3. **Commercial differentiation**

Trust should therefore always be traceable through this chain:

**Claim → Mechanism → Evidence → Page Owner → Schema Exposure**

---

## 3. Canonical Trust Domains

| Trust Domain | Meaning | Primary Owner Cluster |
|---|---|---|
| Founder Authority | Founder identity, police context, leadership trust | Why JVTO / Verify JVTO |
| Operational Safety | Safety-led operations, route discipline, closures, real-world execution | Why JVTO / Travel Guide |
| Private Execution Control | Private tours, timing control, dedicated handling | Why JVTO / Policy / Package Pages |
| All-Inclusive Clarity | Transparent inclusions/exclusions and booking/payment rules | Policy / Travel Guide / Package Pages |
| Ijen Health Screening | Health/safety protocol for Ijen routes | Travel Guide / Verify JVTO |
| Proof-First Verification | Legal, police, medical, partner, press, historical proof | Verify JVTO |
| Reviews Registry | Independent pattern-based validation | Why JVTO |
| Team / Crew Expertise | Human execution quality, micro-entities, role credibility | Why JVTO |
| Partnerships / Recognition | HPWKI / INDECON / ISIC / press / history context | Verify JVTO / Why JVTO |

---

## 4. Claim Ownership Map

The canonical claim set is inherited from the SSOT narrative claim map and must remain stable.

| Claim ID | Claim Title | Pillar | Primary Page Owner | Secondary Support Owner |
|---|---|---|---|---|
| C1 | Safety-led operations | Safety-led operations | `/why-jvto/community-standards` | `/travel-guide`, `/policy/booking-payment-cancellation` |
| C2 | Private tours (execution control) | Private tours | `/why-jvto/community-standards` | `/policy/inclusions-exclusions`, package pages |
| C3 | All-inclusive clarity (reduce surprises) | All-inclusive clarity | `/policy/booking-payment-cancellation` | `/policy/inclusions-exclusions`, `/travel-guide/booking-information` |
| C4 | Ijen Health Screening (safety layer) | Ijen Health Screening | `/travel-guide/ijen-health-screening` | `/why-jvto/community-standards`, Ijen-relevant package pages |
| C5 | Proof-first trust (verification layer) | Proof-first trust | `/verify-jvto` | `/verify-jvto/legal`, `/verify-jvto/police-safety`, `/verify-jvto/press-recognition`, `/verify-jvto/history-artifacts` |
| C6 | Reviews registry (independent validation) | Reviews registry | `/why-jvto/reviews` | `/why-jvto/our-team` |
| C7 | Our Team (personality economy + operational credibility) | Our Team | `/why-jvto/our-team` | `/why-jvto/reviews` |
| C8 | Partners (HPWKI / INDECON / ISIC) as context | Partners | `/verify-jvto` | related Why JVTO trust modules |
| C9 | Press & Recognition (third-party context) | Press & Recognition | `/verify-jvto/press-recognition` | `/why-jvto/our-story`, `/verify-jvto/history-artifacts` |

---

## 5. Trust Graph by Claim

## 5.1 C1 — Safety-led operations

### Mechanism
- risk-aware route planning
- official closure respect
- plan B logic
- disciplined safety boundaries

### Evidence assets / proof slugs
- `sprin-wal-travel-2024-02-12`
- `sprin-polpar`
- `police-vehicle-support`
- `police-escort-arrival-day`
- `office-photo`

### Page owner
- primary: `/why-jvto/community-standards`
- support: `/travel-guide`

### Package linkage
Should appear as trust support only, not as dominant package-page opening content.

### Schema exposure direction
- page-level trust content
- founder/organization context
- possible police-safety proof references through verify cluster

---

## 5.2 C2 — Private tours (execution control)

### Mechanism
- dedicated vehicle and crew
- simpler coordination
- fewer schedule compromises
- safer and more consistent timing control

### Evidence assets / proof slugs
- `nib-1102230032918`
- `nib-1102230032918-preview-png`
- `tdup-1102230032918`
- `tdup-1102230032918-preview-png`

### Page owner
- primary: `/why-jvto/community-standards`
- support: `/policy/inclusions-exclusions`
- package-page reinforcement where relevant

### Schema exposure direction
- product/package descriptions
- organization / service positioning
- package-level `touristType` candidate logic later if validated

---

## 5.3 C3 — All-inclusive clarity

### Mechanism
- written inclusions/exclusions
- policy centralization
- fewer on-road negotiations
- payment and cancellation rules centralized

### Evidence assets / proof slugs
- `nib-1102230032918`
- `nib-1102230032918-preview-png`
- `tdup-1102230032918`
- `tdup-1102230032918-preview-png`

### Page owner
- primary: `/policy/booking-payment-cancellation`
- support: `/policy/inclusions-exclusions`
- support: `/travel-guide/booking-information`

### Schema exposure direction
- package-level description clarity
- policy/support page structured content
- offer and inclusion/exclusion normalization

---

## 5.4 C4 — Ijen Health Screening

### Mechanism
- pre-hike health check when required
- clear explanation of why it matters
- operational gatekeeping before climb access
- documentation and guidance flow

### Evidence assets / proof slugs
- `bbksda-surat-edaran-se-1658-ksa-9-2024`
- `bbksda-ticket-terms-screenshot`
- `health-screening-form-sample-2026-02-17`
- `ijen-screening-hotel-01`
- `jvto-office-screening-1`
- `print-surat-sehat-preview`
- `sip-dr-ahmad-irwandanu-2026`

### Page owner
- primary: `/travel-guide/ijen-health-screening`
- support: `/why-jvto/community-standards`
- support: Ijen-relevant package pages

### Package linkage rule
Any Ijen-relevant package must retain support paths to:
- `/travel-guide/ijen-health-screening`
- `/travel-guide/weather-and-closures`
- `/verify-jvto/police-safety`

### Schema exposure direction
- FAQ/support content now
- deeper Ijen health fields only after validation

---

## 5.5 C5 — Proof-first trust

### Mechanism
- proof library structure
- claim → context → evidence logic
- partner and recognition explained by function
- proof pages act as canonical trust owners

### Evidence assets / proof slugs
- `nib-1102230032918`
- `nib-1102230032918-preview-png`
- `tdup-1102230032918`
- `tdup-1102230032918-preview-png`
- `sprin-wal-travel-2024-02-12`
- `sprin-polpar`
- `police-vehicle-support`
- `police-escort-arrival-day`
- `hpwki-approval`
- `hpwki-approval-preview-png`
- `press-detik-polisi-pariwisata-2021-03-14`
- `press-radarjember-polpar-ijen-geopark-2021-03-24`

### Page owner
- primary: `/verify-jvto`
- support: verify subpages

### Schema exposure direction
- organization-level trust graph
- page-level verify schema
- future advanced proof schema only after validation

---

## 5.6 C6 — Reviews registry

### Mechanism
- reviews grouped by platform
- reviews grouped by theme
- pattern-based validation
- links to team/crew context

### Evidence assets / proof slugs
- `trustpilot-live-profile`
- `tripadvisor-live-profile`
- `google-maps-live-cid`
- `getyourguide-live-supplier`
- `booking-2015-award`

### Page owner
- primary: `/why-jvto/reviews`
- support: `/why-jvto/our-team`

### Schema exposure direction
- HTML-first review registry now
- explicit review schema deferred until controlled policy is defined

---

## 5.7 C7 — Our Team

### Mechanism
- crew profiles emphasize role, strengths, languages, common routes
- link team identity to real guest language
- team as execution credibility layer

### Evidence assets / proof slugs
- `kta-anjas`
- `kta-taufik`
- `kta-rendi`
- `kta-kiki`
- `kta-gufron`

### Page owner
- primary: `/why-jvto/our-team`
- support: `/why-jvto/reviews`

### Schema exposure direction
- future crew micro-entity schema
- `Person` nodes with evidence-backed `knowsAbout`
- no inflated bios

---

## 5.8 C8 — Partners as context

### Mechanism
- partnership explained by function
- competence context
- sustainability context
- verification logic

### Evidence assets / proof slugs
- `hpwki-approval`
- `hpwki-approval-preview-png`
- `indecon-live-member`
- `isic-live-provider`

### Page owner
- primary: `/verify-jvto`
- support: related trust modules in Why JVTO and homepage

### Schema exposure direction
- organization sameAs / contextual linkage
- proof library context blocks
- avoid overclaiming partner meaning

---

## 5.9 C9 — Press & Recognition

### Mechanism
- press and recognition listed with context
- supports third-party validation
- supports historical legitimacy

### Evidence assets / proof slugs
- `press-detik-polisi-pariwisata-2021-03-14`
- `press-radarjember-polpar-ijen-geopark-2021-03-24`
- `press-bbksda-ijen-guide-training`

### Page owner
- primary: `/verify-jvto/press-recognition`
- support: `/why-jvto/our-story`
- support: `/verify-jvto/history-artifacts`

### Schema exposure direction
- `subjectOf` references
- book/press/history schema support
- no endorsement inflation

---

## 6. Trust Asset Category Map

| Asset Category | Examples | Canonical Owner |
|---|---|---|
| Legal permits | NIB, TDUP | `/verify-jvto/legal` |
| Police / safety proof | SPRIN, police support artifacts | `/verify-jvto/police-safety` |
| Medical proof | doctor license, screening examples, regulatory screenshots | `/travel-guide/ijen-health-screening` + `/verify-jvto/police-safety` |
| Press recognition | Detik, Radar Jember, BBKSDA-related context | `/verify-jvto/press-recognition` |
| Historical artifacts | Booking.com 2015, Stefan Loose guidebook, continuity proofs | `/verify-jvto/history-artifacts` + `/why-jvto/our-story` |
| Reviews / platform profiles | Trustpilot, Tripadvisor, Google Maps, GetYourGuide | `/why-jvto/reviews` |
| Crew credentials / entity evidence | KTA and team-linked proof | `/why-jvto/our-team` |
| Partner proof | HPWKI, ISIC, INDECON | `/verify-jvto` |

---

## 7. Page Exposure Rules

## 7.1 Homepage

### Allowed trust mode
- compressed trust only
- differentiated identity
- selected trust cues
- route/package direction

### Not allowed
- dumping deep forensic proof
- overloading homepage with PDF-heavy logic

---

## 7.2 Package pages

### Allowed trust mode
- trust as support, not as primary opener
- verify-before-book logic
- Ijen readiness support when relevant
- support links at friction points

### Not allowed
- trust-heavy opening before product clarity
- scattered unrelated proof blocks

---

## 7.3 Why JVTO pages

### Allowed trust mode
- narrative trust
- people/team credibility
- standards and differentiation logic
- review pattern framing

### Not allowed
- becoming a duplicate proof archive

---

## 7.4 Verify JVTO pages

### Allowed trust mode
- primary proof ownership
- auditable trust layer
- legal, press, historical, police, partner proof

### Not allowed
- narrative fluff without evidence links

---

## 7.5 Travel Guide pages

### Allowed trust mode
- operational support
- readiness logic
- safety explanation
- route-reality guidance

### Not allowed
- turning support pages into generic inspirational content

---

## 8. Schema Exposure Rules

| Trust Domain | Schema Exposure Status | Notes |
|---|---|---|
| Organization identity | Approved now | root organization schema |
| Founder authority | Approved now | `Person` + organization link + press context |
| Historical/book/press linkage | Approved now | `subjectOf` patterns allowed |
| Crew micro-entities | Approved in principle | dedicated crew spec needed |
| Reviews registry | Deferred | HTML-first registry now |
| Proof documents deep classes | Needs validation | later forensic rollout only |
| Package trust linkage | Approved at page logic level | schema enrichment only after package normalization |
| Ijen health advanced fields | Needs validation | do not ship literal risky fields yet |

---

## 9. Trust Graph Rendering Sequence

### Stage 1 — Stable trust exposure now
- organization schema
- founder schema
- page-role schema
- historical/press book references
- HTML trust graph via canonical page ownership

### Stage 2 — Structured support and package linkage
- package trust pathways
- Ijen-relevant route support linkage
- normalized FAQ schema where appropriate

### Stage 3 — Advanced entity and proof rollout
- crew entity schema
- validated proof schema classes
- deeper route/product trust integration

---

## 10. Anti-Drift Rules

### Rule 1
No claim may appear as a major trust assertion unless its evidence path is known.

### Rule 2
No page may become the implicit owner of a claim it does not canonically own.

### Rule 3
No trust signal may be implemented in schema if the literal underlying values are not normalized.

### Rule 4
No support page may quietly become a proof archive.

### Rule 5
No package page may lead with proof before product clarity.

---

## 11. Recommended Follow-up Specs

This map should directly feed:

1. `JVTO_CREW_ENTITY_SPEC.md`  
2. `JVTO_FAQ_EVENT_STATUS_SPEC.md`  
3. optional `JVTO_PROOF_SCHEMA_VALIDATION_SPEC.md`

---

## 12. Final Working Decision

The JVTO trust graph is now formally defined as a page-owned, evidence-linked, schema-aware system.

### Final rule
Trust implementation must always preserve this sequence:

**claim → mechanism → evidence → owner page → schema exposure**

That is the canonical trust-graph operating model for the repository.

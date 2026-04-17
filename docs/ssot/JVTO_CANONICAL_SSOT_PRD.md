# JVTO Canonical SSOT + Product Requirements Document

**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Canonical integration document for product, content, trust, schema, and implementation  
**Source audit basis:** `JVTO_SSOT_v4_0_CLEAN(5).json`, `Strategic JSON-LD Knowledge Graph Implementation Guide for Java Volcano Tour Operator (JVTO).md`, `PRD v3(2).html`

---

## 1. Purpose

This document consolidates the audited information spread across the uploaded SSOT JSON, JSON-LD Knowledge Graph guide, and PRD/visual system file into **one canonical integration document** for the GitHub project.

It is intended to function as both:

1. **SSOT governance document**  
   Canonical business, route, proof, and content ownership reference.

2. **PRD implementation document**  
   Canonical product, UX, trust, GEO/AEO, schema, content, and rollout requirements for the website project.

This document is designed for direct use by:

- product / founder
- frontend engineering
- content / SEO / GEO
- schema / entity modeling
- trust-proof / evidence operations

---

## 2. Source Precedence and Audit Decision

### 2.1 Canonical source order

The audited files are **not equal** in authority. They must be used with the following precedence:

1. **Primary Canonical Data Source**  
   `JVTO_SSOT_v4_0_CLEAN(5).json`

2. **Primary Canonical Frontend / UX / Visual / Execution Source**  
   `PRD v3(2).html`  
   Note: the file content internally states it is **PRD v4** and supersedes v3.

3. **Advisory Technical Strategy Source**  
   `Strategic JSON-LD Knowledge Graph Implementation Guide for Java Volcano Tour Operator (JVTO).md`

### 2.2 Authority rule

- If a field is **business identity / route / proof / canonical page / page ownership / content architecture / operational logic**, the JSON SSOT wins.
- If a field is **section order / design system / visual mode / component implementation / implementation log / launch behavior**, the PRD wins.
- If a field is **schema strategy / entity modeling / forensic trust / AI-readable trust / GEO/AEO logic**, the Knowledge Graph guide is authoritative **only when it does not conflict with the JSON SSOT**.

### 2.3 Consolidation result

The output of this audit is:

- **SSOT JSON** = canonical business + content + proof + route data
- **PRD HTML** = canonical product + UX + visual + implementation behavior
- **KG Guide** = canonical schema / entity strategy overlay

---

## 3. Audit Findings: What Each File Actually Owns

### 3.1 `JVTO_SSOT_v4_0_CLEAN(5).json`

This file is the canonical structured master context and currently contains:

- organization profile
- canonical route registry
- page architecture
- narrative pillars and claim map
- verification credentials
- asset inventory
- proof items
- operational logic
- content pages
- verify pages
- travel pages
- destination pages
- policy pages
- tour pages
- partner / press / reputation context
- historical timeline
- redirect logic
- roadmap and meta verification notes

**Current audited dataset counts**

- Canonical routes: **51**
- Verification credentials: **14**
- Assets inventory: **58**
- Crew registry: **14**
- Narrative claims: **9**
- Verify pages: **5**
- Travel pages: **8**
- Destination pages: **6**
- Policy pages: **4**
- Tour pages: **19**

### 3.2 `PRD v3(2).html`

This file is effectively a **PRD v4** and owns:

- product requirements
- design system
- GEO & AI engine notes
- brand voice
- image asset map
- visual brief
- implementation log
- launch checklist
- screen specs
- user flow
- trust stack
- booking/payment experience
- implementation delta notes

It also explicitly states:

- visual brief integrated
- 7-phase code implementation completed
- 23 files modified/created
- NIB corrected
- 5 new components deployed
- homepage reordered
- placeholder image dependency removed
- SEO foundations live

### 3.3 `Strategic JSON-LD Knowledge Graph Implementation Guide...`

This file owns the **entity/search/AI trust strategy**, especially:

- root organization entity strategy
- founder authority graph
- legal/safety proof schema model
- tour product schema direction
- FAQ and event/status modeling
- forensic trust requirements
- AI-first discovery rationale
- structured evidence locker logic

This file is strategically strong, but not fully canonical as-is. Several fields must be normalized to the JSON SSOT before implementation.

---

## 4. Canonical Conflict Resolution

The following conflicts or potential drifts were identified during audit.

### 4.1 Organization identity conflict handling

**Canonical organization values must come from SSOT JSON**

Canonical organization:

- Legal name: `PT Java Volcano Rendezvous`
- Brand name: `Java Volcano Tour Operator`
- Alternate name: `JVTO`
- Website: `https://javavolcano-touroperator.com/`
- Primary email: `hello@javavolcano-touroperator.com`
- Phone: `+6282244788833`
- Founder: `Agung Sambuko (Mr. Sam)`
- Founder title: `Founder & Active Tourist Police Officer`

### 4.2 Postal code conflict

Conflict found:

- JSON SSOT address postal code: `68214`
- KG guide example postal code: `68218`

**Resolution:**  
Use `68214` as canonical until DB/source verification explicitly changes it.

### 4.3 Organization schema type conflict

Conflict found:

- SSOT embedded schema uses `TravelAgency`
- KG guide recommends `["LocalBusiness","TravelAgency"]`

**Resolution:**  
Treat this as a **schema enhancement candidate**, not a source conflict.  
Canonical business identity still comes from SSOT JSON. Schema expansion may be implemented if compatible with existing validation and page strategy.

### 4.4 Tax/legal identifiers conflict

The KG guide recommends explicit `taxID` and `iso6523Code` mapped to NIB `1102230032918`.

**Resolution:**  
This is an allowed enhancement, because it reinforces the already-canonical legal identifier rather than changing it.  
It should be implemented only after validating:

- existing NIB source in SSOT
- schema validity
- whether `iso6523Code` is semantically acceptable for this exact Indonesian business identifier usage in the live schema layer

### 4.5 Blue Fire wording conflict

The KG guide includes an example tour/event language involving Ijen Blue Fire.  
This must **not** automatically override product or safety messaging elsewhere.

**Resolution:**  
Blue Fire language is **contextual / scientific / FAQ-level**, not the default commercial promise.  
Operational reality, closures, and current route-access logic remain governed by SSOT + travel/support pages + policy/support cluster.

---

## 5. Canonical Product Thesis

### 5.1 Core thesis

> In a landscape where volcanic nature is uncertain, JVTO sells operational certainty—built on disciplined safety, documented proof, and local execution.

### 5.2 Narrative pillars

The canonical narrative pillar set is:

- All-inclusive clarity (reduce surprises)
- Ijen Health Screening (safety layer)
- Our Team (personality economy + operational credibility)
- Partners (HPWKI / INDECON / ISIC) as context
- Press & Recognition (third-party context)
- Private tours (execution control)
- Proof-first trust (verification layer)
- Reviews registry (independent validation)
- Safety-led operations

### 5.3 Narrative claim system

The canonical claim map contains **9 claims**, each tied to:

- a pillar
- a claim
- mechanism logic
- evidence hooks
- evidence slugs
- primary page owner
- NLP variants for cross-channel reuse

Canonical claims:

- C1 — Safety-led operations → primary page `/why-jvto/community-standards`
- C2 — Private tours (execution control) → primary page `/why-jvto/community-standards`
- C3 — All-inclusive clarity (reduce surprises) → primary page `/policy/booking-payment-cancellation`
- C4 — Ijen Health Screening (safety layer) → primary page `/travel-guide/ijen-health-screening`
- C5 — Proof-first trust (verification layer) → primary page `/verify-jvto`
- C6 — Reviews registry (independent validation) → primary page `/why-jvto/reviews`
- C7 — Our Team (personality economy + operational credibility) → primary page `/why-jvto/our-team`
- C8 — Partners (HPWKI / INDECON / ISIC) as context → primary page `/verify-jvto`
- C9 — Press & Recognition (third-party context) → primary page `/verify-jvto/press-recognition`

This means the trust system is already structured as:

- claim
- mechanism
- evidence
- page owner
- reusable messaging variants

That structure must be preserved.

---

## 6. Canonical Site Architecture

### 6.1 Core orchestration model

The website must be read as five layers:

1. **Trust Entry**
2. **Route Discovery**
3. **Package Conversion**
4. **Operational Support**
5. **Proof Ownership**

### 6.2 Canonical page cluster model

#### A. Core pages

- `/`
- `/why-jvto`
- `/why-jvto/the-jvto-difference`
- `/why-jvto/reviews`
- `/why-jvto/our-story`
- `/why-jvto/our-team`
- `/why-jvto/community-standards`
- `/contact`
- `/isic/student-package`

#### B. Verify cluster

- `/verify-jvto`
- `/verify-jvto/legal`
- `/verify-jvto/police-safety`
- `/verify-jvto/press-recognition`
- `/verify-jvto/history-artifacts`

#### C. Travel guide cluster

- `/travel-guide`
- `/travel-guide/faq`
- `/travel-guide/safety-on-tours`
- `/travel-guide/weather-and-closures`
- `/travel-guide/packing-and-fitness`
- `/travel-guide/booking-information`
- `/travel-guide/police-escort-for-groups`
- `/travel-guide/ijen-health-screening`

#### D. Destination cluster

- `/destinations`
- `/destinations/mount-bromo`
- `/destinations/ijen-crater`
- `/destinations/madakaripura-waterfall`
- `/destinations/tumpak-sewu-waterfall`
- `/destinations/papuma-beach`

#### E. Policy cluster

- `/policy/booking-payment-cancellation`
- `/policy`
- `/policy/inclusions-exclusions`
- `/policy/privacy`

#### F. Tours cluster

- `/tours`
- `/tours/from-surabaya`
- `/tours/from-bali`
- `/tours/from-surabaya/bromo-1d1n`
- `/tours/from-surabaya/bromo-2d1n`
- `/tours/from-surabaya/ijen-2d1n`
- `/tours/from-surabaya/bromo-madakaripura-ijen-3d2n`
- `/tours/from-surabaya/ijen-bromo-madakaripura-3d2n`
- `/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-4d3n`
- `/tours/from-surabaya/ijen-bromo-madakaripura-4d3n`
- `/tours/from-surabaya/tumpak-sewu-bromo-ijen-4d3n`
- `/tours/from-surabaya/ijen-bromo-madakaripura-malang-5d4n`
- `/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-5d4n`
- `/tours/from-surabaya/ijen-papuma-tumpak-sewu-bromo-malang-6d5n`
- `/tours/from-surabaya/taman-safari-prigen-bromo-madakaripura-3d2n`
- `/tours/from-bali/bromo-ijen-3d2n`
- `/tours/from-bali/ijen-bromo-madakaripura-3d2n`
- `/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n`
- `/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-5d4n`

### 6.3 Canonical route count

The canonical context declares **51 routes** and marks the project status as:

- **Status:** `READY_FOR_IMPLEMENTATION`
- **Version:** `v3.3-final`

### 6.4 Route ownership rule

Each route must have exactly one authoritative owner collection:

- `pages`
- `verify_pages`
- `travel_pages`
- `destination_pages`
- `policy_pages`
- `tour_pages`

No route should have ambiguous ownership.

---

## 7. Canonical Page Roles

### Homepage

Role:

- trust-first commercial entry
- explains who JVTO is
- directs users into route/package discovery

### Tours hub

Role:

- route and package discovery layer
- clarifies differences between packages
- reduces selection confusion

### Package pages

Role:

- self-service commercial brochure
- package-first conversion page
- practicalities before heavy trust layer

### Travel Guide

Role:

- operational support system
- readiness, screening, weather/closures, booking guidance

### Verify JVTO

Role:

- proof ownership system
- legal, police/safety, press/recognition, history/artifacts

### Why JVTO

Role:

- differentiation narrative
- people/team
- reviews
- standards/community logic

### Policy

Role:

- formal rules layer
- booking/payment/cancellation/privacy/inclusions

### Contact

Role:

- human escalation layer
- not a substitute for missing package/support information

---

## 8. Canonical Package Page Logic

The package page model is already consolidated and must remain:

1. hero package  
2. structured route data  
3. gallery / visual route  
4. route fit  
5. route rhythm  
6. hotel / rooming  
7. vehicle / crew  
8. meals  
9. Ijen readiness when relevant  
10. compact policy  
11. payment summary  
12. add-ons  
13. closest alternative  
14. Ijen proof rail when relevant  
15. verify-before-book  
16. FAQ  
17. final CTA  

### Package page rules

- package-first
- practicalities next
- trust later
- self-service brochure logic
- verify cluster remains alive
- homepage/global trust architecture must not be damaged

---

## 9. Canonical Trust Graph

The trust architecture is not a decorative layer. It is a structured graph.

### 9.1 Core trust assets

- founder authority
- crew expertise
- review registry
- institutional partnerships
- press coverage
- legal proof
- police/safety proof
- medical proof
- historical artifacts
- proof library

### 9.2 Canonical trust graph domains

#### People / crew layer

- **14 crew records** in registry
- crew should be connected to:
  - route relevance
  - role
  - strengths
  - review mentions when available

#### Review layer

Review logic must remain registry-like, not quote-wall style:

- grouped by platform
- grouped by pattern/theme
- support trust validation

#### Partnership layer

Canonical partner context includes:

- ISIC
- HPWKI
- INDECON

#### Media / press / recognition layer

Must remain context-rich, not logo-driven.

#### Legal / police / medical layer

Must remain evidence-driven and auditable.

### 9.3 Trust graph rule

Trust content must support:

1. human trust
2. AI/entity trust
3. commercial differentiation

---

## 10. Canonical Data Domains

### 10.1 Structured business / organization domain

Owned by SSOT JSON organization profile.

### 10.2 Content/page domain

Owned by route/page collections and content pages.

### 10.3 Trust/evidence domain

Owned by:

- verification credentials
- assets inventory
- proof items
- press coverage
- partner network
- historical timeline
- reputation triangulation

### 10.4 Product/tour domain

Owned by:

- tour pages
- destination pages
- operational logic
- policy links
- package-related content fields

### 10.5 UX/design/implementation domain

Owned by PRD:

- section order
- screen behavior
- design system
- tokens
- brand voice
- visual brief
- implementation log
- launch checklist

### 10.6 Schema/GEO/AI trust domain

Owned by the KG strategy guide, but normalized through SSOT and PRD before implementation.

---

## 11. Canonical GEO / AEO / AI Trust Layer

This layer must be implemented as an overlay on top of canonical SSOT and PRD decisions.

### 11.1 Strategic objective

JVTO must appear not only relevant, but **verifiable**.

### 11.2 Required entity model

At minimum:

- Organization / TravelAgency
- Founder / Person
- Tour products / TouristTrip or equivalent route/product layer
- FAQ / support / policy answer surfaces
- Proof / credential / permit layer
- Review / reputation layer
- press / recognition / historical layer

### 11.3 Mandatory AI-trust implementation rules

- visible identifiers in HTML
- proof not hidden only behind interaction
- stable entity naming
- stable route ownership
- strong internal trust paths
- answer-first content where relevant
- support pages must read as systems, not blog clutter

### 11.4 Schema implementation rule

The KG guide is **strategy**, not literal copy-paste.  
Every schema block must be normalized against:

- canonical organization values
- canonical route values
- canonical page ownership
- canonical proof assets
- live implementation constraints

---

## 12. Canonical Design / UX Layer

The PRD is the canonical source for frontend presentation and execution.

### 12.1 Design direction

The visual direction must remain aligned to:

- premium expedition
- trust-led tour operator
- volcanic travel with operational authority

### 12.2 Not acceptable

The site must not drift into:

- SaaS/dashboard feel
- playful/travel-blog feel
- corporate sterile feel
- hotel/resort-luxury feel
- abstract non-bookable design

### 12.3 Design system governance

The PRD owns:

- design system tokens
- CTA styles
- visual mode per cluster
- screen specifications
- brand voice
- image asset direction
- launch checklist
- implementation logging

### 12.4 Product behavior rule

The PRD implementation layer must not silently override the SSOT route/content/proof architecture.

---

## 13. Repository Integration Specification

### 13.1 Recommended repository

Target repository:

- `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`

### 13.2 Recommended file path

Recommended canonical path:

- `docs/ssot/JVTO_CANONICAL_SSOT_PRD.md`

Optional related future files:

- `docs/ssot/JVTO_SCHEMA_IMPLEMENTATION_SPEC.md`
- `docs/ssot/JVTO_ROUTE_OWNER_MAP.md`
- `docs/ssot/JVTO_TRUST_GRAPH_MAP.md`

### 13.3 Intended repo usage

This document should be treated as:

- a product + content + trust governance file
- not as runtime JSON
- not as a frontend-only design note
- not as a marketing brief

It is the cross-functional canonical reference used before:

- route additions
- copy rewrites
- page ownership changes
- schema changes
- proof-library changes
- UX reordering
- GEO/AEO changes

### 13.4 Change control rule

Changes to this document should require explicit review whenever they affect:

- organization identity
- contact data
- route ownership
- page cluster structure
- proof taxonomy
- trust claims
- schema trust signals
- package-page sequence
- policy ownership

---

## 14. Engineering Integration Rules

### 14.1 Data source rule

Until CMS/PostgreSQL fully becomes primary:

- SSOT JSON remains canonical source reference
- PRD remains canonical UI/UX behavior reference
- local/build implementation must follow both

### 14.2 Frontend rule

Frontend implementation must preserve:

- canonical routes
- package-first logic
- trust/support separation
- proof ownership
- design language consistency

### 14.3 Schema rule

Do not ship schema that contradicts:

- legal identity
- postal code
- founder role
- page ownership
- route naming
- product naming
- proof references

### 14.4 Content ops rule

Do not publish copy that:

- weakens operational realism
- overpromises natural phenomena
- merges Why JVTO and Verify JVTO logic
- turns support pages into vague articles
- breaks the route seriousness / readiness logic

---

## 15. Open Issues and Known Gaps

The following open issues are already declared in the SSOT meta and remain active until resolved:

- Ijen Crater slug conflict: DB slug=ijen-crater vs sitemap=/destinations/ijen-crater — must be resolved in DB
- 4 policy routes missing title_tag — must be written manually, not in any source file
- destination asset_id (numeric DB) not cross-referenced to SSOT asset slug — no assets table in uploaded files
- Surabaya and Malang City: sitemap routes exist but DB has no slug or content yet

Additional audit-level gaps:

- PRD file title still references earlier versioning while body states v4 supersession.
- KG guide contains some example values and schema patterns that require normalization before live implementation.
- Repo README is still generic and not yet aligned to the canonical JVTO product/documentation system.
- The JSON SSOT is comprehensive but large; derived docs for team use are still needed.

---

## 16. Acceptance Criteria for This Canonical Document

This document is valid only if the team uses it with the following interpretation:

### SSOT acceptance

- one source precedence order
- one canonical organization identity
- one canonical route registry
- one canonical trust graph logic
- one canonical package-page model

### PRD acceptance

- one product behavior model
- one design/visual reference owner
- one implementation behavior owner
- one launch/readiness reference

### Schema/GEO acceptance

- one normalization rule: strategy guide cannot override SSOT identity
- schema enhancements are allowed only when they reinforce, not contradict, canonical data

---

## 17. Final Working Model

### Goal

Upgrade the live JVTO website significantly without breaking its data foundation.

### Method

Improve-in-place using:

- SSOT JSON as canonical content/proof/route source
- PRD as canonical UX/visual/implementation source
- KG guide as canonical schema/AI trust strategy overlay

### Fixed priority order

1. package pages
2. tours hub
3. homepage
4. trust/support cluster
5. technical search layer
6. content system / CMS
7. future expansion

### Brainstorming rule

New ideas add scope awareness.  
They do **not** automatically change priority.

---

## 18. Recommended Next Documents

To make the GitHub project easier to operate, this document should be followed by:

1. **Route Owner Map**  
   One route → one owner → one data source → one rendering model

2. **Schema Implementation Spec**  
   Literal JSON-LD blocks normalized against canonical SSOT

3. **Trust Graph Map**  
   Claim → proof → asset → page owner → schema exposure

4. **Package Template Spec**  
   Required fields and render rules for all tour pages

---

## 19. Final Consolidated Decision

The uploaded files do **not** represent three competing truths.  
After audit, they resolve into one system:

- **SSOT JSON** governs truth
- **PRD** governs product expression
- **KG Guide** governs structured discoverability strategy

That is the canonical integration model for the JVTO GitHub project.

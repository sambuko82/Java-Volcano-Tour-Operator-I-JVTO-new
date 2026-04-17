# JVTO Schema Implementation Spec
**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Literal schema implementation specification normalized against canonical SSOT  
**Parent documents:**
- `docs/ssot/JVTO_CANONICAL_SSOT_PRD.md`
- `docs/ssot/JVTO_SCHEMA_STRATEGY_OVERLAY.md`

---

## 1. Purpose

This document converts the approved schema strategy into a **controlled implementation spec** for developers.

It defines:
- what schema families JVTO should implement
- where each schema belongs
- what canonical source each field must come from
- which fields are approved now
- which fields are deferred or blocked pending validation

This file is **not** a strategy memo.
It is the implementation bridge between:
- canonical SSOT truth
- canonical PRD/UX behavior
- approved schema/GEO/AI-trust overlay

---

## 2. Authority and Precedence

### 2.1 Field authority

All schema output must be generated using this authority order:

1. `JVTO_SSOT_v4_0_CLEAN(5).json` → canonical truth layer  
2. `PRD v3(2).html` / effective PRD v4 → canonical UX / page-role / component placement logic  
3. `JVTO_SCHEMA_STRATEGY_OVERLAY.md` → schema enhancement and classification logic

### 2.2 Non-negotiable rule

Schema may strengthen discoverability and trust, but it may not override:
- legal name
- canonical email
- phone
- founder naming
- postal code
- route naming
- route ownership
- route count
- proof asset ownership
- package naming

---

## 3. Canonical Organization Values

These values are the normalized source for organization-level schema.

| Field | Canonical Value |
|---|---|
| Brand name | `Java Volcano Tour Operator` |
| Legal name | `PT Java Volcano Rendezvous` |
| Alternate name | `JVTO` |
| Website | `https://javavolcano-touroperator.com/` |
| Logo | `https://javavolcano-touroperator.com/assets/img/jvto-color.png` |
| Hero image | `https://javavolcano-touroperator.com/assets/img/hero/home.webp` |
| Primary email | `hello@javavolcano-touroperator.com` |
| Secondary email | `javavolcanotouroperator@gmail.com` |
| Phone | `+6282244788833` |
| Founder | `Agung Sambuko (Mr. Sam)` |
| Founder title | `Founder & Active Tourist Police Officer` |
| Street | `Jl. Khairil Anwar No.102 A, Badean` |
| Locality | `Bondowoso` |
| Region | `Jawa Timur` |
| Postal code | `68214` |
| Country | `ID` |
| Google Map | `https://www.google.com/maps?cid=1266403973589689021` |
| NIB / TDUP identifier | `1102230032918` |

### Guardrail
Do **not** use `68218` from the strategic guide examples.  
`68214` remains canonical unless SSOT is explicitly revised.

---

## 4. Approved Schema Families

## 4.1 Organization schema

### Status
**APPROVED NOW**

### Recommended root type
Use:
- `TravelAgency`

Optional future enhancement:
- add `LocalBusiness` as dual type only after explicit validation

### Required purpose
This schema must anchor:
- legal identity
- public brand identity
- location reality
- contact reality
- sameAs ecosystem
- founder link

### Approved fields now
- `@context`
- `@type`
- `@id`
- `url`
- `name`
- `legalName`
- `alternateName`
- `logo`
- `image`
- `description`
- `priceRange`
- `address`
- `hasMap`
- `sameAs`
- `contactPoint`
- `founder`
- `foundingDate`
- `areaServed`

### Candidate fields later
- `taxID`
- `identifier`
- `iso6523Code`

### Approved example block
```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://javavolcano-touroperator.com/#organization",
  "url": "https://javavolcano-touroperator.com/",
  "name": "Java Volcano Tour Operator",
  "legalName": "PT Java Volcano Rendezvous",
  "alternateName": "JVTO",
  "logo": "https://javavolcano-touroperator.com/assets/img/jvto-color.png",
  "image": "https://javavolcano-touroperator.com/assets/img/hero/home.webp",
  "description": "Java Volcano Tour Operator (JVTO) is a registered Indonesian travel company based in Bondowoso and led by an active Tourist Police officer. We design private, all-inclusive itineraries to Mount Bromo, Ijen Crater and Tumpak Sewu with clear safety rules, transparent pricing and real local impact.",
  "priceRange": "$$",
  "hasMap": "https://www.google.com/maps?cid=1266403973589689021",
  "sameAs": [
    "https://www.tripadvisor.com/Attraction_Review-g297715-d19983165-Reviews-Java_Volcano_Tour_Operator-Surabaya_East_Java_Java.html",
    "https://trustpilot.com/review/javavolcano-touroperator.com",
    "https://www.isic.org/discounts/?providerId=259268",
    "https://www.indecon.id/spotlight-networks/java-volcano-tour-operator",
    "https://www.google.com/maps?cid=1266403973589689021"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Khairil Anwar No.102 A, Badean",
    "addressLocality": "Bondowoso",
    "addressRegion": "Jawa Timur",
    "postalCode": "68214",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6282244788833",
    "email": "hello@javavolcano-touroperator.com",
    "contactType": "Customer Service",
    "availableLanguage": ["en", "id"]
  },
  "foundingDate": "2016-01-01"
}
```

---

## 4.2 Founder / Person schema

### Status
**APPROVED NOW**

### Purpose
This schema exists to:
- strengthen E-E-A-T / authority
- connect founder identity to organization
- connect founder identity to press validation
- support police-safety trust layer

### Approved fields now
- `@type: Person`
- `@id`
- `name`
- `alternateName`
- `jobTitle`
- `worksFor`
- `description`
- `knowsAbout`
- `memberOf` (government/police context)
- `subjectOf` (press validation)

### Guardrail
Use canonical founder naming:
- display name: `Agung Sambuko (Mr. Sam)`
- short schema name may be `Agung Sambuko`
- keep linkage to the same founder entity ID

### Approved example block
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://javavolcano-touroperator.com/#founder",
  "name": "Agung Sambuko",
  "alternateName": "Mr. Sam",
  "jobTitle": "Founder & Active Tourist Police Officer",
  "worksFor": {
    "@id": "https://javavolcano-touroperator.com/#organization"
  },
  "description": "Founder of JVTO and active member of the East Java Tourist Police Unit (Ditpamobvit), specializing in tourist safety and risk management.",
  "knowsAbout": [
    "Tourist Safety",
    "East Java Tourism",
    "Volcano Trekking",
    "Logistics Management"
  ],
  "memberOf": {
    "@type": "GovernmentOrganization",
    "name": "Indonesian National Police",
    "alternateName": "Kepolisian Negara Republik Indonesia"
  },
  "subjectOf": {
    "@type": "NewsArticle",
    "headline": "Suka Duka Polisi Pariwisata Bondowoso: Tegakkan Prokes Sambil Lawan Dingin",
    "publisher": {
      "@type": "Organization",
      "name": "Detik.com"
    },
    "datePublished": "2021-03-14",
    "url": "https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin"
  }
}
```

---

## 4.3 Website / page-level schema

### Status
**APPROVED NOW**

### Purpose
Each canonical page family should have page-level schema that matches its role.

### Page-role mapping
| Page Family | Preferred Schema Direction |
|---|---|
| Homepage | `WebPage` + root organization reference |
| Why JVTO pages | `AboutPage` or `WebPage` |
| Verify JVTO pages | `CollectionPage` or `WebPage` |
| Travel Guide pages | `FAQPage` / `WebPage` depending on content |
| Destination pages | `TouristDestination` support + `WebPage` wrapper if needed |
| Policy pages | `WebPage` |
| Contact | `ContactPage` |
| Tours / package pages | `Product` / `TouristTrip` + `WebPage` |

### Rule
Do not force a single schema type across all page families.
Page type must follow page role.

---

## 4.4 Verify / proof layer schema

### Status
**PARTIALLY APPROVED NOW**

### Approved now
Use proof as structured content references within verify pages.

### Approved concepts now
- proof pages should clearly expose credentials
- asset URLs should be canonical and stable
- proof must remain one-click reachable from trust-sensitive routes

### Deferred concepts
The following are **not yet approved for production literal use** until validation:
- `GovernmentPermit`
- `GovernmentService`
- `DigitalDocument`
- SHA256 embedded fields in public schema blocks
- `Permission`

### Implementation rule now
For immediate implementation:
- expose proof content in page HTML
- use page-level schema and internal linking
- reserve deeper forensic schema classes for later validated rollout

---

## 4.5 Tour / package schema

### Status
**APPROVED IN PRINCIPLE, NOT FULLY APPROVED AS FINAL BLOCKS**

### Current position
The product schema direction is accepted, but exact literal package blocks must be normalized against current SSOT tour pages first.

### Approved concepts now
- package pages may use `Product`
- package pages may use `TouristTrip`
- itinerary may be exposed as structured list
- provider should link to JVTO organization entity
- offers must use canonical package data only

### Not yet approved as fixed field set
- literal examples from the strategic guide
- any package name not present in SSOT
- any itinerary wording not normalized against existing tour content

### Required source inputs before shipping
- canonical package slug
- package name
- package route summary
- itinerary days
- inclusions/exclusions
- package pricing source logic
- whether Ijen-related readiness applies

### Minimal approved pattern
```json
{
  "@context": "https://schema.org",
  "@type": ["Product", "TouristTrip"],
  "@id": "<canonical-package-url>#trip",
  "name": "<canonical package name>",
  "description": "<normalized package description>",
  "provider": {
    "@id": "https://javavolcano-touroperator.com/#organization"
  }
}
```

---

## 4.6 FAQ schema

### Status
**APPROVED NOW, WITH CONTENT CONTROL**

### Purpose
FAQ schema is allowed on support-heavy pages where the answers are stable and non-speculative.

### Good fit pages
- `/travel-guide/faq`
- `/travel-guide/ijen-health-screening`
- `/travel-guide/weather-and-closures` (only for stable logic, not volatile live claims)
- selected destination pages where a true FAQ block exists

### Guardrail
Do not use FAQ schema for:
- unstable real-time conditions
- promotional questions disguised as FAQ
- speculative answers
- overpromises about natural phenomena

---

## 4.7 Review / reputation schema

### Status
**DEFERRED FOR CONTROLLED IMPLEMENTATION**

### Reason
JVTO has a strong review registry and platform references, but review schema implementation can create compliance/rich-result issues if not handled carefully.

### Current rule
- expose review ecosystem clearly in HTML
- use sameAs and review-registry logic in content architecture
- defer literal review schema rollout until page-by-page policy is defined

---

## 4.8 Crew / team entity schema

### Status
**APPROVED IN PRINCIPLE, SPEC DEFERRED**

### Current rule
Crew micro-entity strategy is approved, but should be implemented through a dedicated follow-up spec.

### Approved concepts now
- each crew member may become a `Person`
- crew should use evidence-backed `knowsAbout`
- crew schema should link back to organization
- crew schema should remain consistent with route/team content and review evidence

### Deferred to follow-up file
`JVTO_CREW_ENTITY_SPEC.md`

---

## 4.9 Historical / book / press schema

### Status
**APPROVED NOW**

### Purpose
Historical and editorial third-party signals are core to JVTO’s continuity and trust model.

### Approved concepts
- organization `subjectOf` book reference
- founder `subjectOf` press validation
- history artifacts can be reflected in history/recognition pages

### Guardrail
Only use verified references already present in the canonical trust/proof system.

### Approved book-level pattern
```json
{
  "@type": "Book",
  "name": "Stefan Loose Reiseführer Indonesien",
  "isbn": "978-3-7701-7881-0",
  "publisher": {
    "@type": "Organization",
    "name": "DuMont Reiseverlag"
  }
}
```

---

## 5. Deferred / Blocked Fields

The following are explicitly blocked from immediate live implementation.

| Field / Pattern | Status | Reason |
|---|---|---|
| `postalCode: 68218` | BLOCKED | conflicts with canonical SSOT |
| literal route examples from guide | BLOCKED | example-only, not canonical packages |
| `iso6523Code` = NIB | BLOCKED pending validation | needs semantic review |
| deep forensic proof classes | BLOCKED pending validation | needs schema/asset mapping review |
| MCP / `/.well-known/ai-agent-config.json` | BLOCKED for current phase | future technical layer only |
| Ijen health exact fields like `healthRequirement` / `amenityFeature` | BLOCKED pending content + schema review | must align with live operational/support wording |

---

## 6. Page-by-Page Schema Assignment

## 6.1 Homepage

### Required now
- `WebPage`
- root organization reference
- founder reference if already used in root graph

### Optional later
- richer entity graph connections

---

## 6.2 Why JVTO cluster

### Required now
- `AboutPage` or `WebPage`
- structured internal links to trust content
- founder/history links where relevant

### Pages
- `/why-jvto`
- `/why-jvto/the-jvto-difference`
- `/why-jvto/our-story`
- `/why-jvto/our-team`
- `/why-jvto/reviews`
- `/why-jvto/community-standards`

---

## 6.3 Verify JVTO cluster

### Required now
- `CollectionPage` or `WebPage`
- strong proof-linked internal architecture
- root organization reference

### Pages
- `/verify-jvto`
- `/verify-jvto/legal`
- `/verify-jvto/police-safety`
- `/verify-jvto/press-recognition`
- `/verify-jvto/history-artifacts`

---

## 6.4 Travel Guide cluster

### Required now
- `WebPage`
- `FAQPage` only where actual FAQ structure exists

### Pages
- `/travel-guide`
- `/travel-guide/faq`
- `/travel-guide/safety-on-tours`
- `/travel-guide/weather-and-closures`
- `/travel-guide/packing-and-fitness`
- `/travel-guide/booking-information`
- `/travel-guide/police-escort-for-groups`
- `/travel-guide/ijen-health-screening`

---

## 6.5 Tours and package pages

### Required now
- `Product` / `TouristTrip` in normalized form
- `WebPage` wrapper if needed by implementation pattern

### Rule
Each package page must use its own canonical slug and content source.
No copied example package blocks.

---

## 6.6 Contact page

### Required now
- `ContactPage`
- organization linkage

---

## 7. Implementation Guardrails

## 7.1 Data normalization rule
All literal schema values must come from canonical SSOT fields or normalized derived values.

## 7.2 No speculative schema rule
Do not encode:
- unverified medical claims
- unstable route status as fixed truths
- exaggerated founder/crew claims
- natural-phenomena promises

## 7.3 Internal duplication rule
Avoid publishing the same deep trust object redundantly across multiple pages if one page is the canonical owner.

## 7.4 Proof ownership rule
High-stakes verification material should continue to point toward `/verify-jvto` as the canonical proof family.

## 7.5 Entity consistency rule
Use one stable set of identifiers and names for:
- organization
- founder
- page families
- routes
- destinations
- proofs

---

## 8. Recommended Output Sequence for Developers

### Output 1
Root organization + founder graph

### Output 2
Homepage + page-family wrappers

### Output 3
Why JVTO + Verify JVTO structured page schema

### Output 4
Travel Guide FAQ-enabled pages

### Output 5
Package-page schema rollout after package normalization

### Output 6
Crew entity layer

### Output 7
Validated advanced proof / forensic layer

---

## 9. Follow-up Documents Required

This file should be followed by:

1. `JVTO_TRUST_GRAPH_MAP.md`  
   Claim → proof → asset → page owner → schema exposure

2. `JVTO_CREW_ENTITY_SPEC.md`  
   Literal team/crew schema model

3. `JVTO_FAQ_EVENT_STATUS_SPEC.md`  
   FAQ/event/status schema rules for volatile content

4. `JVTO_PACKAGE_SCHEMA_MAP.md`  
   Package-by-package field mapping to schema blocks

---

## 10. Final Working Decision

Schema implementation for JVTO must follow this order:

- protect canonical truth first
- normalize fields second
- implement approved schema families third
- delay attractive but risky schema ideas until validated

### Final rule
The project should ship:
- **controlled schema**
- **canonical entity identity**
- **clear proof ownership**
- **package-level normalization**

not a copy-paste of the strategy guide.

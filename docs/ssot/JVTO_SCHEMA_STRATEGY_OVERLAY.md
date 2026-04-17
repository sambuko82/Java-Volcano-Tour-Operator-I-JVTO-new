# JVTO Schema Strategy Overlay
**Repository target:** `sambuko82/Java-Volcano-Tour-Operator-I-JVTO-new`  
**Document status:** Strategic schema / GEO / AI-trust overlay  
**Parent document:** `docs/ssot/JVTO_CANONICAL_SSOT_PRD.md`  
**Primary source audited:** `Strategic JSON-LD Knowledge Graph Implementation Guide for Java Volcano Tour Operator (JVTO)`

---

## 1. Purpose

This document translates the strategic Knowledge Graph guide into an implementation-safe overlay for the JVTO project.

It does **not** replace the canonical SSOT or PRD.

Its purpose is to classify each strategic idea from the guide into one of four buckets:

- **ADOPTED** → safe to absorb into the project direction now
- **CANDIDATE** → strategically useful, but still needs a formal implementation spec
- **NEEDS_VALIDATION** → promising, but blocked by data, schema, or product validation
- **REJECTED / NOT CANONICAL** → should not be merged directly into canonical truth or production implementation

---

## 2. Authority Rule

This document must be read using the fixed precedence model:

1. `JVTO_SSOT_v4_0_CLEAN(5).json` = canonical truth layer  
2. `PRD v3(2).html` / effective PRD v4 = canonical UX / design / implementation layer  
3. `Strategic JSON-LD Knowledge Graph Implementation Guide...` = strategic schema / GEO / AI-trust overlay

This overlay can only:
- strengthen the canonical model
- clarify implementation strategy
- propose schema/entity enhancements

It cannot:
- override canonical identity fields
- override canonical routes
- override package naming
- override live business facts

---

## 3. Consolidated Audit Result

### 3.1 High-level conclusion

The Knowledge Graph guide is highly valuable for:
- entity strategy
- founder authority modeling
- forensic trust logic
- proof-layer schema strategy
- crew-as-entity strategy
- historical continuity framing
- AI-readable trust architecture

But it is **not safe to merge literally** into production or SSOT.

### 3.2 Best use of this guide

This guide should be treated as:
- **schema strategy overlay**
- **trust graph enhancement layer**
- **GEO / AEO implementation blueprint**
- **entity-modeling direction document**

It should **not** be treated as:
- a production-ready schema file
- a canonical data file
- a route source of truth
- final public-facing copy

---

## 4. Mapping Matrix

| Strategic Area | Status | Why | Integration Target |
|---|---|---|---|
| Entity-first framing | ADOPTED | Fully strengthens existing SSOT and PRD logic | canonical SSOT/PRD working model |
| Founder authority graph | ADOPTED | Already aligned with founder + police trust layer | organization schema, Why JVTO, Verify JVTO |
| Evidence locker / forensic proof logic | ADOPTED | Strong fit with existing proof library approach | verify-jvto, verification credentials, assets inventory |
| Historical golden-thread logic | ADOPTED | Directly strengthens continuity / longevity proof | our-story, history-artifacts, trust graph |
| Crew as micro-entities | ADOPTED | Strong upgrade path for existing crew registry | our-team, reviews, crew schema map |
| Tour product schema strategy | CANDIDATE | Valuable, but requires normalized package mapping | tour pages, future schema spec |
| FAQ / event / status schema strategy | CANDIDATE | Useful, but requires support/content modeling rules | travel-guide, weather, closures, FAQ |
| taxID / NIB explicit schema mapping | CANDIDATE | Strong idea, but needs validation against current schema implementation | organization schema spec |
| `LocalBusiness + TravelAgency` dual typing | CANDIDATE | Possible enhancement, not automatic replacement | root organization schema |
| `iso6523Code` = NIB | NEEDS_VALIDATION | Strong strategic idea, but semantic correctness must be confirmed | schema implementation spec |
| `GovernmentPermit` / `GovernmentService` deep proof modeling | NEEDS_VALIDATION | Useful, but schema/legal mapping must be checked carefully | verify-jvto schema layer |
| MCP / `/.well-known/ai-agent-config.json` | NEEDS_VALIDATION | Strategic future-facing idea, but outside current canonical implementation baseline | future technical search layer |
| literal tour examples as canonical route definitions | REJECTED / NOT CANONICAL | Example-only, not route source of truth | do not merge directly |
| postal code `68218` | REJECTED / NOT CANONICAL | Conflicts with canonical SSOT `68214` | do not merge |
| aggressive internal phrasing (e.g. “nuclear option”, “unbreakable trust vector”) | REJECTED / NOT CANONICAL | Internal strategy language, not canonical product or public language | do not merge into SSOT/PRD copy |

---

## 5. Adopted Layer

## 5.1 Entity-first brand framing

### Status
**ADOPTED**

### Meaning
JVTO should continue to be modeled as a verifiable entity system, not merely a collection of marketing pages.

### Integration value
This strengthens the already-established architecture where:
- homepage = trust-led commercial entry
- tours/package pages = discovery + conversion
- verify-jvto = proof ownership
- travel-guide = operational support
- why-jvto = narrative trust

### Action
Preserve this as a governing principle in:
- schema implementation
- page ownership rules
- internal linking
- trust graph exposure

---

## 5.2 Founder authority graph

### Status
**ADOPTED**

### Meaning
The guide’s insistence on founder authority as a machine-readable trust anchor is fully aligned with existing JVTO trust architecture.

### Adopted concepts
- founder as `Person`
- founder linked to organization
- founder linked to external press validation
- founder linked to government/police context

### Integration target
- root organization schema
- `/why-jvto/our-story`
- `/verify-jvto/police-safety`
- trust graph map

### Guardrail
Founder schema must still use canonical identity values from SSOT.

---

## 5.3 Evidence locker / forensic proof logic

### Status
**ADOPTED**

### Meaning
The guide strongly confirms that JVTO’s proof layer should function as a machine-readable verification system, not merely a gallery of uploads.

### Adopted concepts
- proof as structured trust signals
- legal/safety proof must be exposed clearly
- proof should support AI trust, not only human trust
- `/verify-jvto` remains the canonical proof owner

### Integration target
- verification credentials
- assets inventory
- verify-jvto page family
- future schema mapping for proof assets

### Guardrail
Proof schema must reference canonical assets and verified URLs only.

---

## 5.4 Historical “Golden Thread” logic

### Status
**ADOPTED**

### Meaning
The guide’s continuity model is highly compatible with existing historical artifacts and continuity proof.

### Adopted anchors
- 2015 Booking.com award
- address continuity
- 2018 Stefan Loose guidebook
- 2021 Detik founder/police coverage

### Integration target
- `/why-jvto/our-story`
- `/verify-jvto/history-artifacts`
- press / recognition layer
- historical trust graph

### Guardrail
Historical claims must remain tied to explicit proof assets and verified context.

---

## 5.5 Crew as micro-entities

### Status
**ADOPTED**

### Meaning
The guide’s crew-entity logic is a strong enhancement path for JVTO’s existing crew registry.

### Adopted concepts
- crew as `Person` entities
- `knowsAbout` specialization
- review-linked competence
- role/value-based profiles
- route relevance where applicable

### Integration target
- `/why-jvto/our-team`
- reviews registry
- crew registry structure
- future crew schema spec

### Guardrail
Crew expertise claims must remain evidence-backed and not become decorative inflation.

---

## 6. Candidate Layer

## 6.1 Tour product schema strategy

### Status
**CANDIDATE**

### Why candidate
The `TouristTrip` / `Product` direction is strategically strong, but needs normalization against:
- canonical tour routes
- package naming
- package structure
- itinerary data already in SSOT

### Candidate concepts
- `TouristTrip`
- `Product`
- itinerary as `ItemList`
- offer structure
- package-level provider linkage
- student/ISIC eligibility as structured context

### Recommended next document
`JVTO_SCHEMA_IMPLEMENTATION_SPEC.md`

---

## 6.2 FAQ / Event / Status layer

### Status
**CANDIDATE**

### Why candidate
This can improve volatility-related content for Ijen/Bromo, but requires clear page ownership and support-page logic.

### Candidate concepts
- scientific FAQ schema
- event/status schema for reopening/closure context
- educational tone for volatile phenomena
- support-page answer-first content

### Integration target
- `/travel-guide/weather-and-closures`
- `/travel-guide/faq`
- destination pages where relevant

### Guardrail
This layer must not become a source of commercial overpromising.

---

## 6.3 Explicit legal ID mapping (`taxID` / NIB)

### Status
**CANDIDATE**

### Why candidate
The idea is strategically useful and supports legal grounding, but it must be validated against the current live schema approach.

### Candidate concepts
- explicit tax/business identifier mapping
- structured legal grounding in root organization schema

### Guardrail
Only canonical verified identifiers may be exposed.

---

## 6.4 `LocalBusiness + TravelAgency` dual typing

### Status
**CANDIDATE**

### Why candidate
This is a plausible schema enhancement and could strengthen local-entity grounding.

### Guardrail
It is a schema design decision, not a business-data override.

---

## 7. Needs-Validation Layer

## 7.1 `iso6523Code` mapped directly to NIB

### Status
**NEEDS_VALIDATION**

### Reason
This is strategically attractive, but it requires validation for semantic correctness in this exact usage.

### Validation needed
- schema semantic suitability
- implementation consistency
- whether this exact identifier usage is appropriate for canonical production deployment

### Until validated
Do not ship as canonical production schema.

---

## 7.2 Deep forensic proof schema classes

### Status
**NEEDS_VALIDATION**

### Examples
- `GovernmentPermit`
- `GovernmentService`
- `DigitalDocument`
- `Permission`
- SHA256 references directly in schema blocks

### Reason
These are valuable ideas, but they require:
- schema validation
- asset-model mapping
- URL verification
- implementation rules for proof ownership

### Until validated
Keep as schema implementation candidates only.

---

## 7.3 MCP / agent config endpoint

### Status
**NEEDS_VALIDATION**

### Reason
This belongs to a later technical search / agentic infrastructure phase, not the current canonical implementation layer.

### Until validated
Keep in future technical roadmap, not immediate live requirement.

---

## 7.4 Ijen-specific health requirement schema details

### Status
**NEEDS_VALIDATION**

### Reason
The direction is good, but exact fields like:
- `healthRequirement`
- `amenityFeature`
- `touristType` wording  
need validation against both schema semantics and live product-policy wording.

### Until validated
Use as draft implementation direction only.

---

## 8. Rejected / Not Canonical Layer

## 8.1 Postal code `68218`

### Status
**REJECTED / NOT CANONICAL**

### Reason
Conflicts with existing canonical SSOT postal code `68214`.

### Rule
Use the SSOT postal code unless the canonical source is explicitly updated.

---

## 8.2 Literal route/product examples as truth

### Status
**REJECTED / NOT CANONICAL**

### Reason
Product examples in the guide are illustrative, not canonical route definitions.

### Rule
Canonical product names, itineraries, and routes come from SSOT tour pages, not this guide.

---

## 8.3 Internal aggressive strategy wording

### Status
**REJECTED / NOT CANONICAL**

### Examples
- “nuclear option”
- “unbreakable trust vector”
- similar internal framing phrases

### Reason
Useful internally as strategic shorthand, but not appropriate for canonical SSOT, PRD, or production-facing copy.

---

## 8.4 Any direct override of canonical identity values

### Status
**REJECTED / NOT CANONICAL**

### Rule
This guide must not override:
- legal name
- canonical email
- phone
- founder naming
- postal code
- page ownership
- route naming
- route count

---

## 9. Recommended Stitching Plan

## 9.1 What should be stitched now

### Into the canonical SSOT/PRD logic
- entity-first interpretation
- founder authority graph
- evidence locker concept
- historical continuity logic
- crew micro-entity strategy
- AI-readable trust logic

### Into future implementation specs
- tour product schema
- faq/event/status schema
- deeper proof schema
- root organization schema enhancements

---

## 9.2 What should not be stitched directly

- literal schema examples as production code
- conflicting postal code
- illustrative package examples as canonical truth
- aggressive internal persuasion wording

---

## 10. Recommended Follow-up Documents

This overlay should lead directly to these files:

1. `JVTO_SCHEMA_IMPLEMENTATION_SPEC.md`  
   Literal schema blocks normalized against SSOT.

2. `JVTO_TRUST_GRAPH_MAP.md`  
   Claim → proof → asset → page owner → schema exposure.

3. `JVTO_CREW_ENTITY_SPEC.md`  
   Crew micro-entity mapping with evidence policy.

4. `JVTO_FAQ_EVENT_STATUS_SPEC.md`  
   Scientific / volatility / reopening / support-answer modeling.

---

## 11. Final Working Decision

The strategic JSON-LD guide is confirmed as **useful and worth stitching**, but only in a controlled way.

### Final classification
- **Adopt the strategy**
- **Normalize the implementation**
- **Validate the schema details**
- **Reject conflicting literals**

### Final rule
This guide is an **overlay**, not a replacement.

It improves the JVTO system by making the existing trust architecture:
- more machine-readable
- more entity-centric
- more defensible in GEO / AEO / AI-search contexts

without changing the canonical truth layer already established.

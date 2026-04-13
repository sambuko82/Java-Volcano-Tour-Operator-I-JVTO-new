# JVTO Page Briefs

> Layout final dan section order per halaman dan subhalaman.  
> Format per halaman: **Route | Visual Mode | Tujuan halaman | Section order | CTA type | Tone**

---

## `/` — Homepage

| Field | Value |
|---|---|
| Visual Mode | Homepage Mode |
| Tujuan | Trust-first commercial entry. Baseline visual site. |
| CTA Type | Primary orange CTA + Verify lime strip |
| Tone | Premium expedition, trust-commercial |

### Section Order

| # | Section | Nama komponen | Asset role |
|---|---|---|---|
| 1 | Hero | `Hero Section` | `brand-hero` |
| 2 | Differentiators | `DifferentiatorGrid` | — |
| 3 | Destinations | `Destination Card Grid` | `destination-card` |
| 4 | Route Browser | `RouteSelector` | `route-card` |
| 5 | Ijen Health Proof | Ijen Health Rail (inline) | `medical-proof` |
| 6 | Trust Section | `TrustSummary` + `TrustBar` | `review-platform` |
| 7 | Founder Spotlight | `FounderSpotlight` | `founder-identity` |
| 8 | FAQ | `FAQSection` | — |
| 9 | Contact | `ContactSection` | — |
| 10 | Verify CTA | Lime strip (inline) | — |
| 11 | Footer | `Footer` | — |

---

## `/tours` — Tours Hub

| Field | Value |
|---|---|
| Visual Mode | Travel Mode |
| Tujuan | Discovery dan selection paket. Jawab: berangkat dari mana, paket apa. |
| CTA Type | Package card CTA + Contact CTA |
| Tone | Discovery-desire, route clarity |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Travel Hero | `Hero Section (Travel)` |
| 2 | Route Selector / Tabs | `RouteSelector` (Segmented) |
| 3 | Package Card Grid | `TourCard` grid |
| 4 | Comparison Strip / Filter Bar | Comparison Strip |
| 5 | Support Rail | Support Rail |
| 6 | Closing CTA | `ContactSection` |
| 7 | Footer | `Footer` |

---

## `/tours/[slug]` — Package Detail Page

| Field | Value |
|---|---|
| Visual Mode | Travel Mode |
| Tujuan | Self-service brochure. Semua informasi tersedia tanpa perlu tanya. |
| CTA Type | Booking CTA (WhatsApp / Form) |
| Tone | Package-first, practicalities next, trust later |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Package Hero | `Package Hero` |
| 2 | Route Facts Bar | `RouteFactsBar` |
| 3 | Route Gallery | Route Gallery |
| 4 | Route Fit Block | Route Fit Block (inline) |
| 5 | Trip Rhythm Section | Trip Rhythm Section |
| 6 | Rooming & Stay Block | Rooming & Stay Block |
| 7 | Transport & Crew Block | Transport & Crew Block |
| 8 | Meals Summary | Meals Summary |
| 9 | Ijen Readiness Block | Ijen Readiness Block |
| 10 | Compact Policy Panel | Compact Policy Panel |
| 11 | Payment Summary Block | Payment Summary Block |
| 12 | Add-on Options | Add-on Options |
| 13 | Alternative Route Card | `TourCard` (2 closest alternatives) |
| 14 | Proof Rail / Verify Support | Proof Rail inline |
| 15 | FAQ Block | `FAQSection` |
| 16 | Booking CTA | `ContactSection` / WhatsApp CTA |
| 17 | Footer | `Footer` |

---

## `/destinations` — Destinations Hub

| Field | Value |
|---|---|
| Visual Mode | Travel Mode |
| Tujuan | Eksplorasi destinasi. Visual desire + route linkage. |
| CTA Type | Card link ke destination page |
| Tone | Image-led, lebih sedikit text |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Travel Hero | `Hero Section (Travel)` |
| 2 | Destination Card Grid | Destination Card Grid |
| 3 | Closing CTA | Link ke tours |
| 4 | Footer | `Footer` |

---

## `/destinations/[slug]` — Destination Detail Page

| Field | Value |
|---|---|
| Visual Mode | Travel Mode |
| Tujuan | Visual desire, difficulty, route linkage, context. |
| CTA Type | Link ke related tours/packages |
| Tone | Image-led, lebih sedikit text dari support pages |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Destination Hero | `Destination Hero` |
| 2 | Highlight Cards | `Highlight Cards` |
| 3 | Difficulty Strip | `Difficulty Strip` |
| 4 | Context Section | Context Section |
| 5 | Linked Route Cards | `TourCard` (linked routes) |
| 6 | Readiness Note | `Readiness Note` |
| 7 | Destination CTA | Destination CTA |
| 8 | Footer | `Footer` |

---

## `/verify-jvto` — Verify Hub

| Field | Value |
|---|---|
| Visual Mode | Trust Mode |
| Tujuan | Entry point ke seluruh proof system. |
| CTA Type | Category card links ke subpages |
| Tone | Formal, document-oriented, authority without theatrics |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Proof Hero | `Proof Hero` |
| 2 | Proof Category Grid | `ProofCategoryGrid` |
| 3 | Evidence/Artifact Grid | `ProofCard` grid |
| 4 | History Section | History + Timeline |
| 5 | Police & Safety Section | Police & Safety block |
| 6 | Press & Recognition | `ProofCard` recognition grid |
| 7 | Verification FAQ | `FAQSection` |
| 8 | Closing CTA | Proof CTA |
| 9 | Footer | `Footer` |

---

## `/verify-jvto/legal`

| # | Section |
|---|---|
| 1 | Legal Hero |
| 2 | Licence Previews (NIB, PT, NPWP) |
| 3 | Document Preview Row |
| 4 | Context Notes Panel |
| 5 | Related Proof Links |
| 6 | Footer |

---

## `/verify-jvto/police-safety`

| # | Section |
|---|---|
| 1 | Police Hero |
| 2 | Founder Authority Block |
| 3 | Safety Context |
| 4 | Supporting References |
| 5 | Footer |

---

## `/verify-jvto/press-recognition`

| # | Section |
|---|---|
| 1 | Press Hero |
| 2 | Press Entries (`ProofCard` grid) |
| 3 | Recognition Items |
| 4 | Context of Mention |
| 5 | Footer |

---

## `/verify-jvto/history-artifacts`

| # | Section |
|---|---|
| 1 | History Hero |
| 2 | Continuity Proof (`ProofCard` grid) |
| 3 | JVTO Timeline |
| 4 | Founder–History Relation |
| 5 | Third-party Continuity References |
| 6 | Footer |

---

## `/travel-guide` — Travel Guide Hub

| Field | Value |
|---|---|
| Visual Mode | Hybrid Mode |
| Tujuan | Decision-support system. Bukan blog. |
| CTA Type | Guide category links + Contact escalation |
| Tone | Terstruktur, decision-support, lebih ringan dari verify |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Support Hero | `Hero Section (Hybrid)` |
| 2 | Support Shortcut Rail | `SupportShortcutRail` |
| 3 | Live Signal Block | `LiveSignalBlock` |
| 4 | Rulebook Section | The Rulebook Before You Book |
| 5 | Destination Guides | Destination Guide Cards |
| 6 | Practical Preparation | Practical Prep Grid |
| 7 | Operational Certainty Checklist | Checklist Section |
| 8 | FAQ | `FAQSection` |
| 9 | Closing CTA | Closing CTA |
| 10 | Footer | `Footer` |

---

## `/travel-guide/ijen-health-screening`

| # | Section |
|---|---|
| 1 | Screening Intro Hero |
| 2 | Why It Matters |
| 3 | Operational Workflow |
| 4 | Doctor/Health Proof |
| 5 | FAQ Block |
| 6 | Support CTA |
| 7 | Footer |

---

## `/travel-guide/mount-bromo-logistics`

| # | Section |
|---|---|
| 1 | Context Hero |
| 2 | Summary Block |
| 3 | What It Means |
| 4 | Practical Actions |
| 5 | Related Routes |
| 6 | Escalation CTA |
| 7 | Footer |

---

## `/travel-guide/tumpak-sewu-logistics`

_(Same structure as `/mount-bromo-logistics`)_

---

## `/travel-guide/packing-list`

| # | Section |
|---|---|
| 1 | Packing Intro Hero |
| 2 | List by Category |
| 3 | JVTO-Provided Gear |
| 4 | CTA |
| 5 | Footer |

---

## `/why-jvto` — Why JVTO Hub

| Field | Value |
|---|---|
| Visual Mode | Hybrid Mode |
| Tujuan | Story, people, standards, review synthesis. |
| CTA Type | Trust CTA ke verify atau specific proof |
| Tone | More human, more narrative, tapi tetap modular |

### Section Order

| # | Section | Nama komponen |
|---|---|---|
| 1 | Narrative Hero | Narrative Hero |
| 2 | Difference Grid | `DifferentiatorGrid` (variant) |
| 3 | People Spotlight / Crew Preview | `CrewGrid` preview |
| 4 | Standards Block | Standards Block |
| 5 | Review Synthesis Block | `TrustpilotWidget` + review synthesis |
| 6 | Trust CTA | Trust CTA |
| 7 | Footer | `Footer` |

---

## `/why-jvto/our-team`

| # | Section |
|---|---|
| 1 | Team Hero |
| 2 | Crew Cards (`CrewGrid`) |
| 3 | Strengths/Tags |
| 4 | Route Relevance |
| 5 | Optional Review Linkage |
| 6 | Footer |

---

## `/why-jvto/reviews`

| # | Section |
|---|---|
| 1 | Review Hub Hero |
| 2 | Grouped Reviews (by platform/theme) |
| 3 | Pattern-first synthesis (not random quote wall) |
| 4 | Footer |

---

## `/why-jvto/community-standards`

| # | Section |
|---|---|
| 1 | Standards Intro |
| 2 | Safety-led Rules |
| 3 | Practical Boundaries |
| 4 | Links ke `/travel-guide` + `/policy` |
| 5 | Footer |

---

## `/why-jvto/our-story` (atau `/the-jvto-difference`)

| # | Section |
|---|---|
| 1 | Founder / Company Narrative |
| 2 | Continuity Block |
| 3 | Why This Operator Exists |
| 4 | Trust-linked Storytelling |
| 5 | Footer |

---

## `/policy/*`

| Field | Value |
|---|---|
| Visual Mode | Trust Mode |
| Tujuan | Legal clarity. Mudah discan. |
| CTA Type | Support Rail links |
| Tone | Formal, clean, scannable |

| # | Section |
|---|---|
| 1 | Policy Intro |
| 2 | Policy Section Blocks |
| 3 | Policy Summary Box |
| 4 | Support Rail |
| 5 | Footer |

---

## `/contact`

| Field | Value |
|---|---|
| Visual Mode | Hybrid (escalation layer) |
| Tujuan | Escalation. Bukan pengganti informasi utama. |
| CTA Type | WhatsApp, email, form |
| Tone | Direct, helpful, bukan pushy |

| # | Section |
|---|---|
| 1 | Contact Intro |
| 2 | Contact Card Grid (WhatsApp, email, address, map) |
| 3 | Contact Trust Cue |
| 4 | Help Shortcuts |
| 5 | Footer |

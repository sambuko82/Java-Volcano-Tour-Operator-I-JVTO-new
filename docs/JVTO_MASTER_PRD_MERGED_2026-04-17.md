# JVTO Master PRD Merged

Version: 2026-04-17  
Status: Review draft  
Project: Java Volcano Tour Operator website optimization  
Product type: trust-led commercial website, proof library, route discovery system, booking-readiness system, and AI-readable authority layer

---

## 1. Purpose

Dokumen ini menggabungkan informasi dari PRD v3/v4, blueprint Excel homepage, travel guide, destination pages, Why JVTO hub, Verify JVTO hub, dan kondisi project saat ini.

Tujuannya adalah menjadi PRD kanonik untuk melanjutkan optimasi website JVTO tanpa redesign total. Website tetap harus mengacu pada karakter live site, tetapi diperkuat sebagai sistem komersial, trust, proof, dan AI-readable authority.

Source files audited:

- `E:\Users\JAVA VOLCANO\Downloads\JVTO_PRD_v4_Final_Merged.md`
- `E:\Users\JAVA VOLCANO\Downloads\PRD v3.html`
- `E:\Users\JAVA VOLCANO\Downloads\JVTO_Homepage_Narrative_Blueprint_Table.xlsx`
- `E:\Users\JAVA VOLCANO\Downloads\JVTO_Travel_Guide_Narrative_Blueprint_Table.xlsx`
- `E:\Users\JAVA VOLCANO\Downloads\JVTO_Destination_Page_Narrative_Blueprint_Table.xlsx`
- `E:\Users\JAVA VOLCANO\Downloads\JVTO_Why_JVTO_Hub_Narrative_Blueprint_Table.xlsx`
- `E:\Users\JAVA VOLCANO\Downloads\JVTO_Verify_JVTO_Hub_Narrative_Blueprint_Table.xlsx`
- `F:\New folder\North Star.txt`
- current project files in `app/`, `components/`, `lib/`, `public/`, and `docs/`

---

## 2. Product Definition

JVTO website adalah sistem digital untuk menjual private East Java volcano tours sekaligus membuktikan legitimasi operator secara terbuka.

Website tidak boleh berfungsi sebagai brosur biasa. Website harus membantu user:

1. Memahami kenapa JVTO berbeda dari operator lain.
2. Memilih rute atau paket yang sesuai.
3. Mengerti risiko, aturan, dan logistik sebelum booking.
4. Memverifikasi legalitas, safety context, history, reviews, dan partner sebelum membayar.

North Star:

Build a trust-led, package-first, support-backed, proof-owned, machine-readable website system for JVTO.

North Star implementation note:

Upgrade JVTO through improve-in-place execution. Keep the live/data baseline, use the local app as UX/trust/orchestration reference, and route users through trust entry, route discovery, package conversion, operational support, and proof ownership without treating new brainstorming as an automatic priority change.

Core user conclusion:

1. JVTO berbeda.
2. Perbedaannya nyata dan dapat diverifikasi.
3. Saya tahu paket mana yang cocok.
4. Saya cukup percaya untuk lanjut direct checkout atau official human escalation.

---

## 3. Canonical Positioning

Recommended positioning:

Java Volcano Tour Operator is a registered Indonesian travel company based in Bondowoso, East Java. JVTO designs private, all-inclusive routes to Mount Bromo, Kawah Ijen, Tumpak Sewu, Madakaripura, Papuma, and overland East Java journeys with visible legal proof, Tourist Police-informed operating culture, clear inclusions, and route-specific preparation.

Do not position JVTO as:

- a government body
- a medical provider
- a generic reseller
- a risk-free adventure operator
- a luxury resort brand
- a blog-first travel publisher

Use controlled wording:

- Prefer: `Tourist Police-informed safety culture`
- Avoid unless legally verified and visible on page: `police-standard procedures`
- Prefer: `Ijen access rules can require a recent local health certificate`
- Avoid as universal claim: `mandatory health screening for all`
- Prefer: `proof library`
- Avoid: `forensic mode across the whole website`

---

## 4. Source Audit Findings

### 4.1 Strong Agreements Across Sources

All source files agree on these principles:

- Homepage must sell trust before detail.
- Tour pages must behave like self-service booking brochures.
- Travel Guide must reduce support friction and answer operational questions.
- Verify JVTO must be a structured proof hub, not a decorative trust page.
- Why JVTO must own narrative differentiation.
- Destination pages must connect beauty, route reality, safety, and related tours.
- AI/GEO/AEO visibility requires visible DOM content plus JSON-LD, not hidden claims.

### 4.2 Conflicts Resolved In This PRD

Checkout conflict:

Older PRD sources say secure checkout and 20% deposit are binding. Current project direction has checkout deferred. Therefore this PRD treats checkout as a target phase, not Phase 1 implementation. Current flow remains inquiry and availability-first, with future checkout planned.

Police wording conflict:

Some source files use strong claims such as active police-led, police authority, or government service. Current implementation must use proof-led wording and avoid implying that JVTO itself is a government service.

Health screening conflict:

Some source files frame screening as mandatory for all Ijen climbers and digitally verifiable by QR. Current implementation must state only what can be visibly supported: Ijen access rules can require a recent local health certificate, and JVTO helps guests complete a real clinic workflow when the rule applies.

Schema conflict:

Older source files recommend `GovernmentPermit`, `GovernmentService`, and broad medical schema globally. Current canonical approach uses separate `@graph` nodes and avoids global overclaim:

- Organization as `TravelAgency` + `LocalBusiness`
- Police/SPRIN proof as `CreativeWork` + `MediaObject`
- Ijen health workflow as `Service`
- Health page may use `MedicalWebPage`
- Tour detail pages use `Product` + `TouristTrip`

Visual mode conflict:

Verify dark/terminal style is scoped only to `/verify-jvto/*`. There is no global `forensic-mode`.

---

## 5. Entity Identity

| Field | Value |
|---|---|
| Brand | Java Volcano Tour Operator |
| Abbreviation | JVTO |
| Legal name | PT Java Volcano Rendezvous |
| NIB | 1102230032918 |
| Domain | javavolcano-touroperator.com |
| Headquarters | Jl. Khairil Anwar No.102 A, Badean, Bondowoso, Jawa Timur 68214 |
| Region | East Java, Indonesia |
| WhatsApp | +6282244788833 |
| Email | hello@javavolcano-touroperator.com |
| Founder | Agung Sambuko / Mr. Sam |
| Historical continuity | Booking.com 2015 award, Stefan Loose guidebook reference |
| Trust surfaces | Trustpilot, TripAdvisor, Google Maps, ISIC, INDECON |

Naming rules:

- Use `Java Volcano Tour Operator` on first mention.
- Use `JVTO` only after first full mention.
- Use `PT Java Volcano Rendezvous` in legal, footer, policy, and verify contexts.
- Avoid `Java Volcano Tours`, `JV Tour`, or inconsistent entity variants.

---

## 6. Site Architecture

The site is a five-layer system:

| Layer | Routes | Job |
|---|---|---|
| Trust Entry | `/` | Establish immediate trust and send users to tours or verification |
| Route Discovery | `/tours`, `/tours/from-surabaya`, `/tours/from-bali`, `/destinations` | Help users choose package or place |
| Package Conversion | `/tours/[slug]` | Function as standalone booking brochure |
| Operational Support | `/travel-guide/*`, `/policy/*` | Explain rules, safety, packing, booking, cancellations |
| Proof Ownership | `/verify-jvto/*`, `/why-jvto/*` | Prove claims and explain differentiation |

Current implemented routes:

- `/`
- `/tours`
- `/tours/from-surabaya`
- `/tours/from-bali`
- `/tours/[slug]`
- `/destinations`
- `/destinations/[slug]`
- `/travel-guide`
- `/travel-guide/booking-information`
- `/travel-guide/faq`
- `/travel-guide/ijen-health-screening`
- `/travel-guide/mount-bromo-logistics`
- `/travel-guide/packing-and-fitness`
- `/travel-guide/packing-list`
- `/travel-guide/police-escort-for-groups`
- `/travel-guide/safety-on-tours`
- `/travel-guide/tumpak-sewu-logistics`
- `/travel-guide/weather-and-closures`
- `/verify-jvto`
- `/verify-jvto/legal`
- `/verify-jvto/police-safety`
- `/verify-jvto/press-recognition`
- `/verify-jvto/history-artifacts`
- `/why-jvto`
- `/why-jvto/the-jvto-difference`
- `/why-jvto/our-story`
- `/why-jvto/our-team`
- `/why-jvto/reviews`
- `/why-jvto/community-standards`
- `/policy`
- `/policy/booking-payment-cancellation`
- `/policy/inclusions-exclusions`
- `/policy/privacy`
- `/contact`

---

## 7. User Segments

### Ready-to-book traveler

Needs: package clarity, price clarity, inclusions/exclusions, route fit, easy CTA.  
Primary routes: `/tours`, `/tours/[slug]`, `/travel-guide/booking-information`, `/contact`.

### Skeptical first-time traveler

Needs: legal proof, reviews, third-party citations, safety context, visible company identity.  
Primary routes: `/`, `/verify-jvto`, `/verify-jvto/legal`, `/verify-jvto/police-safety`, `/why-jvto`.

### High-risk route planner

Needs: Ijen health requirements, weather and closure handling, packing/fitness clarity, realistic difficulty.  
Primary routes: `/travel-guide`, `/travel-guide/ijen-health-screening`, `/travel-guide/weather-and-closures`, `/travel-guide/packing-and-fitness`, destination detail pages.

### AI/search crawler

Needs: stable entity names, visible answer blocks, valid JSON-LD, proof URLs, `llms.txt`, `ai-agent-config.json`, sitemap.

Primary assets:

- `components/JsonLd.tsx`
- `public/llms.txt`
- `public/.well-known/ai-agent-config.json`
- `app/sitemap.ts`
- `/verify-jvto/*`

---

## 8. Funnel Model

The website has two front doors:

1. Commercial path: homepage or search page -> tours hub -> tour detail -> inquiry/booking.
2. Trust path: homepage or search page -> verify/why/travel guide -> tours -> inquiry/booking.

All major pages must offer at least one commercial next step and one trust/support next step.

| CTA Type | Label Examples | Destination | Purpose |
|---|---|---|---|
| Commercial | Browse Private Tours, View Tour | `/tours`, `/tours/[slug]` | Move toward package selection |
| Trust | Verify JVTO, Open Proof Library | `/verify-jvto` | Validate operator legitimacy |
| Guide | How to Book & Pay, Travel Guide | `/travel-guide/*` | Reduce pre-booking confusion |
| Contact | Contact JVTO, Ask Before You Book | `/contact`, WhatsApp | Human handoff |
| Policy | Booking & Cancellation Policy | `/policy/*` | Binding terms and dispute prevention |

---

## 9. Current Data Model

Project data sources:

| Data | File |
|---|---|
| Brand/entity config | `lib/siteConfig.ts` |
| Tours, destinations, crew | `lib/jvtoData.ts` |
| Proof assets, hashes, recognitions, artifacts, timeline | `lib/verificationData.ts` |
| Media registry | `lib/ssot-media-registry.ts` |
| JSON-LD builders | `components/JsonLd.tsx` |
| LLM context | `public/llms.txt` |
| AI agent config | `public/.well-known/ai-agent-config.json` |

Current content inventory:

- 5 destinations: Mount Bromo, Kawah Ijen, Madakaripura Waterfall, Tumpak Sewu Waterfall, Papuma Beach.
- 14 listed tour package entries in current `lib/jvtoData.ts` after current project state.
- Crew data with named guides/drivers and selected KTA/media attributes.
- Proof library with NIB, TDUP, HPWKI, SPRIN, Booking.com 2015, Stefan Loose, Detik, Radar Jember, ISIC, INDECON, BBKSDA context.

PRD note:

Some source PRDs mention 19 packages. Current repository appears to contain 14 tour entries. Future content work must either add missing packages or update copy that claims 19 packages.

---

## 10. Homepage Requirements

Route: `/`

Role:

Commercial gateway, trust gateway, and answer gateway.

Primary goal:

Make a first-time visitor understand that JVTO is a private, verifiable East Java volcano operator, then move them into tour discovery or trust verification.

Required sequence:

1. Header / top navigation.
2. Hero.
3. Direct-answer intro.
4. Differentiator grid.
5. Destinations we operate.
6. Departure city selector.
7. Featured private tours.
8. Founder / story block.
9. Independent review sources.
10. Verify JVTO teaser.
11. Travel Guide teaser.
12. Contact / pre-footer CTA.
13. Footer.

Hero requirements:

- H1 must state private volcano tours in East Java.
- Subheadline must include operator identity, private execution, proof, safety culture, and route scope.
- Primary CTA: `Browse Private Tours`.
- Secondary CTA: `Verify JVTO`.

Homepage content rules:

- Keep proof compressed. Do not place raw PDFs on homepage.
- Show trust signals above or near fold.
- Use answer-ready 40 to 60 word copy blocks.
- Do not use testimonial walls as the main trust mechanism.
- Every trust claim must link to owner page.

Homepage required links:

- `/tours`
- `/tours/from-surabaya`
- `/tours/from-bali`
- `/destinations`
- `/why-jvto`
- `/verify-jvto`
- `/travel-guide`
- `/contact`

Acceptance criteria:

- User can identify JVTO entity and routes in under 5 seconds.
- User can verify JVTO without scrolling deeply.
- User can self-select Surabaya or Bali start path.
- User sees proof-first differentiation without homepage becoming a proof archive.

---

## 11. Tours Hub Requirements

Route: `/tours`

Role:

Package discovery and comparison.

Primary goal:

Help users compare curated private packages by origin, duration, destination, difficulty, and price-from.

Required card fields:

- Package title.
- Duration.
- Origin.
- Destinations.
- Difficulty / physicality.
- Price from.
- Short route summary.
- Primary CTA: `View Tour`.
- Secondary support link where needed.

Required filters:

- Origin: Surabaya, Bali.
- Duration.
- Destination.
- Physical intensity.

Rules:

- Do not behave like an infinite marketplace.
- Package selection should feel curated.
- Every card must be complete.
- Price language must be clear that price is per person based on private group size.

Acceptance criteria:

- User can find Surabaya-start and Bali-start packages quickly.
- Tour card fields are consistent.
- Ijen routes indicate health screening support without overclaiming.

---

## 12. Tour Detail Page Requirements

Route: `/tours/[slug]`

Role:

Standalone self-service booking brochure.

Required sequence:

1. Hero with package name, image, duration, destinations, rating/review signal.
2. Route facts bar.
3. Answer block: what this tour is, price logic, who it fits.
4. Overview.
5. Route fit.
6. Itinerary breakdown.
7. Inclusions/exclusions.
8. Ijen health screening support block when route includes Ijen.
9. Blue Fire clarity block when route includes Ijen.
10. Safety and physicality block.
11. Related tours.
12. Sticky booking/inquiry panel.
13. Verify-before-book panel.
14. Final CTA.

Sticky panel requirements:

- Show private group pricing.
- Show current route basics.
- Primary CTA: `Check Availability` or future `Book This Tour`.
- Secondary CTA: WhatsApp inquiry.
- Include Verify JVTO link.

Checkout note:

Phase 1 remains inquiry/availability-first. Future checkout should support deposit and e-voucher issuance only after availability logic is ready.

Acceptance criteria:

- User can understand route, price, intensity, inclusions, exclusions, and safety requirements without contacting support.
- User can verify JVTO from the detail page.
- Related tours prevent dead ends.

---

## 13. Destination Page Requirements

Routes:

- `/destinations`
- `/destinations/[slug]`

Destination template applies to:

- Mount Bromo
- Kawah Ijen
- Madakaripura Waterfall
- Tumpak Sewu Waterfall
- Papuma Beach

Destination detail required sequence:

1. Header / navigation.
2. Hero / destination identity.
3. At a glance.
4. Experience profile.
5. Why this destination is worth a private tour.
6. Key highlights.
7. Trail and logistics.
8. Safety protocol.
9. Culture and local communities.
10. Entry fees and permits.
11. Seasonality.
12. Destination-specific trust insert.
13. Related tours.
14. Travel Guide links.
15. Pre-footer CTA.
16. Footer.

Destination-specific emphasis:

| Destination | Route Reality | Required Emphasis |
|---|---|---|
| Mount Bromo | Jeep, viewpoint, Sea of Sand, crater stairs | sunrise timing, dust/wind, Tengger context |
| Kawah Ijen | midnight trek, crater ascent/descent, gas risk | health screening, gas mask, sulfur exposure |
| Madakaripura | canyon walk, water exposure, slippery footing | wet-route preparation, sacred context |
| Tumpak Sewu | steep descent/ascent, wet rocks, river path | fitness warning, closure sensitivity |
| Papuma Beach | coastal access, scenic stop logic | extension/pacing role rather than difficulty |

Acceptance criteria:

- Every destination page links to related tours.
- Every destination page links to relevant guide pages.
- Ijen destination links to health screening page.
- Safety language is route-specific and calm.

---

## 14. Travel Guide Requirements

Route: `/travel-guide`

Role:

Answer gateway, trust support, and pre-booking education hub.

Primary goal:

Help visitors understand booking, safety, Ijen screening, weather, closures, packing, and group travel before they choose or pay for a route.

Required sequence:

1. Header / top navigation.
2. Hero intro.
3. Latest JVTO update.
4. JVTO operating status.
5. Quick index.
6. Safety on JVTO tours.
7. Health and Ijen screening.
8. Weather, volcano alerts, and closures.
9. Packing and fitness.
10. Booking, payments, and Travel Credit.
11. Traffic police escort for groups.
12. ISIC student deals if implemented.
13. Official sources and external links.
14. Document priority reminder.
15. Pre-footer travel CTAs.
16. Footer.

Subpage map:

| Route | Primary Function |
|---|---|
| `/travel-guide/booking-information` | Plain-language booking explainer |
| `/travel-guide/ijen-health-screening` | Ijen-specific screening explanation |
| `/travel-guide/weather-and-closures` | Change-handling logic |
| `/travel-guide/packing-and-fitness` | Preparation and self-checks |
| `/travel-guide/safety-on-tours` | Operational safety overview |
| `/travel-guide/faq` | Short answer library |
| `/travel-guide/police-escort-for-groups` | Escort policy explainer |
| `/travel-guide/packing-list` | Practical gear list |

Document priority rule:

If website wording conflicts with booking-specific documents, priority is:

1. Official E-Voucher / Invoice for the specific booking.
2. Booking, Payment & Cancellation Policy.
3. Inclusions & Exclusions Policy.
4. General website text and informal communication.

Acceptance criteria:

- Travel Guide is not framed as a generic blog.
- Every support topic has a clear owner page.
- Answer blocks are visible HTML, not hidden-only content.
- Operational status avoids rumors and unsupported claims.

---

## 15. Verify JVTO Requirements

Route cluster:

- `/verify-jvto`
- `/verify-jvto/legal`
- `/verify-jvto/police-safety`
- `/verify-jvto/press-recognition`
- `/verify-jvto/history-artifacts`

Role:

Forensic proof hub and trust validation system.

Primary goal:

Let a visitor verify JVTO independently by category: legal identity, police/safety context, press, recognition, historical artifacts, partner memberships, and guide credentials.

Verify hub required sequence:

1. Header / navigation.
2. Hero / hub intro.
3. How to use this page.
4. Proof status strip.
5. Proof categories grid.
6. Legal & accountability.
7. Police & safety.
8. Press & recognition.
9. History artifacts.
10. Partners & memberships.
11. Guide credentials.
12. Evidence card format explanation.
13. Before you book, ask.
14. Pre-footer CTA.
15. Footer.

Verification buckets:

| Bucket | What It Proves | Representative Assets |
|---|---|---|
| Legal & Accountability | JVTO is a real Indonesian operator | NIB, TDUP, AHU, physical office |
| Police & Safety | Safety context is documented | SPRIN assets, press context, Ijen screening page |
| Press & Recognition | Independent public visibility | Detik, Radar Jember, Stefan Loose, BBKSDA context |
| History Artifacts | Operational continuity | Booking.com 2015, shipping label, guidebook image |
| Partners & Memberships | Functional trust relationships | HPWKI, ISIC, INDECON |
| Guide Credentials | Route competence | KTA and team proof where available |

Evidence card fields:

- Category label.
- Document or source title.
- One-sentence meaning.
- Source type.
- Preview action.
- Verification link when available.
- SHA-256 when useful.
- Last verified date when maintainable.

Rules:

- Verify pages must not be dead ends.
- Every verify page needs path back to tours/contact.
- Dark/terminal aesthetic is scoped to verify cluster only.
- SHA-256 is proof metadata, not decoration.
- Use `target="_blank"` for external verification URLs.
- Do not use `nofollow` on verification links unless a legal/compliance reason exists.

Acceptance criteria:

- User can start with legal proof and then inspect deeper categories.
- Proof cards explain meaning before metadata.
- Each proof item has visible context, not only JSON-LD.

---

## 16. Why JVTO Requirements

Route cluster:

- `/why-jvto`
- `/why-jvto/the-jvto-difference`
- `/why-jvto/our-story`
- `/why-jvto/our-team`
- `/why-jvto/reviews`
- `/why-jvto/community-standards`

Role:

Narrative trust owner and differentiation hub.

Primary goal:

Explain why JVTO is different without sounding like generic travel marketing, then route visitors into proof-backed child pages, booking guidance, or verification.

Why JVTO hub required sequence:

1. Header / navigation.
2. Hero / hub intro.
3. Fast orientation block.
4. Trust stack / child-page grid.
5. What makes JVTO different.
6. How to verify us in 60 seconds.
7. Quick answers with owner links.
8. Trust, community, and guests.
9. Direct booking bridge.
10. Pre-footer CTA.
11. Footer.

Child page roles:

| Child Page | Primary Function | Must Prove / Explain |
|---|---|---|
| `/why-jvto/the-jvto-difference` | Main differentiator page | safety culture, private-only model, proof-first operations |
| `/why-jvto/our-story` | Provenance | homestay roots, historical artifacts, local roots |
| `/why-jvto/our-team` | Human proof | crew roles, route competence, selected credentials |
| `/why-jvto/reviews` | Review registry | Trustpilot, TripAdvisor, Google Maps, review themes |
| `/why-jvto/community-standards` | Operating ethics | local guide relationships, fair practice, partner logic |

Acceptance criteria:

- Why JVTO is not a brand essay.
- It routes users toward proof, guide, policy, tours, and contact.
- It summarizes differentiation but leaves detailed evidence to owner pages.

---

## 17. Policy & Contact Requirements

Policy routes:

- `/policy`
- `/policy/booking-payment-cancellation`
- `/policy/inclusions-exclusions`
- `/policy/privacy`

Policy role:

Binding terms and dispute prevention.

Policy requirements:

- Plain language summary at top.
- Detailed rules below.
- Link to booking guide and contact.
- Avoid hiding material terms.
- Include document priority reminder.

Contact route:

- `/contact`

Contact requirements:

- WhatsApp, email, and official office identity visible.
- Contact should be human handoff, not the only booking system forever.
- Future booking/checkout integration must preserve contact as support, not replace it.

---

## 18. Booking & Checkout Requirements

Current phase:

Inquiry and availability-first. Checkout is deferred.

Target future booking model:

1. User selects tour.
2. User selects date, pax, pickup/dropoff, and route options.
3. System verifies availability or sends structured inquiry.
4. JVTO confirms route feasibility and price.
5. User pays deposit or full amount through secure checkout.
6. System issues Official E-Voucher / Invoice PDF.
7. WhatsApp is used for support and coordination, not as payment confirmation.

PRD resolution:

Source PRDs define checkout as a core target. This project should build toward that model, but not force checkout into Phase 1.

Phase 1 booking requirement:

- Ensure every commercial page has a clear inquiry path.
- Preserve tour context in inquiry forms/WhatsApp.
- Show booking/payment/cancellation policy links.
- Avoid implying WhatsApp message alone confirms a booking.

Future checkout requirements:

- Deposit percentage configurable.
- E-voucher generation.
- Payment status.
- Admin confirmation.
- Cancellation/Travel Credit logic.
- Anti-fraud warnings.

---

## 19. Trust Stack

Core trust pillars:

1. Registered Indonesian operator.
2. Private tours by default.
3. Proof-first verification system.
4. Tourist Police-informed operating culture.
5. Ijen health-screening coordination when rules require it.
6. Public third-party review surfaces.
7. Historical continuity from Booking.com 2015 and Stefan Loose.
8. Functional ecosystem partners: HPWKI, ISIC, INDECON.
9. Named local team and route competence.

Trust placement rules:

| Page Type | Trust Depth |
|---|---|
| Homepage | compressed trust strip and links |
| Tour pages | compact proof rail and relevant route proof |
| Destination pages | route-specific safety and verify link |
| Travel Guide | operational explanations |
| Why JVTO | narrative and differentiation |
| Verify JVTO | full proof library |

---

## 20. AI, GEO, AEO, and Structured Data

Core principle:

Machine-readable data must match visible content.

Required assets:

- `public/llms.txt`
- `public/.well-known/ai-agent-config.json`
- `public/robots.txt`
- `app/sitemap.ts`
- `components/JsonLd.tsx`

JSON-LD requirements:

- Use `@graph`.
- Do not merge Organization fields into FAQ/Product/Breadcrumb nodes.
- Global node: `TravelAgency` + `LocalBusiness`.
- Homepage: `WebSite`, `WebPage`, and visible FAQ only where appropriate.
- Tour detail: `Product` + `TouristTrip`, `Offer`, `UnitPriceSpecification`, itinerary, health readiness when relevant.
- Destination detail: `TouristAttraction`/`Place` with route-specific safety data.
- Verify legal: `WebPage`/`AboutPage` + `MediaObject` proof assets.
- Police safety: proof as `CreativeWork`/`MediaObject`, not `GovernmentService`.
- Ijen health: `MedicalWebPage` + `Service`, not JVTO-owned `MedicalProcedure`.
- FAQPage only for visible Q&A.

40-60 word extraction rule:

Critical sections should include short visible summaries that can be quoted by search/AI systems.

Freshness rules:

- `llms.txt` and `ai-agent-config.json` should include reviewed date.
- Volcanic/live-status claims must have freshness policy.
- Do not publish unverified route status or rumors.

Acceptance criteria:

- `npm run build` succeeds.
- Built HTML contains parseable JSON-LD.
- No page-specific schema contains organization-only properties by accident.
- No `GovernmentService` schema is used for JVTO.
- No `MedicalProcedure` schema is used to represent JVTO service.

---

## 21. Visual System

Visual modes:

| Mode | Routes | Character |
|---|---|---|
| Homepage Mode | `/` | trust-led commercial entry |
| Travel Mode | `/tours*`, `/destinations*` | route, movement, package clarity |
| Trust Mode | `/verify-jvto*`, `/policy*` | evidence, clarity, restraint |
| Hybrid Mode | `/travel-guide*`, `/why-jvto*` | education plus narrative trust |

Design principles:

- Premium expedition, not resort luxury.
- Operational clarity, not generic adventure hype.
- Strong images, but not random decoration.
- Trust pages should feel systematic, not promotional.
- Verify mode must not bleed into travel pages.

Core colors from current design docs:

- Navy: primary brand and structure.
- Orange: primary commercial CTA.
- Lime: verification accent.
- Cream/off-white: travel content background.
- Dark terminal palette: verify cluster only.

Component system:

- `Navbar`
- `Footer`
- `JsonLd`
- `DifferentiatorGrid`
- `RouteSelector`
- `FounderSpotlight`
- `TrustSummary`
- `TourCard`
- `RouteFactsBar`
- `ProofCard`
- `AuthorityShield`
- `ProofCategoryGrid`
- `SupportShortcutRail`
- `LiveSignalBlock`
- `FAQSection`
- `AnswerBlock`
- `MedicalTrustSection`
- `CrewGrid`
- `ContactSection`
- `InquiryForm`

---

## 22. Content Governance

SSOT rules:

- Do not hardcode proof facts in many places if they exist in `lib/verificationData.ts`.
- Do not invent review counts.
- Do not invent medical/legal status.
- Use current project files as implementation truth, but use this PRD to resolve content conflicts.

Copy rules:

- Be precise.
- Explain risk calmly.
- Avoid vague superlatives.
- Avoid fear-based marketing.
- Avoid risk-free claims.
- State what JVTO controls: private logistics, preparation, proof, routing, support.
- State what JVTO does not control: weather, gas, volcanic activity, closures, sunrise visibility.

Forbidden phrases unless legally and visibly proven:

- risk-free
- guaranteed sunrise
- guaranteed blue fire
- official government operator
- police service
- every guest must pass mandatory screening
- bypass rules
- cheapest
- luxury without boundaries

---

## 23. Roadmap

### Phase A - Foundation

Status: largely implemented.

Scope:

- Next.js App Router structure.
- Routes for tours, destinations, verify, why, travel guide, policy, contact.
- SSOT data files.
- Proof library data.
- Basic JSON-LD layer.

### Phase B - Core Commercial Upgrade

Status: in progress.

Scope:

- Improve homepage sequence against blueprint.
- Strengthen tours hub comparison.
- Make tour detail pages fully self-service.
- Add stronger route fit and policy summaries.
- Standardize inquiry flow.

### Phase C - Technical Optimization

Status: implemented but needs continuous audit.

Scope:

- JSON-LD `@graph`.
- Sitemap.
- `llms.txt`.
- AI agent config.
- Metadata and canonical alignment.
- Proof asset hashing.
- Structured page schema.

### Phase D - Content System

Status: planned.

Scope:

- Update mechanism for route status.
- Editable guide content.
- Proof registry governance.
- Future CMS or file-based content model.
- Audit scripts for schema/proof drift.

### Phase E - Booking & Checkout

Status: future.

Scope:

- Availability inquiry model.
- Quote confirmation.
- Secure checkout.
- Deposit/full payment logic.
- E-voucher generation.
- Admin booking status.
- Travel Credit logic.

### Phase F - Expansion

Status: future.

Scope:

- Additional route guides.
- ISIC student package page if still strategic.
- More destination pages.
- Review registry depth.
- More proof cards and OCR text for historical artifacts.

---

## 24. Launch Checklist

Critical:

- Homepage trust strip visible.
- Tours and package pages have complete fields.
- Tour detail pages link to Verify JVTO.
- Verify hub has all 4 implemented subpages.
- Proof assets have SHA-256 where planned.
- Legal identity matches across footer, schema, verify, llms, and ai-agent config.
- No old Gmail as primary email.
- JSON-LD validates as parseable JSON.
- No stale `GovernmentService`/`MedicalProcedure` overclaims.
- Ijen screening copy matches current safe wording.
- No `picsum` placeholder images.

Medium:

- Destination pages include travel guide links.
- Travel Guide has quick index and document priority reminder.
- Why JVTO child pages all route back to commercial path.
- Verify subpages include contact/tours path.
- Footer exposes policy, verify, travel guide, and external proof links.
- Metadata and canonical routes exist.

Operational:

- Build passes.
- Routes generate.
- JSON-LD extraction passes.
- `llms.txt` reviewed date is current.
- `ai-agent-config.json` parses.
- Proof URLs are not broken.

---

## 25. Acceptance Criteria

The PRD is satisfied when:

1. A first-time visitor can understand JVTO's difference within one screen.
2. A skeptical visitor can verify legal/proof claims without contacting support.
3. A route-focused visitor can compare packages without guessing inclusions or difficulty.
4. Ijen-specific health and safety content is clear without overclaiming.
5. Every major trust claim has an owner page.
6. Every commercial page has a path to inquiry/booking and a path to verification.
7. AI/search systems can parse entity, route, proof, and policy context from visible HTML plus JSON-LD.
8. The website remains cohesive and does not become a set of disconnected pages.

---

## 26. Immediate Implementation Priorities

Priority 1:

Audit and align `public/llms.txt` and `public/.well-known/ai-agent-config.json` with the safer wording now used in `components/JsonLd.tsx`.

Priority 2:

Reconcile package count mismatch between PRD source files and `lib/jvtoData.ts`.

Priority 3:

Add PRD-backed audit scripts:

- JSON-LD parse audit.
- Proof URL audit.
- overclaim phrase audit.
- required route/page-section audit.

Priority 4:

Review homepage section order against the homepage blueprint and current implementation.

Priority 5:

Write implementation tickets from this PRD for Phase B and Phase D.

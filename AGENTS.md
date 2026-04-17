# JVTO — Project North Star & Site Orchestration Map

> **Core directive**: Build JVTO as a single coherent system — not a collection of pages.  
> Every decision is anchored to: **"Duty First, Business Second."**

---

## 1. What This Project Is

JVTO is being built as a **commercial, trustable, structured, AI-readable website** for a licensed Indonesian volcano tour operator. The goal is not just aesthetics — it is a verifiable digital entity that:

- Sells private volcano tours clearly
- Is trusted by humans and AI/search engines equally
- Has proof of every claim it makes
- Can scale into CMS, blog, and agentic commerce without rebuilding its foundation

**Current phase**: Phase A (Foundation) and Phase C (Technical Optimization) are implemented.  
**Next phases**: Phase B (Core Commercial Upgrade), Phase D (Content System).

---

## 2. Entity Identity (SSOT)

| Field | Value |
|---|---|
| Legal name | PT Java Volcano Rendezvous |
| Brand | Java Volcano Tour Operator (JVTO) |
| NIB | 1102230032918 |
| Founded | 2016-01-01 |
| Address | Jl. Khairil Anwar No.102 A, Badean, Bondowoso, Jawa Timur 68214 |
| Phone / WhatsApp | +6282244788833 |
| Email | hello@javavolcano-touroperator.com |
| Founder | Agung Sambuko (Bripka, Ditpamobvit Tourist Police, East Java) |
| Press | Detik.com 2021 — "Suka Duka Polisi Pariwisata Bondowoso" |
| Historical anchor | Stefan Loose Reiseführer Indonesien, ISBN-13: 978-3-7701-7881-0 (2018) |
| Rating | 4.9 / 5 — 112+ verified reviews |

Data source: `lib/siteConfig.ts` and `lib/verificationData.ts`

---

## 3. Site Architecture (5-Layer System)

```
Layer 1 — Trust Entry       → Homepage (/)
Layer 2 — Route Discovery   → /tours, /destinations
Layer 3 — Package Conversion→ /tours/[slug]
Layer 4 — Operational Support→ /travel-guide, /policy
Layer 5 — Proof Ownership   → /verify-jvto, /why-jvto
```

### Page Roles

| Page | Primary Function | Working Rule |
|---|---|---|
| Homepage `/` | Trust-led commercial entry | **Sells trust** |
| Tours Hub `/tours` | Package & route selection | **Sells clarity** |
| Package Pages `/tours/[slug]` | Brochure + booking confidence | **Sells confidence** |
| Travel Guide `/travel-guide` | Booking readiness, Ijen screening, weather | **Reduces friction** |
| Policy `/policy` | Rules layer | **States terms** |
| Verify JVTO `/verify-jvto` | Forensic proof (legal, police, press) | **Proves claims** |
| Why JVTO `/why-jvto` | Brand narrative + differentiation | **Builds identity** |
| Contact `/contact` | Human escalation | **Enables conversion** |

### Navigation Clusters (user intent grouping)
- **Discovery**: Tours, Destinations
- **Trust**: Why JVTO, Verify JVTO
- **Booking Support**: Travel Guide, Policy
- **Contact**: Contact

---

## 4. Content Hierarchy (Correct Order)

Every page and every section should answer questions in this order:

1. **Why JVTO is different** (trust first)
2. **Which route/package fits** (product clarity)
3. **What the trip actually feels like** (experience)
4. **How the operation works** (practicalities)
5. **Where to verify the claims** (proof)
6. **How to proceed to booking** (conversion)

**Do not lead with proof. Lead with product, support with proof.**

---

## 5. Package Page Structure

Package pages are self-contained brochures. The correct section order:

1. Hero (paket name, hero image, from-price, CTA)
2. Structured route data (duration, origin, physicality)
3. Gallery / visual route
4. Route fit (who this trip is for)
5. Route rhythm (day-by-day or stage-by-stage)
6. Hotel / rooming details
7. Vehicle & crew
8. Meals
9. Ijen readiness block (if applicable)
10. Compact policy summary
11. Payment summary
12. Add-ons
13. Closest alternative
14. Ijen proof rail (if applicable)
15. Verify-before-book CTA
16. FAQ
17. Final CTA

---

## 6. Trust Architecture

### What makes JVTO unique (never omit these):
- **Founder with documented Tourist Police duty context** — Bripka Agung Sambuko, Ditpamobvit East Java, corroborated through third-party press and proof pages
- **Ijen health-screening coordination** — clinic workflow and health-certificate support when current access rules require it
- **Live MAGMA Indonesia integration** — volcano status updated before every departure
- **NIB + HPWKI + TDUP + SPRIN** — full legal and operational credential set
- **Stefan Loose guidebook (ISBN-13: 978-3-7701-7881-0)** — pre-digital editorial authority
- **Detik.com press coverage** — national media corroboration

### Trust placement rules:
- **Homepage**: Trust strip (Trustpilot, police-informed, health-readiness, live MAGMA) + Founder spotlight
- **Package pages**: Compact proof rail (not full audit)
- **Verify JVTO**: Full forensic audit trail
- **Travel Guide**: Operational evidence (screening, weather, field ops)

---

## 7. AI / Machine-Readability Layer

### Files deployed:
| File | Location | Purpose |
|---|---|---|
| `llms.txt` | `public/llms.txt` | High-density SSOT for LLM crawlers |
| `ai-agent-config.json` | `public/.well-known/ai-agent-config.json` | Machine-readable site map, trust signals, scraping permissions |
| `robots.txt` | `public/robots.txt` | Allows GPTBot, PerplexityBot, anthropic-ai, ClaudeBot |
| `sitemap.ts` | `app/sitemap.ts` | Dynamic XML sitemap |
| `JVTO_CANONICAL_SSOT_PRD.md` | `docs/ssot/JVTO_CANONICAL_SSOT_PRD.md` | Master SSOT for product, UX, trust, and implementation |

### JSON-LD schemas in use (`components/JsonLd.tsx`):
- `TravelAgency` + `LocalBusiness` (base)
- `WebSite` + `WebPage`
- `Product` + `TouristTrip` — tour detail pages
- `TouristAttraction` + `Place` — destination detail pages
- `CreativeWork` + `MediaObject` — verification proof documents and SHA-256 evidence
- `MedicalWebPage` — Ijen Health Screening
- `Service` — Ijen health-screening coordination
- `Book` (citation) — Stefan Loose ISBN-13
- `Person` — Agung Sambuko (founder)
- `AggregateRating` — 4.9/5, 112 reviews
- `FAQPage` + `BreadcrumbList`
- `PostalAddress` + `GeoCoordinates`

### SHA-256 forensic hashes (in `lib/verificationData.ts`):
- NIB certificate hash
- HPWKI membership card hash

---

## 8. Data Sources

| Data | File |
|---|---|
| Core brand config | `lib/siteConfig.ts` |
| Tours, Destinations, Crew | `lib/jvtoData.ts` |
| Legal, proof, artifacts, timeline | `lib/verificationData.ts` |
| SSOT media registry | `lib/ssot-media-registry.ts` |
| Component utilities | `lib/utils.ts` |

---

## 9. Visual System

- **Primary color**: Navy (dark blue)
- **Accent action**: Orange
- **Verification accent**: Lime/bright green (use sparingly)
- **Art direction**: Premium expedition + operational trust (not playful, not corporate sterile)
- **Typography**: Raleway (display), Inter (body), JetBrains Mono (code/data)
- **Components**: `ThemeWrapper.tsx` handles dark/light mode

---

## 10. Roadmap Phases

| Phase | Focus | Status |
|---|---|---|
| A — Foundation | DB ownership, page models, cluster architecture | ✅ Done |
| B — Core Upgrade | Package pages, Tours Hub, Homepage | 🔄 In progress |
| C — Technical Optimization | Metadata, schema, alt text, canonical, AI-readable trust | ✅ Done |
| D — Content System | CMS strategy, editable sections, media governance | 📋 Planned |
| E — Expansion | Blog, guide system, help-style structure | 📋 Future |

---

## 11. What Not To Do

- Do not lead homepage with proof/audit content — trust strips support, they don't lead
- Do not make package pages carry all explanations alone — support pages exist
- Do not split Why JVTO and Verify JVTO — they have different jobs:
  - `Why JVTO` = narrative + differentiation
  - `Verify JVTO` = proof + audit trail
- Do not use visual styles that feel: SaaS/startup, playful, magazine-editorial, ultra-luxury resort
- Do not put data behind client-side JS only — SSR is non-negotiable for AI/bot readability
- Do not let MAGMA / volcano status go stale (>72 hours) — citation cliff risk

---

## 12. Success Condition

The website succeeds when a user can quickly reach these 4 conclusions:

1. JVTO is genuinely different from other operators
2. The difference is real and provable
3. I know which package fits me
4. I'm confident enough to start booking

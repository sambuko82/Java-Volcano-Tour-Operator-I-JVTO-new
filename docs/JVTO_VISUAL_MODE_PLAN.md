# JVTO Visual Mode Plan

> Variasi penekanan visual per cluster halaman.  
> Warnanya tetap satu palet. Fontnya tetap satu system. Yang berubah: emphasis, tone, density, dan surface.

---

## Peta Mode per Route

| Visual Mode | Routes yang termasuk |
|---|---|
| **Homepage Mode** | `/` |
| **Travel Mode** | `/tours`, `/tours/[slug]`, `/destinations`, `/destinations/[slug]` |
| **Trust Mode** | `/verify-jvto`, `/verify-jvto/*`, `/verify-jvto/legal`, `/verify-jvto/police-safety`, `/verify-jvto/press-recognition`, `/verify-jvto/history-artifacts`, `/policy/*` |
| **Hybrid Mode** | `/travel-guide`, `/travel-guide/*`, `/why-jvto`, `/why-jvto/*` |

---

## Homepage Mode — `/`

**Fungsi:** Trust-first commercial entry. Baseline visual seluruh site.

### Karakter
- Image-led — foto lanskap kuat di hero
- Trust cepat tersampaikan — differentiators visible di above fold
- CTA jelas — tidak lebih dari 2 CTA utama di hero
- Semua section harus terasa satu keluarga

### Surface & Tone
- Background: `bg-jvto-off` → `bg-white` → `bg-jvto-navy` (dark closing section)
- Primary text: `text-jvto-navy`
- Accent: `jvto-orange` untuk CTA, `jvto-lime` hanya di Verify CTA strip

### Allowed Asset Roles
- `brand-hero` (hero backdrop)
- `destination-card` (destination section)
- `founder-identity` (founder spotlight)
- `review-platform` (trust section)

### Section Order
Hero → Differentiators → Destinations → Route Browser → Trust Section → Founder Spotlight → Verify CTA → Footer

---

## Travel Mode — `/tours*`, `/destinations*`

**Fungsi:** Discovery dan selection. Membantu user menjawab: paket mana, dari mana, cocok untuk siapa.

### Karakter
- Visual desire — foto destinasi dominan
- Route clarity — structured data visible (duration, origin, physicality)
- Package comparison — bisa filter dan bandingkan
- Lebih ringan dan lebih "menjual trip" dari Homepage Mode

### Surface & Tone
- More image-driven surfaces
- Background: lebih banyak `bg-white`, ringan
- Card dimunculkan lebih banyak
- Trust signals ada tapi tidak mendominasi

### Allowed Asset Roles
- `destination-card`
- `route-card`
- `brand-hero` (tour/destination hero)
- `review-platform` (sebagai supporting trust, bukan primary)

### Tours Hub Section Order
Travel Hero → Route Selector/Tabs → Package Card Grid → Comparison Strip → Support Rail → Closing CTA

### Package Page Section Order
Package Hero → Route Facts Bar → Route Gallery → Route Fit Block → Trip Rhythm Section → Rooming & Stay Block → Transport & Crew Block → Meals Summary → Ijen Readiness Block → Compact Policy Panel → Payment Summary Block → Add-on Options → Alternative Route Card → Proof Rail → Verify Support → FAQ Block → Booking CTA

### Destination Page Section Order
Destination Hero → Highlight Cards → Difficulty Strip → Context Section → Linked Route Cards → Readiness Note → Destination CTA

---

## Trust Mode — `/verify-jvto*`, `/policy*`

**Fungsi:** Canonical proof owner. Halaman ini adalah sumber kebenaran untuk legal, history, press, dan safety proof.

### Karakter
- Lebih formal
- Lebih archive/document-oriented
- Proof visible tapi tetap rapi
- Authority without theatrics

### Surface & Tone
- Forensic palette (`forensic-bg`, `forensic-accent`, `forensic-text`) di dark sections
- Light sections pakai `bg-white` dengan border dan subdued palette
- Tidak ada efek hover yang berlebihan
- Font mono (`font-mono`) untuk metadata, hash, tanggal
- Tidak ada ilustrasi atau foto travel — gunakan dokumen, screenshot, dan aset proof

### Allowed Asset Roles
- `legal-proof`
- `continuity-proof`
- `press-proof`
- `police-operations`
- `medical-proof`
- `founder-identity` (sebagai authority, bukan human-interest)

### Verify Hub Section Order
Proof Hero → Proof Category Grid → Evidence/Artifact Grid → History Section → Police & Safety Section → Press & Recognition → FAQ → Closing CTA

### Verify Subpages
- `/legal` — legal-hero, licence previews, document previews, context notes, related links
- `/police-safety` — police/founder proof, safety context, founder authority, references
- `/press-recognition` — press entries, recognition items, context of mention, proof previews
- `/history-artifacts` — continuity proof, artifacts, founder-history, third-party continuity

### Policy Pages Section Order
Policy Intro → Policy Section Blocks → Policy Summary Box → Support Rail

---

## Hybrid Mode — `/travel-guide*`, `/why-jvto*`

**Fungsi:** Support + narrative trust. Campuran clarity orang, proses, dan support.

### Karakter
- Tidak seformal verify
- Tidak sekomersial tours
- Decision-support system: terstruktur tapi tidak kaku
- More human di why-jvto, more structured di travel-guide

### Surface & Tone
- Background: `bg-jvto-off` atau `bg-white` — jangan dark
- Section lebih text-moderate dibanding Travel Mode
- Bisa ada `LiveSignalBlock` untuk freshness (travel-guide)
- Bisa ada `SupportShortcutRail` untuk navigasi cepat

### Allowed Asset Roles
- `brand-hero` (hero backdrop)
- `founder-identity` (why-jvto/our-team)
- `destination-card` (sebagai context, bukan selection)
- `medical-proof` (travel-guide/ijen-health-screening)

### Travel Guide Hub Section Order
Support Hero → Support Shortcut Rail → Live Signal Block → Rulebook Section → Destination Guides → Practical Preparation → Operational Certainty Checklist → FAQ → Closing CTA

### Travel Guide Subpages
- `/ijen-health-screening` — screening intro, why it matters, operational workflow, FAQ, support CTA
- `/mount-bromo-logistics` — summary, practical actions, related routes, escalation CTA
- `/tumpak-sewu-logistics` — summary, practical actions, related routes, escalation CTA
- `/packing-list` — packing intro, list by category, JVTO-provided gear, CTA

### Why JVTO Hub Section Order
Narrative Hero → Difference Grid → People Spotlight → Standards Block → Review Synthesis Block → Trust CTA

### Why JVTO Subpages
- `/our-team` — team hero, crew cards, strengths/tags, route relevance, optional review linkage
- `/reviews` — review hub, grouped by platform/theme, pattern-first bukan random quote wall
- `/community-standards` — standards intro, safety rules, practical boundaries, links ke travel-guide/policy
- `/our-story` — founder/company narrative, continuity, why this operator exists, trust-linked storytelling

---

## Aturan Mode Mixing

- Jangan halaman verify terasa seperti destination page.
- Jangan policy terasa seperti blog.
- Jangan homepage terasa seperti audit dashboard.
- Jangan travel guide terasa seperti artikel editorial.

Perbedaan antar mode bukan dari ganti warna atau ganti font — tapi dari: **density informasi**, **jenis surface**, **proporsi foto vs teks**, dan **jenis CTA yang dipakai**.

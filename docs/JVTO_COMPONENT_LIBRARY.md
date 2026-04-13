# JVTO Component Library

> Daftar komponen visual tetap yang dipakai di seluruh site.  
> Setiap komponen punya nama sistem, file sumber, props, mode yang diizinkan, dan aturan penggunaan.

---

## Konvensi Nama

Gunakan nama sistem ini secara konsisten di semua dokumen kerja, code reviews, dan diskusi tim. Jangan pakai nama informal seperti "kotak kuning di bawah hero" atau "block trust itu".

---

## Komponen Global (semua halaman)

### `Navbar`
- **File:** `components/Navbar.tsx`
- **Fungsi:** Navigasi utama
- **Mode:** Semua
- **Aturan:** Selalu di atas halaman. Tidak ubah per halaman.

### `Footer`
- **File:** `components/Footer.tsx`
- **Fungsi:** Penutup stabil + nav sekunder + legal identity
- **Mode:** Semua
- **Aturan:** Selalu paling bawah. Sebelum Footer di homepage ada Verify CTA strip.

### `WhatsAppFAB`
- **File:** `components/WhatsAppFAB.tsx`
- **Fungsi:** Floating action button WhatsApp
- **Mode:** Semua
- **Aturan:** Selalu rendered melalui `app/layout.tsx`. Tidak perlu import manual per halaman.

### `JsonLd`
- **File:** `components/JsonLd.tsx`
- **Fungsi:** Injeksi structured data (JSON-LD)
- **Mode:** Semua
- **Aturan:** Satu `<JsonLd />` per halaman. Schema berbeda per halaman sesuai tipe konten.

---

## Komponen Homepage Mode

### `DifferentiatorGrid`
- **File:** `components/DifferentiatorGrid.tsx`
- **Fungsi:** 9 trust pillars dalam 3-column grid
- **Mode:** Homepage Mode (primary), Hybrid Mode (opsional)
- **Props:** Tidak ada (data hardcoded dari SSOT NIB)
- **Aturan:** Tampil setelah Hero. Menampilkan NIB dari `SITE_CONFIG.organization.nib`.

### `RouteSelector`
- **File:** `components/RouteSelector.tsx`
- **Fungsi:** Tab/filter pemilihan paket berdasarkan origin (Surabaya/Bali)
- **Mode:** Homepage Mode, Travel Mode
- **Aturan:** Tidak duplikat dalam satu halaman.

### `FounderSpotlight`
- **File:** `components/FounderSpotlight.tsx`
- **Fungsi:** Foto founder, narasi inti, supporting facts, CTA
- **Mode:** Homepage Mode, Hybrid Mode (why-jvto)
- **Asset role:** `founder-identity`

### `TrustSummary`
- **File:** `components/TrustSummary.tsx`
- **Fungsi:** Trust signals ringkas — reviews + proof cues
- **Mode:** Homepage Mode, Hybrid Mode

### `TrustBar`
- **File:** `components/TrustBar.tsx`
- **Fungsi:** Horizontal strip trust cues cepat
- **Mode:** Homepage Mode
- **Aturan:** Dipakai di trust section homepage.

### `TrustpilotWidget`
- **File:** `components/TrustpilotWidget.tsx`
- **Fungsi:** Embed/widget Trustpilot
- **Mode:** Homepage Mode, Hybrid Mode

---

## Komponen Travel Mode

### `TourCard`
- **File:** `components/TourCard.tsx`
- **Fungsi:** Kartu paket tour — thumbnail, nama, durasi, harga, origin
- **Mode:** Travel Mode (primary)
- **Props:** `tour: Tour` (dari `lib/jvtoData.ts`)
- **Aturan:** Gunakan untuk semua tampilan paket. Jangan buat card tour baru.

### `RouteFactsBar`
- **File:** `components/RouteFactsBar.tsx`
- **Fungsi:** Sticky horizontal strip data rute di bawah Package Hero
- **Mode:** Travel Mode (package pages only)
- **Props:** `{ duration, origin, physicality, maxPax, priceFrom }`
- **Aturan:** Hanya di `/tours/[slug]`. Tidak di hub atau destinations.

---

## Komponen Trust Mode

### `ProofCard`
- **File:** `components/ProofCard.tsx`
- **Fungsi:** Card bukti/proof — title, description, metadata, image (optional), quote
- **Mode:** Trust Mode (primary)
- **Props:** `{ title, description, metadata, href, imageUrl?, quote?, icon, fullMetadata? }`
- **Aturan:** Dipakai di verify hub dan semua subpages. `imageUrl` opsional — jika `undefined`, card render tanpa foto (desain fallback harusnya sudah handle ini).

### `AuthorityShield`
- **File:** `components/AuthorityShield.tsx`
- **Fungsi:** Visual shield/badge authority
- **Mode:** Trust Mode

### `ProofCategoryGrid`
- **File:** `components/ProofCategoryGrid.tsx`
- **Fungsi:** 4-card grid menu utama verify hub (Legal, Police, Press, History)
- **Mode:** Trust Mode (verify hub only)
- **Props:** Tidak ada (data hardcoded, links ke subpages)
- **Aturan:** Hanya di `/verify-jvto`. Tidak diulang di subpages.

---

## Komponen Hybrid Mode

### `SupportShortcutRail`
- **File:** `components/SupportShortcutRail.tsx`
- **Fungsi:** Sticky pill-button rail navigasi cepat ke subpages travel-guide
- **Mode:** Hybrid Mode (travel-guide pages)
- **Props:** `{ activeSlug?: string }`
- **Aturan:** Import sebagai `'use client'`. Highlight pill aktif dengan `activeSlug`. Pakai di semua halaman dalam cluster `/travel-guide/*`.

### `LiveSignalBlock`
- **File:** `components/LiveSignalBlock.tsx`
- **Fungsi:** Status Bromo Level II + Ijen Level I dengan timestamp live
- **Mode:** Hybrid Mode (travel-guide hub + ijen-health-screening)
- **Props:** Tidak ada
- **Aturan:** `'use client'`. `checkedAt` digenerate di client. Jangan di SSR murni.

---

## Komponen Shared / Multi-mode

### `FAQSection`
- **File:** `components/FAQSection.tsx`
- **Fungsi:** Accordion FAQ
- **Mode:** Semua
- **Props:** `{ items: { question: string; answer: string }[] }`

### `AnswerBlock`
- **File:** `components/AnswerBlock.tsx`
- **Fungsi:** Block jawaban terstruktur (Q&A format selain accordion)
- **Mode:** Semua

### `MedicalTrustSection`
- **File:** `components/MedicalTrustSection.tsx`
- **Fungsi:** Bukti kesehatan dan klinik Ijen
- **Mode:** Homepage Mode, Hybrid Mode (travel-guide/ijen)
- **Asset role:** `medical-proof`

### `CrewGrid`
- **File:** `components/CrewGrid.tsx`
- **Fungsi:** Grid foto + data crew (14 anggota dari `CREW` di `lib/jvtoData.ts`)
- **Mode:** Hybrid Mode (why-jvto/our-team), bisa di Homepage (preview)
- **Aturan:** Data harus dari `CREW` di `lib/jvtoData.ts`. Jangan hardcode data crew.

### `ContactSection`
- **File:** `components/ContactSection.tsx`
- **Fungsi:** Form/metode kontak — WhatsApp, email, form inquiry
- **Mode:** Semua (penutup halaman)

### `InquiryForm`
- **File:** `components/InquiryForm.tsx`
- **Fungsi:** Form inquiry / booking
- **Mode:** Semua

---

## Data Sources yang Dipakai Komponen

| Data | Sumber | Dipakai oleh |
|---|---|---|
| Tours list | `TOURS` di `lib/jvtoData.ts` | `TourCard`, `RouteSelector`, `RouteFactsBar`, tour pages |
| Destinations list | `DESTINATIONS` di `lib/jvtoData.ts` | Destination cards, destination pages |
| Crew (14 anggota) | `CREW` di `lib/jvtoData.ts` | `CrewGrid` |
| Site config / NIB | `SITE_CONFIG` di `lib/siteConfig.ts` | `DifferentiatorGrid`, `Footer`, metadata |
| Verification data | `LEGAL_DATA`, `RECOGNITIONS`, `ARTIFACTS`, `TIMELINE` di `lib/verificationData.ts` | `ProofCard` di verify pages |
| Media assets | `MEDIA_REGISTRY` di `lib/ssot-media-registry.ts` | Semua komponen yang render gambar |

---

## Komponen yang Tidak Dipakai (Deprecated)

| File | Status | Pengganti |
|---|---|---|
| `lib/crewData.ts` | Deprecated — sudah ada komentar di file | `CREW` di `lib/jvtoData.ts` |

---

## Aturan Tambahan Komponen

1. **Jangan buat komponen baru** tanpa cek dulu apakah fungsinya sudah ada.
2. **Jangan inline komponen besar** langsung di page file — extract ke `components/`.
3. **Server vs Client:** Komponen yang pakai `useState`, `useEffect`, atau browser API wajib `'use client'`. Komponen yang hanya render data bisa jadi Server Component.
4. **`generateMetadata` dan `generateStaticParams`** hanya boleh di Server Component — selalu split `page.tsx` (server) + `*Client.tsx` (client) untuk dynamic routes yang butuh keduanya.
5. **Props typing:** Semua props harus typed — pakai interface dari `lib/jvtoData.ts` jika tersedia (ex: `Tour`, `Destination`, `CrewMember`).

# JVTO Design System

> Aturan visual tetap: warna, typography, spacing, card, button, CTA.  
> Ini adalah token sistem. Semua komponen harus mengacu ke sini.

---

## 1. Color Palette

Semua token warna didefinisikan di `app/globals.css` dalam `@theme` block dan tersedia sebagai Tailwind utilities (`bg-jvto-navy`, `text-jvto-orange`, dst).

### Brand Colors

| Token | Tailwind class | Hex | Fungsi |
|---|---|---|---|
| `--color-jvto-navy` | `jvto-navy` | `#0D1B2A` | Warna utama brand, authority, baseline surface |
| `--color-jvto-navy-mid` | `jvto-navy-mid` | `#1C2E40` | Surface sekunder, card dark |
| `--color-jvto-orange` | `jvto-orange` | `#E8650A` | CTA utama, aksen aksi, emphasis |
| `--color-jvto-orange-hover` | `jvto-orange-hover` | `#C4520A` | State hover untuk CTA orange |
| `--color-jvto-gold` | `jvto-gold` | `#F5A623` | Stars, highlight sekunder |
| `--color-jvto-lime` | `jvto-lime` | `#8CC63F` | Verification accent (Lime CTA, trust cue) |
| `--color-jvto-wa-green` | `jvto-wa-green` | `#25D366` | WhatsApp accent only |
| `--color-jvto-off` | `jvto-off` | `#F6F5F2` | Page background default |
| `--color-jvto-muted` | `jvto-muted` | `#6B7280` | Secondary text, labels |
| `--color-jvto-border` | `jvto-border` | `#E3E0DA` | Border card, divider |

### Forensic/Trust Mode Colors

Digunakan eksklusif di cluster Trust (verify-jvto, halaman dark proof).

| Token | Tailwind class | Hex | Fungsi |
|---|---|---|---|
| `--color-forensic-bg` | `forensic-bg` | `#0A1520` | Dark background Trust Mode |
| `--color-forensic-card` | `forensic-card` | `#0D2414` | Card surface dalam forensic mode |
| `--color-forensic-accent` | `forensic-accent` | `#8CC63F` | Accent text di dark surface |
| `--color-forensic-text` | `forensic-text` | `#C8D8C0` | Body text di dark surface |
| `--color-forensic-muted` | `forensic-muted` | `#5A8A60` | Muted text di dark surface |

### Aturan Penggunaan Warna

- **Navy** — selalu anchor utama. Tidak boleh diganti per halaman.
- **Orange** — hanya untuk CTA dan emphasis. Jangan didekorasi.
- **Lime** — hanya untuk verification cue. Bukan aksen dominan.
- **Forensic palette** — hanya di Trust Mode pages (verify-jvto, legal, police-safety, history-artifacts, press-recognition).
- Brand-olive / brand-cream — warisan dari versi sebelumnya. Hindari penggunaan baru; migrasi ke token `jvto-*` di atas.

---

## 2. Typography

### Font Stack

| Variable | Font | Tailwind class | Peran |
|---|---|---|---|
| `--font-sans` | Inter | `font-sans` | Body, UI, label |
| `--font-display` | Raleway | `font-display` | Semua heading (h1–h6) |
| `--font-mono` | JetBrains Mono | `font-mono` | Forensic mode, code, proof metadata |

Font diload via `next/font/google` di `app/layout.tsx`. Tidak perlu CDN atau import tambahan.

### Hierarchy

| Level | Element | Class contoh | Penggunaan |
|---|---|---|---|
| Display / Hero | h1 hero | `text-6xl md:text-8xl font-display font-bold` | Headline utama hero section |
| Section Heading | h2 | `text-4xl md:text-6xl font-display font-bold` | Judul tiap blok utama |
| Card Title | h3 | `text-xl font-display font-semibold` | Judul cards |
| Lead / Intro | p.lead | `text-xl text-jvto-muted leading-relaxed` | Pembuka section |
| Body | p | `text-base leading-relaxed` | Isi utama |
| Meta / Label | span | `micro-label` utility | Microcopy, tags, trust cues |

### Utility: `micro-label`

```css
.micro-label {
  @apply text-[10px] font-bold uppercase tracking-[0.2em] text-jvto-muted;
}
```

Digunakan untuk: badge text, section labels, kategori proof, CTA sub-text.

---

## 3. Spacing & Layout

### Container

```css
.container-width {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

Semua section gunakan `.container-width`. Tidak membuat padding sendiri per section.

### Section Padding

```css
.section-padding {
  @apply py-20 md:py-32;
}
```

Gunakan consistent di seluruh section. Sections di Trust Mode boleh lebih compact (`py-12`).

---

## 4. Card System

### `card-base` utility

```css
.card-base {
  @apply bg-white rounded-3xl border border-jvto-border 
         shadow-[var(--shadow-jvto)] 
         transition-all duration-500 
         hover:shadow-[var(--shadow-jvto-hover)];
}
```

Semua card standar pakai utiliti ini. Tidak membuat border-radius, shadow, atau border sendiri kecuali ada kebutuhan spesifik (forensic card, dark surface).

### Shadow Tokens

```css
--shadow-jvto:       0 20px 40px -15px rgba(13, 27, 42, 0.1);
--shadow-jvto-hover: 0 30px 60px -12px rgba(13, 27, 42, 0.15);
```

---

## 5. Button & CTA System

### Primary CTA (orange)

```tsx
<Link href="..." className="inline-flex items-center gap-3 bg-jvto-orange text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-jvto-orange-hover transition-all">
  Label Text <ArrowRight size={16} />
</Link>
```

### Secondary CTA (ghost/outline)

```tsx
<Link href="..." className="inline-flex items-center gap-3 border border-jvto-navy text-jvto-navy px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-jvto-navy hover:text-white transition-all">
  Label Text
</Link>
```

### Verify CTA (lime strip)

```tsx
<div className="bg-jvto-lime py-3 px-4 text-center">
  <Link href="/verify-jvto" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-jvto-navy hover:underline underline-offset-4">
    ✓ All documents verifiable — Verify JVTO Legal Identity <ArrowRight size={14} />
  </Link>
</div>
```

Di homepage: tepat sebelum `<Footer />`. Tidak diulang di halaman lain kecuali sesuai page brief.

---

## 6. Glass Utility

```css
.glass {
  @apply bg-white/10 backdrop-blur-md border border-white/20;
}
```

Digunakan di hero overlay buttons atau elements di atas foto.

---

## 7. Elevation & Depth

Gunakan background color switching antar section untuk menciptakan rhythm:

| Surface | Class | Mode |
|---|---|---|
| Default page background | `bg-jvto-off` | Semua mode |
| Card/inline surface | `bg-white` | Semua mode |
| Dark authority section | `bg-jvto-navy text-white` | Homepage, closing CTA |
| Trust Mode background | `bg-forensic-bg` | Trust Mode pages only |
| Lime accent strip | `bg-jvto-lime` | Verify CTA hanya |

---

## 8. Aturan Anti-Penyimpangan

- Tidak menambah warna baru di luar palette di atas tanpa update dokumen ini.
- Tidak mengubah `rounded-3xl` ke `rounded-full` atau nilai lain di card → pakai `card-base`.
- Tidak menambahkan `font-serif` (brand-olive era) di komponen baru. Semua heading pakai `font-display` (Raleway).
- Tidak hardcode `#E8650A` atau nilai hex lain — selalu pakai token (`text-jvto-orange`, `bg-jvto-navy`, dst).

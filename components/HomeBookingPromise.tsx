// components/HomeBookingPromise.tsx
// "What every JVTO tour includes" — verbatim from SSOT v4.0 tour_pages all-inclusive-note.
// Source: lib/ssot/jvto-ssot-v4.json → tour_pages[/tours].sections.all-inclusive-note.bullets
import Link from 'next/link';
import { Car, Compass, Home, Utensils, ShieldCheck, Mountain, Ship, ArrowRight, RotateCcw } from 'lucide-react';

const inclusions = [
  {
    icon: <Car size={20} />,
    label: 'Private AC transport',
    detail: 'AC vehicle (MPV 1–3 guests, Minibus 4–11), driver, fuel, tolls, parking',
  },
  {
    icon: <Compass size={20} />,
    label: 'Tour guides',
    detail: 'English-speaking. Driver-guide for 1–3 pax; separate local guide at each destination for 4+',
  },
  {
    icon: <Home size={20} />,
    label: 'Hotel accommodation',
    detail: 'Quality hotels, daily breakfast included',
  },
  {
    icon: <Utensils size={20} />,
    label: 'Meals & water',
    detail: 'Meals as stated in itinerary + daily mineral water supply',
  },
  {
    icon: <ShieldCheck size={20} />,
    label: 'All entrance fees & permits',
    detail: 'Including BBKSDA Ijen ticket, Bromo permits, Madakaripura, Tumpak Sewu',
  },
  {
    icon: <Mountain size={20} />,
    label: 'Bromo 4WD jeep + Ijen gear',
    detail: 'Private 4WD Jeep for Bromo sunrise; gas masks + trekking poles for Ijen',
  },
  {
    icon: <ShieldCheck size={20} />,
    label: 'Ijen health screening',
    detail: 'Doctor check evening before trek (passport only required) + QR-coded health pass',
  },
  {
    icon: <Ship size={20} />,
    label: 'Ferry tickets (Bali routes)',
    detail: 'Ketapang Harbour → Gilimanuk Harbour included on Bali-bound packages',
  },
];

const notIncluded = [
  'International / domestic air tickets',
  'Indonesian VISA (if applicable)',
  'Travel insurance (recommended)',
  'Meals not stated in itinerary',
  'Personal expenses (carry min IDR 500,000 / person)',
  'Tips for drivers and guides (at discretion)',
];

export default function HomeBookingPromise() {
  return (
    <section
      id="booking-promise"
      aria-labelledby="booking-promise-title"
      className="section-padding bg-white"
    >
      <div className="container-width">
        <div className="max-w-3xl mb-14">
          <p className="micro-label text-jvto-orange mb-4">What you actually get</p>
          <h2
            id="booking-promise-title"
            className="text-4xl md:text-6xl mb-6 text-jvto-navy leading-tight"
          >
            Every JVTO package is
            <span className="block text-jvto-orange">all-inclusive by default.</span>
          </h2>
          <p className="text-jvto-muted font-light text-lg">
            Eight things written into your e-voucher before you pay. No road-side negotiations,
            no surprise costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-12">
          {inclusions.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 rounded-2xl border border-jvto-border bg-jvto-off/40 hover:bg-white hover:shadow-lg hover:shadow-jvto-navy/5 transition-all"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-jvto-border flex items-center justify-center text-jvto-navy">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-jvto-navy mb-1">{item.label}</p>
                <p className="text-jvto-muted text-sm font-light leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="md:col-span-1 rounded-[32px] bg-jvto-navy text-white p-8 lg:p-10">
            <RotateCcw size={28} className="text-jvto-lime mb-4" />
            <p className="micro-label text-jvto-lime mb-3">Plus</p>
            <h3 className="text-2xl font-display font-bold mb-3 leading-tight">
              Lifetime Travel Credit
            </h3>
            <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
              Cancel 48 hours before Day 1 → 100% credit. Never expires. Transferable to another
              traveler.
            </p>
            <Link
              href="/policy/booking-payment-cancellation"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-jvto-lime hover:gap-4 transition-all"
            >
              Read policy <ArrowRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-2 rounded-[32px] border border-jvto-border bg-white p-8 lg:p-10">
            <p className="micro-label text-jvto-muted mb-4">What is not included in any tour</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {notIncluded.map((item, i) => (
                <li key={i} className="flex gap-2 text-jvto-muted text-sm font-light">
                  <span className="text-jvto-orange shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/policy/inclusions-exclusions"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-jvto-navy hover:text-jvto-orange transition-colors"
            >
              Full inclusions &amp; exclusions policy <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

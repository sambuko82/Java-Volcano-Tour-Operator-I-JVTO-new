// components/HomeUniqueAdvantages.tsx
// Three unique JVTO advantages no other East Java operator can offer.
// Replaces generic "9 reasons" with the actual orchestrated differentiators.
import Link from 'next/link';
import { ShieldCheck, Stethoscope, RotateCcw, ArrowRight } from 'lucide-react';

export default function HomeUniqueAdvantages() {
  const advantages = [
    {
      icon: <ShieldCheck size={28} />,
      eyebrow: 'Tourist Police-led',
      title: 'Founded by an active Tourist Police officer',
      body: 'Bripka Agung Sambuko is an active member of Ditpamobvit, the East Java Tourism Police directorate. JVTO operations inherit field discipline, escalation protocols, and coordination capacity that ordinary tour operators simply do not have.',
      proof: 'SPRIN orders + Detik.com 2021 press',
      href: '/verify-jvto/police-safety',
      cta: 'See police-safety proof',
      accent: 'bg-jvto-navy text-white',
      iconBg: 'bg-jvto-lime/20 text-jvto-lime',
    },
    {
      icon: <Stethoscope size={28} />,
      eyebrow: 'Real medical layer',
      title: 'Licensed physician + QR-coded health pass for Ijen',
      body: 'Pre-ascent vitals (SpO2, BP, HR, respiratory) are checked by Dr. Ahmad Irwandanu — a licensed physician verifiable on Indonesia\u2019s SatuSehat registry. Results issue a QR-coded clearance via health.mountijen.com. No QR, no crater access.',
      proof: 'SIP 503.446/193/DRU/4/430.9.13/2020 \u00b7 SatuSehat verified',
      href: '/travel-guide/ijen-health-screening',
      cta: 'How the screening works',
      accent: 'bg-white text-jvto-navy border border-jvto-border',
      iconBg: 'bg-jvto-navy/5 text-jvto-navy',
    },
    {
      icon: <RotateCcw size={28} />,
      eyebrow: 'Lifetime Travel Credit',
      title: 'Cancel 48 hours ahead → 100% credit, never expires, transferable',
      body: 'No other East Java operator offers this. If your plans change before the 48-hour cutoff, your full payment converts to a JVTO Travel Credit with no expiry date that you can transfer to another traveler. Real flexibility, written into policy.',
      proof: 'Policy clause \u00b7 written in your e-voucher',
      href: '/policy/booking-payment-cancellation',
      cta: 'Read the credit policy',
      accent: 'bg-jvto-orange text-white',
      iconBg: 'bg-white/20 text-white',
    },
  ];

  return (
    <section
      id="unique-advantages"
      aria-labelledby="unique-advantages-title"
      className="section-padding bg-jvto-off"
    >
      <div className="container-width">
        <div className="max-w-3xl mb-16">
          <p className="micro-label text-jvto-orange mb-4">Three things, only JVTO</p>
          <h2
            id="unique-advantages-title"
            className="text-4xl md:text-6xl mb-6 text-jvto-navy leading-tight"
          >
            What no other East Java operator
            <span className="block text-jvto-orange">can actually offer</span>
          </h2>
          <p className="text-jvto-muted font-light text-lg max-w-2xl">
            Most operators in Bromo &amp; Ijen sell similar routes. JVTO is built around
            three structural differences that you can verify before paying any deposit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, i) => (
            <article
              key={i}
              className={`${adv.accent} rounded-[40px] p-10 lg:p-12 flex flex-col shadow-2xl shadow-jvto-navy/5`}
            >
              <div className={`w-16 h-16 ${adv.iconBg} rounded-2xl flex items-center justify-center mb-8`}>
                {adv.icon}
              </div>
              <p className="micro-label opacity-70 mb-3">{adv.eyebrow}</p>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-5 leading-tight">
                {adv.title}
              </h3>
              <p className="font-light leading-relaxed mb-8 opacity-90 flex-1">{adv.body}</p>
              <p className="text-xs font-mono opacity-60 mb-6 border-t border-current/10 pt-4">
                {adv.proof}
              </p>
              <Link
                href={adv.href}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all"
              >
                {adv.cta} <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

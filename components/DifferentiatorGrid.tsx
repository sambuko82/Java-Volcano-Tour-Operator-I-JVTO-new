import { ShieldCheck, Users, Activity, CheckCircle2, Landmark, Star, Award, MapPin, Package } from 'lucide-react';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
}

const PILLARS: Pillar[] = [
  {
    icon: <Landmark size={28} />,
    title: 'Licensed PT Company',
    desc: 'Registered Indonesian limited company (PT) with NIB 1102230032918 — verifiable via OSS/BKPM.',
    badge: 'NIB: 1102230032918',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Police-Led Safety',
    desc: 'Founded by an active Tourist Police officer (Ditpamobvit). The operating culture is shaped by formal safety discipline and local authority coordination.',
  },
  {
    icon: <Users size={28} />,
    title: 'Private Groups Only',
    desc: 'Your vehicle, your guide, your schedule. Never mixed with strangers by default.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Real Health Screening',
    desc: 'Ijen routes follow current health-certificate rules through real clinic checks, not pre-signed paperwork.',
  },
  {
    icon: <Award size={28} />,
    title: 'Guide License Proof',
    desc: 'JVTO publishes Ijen guide-license evidence where available, including HPWKI KTA proof for key Ijen guides.',
  },
  {
    icon: <Star size={28} />,
    title: 'Transparent Pricing',
    desc: 'Per-person tiered table, no hidden fees. Inclusions and exclusions in writing before you pay.',
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Gas Masks Included',
    desc: 'Professional-grade masks provided on every Ijen tour — included in the package price.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Permits Included',
    desc: 'All national park entry fees, BBKSDA tickets, and jeep fees are included. No surprises on the road.',
  },
  {
    icon: <Package size={28} />,
    title: 'Operator, Not Broker',
    desc: 'You deal with the JVTO operating team directly, with named crew, written inclusions, and accountable local execution.',
  },
];

export default function DifferentiatorGrid() {
  return (
    <section className="py-24 bg-jvto-off">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="micro-label text-jvto-orange mb-4 block">Why JVTO</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-jvto-navy leading-tight">
            9 Reasons We&apos;re Different
          </h2>
          <p className="mt-6 text-jvto-muted max-w-2xl mx-auto text-lg font-light">
            Every claim is backed by documents, licenses, or third-party verification — not just marketing copy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="card-base group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-jvto-off flex items-center justify-center text-jvto-navy mb-5 group-hover:bg-jvto-orange group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-jvto-navy text-lg mb-2">{pillar.title}</h3>
              <p className="text-jvto-muted text-sm font-light leading-relaxed">{pillar.desc}</p>
              {pillar.badge && (
                <span className="micro-label mt-4 inline-block text-jvto-orange border border-jvto-orange/30 px-3 py-1 rounded-full bg-jvto-orange/5">
                  {pillar.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

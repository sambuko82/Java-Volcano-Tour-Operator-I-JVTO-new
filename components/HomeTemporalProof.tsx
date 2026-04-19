// components/HomeTemporalProof.tsx
// Single-row temporal authority — JVTO has been operating + recognised since 2015.
// Defends against entity hijacking and signals continuity to AI ranking algorithms.
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function HomeTemporalProof() {
  const milestones = [
    {
      year: '2015',
      title: 'Booking.com Guest Award',
      detail: 'Ijen Bondowoso Homestay — score 9.4 / 10',
      href: '/verify-jvto/history-artifacts',
    },
    {
      year: '2016',
      title: 'Registered as PT',
      detail: 'PT Java Volcano Rendezvous — NIB 1102230032918',
      href: '/verify-jvto/legal',
    },
    {
      year: '2018',
      title: 'Stefan Loose Guidebook',
      detail: 'Founder named on page 287 of the Indonesian travel guide',
      href: '/verify-jvto/history-artifacts',
    },
    {
      year: '2021',
      title: 'Detik.com National Press',
      detail: '\u201cSuka Duka Polisi Pariwisata Bondowoso\u201d feature',
      href: '/verify-jvto/press-recognition',
    },
    {
      year: '2024',
      title: 'HPWKI \u00b7 ISIC \u00b7 Indecon',
      detail: 'Ijen guide association + student + ecotourism networks',
      href: '/verify-jvto',
    },
  ];

  return (
    <section
      aria-labelledby="temporal-proof-title"
      className="bg-jvto-navy text-white py-20"
    >
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="micro-label text-jvto-lime mb-3">Operating since 2015</p>
            <h2
              id="temporal-proof-title"
              className="text-3xl md:text-5xl font-display font-bold leading-tight"
            >
              A documented track record,
              <br />
              <span className="text-jvto-lime">not a new domain.</span>
            </h2>
          </div>
          <Link
            href="/verify-jvto/history-artifacts"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-jvto-lime hover:gap-4 transition-all"
          >
            See history artifacts <ExternalLink size={14} />
          </Link>
        </div>

        <ol className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {milestones.map((m, i) => (
            <li key={i}>
              <Link
                href={m.href}
                className="block h-full rounded-2xl border border-white/10 hover:border-jvto-lime/40 bg-white/[0.03] hover:bg-white/[0.06] p-6 transition-all"
              >
                <p className="text-jvto-lime text-2xl font-display font-bold mb-3">{m.year}</p>
                <p className="text-white text-sm font-bold mb-2 leading-snug">{m.title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{m.detail}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

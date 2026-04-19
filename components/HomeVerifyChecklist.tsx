// components/HomeVerifyChecklist.tsx
// 60-second verify checklist. Five external/internal links the visitor can click
// to independently verify JVTO before committing.
import Link from 'next/link';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { EXTERNAL_VERIFICATION_URLS } from '@/lib/verificationData';

export default function HomeVerifyChecklist() {
  const checks = [
    {
      label: 'Business identity (NIB)',
      value: SITE_CONFIG.organization.nib,
      verifyAt: 'oss.go.id',
      href: EXTERNAL_VERIFICATION_URLS.oss,
      external: true,
    },
    {
      label: 'Founder \u2014 active Tourist Police',
      value: 'Bripka Agung Sambuko',
      verifyAt: 'detik.com (national press)',
      href: EXTERNAL_VERIFICATION_URLS.detikPolice,
      external: true,
    },
    {
      label: 'Ijen physician',
      value: 'Dr. Ahmad Irwandanu',
      verifyAt: 'satusehat.kemkes.go.id',
      href: EXTERNAL_VERIFICATION_URLS.doctorSip,
      external: true,
    },
    {
      label: 'Ijen guide association',
      value: 'HPWKI member \u00b7 AHU registered',
      verifyAt: 'ahu.go.id',
      href: EXTERNAL_VERIFICATION_URLS.ahuHpwki,
      external: true,
    },
    {
      label: 'Independent reviews',
      value: `Trustpilot ${SITE_CONFIG.reputation.aggregateRating}\u2605 \u00b7 ${SITE_CONFIG.reputation.totalReviews} reviews`,
      verifyAt: 'trustpilot.com',
      href: SITE_CONFIG.reputation.trustpilot,
      external: true,
    },
  ];

  return (
    <section
      id="verify-checklist"
      aria-labelledby="verify-checklist-title"
      className="section-padding bg-jvto-off"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-1">
            <div className="w-14 h-14 rounded-2xl bg-jvto-lime/20 text-jvto-navy flex items-center justify-center mb-6">
              <ShieldCheck size={26} />
            </div>
            <p className="micro-label text-jvto-orange mb-3">60-second verify</p>
            <h2
              id="verify-checklist-title"
              className="text-3xl md:text-5xl font-display font-bold text-jvto-navy mb-5 leading-tight"
            >
              Don&apos;t take our word.
              <span className="block text-jvto-orange">Check us yourself.</span>
            </h2>
            <p className="text-jvto-muted font-light text-base leading-relaxed">
              Five independent sources. Each one points to a government registry, a licensed
              professional, a national newspaper, or an external review platform.
            </p>
            <Link
              href="/verify-jvto"
              className="mt-8 inline-flex items-center gap-2 bg-jvto-navy text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-jvto-navy-mid transition-colors"
            >
              Open Proof Library
            </Link>
          </div>

          <ol className="lg:col-span-2 space-y-3">
            {checks.map((c, i) => (
              <li key={i}>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-jvto-border hover:border-jvto-navy/30 hover:shadow-lg hover:shadow-jvto-navy/5 transition-all group"
                >
                  <div className="flex items-center gap-5 flex-1 min-w-0">
                    <span className="w-8 h-8 rounded-full border border-jvto-border bg-jvto-off text-jvto-navy text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-jvto-muted font-bold mb-1">
                        {c.label}
                      </p>
                      <p className="text-jvto-navy font-bold text-base truncate">{c.value}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs font-mono text-jvto-muted group-hover:text-jvto-navy transition-colors shrink-0">
                    Verify at {c.verifyAt}
                    <ExternalLink size={12} />
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

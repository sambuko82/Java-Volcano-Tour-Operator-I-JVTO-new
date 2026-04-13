import Link from 'next/link';
import { Landmark, ShieldCheck, Award, Archive, ArrowRight } from 'lucide-react';

interface ProofCategory {
  slug: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  href: string;
}

const PROOF_CATEGORIES: ProofCategory[] = [
  {
    slug: 'legal',
    label: 'Legal Identity',
    icon: <Landmark size={32} />,
    desc: 'NIB registration, PT incorporation, OSS/BKPM portal verification.',
    href: '/verify-jvto/legal',
  },
  {
    slug: 'police-safety',
    label: 'Police & Safety',
    icon: <ShieldCheck size={32} />,
    desc: "Founder's Tourist Police credentials, SPRIN documents, escort authorization.",
    href: '/verify-jvto/police-safety',
  },
  {
    slug: 'press-recognition',
    label: 'Press & Recognition',
    icon: <Award size={32} />,
    desc: 'Stefan Loose guidebook, Detik.com, ISIC, Indecon, BBKSDA coverage.',
    href: '/verify-jvto/press-recognition',
  },
  {
    slug: 'history-artifacts',
    label: 'History & Continuity',
    icon: <Archive size={32} />,
    desc: 'Founding documents, Booking.com 2015 award, operational continuity since 2015.',
    href: '/verify-jvto/history-artifacts',
  },
];

export default function ProofCategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {PROOF_CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={cat.href}
          className="group block bg-white border border-jvto-border rounded-2xl p-8 hover:border-jvto-lime hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-jvto-off flex items-center justify-center text-jvto-navy mb-5 group-hover:bg-jvto-lime group-hover:text-white transition-colors duration-300">
            {cat.icon}
          </div>
          <h3 className="font-display font-bold text-jvto-navy text-base mb-2">{cat.label}</h3>
          <p className="text-jvto-muted text-sm font-light leading-relaxed mb-4">{cat.desc}</p>
          <span className="inline-flex items-center gap-2 text-jvto-lime text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
            View Proof <ArrowRight size={14} />
          </span>
        </Link>
      ))}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Activity, Package, CloudRain, Backpack, ShieldCheck, Info, Calendar, Navigation } from 'lucide-react';

interface ShortcutItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  slug: string;
}

const SHORTCUTS: ShortcutItem[] = [
  { slug: 'ijen-health-screening', label: 'Ijen Screening', href: '/travel-guide/ijen-health-screening', icon: <Activity size={14} /> },
  { slug: 'booking-information', label: 'How to Book', href: '/travel-guide/booking-information', icon: <Calendar size={14} /> },
  { slug: 'packing-list', label: 'Packing List', href: '/travel-guide/packing-list', icon: <Backpack size={14} /> },
  { slug: 'weather-and-closures', label: 'Weather & Closures', href: '/travel-guide/weather-and-closures', icon: <CloudRain size={14} /> },
  { slug: 'safety-on-tours', label: 'Safety on Tours', href: '/travel-guide/safety-on-tours', icon: <ShieldCheck size={14} /> },
  { slug: 'mount-bromo-logistics', label: 'Bromo Logistics', href: '/travel-guide/mount-bromo-logistics', icon: <Navigation size={14} /> },
  { slug: 'tumpak-sewu-logistics', label: 'Tumpak Sewu', href: '/travel-guide/tumpak-sewu-logistics', icon: <Package size={14} /> },
  { slug: 'faq', label: 'FAQ', href: '/travel-guide/faq', icon: <Info size={14} /> },
];

interface SupportShortcutRailProps {
  activeSlug?: string;
}

export default function SupportShortcutRail({ activeSlug }: SupportShortcutRailProps) {
  return (
    <div className="bg-white border-b border-jvto-border sticky top-[64px] z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {SHORTCUTS.map(item => {
            const isActive = item.slug === activeSlug;
            return (
              <Link
                key={item.slug}
                href={item.href}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all
                  ${isActive
                    ? 'bg-jvto-navy text-white'
                    : 'bg-jvto-off text-jvto-muted hover:bg-jvto-navy hover:text-white'
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Activity, Package, CloudRain, Backpack, ShieldCheck, Info, Calendar, Navigation } from 'lucide-react';
import { BOOKING_SUPPORT_GROUPS } from '@/lib/siteOrchestration';

interface ShortcutItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  slug: string;
}

const ICONS_BY_HREF: Record<string, React.ReactNode> = {
  '/travel-guide/ijen-health-screening': <Activity size={14} />,
  '/travel-guide/booking-information': <Calendar size={14} />,
  '/travel-guide/packing-and-fitness': <Backpack size={14} />,
  '/travel-guide/weather-and-closures': <CloudRain size={14} />,
  '/travel-guide/safety-on-tours': <ShieldCheck size={14} />,
  '/travel-guide/mount-bromo-logistics': <Navigation size={14} />,
  '/travel-guide/tumpak-sewu-logistics': <Package size={14} />,
  '/travel-guide/faq': <Info size={14} />,
  '/policy/booking-payment-cancellation': <ShieldCheck size={14} />,
};

const SHORTCUTS: ShortcutItem[] = BOOKING_SUPPORT_GROUPS.flatMap((group) => group.links)
  .filter((item, index, items) => items.findIndex((candidate) => candidate.href === item.href) === index)
  .map((item) => ({
    slug: item.href.split('/').filter(Boolean).pop() ?? item.href,
    label: item.label,
    href: item.href,
    icon: ICONS_BY_HREF[item.href] ?? <Info size={14} />,
  }));

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

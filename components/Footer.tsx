'use client';

import { Star, Award, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { NAVIGATION_CLUSTERS } from '@/lib/siteOrchestration';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="text-4xl font-serif tracking-tighter text-white">
              {SITE_CONFIG.organization.brandName}
            </Link>
            <p className="text-white/80 text-sm font-light leading-relaxed max-w-md">
              {SITE_CONFIG.organization.description}
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label="JVTO on TripAdvisor" title="Review us on TripAdvisor" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Star size={20} />
              </a>
              <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" rel="noopener noreferrer" aria-label="JVTO on Trustpilot" title="Review us on Trustpilot" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Award size={20} />
              </a>
              <a href={`mailto:${SITE_CONFIG.organization.email}`} aria-label="Email JVTO" className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Mail size={20} />
              </a>
            </div>
            <ul className="space-y-4 text-sm font-light text-white/85">
              <li className="flex items-center gap-4"><Phone size={18} className="text-brand-accent shrink-0" /> {SITE_CONFIG.organization.phone}</li>
              <li className="flex items-center gap-4"><Mail size={18} className="text-brand-accent shrink-0" /> {SITE_CONFIG.organization.email}</li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}, {SITE_CONFIG.organization.address.country}</span>
              </li>
            </ul>
          </div>
          {NAVIGATION_CLUSTERS.map((cluster) => (
            <div key={cluster.id}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-white/60">{cluster.label}</h4>
              <ul className="space-y-4 text-sm font-light text-white/80">
                {cluster.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-brand-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-16 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-xs font-light">© {new Date().getFullYear()} {SITE_CONFIG.organization.name}. All rights reserved.</p>
            <p className="mt-2 text-white/50 text-[10px] font-bold uppercase tracking-widest">NIB: {SITE_CONFIG.organization.nib}</p>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-white/60">
            <Link href="/policy/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policy/booking-payment-cancellation" className="hover:text-white transition-colors">Booking Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

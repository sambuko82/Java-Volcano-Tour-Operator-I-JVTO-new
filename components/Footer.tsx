'use client';

import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="text-4xl font-serif tracking-tighter">
              {SITE_CONFIG.organization.brandName}
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-md">
              {SITE_CONFIG.organization.description}
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Facebook size={20} />
              </a>
              <a href={`mailto:${SITE_CONFIG.organization.email}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-white/40">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/tours" className="hover:text-brand-accent transition-colors">All Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-brand-accent transition-colors">Destinations</Link></li>
              <li><Link href="/why-jvto" className="hover:text-brand-accent transition-colors">Why JVTO</Link></li>
              <li><Link href="/verify-jvto" className="hover:text-brand-accent transition-colors">Verify JVTO</Link></li>
              <li><Link href="/travel-guide" className="hover:text-brand-accent transition-colors">Travel Guide</Link></li>
              <li><Link href="/legal" className="hover:text-brand-accent transition-colors">Legal & Transparency</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-white/40">Contact</h4>
            <ul className="space-y-6 text-sm font-light text-white/70">
              <li className="flex items-center gap-4"><Phone size={18} className="text-brand-accent" /> {SITE_CONFIG.organization.phone}</li>
              <li className="flex items-center gap-4"><Mail size={18} className="text-brand-accent" /> {SITE_CONFIG.organization.email}</li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-accent shrink-0" /> 
                <span className="leading-relaxed">{SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}, {SITE_CONFIG.organization.address.country}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white/30 text-xs font-light">© {new Date().getFullYear()} {SITE_CONFIG.organization.name}. All rights reserved.</p>
            <p className="mt-2 text-white/20 text-[10px] font-bold uppercase tracking-widest">NIB: {SITE_CONFIG.organization.nib}</p>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-white/30">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

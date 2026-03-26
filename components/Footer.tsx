'use client';

import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-display font-bold mb-6 text-orange-500">{SITE_CONFIG.organization.brandName}</div>
            <p className="text-stone-400 max-w-md mb-8">
              {SITE_CONFIG.organization.description}
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href={`mailto:${SITE_CONFIG.organization.email}`} className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-400">
              <li><Link href="/tours" className="hover:text-white transition-colors">All Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/why-jvto" className="hover:text-white transition-colors">Why JVTO</Link></li>
              <li><Link href="/verify-jvto" className="hover:text-white transition-colors">Verify JVTO</Link></li>
              <li><Link href="/travel-guide" className="hover:text-white transition-colors">Travel Guide</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal & Transparency</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center gap-3"><Phone size={18} /> {SITE_CONFIG.organization.phone}</li>
              <li className="flex items-center gap-3"><Mail size={18} /> {SITE_CONFIG.organization.email}</li>
              <li className="flex items-center gap-3">
                <MapPin size={18} /> 
                <span>{SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}, {SITE_CONFIG.organization.address.country}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.organization.name}. All rights reserved.</p>
          <p className="mt-2 text-stone-600">NIB: {SITE_CONFIG.organization.nib}</p>
        </div>
      </div>
    </footer>
  );
}

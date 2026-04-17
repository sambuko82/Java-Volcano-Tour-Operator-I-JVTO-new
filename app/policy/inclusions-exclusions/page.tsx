// app/policy/inclusions-exclusions/page.tsx
'use client';

import { motion } from 'motion/react';
import { CheckCircle, XCircle, ExternalLink, Scale } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';

export default function InclusionsExclusionsPage() {
  const schema = {
    "@type": "WebPage",
    "name": "JVTO Inclusions & Exclusions Policy",
    "description": "Official policy defining what is included and excluded in JVTO private tour packages."
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={schema} />
      <Navbar />

      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-orange-300 uppercase tracking-[0.25em] text-xs font-bold mb-6">Official Policy</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">JVTO Inclusions & Exclusions Policy</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Only inclusions written on the official tour page and/or your Official E-Voucher / Invoice are contractually binding.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm mb-10">
            <div className="flex gap-4 items-start">
              <Scale className="text-orange-500 shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">Write-it-to-Bind-it Rule</h2>
                <p className="text-stone-600 leading-relaxed">
                  If an item is not written in your confirmed inclusions and Official E-Voucher / Invoice, it is not part of the contracted package, even if discussed informally.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="text-orange-500" size={32} />
                <h2 className="text-3xl font-display font-bold">Standard Inclusions</h2>
              </div>
              <ul className="space-y-4 text-stone-600 leading-relaxed">
                {BOOKING_POLICY.standardInclusions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle size={18} className="text-orange-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="text-stone-500" size={32} />
                <h2 className="text-3xl font-display font-bold">Standard Exclusions</h2>
              </div>
              <ul className="space-y-4 text-stone-600 leading-relaxed">
                {BOOKING_POLICY.standardExclusions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <XCircle size={18} className="text-stone-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
            <h2 className="text-3xl font-display font-bold mb-4">Rooming, Vehicles & Customization</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 leading-relaxed">
              <p>Vehicle and crew allocation depends on group size, route, luggage, and safety needs.</p>
              <p>Accommodation and rooming follow the confirmed itinerary and voucher. Additional private rooms or upgrades must be written as supplements.</p>
              <p>Custom meals, premium hotels, extra attractions, or route changes are included only when written in the confirmed quote or voucher.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm mb-6">Last Updated: {BOOKING_POLICY.lastUpdated}</p>
            <a href={SITE_CONFIG.whatsapp.waLink} target="_blank" className="text-brand-olive font-bold hover:text-orange-500 transition-colors inline-flex items-center justify-center gap-2">
              Ask About Your Inclusions <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

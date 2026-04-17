// app/policy/privacy/page.tsx
'use client';

import { motion } from 'motion/react';
import { ExternalLink, Lock, Shield, Users, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';

export default function PrivacyPolicyPage() {
  const schema = {
    "@type": "WebPage",
    "name": "JVTO Privacy & Data Protection Policy",
    "description": "Official JVTO privacy policy: data collected, purpose of use, operational sharing, payment data, and data requests."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">JVTO Privacy & Data Protection Policy</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              How {BOOKING_POLICY.operator} collects, uses, and shares data needed to operate private East Java tours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-12">
            <section id="collection">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">1. What Data We Collect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-600 leading-relaxed">
                <div className="p-6 bg-stone-50 rounded-2xl">
                  <FileText className="text-orange-500 mb-4" size={28} />
                  <h3 className="font-bold text-stone-900 mb-2">Lead Guest</h3>
                  <p>Full name, email, WhatsApp/mobile number, booking reference, and tour details.</p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl">
                  <Users className="text-orange-500 mb-4" size={28} />
                  <h3 className="font-bold text-stone-900 mb-2">Participants</h3>
                  <p>Guest list, passport/ID details where required, pickup/drop-off notes, rooming, and operational preferences.</p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl">
                  <Shield className="text-orange-500 mb-4" size={28} />
                  <h3 className="font-bold text-stone-900 mb-2">Safety</h3>
                  <p>Dietary needs and relevant health information provided by guests when needed for safety planning.</p>
                </div>
              </div>
            </section>

            <section id="usage">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">2. Why We Use Data</h2>
              <ul className="space-y-3 text-stone-600 leading-relaxed">
                {BOOKING_POLICY.privacyUse.map((item) => (
                  <li key={item} className="flex gap-3"><Lock size={18} className="text-orange-500 shrink-0 mt-1" />{item}</li>
                ))}
              </ul>
            </section>

            <section id="payment-data">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">3. Payment Data</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>Card payments are processed through an authorised payment gateway or secure payment link issued through official JVTO channels.</p>
                <p>JVTO does not store full card numbers, CVV codes, online banking passwords, or OTP codes.</p>
              </div>
            </section>

            <section id="rights">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">4. Data Requests</h2>
              <p className="text-stone-600 leading-relaxed">
                For access, correction, or deletion requests, contact {BOOKING_POLICY.officialChannels.email} or {BOOKING_POLICY.officialChannels.whatsapp}. JVTO may retain records where required for legal, accounting, operational, or dispute-resolution purposes.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm mb-6">Last Updated: {BOOKING_POLICY.lastUpdated}</p>
            <a href={SITE_CONFIG.whatsapp.waLink} target="_blank" className="text-brand-olive font-bold hover:text-orange-500 transition-colors inline-flex items-center justify-center gap-2">
              Contact Privacy Support <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

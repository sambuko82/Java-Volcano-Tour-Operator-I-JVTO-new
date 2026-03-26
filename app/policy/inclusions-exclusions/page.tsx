// app/policy/inclusions-exclusions/page.tsx
'use client';

import { motion } from 'motion/react';
import { FileText, CheckCircle, XCircle, ExternalLink, Info, Scale, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function InclusionsExclusionsPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Inclusions & Exclusions Policy",
    "description": "Official policy regarding what is included and excluded in all Java Volcano Tour Operator tour packages."
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Inclusions & Exclusions Policy</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Official contractual terms for all services provided by PT Java Volcano Rendezvous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm space-y-12">
            
            <section id="inclusions">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">1. Standard Inclusions</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>1.1. Private AC Transport: All transportation is private and includes fuel, tolls, and driver fees.</p>
                <p>1.2. English-Speaking Guide: Every tour is led by a professional, licensed local guide.</p>
                <p>1.3. Entrance Fees: All national park entrance fees and local permits are included.</p>
                <p>1.4. Safety Gear: Professional-grade gas masks for Ijen Crater are included.</p>
                <p>1.5. Accommodation: As specified in the itinerary (standard or premium options).</p>
                <p>1.6. Breakfast: Daily breakfast at the hotel or guesthouse.</p>
              </div>
            </section>

            <section id="exclusions">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">2. Standard Exclusions</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>2.1. Lunch & Dinner: Unless specifically mentioned in the itinerary.</p>
                <p>2.2. Personal Expenses: Souvenirs, laundry, telephone calls, etc.</p>
                <p>2.3. Tipping: While not mandatory, tips for guides and drivers are appreciated for excellent service.</p>
                <p>2.4. Travel Insurance: Guests are required to have their own comprehensive travel insurance.</p>
                <p>2.5. International/Domestic Flights: To and from the tour starting point.</p>
              </div>
            </section>

            <section id="customization">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">3. Customization</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>3.1. We can customize any tour to include specific meals, premium accommodation, or additional activities. These will be clearly listed in your personalized itinerary.</p>
              </div>
            </section>

          </div>

          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm mb-6">Last Updated: March 2026</p>
            <a 
              href={SITE_CONFIG.whatsapp.waLink} 
              target="_blank"
              className="text-brand-olive font-bold hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
            >
              Contact Legal Support <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

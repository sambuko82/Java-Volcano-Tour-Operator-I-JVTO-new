// app/policy/privacy/page.tsx
'use client';

import { motion } from 'motion/react';
import { FileText, Shield, CheckCircle, ExternalLink, Info, Scale, Building, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function PrivacyPolicyPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Official privacy policy regarding the collection and use of personal data by Java Volcano Tour Operator."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Official policy regarding the collection and use of personal data by PT Java Volcano Rendezvous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm space-y-12">
            
            <section id="collection">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">1. Data Collection</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>1.1. We collect personal information (name, email, phone, passport details) solely for the purpose of booking tours and obtaining necessary permits.</p>
                <p>1.2. We do not sell or share your personal data with third parties for marketing purposes.</p>
              </div>
            </section>

            <section id="usage">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">2. Data Usage</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>2.1. Your data is used to communicate with you regarding your tour, process payments, and ensure your safety during the expedition.</p>
                <p>2.2. We may use your email to send you important updates or feedback requests related to your tour.</p>
              </div>
            </section>

            <section id="security">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">3. Data Security</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>3.1. We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.</p>
                <p>3.2. All online payments are processed through secure, encrypted payment gateways.</p>
              </div>
            </section>

            <section id="rights">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">4. Your Rights</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>4.1. You have the right to access, correct, or delete your personal data at any time. Please contact us to make such a request.</p>
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
              Contact Privacy Support <Lock size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

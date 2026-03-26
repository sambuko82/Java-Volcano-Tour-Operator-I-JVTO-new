// app/legal/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ShieldCheck, FileText, Scale, Landmark, ClipboardCheck, ShieldAlert, ArrowRight, CheckCircle2, Info, Lock, MapPin, Activity, Users } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function LegalPage() {
  const legalSchema = {
    "@type": "WebPage",
    "name": "Legal & Transparency",
    "description": "Legal identity, terms of service, and safety policies for Java Volcano Tour Operator (JVTO)."
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={legalSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">JVTO Policy Pack</h1>
            <p className="text-xl text-stone-300">Operational certainty is built on a foundation of legal compliance and transparent policies.</p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Identity */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Corporate Identity</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">PT Java Volcano Rendezvous</h3>
                    <p className="text-stone-600 leading-relaxed">JVTO is the operational brand of PT Java Volcano Rendezvous, a fully licensed Indonesian travel corporation. We are not a broker or an individual freelancer.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <FileText size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">NIB: {SITE_CONFIG.organization.nib}</h3>
                    <p className="text-stone-600 leading-relaxed">Our Business Identification Number (NIB) is the primary legal identifier for any business in Indonesia. You can verify this through the official OSS portal.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Official Address</h3>
                    <p className="text-stone-600 leading-relaxed">{SITE_CONFIG.organization.address.street}, {SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}, {SITE_CONFIG.organization.address.postalCode}, {SITE_CONFIG.organization.address.country}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 p-10 rounded-3xl border border-stone-100">
              <h3 className="text-2xl font-display font-bold mb-6">Legal Verification</h3>
              <p className="text-stone-600 mb-8 text-sm">We encourage all guests to verify our legal standing. In an industry full of unlicensed operators, transparency is your best protection.</p>
              <Link href="/verify-jvto" className="bg-brand-olive text-white px-8 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all inline-flex items-center gap-2">
                Verify Our License <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Terms of Service</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Clear rules for a smooth operational experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Scale className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Booking & Payment</h3>
              <p className="text-stone-600 text-sm">We require a deposit to secure your private logistics. Full payment is typically due before the tour begins. We accept major credit cards and bank transfers.</p>
            </div>
            <div>
              <ShieldAlert className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Cancellation & Refunds</h3>
              <p className="text-stone-600 text-sm">Cancellations made more than 30 days in advance receive a full refund minus processing fees. Within 30 days, specific refund tiers apply based on our operational costs.</p>
            </div>
            <div>
              <ShieldCheck className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Operational Decisions</h3>
              <p className="text-stone-600 text-sm">We reserve the right to cancel or modify tours based on volcano status, weather, or guest health. Our safety decisions are final and non-negotiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Liability */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Safety & Liability</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Police-Led Safety Standards</h3>
                    <p className="text-stone-600 leading-relaxed">Our safety protocols are designed and overseen by an active Tourist Police officer. We follow all national park regulations and safety mandates.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <ClipboardCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Insurance Coverage</h3>
                    <p className="text-stone-600 leading-relaxed">While we provide basic operational insurance, we strongly recommend all guests carry comprehensive international travel insurance that covers high-altitude trekking.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Guest Health Responsibilities</h3>
                    <p className="text-stone-600 leading-relaxed">Guests are responsible for disclosing any health conditions. Mandatory Ijen health screenings must be completed at our certified partner clinics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-stone-900 text-white p-12 rounded-[40px] shadow-2xl">
              <h3 className="text-3xl font-display font-bold mb-6">Liability Waiver</h3>
              <p className="text-stone-400 mb-8 text-sm">All guests are required to sign a standard liability waiver before the tour begins. This is a requirement of the national park and our operational insurance.</p>
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Info className="text-orange-500 shrink-0" size={24} />
                <p className="text-xs text-stone-300">We prioritize safety over everything. Our waiver is a legal formality, but our safety protocols are our real protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Privacy Policy</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">How we handle your data with respect and security.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Lock className="text-brand-olive mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Data Collection & Use</h3>
              <p className="text-stone-600 text-sm">We only collect data necessary for your booking and safety (e.g., name, passport info for permits, health info for Ijen). We never sell your data.</p>
            </div>
            <div>
              <Users className="text-brand-olive mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Third-Party Sharing</h3>
              <p className="text-stone-600 text-sm">We only share your data with necessary third parties: national park authorities for permits and medical clinics for health screenings.</p>
            </div>
            <div>
              <ShieldCheck className="text-brand-olive mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Guest Rights</h3>
              <p className="text-stone-600 text-sm">You have the right to access, correct, or request the deletion of your personal data at any time. Contact our team for support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Certainty Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Operational Certainty Checklist</h2>
            <p className="text-stone-600">Three steps to ensure your tour is built on authority, not guesswork.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Our License</h3>
                <p className="text-stone-600">Check our NIB and legal registration. Don&apos;t book with unlicensed brokers.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Our Terms</h3>
                <p className="text-stone-600">Read our cancellation and refund policies. Know your rights and our operational boundaries.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Our Safety</h3>
                <p className="text-stone-600">Understand our police-led safety standards and medical screening protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

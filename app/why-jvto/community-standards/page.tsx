// app/why-jvto/community-standards/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ShieldCheck, Heart, Users, CheckCircle2, ArrowRight, Leaf, Scale, Globe, HandHelping } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function CommunityStandardsPage() {
  const standardsSchema = {
    "@type": "WebPage",
    "name": "Community Standards",
    "description": "Our commitment to East Java: Local impact, fair wages, and sustainable tourism."
  };

  return (
    <main className="min-h-screen bg-white text-jvto-navy">
      <JsonLd data={standardsSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Community Standards: Our Commitment to East Java</h1>
            <p className="text-xl text-stone-300">Operational certainty is built on the well-being of our local team and community.</p>
          </motion.div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-jvto-navy">Economic Impact</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Scale size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-jvto-navy">Fair Wages & Local Hiring</h3>
                    <p className="text-stone-600 leading-relaxed">We exclusively hire from the local East Java community and provide above-market wages. This ensures that the benefits of tourism stay within the region and support local families.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <HandHelping size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-jvto-navy">Supporting Local Suppliers</h3>
                    <p className="text-stone-600 leading-relaxed">From homestays to local restaurants and transport providers, we prioritize local suppliers in our supply chain, creating a multiplier effect for the regional economy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Economic Impact"
                fill
                className="object-cover"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Environmental Stewardship"
                fill
                className="object-cover"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-jvto-navy">Environmental Stewardship</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <Leaf size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-jvto-navy">Volcano Conservation Efforts</h3>
                    <p className="text-stone-600 leading-relaxed">We actively participate in and support local conservation efforts at Bromo and Ijen, ensuring that these natural wonders are preserved for future generations.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-jvto-navy">Waste Management Protocols</h3>
                    <p className="text-stone-600 leading-relaxed">Our team follows strict &apos;leave no trace&apos; protocols. We educate our guests on waste management and actively participate in trail clean-up initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Logistics Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-jvto-navy leading-tight">Safety & Logistics <br /> <span className="text-orange-500 italic">Standards</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-jvto-off rounded-2xl flex items-center justify-center text-jvto-navy shrink-0 border border-jvto-border">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-jvto-navy">C1 — Safety-led operations</h3>
                    <p className="text-stone-600 leading-relaxed">Safety is treated as an operating system. Our founder&apos;s Tourist Police context informs our habits: disciplined route planning, respecting official closures, and maintaining a clear &apos;Plan B&apos; logic for active volcanic terrain.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-jvto-off rounded-2xl flex items-center justify-center text-jvto-navy shrink-0 border border-jvto-border">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-jvto-navy">C2 — Private-Only Execution</h3>
                    <p className="text-stone-600 leading-relaxed">We refuse to participate in &apos;mixed group&apos; tourism. Every JVTO trip is private. This ensures total execution control: your pace, your safety rhythm, and your dedicated vehicle/crew without stranger-driven compromises.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 text-jvto-navy">
                <Link href="/verify-jvto/police-safety" className="text-jvto-navy font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-jvto-border pb-2 hover:border-orange-500 w-fit">
                  View Safety Evidence <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="bg-stone-50 p-12 md:p-16 rounded-[64px] border border-stone-200">
               <h4 className="text-xl font-display font-bold mb-8 text-jvto-navy">Operating Boundaries</h4>
               <ul className="space-y-6">
                 {[
                   'Plan B logic standard on all active routes',
                   'Clear duty-over-profit escalation habit',
                   'No bypass of official health screenings',
                   'Private-only group standard (No strangers)',
                   'Professional-grade equipment inventory'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle2 size={24} className="text-jvto-lime mt-1 shrink-0" />
                     <span className="text-stone-600 text-lg font-light tracking-wide">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Social Responsibility</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-orange-400">Community Support Initiatives</h3>
                    <p className="text-stone-400 leading-relaxed">We invest a portion of our proceeds back into community projects, supporting education and infrastructure in the villages surrounding our tour routes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-orange-400">Cultural Preservation</h3>
                    <p className="text-stone-400 leading-relaxed">We respect and promote local East Javanese culture, ensuring that our tours provide authentic experiences that honor local traditions and customs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Social Responsibility"
                fill
                className="object-cover"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <Link href="/tours" className="grow-0 bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/why-jvto/our-story" className="grow-0 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

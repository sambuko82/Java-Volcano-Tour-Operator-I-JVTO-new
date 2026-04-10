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
    <main className="min-h-screen bg-page">
      <JsonLd data={standardsSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-accent text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Community Standards: Our Commitment to East Java</h1>
            <p className="text-xl text-white/70">Operational certainty is built on the well-being of our local team and community.</p>
          </motion.div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-text-primary">Economic Impact</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-jvto-orange/10 rounded-2xl flex items-center justify-center text-jvto-orange shrink-0">
                    <Scale size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Fair Wages & Local Hiring</h3>
                    <p className="text-text-secondary leading-relaxed">We exclusively hire from the local East Java community and provide above-market wages. This ensures that the benefits of tourism stay within the region and support local families.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-jvto-orange/10 rounded-2xl flex items-center justify-center text-jvto-orange shrink-0">
                    <HandHelping size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Supporting Local Suppliers</h3>
                    <p className="text-text-secondary leading-relaxed">From homestays to local restaurants and transport providers, we prioritize local suppliers in our supply chain, creating a multiplier effect for the regional economy.</p>
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
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Environmental Stewardship"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-text-primary">Environmental Stewardship</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-green-100/10 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <Leaf size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Volcano Conservation Efforts</h3>
                    <p className="text-text-secondary leading-relaxed">We actively participate in and support local conservation efforts at Bromo and Ijen, ensuring that these natural wonders are preserved for future generations.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-green-100/10 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Waste Management Protocols</h3>
                    <p className="text-text-secondary leading-relaxed">Our team follows strict &apos;leave no trace&apos; protocols. We educate our guests on waste management and actively participate in trail clean-up initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Standards Leadership */}
      <section className="py-24 bg-page">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Tourism Standards Leadership</h2>
            <p className="text-text-secondary">We are not just participants; we are advocates for a better industry.</p>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-jvto-orange/10 rounded-full flex items-center justify-center text-jvto-orange shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Advocating for Safety & Accountability</h3>
                <p className="text-text-secondary leading-relaxed">Through our police-led model, we advocate for higher safety and legal standards across the East Java tourism sector, pushing for better regulation and guest protection.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-jvto-orange/10 rounded-full flex items-center justify-center text-jvto-orange shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Collaborating with Local Authorities</h3>
                <p className="text-text-secondary leading-relaxed">We maintain direct lines of communication with local government and park authorities, contributing to the development of sustainable tourism policies in East Java.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Social Responsibility</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-jvto-orange">Community Support Initiatives</h3>
                    <p className="text-stone-400 leading-relaxed">We invest a portion of our proceeds back into community projects, supporting education and infrastructure in the villages surrounding our tour routes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-jvto-orange">Cultural Preservation</h3>
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
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-jvto-orange text-white px-10 py-4 rounded-full font-bold hover:bg-jvto-orange/90 transition-all shadow-lg shadow-jvto-orange/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/why-jvto/our-story" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

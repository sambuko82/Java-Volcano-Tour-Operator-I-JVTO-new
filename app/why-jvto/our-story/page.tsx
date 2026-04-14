// app/why-jvto/our-story/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Users, Star, MapPin, Calendar, Heart, Shield, CheckCircle2, ArrowRight, Clock, FileText, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function OurStoryPage() {
  const storySchema = {
    "@type": "WebPage",
    "name": "Our Story: Roots & Continuity Since 2015",
    "description": "The history and origins of Java Volcano Tour Operator, from local host to professional police-led operator.",
    "mainEntity": {
      "@type": "Organization",
      "name": SITE_CONFIG.organization.name,
      "description": SITE_CONFIG.organization.description,
      "founder": {
        "@type": "Person",
        "name": SITE_CONFIG.organization.founder.name,
        "jobTitle": SITE_CONFIG.organization.founder.title
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={storySchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our Story: From Local Host to Police-Led Operator</h1>
            <p className="text-xl text-stone-300">Roots and continuity since 2015. JVTO is built on documented history and local East Java execution.</p>
          </motion.div>
        </div>
      </section>

      {/* The JVTO Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The JVTO Timeline</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">A decade of evolution from local hospitality to safety leadership.</p>
          </div>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4 text-brand-olive">2015: The Local Roots</h3>
                <p className="text-stone-600 leading-relaxed mb-6">Our journey began as Ijen Bondowoso Home Stay. We focused on pure local hospitality, earning a 9.4/10 Guest Review Award from Booking.com in our first year. We were hosts first, learning the needs of international travelers on the ground.</p>
                <div className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest">
                  <Award size={16} /> Award-Winning Hospitality
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="2015 Roots"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="2018 Pivot"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-display font-bold mb-4 text-brand-olive">2018: Editorial Recognition and Route Discipline</h3>
                <p className="text-stone-600 leading-relaxed mb-6">The Stefan Loose guidebook context ties Agung and Ijen Bondowoso Homestay to tour arranging in the Ijen area. As demand grew, the operation became more structured around private logistics, clearer expectations, and safer route planning.</p>
                <div className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest">
                  <Shield size={16} /> Safety First Mindset
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4 text-brand-olive">2023: The Proof-First Standard</h3>
                <p className="text-stone-600 leading-relaxed mb-6">With founder Agung Sambuko serving as an active Tourist Police officer, JVTO formalized a proof-first safety standard: legal identity, police-safety context, Ijen readiness, and operating claims that can be checked before guests commit.</p>
                <div className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} /> Official Authority Oversight
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
                  alt="2023 Police Standard"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Safety Standard Changed */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Why the Safety Standard Changed</h2>
            <p className="text-stone-600">The evolution of JVTO was driven by a need for accountability.</p>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-olive">The Turning Point</h3>
              <p className="text-stone-600 leading-relaxed">We witnessed too many &apos;near-misses&apos; in the industry—operators ignoring gas warnings or skipping health checks to save time. We realized that local hospitality wasn&apos;t enough; we needed to lead with authority to protect our guests.</p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-olive">The Decision to Lead with Authority</h3>
              <p className="text-stone-600 leading-relaxed">By putting proof and safety boundaries before sales pressure, JVTO reduces the conflict between commercial urgency and guest safety. When official conditions change, the operating decision must follow the route reality, not a marketing promise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artifacts of Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Artifacts of Proof</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Our history is documented and verifiable.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center">
              <FileText className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Original Registration</h3>
              <p className="text-stone-600 text-sm mb-6">View our original 2015 business permits and early hospitality awards.</p>
              <Link href="/verify-jvto/legal" className="text-brand-olive font-bold underline">View Documents</Link>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center">
              <Star className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Early Press Recognition</h3>
              <p className="text-stone-600 text-sm mb-6">See our 2016 feature in the Stefan Loose travel guide for expert tours.</p>
              <Link href="/verify-jvto/press-recognition" className="text-brand-olive font-bold underline">View Press</Link>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center">
              <Shield className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Police Training Records</h3>
              <p className="text-stone-600 text-sm mb-6">Documentation of our team&apos;s safety and emergency response training.</p>
              <Link href="/verify-jvto/police-safety" className="text-brand-olive font-bold underline">View Training</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to East Java */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Our Commitment to East Java</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-orange-400">Local Team Growth</h3>
                  <p className="text-stone-400 leading-relaxed">From a 2-person family operation to a 14-person professional team, we have invested in local talent, providing stable careers and professional training in East Java.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-orange-400">Community Impact</h3>
                  <p className="text-stone-400 leading-relaxed">We prioritize local suppliers and contribute to regional tourism standards, ensuring that our success directly benefits the communities we operate in.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Community Impact"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
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
            <Link href="/why-jvto" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Why Travel with JVTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

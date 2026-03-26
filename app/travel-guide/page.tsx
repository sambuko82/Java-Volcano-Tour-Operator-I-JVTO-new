// app/travel-guide/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { ShieldCheck, CheckCircle2, Info, ArrowRight, Thermometer, Cloud, Clock, Luggage, Activity, Heart, Scale, Search, MapPin, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

const guideFaqs = [
  {
    question: "What is 'Operational Certainty'?",
    answer: "It is our commitment to safety and transparency. We follow official PVMBG (Volcanology) alerts without exception. If a site is closed by authorities, we do not enter. We provide alternative routes or destinations of equal value."
  },
  {
    question: "Is the Ijen health check really mandatory?",
    answer: "Yes. Official regulations require every visitor to Ijen Crater to have a valid health certificate. We ensure this is done correctly at a certified clinic to avoid fake letters and ensure you are medically cleared for the altitude and sulfur exposure."
  },
  {
    question: "What happens if a volcano is closed?",
    answer: "Volcanoes are active natural sites. If a site is closed by authorities due to gas levels or seismic activity, we follow a safety-first rerouting protocol. We prioritize your life over the itinerary."
  },
  {
    question: "Why are your tours private-by-default?",
    answer: "Private tours allow for better safety management, flexible pacing, and a more personalized experience. We do not mix strangers in our vehicles or groups to maintain operational control."
  }
];

export default function TravelGuide() {
  const guideSchema = {
    "@type": ["WebPage", "FAQPage"],
    "name": "East Java Travel Guide – The Rulebook Before You Book",
    "description": "Comprehensive travel guide for Mount Bromo, Ijen Crater, and Tumpak Sewu. Safety, logistics, and operational boundaries."
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={guideSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Travel Guide: The Rulebook Before You Book</h1>
            <p className="text-xl text-stone-300">Operational certainty starts with being informed. Read our comprehensive guide to understand the boundaries, logistics, and safety protocols of East Java expeditions.</p>
          </motion.div>
        </div>
      </section>

      {/* The Rulebook Before You Book */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The Rulebook Before You Book</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Our operational boundaries ensure your safety and clarity. We don&apos;t guess; we follow the rules.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <ShieldCheck className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Safety Boundaries</h3>
              <p className="text-stone-600 text-sm mb-6">We follow official PVMBG alerts without exception. If a site is closed, we do not enter. Safety is our non-negotiable boundary.</p>
              <Link href="/verify-jvto" className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-1">Verify Our Authority <ArrowRight size={12} /></Link>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Activity className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Health Requirements</h3>
              <p className="text-stone-600 text-sm mb-6">Mandatory certified clinic checks for Ijen. You must be medically cleared for altitude and sulfur exposure. No fake letters.</p>
              <Link href="/verify-jvto" className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-1">Read Health Proof <ArrowRight size={12} /></Link>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Scale className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Operational Control</h3>
              <p className="text-stone-600 text-sm mb-6">We are the operator, not a broker. We control the vehicles, the guides, and the safety decisions from start to finish.</p>
              <Link href="/why-jvto" className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-1">Why This Matters <ArrowRight size={12} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Guides (Logistics Focus) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Destination Guides</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Practical logistics for East Java&apos;s primary destinations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/travel-guide/ijen-health-screening" className="group bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
              <MapPin className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Ijen Crater Guide</h3>
              <p className="text-stone-600 text-sm">Logistics for the blue fire, health screening requirements, and gas mask protocols.</p>
            </Link>
            <Link href="/travel-guide/mount-bromo-logistics" className="group bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
              <MapPin className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Mount Bromo Guide</h3>
              <p className="text-stone-600 text-sm">Jeep logistics, sunrise timing, and altitude preparation for the Bromo caldera.</p>
            </Link>
            <Link href="/travel-guide/tumpak-sewu-logistics" className="group bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:shadow-xl transition-all">
              <MapPin className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Tumpak Sewu Guide</h3>
              <p className="text-stone-600 text-sm">Trekking logistics, footwear requirements, and safety for the waterfall descent.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Practical Preparation */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Practical Preparation</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Be prepared for the diverse climates and terrain of East Java.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/travel-guide/packing-list" className="bg-white p-8 rounded-3xl border border-stone-100 text-center hover:shadow-xl transition-all">
              <Luggage className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">What to Pack</h3>
              <p className="text-stone-600 text-sm">Layered clothing, hiking shoes, headlamps, and personal medication. See our full list.</p>
            </Link>
            <div className="bg-white p-8 rounded-3xl border border-stone-100 text-center">
              <Thermometer className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Altitude & Temperature</h3>
              <p className="text-stone-600 text-sm">Bromo can drop to 0°C. Ijen is at 2,386m. Prepare for cold mornings and thin air.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-100 text-center">
              <Globe className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Money & Connectivity</h3>
              <p className="text-stone-600 text-sm">Cash is king in remote areas. SIM cards and Wi-Fi availability vary by location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Certainty Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Operational Certainty Checklist</h2>
            <p className="text-stone-600">Three steps to ensure your trip is built on authority, not guesswork.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Your Operator</h3>
                <p className="text-stone-600">Check for a real NIB license and police-led safety oversight. Don&apos;t book with unlicensed brokers.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Your Health</h3>
                <p className="text-stone-600">Ensure you have a real medical check at a certified clinic for Ijen. Your safety depends on it.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Your Route</h3>
                <p className="text-stone-600">Confirm your private logistics and safety decision boundaries. Know who makes the call if things change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={guideFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Verify JVTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

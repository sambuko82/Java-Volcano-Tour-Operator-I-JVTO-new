// app/why-jvto/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { ShieldCheck, CheckCircle2, Users, ArrowRight, Star, Heart, Search, Lock, Activity, Globe, Award, History, Archive } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { RECOGNITIONS, ARTIFACTS } from '@/lib/verificationData';
import ProofCard from '@/components/ProofCard';
import CrewGrid from '@/components/CrewGrid';

const whyFaqs = [
  {
    question: "Is JVTO safe?",
    answer: "No travel in volcanic terrain is risk-free, but JVTO is built to reduce avoidable risk through structured planning, private execution, and explicit safety guidance."
  },
  {
    question: "What makes JVTO different from open trips?",
    answer: "JVTO is private by default, more controlled operationally, and built around a clearer trust and planning system than generic mixed-group operators."
  },
  {
    question: "Why do you emphasize verification so much?",
    answer: "Because trust should be checked, not assumed, especially in a category involving physical risk, deposits, and remote logistics."
  }
];

export default function WhyJVTO() {
  const whySchema = {
    "@type": "WebPage",
    "name": "Why Travel with Java Volcano Tour Operator (JVTO)",
    "description": "Discover why travelers choose JVTO for private East Java volcano journeys: police-led safety culture, legal legitimacy, real Ijen health screening, and proof you can verify before booking."
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={whySchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Why Travel with Java Volcano Tour Operator (JVTO)</h1>
            <p className="text-xl text-stone-300">In East Java, the difference between a smooth journey and a stressful one is rarely the mountain itself. It is the operator behind the route. JVTO was built for travelers who want more than beautiful destinations. They want clarity, accountability, and a team that treats safety as part of the product, not a marketing afterthought.</p>
          </motion.div>
        </div>
      </section>

      {/* The JVTO Trust Stack */}
      <section id="trust-stack" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The JVTO Trust Stack</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Our trust stack is simple to understand and easy to verify. It starts with legal identity, extends through operational safety, and is strengthened by independent reviews, local execution, and a planning system that tells guests the truth before asking for payment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <ShieldCheck className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Police-Led Safety</h3>
              <p className="text-stone-600 text-sm">JVTO is shaped by a safety culture that comes from real operational discipline, not generic tourism language.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Lock className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Registered and Verifiable</h3>
              <p className="text-stone-600 text-sm">We are not a floating social media account or a reseller with no traceability. JVTO is tied to a legal business identity and physical base in Bondowoso.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Activity className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Real Health Screening</h3>
              <p className="text-stone-600 text-sm">For Ijen routes, we use a real screening logic designed to reduce avoidable risk before the climb begins.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Users className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Private by Default</h3>
              <p className="text-stone-600 text-sm">Every JVTO journey is private. No mixed groups. No strangers in your vehicle. No loss of pace or control because another booking was merged into yours.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Globe className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Local Team, Daily Execution</h3>
              <p className="text-stone-600 text-sm">The experience is delivered by real local people whose names, roles, and strengths matter to the quality of the trip.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Star className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Independent Proof</h3>
              <p className="text-stone-600 text-sm">We do not ask you to trust what we say without showing where to verify it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification & Proof Summary */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 text-orange-500 mb-4">
                <ShieldCheck size={24} />
                <span className="font-bold tracking-widest uppercase text-sm">Audit Our Credentials</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold">Verification & Proof</h2>
            </div>
            <Link href="/verify-jvto" className="text-brand-olive font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Enter the Proof Library <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200">
              <History className="text-orange-500 mb-6" size={32} />
              <h3 className="text-xl font-display font-bold mb-4">8+ Years Continuity</h3>
              <p className="text-stone-600 text-sm mb-6">Documented operational history since 2016. Not a new startup or freelance broker.</p>
              <Link href="/verify-jvto#history" className="text-brand-olive font-bold text-xs flex items-center gap-1">Check History <ArrowRight size={14} /></Link>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200">
              <Award className="text-orange-500 mb-6" size={32} />
              <h3 className="text-xl font-display font-bold mb-4">Press Recognition</h3>
              <p className="text-stone-600 text-sm mb-6">Featured in ISIC, Indecon, and Stefan Loose Travel Guide as a recommended specialist.</p>
              <Link href="/verify-jvto#press" className="text-brand-olive font-bold text-xs flex items-center gap-1">Check Press <ArrowRight size={14} /></Link>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200">
              <Lock className="text-orange-500 mb-6" size={32} />
              <h3 className="text-xl font-display font-bold mb-4">Legal Accountability</h3>
              <p className="text-stone-600 text-sm mb-6">Fully registered PT with verifiable NIB license and physical base in Bondowoso.</p>
              <Link href="/verify-jvto#legal" className="text-brand-olive font-bold text-xs flex items-center gap-1">Verify Legal <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Duty First, Business Second */}
      <section id="duty-first" className="py-24 bg-brand-olive text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Duty First, Business Second</h2>
              <p className="text-xl text-stone-300 leading-relaxed mb-8">
                That phrase defines the spirit of JVTO. In a category where operators are often tempted to oversell access, soften warnings, or reduce safety to maintain the booking, our approach is different. If a route requires a harder conversation, we would rather give the guest a clear answer than a convenient illusion.
              </p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
                alt="Agung Sambuko"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Team, Daily Execution - Crew Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The People Behind the Proof</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">The JVTO experience is delivered by real local people whose names, roles, and strengths matter to the quality of the trip. Every member is verified and licensed.</p>
          </div>
          <CrewGrid />
        </div>
      </section>

      {/* How to Verify Us in 60 Seconds */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">How to Verify Us in 60 Seconds</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">If you are careful about where you send your money and who you trust in a high-risk destination, you should verify the operator before you book. We encourage that.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-stone-50 rounded-3xl border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 shadow-sm font-bold">1</div>
              <h3 className="font-bold mb-2">Legal Identity</h3>
              <p className="text-stone-600 text-sm mb-4">Review our legal identity and accountability layer.</p>
              <Link href="/verify-jvto#legal" className="text-orange-500 font-bold text-sm underline">Verify Legal</Link>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-3xl border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 shadow-sm font-bold">2</div>
              <h3 className="font-bold mb-2">History</h3>
              <p className="text-stone-600 text-sm mb-4">Review our history and continuity artifacts.</p>
              <Link href="/verify-jvto#history" className="text-orange-500 font-bold text-sm underline">Check History</Link>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-3xl border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 shadow-sm font-bold">3</div>
              <h3 className="font-bold mb-2">Reviews</h3>
              <p className="text-stone-600 text-sm mb-4">Review our independent guest reviews.</p>
              <Link href="/why-jvto/reviews" className="text-orange-500 font-bold text-sm underline">Read Reviews</Link>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-3xl border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 shadow-sm font-bold">4</div>
              <h3 className="font-bold mb-2">Press & Safety</h3>
              <p className="text-stone-600 text-sm mb-4">Review our press and safety-related proof pages.</p>
              <Link href="/verify-jvto#press" className="text-orange-500 font-bold text-sm underline">Check Press</Link>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/verify-jvto" className="inline-flex items-center gap-2 bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all">
              Verify JVTO <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Don't Guess. Verify. */}
      <section className="py-24 bg-stone-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Don’t Guess. Verify.</h2>
          <p className="text-xl text-stone-600 leading-relaxed">
            East Java is full of beautiful routes and uneven operator quality. The safest decision is not the cheapest-looking option. It is the one that stays consistent when you ask for proof, clarity, and planning detail.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Why Travel with JVTO FAQ" items={whyFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/travel-guide" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Read the Travel Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

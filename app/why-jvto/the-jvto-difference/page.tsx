// app/why-jvto/the-jvto-difference/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Shield, CheckCircle, Users, Clock, Award, Lock, FileText, XCircle, Search, ArrowRight, Activity, Globe, Scale } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AuthorityShield from '@/components/AuthorityShield';
import FAQSection from '@/components/FAQSection';
import { SITE_CONFIG } from '@/lib/siteConfig';

const differenceFaqs = [
  {
    question: "How do I know your safety claims are real?",
    answer: "We provide direct links to our legal registration (NIB), our documented Tourist Police duty context, and independent review platforms. You can verify every claim we make in our proof library."
  },
  {
    question: "What is the police-informed difference in practice?",
    answer: "It means JVTO's operating culture is shaped by Tourist Police discipline: clearer escalation, respect for official closures, formal coordination capacity, and a stronger bias toward safety over sales pressure."
  }
];

export default function JVTODifferencePage() {
  const schema = {
    "@type": "WebPage",
    "name": "The JVTO Difference",
    "description": "Understand the operational certainty and safety standards that set Java Volcano Tour Operator apart."
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Hero */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">The JVTO Difference: Safety Leadership and Verified Proof</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              In an industry often marked by vague claims, we provide proof-backed standards and police-informed safety discipline for private East Java expeditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Changes for Your Trip */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">What Changes for Your Trip</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Booking with JVTO means moving from uncertainty to operational control.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Search className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Less Guesswork</h3>
              <p className="text-stone-600 text-sm">Clear itineraries, all-inclusive pricing, and transparent safety protocols. You know exactly what you are booking.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Scale className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">More Accountability</h3>
              <p className="text-stone-600 text-sm">We are a registered PT company with a physical office and documented safety leadership context. We are legally accountable for your trip.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Lock className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">More Private Control</h3>
              <p className="text-stone-600 text-sm">100% private tours mean you control the pace, the stops, and the focus of your journey. No mixed-group compromises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Shield (Proof-Backed) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Authority Shield (Proof-Backed)</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Our safety standards are not just claims; they are verified by official records.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 border-l-4 border-orange-500 bg-stone-50">
              <h3 className="text-xl font-bold mb-2">Legal Identity</h3>
              <p className="text-stone-600 text-sm mb-4">Fully licensed travel agency (NIB: {SITE_CONFIG.organization.nib}).</p>
              <Link href="/verify-jvto/legal" className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-1">Verify Legal <ArrowRight size={12} /></Link>
            </div>
            <div className="p-8 border-l-4 border-orange-500 bg-stone-50">
              <h3 className="text-xl font-bold mb-2">Operational Safety</h3>
              <p className="text-stone-600 text-sm mb-4">Route-specific health readiness support and professional-grade safety equipment.</p>
              <Link href="/verify-jvto/police-safety" className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-1">Verify Safety <ArrowRight size={12} /></Link>
            </div>
            <div className="p-8 border-l-4 border-orange-500 bg-stone-50">
              <h3 className="text-xl font-bold mb-2">Tourist Police Context</h3>
              <p className="text-stone-600 text-sm mb-4">Founder duty context and formal coordination habits documented through proof assets.</p>
              <Link href="/why-jvto/our-story" className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-1">Check Story <ArrowRight size={12} /></Link>
            </div>
          </div>
          
          <AuthorityShield 
            title="Tourist Police-Informed Leadership"
            description="Our founder, Agung Sambuko (Mr. Sam), has Tourist Police duty context documented by third-party coverage. This informs JVTO's safety culture, formal coordination habits, and proof-first operating style."
          />
        </div>
      </section>

      {/* What We Do Not Promise */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">What We Do Not Promise</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">Honesty is the foundation of operational certainty.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <XCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No Guaranteed Sunrise</h3>
              <p className="text-stone-400 text-sm">Nature is unpredictable. We promise the best chance and the best logistics, but we never promise the weather.</p>
            </div>
            <div>
              <XCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No False Safety Claims</h3>
              <p className="text-stone-400 text-sm">If a crater is closed by authorities, we do not &apos;sneak&apos; guests in. We follow official safety boundaries without exception.</p>
            </div>
            <div>
              <XCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No Shared-Group Ambiguity</h3>
              <p className="text-stone-400 text-sm">We do not offer &apos;budget&apos; shared tours. Private execution gives better control over timing, pacing, and safety decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Proof Works (Simple Audit Checklist) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">How Our Proof Works</h2>
            <p className="text-stone-600">A simple audit checklist for your peace of mind.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Claim</h3>
                <p className="text-stone-600">We state a fact about our operations (e.g., &quot;We are a registered company&quot;).</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Evidence</h3>
                <p className="text-stone-600">We provide a direct link to the source document or independent platform.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify</h3>
                <p className="text-stone-600">You check the source yourself to confirm our authority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Categories */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Evidence Categories</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Explore our full library of verified proof.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/verify-jvto/legal" className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-all">
              <Lock className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Legal</h3>
              <p className="text-stone-500 text-xs">NIB, TDUP, and official registration documents.</p>
            </Link>
            <Link href="/why-jvto/our-story" className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-all">
              <Clock className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">History</h3>
              <p className="text-stone-500 text-xs">Artifacts and milestones since 2015.</p>
            </Link>
            <Link href="/verify-jvto/police-safety" className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-all">
              <Shield className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Police & Safety</h3>
              <p className="text-stone-500 text-xs">Safety protocols and documented Tourist Police duty-context proof.</p>
            </Link>
            <Link href="/verify-jvto/press-recognition" className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-all">
              <Award className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Press & Recognition</h3>
              <p className="text-stone-500 text-xs">Editorial mentions and international awards.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={differenceFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/travel-guide" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Read the Rulebook
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

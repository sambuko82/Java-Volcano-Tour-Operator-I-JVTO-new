// app/verify-jvto/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ShieldCheck, CheckCircle2, Star, ArrowRight, ExternalLink, FileText, Scale, Landmark, ClipboardCheck, ShieldAlert, Activity, Globe, Award, Archive, History } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { LEGAL_DATA, RECOGNITIONS, ARTIFACTS, TIMELINE } from '@/lib/verificationData';
import ProofCard from '@/components/ProofCard';
import AuthorityShield from '@/components/AuthorityShield';

export default function VerifyJVTO() {
  const verifySchema = {
    "@type": ["WebPage", "LocalBusiness"],
    "name": "Verify JVTO – Credentials, Safety, Press & History",
    "description": "Review JVTO’s proof library: legal identity, historical continuity, police and safety context, and third-party references."
  };

  const verifyFaqs = [
    {
      question: "Why do you provide a proof library?",
      answer: "In the East Java tour market, many operators are unlicensed brokers or freelancers. We provide this library to ensure travelers can audit our legitimacy, historical continuity, and safety authority before booking."
    },
    {
      question: "Is Agung Sambuko really a police officer?",
      answer: "Yes. Agung Sambuko is an active member of the Indonesian Tourist Police (POLRI). This role is central to our 'Safety First' operational model and ensures we have direct coordination with local authorities."
    },
    {
      question: "How can I verify your NIB license?",
      answer: `You can visit the official Indonesian OSS (Online Single Submission) portal at oss.go.id and search for our NIB number: ${LEGAL_DATA.nib}.`
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={verifySchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Verify JVTO: A Proof Library You Can Check</h1>
            <p className="text-xl text-stone-300">Trust becomes stronger when it can be checked. This library exists to help travelers review the main proof layers behind JVTO’s identity, continuity, and operating standards.</p>
            
            <div className="mt-12 max-w-sm">
              <AuthorityShield />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Use This Proof Library */}
      <section className="py-16 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center shrink-0 font-bold">1</div>
              <p className="text-stone-600 text-sm">Review the legal artifacts and business registration numbers.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center shrink-0 font-bold">2</div>
              <p className="text-stone-600 text-sm">Audit our historical continuity through archived digital footprints.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-olive text-white flex items-center justify-center shrink-0 font-bold">3</div>
              <p className="text-stone-600 text-sm">Cross-reference our safety authority with official police context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Accountability Proof */}
      <section id="legal" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Legal & Accountability Proof</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">{LEGAL_DATA.companyName}</h3>
                    <p className="text-stone-600 leading-relaxed">JVTO is the operational brand of {LEGAL_DATA.companyName}, a fully licensed Indonesian travel corporation (Perseroan Terbatas). We are a legal entity, not a freelance broker.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <FileText size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">NIB: {LEGAL_DATA.nib}</h3>
                    <p className="text-stone-600 leading-relaxed mb-4">Our Business Identification Number (NIB) is the primary legal identifier for any business in Indonesia. You can verify this through the official OSS portal.</p>
                    <a 
                      href={LEGAL_DATA.ossUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-olive font-bold hover:gap-3 transition-all"
                    >
                      Verify via OSS Portal <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Legal Documents"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Artifacts */}
      <section id="history" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">History & Continuity</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">JVTO is not a new startup. We have a documented history of operational excellence since 2016.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ARTIFACTS.map((item, i) => (
              <ProofCard 
                key={i}
                title={item.title}
                description={item.desc}
                metadata={item.metadata}
                href={item.href}
                imageUrl={item.imageUrl}
                quote={item.quote}
                icon={<Archive className="text-orange-500" size={20} />}
              />
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <History className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">The JVTO Timeline</h2>
            </div>
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-xl font-display font-bold text-brand-olive w-20 shrink-0">{item.year}</div>
                  <div>
                    <h4 className="text-lg font-display font-bold mb-1">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Police & Safety Proof */}
      <section id="safety" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Police & Safety Proof</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Tourist Police Leadership</h3>
                    <p className="text-stone-600 leading-relaxed">Founder Agung Sambuko is an active member of the Indonesian Tourist Police (POLRI). This ensures our safety protocols are aligned with official law enforcement standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Real Health Screening</h3>
                    <p className="text-stone-600 leading-relaxed">We maintain formal partnerships with certified medical clinics for mandatory Ijen health screenings. Every check is real, ensuring you are medically cleared for the trek.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
                alt="Agung Sambuko - JVTO Founder"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section id="press" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Press & Recognition</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">JVTO has been featured and recognized by independent travel media and platforms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {RECOGNITIONS.map((item, i) => (
              <ProofCard 
                key={i}
                title={item.title}
                description={item.desc}
                metadata={item.metadata}
                href={item.href}
                imageUrl={item.imageUrl}
                quote={item.quote}
                fullMetadata={item.fullMetadata}
                icon={<Award className="text-orange-500" size={20} />}
              />
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <Star className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">Independent Platform Ratings</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">TripAdvisor</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-display font-bold">{SITE_CONFIG.reputation.aggregateRating}</span>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-xs text-stone-500 mb-4">{SITE_CONFIG.reputation.totalReviews}+ Reviews</p>
                <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors flex items-center gap-2">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Trustpilot</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-display font-bold">Excellent</span>
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
                <p className="text-xs text-stone-500 mb-4">Verified Reviews</p>
                <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors flex items-center gap-2">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Google Maps</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-display font-bold">4.9</span>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-xs text-stone-500 mb-4">Verified Location</p>
                <a href={SITE_CONFIG.reputation.googleMaps} target="_blank" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors flex items-center gap-2">
                  View Location <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">Verification FAQ</h2>
          <div className="space-y-8">
            {verifyFaqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-8">
                <h3 className="text-2xl font-display font-bold mb-4">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't Guess. Verify. */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Don&apos;t Guess. Verify.</h2>
          <p className="text-xl text-stone-600 mb-12 leading-relaxed">
            In an industry full of brokers and unlicensed operators, we provide the proof you need to book with confidence. If you have any questions about our credentials, our team is ready to provide documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-brand-olive text-white px-10 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
              Contact for Documentation
            </Link>
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
              Why JVTO?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

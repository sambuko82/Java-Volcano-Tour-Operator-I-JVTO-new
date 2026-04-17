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
    "description": "Discover why travelers choose JVTO for private East Java volcano journeys: police-informed safety culture, legal legitimacy, Ijen health-screening coordination, and proof you can verify before booking."
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={whySchema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="Why JVTO"
          fill
          className="object-cover scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full mb-10 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl"
          >
            Operational <span className="text-brand-accent italic">Excellence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-serif text-white mb-10 leading-[0.85] tracking-tight"
          >
            Why Travel with <br /> <span className="italic font-light text-brand-accent">JVTO?</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            In East Java, the difference between a smooth journey and a stressful one is rarely the mountain itself. It is the operator behind the route.
          </p>
        </div>
      </section>

      {/* The JVTO Trust Stack */}
      <section id="trust-stack" className="py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-7xl md:text-[10rem] font-serif text-brand-ink mb-12 leading-[0.85] tracking-tight">The JVTO <br /> <span className="italic font-light text-brand-accent">Trust Stack</span></h2>
            <p className="text-2xl text-stone-500 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">Our trust stack is simple to understand and easy to verify. It starts with legal identity and extends through operational safety.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Police-Informed Safety", desc: "JVTO is shaped by a safety culture that comes from real operational discipline and documented duty context." },
              { icon: Lock, title: "Registered & Verifiable", desc: "We are tied to a legal business identity and physical base in Bondowoso." },
              { icon: Activity, title: "Ijen Screening Support", desc: "For Ijen routes, we coordinate real clinic workflow when current access rules require a health certificate." },
              { icon: Users, title: "Private by Default", desc: "Every JVTO journey is private. No mixed groups. No strangers in your vehicle." },
              { icon: Globe, title: "Local Team", desc: "The experience is delivered by real local people whose names and roles matter." },
              { icon: Star, title: "Independent Proof", desc: "We do not ask you to trust what we say without showing where to verify it." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-16 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5 hover:shadow-brand-olive/10 transition-all group">
                <item.icon className="text-brand-accent mb-10 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-4xl font-serif text-brand-ink mb-8 leading-tight">{item.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Proof Summary */}
      <section className="py-48 bg-white rounded-[80px] shadow-2xl shadow-brand-olive/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12 border-b border-brand-olive/10 pb-16">
            <div>
              <div className="flex items-center gap-4 text-brand-accent mb-8">
                <ShieldCheck size={32} />
                <span className="font-bold tracking-[0.4em] uppercase text-[10px]">Audit Our Credentials</span>
              </div>
              <h2 className="text-7xl md:text-[10rem] font-serif text-brand-ink leading-[0.85] tracking-tight">Verification <br /> <span className="italic font-light text-brand-accent">& Proof</span></h2>
            </div>
            <Link href="/verify-jvto" className="inline-flex items-center gap-6 text-brand-olive font-bold text-xs uppercase tracking-[0.3em] group border-b border-brand-olive/20 pb-3 hover:border-brand-olive transition-all">
              Enter the Proof Library <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: History, title: "Golden Thread History", desc: "Booking.com 2015, Stefan Loose, and address continuity tie the homestay era to JVTO today.", link: "/verify-jvto/history-artifacts", label: "Check History" },
              { icon: Award, title: "Press & Recognition", desc: "Detik, Radar Jember, Stefan Loose, ISIC, and INDECON are mapped to the claims they actually support.", link: "/verify-jvto/press-recognition", label: "Check Press" },
              { icon: Lock, title: "Legal Accountability", desc: "Fully registered PT with verifiable NIB, TDUP, AHU registry context, and physical base.", link: "/verify-jvto/legal", label: "Verify Legal" }
            ].map((item, i) => (
              <div key={i} className="bg-brand-cream p-16 rounded-[80px] border border-stone-50 group">
                <item.icon className="text-brand-accent mb-10 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-3xl font-serif text-brand-ink mb-8 leading-tight">{item.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-lg mb-12">{item.desc}</p>
                <Link href={item.link} className="inline-flex items-center gap-4 text-brand-olive font-bold text-[10px] uppercase tracking-[0.2em] group/link">
                  {item.label} <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duty First, Business Second */}
      <section id="duty-first" className="py-48 bg-brand-olive text-white rounded-[80px] -mt-24 relative z-10 shadow-2xl shadow-brand-olive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-7xl md:text-[10rem] font-serif mb-16 leading-[0.85] tracking-tight">Duty First, <br /> <span className="italic font-light text-brand-accent">Business Second</span></h2>
              <p className="text-2xl text-white/90 leading-relaxed mb-16 font-light tracking-wide">
                That phrase defines the spirit of JVTO. In a category where operators are often tempted to oversell access, soften warnings, or reduce safety to maintain the booking, our approach is different.
              </p>
              <div className="flex items-center gap-8 p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[48px]">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-brand-accent">
                  <Image src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg" alt="Agung Sambuko" width={80} height={80} className="object-cover" />
                </div>
                <div>
                  <p className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Founder Spotlight</p>
                  <p className="text-2xl font-serif text-white">Agung Sambuko</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[100px] overflow-hidden shadow-2xl shadow-black/30">
              <Image 
                src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
                alt="Agung Sambuko"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-olive/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Team, Daily Execution - Crew Grid */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-serif text-brand-ink mb-8 leading-[0.9] tracking-tight">The People <br /> <span className="italic font-light text-brand-accent">Behind the Proof</span></h2>
            <p className="text-2xl text-stone-500 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">The JVTO experience is delivered by real local people whose names, roles, and strengths matter to the quality of the trip.</p>
          </div>
          <CrewGrid />
        </div>
      </section>

      {/* How to Verify Us in 60 Seconds */}
      <section className="py-40 bg-white rounded-[80px] shadow-2xl shadow-brand-olive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-serif text-brand-ink mb-8 leading-[0.9] tracking-tight">How to Verify Us <br /> <span className="italic font-light text-brand-accent">in 60 Seconds</span></h2>
            <p className="text-2xl text-stone-500 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">If you are careful about where you send your money and who you trust, you should verify the operator before you book.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: "1", title: "Legal Identity", desc: "Review our legal identity and accountability layer.", link: "/verify-jvto/legal", label: "Verify Legal" },
              { step: "2", title: "History", desc: "Review our history and continuity artifacts.", link: "/verify-jvto/history-artifacts", label: "Check History" },
              { step: "3", title: "Reviews", desc: "Review our independent guest reviews.", link: "/why-jvto/reviews", label: "Read Reviews" },
              { step: "4", title: "Press & Safety", desc: "Review our press and safety-related proof pages.", link: "/verify-jvto/press-recognition", label: "Check Press" }
            ].map((item, i) => (
              <div key={i} className="text-center p-12 bg-brand-cream rounded-[64px] border border-stone-50 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-brand-olive shadow-xl shadow-brand-olive/5 font-serif text-2xl group-hover:scale-110 transition-transform">{item.step}</div>
                <h3 className="text-2xl font-serif text-brand-ink mb-4 leading-tight">{item.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-lg mb-8">{item.desc}</p>
                <Link href={item.link} className="text-brand-olive font-bold text-xs uppercase tracking-widest border-b border-brand-olive/20 pb-1 hover:border-brand-olive transition-all">{item.label}</Link>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link href="/verify-jvto" className="inline-flex items-center gap-4 bg-brand-olive text-white px-16 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-ink transition-all shadow-xl shadow-brand-olive/20 group">
              Verify JVTO <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Don't Guess. Verify. */}
      <section className="py-40 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-6xl md:text-9xl font-serif text-brand-ink mb-12 leading-[0.9] tracking-tight">Don’t Guess. <br /> <span className="italic font-light text-brand-accent">Verify.</span></h2>
          <p className="text-2xl text-stone-500 leading-relaxed font-light tracking-wide">
            East Java is full of beautiful routes and uneven operator quality. The safest decision is not the cheapest-looking option. It is the one that stays consistent when you ask for proof, clarity, and planning detail.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Why Travel with JVTO FAQ" items={whyFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-40 bg-brand-olive text-white rounded-t-[80px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-serif mb-16 leading-[0.9] tracking-tight">Ready for Operational <br /> <span className="italic font-light text-brand-accent">Certainty?</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/tours" className="bg-brand-accent text-brand-ink px-16 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-4 group shadow-xl shadow-brand-olive/20">
              Explore Private Tours <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/travel-guide" className="bg-white/10 border border-white/20 text-white px-16 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all backdrop-blur-md shadow-xl">
              Read the Travel Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

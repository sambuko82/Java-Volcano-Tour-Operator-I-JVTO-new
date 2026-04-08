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
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={verifySchema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="Verify JVTO"
          fill
          className="object-cover scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-brand-olive/80 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full mb-10 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl"
          >
            <ShieldCheck size={16} className="text-brand-accent" /> Operational Transparency
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-serif text-white mb-10 leading-[0.9] tracking-tight font-light"
          >
            Don&apos;t Guess. <br /> <span className="italic font-light text-brand-accent">Verify.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-16 tracking-wide italic">
            Review JVTO&apos;s proof library: legal identity, historical continuity, police and safety context, and third-party references.
          </p>
          <div className="max-w-md mx-auto">
            <AuthorityShield />
          </div>
        </div>
      </section>

      {/* How to Use This Proof Library */}
      <section className="py-24 bg-white border-b border-stone-100 shadow-2xl shadow-brand-olive/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "01", text: "Review the legal artifacts and business registration numbers." },
              { step: "02", text: "Audit our historical continuity through archived digital footprints." },
              { step: "03", text: "Cross-reference our safety authority with official police context." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-center group">
                <div className="text-5xl font-serif text-brand-olive/10 group-hover:text-brand-olive/30 transition-colors">{item.step}</div>
                <p className="text-stone-600 text-sm font-light leading-relaxed tracking-wide italic">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Accountability Proof */}
      <section id="legal" className="py-40 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-serif font-light mb-12 leading-tight text-brand-olive">Legal & <br /> <span className="italic">Accountability</span></h2>
              <div className="space-y-16">
                <div className="flex gap-10">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-olive shrink-0 shadow-xl shadow-brand-olive/5 border border-stone-100">
                    <Landmark size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-light mb-4 text-brand-olive">{LEGAL_DATA.companyName}</h3>
                    <p className="text-stone-600 font-light leading-relaxed text-lg italic">JVTO is the operational brand of {LEGAL_DATA.companyName}, a fully licensed Indonesian travel corporation (Perseroan Terbatas). We are a legal entity, not a freelance broker.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-olive shrink-0 shadow-xl shadow-brand-olive/5 border border-stone-100">
                    <FileText size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-light mb-4 text-brand-olive">NIB: {LEGAL_DATA.nib}</h3>
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg italic">Our Business Identification Number (NIB) is the primary legal identifier for any business in Indonesia. You can verify this through the official OSS portal.</p>
                    <a 
                      href={LEGAL_DATA.ossUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-brand-olive font-bold text-[10px] uppercase tracking-[0.2em] group border-b border-brand-olive/20 pb-2 hover:border-brand-olive transition-all"
                    >
                      Verify via OSS Portal <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-olive/20"
            >
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Legal Documents"
                fill
                className="object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-olive/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Artifacts */}
      <section id="history" className="py-40 bg-white rounded-[5rem] mx-4 my-16 shadow-2xl shadow-brand-olive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl font-serif font-light mb-8 text-brand-olive">History & <span className="italic">Continuity</span></h2>
            <div className="w-24 h-px bg-brand-olive/20 mx-auto mb-8"></div>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-xl leading-relaxed italic">JVTO is not a new startup. We have a documented history of operational excellence since 2016.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {ARTIFACTS.map((item, i) => (
              <ProofCard 
                key={i}
                title={item.title}
                description={item.desc}
                metadata={item.metadata}
                href={item.href}
                imageUrl={item.imageUrl}
                quote={item.quote}
                icon={<Archive className="text-brand-orange" size={24} />}
              />
            ))}
          </div>

          <div className="bg-brand-cream/40 p-12 md:p-24 rounded-[4rem] border border-stone-100 shadow-inner">
            <div className="flex items-center gap-8 mb-20">
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-olive shadow-xl shadow-brand-olive/5">
                <History size={40} />
              </div>
              <h2 className="text-5xl font-serif font-light text-brand-olive">The JVTO <span className="italic">Timeline</span></h2>
            </div>
            <div className="space-y-20 relative before:absolute before:left-[48px] before:top-0 before:bottom-0 before:w-px before:bg-brand-olive/10">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-16 relative group">
                  <div className="w-24 h-24 rounded-full bg-white border border-stone-100 flex items-center justify-center text-2xl font-serif font-light text-brand-olive shrink-0 z-10 shadow-xl shadow-brand-olive/5 group-hover:scale-110 transition-transform duration-500">
                    {item.year.toString().slice(-2)}
                  </div>
                  <div className="pt-6">
                    <h4 className="text-3xl font-serif font-light mb-4 text-brand-olive">{item.title}</h4>
                    <p className="text-stone-600 font-light leading-relaxed text-lg italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Police & Safety Proof */}
      <section id="safety" className="py-40 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-olive/20"
            >
              <Image 
                src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
                alt="Agung Sambuko - JVTO Founder"
                fill
                className="object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-olive/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/40 to-transparent" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-8xl font-serif font-light mb-12 leading-tight text-brand-olive">Police & <br /> <span className="italic">Safety Proof</span></h2>
              <div className="space-y-16">
                <div className="flex gap-10">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-olive shrink-0 shadow-xl shadow-brand-olive/5 border border-stone-100">
                    <ShieldCheck size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-light mb-4 text-brand-olive">Tourist Police Leadership</h3>
                    <p className="text-stone-600 font-light leading-relaxed text-lg italic">Founder Agung Sambuko is an active member of the Indonesian Tourist Police (POLRI). This ensures our safety protocols are aligned with official law enforcement standards.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-olive shrink-0 shadow-xl shadow-brand-olive/5 border border-stone-100">
                    <Activity size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-light mb-4 text-brand-olive">Real Health Screening</h3>
                    <p className="text-stone-600 font-light leading-relaxed text-lg italic">We maintain formal partnerships with certified medical clinics for mandatory Ijen health screenings. Every check is real, ensuring you are medically cleared for the trek.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section id="press" className="py-40 bg-white rounded-[5rem] mx-4 my-16 shadow-2xl shadow-brand-olive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl font-serif font-light mb-8 text-brand-olive">Press & <span className="italic">Recognition</span></h2>
            <div className="w-24 h-px bg-brand-olive/20 mx-auto mb-8"></div>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-xl leading-relaxed italic">JVTO has been featured and recognized by independent travel media and platforms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
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
                icon={<Award className="text-brand-orange" size={24} />}
              />
            ))}
          </div>

          <div className="bg-brand-cream/40 p-12 md:p-24 rounded-[4rem] border border-stone-100 shadow-inner">
            <div className="flex items-center gap-8 mb-20">
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-brand-olive shadow-xl shadow-brand-olive/5">
                <Star size={40} />
              </div>
              <h2 className="text-5xl font-serif font-light text-brand-olive">Independent <span className="italic">Platform Ratings</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  label: "TripAdvisor", 
                  value: SITE_CONFIG.reputation.aggregateRating, 
                  sub: `${SITE_CONFIG.reputation.totalReviews}+ Reviews`,
                  href: SITE_CONFIG.reputation.tripadvisor,
                  type: "stars"
                },
                { 
                  label: "Trustpilot", 
                  value: "Excellent", 
                  sub: "Verified Reviews",
                  href: SITE_CONFIG.reputation.trustpilot,
                  type: "check"
                },
                { 
                  label: "Google Maps", 
                  value: "4.9", 
                  sub: "Verified Location",
                  href: SITE_CONFIG.reputation.googleMaps,
                  type: "stars"
                }
              ].map((item, i) => (
                <div key={i} className="p-12 bg-white rounded-[3rem] border border-stone-100 shadow-xl shadow-brand-olive/5 hover:shadow-2xl transition-all group duration-500">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-8 group-hover:text-brand-olive transition-colors">{item.label}</h4>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-serif font-light text-brand-olive">{item.value}</span>
                    {item.type === "stars" ? (
                      <div className="flex text-brand-orange">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                      </div>
                    ) : (
                      <CheckCircle2 size={32} className="text-green-500" />
                    )}
                  </div>
                  <p className="text-base text-stone-500 font-light mb-10 tracking-wide italic">{item.sub}</p>
                  <a href={item.href} target="_blank" className="text-[10px] font-bold text-brand-olive hover:text-brand-orange transition-colors flex items-center gap-4 uppercase tracking-[0.2em] border-b border-brand-olive/10 pb-2 w-fit">
                    View Profile <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-serif font-light mb-24 text-center text-brand-olive">Verification <span className="italic">FAQ</span></h2>
          <div className="space-y-20">
            {verifyFaqs.map((faq, index) => (
              <div key={index} className="group">
                <h3 className="text-4xl font-serif font-light mb-6 group-hover:text-brand-olive transition-colors text-brand-olive">{faq.question}</h3>
                <p className="text-stone-600 font-light leading-relaxed text-xl italic">{faq.answer}</p>
                <div className="h-px bg-brand-olive/10 mt-16 group-last:hidden" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-40 bg-brand-olive text-white rounded-t-[5rem] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/verify-cta/1920/1080"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-serif font-light mb-16 leading-[0.9] tracking-tight">Ready for Operational <br /> <span className="italic">Certainty?</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/tours" className="bg-brand-orange text-white px-16 py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-olive transition-all flex items-center gap-4 group shadow-xl shadow-brand-olive/20">
              Explore Private Tours <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/why-jvto" className="bg-white/10 border border-white/20 text-white px-16 py-6 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all backdrop-blur-md shadow-xl">
              Why JVTO?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

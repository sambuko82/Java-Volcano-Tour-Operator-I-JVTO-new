// app/legal/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
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
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={legalSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="JVTO Policies"
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
            Legal <span className="text-brand-accent italic">Framework</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-serif text-white mb-10 leading-[0.85] tracking-tight"
          >
            Policies & <br /> <span className="italic font-light text-brand-accent">Standards</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide italic">
            Transparency is the foundation of trust. We outline our operational standards and legal commitments clearly.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                {['Corporate Identity', 'Terms of Service', 'Safety & Liability', 'Privacy Policy'].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-10 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] transition-all border border-brand-olive/10 hover:bg-brand-olive hover:text-white text-brand-ink bg-white shadow-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2 space-y-32">
              {/* Corporate Identity */}
              <div className="bg-white p-16 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                <div className="flex items-center gap-6 mb-12 text-brand-accent">
                  <ShieldCheck size={40} />
                  <h2 className="text-5xl font-serif text-brand-ink leading-tight">Corporate Identity</h2>
                </div>
                <div className="space-y-10 text-stone-600 font-light leading-relaxed text-lg">
                  <p>Java Volcano Tour Operator (JVTO) is the registered brand of <strong>PT Java Volcano Rendezvous</strong>, a legally incorporated entity in the Republic of Indonesia.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-brand-cream rounded-[48px] border border-stone-100">
                    <div>
                      <p className="text-[10px] font-bold text-brand-ink uppercase tracking-[0.2em] mb-2 opacity-40">Business License (NIB)</p>
                      <p className="text-brand-ink font-medium">{SITE_CONFIG.organization.nib}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-ink uppercase tracking-[0.2em] mb-2 opacity-40">Operational Base</p>
                      <p className="text-brand-ink font-medium">Bondowoso, East Java</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms of Service */}
              <div className="bg-white p-16 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                <div className="flex items-center gap-6 mb-12 text-brand-accent">
                  <FileText size={40} />
                  <h2 className="text-5xl font-serif text-brand-ink leading-tight">Terms of Service</h2>
                </div>
                <div className="space-y-10 text-stone-600 font-light leading-relaxed text-lg">
                  <p>By booking a tour with JVTO, you agree to our operational terms designed to ensure safety and service quality.</p>
                  <ul className="space-y-6 list-none">
                    {[
                      "All bookings require a deposit to secure vehicles and guides.",
                      "Cancellations made within 48 hours of departure are non-refundable.",
                      "Itineraries may be adjusted based on volcanic activity or weather.",
                      "Clients must provide accurate health information for Ijen routes."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-6">
                        <span className="w-8 h-8 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">{i+1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Safety & Liability */}
              <div className="bg-white p-16 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                <div className="flex items-center gap-6 mb-12 text-brand-accent">
                  <ShieldAlert size={40} />
                  <h2 className="text-5xl font-serif text-brand-ink leading-tight">Safety & Liability</h2>
                </div>
                <div className="space-y-10 text-stone-600 font-light leading-relaxed text-lg">
                  <p>Volcano tourism involves inherent risks. JVTO prioritizes safety but requires clients to acknowledge these risks.</p>
                  <div className="p-10 bg-brand-olive/5 rounded-[48px] border border-brand-olive/10">
                    <p className="italic text-brand-ink">&quot;Our safety protocols are police-informed and medically cautious. We reserve the right to cancel any route if conditions are deemed unsafe by local authorities.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-48 bg-brand-olive text-white rounded-t-[80px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-7xl md:text-[10rem] font-serif mb-20 leading-[0.85] tracking-tight">Ready for Operational <br /> <span className="italic font-light text-brand-accent">Certainty?</span></h2>
          <div className="flex flex-wrap justify-center gap-10">
            <Link href="/tours" className="bg-brand-accent text-brand-ink px-16 py-7 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center gap-4 group shadow-xl shadow-brand-olive/20">
              Explore Private Tours <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-16 py-7 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white/20 transition-all backdrop-blur-md shadow-xl">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

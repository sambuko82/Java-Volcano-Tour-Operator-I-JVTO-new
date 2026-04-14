// app/travel-guide/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import SupportShortcutRail from '@/components/SupportShortcutRail';
import LiveSignalBlock from '@/components/LiveSignalBlock';
import { ShieldCheck, CheckCircle2, Info, ArrowRight, Thermometer, Cloud, Clock, Luggage, Activity, Heart, Scale, Search, MapPin, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

const guideFaqs = [
  {
    question: "What is 'Operational Certainty'?",
    answer: "It is our commitment to safety and transparency. We follow official PVMBG (Volcanology) alerts without exception. If a site is closed by authorities, we do not enter. We provide alternative routes or destinations of equal value."
  },
  {
    question: "Is the Ijen health check really mandatory?",
    answer: "Ijen access rules can require a recent local health certificate. JVTO follows the current requirement through real clinic checks so documentation is valid and health risk is assessed before the hike."
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
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={guideSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
            alt="East Java Landscape"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-cream/90 to-brand-cream"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-olive/10 text-brand-olive rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-6 shadow-sm">
              Essential Knowledge
            </span>
            <h1 className="text-6xl md:text-[10rem] font-serif font-light leading-[0.9] text-brand-olive mb-10 tracking-tight">
              Travel Guide: <br />
              <span className="italic">The Rulebook</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl italic">
              Operational certainty starts with being informed. Read our comprehensive guide to understand the boundaries, logistics, and safety protocols of East Java expeditions.
            </p>
          </motion.div>
        </div>
      </section>

      <SupportShortcutRail />

      {/* Live Volcano Signal */}
      <section className="py-8 bg-white border-b border-jvto-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveSignalBlock />
        </div>
      </section>

      {/* The Rulebook Before You Book */}
      <section className="py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-serif font-light text-brand-olive mb-8 leading-[0.9] tracking-tight">The Rulebook <br /> <span className="italic">Before You Book</span></h2>
            <div className="w-24 h-px bg-brand-olive/20 mx-auto mb-10"></div>
            <p className="text-stone-600 max-w-2xl mx-auto font-light italic text-xl">Our operational boundaries ensure your safety and clarity. We don&apos;t guess; we follow the rules.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Safety Boundaries",
                desc: "We follow official PVMBG alerts without exception. If a site is closed, we do not enter. Safety is our non-negotiable boundary.",
                link: "/verify-jvto",
                linkText: "Verify Our Authority"
              },
              {
                icon: Activity,
                title: "Health Requirements",
                desc: "Current Ijen access rules can require certified local clinic checks. JVTO follows the active requirement through real screening support.",
                link: "/travel-guide/ijen-health-screening",
                linkText: "Read Health Proof"
              },
              {
                icon: Scale,
                title: "Operational Control",
                desc: "JVTO works through named local crew, written inclusions, and direct operating responsibility instead of vague reseller handoffs.",
                link: "/why-jvto",
                linkText: "Why This Matters"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-12 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:shadow-brand-olive/5 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-cream rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                  <item.icon size={32} />
                </div>
                <h3 className="text-3xl font-serif font-light text-brand-olive mb-6">{item.title}</h3>
                <p className="text-stone-600 font-light text-lg leading-relaxed mb-10 italic">{item.desc}</p>
                <Link href={item.link} className="text-brand-olive font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                  {item.linkText} <ArrowRight size={14} className="text-brand-orange" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Guides (Logistics Focus) */}
      <section className="py-40 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-serif font-light text-brand-olive mb-8 leading-[0.9] tracking-tight">Destination <br /> <span className="italic">Guides</span></h2>
              <p className="text-stone-600 font-light text-2xl italic">Practical logistics for East Java&apos;s primary destinations.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Ijen Crater Guide",
                desc: "Logistics for the blue fire, health screening requirements, and gas mask protocols.",
                link: "/travel-guide/ijen-health-screening",
                img: "https://javavolcano-touroperator.com/assets/img/destinations/ijen.webp"
              },
              {
                title: "Mount Bromo Guide",
                desc: "Jeep logistics, sunrise timing, and altitude preparation for the Bromo caldera.",
                link: "/travel-guide/mount-bromo-logistics",
                img: "https://javavolcano-touroperator.com/assets/img/destinations/bromo.webp"
              },
              {
                title: "Tumpak Sewu Guide",
                desc: "Trekking logistics, footwear requirements, and safety for the waterfall descent.",
                link: "/travel-guide/tumpak-sewu-logistics",
                img: "https://javavolcano-touroperator.com/assets/img/destinations/tumpak-sewu.webp"
              }
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="group relative aspect-[4/5] overflow-hidden rounded-[4rem] bg-stone-200 shadow-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive via-brand-olive/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <MapPin className="text-brand-orange mb-6" size={24} />
                  <h3 className="text-4xl font-serif font-light text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 text-lg font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 italic">{item.desc}</p>
                  <div className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.3em] group-hover:gap-5 transition-all duration-500">
                    Read Guide <ArrowRight size={14} className="text-brand-orange" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Preparation */}
      <section className="py-40 bg-white rounded-[5rem] shadow-2xl shadow-brand-olive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-serif font-light text-brand-olive mb-8 leading-[0.9] tracking-tight">Practical <br /> <span className="italic">Preparation</span></h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light italic text-2xl">Be prepared for the diverse climates and terrain of East Java.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link href="/travel-guide/packing-list" className="group bg-brand-cream/30 p-12 rounded-[3rem] border border-stone-100 text-center hover:bg-brand-cream transition-all duration-500 hover:shadow-xl">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm group-hover:scale-110 transition-transform duration-500 text-brand-olive">
                <Luggage size={40} />
              </div>
              <h3 className="text-3xl font-serif font-light text-brand-olive mb-6">What to Pack</h3>
              <p className="text-stone-600 text-lg font-light leading-relaxed italic">Layered clothing, hiking shoes, headlamps, and personal medication. See our full list.</p>
            </Link>
            <div className="bg-brand-cream/30 p-12 rounded-[3rem] border border-stone-100 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm text-brand-olive">
                <Thermometer size={40} />
              </div>
              <h3 className="text-3xl font-serif font-light text-brand-olive mb-6">Altitude & Temperature</h3>
              <p className="text-stone-600 text-lg font-light leading-relaxed italic">Bromo can drop to 0°C. Ijen is at 2,386m. Prepare for cold mornings and thin air.</p>
            </div>
            <div className="bg-brand-cream/30 p-12 rounded-[3rem] border border-stone-100 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm text-brand-olive">
                <Globe size={40} />
              </div>
              <h3 className="text-3xl font-serif font-light text-brand-olive mb-6">Money & Connectivity</h3>
              <p className="text-stone-600 text-lg font-light leading-relaxed italic">Cash is king in remote areas. SIM cards and Wi-Fi availability vary by location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Certainty Checklist */}
      <section className="py-40 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-serif font-light text-brand-olive mb-8 leading-[0.9] tracking-tight">Operational <br /> <span className="italic text-brand-orange">Certainty Checklist</span></h2>
            <p className="text-stone-600 text-2xl font-light italic">Three steps to ensure your trip is built on authority, not guesswork.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {[
              {
                num: "01",
                title: "Verify Your Operator",
                desc: "Check for a real NIB license and police-led safety oversight. Don&apos;t book with unlicensed brokers."
              },
              {
                num: "02",
                title: "Verify Your Health",
                desc: "Ensure you have a real medical check at a certified clinic for Ijen. Your safety depends on it."
              },
              {
                num: "03",
                title: "Verify Your Route",
                desc: "Confirm your private logistics and safety decision boundaries. Know who makes the call if things change."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-12 md:items-center bg-white p-12 rounded-[4rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="text-8xl font-serif font-light text-brand-olive/5">{item.num}</div>
                <div>
                  <h3 className="text-4xl font-serif font-light text-brand-olive mb-4">{item.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed text-xl italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-white rounded-t-[5rem] shadow-2xl shadow-brand-olive/5">
        <FAQSection items={guideFaqs} />
      </div>

      {/* Ready for Operational Certainty? */}
      <section className="py-40 bg-brand-olive text-white rounded-t-[5rem] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif font-light mb-16 leading-[0.9] tracking-tight">Ready for <br /> <span className="italic text-brand-orange">Operational Certainty?</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/tours" className="bg-brand-orange text-white px-12 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-olive transition-all shadow-xl shadow-brand-orange/20 flex items-center gap-4 duration-500">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-12 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/20 transition-all duration-500">
              Verify JVTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
 }

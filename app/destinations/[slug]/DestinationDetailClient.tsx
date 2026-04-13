'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { Destination, TOURS } from '@/lib/jvtoData';

interface DestinationDetailClientProps {
  destination: Destination;
}

export default function DestinationDetailClient({ destination }: DestinationDetailClientProps) {
  const associatedTours = TOURS.filter(t => t.destinations.includes(destination.slug));

  const placeSchema = {
    "@type": "Place",
    "name": destination.name,
    "description": destination.fullDesc,
    "image": destination.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": destination.region,
      "addressCountry": "Indonesia"
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://javavolcano-touroperator.com" },
      { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://javavolcano-touroperator.com/destinations" },
      { "@type": "ListItem", "position": 3, "name": destination.name, "item": `https://javavolcano-touroperator.com/destinations/${destination.slug}` }
    ]
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={placeSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
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
            <MapPin size={14} className="text-brand-accent" /> {destination.region} <span className="text-brand-accent italic">Expedition</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-serif text-white mb-10 leading-[0.9] tracking-tight font-light"
          >
            {destination.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'italic font-light text-brand-accent' : ''}>{word} </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide italic"
          >
            {destination.shortDesc}
          </motion.p>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
            <div className="lg:col-span-2 space-y-32">
              <div>
                <div className="mb-24">
                  <AnswerBlock
                    text={`${destination.name} is a premier travel destination in ${destination.region} known for ${destination.shortDesc}. JVTO offers ${associatedTours.length} verified private tours in this region, led by SAR-certified guides.`}
                  />
                </div>
                <h2 className="text-6xl md:text-8xl font-serif font-light text-brand-olive mb-12 leading-[0.9] tracking-tight">The Essence of <br /> <span className="italic">{destination.name}</span></h2>
                <p className="text-2xl text-stone-600 leading-relaxed font-light mb-16 tracking-wide italic">{destination.fullDesc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-6 p-10 bg-white rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:shadow-brand-olive/5 transition-all group duration-500">
                      <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive shrink-0 group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="font-serif font-light text-xl text-brand-olive">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {destination.practicalNotes && destination.practicalNotes.length > 0 && (
                <div className="bg-brand-olive text-white p-16 md:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-brand-olive/20">
                  <div className="absolute top-0 right-0 p-16 opacity-10">
                    <Info size={160} />
                  </div>
                  <h3 className="text-4xl font-serif font-light mb-10 flex items-center gap-6">
                    <Info className="text-brand-orange" size={32} /> Practical Notes
                  </h3>
                  <ul className="text-white/80 leading-relaxed font-light text-xl relative z-10 tracking-wide italic space-y-2">
                    {destination.practicalNotes.map((note, i) => <li key={i}>{note}</li>)}
                  </ul>
                </div>
              )}

              <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-brand-olive/10 pb-10">
                  <h2 className="text-5xl md:text-7xl font-serif font-light text-brand-olive leading-[0.9] tracking-tight">Private <br /> <span className="italic">Expeditions</span></h2>
                  <p className="text-stone-400 font-light text-[10px] max-w-[240px] tracking-[0.3em] uppercase">Verified routes covering {destination.name}.</p>
                </div>
                {associatedTours.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {associatedTours.map((tour, index) => (
                      <TourCard key={tour.slug} tour={tour} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="p-24 bg-white rounded-[4rem] border border-dashed border-stone-200 text-center">
                    <p className="text-stone-400 italic font-light text-xl">No specific tours listed for this destination yet. Contact us for a custom itinerary.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-12">
                <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-xl shadow-brand-olive/5 border border-stone-50">
                  <h4 className="text-3xl font-serif font-light text-brand-olive mb-10 leading-tight">Why Visit <br /> <span className="italic">{destination.name}?</span></h4>
                  <ul className="space-y-8">
                    {[
                      "Unparalleled natural beauty and volcanic landscapes.",
                      "Rich cultural heritage and local traditions.",
                      "Adventure opportunities for all fitness levels."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-6">
                        <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive shrink-0 mt-1">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="text-stone-600 font-light leading-relaxed text-lg italic">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-orange p-12 md:p-16 rounded-[4rem] text-white shadow-2xl shadow-brand-orange/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <h4 className="text-4xl font-serif font-light mb-6 leading-tight">Plan Your <br /> <span className="italic">Trip</span></h4>
                  <p className="text-white/80 mb-12 font-light leading-relaxed text-lg tracking-wide italic">Get a customized itinerary for your {destination.name} adventure with our operational experts.</p>
                  <a
                    href={SITE_CONFIG.whatsapp.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-brand-olive py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] text-center hover:bg-brand-olive hover:text-white transition-all shadow-xl duration-500"
                  >
                    Contact Expert
                  </a>
                </div>

                <div className="bg-brand-olive p-12 md:p-16 rounded-[4rem] text-white shadow-2xl shadow-brand-olive/20">
                  <h4 className="text-3xl font-serif font-light mb-8 leading-tight text-white">Operational <br /> <span className="italic text-brand-orange">Proof</span></h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Verify JVTO Standards</p>
                  <div className="space-y-6">
                    <Link href="/verify-jvto" className="flex items-center justify-between group py-2">
                      <span className="text-lg font-light text-white/60 group-hover:text-white transition-colors">Legal Identity</span>
                      <ArrowRight size={20} className="text-brand-orange group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="h-px bg-white/10" />
                    <Link href="/verify-jvto#safety" className="flex items-center justify-between group py-2">
                      <span className="text-lg font-light text-white/60 group-hover:text-white transition-colors">Safety Protocols</span>
                      <ArrowRight size={20} className="text-brand-orange group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

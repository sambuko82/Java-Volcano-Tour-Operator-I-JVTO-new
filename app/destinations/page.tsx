// app/destinations/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '@/lib/jvtoData';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function DestinationsPage() {
  const destSchema = {
    "@type": "ItemList",
    "numberOfItems": DESTINATIONS.length,
    "itemListElement": DESTINATIONS.map((dest, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Place",
        "name": dest.name,
        "description": dest.shortDesc,
        "image": dest.image,
        "url": `${SITE_CONFIG.organization.address.mapUrl}/destinations/${dest.slug}`
      }
    }))
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={destSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="East Java Destinations"
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
            className="inline-flex items-center gap-3 bg-brand-olive/80 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full mb-10 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl"
          >
            East Java <span className="text-brand-accent italic">Expeditions</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-[120px] font-serif text-white mb-10 leading-[0.85] tracking-tight"
          >
            Bromo, Ijen & <br /> <span className="italic font-light text-brand-accent">Tumpak Sewu</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Discover the active craters, mystical blue fires, and thousand-stream waterfalls that define the East Java landscape.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-64">
            {DESTINATIONS.map((dest, index) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 lg:gap-32 items-center group`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl shadow-brand-olive/10 group-hover:scale-[1.02] transition-transform duration-700">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      unoptimized
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-olive/10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-brand-olive font-bold mb-6 uppercase tracking-[0.4em] text-[10px]">{dest.difficulty} Difficulty</div>
                  <h2 className="text-6xl md:text-8xl font-serif text-brand-ink mb-8 leading-[0.9] tracking-tight">{dest.name}</h2>
                  <p className="text-xl text-stone-500 mb-12 leading-relaxed font-light">{dest.shortDesc}</p>
                  
                  <div className="mb-16">
                    <h4 className="text-[10px] font-bold mb-8 text-brand-ink uppercase tracking-[0.2em] opacity-40">Highlights:</h4>
                    <div className="flex flex-wrap gap-4">
                      {dest.highlights.map(h => (
                        <span key={h} className="px-8 py-4 bg-white rounded-full text-xs font-bold uppercase tracking-widest border border-stone-100 shadow-sm text-stone-600">{h}</span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/destinations/${dest.slug}`} className="inline-flex items-center gap-6 text-brand-olive font-bold text-xs uppercase tracking-[0.3em] group border-b border-brand-olive/20 pb-3 hover:border-brand-olive transition-all">
                    Explore {dest.name} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Explore? */}
      <section className="py-48 bg-brand-olive text-white rounded-t-[80px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-7xl md:text-[10rem] font-serif mb-20 leading-[0.85] tracking-tight">Ready for Your <br /> <span className="italic font-light text-brand-accent">Expedition?</span></h2>
          <div className="flex flex-wrap justify-center gap-10">
            <Link href="/tours" className="bg-brand-accent text-brand-ink px-16 py-7 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all flex items-center gap-4 group shadow-xl shadow-brand-olive/20">
              View All Tours <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="bg-white/10 border border-white/20 text-white px-16 py-7 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white/20 transition-all backdrop-blur-md shadow-xl">
              Custom Inquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

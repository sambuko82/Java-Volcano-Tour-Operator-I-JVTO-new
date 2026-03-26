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
    <main className="min-h-screen">
      <JsonLd data={destSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">East Java Destinations: Bromo, Ijen & Tumpak Sewu</h1>
            <p className="text-xl text-stone-300">Discover the active craters, mystical blue fires, and thousand-stream waterfalls that define the East Java landscape.</p>
          </motion.div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {DESTINATIONS.map((dest, index) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-brand-olive font-bold mb-4 uppercase tracking-widest">{dest.difficulty} Difficulty</div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{dest.name}</h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">{dest.shortDesc}</p>
                  
                  <div className="mb-10">
                    <h4 className="font-bold mb-4 text-stone-900">Highlights:</h4>
                    <div className="flex flex-wrap gap-3">
                      {dest.highlights.map(h => (
                        <span key={h} className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-stone-200">{h}</span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/destinations/${dest.slug}`} className="flex items-center gap-2 text-brand-olive font-bold hover:gap-3 transition-all">
                    Explore {dest.name} <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

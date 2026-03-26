// app/travel-guide/tumpak-sewu-logistics/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Clock, MapPin, Info, ShieldCheck, ArrowRight, Camera, Footprints, Droplets } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function TumpakSewuLogisticsPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Tumpak Sewu Logistics Guide",
    "description": "Essential logistics, safety, and footwear requirements for visiting Tumpak Sewu Waterfall."
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Tumpak Sewu Logistics</h1>
            <p className="text-xl text-stone-300">Operational certainty at Tumpak Sewu means proper footwear, expert guides, and precise timing to avoid the crowds.</p>
          </motion.div>
        </div>
      </section>

      {/* The Descent Protocol */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">The Descent Protocol</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Footprints size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Footwear Requirements</h3>
                    <p className="text-stone-600 leading-relaxed">The descent is steep and often wet. We require all guests to wear sturdy hiking sandals or shoes with excellent grip. No flip-flops allowed for the descent.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Droplets size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Water Safety</h3>
                    <p className="text-stone-600 leading-relaxed">The base of the waterfall is a wet environment. We provide waterproof bags for your electronics and cameras. Be prepared to get wet!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Tumpak Sewu Logistics"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timing & Crowds */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Timing & Crowds</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">We time our arrival to ensure you experience the waterfall in its best light.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Early Arrival</h3>
              <p className="text-stone-600 text-sm">We arrive at the viewpoint by 07:00 AM to capture the morning light and avoid the large tour groups that arrive later.</p>
            </div>
            <div>
              <Camera className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">The Panorama View</h3>
              <p className="text-stone-600 text-sm">The best overview is from the top rim. We spend time here before beginning the descent to the base.</p>
            </div>
            <div>
              <ShieldCheck className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Guided Descent</h3>
              <p className="text-stone-600 text-sm">Our guides are experts in the terrain. They will assist you through the steep sections and ensure your safety.</p>
            </div>
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
            <Link href="/travel-guide" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Back to Travel Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// app/travel-guide/mount-bromo-logistics/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Clock, MapPin, Info, ShieldCheck, ArrowRight, Camera, Thermometer, Users } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function BromoLogisticsPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Mount Bromo Logistics Guide",
    "description": "Essential logistics, timing, and safety information for visiting Mount Bromo."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Mount Bromo Logistics</h1>
            <p className="text-xl text-stone-300">Operational certainty at Bromo means precise timing, private jeeps, and expert navigation of the caldera.</p>
          </motion.div>
        </div>
      </section>

      {/* Key Logistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">The Bromo Sunrise Protocol</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">03:00 AM Departure</h3>
                    <p className="text-stone-600 leading-relaxed">To secure a prime viewing spot at King Kong Hill or Penanjakan, we depart early. Our private jeeps ensure you aren&apos;t waiting for strangers.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Private 4x4 Jeep</h3>
                    <p className="text-stone-600 leading-relaxed">We use only well-maintained, private 4x4 jeeps. This is essential for navigating the Sea of Sand and the steep climbs to the viewpoints.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Bromo Jeep Logistics"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Viewpoints & Routes */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Viewpoints & Routes</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">We navigate the crowds to find you the best perspective.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4">King Kong Hill</h3>
              <p className="text-stone-600 text-sm mb-4">The most iconic view of the Bromo caldera. We arrive early to secure a spot before the main crowds.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest">High Popularity</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Seruni Point</h3>
              <p className="text-stone-600 text-sm mb-4">A great alternative with slightly fewer crowds and a unique angle of the Batok and Bromo peaks.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest">Moderate Popularity</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4">The Crater Rim</h3>
              <p className="text-stone-600 text-sm mb-4">After sunrise, we cross the Sea of Sand to hike the 250 steps to the actual Bromo crater rim.</p>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-widest">Active Volcano</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Preparation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Bromo Safety"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Safety & Preparation</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <Thermometer size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Temperature Management</h3>
                    <p className="text-stone-600 leading-relaxed">It is cold. Really cold. Temperatures can be 0°C-5°C. You must bring layers. See our <Link href="/travel-guide/packing-list" className="text-brand-olive underline">Packing List</Link>.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Volcanic Activity</h3>
                    <p className="text-stone-600 leading-relaxed">Bromo is an active volcano. We monitor PVMBG alerts daily. If the crater rim is closed due to activity, we respect the boundary.</p>
                  </div>
                </div>
              </div>
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

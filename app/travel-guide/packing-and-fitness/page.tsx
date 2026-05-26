// app/travel-guide/packing-and-fitness/page.tsx
'use client';

import { motion } from 'motion/react';
import { Briefcase, Activity, CheckCircle, ExternalLink, Info, AlertTriangle, Thermometer, Footprints } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

const packingList = [
  {
    icon: <Thermometer className="text-orange-500" />,
    title: 'Warm Layers',
    desc: 'Temperatures can drop to 5°C before sunrise at Bromo and Ijen.'
  },
  {
    icon: <Footprints className="text-orange-500" />,
    title: 'Hiking Shoes',
    desc: 'Proper hiking shoes or sandals with good grip are essential for volcanic terrain.'
  },
  {
    icon: <Briefcase className="text-orange-500" />,
    title: 'Raincoat',
    desc: 'Essential for waterfalls and unexpected rain in the highlands.'
  },
  {
    icon: <Activity className="text-orange-500" />,
    title: 'Daypack',
    desc: 'A small backpack for water, snacks, and personal items during hikes.'
  }
];

export default function PackingAndFitnessPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Packing & Fitness",
    "description": "Essential packing list and fitness requirements for East Java volcano expeditions."
  };

  return (
    <main className="min-h-screen bg-stone-50">
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Packing List: Essential Gear for Java Volcanoes</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Proper preparation is key to a safe and enjoyable expedition. We provide clear packing lists and fitness guidelines for all our routes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {packingList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <Activity className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">Fitness Requirements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-orange-500" /> Bromo (Easy)
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    Requires basic walking fitness. The hike to the crater rim involves 253 steps but is generally accessible to most travelers.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-orange-500" /> Ijen (Moderate)
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    Requires a moderate level of fitness. The hike is 3km one way with a steep initial incline. Health screening is mandatory.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-orange-500" /> Tumpak Sewu (Challenging)
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    Requires good physical fitness and agility. The descent to the base involves steep bamboo ladders and stream crossings.
                  </p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-orange-500" /> Important Note
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    If you have any medical conditions or physical limitations, please inform us during the booking process so we can tailor the route to your needs.
                  </p>
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

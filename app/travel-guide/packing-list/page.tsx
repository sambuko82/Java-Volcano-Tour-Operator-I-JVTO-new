// app/travel-guide/packing-list/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { CheckCircle2, Info, Wind, Thermometer, CloudRain, Mountain, Camera, Footprints, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

const packingItems = [
  {
    category: "Essential Gear",
    icon: <Mountain size={24} />,
    items: [
      { name: "Sturdy Hiking Shoes", desc: "With good grip for volcanic terrain and loose gravel." },
      { name: "Warm Layers", desc: "Temperatures at Bromo and Ijen can drop to 5°C-10°C before sunrise." },
      { name: "Windbreaker / Rain Jacket", desc: "Essential for protection against wind and unexpected rain." },
      { name: "Headlamp / Flashlight", desc: "Required for night hikes at Ijen and early morning Bromo starts." }
    ]
  },
  {
    category: "Health & Safety",
    icon: <ShieldCheck size={24} />,
    items: [
      { name: "Respirator Mask (N95/Gas Mask)", desc: "Mandatory for Ijen sulfur gas. We provide these for our guests." },
      { name: "Personal Medications", desc: "Bring any specific medications you require." },
      { name: "Sunscreen & Lip Balm", desc: "High altitude sun can be intense even when it feels cool." },
      { name: "Hand Sanitizer / Wipes", desc: "For hygiene during the journey." }
    ]
  },
  {
    category: "Personal Items",
    icon: <Camera size={24} />,
    items: [
      { name: "Passport / ID Copy", desc: "Required for national park permits and health screenings." },
      { name: "Power Bank", desc: "Cold temperatures can drain phone batteries faster." },
      { name: "Small Backpack", desc: "15-20L is ideal for carrying your water and layers." },
      { name: "Camera / Spare Batteries", desc: "You'll want to capture the incredible landscapes." }
    ]
  }
];

export default function PackingListPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Java Volcano Packing List",
    "description": "Essential gear and clothing recommendations for Bromo, Ijen, and East Java volcano tours."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">The Volcano Packing List</h1>
            <p className="text-xl text-stone-300">Operational certainty starts with the right gear. Be prepared for the unique conditions of East Java&apos;s volcanic landscapes.</p>
          </motion.div>
        </div>
      </section>

      {/* Weather Context */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <Thermometer className="text-orange-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-2">Cold Temperatures</h3>
              <p className="text-stone-600 text-sm">Sunrise at Bromo and Ijen can be as cold as 5°C. Layering is key to staying comfortable as the sun rises.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <Wind className="text-orange-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-2">High Winds</h3>
              <p className="text-stone-600 text-sm">The crater rims are often windy. A windproof outer layer will significantly improve your experience.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <CloudRain className="text-orange-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-2">Variable Conditions</h3>
              <p className="text-stone-600 text-sm">Tropical weather can change quickly. Always carry a light rain jacket or poncho just in case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {packingItems.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-brand-olive text-white rounded-2xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item, iidx) => (
                    <div key={iidx} className="flex gap-6 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <CheckCircle2 className="text-orange-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What JVTO Provides */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">What JVTO Provides</h2>
              <p className="text-stone-400 mb-12">We handle the specialized gear so you don&apos;t have to carry it from home.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldCheck className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold">Professional Gas Masks</h4>
                    <p className="text-sm text-stone-500">High-quality respirators for Ijen sulfur exposure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold">Safety Helmets</h4>
                    <p className="text-sm text-stone-500">Required for certain areas of the crater descent.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold">First Aid Kits</h4>
                    <p className="text-sm text-stone-500">Carried by every JVTO guide for emergency response.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="JVTO Provided Gear"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <Info size={14} /> Pro Tip
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Wear Layers, Not One Big Coat</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            The hike up the volcano will make you sweat, but standing at the rim waiting for sunrise will be freezing. The best strategy is a moisture-wicking base layer, a warm fleece or down mid-layer, and a windproof outer shell. You can easily add or remove layers as your body temperature changes.
          </p>
          <div className="flex justify-center">
            <Link href="/travel-guide" className="text-brand-olive font-bold flex items-center gap-2 hover:text-orange-500 transition-colors">
              Back to Travel Guide <ArrowRight size={20} />
            </Link>
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
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Verify JVTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

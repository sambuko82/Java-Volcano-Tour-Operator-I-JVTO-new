// app/travel-guide/packing-list/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { CheckCircle2, Info, Wind, Thermometer, CloudRain, Mountain, Camera, Footprints, ShieldCheck, ArrowRight, Luggage } from 'lucide-react';
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
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/destinations/bromo.webp"
          alt="Packing List"
          fill
          className="object-cover scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-olive/40 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full mb-10 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl"
          >
            <Luggage size={14} className="text-brand-orange" /> Preparation <span className="text-brand-orange italic">Guide</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-9xl font-serif text-white mb-10 leading-[0.9] tracking-tight font-light"
          >
            The Volcano <br /> <span className="italic">Packing List</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide italic"
          >
            Operational certainty starts with the right gear. Be prepared for the unique conditions of East Java&apos;s volcanic landscapes.
          </motion.p>
        </div>
      </section>

      {/* Weather Context */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:shadow-brand-olive/5 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive mb-8 group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                <Thermometer size={32} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-brand-olive">Cold Temperatures</h3>
              <p className="text-stone-600 font-light leading-relaxed italic">Sunrise at Bromo and Ijen can be as cold as 5°C. Layering is key to staying comfortable as the sun rises.</p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:shadow-brand-olive/5 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive mb-8 group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                <Wind size={32} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-brand-olive">High Winds</h3>
              <p className="text-stone-600 font-light leading-relaxed italic">The crater rims are often windy. A windproof outer layer will significantly improve your experience.</p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:shadow-brand-olive/5 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive mb-8 group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                <CloudRain size={32} />
              </div>
              <h3 className="text-2xl font-serif font-light mb-4 text-brand-olive">Variable Conditions</h3>
              <p className="text-stone-600 font-light leading-relaxed italic">Tropical weather can change quickly. Always carry a light rain jacket or poncho just in case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The List */}
      <section className="py-32 bg-white rounded-t-[5rem] shadow-2xl shadow-brand-olive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {packingItems.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-6 mb-16 border-b border-brand-olive/10 pb-8">
                  <div className="w-16 h-16 bg-brand-cream text-brand-olive rounded-[2rem] flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-light text-brand-olive">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {category.items.map((item, iidx) => (
                    <div key={iidx} className="flex gap-8 p-10 bg-brand-cream rounded-[3rem] border border-stone-50 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-serif font-light mb-3 text-brand-olive">{item.name}</h4>
                        <p className="text-stone-600 font-light leading-relaxed italic">{item.desc}</p>
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
      <section className="py-40 bg-brand-olive text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-8xl font-serif font-light mb-10 leading-[0.9] tracking-tight">What JVTO <br /> <span className="italic text-brand-orange">Provides</span></h2>
              <p className="text-white/70 mb-16 font-light text-xl italic max-w-xl">We handle the specialized gear so you don&apos;t have to carry it from home.</p>
              <div className="space-y-10">
                {[
                  { title: "Professional Gas Masks", desc: "High-quality respirators for Ijen sulfur exposure." },
                  { title: "Safety Helmets", desc: "Required for certain areas of the crater descent." },
                  { title: "First Aid Kits", desc: "Carried by every JVTO guide for emergency response." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif font-light mb-2">{item.title}</h4>
                      <p className="text-white/60 font-light italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/destinations/ijen.webp"
                alt="JVTO Provided Gear"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <section className="py-40 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-12 shadow-sm">
            <Info size={14} /> Pro Tip
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-light mb-10 text-brand-olive leading-[0.9] tracking-tight">Wear Layers, <br /> <span className="italic">Not One Big Coat</span></h2>
          <p className="text-stone-600 leading-relaxed mb-16 font-light text-2xl italic">
            The hike up the volcano will make you sweat, but standing at the rim waiting for sunrise will be freezing. The best strategy is a moisture-wicking base layer, a warm fleece or down mid-layer, and a windproof outer shell. You can easily add or remove layers as your body temperature changes.
          </p>
          <div className="flex justify-center">
            <Link href="/travel-guide" className="group flex items-center gap-4 text-brand-olive font-serif text-2xl italic hover:text-brand-orange transition-all duration-500">
              <span className="border-b border-brand-olive/30 group-hover:border-brand-orange transition-all">Back to Travel Guide</span>
              <div className="w-12 h-12 rounded-full border border-brand-olive/20 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all duration-500">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

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

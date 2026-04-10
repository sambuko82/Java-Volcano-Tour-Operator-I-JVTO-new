// app/travel-guide/weather-and-closures/page.tsx
'use client';

import { motion } from 'motion/react';
import { CloudRain, Sun, Wind, AlertTriangle, CheckCircle, ExternalLink, Info, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

const seasons = [
  {
    icon: <Sun className="text-orange-500" />,
    title: 'Dry Season (April - October)',
    desc: 'The best time for volcano trekking. Clear skies and stable conditions are common.'
  },
  {
    icon: <CloudRain className="text-orange-500" />,
    title: 'Wet Season (November - March)',
    desc: 'Increased rainfall. Trails can be slippery, and views may be obscured by clouds.'
  }
];

export default function WeatherAndClosuresPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Weather & Closures",
    "description": "Real-time weather information and national park closure updates for East Java volcanoes."
  };

  return (
    <main className="min-h-screen bg-page">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-accent text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Weather & Closures: Real-Time Updates</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Volcanic conditions and weather can change rapidly. We monitor national park authorities and weather services to provide the most accurate information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seasons */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {seasons.map((season, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-10 rounded-3xl border border-border-base shadow-sm"
              >
                <div className="w-14 h-14 bg-page rounded-2xl flex items-center justify-center mb-8">
                  {season.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">{season.title}</h3>
                <p className="text-text-secondary leading-relaxed">{season.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card p-12 rounded-3xl border border-border-base shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="text-jvto-orange" size={32} />
              <h2 className="text-3xl font-display font-bold text-text-primary">National Park Closures</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-text-primary">
                    <MapPin size={20} className="text-jvto-orange" /> Bromo Tengger Semeru
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Closures can occur due to volcanic activity or extreme weather. We receive direct updates from the park authorities.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2 text-text-primary">
                    <MapPin size={20} className="text-jvto-orange" /> Ijen Crater (Kawah Ijen)
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Ijen may close for maintenance or if sulfur gas levels are too high. Regular closures occur on the first Friday of every month.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="p-6 bg-page rounded-2xl border border-border-base">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-text-primary">
                    <Info size={18} className="text-accent" /> Our Policy
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    If a destination is closed by authorities, we will offer an alternative route or a partial refund. Your safety is always our priority.
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href={SITE_CONFIG.whatsapp.waLink} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-accent/90 transition-all shadow-lg"
                  >
                    Check Current Status <ExternalLink size={18} />
                  </a>
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

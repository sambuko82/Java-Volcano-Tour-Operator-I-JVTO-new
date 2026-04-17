// components/FounderSpotlight.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck, ExternalLink, Quote } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function FounderSpotlight() {
  const founder = SITE_CONFIG.organization.founder;

  return (
    <section className="section-padding bg-jvto-navy text-white overflow-hidden">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Founder Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image 
                src={founder.image} 
                alt={founder.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jvto-navy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-jvto-orange" />
                  <span className="text-jvto-orange text-xs font-bold uppercase tracking-widest">Founder & Active Officer</span>
                </div>
                <h3 className="text-3xl font-display font-bold">{founder.name}</h3>
                <p className="text-white/60 text-sm">Bripka Agung Sambuko — Bondowoso Tourist Police (Polpar)</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white text-jvto-navy p-6 rounded-2xl shadow-xl border border-jvto-border hidden md:block max-w-[200px]">
              <ShieldCheck className="text-jvto-navy mb-2" size={32} />
              <p className="text-xs font-bold uppercase tracking-tight leading-tight">Official Safety Authority</p>
              <p className="text-[10px] text-jvto-muted mt-1">Directly monitored by Police standards.</p>
            </div>
          </motion.div>

          {/* Right: Press Context */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Verified Media Spotlight
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Real Safety, <br />
              <span className="text-jvto-orange italic">Not Just Marketing.</span>
            </h2>

            <div className="space-y-8">
              {/* Detik Article Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-red-500 font-bold text-xl tracking-tighter">detik<span className="text-white">news</span></div>
                  <a 
                    href="https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="relative mb-6 rounded-xl overflow-hidden aspect-video border border-white/10">
                  <Image 
                    src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                    alt="Detik News Article Screenshot"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <p className="micro-label bg-black/60 px-4 py-2 rounded-full border border-white/20 text-white">Article Context: Safety on Duty</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-white/10" size={40} />
                  <p className="text-lg text-white/80 italic leading-relaxed pl-4 border-l-2 border-jvto-orange">
                    &quot;The important thing is that the people who travel are safe. Since the holiday began... I have never gone home.&quot;
                  </p>
                  <p className="mt-4 micro-label text-white/40">— Bripka Agung Sambuko, Detik.com (2021)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-2xl font-display font-bold text-jvto-orange">100%</p>
                  <p className="micro-label text-white/40 mt-1">Proof-Led Operations</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-2xl font-display font-bold text-jvto-orange">24/7</p>
                  <p className="micro-label text-white/40 mt-1">Safety Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

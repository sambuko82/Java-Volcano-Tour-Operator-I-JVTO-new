// components/CrewGrid.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { BadgeCheck, Languages, Quote, ShieldCheck, ArrowRight } from 'lucide-react';
import { CREW } from '@/lib/jvtoData';
import Link from 'next/link';

export default function CrewGrid() {
  // Filter crew with photos and display priority
  const displayCrew = CREW.filter(member => member.photoUrl).sort((a, b) => a.displayPriority - b.displayPriority);
  const limitedCrew = displayCrew.slice(0, 5);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
        {limitedCrew.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all group min-w-[300px] max-w-[300px]"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image 
                src={member.photoUrl!} 
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {member.kta && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-stone-200 shadow-sm">
                  <ShieldCheck className="text-blue-600" size={14} />
                  <span className="text-[10px] font-bold text-stone-900 uppercase tracking-tight">KTA Licensed: {member.kta}</span>
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1">{member.role}</p>
                <h3 className="text-2xl font-display font-bold text-white">{member.name}</h3>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="text-jvto-lime" size={18} />
                <span className="text-xs font-bold text-jvto-navy uppercase tracking-tight">{member.archetype}</span>
              </div>

              <p className="text-jvto-muted text-sm leading-relaxed mb-6 line-clamp-3 italic">
                &quot;{member.about || member.highlights}&quot;
              </p>

              <div className="space-y-3 pt-6 border-t border-jvto-border">
                <div className="flex items-center gap-3">
                  <Languages className="text-jvto-muted" size={16} />
                  <span className="text-xs text-jvto-muted">{member.languages}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Quote className="text-jvto-muted" size={16} />
                  <span className="text-xs text-jvto-muted">{member.highlights.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* View All Card */}
        <div className="min-w-[300px] flex items-center justify-center bg-jvto-off rounded-3xl border border-dashed border-jvto-border">
          <Link href="/why-jvto/our-team" className="flex flex-col items-center gap-4 text-jvto-navy hover:text-jvto-orange transition-colors">
            <span className="text-lg font-bold">View All Crew</span>
            <ArrowRight size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

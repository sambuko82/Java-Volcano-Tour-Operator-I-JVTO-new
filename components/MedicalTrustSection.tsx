// components/MedicalTrustSection.tsx
'use client';

import { motion } from 'motion/react';
import { ShieldPlus, Activity, FileCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { MEDICAL_PARTNERS } from '@/lib/verificationData';

export default function MedicalTrustSection() {
  return (
    <section className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldPlus size={14} />
              Medical Safety Protocol
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Verified Ijen Health <br />
              <span className="text-brand-olive">Screening Partners</span>
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Since 2024, Ijen Crater requires a mandatory health screening for all hikers. JVTO doesn&apos;t just &quot;arrange&quot; it; we partner with licensed medical facilities to ensure your safety is backed by professional Indonesian medical standards.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-olive shadow-sm">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">STR Verified Doctors</h4>
                  <p className="text-sm text-stone-500">All screenings are performed by doctors with active STR (Surat Tanda Registrasi) licenses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-olive shadow-sm">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Real-time Vitals Check</h4>
                  <p className="text-sm text-stone-500">Blood pressure and respiratory health are verified before the climb to prevent volcanic gas complications.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {MEDICAL_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-stone-50 border border-stone-200 hover:border-brand-olive transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-brand-olive transition-colors">{partner.name}</h3>
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs mt-1">
                      <MapPin size={12} />
                      {partner.location}, East Java
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white text-[10px] font-bold text-stone-400 uppercase tracking-tighter border border-stone-100">
                    {partner.type}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-brand-olive text-sm font-medium">
                  <CheckCircle2 size={16} />
                  {partner.verification}
                </div>
              </motion.div>
            ))}
            
            <div className="mt-4 p-6 rounded-3xl bg-brand-olive text-white shadow-xl shadow-brand-olive/20">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">JVTO Integrity Note</p>
              <p className="text-sm leading-relaxed">
                We strictly avoid &quot;shortcut&quot; screenings. Every guest undergoes a genuine physical check at these facilities to ensure they are fit for the high-altitude volcanic environment of Mount Ijen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

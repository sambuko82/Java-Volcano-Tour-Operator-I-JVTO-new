// components/MedicalTrustSection.tsx
'use client';

import { motion } from 'motion/react';
import { ShieldPlus, Activity, FileCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { MEDICAL_PARTNERS } from '@/lib/verificationData';

export default function MedicalTrustSection() {
  return (
    <section className="py-20 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldPlus size={14} />
              Medical Safety Protocol
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Verified Ijen Health <br />
              <span className="text-brand-olive font-medium">Screening Partners</span>
            </h2>
            <p className="text-stone-600 text-base mb-8 leading-relaxed max-w-xl">
              Since 2024, Ijen Crater requires a mandatory health screening. JVTO partners with licensed medical facilities to ensure your safety is backed by professional Indonesian medical standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100">
                <FileCheck size={20} className="text-brand-olive mb-3" />
                <h4 className="font-bold text-stone-900 text-sm mb-1">STR Verified Doctors</h4>
                <p className="text-xs text-stone-500 leading-relaxed">All screenings are performed by doctors with active STR licenses.</p>
              </div>
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100">
                <Activity size={20} className="text-brand-olive mb-3" />
                <h4 className="font-bold text-stone-900 text-sm mb-1">Real-time Vitals</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Blood pressure and respiratory health are verified before the climb.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {MEDICAL_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-brand-olive transition-all group flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-brand-olive transition-colors">{partner.name}</h3>
                  <div className="flex items-center gap-1.5 text-stone-500 text-[10px] mt-0.5 uppercase tracking-wider font-medium">
                    <MapPin size={10} />
                    {partner.location}, East Java
                  </div>
                </div>
                <div className="flex items-center gap-2 text-brand-olive text-xs font-bold bg-white px-3 py-1.5 rounded-lg border border-stone-100">
                  <CheckCircle2 size={14} />
                  Verified
                </div>
              </motion.div>
            ))}
            
            <div className="mt-2 p-5 rounded-2xl bg-stone-900 text-white shadow-xl shadow-stone-900/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">JVTO Integrity Note</p>
              <p className="text-xs leading-relaxed text-stone-400">
                We strictly avoid &quot;shortcut&quot; screenings. Every guest undergoes a genuine physical check to ensure fitness for the high-altitude volcanic environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

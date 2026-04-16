// components/MedicalTrustSection.tsx
'use client';

import { motion } from 'motion/react';
import { ShieldPlus, Activity, FileCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { MEDICAL_PARTNERS } from '@/lib/verificationData';

export default function MedicalTrustSection() {
  return (
    <section className="section-padding bg-white border-y border-jvto-border">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jvto-orange/10 text-jvto-orange text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldPlus size={14} />
              Medical Safety Protocol
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Verified Ijen Health <br />
              <span className="text-jvto-navy font-medium">Screening Partners</span>
            </h2>
            <p className="text-jvto-muted text-base mb-8 leading-relaxed max-w-xl">
              Ijen access rules can require a recent local health certificate. JVTO partners with licensed medical facilities so guests can complete a real screening workflow when the rule applies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-jvto-off border border-jvto-border">
                <FileCheck size={20} className="text-jvto-navy mb-3" />
                <h4 className="font-bold text-jvto-navy text-sm mb-1">STR Verified Doctors</h4>
                <p className="text-xs text-jvto-muted leading-relaxed">Screenings are handled through medical partners and licensed local professionals.</p>
              </div>
              <div className="p-5 rounded-2xl bg-jvto-off border border-jvto-border">
                <Activity size={20} className="text-jvto-navy mb-3" />
                <h4 className="font-bold text-jvto-navy text-sm mb-1">Real-time Vitals</h4>
                <p className="text-xs text-jvto-muted leading-relaxed">Blood pressure, heart rate, and oxygen readiness can be checked before the climb.</p>
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
                className="p-5 rounded-2xl bg-jvto-off border border-jvto-border hover:border-jvto-navy transition-all group flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-jvto-navy group-hover:text-jvto-navy transition-colors">{partner.name}</h3>
                  <div className="flex items-center gap-1.5 text-jvto-muted text-[10px] mt-0.5 uppercase tracking-wider font-medium">
                    <MapPin size={10} />
                    {partner.location}, East Java
                  </div>
                </div>
                <div className="flex items-center gap-2 text-jvto-lime text-xs font-bold bg-white px-3 py-1.5 rounded-lg border border-jvto-border">
                  <CheckCircle2 size={14} />
                  Verified
                </div>
              </motion.div>
            ))}
            
            <div className="mt-2 p-5 rounded-2xl bg-jvto-navy text-white shadow-xl shadow-jvto-navy/10">
              <p className="micro-label text-jvto-orange mb-2">JVTO Integrity Note</p>
              <p className="text-xs leading-relaxed text-white/60">
                We avoid &quot;shortcut&quot; letters. When screening is required, the workflow uses a genuine local health check for the high-altitude volcanic environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

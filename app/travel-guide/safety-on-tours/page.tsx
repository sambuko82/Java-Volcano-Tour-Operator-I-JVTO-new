// app/travel-guide/safety-on-tours/page.tsx
'use client';

import { motion } from 'motion/react';
import { Shield, ShieldCheck, Lock, CheckCircle, ExternalLink, Info, AlertTriangle, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AuthorityShield from '@/components/AuthorityShield';
import { SITE_CONFIG } from '@/lib/siteConfig';

const safetyProtocols = [
  {
    icon: <Shield className="text-orange-500" />,
    title: 'Police-Informed Standards',
    desc: 'Our founder, Agung Sambuko (Mr. Sam), has documented Tourist Police duty context that informs JVTO safety discipline.'
  },
  {
    icon: <Lock className="text-orange-500" />,
    title: '100% Private Tours',
    desc: 'No mixed groups by default. Private execution gives better control over timing, pace, and route decisions.'
  },
  {
    icon: <UserCheck className="text-orange-500" />,
    title: 'Local Specialist Guides',
    desc: 'Routes are handled by local specialists with practical route knowledge and safety briefings.'
  },
  {
    icon: <AlertTriangle className="text-orange-500" />,
    title: 'Real-Time Monitoring',
    desc: 'We check official volcanic activity, weather, and access restrictions before departure and during active operations.'
  }
];

export default function SafetyOnToursPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Safety on Tours",
    "description": "Comprehensive safety standards and protocols for all Java Volcano Tour Operator expeditions."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Safety on Tours: Our Operational Standard</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Safety is not a decorative promise at JVTO; it is the operating baseline. We use private execution, official access rules, and police-informed discipline to reduce avoidable risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {safetyProtocols.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <AuthorityShield 
            title="Tourist Police-Informed Leadership"
            description="Agung Sambuko (Mr. Sam) brings Tourist Police discipline into JVTO's operating culture. This supports formal coordination habits, realistic safety boundaries, and clear escalation when conditions change."
          />

          <div className="mt-16 bg-white p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">Safety Standards Checklist</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Professional-grade gas masks for Ijen Crater',
                'Regularly inspected private AC vehicles',
                'First-aid trained local guides',
                'Real-time weather and volcanic activity monitoring',
                'Emergency evacuation protocols for all routes',
                'Strict adherence to national park regulations',
                'Verified local drivers with impeccable safety records',
                'Direct communication line with operational support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-brand-olive shrink-0" />
                  <span className="text-stone-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

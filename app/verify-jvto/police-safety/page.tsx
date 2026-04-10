// app/verify-jvto/police-safety/page.tsx
'use client';

import { motion } from 'motion/react';
import { Shield, ShieldCheck, Lock, CheckCircle, ExternalLink, UserCheck, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AuthorityShield from '@/components/AuthorityShield';
import ProofCard from '@/components/ProofCard';
import { SITE_CONFIG } from '@/lib/siteConfig';

const safetyProtocols = [
  {
    title: 'Police-Led Oversight',
    desc: 'Our founder, Agung Sambuko (Mr. Sam), is an active member of the Indonesian Tourist Police.',
    metadata: 'Verified Identity',
    href: '#'
  },
  {
    icon: <Lock className="text-orange-500" />,
    title: '100% Private Tours',
    desc: 'No mixed groups. Your safety and pace are our only priority.',
    metadata: 'Standard Protocol',
    href: '/policy/booking-payment-cancellation'
  },
  {
    icon: <AlertTriangle className="text-orange-500" />,
    title: 'Ijen Health Screening',
    desc: 'Mandatory health checks for all Ijen Crater visitors to ensure safe hiking.',
    metadata: 'Health Protocol',
    href: '/travel-guide/ijen-health-screening'
  }
];

export default function PoliceSafetyPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Police-Led Safety",
    "description": "Understand the police-led safety standards and protocols of Java Volcano Tour Operator."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Police-Led Safety: Operational Certainty</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Safety is not a marketing claim for JVTO. It is our operational foundation, led by an active member of the Indonesian Tourist Police.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {safetyProtocols.map((item, i) => (
              <ProofCard 
                key={i}
                title={item.title}
                description={item.desc}
                metadata={item.metadata}
                href={item.href}
                icon={item.icon || <UserCheck className="text-jvto-orange" />}
              />
            ))}
          </div>

          <AuthorityShield 
            title="Active Tourist Police Leadership"
            description="Agung Sambuko (Mr. Sam) brings the discipline and regulatory knowledge of the Indonesian Tourist Police to every JVTO expedition. This ensures that our tours are not only adventurous but also fully compliant with local safety laws."
          />

          <div className="mt-16 bg-card p-12 rounded-3xl border border-border-base shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-accent" size={32} />
              <h2 className="text-3xl font-display font-bold text-text-primary">Safety Standards Checklist</h2>
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
                  <CheckCircle size={20} className="text-accent shrink-0" />
                  <span className="text-text-secondary font-medium">{item}</span>
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

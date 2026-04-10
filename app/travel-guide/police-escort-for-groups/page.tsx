// app/travel-guide/police-escort-for-groups/page.tsx
'use client';

import { motion } from 'motion/react';
import { Shield, ShieldCheck, Lock, CheckCircle, ExternalLink, Info, Users, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AuthorityShield from '@/components/AuthorityShield';
import { SITE_CONFIG } from '@/lib/siteConfig';

const escortBenefits = [
  {
    icon: <Shield className="text-orange-500" />,
    title: 'Priority Access',
    desc: 'Police escorts can assist with priority access through traffic and national park checkpoints.'
  },
  {
    icon: <Lock className="text-orange-500" />,
    title: 'Enhanced Security',
    desc: 'An extra layer of security for large groups or high-profile travelers.'
  },
  {
    icon: <UserCheck className="text-orange-500" />,
    title: 'Official Oversight',
    desc: 'Ensures full compliance with local regulations and safety standards.'
  },
  {
    icon: <Users className="text-orange-500" />,
    title: 'Group Coordination',
    desc: 'Assists with the logistics and coordination of multi-vehicle convoys.'
  }
];

export default function PoliceEscortForGroupsPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Police Escort for Groups",
    "description": "Information on police escort services for large groups and high-profile travelers with Java Volcano Tour Operator."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Police Escort for Groups: Enhanced Safety</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              For large groups, high-profile travelers, or specific logistical needs, JVTO can arrange official police escorts through our founder&apos;s connections with the Indonesian Tourist Police.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {escortBenefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border-base shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <AuthorityShield 
            title="Direct Police Integration"
            description="Agung Sambuko (Mr. Sam) is an active member of the Indonesian Tourist Police. This allows JVTO to provide a level of official coordination and safety that is unique in the East Java tourism industry."
          />

          <div className="mt-16 bg-card p-12 rounded-3xl border border-border-base shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-accent" size={32} />
              <h2 className="text-3xl font-display font-bold text-text-primary">How to Arrange an Escort</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xl font-display font-bold mb-4 text-text-primary">Availability</h4>
                <p className="text-text-secondary leading-relaxed">
                  Police escorts are available upon request for groups of 10 or more people, or for private VIP tours. Advance notice of at least 2 weeks is required to coordinate with the local police department.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-display font-bold mb-4 text-text-primary">Cost & Logistics</h4>
                <p className="text-text-secondary leading-relaxed">
                  The cost for a police escort is separate from the tour package and depends on the route and duration. We handle all the paperwork and official coordination for you.
                </p>
                <div className="pt-4">
                  <a 
                    href={SITE_CONFIG.whatsapp.waLink} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
                  >
                    Inquire About Escort <ExternalLink size={18} />
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

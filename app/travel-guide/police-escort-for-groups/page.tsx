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
    title: 'Traffic Coordination',
    desc: 'When approved, escort coordination can help multi-vehicle groups move through difficult traffic or formal movement points more predictably.'
  },
  {
    icon: <Lock className="text-orange-500" />,
    title: 'Enhanced Security',
    desc: 'An extra layer of security for large groups or high-profile travelers.'
  },
  {
    icon: <UserCheck className="text-orange-500" />,
    title: 'Formal Coordination',
    desc: 'Escort requests require advance coordination, eligibility checks, and official procedures. It is not an automatic add-on.'
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Police Escort for Groups: Enhanced Safety</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              For large groups, high-profile travelers, or specific logistical needs, JVTO can help coordinate official police escort requests through formal channels. Escort approval is case-by-case and not included by default in every tour.
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
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <AuthorityShield 
            title="Formal Coordination Capacity"
            description="Agung Sambuko (Mr. Sam) is an active member of the Indonesian Tourist Police. That background helps JVTO understand the process, documentation, and timing needed for eligible escort requests."
          />

          <div className="mt-16 bg-white p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">How to Arrange an Escort</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xl font-display font-bold mb-4">Availability</h4>
                <p className="text-stone-600 leading-relaxed">
                  Police escort coordination may be requested for groups of 10 or more people, VIP movements, or complex multi-vehicle logistics. Advance notice of at least 2 weeks is recommended because approval depends on route, timing, and authority availability.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-display font-bold mb-4">Cost & Logistics</h4>
                <p className="text-stone-600 leading-relaxed">
                  The cost for a police escort is separate from the tour package and depends on the route and duration. We handle all the paperwork and official coordination for you.
                </p>
                <div className="pt-4">
                  <a 
                    href={SITE_CONFIG.whatsapp.waLink} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand-olive text-white rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg"
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

// app/verify-jvto/legal/page.tsx
'use client';

import { motion } from 'motion/react';
import { FileText, Shield, CheckCircle, ExternalLink, Scale, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProofCard from '@/components/ProofCard';
import { SITE_CONFIG } from '@/lib/siteConfig';

const legalDocs = [
  {
    title: 'NIB (Business Identification Number)',
    desc: 'The official registration of PT Java Volcano Rendezvous as a licensed tour operator in Indonesia.',
    metadata: `NIB: ${SITE_CONFIG.organization.nib}`,
    href: '#'
  },
  {
    title: 'TDUP (Tourism Business Registration)',
    desc: 'The mandatory license for operating tourism services in East Java.',
    metadata: 'License: Verified',
    href: '#'
  },
  {
    title: 'Tax Registration (NPWP)',
    desc: 'Official tax identification for PT Java Volcano Rendezvous.',
    metadata: 'Status: Active',
    href: '#'
  }
];

export default function LegalVerificationPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Legal Verification",
    "description": "Official legal documentation and business credentials for PT Java Volcano Rendezvous."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Licenses & Registration: Official Operational Proof</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We operate as a fully registered, tax-paying Indonesian corporation. Our legal status is the foundation of our operational certainty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evidence Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {legalDocs.map((doc, i) => (
              <ProofCard 
                key={i}
                title={doc.title}
                description={doc.desc}
                metadata={doc.metadata}
                href={doc.href}
                icon={<Building className="text-jvto-orange" />}
              />
            ))}
          </div>

          <div className="bg-card p-12 rounded-3xl border border-border-base shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <Scale className="text-accent" size={32} />
              <h2 className="text-3xl font-display font-bold text-text-primary">Official Company Identity</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Legal Name</h4>
                  <p className="text-xl font-display font-bold text-text-primary">{SITE_CONFIG.organization.legalName}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Brand Name</h4>
                  <p className="text-xl font-display font-bold text-text-primary">{SITE_CONFIG.organization.brandName}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Registered Office</h4>
                  <p className="text-text-secondary">
                    {SITE_CONFIG.organization.address.street}<br />
                    {SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}<br />
                    {SITE_CONFIG.organization.address.postalCode}, {SITE_CONFIG.organization.address.country}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">NIB Number</h4>
                  <p className="text-xl font-display font-bold text-text-primary">{SITE_CONFIG.organization.nib}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Business Classification</h4>
                  <p className="text-text-secondary">Tour Operator & Travel Agency Services</p>
                </div>
                <div className="pt-4">
                  <a 
                    href={SITE_CONFIG.whatsapp.waLink} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-bold hover:brightness-110 transition-all"
                  >
                    Request Full Documentation <ExternalLink size={16} />
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

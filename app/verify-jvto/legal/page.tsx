// app/verify-jvto/legal/page.tsx
'use client';

import { motion } from 'motion/react';
import { FileText, Shield, CheckCircle, ExternalLink, Scale, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProofCard from '@/components/ProofCard';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { EXTERNAL_VERIFICATION_URLS, FORENSIC_HASHES, PROOF_ASSETS } from '@/lib/verificationData';

interface LegalProofDoc {
  title: string;
  desc: string;
  metadata: string;
  href: string;
  imageUrl?: string;
  fullMetadata: Record<string, string>;
}

const legalDocs: LegalProofDoc[] = [
  {
    title: 'NIB (Business Identification Number)',
    desc: 'The official registration of PT Java Volcano Rendezvous as a licensed tour operator in Indonesia.',
    metadata: `NIB: ${SITE_CONFIG.organization.nib}`,
    href: PROOF_ASSETS.nibPdf,
    imageUrl: PROOF_ASSETS.nibPreview,
    fullMetadata: {
      'Issuer': 'OSS Indonesia / BKPM',
      'Registry': 'AHU company QR available',
      'SHA-256': FORENSIC_HASHES.nib,
    },
  },
  {
    title: 'TDUP (Tourism Business Registration)',
    desc: 'The mandatory license for operating tourism services in East Java.',
    metadata: 'License: Verified',
    href: PROOF_ASSETS.tdupPdf,
    imageUrl: PROOF_ASSETS.tdupPreview,
    fullMetadata: {
      'Business Field': 'Tourism / travel services',
      'Identifier': SITE_CONFIG.organization.nib,
      'SHA-256': FORENSIC_HASHES.tdup,
    },
  },
  {
    title: 'AHU Company Registry',
    desc: 'Government registry QR context connecting the legal entity to Indonesian corporate records.',
    metadata: 'Third-party registry',
    href: EXTERNAL_VERIFICATION_URLS.ahuCompany,
    imageUrl: undefined,
    fullMetadata: {
      'Registry': 'ahu.go.id',
      'Legal Name': SITE_CONFIG.organization.legalName,
      'Proof Role': 'Entity corroboration',
    },
  }
];

export default function LegalVerificationPage() {
  const schema = {
    "@type": ["WebPage", "AboutPage"],
    "name": "Legal Verification",
    "description": "Official legal documentation and business credentials for PT Java Volcano Rendezvous.",
    "mainEntity": {
      "@type": "Organization",
      "name": SITE_CONFIG.organization.legalName,
      "identifier": SITE_CONFIG.organization.nib,
      "url": "https://javavolcano-touroperator.com",
      "sameAs": [EXTERNAL_VERIFICATION_URLS.ahuCompany, EXTERNAL_VERIFICATION_URLS.oss]
    }
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Licenses & Registration: Official Operational Proof</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
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
                imageUrl={doc.imageUrl}
                fullMetadata={doc.fullMetadata}
                icon={<Building className="text-orange-500" />}
              />
            ))}
          </div>

          <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <Scale className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">Official Company Identity</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Legal Name</h4>
                  <p className="text-xl font-display font-bold text-stone-900">{SITE_CONFIG.organization.legalName}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Brand Name</h4>
                  <p className="text-xl font-display font-bold text-stone-900">{SITE_CONFIG.organization.brandName}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Registered Office</h4>
                  <p className="text-stone-600">
                    {SITE_CONFIG.organization.address.street}<br />
                    {SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}<br />
                    {SITE_CONFIG.organization.address.postalCode}, {SITE_CONFIG.organization.address.country}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">NIB Number</h4>
                  <p className="text-xl font-display font-bold text-stone-900">{SITE_CONFIG.organization.nib}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Business Classification</h4>
                  <p className="text-stone-600">Tour Operator & Travel Agency Services</p>
                </div>
                <div className="pt-4">
                  <a
                    href={EXTERNAL_VERIFICATION_URLS.ahuCompany}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-olive text-white rounded-full font-bold hover:bg-brand-olive/90 transition-all"
                  >
                    Open AHU Registry <ExternalLink size={16} />
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

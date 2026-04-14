// app/verify-jvto/police-safety/page.tsx
'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Shield, ShieldCheck, Lock, CheckCircle, ExternalLink, UserCheck, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd, { buildGovernmentPermitSchemas } from '@/components/JsonLd';
import AuthorityShield from '@/components/AuthorityShield';
import ProofCard from '@/components/ProofCard';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { EXTERNAL_VERIFICATION_URLS, FORENSIC_HASHES, PROOF_ASSETS } from '@/lib/verificationData';

interface SafetyProof {
  icon: ReactNode;
  title: string;
  desc: string;
  metadata: string;
  href: string;
  imageUrl?: string;
  fullMetadata: Record<string, string>;
}

const safetyProtocols: SafetyProof[] = [
  {
    icon: <UserCheck className="text-orange-500" />,
    title: 'Police-Led Oversight',
    desc: 'Our founder, Agung Sambuko (Mr. Sam), is documented in press coverage as Bripka Agung Sambuko in Tourist Police duty context.',
    metadata: 'Founder authority signal',
    href: EXTERNAL_VERIFICATION_URLS.detikPolice,
    imageUrl: undefined,
    fullMetadata: {
      'Publisher': 'Detik.com',
      'Date': '2021-03-14',
      'Proof Role': 'Duty-over-profit context',
    },
  },
  {
    icon: <Shield className="text-orange-500" />,
    title: 'SPRIN POLPAR Document',
    desc: 'Official Tourist Police assignment proof used as the hard-evidence anchor for JVTO police-safety claims.',
    metadata: 'Hard asset',
    href: PROOF_ASSETS.sprinPolparPdf,
    imageUrl: PROOF_ASSETS.sprinPolparPreview,
    fullMetadata: {
      'Document': 'SPRIN-POLPAR.pdf',
      'SHA-256': FORENSIC_HASHES.sprinPolpar,
      'Proof URL': PROOF_ASSETS.sprinPolparPdf,
    },
  },
  {
    icon: <ShieldCheck className="text-orange-500" />,
    title: 'SPRIN WAL Travel Coordination',
    desc: 'Operational assignment proof for travel and group coordination, supporting the formal coordination layer.',
    metadata: 'Hard asset',
    href: PROOF_ASSETS.sprinWalTravelPdf,
    imageUrl: PROOF_ASSETS.sprinWalTravelPreview,
    fullMetadata: {
      'Document': 'SPRIN-WAL-TRAVEL-2024-02-12.pdf',
      'SHA-256': FORENSIC_HASHES.sprinWalTravel,
      'Proof URL': PROOF_ASSETS.sprinWalTravelPdf,
    },
  },
  {
    icon: <Lock className="text-orange-500" />,
    title: '100% Private Tours',
    desc: 'No mixed groups. Your safety and pace are our only priority.',
    metadata: 'Standard Protocol',
    href: '/policy/booking-payment-cancellation',
    imageUrl: undefined,
    fullMetadata: {
      'Operating Rule': 'Private tour by default',
      'Why It Matters': 'Better timing and safety control',
      'Reference': '/policy/booking-payment-cancellation',
    },
  },
  {
    icon: <AlertTriangle className="text-orange-500" />,
    title: 'Ijen Health Screening',
    desc: 'Mandatory health checks for all Ijen Crater visitors to ensure safe hiking.',
    metadata: 'Health Protocol',
    href: '/travel-guide/ijen-health-screening',
    imageUrl: undefined,
    fullMetadata: {
      'Authority Context': 'BBKSDA Jatim / Ijen ticket terms',
      'Doctor Registry': EXTERNAL_VERIFICATION_URLS.doctorSip,
      'Guide': '/travel-guide/ijen-health-screening',
    },
  }
];

export default function PoliceSafetyPage() {
  const webPageSchema = {
    "@type": ["WebPage", "AboutPage"],
    "@id": "https://javavolcano-touroperator.com/verify-jvto/police-safety#webpage",
    "url": "https://javavolcano-touroperator.com/verify-jvto/police-safety",
    "name": "Police-Led Safety Verification — Bripka Agung Sambuko, Ditpamobvit East Java",
    "description": "Machine-readable proof of JVTO police authority: SPRIN documents, founder's GovernmentOrganization affiliation, and third-party press corroboration.",
    "isPartOf": { "@id": "https://javavolcano-touroperator.com/#website" },
    "about": [
      { "@id": "https://javavolcano-touroperator.com/#organization" },
      { "@id": "https://javavolcano-touroperator.com/#founder-agung-sambuko" },
      { "@type": "GovernmentOrganization", "name": "Ditpamobvit East Java — Indonesian National Police" }
    ],
    "mainEntity": {
      "@type": "Person",
      "@id": "https://javavolcano-touroperator.com/#founder-agung-sambuko",
      "name": "Agung Sambuko",
      "honorificPrefix": "Bripka",
      "jobTitle": SITE_CONFIG.organization.founder.title,
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Ditpamobvit East Java — Indonesian National Police (Polri)",
        "url": "https://www.polri.go.id"
      },
      "sameAs": [EXTERNAL_VERIFICATION_URLS.detikPolice, EXTERNAL_VERIFICATION_URLS.radarJemberPolpar]
    },
    "mentions": [
      {
        "@type": "NewsArticle",
        "headline": "Suka Duka Polisi Pariwisata Bondowoso Tegakkan Prokes Sambil Lawan Dingin",
        "url": EXTERNAL_VERIFICATION_URLS.detikPolice,
        "datePublished": "2021-03-14",
        "publisher": { "@type": "NewsMediaOrganization", "name": "Detik.com" }
      },
      {
        "@type": "NewsArticle",
        "headline": "Polpar Dibentuk untuk Mendukung Ijen Geopark",
        "url": EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
        "datePublished": "2021-03-24",
        "publisher": { "@type": "NewsMediaOrganization", "name": "Radar Jember / Jawa Pos" }
      }
    ]
  };

  const permitSchemas = buildGovernmentPermitSchemas();

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={[webPageSchema, ...permitSchemas]} includeOrganization={false} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Police-Led Safety: Operational Certainty</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
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
                imageUrl={item.imageUrl}
                fullMetadata={item.fullMetadata}
                icon={item.icon}
              />
            ))}
          </div>

          <AuthorityShield 
            title="Active Tourist Police Leadership"
            description="Agung Sambuko (Mr. Sam) brings Tourist Police discipline and regulatory awareness into JVTO's operating culture. This supports safer planning, formal coordination, and stronger accountability on East Java routes."
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

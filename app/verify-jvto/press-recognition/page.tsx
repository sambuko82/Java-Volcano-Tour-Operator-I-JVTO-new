// app/verify-jvto/press-recognition/page.tsx
'use client';

import { motion } from 'motion/react';
import { Newspaper, Award, ExternalLink, Globe, Star, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProofCard from '@/components/ProofCard';
import { EXTERNAL_VERIFICATION_URLS, PROOF_ASSETS, RECOGNITIONS } from '@/lib/verificationData';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function PressRecognitionPage() {
  const schema = {
    "@type": ["WebPage", "CollectionPage"],
    "name": "Press & Recognition",
    "description": "International recognition and press mentions for Java Volcano Tour Operator, structured as a proof registry rather than a logo wall.",
    "subjectOf": [
      {
        "@type": "Book",
        "name": "Stefan Loose Reiseführer Indonesien",
        "author": [
          { "@type": "Person", "name": "Moritz Jacobi" },
          { "@type": "Person", "name": "Mischa Loose" },
          { "@type": "Person", "name": "Christian Wachsmuth" }
        ],
        "isbn": "978-3-7701-7881-0",
        "publisher": "DuMont Reiseverlag",
        "url": EXTERNAL_VERIFICATION_URLS.stefanLoose,
        "image": PROOF_ASSETS.stefanLoosePage,
        "description": "Guidebook context connecting Ijen Bondowoso Homestay, Agung, and local tour arranging."
      },
      {
        "@type": "NewsArticle",
        "headline": "Suka Duka Polisi Pariwisata Bondowoso Tegakkan Prokes Sambil Lawan Dingin",
        "url": EXTERNAL_VERIFICATION_URLS.detikPolice,
        "publisher": { "@type": "NewsMediaOrganization", "name": "Detik.com" },
        "datePublished": "2021-03-14",
        "about": {
          "@type": "Person",
          "name": "Agung Sambuko",
          "alternateName": "Bripka Agung Sambuko"
        }
      },
      {
        "@type": "NewsArticle",
        "headline": "Polpar Dibentuk untuk Mendukung Ijen Geopark",
        "url": EXTERNAL_VERIFICATION_URLS.radarJemberPolpar,
        "publisher": { "@type": "NewsMediaOrganization", "name": "Radar Jember" },
        "datePublished": "2021-03-24",
        "about": {
          "@type": "Person",
          "name": "Agung Sambuko",
          "alternateName": "Bripka Agung Sambuko"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Press & Recognition</h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Verified media coverage, guidebook references, and partner context mapped to the exact trust claim each item supports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recognition Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm mb-12">
            <div className="flex items-start gap-5">
              <Newspaper className="text-brand-olive shrink-0 mt-1" size={28} />
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Beyond promises: a structured third-party registry</h2>
                <p className="text-stone-600 leading-relaxed">
                  JVTO&apos;s press and recognition page is built as a proof registry. Each reference explains what it proves: founder authority, historical continuity, student fairness, ecotourism context, or Ijen safety competence. This keeps recognition useful for cautious guests, search engines, and AI answer systems.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {RECOGNITIONS.map((item, i) => (
              <ProofCard 
                key={i}
                title={item.title}
                description={item.desc}
                metadata={item.metadata}
                href={item.href}
                imageUrl={item.imageUrl}
                quote={item.quote}
                fullMetadata={item.fullMetadata}
                icon={<Award className="text-orange-500" size={20} />}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Guardian authority',
                body: 'Detik and Radar Jember references support the public-duty context of Agung Sambuko as Bripka Agung Sambuko, not just a private business owner.',
              },
              {
                title: 'Golden thread history',
                body: 'Stefan Loose and the 2015 Booking.com award connect the current JVTO entity to the older Ijen Bondowoso Homestay service lineage.',
              },
              {
                title: 'Functional partners',
                body: 'HPWKI, ISIC, and INDECON are not logo decoration. They map to competence, fairness, and sustainability context for guests.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                <Globe className="text-brand-olive mb-5" size={24} />
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Star className="text-brand-olive" size={24} />
              <h2 className="text-2xl font-display font-bold">Independent Platform Ratings</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">TripAdvisor</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-display font-bold">{SITE_CONFIG.reputation.aggregateRating}</span>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-[10px] text-stone-500 mb-4">{SITE_CONFIG.reputation.totalReviews}+ Reviews</p>
                <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors flex items-center gap-1">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Trustpilot</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-display font-bold">Excellent</span>
                  <CheckCircle size={18} className="text-green-500" />
                </div>
                <p className="text-[10px] text-stone-500 mb-4">Verified Reviews</p>
                <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors flex items-center gap-1">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Google Maps</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-display font-bold">4.9</span>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-[10px] text-stone-500 mb-4">Verified Location</p>
                <a href={SITE_CONFIG.reputation.googleMaps} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors flex items-center gap-1">
                  View Location <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

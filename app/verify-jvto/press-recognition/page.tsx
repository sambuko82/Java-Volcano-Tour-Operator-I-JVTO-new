// app/verify-jvto/press-recognition/page.tsx
'use client';

import { motion } from 'motion/react';
import { Newspaper, Award, ExternalLink, Globe, Star, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProofCard from '@/components/ProofCard';
import { RECOGNITIONS } from '@/lib/verificationData';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function PressRecognitionPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Press & Recognition",
    "description": "International recognition and press mentions for Java Volcano Tour Operator.",
    "subjectOf": [
      {
        "@type": "Book",
        "name": "Stefan Loose Reiseführer Indonesien",
        "author": "Moritz Jacobi, Mischa Loose, Christian Wachsmuth",
        "isbn": "978-3-7701-7881-0",
        "publisher": "DuMont Reiseverlag",
        "description": "Features Ijen Bondowoso Homestay (JVTO) as a recommended accommodation and tour provider."
      },
      {
        "@type": "NewsArticle",
        "headline": "Suka Duka Polisi Pariwisata Bondowoso Tegakkan Prokes Sambil Lawan Dingin",
        "url": "https://news.detik.com/berita-jawa-timur/d-5492690/suka-duka-polisi-pariwisata-bondowoso-tegakkan-prokes-sambil-lawan-dingin",
        "publisher": "Detik.com",
        "datePublished": "2021-03-14"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-page">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-accent text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">Press & Recognition</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Verified media coverage and international travel authority recognition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recognition Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                icon={<Award className="text-jvto-orange" size={20} />}
              />
            ))}
          </div>

          <div className="bg-card p-8 rounded-3xl border border-border-base shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Star className="text-accent" size={24} />
              <h2 className="text-2xl font-display font-bold text-text-primary">Independent Platform Ratings</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-page/50 rounded-2xl border border-border-base/50">
                <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">TripAdvisor</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-display font-bold text-text-primary">{SITE_CONFIG.reputation.aggregateRating}</span>
                  <div className="flex text-jvto-orange">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-[10px] text-text-secondary mb-4">{SITE_CONFIG.reputation.totalReviews}+ Reviews</p>
                <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" className="text-xs font-bold text-accent hover:text-jvto-orange transition-colors flex items-center gap-1">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 bg-page/50 rounded-2xl border border-border-base/50">
                <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Trustpilot</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-display font-bold text-text-primary">Excellent</span>
                  <CheckCircle size={18} className="text-green-500" />
                </div>
                <p className="text-[10px] text-text-secondary mb-4">Verified Reviews</p>
                <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" className="text-xs font-bold text-accent hover:text-jvto-orange transition-colors flex items-center gap-1">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 bg-page/50 rounded-2xl border border-border-base/50">
                <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Google Maps</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-display font-bold text-text-primary">4.9</span>
                  <div className="flex text-jvto-orange">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-[10px] text-text-secondary mb-4">Verified Location</p>
                <a href={SITE_CONFIG.reputation.googleMaps} target="_blank" className="text-xs font-bold text-accent hover:text-jvto-orange transition-colors flex items-center gap-1">
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

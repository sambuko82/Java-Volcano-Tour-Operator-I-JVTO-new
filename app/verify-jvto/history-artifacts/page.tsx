// app/verify-jvto/history-artifacts/page.tsx
'use client';

import { motion } from 'motion/react';
import { History, FileText, Image as ImageIcon, CheckCircle, ExternalLink, Archive } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ProofCard from '@/components/ProofCard';
import { ARTIFACTS, TIMELINE } from '@/lib/verificationData';

export default function HistoryArtifactsPage() {
  const schema = {
    "@type": "WebPage",
    "name": "History & Artifacts",
    "description": "The historical continuity and foundational artifacts of Java Volcano Tour Operator."
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
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">History & Artifacts</h1>
            <p className="text-lg text-stone-300 leading-relaxed">
              Documented operational excellence and historical continuity since 2016.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artifacts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ARTIFACTS.map((item, i) => (
              <ProofCard 
                key={i}
                title={item.title}
                description={item.desc}
                metadata={item.metadata}
                href={item.href}
                imageUrl={item.imageUrl}
                quote={item.quote}
                icon={<Archive className="text-orange-500" size={20} />}
              />
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-brand-olive" size={24} />
              <h2 className="text-2xl font-display font-bold">The JVTO Timeline</h2>
            </div>
            
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-xl font-display font-bold text-brand-olive w-20 shrink-0">{item.year}</div>
                  <div className="pt-0.5">
                    <h4 className="text-lg font-display font-bold mb-1">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
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

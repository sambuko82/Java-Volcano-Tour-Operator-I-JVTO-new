// app/travel-guide/faq/page.tsx
'use client';

import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, ExternalLink, Info, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

const faqs = [
  {
    category: 'Booking & Payment',
    questions: [
      {
        q: 'How do I book a tour with JVTO?',
        a: 'You can book by contacting us via WhatsApp or email. We will verify availability and send you a detailed itinerary and price quote. A deposit is required to secure your booking.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers (IDR), international wire transfers (Wise), and major credit cards via secure payment links.'
      },
      {
        q: 'Is the price all-inclusive?',
        a: 'Yes, our prices are all-inclusive of private transport, English-speaking guide, all entrance fees, and safety gear. Only personal expenses and meals (unless specified) are excluded.'
      }
    ]
  },
  {
    category: 'Safety & Health',
    questions: [
      {
        q: 'Is it safe to visit Mount Bromo and Ijen Crater?',
        a: 'Volcano travel is never risk-free. JVTO reduces avoidable risk through private execution, official access checks, route monitoring, and a safety culture shaped by Tourist Police discipline.'
      },
      {
        q: 'What is the Ijen health screening?',
        a: 'Ijen access rules can require a recent local medical certificate. We can assist with a real clinic visit in Bondowoso or Banyuwangi when the requirement applies.'
      },
      {
        q: 'Do you provide gas masks for Ijen?',
        a: 'Yes, we provide professional-grade, regularly sanitized gas masks for all our guests at Ijen Crater.'
      }
    ]
  },
  {
    category: 'Logistics & Packing',
    questions: [
      {
        q: 'What should I pack for the tour?',
        a: 'Warm layers (for sunrise), hiking shoes with good grip, a raincoat, and a small daypack are essential. See our full packing list for more details.'
      },
      {
        q: 'Where do the tours start and end?',
        a: 'Most tours start and end in Surabaya or Malang. We also offer drop-offs in Ketapang for those continuing to Bali.'
      },
      {
        q: 'Are the tours private?',
        a: 'Yes, all JVTO tours are 100% private. We do not run mixed-group tours.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schema = {
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(cat => cat.questions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    })))
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Frequently Asked Questions: Travel Guide</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Find answers to the most common questions about booking, safety, and logistics for your East Java expedition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-8 text-brand-olive border-b border-stone-200 pb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = `${catIndex}-${faqIndex}`;
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
                      >
                        <span className="font-bold text-stone-900">{faq.q}</span>
                        {isOpen ? <ChevronUp size={20} className="text-brand-olive" /> : <ChevronDown size={20} className="text-stone-400" />}
                      </button>
                      {isOpen && (
                        <div className="px-8 pb-6 text-stone-600 leading-relaxed border-t border-stone-50 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-16 bg-brand-olive text-white p-12 rounded-3xl text-center shadow-xl">
            <MessageCircle size={48} className="mx-auto mb-6 text-orange-400" />
            <h2 className="text-3xl font-display font-bold mb-4">Still Have Questions?</h2>
            <p className="text-stone-300 mb-8 max-w-xl mx-auto">
              Our team is available 24/7 via WhatsApp to provide real-time support and answer any specific questions you may have.
            </p>
            <a 
              href={SITE_CONFIG.whatsapp.waLink} 
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-olive rounded-full font-bold hover:bg-stone-100 transition-all shadow-lg"
            >
              Contact Operational Support <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

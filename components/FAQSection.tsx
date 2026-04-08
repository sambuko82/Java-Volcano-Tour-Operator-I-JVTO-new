'use client';

import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQSection({ title = "Frequently Asked Questions", items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-brand-cream rounded-full text-[10px] font-bold text-brand-olive uppercase tracking-[0.2em] mb-6">
            Common Inquiries
          </div>
          <h2 className="text-5xl md:text-7xl font-serif">{title}</h2>
        </div>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`rounded-[32px] overflow-hidden transition-all duration-500 border ${openIndex === index ? 'bg-brand-cream border-brand-olive/20 shadow-xl shadow-brand-olive/5' : 'bg-white border-stone-100'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-10 text-left transition-colors"
              >
                <span className="font-serif text-xl md:text-2xl text-brand-ink pr-8">{item.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-olive text-white rotate-180' : 'bg-stone-50 text-stone-400'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-10 pb-10 text-stone-500 font-light leading-relaxed text-lg"
                >
                  <div className="pt-4 border-t border-brand-olive/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

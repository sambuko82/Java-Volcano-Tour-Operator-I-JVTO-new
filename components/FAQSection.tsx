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
    <section className="section-padding bg-page">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="micro-label inline-block px-6 py-2 bg-card rounded-full mb-6 border border-border-base">
            Common Inquiries
          </div>
          <h2 className="text-5xl md:text-7xl text-text-primary font-serif">{title}</h2>
        </div>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`rounded-[32px] overflow-hidden transition-all duration-500 border ${openIndex === index ? 'bg-card border-accent/20 shadow-xl shadow-accent/5' : 'bg-card border-border-base'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-10 text-left transition-colors"
              >
                <span className="text-xl md:text-2xl text-text-primary pr-8 font-serif font-bold">{item.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-page text-text-secondary'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-10 pb-10 text-text-secondary font-light leading-relaxed text-lg"
                >
                  <div className="pt-4 border-t border-border-base">
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

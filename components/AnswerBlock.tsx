'use client';

import { motion } from 'motion/react';

interface AnswerBlockProps {
  text?: string;
  title?: string;
  question?: string;
  answer?: string;
  icon?: React.ReactNode;
  metadata?: string;
}

export default function AnswerBlock({ 
  text, 
  title = "Quick Summary",
  question,
  answer,
  icon,
  metadata
}: AnswerBlockProps) {
  // If question/answer pattern is used
  if (question && answer) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card p-8 rounded-3xl border border-border-base shadow-sm hover:shadow-md transition-all"
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-page flex items-center justify-center shrink-0 border border-border-base">
              {icon}
            </div>
          )}
          <div>
            <h4 className="text-xl font-serif font-bold text-text-primary mb-3">{question}</h4>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{answer}</p>
            {metadata && (
              <p className="micro-label border-t border-border-base pt-4">
                {metadata}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Fallback to original text/title pattern
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-jvto-orange/5 border-l-4 border-jvto-orange p-6 my-8 rounded-r-2xl shadow-sm"
    >
      <h3 className="text-sm font-bold uppercase tracking-wider text-jvto-orange mb-2">{title}</h3>
      <p className="text-text-primary text-lg leading-relaxed font-medium italic">
        {text}
      </p>
    </motion.div>
  );
}

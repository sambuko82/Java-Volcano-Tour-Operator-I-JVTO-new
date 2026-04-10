// components/ProofCard.tsx
'use client';

import { ExternalLink, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

interface ProofCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  metadata?: string;
  imageUrl?: string;
  quote?: string;
  fullMetadata?: Record<string, string>;
}

export default function ProofCard({ title, description, href, icon, metadata, imageUrl, quote, fullMetadata }: ProofCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white forensic:bg-forensic-card p-8 rounded-3xl border border-jvto-border forensic:border-forensic-accent/20 shadow-[var(--shadow-jvto)] hover:shadow-[var(--shadow-jvto-hover)] transition-all group overflow-hidden flex flex-col h-full"
    >
      {imageUrl && (
        <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 forensic:opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-jvto-navy/10 group-hover:bg-transparent transition-colors" />
        </div>
      )}
      <div className="w-12 h-12 bg-jvto-off forensic:bg-forensic-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-jvto-orange/10 forensic:group-hover:bg-forensic-accent/20 transition-colors">
        {icon || <FileText size={24} className="text-jvto-orange forensic:text-forensic-accent" />}
      </div>
      <h3 className="text-xl font-display font-bold mb-2 flex items-center gap-2 forensic:text-forensic-accent">
        {title} <CheckCircle size={16} className="text-jvto-lime forensic:text-forensic-accent opacity-0 group-hover:opacity-100 transition-all" />
      </h3>
      <p className="text-jvto-muted forensic:text-forensic-text text-sm leading-relaxed mb-4">{description}</p>
      
      {quote && (
        <div className="mb-4 p-4 bg-jvto-off forensic:bg-forensic-bg/50 rounded-2xl border-l-4 border-jvto-orange forensic:border-forensic-accent italic text-jvto-navy forensic:text-forensic-text/80 text-xs leading-relaxed">
          &quot;{quote}&quot;
        </div>
      )}
 
      {fullMetadata && (
        <div className="mb-6 space-y-2">
          {Object.entries(fullMetadata).map(([key, value]) => (
            <div key={key} className="flex justify-between text-[10px] border-b border-jvto-border forensic:border-forensic-accent/10 pb-1">
              <span className="text-jvto-muted forensic:text-forensic-muted font-bold uppercase tracking-widest">{key}</span>
              <span className="text-jvto-navy forensic:text-forensic-text font-medium">{value}</span>
            </div>
          ))}
        </div>
      )}
 
      <div className="mt-auto">
        {metadata && <p className="micro-label forensic:text-forensic-muted mb-4">{metadata}</p>}
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-sm font-bold text-jvto-navy forensic:text-forensic-accent hover:text-jvto-orange forensic:hover:brightness-110 transition-colors"
        >
          Verify Proof <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

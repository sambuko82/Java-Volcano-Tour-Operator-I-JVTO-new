// components/AuthorityShield.tsx
'use client';

import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

interface AuthorityShieldProps {
  title?: string;
  description?: string;
}

export default function AuthorityShield({ 
  title = "Operated by Tourist Police", 
  description = "Your tour is monitored directly by the safety standards of the East Java Tourist Police Unit." 
}: AuthorityShieldProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-sm mx-auto mt-6"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border-base bg-card p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:border-accent/30">
        
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/5 opacity-50"></div>
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-md">
              <ShieldCheck size={24} />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-bold text-text-primary">
              {title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">
              {description}
            </p>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Lic: 1102230032918
              </span>
              <span className="inline-flex items-center rounded-full bg-accent/5 px-2 py-1 text-[10px] font-medium text-accent ring-1 ring-inset ring-accent/20">
                Officer Led
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-border-base pt-3 text-center">
          <Link href="/verify-jvto" className="group inline-flex items-center text-xs font-medium text-accent hover:text-accent/80">
            Verify Our Credentials
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

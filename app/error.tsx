// app/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-jvto-off flex items-center justify-center px-4 py-32">
      <div className="max-w-2xl w-full text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="w-24 h-24 bg-jvto-orange/10 rounded-full flex items-center justify-center mx-auto text-jvto-orange">
            <AlertTriangle size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-jvto-navy leading-tight">
            Operational <span className="italic text-jvto-orange">Interruption</span>
          </h1>
          <p className="text-jvto-muted max-w-md mx-auto font-light leading-relaxed">
            An unexpected error has occurred. Our systems have logged this event for review.
          </p>
          {error.digest && (
            <p className="text-[10px] font-mono text-jvto-muted uppercase tracking-widest">
              Error ID: {error.digest}
            </p>
          )}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-12 py-5 bg-jvto-navy text-white rounded-md font-bold uppercase tracking-widest text-[10px] hover:bg-jvto-navy-mid transition-all flex items-center justify-center gap-3 shadow-xl shadow-jvto-navy/20"
          >
            <RefreshCw size={16} /> Attempt Recovery
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-12 py-5 border border-jvto-border text-jvto-navy rounded-md font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all flex items-center justify-center gap-3"
          >
            <Home size={16} /> Return to Basecamp
          </Link>
        </div>
      </div>
    </div>
  );
}

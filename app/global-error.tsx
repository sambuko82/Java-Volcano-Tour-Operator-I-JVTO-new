// app/global-error.tsx
'use client';

import { Inter, Raleway } from 'next/font/google';
import { motion } from 'motion/react';
import { AlertOctagon, RefreshCw } from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-display',
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased bg-[#F6F5F2] text-[#0D1B2A]">
        <div className="min-h-screen flex items-center justify-center px-4 py-32">
          <div className="max-w-2xl w-full text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="w-24 h-24 bg-[#E8650A]/10 rounded-full flex items-center justify-center mx-auto text-[#E8650A]">
                <AlertOctagon size={48} />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#0D1B2A] leading-tight">
                Critical <span className="italic text-[#E8650A]">System Failure</span>
              </h1>
              <p className="text-[#6B7280] max-w-md mx-auto font-light leading-relaxed">
                A critical error has occurred at the root level. We recommend refreshing the application.
              </p>
            </motion.div>

            <button
              onClick={() => reset()}
              className="px-12 py-5 bg-[#0D1B2A] text-white rounded-md font-bold uppercase tracking-widest text-[10px] hover:bg-[#1C2E40] transition-all flex items-center justify-center gap-3 mx-auto shadow-xl shadow-[#0D1B2A]/20"
            >
              <RefreshCw size={16} /> Reset Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

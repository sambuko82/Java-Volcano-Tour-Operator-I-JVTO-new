// app/not-found.tsx
'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="max-w-2xl w-full text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h1 className="text-[12rem] font-serif leading-none text-brand-olive/10 select-none">404</h1>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ink -mt-20">Path Not Found</h2>
            <p className="text-stone-500 max-w-md mx-auto font-light leading-relaxed">
              The trail you&apos;re looking for seems to have been covered by volcanic ash. Let&apos;s get you back to safety.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/"
              className="px-12 py-4 bg-brand-olive text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-olive/90 transition-all shadow-xl shadow-brand-olive/20"
            >
              Back to Basecamp
            </Link>
            <Link 
              href="/tours"
              className="px-12 py-4 border border-stone-200 text-brand-ink rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-100 transition-all"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

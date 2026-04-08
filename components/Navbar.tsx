'use client';

import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currency, changeCurrency, currencies } = useCurrency();
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className={`text-3xl font-serif tracking-tighter transition-colors ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
          {SITE_CONFIG.organization.brandName}
        </Link>
        
        <div className={`hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-stone-500' : 'text-white/70'}`}>
          <Link href="/tours" className="hover:text-brand-olive transition-colors">Tours</Link>
          <Link href="/destinations" className="hover:text-brand-olive transition-colors">Destinations</Link>
          <Link href="/why-jvto" className="hover:text-brand-olive transition-colors">Why JVTO</Link>
          <Link href="/verify-jvto" className="hover:text-brand-olive transition-colors">Verify</Link>
          <Link href="/travel-guide" className="hover:text-brand-olive transition-colors">Guide</Link>
          <Link href="/contact" className="hover:text-brand-olive transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Currency Toggle */}
          <div className="relative hidden sm:block">
            <button 
              onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${isScrolled ? 'border-stone-200 text-stone-600 hover:bg-stone-50' : 'border-white/20 text-white/80 hover:bg-white/10'}`}
            >
              <Globe size={12} /> {currency}
            </button>
            
            {isCurrencyMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-2xl shadow-2xl border border-stone-100 py-2 overflow-hidden">
                {currencies.map(c => (
                  <button
                    key={c}
                    onClick={() => {
                      changeCurrency(c);
                      setIsCurrencyMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-[10px] font-bold uppercase tracking-widest hover:bg-stone-50 transition-colors ${currency === c ? 'text-brand-olive bg-brand-cream' : 'text-stone-600'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href={SITE_CONFIG.whatsapp.waLink} target="_blank" className={`hidden md:block px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${isScrolled ? 'bg-brand-olive text-white hover:bg-brand-olive/90' : 'bg-white text-brand-ink hover:bg-stone-100'}`}>
            Book Now
          </Link>
          <button 
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 p-6 flex flex-col space-y-4 shadow-xl"
        >
          <Link href="/tours" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Tours</Link>
          <Link href="/destinations" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Destinations</Link>
          <Link href="/why-jvto" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Why JVTO</Link>
          <Link href="/verify-jvto" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Verify</Link>
          <Link href="/travel-guide" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Guide</Link>
          <Link href="/contact" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href={SITE_CONFIG.whatsapp.waLink} target="_blank" className="bg-brand-olive text-white px-6 py-3 rounded-full font-bold text-center">Book Now</Link>
        </motion.div>
      )}
    </nav>
  );
}

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-page/80 backdrop-blur-md border-b border-border-base py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container-width flex items-center justify-between">
        <Link href="/" className={`text-3xl font-display font-bold tracking-tighter transition-colors ${isScrolled ? 'text-text-primary' : 'text-white'}`}>
          {SITE_CONFIG.organization.brandName}
        </Link>
        
        <div className={`hidden lg:flex space-x-8 micro-label transition-colors ${isScrolled ? 'text-text-primary' : 'text-white/80'}`}>
          <Link href="/tours" className="hover:text-jvto-orange transition-colors">Tours</Link>
          <Link href="/destinations" className="hover:text-jvto-orange transition-colors">Destinations</Link>
          <Link href="/why-jvto" className="hover:text-jvto-orange transition-colors">Why JVTO</Link>
          <Link href="/travel-guide" className="hover:text-jvto-orange transition-colors">Travel Guide</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/verify-jvto" 
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all border ${isScrolled ? 'border-accent text-accent hover:bg-accent/5' : 'border-white/50 text-white hover:bg-white/10'}`}
          >
            ✓ Verify Us
          </Link>

          <Link 
            href={SITE_CONFIG.whatsapp.waLink} 
            target="_blank" 
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all bg-[#25D366] text-white hover:brightness-110 shadow-lg shadow-[#25D366]/20`}
          >
            WhatsApp
          </Link>
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-text-primary' : 'text-white'}`}
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
          className="md:hidden absolute top-full left-0 w-full bg-page border-b border-border-base p-6 flex flex-col space-y-4 shadow-xl"
        >
          <Link href="/tours" className="text-lg font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Tours</Link>
          <Link href="/destinations" className="text-lg font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Destinations</Link>
          <Link href="/why-jvto" className="text-lg font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Why JVTO</Link>
          <Link href="/travel-guide" className="text-lg font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Travel Guide</Link>
          <Link href="/verify-jvto" className="text-lg font-medium text-accent" onClick={() => setIsMobileMenuOpen(false)}>✓ Verify Us</Link>
          <Link href={SITE_CONFIG.whatsapp.waLink} target="_blank" className="bg-[#25D366] text-white px-6 py-3 rounded-md font-bold text-center">WhatsApp</Link>
        </motion.div>
      )}
    </nav>
  );
}

'use client';

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { NAVIGATION_CLUSTERS, PRIMARY_NAV_ITEMS } from '@/lib/siteOrchestration';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-jvto-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container-width flex items-center justify-between">
        <Link href="/" className={`text-3xl font-display font-bold tracking-tighter transition-colors ${isScrolled ? 'text-jvto-navy' : 'text-white'}`}>
          {SITE_CONFIG.organization.brandName}
        </Link>
        
        <div className={`hidden lg:flex space-x-8 micro-label transition-colors ${isScrolled ? 'text-jvto-navy' : 'text-white/80'}`}>
          {PRIMARY_NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-jvto-orange transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/verify-jvto" 
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all border ${isScrolled ? 'border-jvto-lime text-jvto-lime hover:bg-jvto-lime/5' : 'border-jvto-lime/50 text-jvto-lime hover:bg-jvto-lime/10'}`}
          >
            ✓ Verify Us
          </Link>

          <Link 
            href={SITE_CONFIG.whatsapp.waLink} 
            target="_blank" 
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all bg-jvto-wa-green text-white hover:brightness-110 shadow-lg shadow-jvto-wa-green/20`}
          >
            WhatsApp
          </Link>
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-jvto-navy' : 'text-white'}`}
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
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-jvto-border p-6 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="grid gap-8">
            {NAVIGATION_CLUSTERS.map((cluster) => (
              <div key={cluster.id}>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-jvto-muted mb-3">{cluster.label}</p>
                <div className="grid gap-3">
                  {cluster.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-jvto-navy"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href={SITE_CONFIG.whatsapp.waLink}
              target="_blank"
              className="bg-jvto-wa-green text-white px-6 py-3 rounded-md font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WhatsApp
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

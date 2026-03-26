'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, 3000); // 3 seconds delay as per blueprint

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={SITE_CONFIG.whatsapp.waLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-6 z-50 md:bottom-8 md:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

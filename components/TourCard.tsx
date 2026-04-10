'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Calendar, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCurrency } from '@/hooks/useCurrency';
import InquiryForm from '@/components/InquiryForm';

import { Tour } from '@/lib/jvtoData';

interface TourCardProps {
  tour: Tour;
  index: number;
}

export default function TourCard({ tour, index }: TourCardProps) {
  const { formatPrice } = useCurrency();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-card rounded-[40px] overflow-hidden border border-border-base hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col"
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 max-w-[80%]">
            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-sm text-text-primary">
              {tour.origin}
            </div>
            <div className="bg-accent text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
              <ShieldCheck size={12} className="text-jvto-orange" /> Police-Led
            </div>
            {tour.slug.includes('ijen') && (
              <div className="bg-jvto-orange text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
                <Activity size={12} /> Health Check
              </div>
            )}
          </div>
        </div>
        
        <div className="p-10 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-jvto-orange">
              <Star size={14} fill="currentColor" />
              <span className="text-[10px] font-bold text-text-primary uppercase tracking-widest">{tour.rating} Rating</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">
              {tour.bestFor}
            </span>
          </div>
          
          <Link href={`/tours/${tour.slug}`}>
            <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-jvto-orange transition-colors cursor-pointer leading-tight text-text-primary">{tour.name}</h3>
          </Link>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between pt-8 border-t border-border-base mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Duration</span>
                <span className="text-sm font-light text-text-primary flex items-center gap-2"><Calendar size={14} /> {tour.duration}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary block mb-1">From</span>
                <div className="text-2xl font-display font-bold text-jvto-orange">{formatPrice(tour.priceFrom)}</div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full bg-accent text-white py-4 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center justify-center gap-3 group/btn shadow-lg shadow-accent/20"
            >
              Book Inquiry <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>

      <InquiryForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        tourTitle={tour.name}
      />
    </>
  );
}

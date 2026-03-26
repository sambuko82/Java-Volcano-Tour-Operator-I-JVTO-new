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
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {tour.origin}
            </div>
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
              <ShieldCheck size={10} /> Police-Led
            </div>
            {tour.slug.includes('ijen') && (
              <div className="bg-brand-olive text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Activity size={10} /> Health Check
              </div>
            )}
            <div className="bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {tour.physicality}
            </div>
          </div>
        </div>
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-orange-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold text-stone-900">{tour.rating}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              {tour.bestFor}
            </span>
          </div>
          <Link href={`/tours/${tour.slug}`}>
            <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-olive transition-colors cursor-pointer">{tour.name}</h3>
          </Link>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between pt-6 border-t border-stone-100 mb-6">
              <div className="flex items-center gap-4 text-stone-500 text-sm">
                <span className="flex items-center gap-1"><Calendar size={16} /> {tour.duration}</span>
              </div>
              <div className="text-xl font-bold text-brand-olive">{formatPrice(tour.priceFrom)}</div>
            </div>
            
            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full bg-stone-100 text-stone-900 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
            >
              Book Inquiry <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
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

'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Target, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TOURS, Tour } from '@/lib/jvtoData';
import TourCard from './TourCard';

export default function RouteSelector() {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    origin: '',
    goal: '',
    duration: '',
  });

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => {
      const matchesOrigin = !filters.origin || tour.origin.toLowerCase() === filters.origin.toLowerCase();
      
      let matchesGoal = true;
      if (filters.goal === 'bromo') matchesGoal = tour.destinations.includes('mount-bromo') && !tour.destinations.includes('ijen-crater');
      if (filters.goal === 'ijen') matchesGoal = tour.destinations.includes('ijen-crater') && !tour.destinations.includes('mount-bromo');
      if (filters.goal === 'both') matchesGoal = tour.destinations.includes('mount-bromo') && tour.destinations.includes('ijen-crater');
      if (filters.goal === 'family') matchesGoal = tour.slug.includes('safari');

      let matchesDuration = true;
      const days = parseInt(tour.duration.split(' ')[0]);
      if (filters.duration === 'short') matchesDuration = days <= 2;
      if (filters.duration === 'medium') matchesDuration = days >= 3 && days <= 4;
      if (filters.duration === 'long') matchesDuration = days >= 5;

      return matchesOrigin && matchesGoal && matchesDuration;
    }).slice(0, 3);
  }, [filters]);

  const handleFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setFilters({ origin: '', goal: '', duration: '' });
    setStep(1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="bg-brand-cream/30 rounded-[4rem] p-8 md:p-20 border border-stone-100 shadow-sm overflow-hidden relative">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-100">
          <motion.div 
            className="h-full bg-brand-olive"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 text-brand-olive mb-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-50">
                  <MapPin size={24} />
                </div>
                <span className="font-bold uppercase tracking-[0.3em] text-xs">Step 01</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">Where are you starting your journey?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Surabaya', 'Bali'].map((origin) => (
                  <button
                    key={origin}
                    onClick={() => handleFilter('origin', origin)}
                    className="group flex items-center justify-between p-10 bg-white rounded-[32px] border border-stone-100 hover:border-brand-olive hover:shadow-xl hover:shadow-brand-olive/5 transition-all text-left"
                  >
                    <div>
                      <div className="text-2xl font-serif text-stone-900 mb-2">{origin}</div>
                      <div className="text-sm text-stone-400 font-light">{origin === 'Surabaya' ? 'Juanda International Airport (SUB)' : 'Ngurah Rai International Airport (DPS)'}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-brand-olive group-hover:text-white group-hover:border-brand-olive transition-all">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 text-brand-olive mb-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-50">
                  <Target size={24} />
                </div>
                <span className="font-bold uppercase tracking-[0.3em] text-xs">Step 02</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">What is your main goal?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: 'bromo', label: 'Mount Bromo', desc: 'Sunrise & Volcanic Peaks' },
                  { id: 'ijen', label: 'Ijen Crater', desc: 'Blue Fire & Turquoise Lake' },
                  { id: 'both', label: 'The Full Circuit', desc: 'Bromo + Ijen + Waterfalls' },
                  { id: 'family', label: 'Family Friendly', desc: 'Safari + Bromo (Easy Pace)' },
                ].map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => handleFilter('goal', goal.id)}
                    className="group p-10 bg-white rounded-[32px] border border-stone-100 hover:border-brand-olive hover:shadow-xl hover:shadow-brand-olive/5 transition-all text-left h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xl font-serif text-stone-900 mb-3">{goal.label}</div>
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">{goal.desc}</div>
                    </div>
                    <ArrowRight className="mt-8 text-stone-200 group-hover:text-brand-olive transition-colors" size={20} />
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="text-stone-400 hover:text-brand-olive text-sm font-medium transition-colors flex items-center gap-2">
                <ArrowRight size={16} className="rotate-180" /> Back to previous step
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-4 text-brand-olive mb-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-50">
                  <Clock size={24} />
                </div>
                <span className="font-bold uppercase tracking-[0.3em] text-xs">Step 03</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">How much time do you have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'short', label: '1-2 Days', desc: 'Quick Highlights' },
                  { id: 'medium', label: '3-4 Days', desc: 'The Classic Experience' },
                  { id: 'long', label: '5+ Days', desc: 'The Ultimate Discovery' },
                ].map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => handleFilter('duration', duration.id)}
                    className="group p-10 bg-white rounded-[32px] border border-stone-100 hover:border-brand-olive hover:shadow-xl hover:shadow-brand-olive/5 transition-all text-left h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xl font-serif text-stone-900 mb-3">{duration.label}</div>
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">{duration.desc}</div>
                    </div>
                    <ArrowRight className="mt-8 text-stone-200 group-hover:text-brand-olive transition-colors" size={20} />
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="text-stone-400 hover:text-brand-olive text-sm font-medium transition-colors flex items-center gap-2">
                <ArrowRight size={16} className="rotate-180" /> Back to previous step
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-16"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-brand-olive">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-50">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="font-bold uppercase tracking-[0.3em] text-xs">Recommended Routes</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">We found the perfect fit for you.</h2>
                </div>
                <button 
                  onClick={reset}
                  className="px-8 py-4 rounded-full border border-stone-200 text-stone-600 font-bold hover:bg-white hover:border-brand-olive hover:text-brand-olive transition-all shadow-sm"
                >
                  Reset Selector
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour, idx) => (
                    <TourCard key={tour.slug} tour={tour} index={idx} />
                  ))
                ) : (
                  <div className="col-span-full py-32 text-center bg-white rounded-[40px] border border-dashed border-stone-200">
                    <p className="text-stone-400 font-light text-xl mb-8">No exact match found for your specific filters.</p>
                    <button 
                      onClick={reset}
                      className="text-brand-olive font-bold underline underline-offset-8 hover:text-brand-olive/80 transition-colors"
                    >
                      Try broader filters
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

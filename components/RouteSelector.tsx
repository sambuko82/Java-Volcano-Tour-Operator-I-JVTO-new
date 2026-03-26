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
      <div className="bg-stone-50 rounded-[3rem] p-8 md:p-16 border border-stone-200 shadow-sm overflow-hidden relative">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-stone-200">
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-brand-olive mb-2">
                <MapPin size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Step 01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">Where are you starting your journey?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Surabaya', 'Bali'].map((origin) => (
                  <button
                    key={origin}
                    onClick={() => handleFilter('origin', origin)}
                    className="group flex items-center justify-between p-8 bg-white rounded-2xl border border-stone-200 hover:border-brand-olive hover:shadow-md transition-all text-left"
                  >
                    <div>
                      <div className="text-xl font-bold text-stone-900 mb-1">{origin}</div>
                      <div className="text-sm text-stone-500">{origin === 'Surabaya' ? 'Juanda International Airport (SUB)' : 'Ngurah Rai International Airport (DPS)'}</div>
                    </div>
                    <ArrowRight className="text-stone-300 group-hover:text-brand-olive group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-brand-olive mb-2">
                <Target size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Step 02</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">What is your main goal?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: 'bromo', label: 'Mount Bromo', desc: 'Sunrise & Volcanic Peaks' },
                  { id: 'ijen', label: 'Ijen Crater', desc: 'Blue Fire & Turquoise Lake' },
                  { id: 'both', label: 'The Full Circuit', desc: 'Bromo + Ijen + Waterfalls' },
                  { id: 'family', label: 'Family Friendly', desc: 'Safari + Bromo (Easy Pace)' },
                ].map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => handleFilter('goal', goal.id)}
                    className="group p-8 bg-white rounded-2xl border border-stone-200 hover:border-brand-olive hover:shadow-md transition-all text-left"
                  >
                    <div className="text-lg font-bold text-stone-900 mb-2">{goal.label}</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">{goal.desc}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="text-stone-400 hover:text-stone-600 text-sm font-medium">← Back to previous step</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-brand-olive mb-2">
                <Clock size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Step 03</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">How much time do you have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'short', label: '1-2 Days', desc: 'Quick Highlights' },
                  { id: 'medium', label: '3-4 Days', desc: 'The Classic Experience' },
                  { id: 'long', label: '5+ Days', desc: 'The Ultimate Discovery' },
                ].map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => handleFilter('duration', duration.id)}
                    className="group p-8 bg-white rounded-2xl border border-stone-200 hover:border-brand-olive hover:shadow-md transition-all text-left"
                  >
                    <div className="text-lg font-bold text-stone-900 mb-2">{duration.label}</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">{duration.desc}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="text-stone-400 hover:text-stone-600 text-sm font-medium">← Back to previous step</button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-olive">
                    <CheckCircle2 size={24} />
                    <span className="font-bold uppercase tracking-widest text-sm">Recommended Routes</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">We found the perfect fit for you.</h2>
                </div>
                <button 
                  onClick={reset}
                  className="px-6 py-3 rounded-full border border-stone-200 text-stone-600 font-bold hover:bg-stone-100 transition-all"
                >
                  Reset Selector
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour, idx) => (
                    <TourCard key={tour.slug} tour={tour} index={idx} />
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-stone-200">
                    <p className="text-stone-500 font-medium mb-4">No exact match found for your specific filters.</p>
                    <button 
                      onClick={reset}
                      className="text-brand-olive font-bold underline underline-offset-4"
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

// app/tours/from-surabaya/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, ArrowRight, Activity, Users, Scale, Star, Plane } from 'lucide-react';
import TourCard from '@/components/TourCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { TOURS } from '@/lib/jvtoData';

const surabayaFaqs = [
  {
    question: "Where do you pick up in Surabaya?",
    answer: "We offer private pick-ups from Juanda International Airport (SUB), Surabaya Gubeng or Pasar Turi train stations, and any hotel in the Surabaya city area. Your private driver will be waiting with a clear sign."
  },
  {
    question: "How long is the drive to Bromo from Surabaya?",
    answer: "The private transfer from Surabaya to the Bromo area typically takes 3 to 4 hours, depending on traffic. We optimize our routes for efficiency and guest comfort."
  }
];

export default function SurabayaHubPage() {
  const surabayaTours = TOURS.filter(t => t.origin.includes('Surabaya'));

  const schema = {
    "@type": "WebPage",
    "name": "Private Tours from Surabaya",
    "description": "The most efficient private routes to Mount Bromo and Ijen Crater starting from Surabaya."
  };

  return (
    <main className="min-h-screen bg-page">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-accent text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Private Tours from Surabaya: The Gateway to Bromo & Ijen</h1>
            <p className="text-xl text-white/70">The most efficient private routes to East Java&apos;s primary volcano landscape, starting from the region&apos;s main transport hub.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Start in Surabaya? */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Why Start in Surabaya?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Surabaya is the logical starting point for most East Java expeditions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-page p-10 rounded-3xl border border-border-base shadow-sm">
              <Clock className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Efficient Multi-Day Routes</h3>
              <p className="text-text-secondary text-sm">Starting in Surabaya allows for a logical progression from Bromo to Ijen, minimizing backtrack time and maximizing your experience.</p>
            </div>
            <div className="bg-page p-10 rounded-3xl border border-border-base shadow-sm">
              <Plane className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Primary Transport Hub</h3>
              <p className="text-text-secondary text-sm">Juanda International Airport (SUB) and major train stations make Surabaya the most accessible entry point for international travelers.</p>
            </div>
            <div className="bg-page p-10 rounded-3xl border border-border-base shadow-sm">
              <MapPin className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Best for Bromo & Ijen</h3>
              <p className="text-text-secondary text-sm">Most of our signature 3-day and 4-day routes are optimized to begin in Surabaya, providing the smoothest logistics for the &apos;Big Two&apos; volcanoes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Surabaya Routes */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Featured Surabaya Routes</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Our most popular private tours starting from the Surabaya hub.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surabayaTours.map((tour, index) => (
              <TourCard key={tour.slug} tour={tour} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Logistics: Surabaya to the Volcanoes */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Logistics: Surabaya to the Volcanoes</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">What to expect during your private transfer from Surabaya.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="text-jvto-orange mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-text-primary">Private Transfer Times</h3>
              <p className="text-text-secondary text-sm">Surabaya to Bromo: 3-4 hours. Surabaya to Ijen (Direct): 6-7 hours. We use comfortable, air-conditioned private vehicles.</p>
            </div>
            <div>
              <MapPin className="text-jvto-orange mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-text-primary">Pick-up & Drop-off Points</h3>
              <p className="text-text-secondary text-sm">We offer full flexibility for pick-up and drop-off at any airport, train station, or hotel in the Surabaya area.</p>
            </div>
            <div>
              <ShieldCheck className="text-jvto-orange mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-text-primary">Operational Certainty</h3>
              <p className="text-text-secondary text-sm">Our drivers are trained for these specific routes, ensuring safe and efficient navigation through East Java&apos;s traffic and terrain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={surabayaFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-jvto-orange text-white px-10 py-4 rounded-full font-bold hover:bg-jvto-orange/90 transition-all shadow-lg shadow-jvto-orange/20 flex items-center gap-2">
              Contact the Team <ArrowRight size={20} />
            </Link>
            <Link href="/tours" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              All Private Tours
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

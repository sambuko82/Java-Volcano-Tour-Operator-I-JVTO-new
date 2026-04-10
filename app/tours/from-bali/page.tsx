// app/tours/from-bali/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, ArrowRight, Activity, Users, Scale, Star, Ship } from 'lucide-react';
import TourCard from '@/components/TourCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { TOURS } from '@/lib/jvtoData';

const baliFaqs = [
  {
    question: "Where do you pick up in Bali?",
    answer: "We offer private pick-ups from any hotel in the Bali area, including Ubud, Seminyak, Canggu, Kuta, and Uluwatu. Your private driver will be waiting at your hotel lobby."
  },
  {
    question: "How long is the transfer from Bali to Ijen?",
    answer: "The private transfer from Bali to the Ijen area typically takes 4 to 6 hours, including the ferry crossing from Gilimanuk to Ketapang. We handle all ferry logistics and fees."
  }
];

export default function BaliHubPage() {
  const baliTours = TOURS.filter(t => t.origin.includes('Bali'));

  const schema = {
    "@type": "WebPage",
    "name": "Private Tours from Bali",
    "description": "Seamless private transfers and volcano tours from Bali to Ijen Crater and Mount Bromo."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Private Tours from Bali: Seamless Access to Ijen & Bromo</h1>
            <p className="text-xl text-white/70">Direct private transfers and volcano expeditions from Bali to the heart of East Java&apos;s volcanic landscape.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Start in Bali? */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Why Start in Bali?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Bali is a popular starting point for those looking to experience Ijen Crater first.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-page p-10 rounded-3xl border border-border-base shadow-sm">
              <MapPin className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Direct Ijen Access</h3>
              <p className="text-text-secondary text-sm">Starting in Bali provides the most direct route to Ijen Crater, making it ideal for guests who want to prioritize the blue fire experience.</p>
            </div>
            <div className="bg-page p-10 rounded-3xl border border-border-base shadow-sm">
              <Users className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Seamless Private Transfers</h3>
              <p className="text-text-secondary text-sm">We provide door-to-door private transfers from your Bali hotel to your East Java accommodation, including the ferry crossing.</p>
            </div>
            <div className="bg-page p-10 rounded-3xl border border-border-base shadow-sm">
              <Clock className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Best for Ijen-First Routes</h3>
              <p className="text-text-secondary text-sm">Most of our Bali-origin tours are optimized to visit Ijen first, followed by Bromo and a drop-off in Surabaya or a return to Bali.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bali Routes */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Featured Bali Routes</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Our most popular private tours starting from the Bali hub.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {baliTours.map((tour, index) => (
              <TourCard key={tour.slug} tour={tour} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Logistics: Bali to East Java */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Logistics: Bali to East Java</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">What to expect during your private transfer from Bali.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Ship className="text-jvto-orange mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-text-primary">Ferry & Transfer Times</h3>
              <p className="text-text-secondary text-sm">Bali to Ijen: 4-6 hours. This includes the 45-minute ferry crossing from Gilimanuk to Ketapang. We handle all ferry logistics.</p>
            </div>
            <div>
              <MapPin className="text-jvto-orange mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-text-primary">Pick-up & Drop-off Points</h3>
              <p className="text-text-secondary text-sm">We offer full flexibility for pick-up at any hotel in Bali and drop-off in East Java or a return to Bali.</p>
            </div>
            <div>
              <ShieldCheck className="text-jvto-orange mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-text-primary">Operational Certainty</h3>
              <p className="text-text-secondary text-sm">Our drivers are experienced with the Bali-to-Java route, ensuring a smooth and safe transition between islands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={baliFaqs} />

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

// app/tours/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Search, Filter, ShieldCheck, Users, Scale, ArrowRight, MapPin, Clock, Activity, Heart, Star } from 'lucide-react';
import TourCard from '@/components/TourCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { TOURS } from '@/lib/jvtoData';

const toursFaqs = [
  {
    question: "Are these tours really private?",
    answer: "Yes. We do not offer shared or group tours. Every booking is 100% private, ensuring your safety, comfort, and a personalized pace. You have full control over the logistics and the experience."
  },
  {
    question: "What is included in the price?",
    answer: "Our pricing is all-inclusive. This means private transport, professional guides, entrance fees, accommodation (for multi-day tours), and mandatory health screenings for Ijen are all covered. There are no hidden fees or commissions."
  }
];

export default function ToursPage() {
  const toursSchema = {
    "@type": "ItemList",
    "numberOfItems": TOURS.length,
    "itemListElement": TOURS.map((tour, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": tour.name,
        "description": tour.shortDesc,
        "image": tour.image,
        "offers": {
          "@type": "Offer",
          "price": tour.priceFrom,
          "priceCurrency": "IDR"
        }
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={toursSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Private East Java Tours: Surabaya & Bali Departures</h1>
            <p className="text-xl text-stone-300">Hand-picked private experiences designed for safety, flexibility, and real local impact. Led by an active Tourist Police officer.</p>
          </motion.div>
        </div>
      </section>

      {/* Start Your Route: Choose Your Origin Hub */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Start Your Route: Choose Your Origin Hub</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Select your starting point to see the most efficient private routes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/tours/from-surabaya" className="group bg-white p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <MapPin className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Private Tours from Surabaya</h3>
              <p className="text-stone-600 text-sm mb-8">Best for Bromo & Ijen. Direct access to East Java&apos;s primary transport hub with efficient multi-day routes.</p>
              <div className="text-brand-olive font-bold flex items-center gap-2 group-hover:text-orange-500 transition-colors">
                View Surabaya Hub <ArrowRight size={16} />
              </div>
            </Link>
            <Link href="/tours/from-bali" className="group bg-white p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <MapPin className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Private Tours from Bali</h3>
              <p className="text-stone-600 text-sm mb-8">Best for Ijen & Bromo. Seamless private transfers from Bali to the heart of East Java&apos;s volcano landscape.</p>
              <div className="text-brand-olive font-bold flex items-center gap-2 group-hover:text-orange-500 transition-colors">
                View Bali Hub <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The JVTO Tour Standard */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">The JVTO Tour Standard</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Every JVTO tour is built on three non-negotiable pillars.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Users className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">100% Private Logistics</h3>
              <p className="text-stone-600 text-sm">No shared groups, no mixed transport. You control the pace and the focus of your journey.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <ShieldCheck className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Police-Led Safety Oversight</h3>
              <p className="text-stone-600 text-sm">Led by an active Tourist Police officer, our safety protocols are authority-backed and non-negotiable.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Scale className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">All-Inclusive Pricing</h3>
              <p className="text-stone-600 text-sm">No hidden fees, no commissions. What you see is what you pay for a complete private experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Duration & Route Type */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Duration */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                <Clock className="text-orange-500" /> Browse by Duration
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/tours/day-trips" className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-orange-500 transition-all group">
                  <h4 className="font-bold mb-1 group-hover:text-orange-500">Day Trips</h4>
                  <p className="text-xs text-stone-500">Optimized for tight schedules</p>
                </Link>
                <Link href="/tours/multi-day" className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-orange-500 transition-all group">
                  <h4 className="font-bold mb-1 group-hover:text-orange-500">Multi-Day Expeditions</h4>
                  <p className="text-xs text-stone-500">Deep immersion into the landscape</p>
                </Link>
              </div>
            </div>
            {/* Route Type */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                <Activity className="text-orange-500" /> Browse by Route Type
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/tours/volcano" className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-orange-500 transition-all group">
                  <h4 className="font-bold mb-1 group-hover:text-orange-500">Volcano</h4>
                  <p className="text-xs text-stone-500">Bromo & Ijen focus</p>
                </Link>
                <Link href="/tours/waterfall" className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-orange-500 transition-all group">
                  <h4 className="font-bold mb-1 group-hover:text-orange-500">Waterfall</h4>
                  <p className="text-xs text-stone-500">Tumpak Sewu focus</p>
                </Link>
                <Link href="/tours/hybrid" className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-orange-500 transition-all group">
                  <h4 className="font-bold mb-1 group-hover:text-orange-500">Hybrid</h4>
                  <p className="text-xs text-stone-500">The full expedition</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Private Tours */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Featured Private Tours</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Our most popular routes, optimized for operational certainty.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS.map((tour, index) => (
              <TourCard key={tour.slug} tour={tour} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Your Route */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">How to Choose Your Route</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Three factors to consider when planning your East Java expedition.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Consider Your Time</h3>
              <p className="text-stone-600 text-sm">Multi-day tours provide a deeper experience, while day trips are optimized for tight schedules.</p>
            </div>
            <div>
              <Activity className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Consider Your Fitness</h3>
              <p className="text-stone-600 text-sm">Ijen and Tumpak Sewu require moderate physical effort. Bromo is more accessible for all fitness levels.</p>
            </div>
            <div>
              <MapPin className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Consider Your Origin</h3>
              <p className="text-stone-600 text-sm">Surabaya is the most efficient hub for Bromo, while Bali is a popular starting point for Ijen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Certainty Checklist */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Operational Certainty Checklist</h2>
            <p className="text-stone-600">Three steps to ensure your tour is built on authority, not guesswork.</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Your Operator</h3>
                <p className="text-stone-600">Check for a real NIB license and police-led safety oversight. Don&apos;t book with unlicensed brokers.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Your Health</h3>
                <p className="text-stone-600">Ensure you have a real medical check at a certified clinic for Ijen. Your safety depends on it.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Verify Your Route</h3>
                <p className="text-stone-600">Confirm your private logistics and safety decision boundaries. Know who makes the call if things change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={toursFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Contact the Team <ArrowRight size={20} />
            </Link>
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Verify JVTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

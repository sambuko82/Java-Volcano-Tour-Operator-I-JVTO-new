// app/tours/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Search, Filter, ShieldCheck, Users, Scale, ArrowRight, MapPin, Clock, Activity, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import TourCard from '@/components/TourCard';
import RouteSelector from '@/components/RouteSelector';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { TOURS } from '@/lib/jvtoData';
import { CheckCircle2 } from 'lucide-react';

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
    <main className="min-h-screen bg-page">
      <JsonLd data={toursSchema} />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/tours.webp"
          alt="Private Tours"
          fill
          className="object-cover scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-accent/80 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full mb-10 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl"
          >
            <ShieldCheck size={14} className="text-jvto-orange" /> Private Expedition Routes
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-9xl font-serif text-white mb-10 leading-[0.9] tracking-tight"
          >
            The Art of <br /> <span className="italic font-light text-jvto-orange">Route Selection</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Optimized East Java logistics for private travelers. Select your origin, compare routes, and verify operational standards.
          </p>
        </div>
      </section>

      {/* 1. Decision Selector (Route Selector) */}
      <section id="selector" className="py-32 bg-card rounded-b-[64px] shadow-2xl shadow-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-text-primary">Find Your <span className="italic">Perfect Route</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light text-lg">Use our interactive selector to find the private tour that fits your schedule and adventure goals.</p>
          </div>
          <RouteSelector />
        </div>
      </section>

      {/* 2. Route Comparison */}
      <section className="py-32 bg-page border-y border-border-base/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-text-primary">Route <span className="italic">Comparison</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light text-lg">Different volcanoes, different experiences. Choose the route that fits your adventure style.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px] bg-card rounded-[40px] overflow-hidden shadow-xl shadow-accent/5">
              <thead>
                <tr className="border-b border-border-base bg-page/50">
                  <th className="py-10 px-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">Feature</th>
                  <th className="py-10 px-8 text-2xl font-serif text-text-primary">Bromo Midnight</th>
                  <th className="py-10 px-8 text-2xl font-serif text-text-primary">Ijen Blue Fire</th>
                  <th className="py-10 px-8 text-2xl font-serif text-text-primary">The Full Expedition</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                <tr className="border-b border-border-base hover:bg-page/30 transition-colors">
                  <td className="py-10 px-8 font-bold text-[10px] uppercase tracking-widest text-text-primary">Primary Focus</td>
                  <td className="py-10 px-8 text-text-secondary">Sunrise & Crater Rim</td>
                  <td className="py-10 px-8 text-text-secondary">Blue Fire & Acid Lake</td>
                  <td className="py-10 px-8 text-text-secondary">The Full East Java Circuit</td>
                </tr>
                <tr className="border-b border-border-base hover:bg-page/30 transition-colors">
                  <td className="py-10 px-8 font-bold text-[10px] uppercase tracking-widest text-text-primary">Physicality</td>
                  <td className="py-10 px-8 text-text-secondary">Easy to Moderate</td>
                  <td className="py-10 px-8 text-text-secondary">Moderate to High</td>
                  <td className="py-10 px-8 text-text-secondary">High (Multi-day)</td>
                </tr>
                <tr className="border-b border-border-base hover:bg-page/30 transition-colors">
                  <td className="py-10 px-8 font-bold text-[10px] uppercase tracking-widest text-text-primary">Logistics</td>
                  <td className="py-10 px-8 text-text-secondary">100% Private Jeep</td>
                  <td className="py-10 px-8 text-text-secondary">Private Car + Guide</td>
                  <td className="py-10 px-8 text-text-secondary">Full Private Crew</td>
                </tr>
                <tr className="border-b border-border-base hover:bg-page/30 transition-colors">
                  <td className="py-10 px-8 font-bold text-[10px] uppercase tracking-widest text-text-primary">Safety System</td>
                  <td className="py-10 px-8 text-text-secondary">Police Oversight</td>
                  <td className="py-10 px-8 text-text-secondary">Medical + Gas Mask</td>
                  <td className="py-10 px-8 text-text-secondary">Full Safety Protocol</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Featured Tours / Decision Selector Result */}
      <section className="py-32 bg-card rounded-[64px] my-12 mx-4 shadow-2xl shadow-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-text-primary">Private <span className="italic">Packages</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light text-lg">Our most requested private packages, built for operational certainty.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TOURS.map((tour, index) => (
              <TourCard key={tour.slug} tour={tour} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Strip (JVTO Tour Standard) */}
      <section className="py-24 bg-accent text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-jvto-orange shadow-xl">
                <ShieldCheck size={40} />
              </div>
              <div>
                <p className="text-3xl font-serif">The JVTO Standard</p>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Police-Led Execution</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-jvto-orange" /> 100% Private</div>
              <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-jvto-orange" /> Licensed PT</div>
              <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-jvto-orange" /> Medical Proof</div>
            </div>
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all shadow-lg">
              Verify Credentials
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Compact Policy Summary */}
      <section className="py-32 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight text-text-primary">Transparent <br /> <span className="italic">Booking Logic</span></h2>
              <div className="space-y-12">
                {[
                  { title: "Inquiry & Consultation", desc: "Discuss your route with our team to ensure it fits your goals." },
                  { title: "Secure Deposit", desc: "Pay via secure channels to confirm your private vehicle and crew." },
                  { title: "Operational Confirmation", desc: "Receive your detailed itinerary and crew contact information." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-10">
                    <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center text-accent shrink-0 font-serif text-2xl border border-border-base shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-2xl font-serif mb-2 text-text-primary">{step.title}</p>
                      <p className="text-text-secondary text-base font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-16 rounded-[60px] border border-border-base shadow-xl shadow-accent/5">
              <h3 className="text-4xl font-serif mb-8 text-text-primary">Refund & <span className="italic">Reschedule</span></h3>
              <p className="text-text-secondary text-base font-light mb-12 leading-relaxed">
                We understand that travel plans change. Our policies are designed to be fair and transparent, with clear timelines for refunds and reschedule options in case of volcanic activity.
              </p>
              <Link href="/policy" className="inline-flex items-center gap-4 text-accent font-bold text-xs uppercase tracking-widest group">
                Read Full Policy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Departure Logic (Origin Hub) */}
      <section className="py-32 bg-card rounded-t-[64px] shadow-2xl shadow-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-text-primary">Departure <span className="italic">Hubs</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light text-lg">Select your starting point to see the most efficient private routes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link href="/tours/from-surabaya" className="group bg-page/30 p-16 rounded-[60px] border border-border-base hover:bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500">
              <div className="w-20 h-20 bg-card rounded-3xl flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                <MapPin size={40} />
              </div>
              <h3 className="text-4xl font-serif mb-4 text-text-primary">Surabaya Hub</h3>
              <p className="text-text-secondary text-base font-light mb-12 leading-relaxed">Best for Bromo & Ijen. Direct access to East Java&apos;s primary transport hub with efficient multi-day routes.</p>
              <div className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-4 group-hover:gap-6 transition-all">
                View Surabaya Hub <ArrowRight size={18} />
              </div>
            </Link>
            <Link href="/tours/from-bali" className="group bg-page/30 p-16 rounded-[60px] border border-border-base hover:bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500">
              <div className="w-20 h-20 bg-card rounded-3xl flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                <MapPin size={40} />
              </div>
              <h3 className="text-4xl font-serif mb-4 text-text-primary">Bali Hub</h3>
              <p className="text-text-secondary text-base font-light mb-12 leading-relaxed">Best for Ijen & Bromo. Seamless private transfers from Bali to the heart of East Java&apos;s volcano landscape.</p>
              <div className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-4 group-hover:gap-6 transition-all">
                View Bali Hub <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Deeper Planning Content (How to Choose Your Route) */}
      <section className="py-32 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-text-primary">Planning Your <span className="italic">Expedition</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light text-lg">Three factors to consider when planning your East Java journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: <Clock size={48} />, title: "Consider Your Time", desc: "Multi-day tours provide a deeper experience, while day trips are optimized for tight schedules." },
              { icon: <Activity size={48} />, title: "Consider Your Fitness", desc: "Ijen and Tumpak Sewu require moderate physical effort. Bromo is more accessible for all fitness levels." },
              { icon: <MapPin size={48} />, title: "Consider Your Origin", desc: "Surabaya is the most efficient hub for Bromo, while Bali is a popular starting point for Ijen." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-accent mb-10 bg-card p-8 rounded-[32px] shadow-sm border border-border-base">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-serif mb-4 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary text-base font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ + CTA */}
      <FAQSection title="Operational Certainty: Frequently Asked Questions" items={toursFaqs} />

      <section className="py-32 bg-accent text-white rounded-t-[64px] shadow-2xl shadow-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-12">Ready for Operational <span className="italic">Certainty?</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/contact" className="bg-white text-accent px-14 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-100 transition-all flex items-center gap-4 group shadow-xl">
              Contact the Team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-14 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all shadow-lg">
              Verify JVTO
            </Link>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}

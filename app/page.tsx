// app/page.tsx
'use client';

import { motion } from 'motion/react';
import { ChevronRight, MapPin, Calendar, Users, Star, ArrowRight, ShieldCheck, CheckCircle2, Award, History, Landmark, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import AnswerBlock from '@/components/AnswerBlock';
import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import FounderSpotlight from '@/components/FounderSpotlight';
import TrustpilotWidget from '@/components/TrustpilotWidget';
import CrewGrid from '@/components/CrewGrid';
import MedicalTrustSection from '@/components/MedicalTrustSection';
import TrustSummary from '@/components/TrustSummary';
import RouteSelector from '@/components/RouteSelector';
import ContactSection from '@/components/ContactSection';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { TOURS, DESTINATIONS } from '@/lib/jvtoData';

const homeFaqs = [
  {
    question: "Is JVTO a legitimate company?",
    answer: "Yes. JVTO operates under PT Java Volcano Rendezvous and uses a publicly verifiable business identity. We also maintain a dedicated proof library so travelers can review our trust layers before paying a deposit."
  },
  {
    question: "Are all your tours private?",
    answer: "Yes. All JVTO tours are private by default. You will have your own vehicle, your own driver, and your own guide or team, without being mixed into a shared group."
  },
  {
    question: "Is the Ijen health screening included?",
    answer: "Yes. For routes that include Ijen, the health screening is arranged as part of the trip flow so guests do not have to navigate the process alone."
  },
  {
    question: "What happens if weather or volcanic conditions change the plan?",
    answer: "Safety comes first. If access conditions change, JVTO uses an alternative-route approach and communicates clearly so guests are not left without structure or support."
  },
  {
    question: "How can I verify JVTO before booking?",
    answer: "You can review our legal, historical, press, and safety-related proof through the Verify JVTO section before you make any payment."
  }
];

export default function Home() {
  const homeSchema = {
    "@type": ["TravelAgency", "LocalBusiness", "WebSite", "WebPage"],
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };

  // Get first 3 tours for featured section
  const featuredTours = TOURS.slice(0, 3);
  // Get first 4 destinations for featured section
  const featuredDestinations = DESTINATIONS.slice(0, 4);

  return (
    <main className="min-h-screen">
      <JsonLd data={homeSchema} />
      <TrustSummary />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="Java Volcano"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full mb-8 text-sm font-bold tracking-widest uppercase"
          >
            <ShieldCheck size={16} /> Tourist Police-Led Private Tours
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            Tourist Police-Led Private Volcano Tours in East Java
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-stone-200 mb-10 max-w-3xl mx-auto"
          >
            Private Bromo, Ijen, and East Java journeys for travelers who want more than beautiful views. JVTO combines local execution, documented legitimacy, and clear safety systems so you can plan with confidence before you book.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/tours" className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group">
              Explore Private Tours <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/verify-jvto" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              Verify JVTO
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Authority Hub - Evidence at a Glance */}
      <section className="bg-stone-900 py-12 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex text-orange-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-white font-bold text-lg">{SITE_CONFIG.reputation.aggregateRating}★ Reputation</p>
              <p className="text-stone-500 text-xs uppercase tracking-widest">112+ Verified Reviews</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 pl-0 md:pl-8">
              <ShieldCheck className="text-orange-500 mb-2" size={24} />
              <p className="text-white font-bold text-lg">Police-Led Safety</p>
              <p className="text-stone-500 text-xs uppercase tracking-widest">Active Officer Oversight</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 pl-0 md:pl-8">
              <CheckCircle2 className="text-orange-500 mb-2" size={24} />
              <p className="text-white font-bold text-lg">100% Private</p>
              <p className="text-stone-500 text-xs uppercase tracking-widest">No Mixed Groups</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 pl-0 md:pl-8">
              <Landmark className="text-orange-500 mb-2" size={24} />
              <p className="text-white font-bold text-lg">Licensed PT</p>
              <p className="text-stone-500 text-xs uppercase tracking-widest">NIB: {SITE_CONFIG.organization.nib}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Trustpilot Social Proof */}
      <section id="reviews" className="py-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <TrustpilotWidget />
        </div>
      </section>

      {/* 2.3 Medical Trust Section - Ijen Health Screening */}
      <MedicalTrustSection />

      {/* 2.5 Founder Spotlight - Visual Proof of Authority */}
      <FounderSpotlight />

      {/* 2.6 The People Behind the Proof - Crew Grid */}
      <section id="crew" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Meet the Crew</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">The JVTO experience is delivered by real local people whose names, roles, and strengths matter to the quality of the trip. Every member is verified and licensed.</p>
          </div>
          <CrewGrid />
        </div>
      </section>

      {/* 3. Trust Pillars - Evidence Dashboard & Structured Proof */}
      <section id="trust-pillars" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Operational Certainty</h2>
              <p className="text-stone-600">In a landscape of freelancers and brokers, JVTO provides documented legitimacy. We don&apos;t ask for trust; we provide the library for you to audit it yourself.</p>
            </div>
            <Link href="/verify-jvto" className="bg-brand-olive text-white px-10 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all flex items-center gap-2 shrink-0">
              Open Proof Library <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Legal Identity", desc: "PT Java Volcano Rendezvous registration and NIB artifacts.", icon: <Landmark />, meta: "Verified PT" },
              { title: "Police Context", desc: "Agung Sambuko's active Tourist Police credentials and safety role.", icon: <ShieldCheck />, meta: "Authority" },
              { title: "Press & Guides", desc: "Stefan Loose and independent travel media recognitions.", icon: <Award />, meta: "Recognition" },
              { title: "History", desc: "Operational continuity and digital footprint since 2016.", icon: <History />, meta: "Continuity" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{item.meta}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnswerBlock 
              question="Why should I trust JVTO with my deposit?"
              answer="JVTO operates with a 'Trust First' philosophy. We are a legally registered PT (Perseroan Terbatas) in Indonesia, founded by a member of the Tourist Police. We provide our NIB (Business Identification Number) and legal documents upfront so you can verify us through official government channels before paying a single dollar."
              icon={<ShieldCheck className="text-brand-olive" size={24} />}
              metadata="NIB: 0220001393513 (PT Java Volcano Rendezvous)"
            />
            <AnswerBlock 
              question="How do you ensure safety at Ijen Crater?"
              answer="Safety is our core product. We provide mandatory health screenings with licensed medical partners, professional-grade gas masks, and a team trained in volcanic risk management. Our founder's background in the Tourist Police means our safety protocols are not just 'guidelines'—they are police-standard procedures."
              icon={<Activity className="text-brand-olive" size={24} />}
              metadata="Verified Medical Screening Partners"
            />
            <AnswerBlock 
              question="Are your tours truly private?"
              answer="Yes. We do not operate 'shared' tours where you are mixed with strangers. Every JVTO booking gets its own dedicated vehicle, driver, and guide. This ensures we can maintain strict safety standards and provide a personalized experience that shared tours simply cannot match."
              icon={<Users className="text-brand-olive" size={24} />}
              metadata="100% Private Logistics Guarantee"
            />
            <AnswerBlock 
              question="What happens if my trip is cancelled?"
              answer="We maintain a transparent cancellation policy. If a trip is cancelled due to volcanic activity or government closures, we work with you to reschedule or provide a fair refund based on our documented terms. Our legal registration ensures you have recourse that 'freelance' guides cannot offer."
              icon={<CheckCircle2 className="text-brand-olive" size={24} />}
              metadata="Documented Refund & Reschedule Policy"
            />
          </div>
        </div>
      </section>

      {/* 4. Route Selection & Comparison */}
      <section id="tours" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Find Your Perfect Route</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Use our interactive selector to find the private tour that fits your schedule, starting point, and adventure goals. Every JVTO trip is private by default, with your own vehicle and crew.</p>
        </div>
        
        <RouteSelector />
      </section>

      {/* 5. Ijen Health Proof Rail */}
      <section className="py-12 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-brand-olive">
                <Activity size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">Mandatory Ijen Health Screening</h3>
                <p className="text-stone-600 text-sm">Every Ijen tour includes a professional medical check-up as required by local regulations.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-lg border border-stone-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <CheckCircle2 size={14} className="text-brand-olive" /> Licensed Doctors
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-stone-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <CheckCircle2 size={14} className="text-brand-olive" /> Official Certificates
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-stone-200 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <CheckCircle2 size={14} className="text-brand-olive" /> Insurance Ready
              </div>
            </div>
            <Link href="/travel-guide/ijen-health-screening" className="text-brand-olive font-bold text-sm underline underline-offset-4">
              Learn about Ijen Safety
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Top Destinations</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">From the blue fire of Ijen to the thousand streams of Tumpak Sewu.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {featuredDestinations.map((dest, index) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
                >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl md:text-2xl font-display font-bold">{dest.name}</h3>
                    <p className="text-sm text-stone-300">{dest.highlights[0]}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - What Our Guests Say */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">What Our Guests Say</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Trust should never rely on self-written praise. That is why JVTO points travelers to independent review platforms and real guest experiences rather than hiding behind anonymous testimonials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <h3 className="text-xl font-bold mb-4">Independent Review Platforms</h3>
              <p className="text-stone-600 text-sm mb-4">When guests describe JVTO, they consistently mention the same things: private comfort, safe driving, clear logistics, helpful guides, and support that feels personal rather than transactional.</p>
              <div className="flex gap-4">
                <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" rel="noopener noreferrer" className="text-brand-olive font-bold text-sm underline">TripAdvisor</a>
                <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" rel="noopener noreferrer" className="text-brand-olive font-bold text-sm underline">Trustpilot</a>
              </div>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <h3 className="text-xl font-bold mb-4">Read Verified Reviews</h3>
              <p className="text-stone-600 text-sm">We encourage you to read our history on independent platforms to understand the consistency of our service.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                country: "Australia",
                text: "The most professional tour I've ever taken. The police-led safety aspect really gave us peace of mind during the midnight Bromo hike.",
                source: "Trustpilot"
              },
              {
                name: "Marc Weber",
                country: "Germany",
                text: "Everything was perfectly organized. The medical check for Ijen was quick and professional. No shortcuts taken.",
                source: "TripAdvisor"
              },
              {
                name: "Elena Rossi",
                country: "Italy",
                text: "JVTO is the real deal. We saw other groups with fake letters, but we were glad to have a real check. Safety first!",
                source: "Google"
              }
            ].map((review, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-700 mb-6 italic">&quot;{review.text}&quot;</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-stone-500">{review.country}</p>
                  </div>
                  <p className="text-xs font-bold text-brand-olive uppercase tracking-widest">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/why-jvto/reviews" className="inline-flex items-center gap-2 bg-brand-olive text-white px-8 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
              Read Verified Reviews <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Operational Certainty: Frequently Asked Questions" items={homeFaqs} />

      {/* Travel Guide CTA - Read the Rulebook Before You Book */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Read the Rulebook Before You Book</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              We do not ask guests to commit blindly. Our Travel Guide is public because informed travelers make better decisions, ask better questions, and arrive with the right expectations. Before you pay a deposit, you can review booking rules, health screening logic, packing guidance, and weather-related realities in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-stone-100 text-center">
              <h4 className="font-bold mb-2">Travel Guide</h4>
              <p className="text-sm text-stone-500 mb-4">Comprehensive planning information for your East Java journey.</p>
              <Link href="/travel-guide" className="text-orange-500 text-sm font-bold">Open Travel Guide</Link>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-100 text-center">
              <h4 className="font-bold mb-2">Booking Information</h4>
              <p className="text-sm text-stone-500 mb-4">Transparent rules on payments and cancellations.</p>
              <Link href="/policy" className="text-orange-500 text-sm font-bold">Read Booking Information</Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/travel-guide" className="inline-flex items-center gap-2 bg-brand-olive text-white px-10 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
              Open Full Travel Guide <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Structured Inquiry Block */}
      <ContactSection />

      <Footer />
    </main>
  );
}

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
import DifferentiatorGrid from '@/components/DifferentiatorGrid';
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
  const homeSchema = [
    {
      "@type": "WebPage",
      "@id": "https://javavolcano-touroperator.com/#webpage",
      "url": "https://javavolcano-touroperator.com",
      "name": "Java Volcano Tour Operator",
      "description": SITE_CONFIG.organization.description,
      "isPartOf": { "@id": "https://javavolcano-touroperator.com/#website" },
      "about": { "@id": "https://javavolcano-touroperator.com/#organization" },
      "mainEntity": { "@id": "https://javavolcano-touroperator.com/#home-faq" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://javavolcano-touroperator.com/#home-faq",
      "mainEntity": homeFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  // Get first 3 tours for featured section
  const featuredTours = TOURS.slice(0, 3);
  // Get first 4 destinations for featured section
  const featuredDestinations = DESTINATIONS.slice(0, 4);

  return (
    <main className="min-h-screen bg-jvto-off">
      <JsonLd data={homeSchema} includeWebSite />
      <TrustSummary />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-jvto-navy">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="Java Volcano"
          fill
          className="object-cover opacity-60"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jvto-navy/40 via-transparent to-jvto-navy/80" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-jvto-lime/10 backdrop-blur-md border border-jvto-lime/30 text-jvto-lime px-6 py-2 rounded-full mb-8 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            <ShieldCheck size={14} /> Tourist Police-Led Private Tours
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Tourist Police-Led <br /> 
            <span className="text-jvto-orange">Private Volcano Tours in East Java</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Private Bromo, Ijen and Tumpak Sewu expeditions from Surabaya or Bali, built around visible legal proof, a Tourist Police-informed safety culture, documented operating history, and route-specific preparation for East Java&apos;s active volcanic terrain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em]">Choose Your Start Point</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
              <Link href="/tours?origin=Surabaya" className="w-full bg-white text-jvto-navy px-10 py-5 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-stone-100 transition-all flex items-center justify-center gap-3 group shadow-xl">
                From Surabaya <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/tours?origin=Bali" className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3 group">
                From Bali <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators — 9 reasons JVTO is different */}
      <DifferentiatorGrid />

      {/* Destinations */}
      <section id="destinations" className="section-padding bg-white rounded-b-[64px] shadow-2xl shadow-jvto-navy/5">
        <div className="container-width">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6 text-jvto-navy">Iconic <span className="text-jvto-orange">Landscapes</span></h2>
            <p className="text-jvto-muted max-w-2xl mx-auto font-light text-lg">From the blue fire of Ijen to the thousand streams of Tumpak Sewu.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {featuredDestinations.map((dest, index) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="relative aspect-[3/4] rounded-[48px] overflow-hidden group cursor-pointer shadow-xl shadow-jvto-navy/10"
                >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-jvto-navy/90 via-jvto-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-10 left-8 right-8 text-white">
                    <h3 className="text-2xl md:text-3xl mb-2">{dest.name}</h3>
                    <p className="micro-label text-white/60">{dest.highlights[0]}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Route Selection & Comparison */}
      <section id="tours" className="section-padding bg-white rounded-t-[64px] shadow-2xl shadow-jvto-navy/5">
        <div className="container-width text-center mb-20">
          <h2 className="text-5xl md:text-7xl mb-6 text-jvto-navy">Find Your <span className="text-jvto-orange">Perfect Route</span></h2>
          <p className="text-jvto-muted max-w-2xl mx-auto font-light text-lg">Use our interactive selector to find the private tour that fits your schedule, starting point, and adventure goals. Every JVTO trip is private by default, with your own vehicle and crew.</p>
        </div>
        <RouteSelector />
      </section>

      {/* Ijen Health Proof Rail */}
      <section className="py-24 bg-jvto-off border-y border-jvto-border">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center text-jvto-navy shadow-xl shadow-jvto-navy/5 border border-jvto-border">
                <Activity size={40} />
              </div>
              <div>
                <h3 className="text-3xl mb-2 text-jvto-navy">Ijen Health Screening Support</h3>
                <p className="text-jvto-muted text-sm font-light max-w-md leading-relaxed">Ijen access rules can require a recent local health certificate. JVTO coordinates a real clinic-based check when the rule applies.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {[
                "Clinic Workflow",
                "Local Certificate Support",
                "No Shortcut Letters"
              ].map((label, i) => (
                <div key={i} className="bg-white px-8 py-4 rounded-full border border-jvto-border flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-jvto-navy shadow-sm">
                  <CheckCircle2 size={16} className="text-jvto-lime" /> {label}
                </div>
              ))}
            </div>
            <Link href="/travel-guide/ijen-health-screening" className="text-jvto-navy font-bold text-sm underline underline-offset-8 hover:text-jvto-orange transition-colors">
              Learn about Ijen Safety
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-jvto-navy py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center group cursor-help">
              <Landmark className="text-jvto-lime mb-3 opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="text-white text-sm font-bold mb-1">Licensed Operator</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">#1102230032918</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-help">
              <ShieldCheck className="text-jvto-lime mb-3 opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="text-white text-sm font-bold mb-1">Police-Led</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Active Officer Oversight</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-help">
              <Users className="text-jvto-lime mb-3 opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="text-white text-sm font-bold mb-1">Private Groups Only</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">No Mixed Strangers</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-help">
              <Star className="text-jvto-gold mb-3 opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="text-white text-sm font-bold mb-1">4.9★ Trustpilot</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">112+ Verified Reviews</p>
            </div>
            <div className="flex flex-col items-center text-center group cursor-help col-span-2 lg:col-span-1">
              <CheckCircle2 className="text-jvto-lime mb-3 opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
              <p className="text-white text-sm font-bold mb-1">Permits Included</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Gas Mask & Health Check</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Trustpilot Social Proof */}
      <section id="reviews" className="py-16 bg-brand-cream border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4">
          <TrustpilotWidget />
        </div>
      </section>


      {/* 2.3 Medical Trust Section - Ijen Health Screening */}
      <MedicalTrustSection />

      {/* 2.5 Founder Spotlight - Visual Proof of Authority */}
      <FounderSpotlight />

      {/* 2.6 The People Behind the Proof - Crew Grid */}
      <section id="crew" className="section-padding bg-jvto-off">
        <div className="container-width">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6 text-jvto-navy">The <span className="text-jvto-orange">Custodians</span></h2>
            <p className="text-jvto-muted max-w-2xl mx-auto font-light text-lg">The JVTO experience is delivered by real local people whose names, roles, and strengths matter to the quality of the trip. Every member is verified and licensed.</p>
          </div>
          <CrewGrid />
        </div>
      </section>

      {/* 3. Trust Pillars - Evidence Dashboard & Structured Proof */}
      <section id="trust-pillars" className="section-padding bg-white rounded-[64px] my-12 mx-4 shadow-2xl shadow-jvto-navy/5">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl mb-6 text-jvto-navy">Operational <br /> <span className="text-jvto-orange">Certainty</span></h2>
              <p className="text-jvto-muted font-light text-lg">In a landscape of freelancers and brokers, JVTO provides documented legitimacy. We don&apos;t ask for trust; we provide the library for you to audit it yourself.</p>
            </div>
            <Link href="/verify-jvto" className="bg-jvto-navy text-white px-12 py-5 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-jvto-navy-mid transition-all flex items-center gap-3 shrink-0 shadow-lg shadow-jvto-navy/20">
              Open Proof Library <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: "Legal Identity", desc: "PT Java Volcano Rendezvous registration and NIB artifacts.", icon: <Landmark />, meta: "Verified PT" },
              { title: "Police Context", desc: "Agung Sambuko's active Tourist Police credentials and safety role.", icon: <ShieldCheck />, meta: "Authority" },
              { title: "Press & Guides", desc: "Stefan Loose and independent travel media recognitions.", icon: <Award />, meta: "Recognition" },
              { title: "History", desc: "Operational continuity and digital footprint since 2016.", icon: <History />, meta: "Continuity" }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-jvto-off/50 rounded-[40px] border border-jvto-border hover:shadow-2xl hover:shadow-jvto-navy/5 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-jvto-navy mb-8 group-hover:bg-jvto-navy group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-3 text-jvto-navy">{item.title}</h3>
                <p className="text-jvto-muted text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                <p className="micro-label">{item.meta}</p>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnswerBlock 
              question="Why should I trust JVTO with my deposit?"
              answer="JVTO operates with a 'Trust First' philosophy. We are a legally registered PT (Perseroan Terbatas) in Indonesia with a founder whose Tourist Police duty context is documented by third-party press. We provide our NIB and legal documents upfront so you can verify us through official channels before paying a deposit."
              icon={<ShieldCheck className="text-jvto-navy" size={24} />}
              metadata={`NIB: ${SITE_CONFIG.organization.nib} (PT Java Volcano Rendezvous)`}
            />
            <AnswerBlock 
              question="How do you ensure safety at Ijen Crater?"
              answer="Safety is treated as an operating system, not a slogan. For Ijen routes we coordinate real clinic-based health screening when current access rules require it, provide professional-grade gas masks, and use a team trained for volcanic terrain. Our founder's Tourist Police context informs practical discipline without turning JVTO into a government service."
              icon={<Activity className="text-jvto-navy" size={24} />}
              metadata="Verified Medical Screening Partners"
            />
            <AnswerBlock 
              question="Are your tours truly private?"
              answer="Yes. We do not operate 'shared' tours where you are mixed with strangers. Every JVTO booking gets its own dedicated vehicle, driver, and guide. This ensures we can maintain strict safety standards and provide a personalized experience that shared tours simply cannot match."
              icon={<Users className="text-jvto-navy" size={24} />}
              metadata="100% Private Logistics Guarantee"
            />
            <AnswerBlock 
              question="What happens if my trip is cancelled?"
              answer="We maintain a transparent cancellation policy. If a trip is cancelled due to volcanic activity or government closures, we work with you to reschedule or provide a fair refund based on our documented terms. Our legal registration ensures you have recourse that 'freelance' guides cannot offer."
              icon={<CheckCircle2 className="text-jvto-navy" size={24} />}
              metadata="Documented Refund & Reschedule Policy"
            />
          </div>
        </div>
      </section>



      {/* Reviews Section - What Our Guests Say */}
      <section id="reviews" className="section-padding bg-jvto-off">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl mb-6">Guest <span className="text-jvto-orange">Reflections</span></h2>
              <p className="text-jvto-muted font-light text-lg">Trust should never rely on self-written praise. That is why JVTO points travelers to independent review platforms and real guest experiences rather than hiding behind anonymous testimonials.</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-jvto-border shadow-sm">
                  <span className="text-sm font-bold text-jvto-navy">5.0</span>
                  <div className="flex text-jvto-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="micro-label ml-2">Tripadvisor</span>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Safety Confidence",
                text: "Guests repeatedly mention clear briefings, calm decision-making, and the sense that the team does not rush risky conditions.",
                source: "Review pattern"
              },
              {
                title: "Organized Logistics",
                text: "Common review themes include punctual pickups, smooth transfers, clear itinerary timing, and helpful route communication.",
                source: "Review pattern"
              },
              {
                title: "Guide and Driver Care",
                text: "Named guide and driver mentions often focus on patience, photography help, physical support, and practical local knowledge.",
                source: "Review pattern"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-jvto-border hover:shadow-2xl hover:shadow-jvto-navy/5 transition-all duration-500">
                <div className="flex text-jvto-gold mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h3 className="text-2xl text-jvto-navy font-bold mb-4">{review.title}</h3>
                <p className="text-jvto-muted mb-10 font-light leading-relaxed">{review.text}</p>
                <div className="flex justify-between items-end pt-8 border-t border-jvto-border">
                  <div>
                    <p className="text-xl text-jvto-navy font-bold">Independent platforms</p>
                    <p className="micro-label mt-1">Trustpilot, Tripadvisor, Google</p>
                  </div>
                  <p className="micro-label text-jvto-navy">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link href="/why-jvto/reviews" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-jvto-navy hover:gap-6 transition-all">
              Read Verified Reviews <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Operational Certainty: Frequently Asked Questions" items={homeFaqs} />

      {/* Travel Guide CTA - Read the Rulebook Before You Book */}
      <section id="travel-guide" className="section-padding bg-jvto-off">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square rounded-[80px] overflow-hidden shadow-2xl shadow-jvto-navy/10">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/destinations/ijen.webp"
                alt="Java Volcano Guide" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-jvto-navy/20 mix-blend-multiply" />
            </div>
            <div className="space-y-10">
              <div className="inline-block px-6 py-2 bg-white rounded-full text-[10px] font-bold text-jvto-navy uppercase tracking-[0.2em] shadow-sm border border-jvto-border">
                Essential Knowledge
              </div>
              <h2 className="text-5xl md:text-7xl leading-tight text-jvto-navy">The Java <br /> <span className="text-jvto-orange">Expedition Guide</span></h2>
              <p className="text-jvto-muted font-light text-lg leading-relaxed">
                We do not ask guests to commit blindly. Our Travel Guide is public because informed travelers make better decisions, ask better questions, and arrive with the right expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Ijen Health Guide", link: "/travel-guide/ijen-health" },
                  { title: "Bromo Weather", link: "/travel-guide/bromo-weather" },
                  { title: "Safety Protocols", link: "/why-jvto/safety" },
                  { title: "Booking Policy", link: "/policy" }
                ].map((item, i) => (
                  <Link key={i} href={item.link} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-jvto-border flex items-center justify-center group-hover:bg-jvto-navy group-hover:border-jvto-navy group-hover:text-white transition-all shadow-sm">
                      <ArrowRight size={18} />
                    </div>
                    <span className="text-base font-medium text-jvto-navy group-hover:text-jvto-orange transition-colors">{item.title}</span>
                  </Link>
                ))}
              </div>
              <Link href="/travel-guide" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-jvto-navy hover:gap-6 transition-all pt-6">
                Open Full Travel Guide <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 6. Structured Inquiry Block */}
      <ContactSection />

      {/* Verify CTA */}
      <div className="bg-jvto-lime py-3 px-4 text-center">
        <Link href="/verify-jvto" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-jvto-navy hover:underline underline-offset-4">
          ✓ All documents verifiable — Verify JVTO Legal Identity <ArrowRight size={14} />
        </Link>
      </div>

      <Footer />
    </main>
  );
}

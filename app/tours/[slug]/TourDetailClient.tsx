'use client';

import { motion } from 'motion/react';
import { Star, Calendar, MapPin, Users, ShieldCheck, CheckCircle2, ArrowRight, Clock, Info, Heart, Activity } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd, { buildTourPackageSchema } from '@/components/JsonLd';
import { useCurrency } from '@/hooks/useCurrency';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { useState } from 'react';
import InquiryForm from '@/components/InquiryForm';
import Link from 'next/link';
import { Tour, TOURS, DESTINATIONS } from '@/lib/jvtoData';
import { MEDICAL_PARTNERS } from '@/lib/verificationData';
import RouteFactsBar from '@/components/RouteFactsBar';
import TourCard from '@/components/TourCard';

interface TourDetailClientProps {
  tour: Tour;
}

export default function TourDetailClient({ tour }: TourDetailClientProps) {
  const { formatPrice } = useCurrency();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const tourSchema = buildTourPackageSchema(tour);

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://javavolcano-touroperator.com" },
      { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://javavolcano-touroperator.com/tours" },
      { "@type": "ListItem", "position": 3, "name": tour.name, "item": `https://javavolcano-touroperator.com/tours/${tour.slug}` }
    ]
  };

  const maxPax = tour.pricingTable[tour.pricingTable.length - 1]?.pax ?? 5;

  // Related tours: same destination overlap, exclude current
  const relatedTours = TOURS.filter(t =>
    t.slug !== tour.slug &&
    t.destinations.some(d => tour.destinations.includes(d))
  ).slice(0, 2);

  return (
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={tourSchema} />
      <JsonLd data={breadcrumbSchema} includeOrganization={false} />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="flex flex-wrap gap-4 mb-12">
            {tour.destinations.map(destSlug => {
              const dest = DESTINATIONS.find(d => d.slug === destSlug);
              return (
                <span key={destSlug} className="bg-brand-accent text-brand-ink px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
                  {dest ? dest.name : destSlug}
                </span>
              );
            })}
            <span className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 border border-white/20">
              <Clock size={14} /> {tour.duration}
            </span>
            <span className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 border border-white/20">
              <Activity size={14} /> {tour.physicality}
            </span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-serif text-white mb-10 leading-[0.85] tracking-tight">{tour.name} <br /> <span className="italic font-light text-brand-accent">Private Expedition</span></h1>
          <div className="flex items-center gap-6 text-brand-accent">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <span className="text-3xl font-serif text-white">{tour.rating} / 5.0</span>
            <span className="text-white/40 ml-4 font-light tracking-widest text-xs uppercase">(Verified guest reviews)</span>
          </div>
        </div>
      </section>

      {/* Route Facts Bar */}
      <RouteFactsBar
        duration={tour.duration}
        origin={tour.origin}
        physicality={tour.physicality}
        maxPax={maxPax}
        priceFrom={tour.priceFrom}
      />

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-32">
              <div>
                <AnswerBlock
                  text={`${tour.name} is a ${tour.duration} private tour from ${tour.origin} covering ${tour.highlights.join(', ')}. Pricing starts from ${formatPrice(tour.priceFrom)} per person based on group size. The package includes private transport, expert guide support, and listed route logistics under JVTO's safety-led operating standards.`}
                />
                <h2 className="text-5xl md:text-7xl font-serif mb-12 text-brand-ink leading-[0.9] tracking-tight">Tour <br /> <span className="italic font-light text-brand-accent">Overview</span></h2>
                <p className="text-2xl text-stone-500 leading-relaxed whitespace-pre-line font-light tracking-wide">{tour.longDesc}</p>
              </div>

              {/* Route Fit Block */}
              <div className="bg-white p-12 rounded-[48px] border border-stone-100 shadow-lg shadow-brand-olive/5">
                <h3 className="text-2xl font-serif mb-8 text-brand-ink">Is This Tour Right For You?</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-6 py-3 bg-brand-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-olive border border-brand-olive/20">Best For: {tour.bestFor}</span>
                  <span className="px-6 py-3 bg-brand-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-olive border border-brand-olive/20">Intensity: {tour.physicality}</span>
                </div>
                <p className="text-stone-500 font-light leading-relaxed">{tour.idealTraveler}</p>
              </div>

              <div>
                <h2 className="text-5xl md:text-7xl font-serif mb-16 text-brand-ink leading-[0.9] tracking-tight">Itinerary <br /> <span className="italic font-light text-brand-accent">Breakdown</span></h2>
                <div className="space-y-12">
                  {tour.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-12 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-brand-olive border-4 border-white shadow-xl group-hover:scale-125 transition-transform flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
                        {i < tour.itinerary.length - 1 && <div className="w-px h-full bg-brand-olive/10 my-6" />}
                      </div>
                      <div className="pb-8">
                        <span className="text-[10px] font-bold text-brand-olive uppercase tracking-[0.3em] mb-4 block">{item.day}</span>
                        <h4 className="text-3xl font-serif text-brand-ink mb-4 leading-tight">{item.title}</h4>
                        <p className="text-stone-500 text-xl font-light leading-relaxed tracking-wide">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-16 rounded-[64px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                  <h4 className="text-3xl font-serif mb-10 flex items-center gap-4 text-brand-olive">
                    <CheckCircle2 size={32} /> Inclusions
                  </h4>
                  <ul className="space-y-6 text-stone-500 font-light text-lg">
                    {tour.inclusions.map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="text-brand-accent mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-16 rounded-[64px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                  <h4 className="text-3xl font-serif mb-10 flex items-center gap-4 text-stone-300">
                    <Info size={32} /> Exclusions
                  </h4>
                  <ul className="space-y-6 text-stone-400 font-light text-lg">
                    {tour.exclusions.map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="text-stone-200 mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ijen Health Screening Section */}
              {tour.destinations.includes('ijen-crater') && (
                <div className="bg-brand-olive text-white p-20 rounded-[80px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-brand-accent">
                        <Activity size={40} />
                      </div>
                      <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight">Ijen Health <br /> <span className="italic font-light text-brand-accent">Screening Support</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                      <div>
                        <h4 className="text-2xl font-serif mb-6 text-brand-accent italic">What is Required?</h4>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-light tracking-wide">
                          Ijen access rules can require a recent local medical certificate. This helps assess whether guests are fit for the 2,386m altitude and sulfur-exposure environment.
                        </p>
                        <h4 className="text-2xl font-serif mb-6 text-brand-accent italic">Certified Clinics</h4>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-light tracking-wide">
                          We facilitate this check at certified medical clinics in Bondowoso or Banyuwangi. We do not use pre-signed letters; JVTO&apos;s screening flow is handled through real local medical checks.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                          {MEDICAL_PARTNERS.slice(0, 2).map((partner, i) => (
                            <span key={i} className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                              {partner.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 p-12 rounded-[64px] border border-white/10 backdrop-blur-md">
                        <h4 className="text-2xl font-serif mb-10 text-brand-accent italic">What to Expect</h4>
                        <ul className="space-y-6 text-white/80 text-lg mb-12 font-light tracking-wide">
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> Blood pressure & heart rate check</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> Oxygen readiness check when performed by the clinic</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> General physical readiness assessment</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> 15-30 minutes total duration</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> Bring your passport (or a photo)</li>
                        </ul>
                        <Link href="/travel-guide/ijen-health-screening" className="inline-flex items-center justify-center w-full gap-4 bg-brand-accent text-brand-ink px-10 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-brand-olive/20 group">
                          Detailed Health Guide <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tour.destinations.includes('ijen-crater') && (
                <div className="bg-white p-12 rounded-[48px] border border-stone-100 shadow-lg shadow-brand-olive/5">
                  <h3 className="text-3xl font-serif mb-6 text-brand-ink">Blue Fire Visibility: What We Can and Cannot Promise</h3>
                  <p className="text-stone-500 text-lg font-light leading-relaxed mb-8">
                    Ijen&apos;s blue fire is a natural sulfur-gas phenomenon, not lava and not a guaranteed show. Visibility depends on gas activity, wind, fog, rain, crater access, and darkness between roughly 02:00 and 04:00. JVTO plans the safest legal attempt, but we do not sell false certainty.
                  </p>
                  <Link href="/travel-guide/ijen-health-screening" className="text-brand-olive font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-brand-olive/20 pb-2 hover:border-brand-olive w-fit">
                    Read Ijen Readiness Guide <ArrowRight size={20} />
                  </Link>
                </div>
              )}

              {/* Safety & Health Requirements */}
              <div className="bg-white p-20 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-20 h-20 bg-brand-cream rounded-[32px] flex items-center justify-center text-brand-olive">
                    <ShieldCheck size={40} />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-[0.9] tracking-tight">Safety & <br /> <span className="italic font-light text-brand-accent">Health</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div>
                    <h4 className="text-3xl font-serif mb-6 flex items-center gap-4 text-brand-ink">
                      <Heart className="text-brand-accent" size={32} /> Health Screening
                    </h4>
                    <p className="text-stone-500 text-xl leading-relaxed mb-10 font-light tracking-wide">
                      For Ijen Crater, current access rules can require a recent local health certificate. We facilitate the clinic workflow before the hike when the rule applies.
                    </p>
                    <Link href="/travel-guide/ijen-health-screening" className="text-brand-olive font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-brand-olive/20 pb-2 hover:border-brand-olive">
                      Read Health Guide <ArrowRight size={20} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif mb-6 flex items-center gap-4 text-brand-ink">
                      <Activity className="text-brand-olive" size={32} /> Physical Intensity
                    </h4>
                    <p className="text-stone-500 text-xl leading-relaxed mb-10 font-light tracking-wide">
                      This tour involves moderate to high physical activity. Please ensure you are in good health and have appropriate footwear for volcanic terrain.
                    </p>
                    <Link href="/travel-guide/packing-list" className="text-brand-olive font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-brand-olive/20 pb-2 hover:border-brand-olive">
                      View Packing List <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Alternative Route Cards */}
              {relatedTours.length > 0 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-12 text-brand-ink leading-tight">You Might Also <span className="italic font-light text-brand-accent">Like</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {relatedTours.map((t, i) => <TourCard key={t.slug} tour={t} index={i} />)}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-12">
                <div className="bg-white p-16 rounded-[64px] shadow-2xl shadow-brand-olive/10 border border-stone-50">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-6 ml-2">Private Group Pricing</div>
                  <div className="space-y-4 mb-12">
                    {tour.pricingTable.map((item) => (
                      <div key={item.pax} className="flex justify-between items-center py-3 border-b border-stone-100 last:border-0">
                        <span className="text-sm font-bold text-jvto-navy uppercase tracking-widest">{item.pax} {item.pax === 5 ? '5+ Pax' : 'Pax'}</span>
                        <span className="text-xl font-display font-bold text-jvto-orange">{formatPrice(item.price)} <span className="text-[10px] text-stone-400 font-normal uppercase tracking-widest">/ Person</span></span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-5 text-stone-600">
                      <div className="w-12 h-12 rounded-2xl bg-jvto-off flex items-center justify-center text-jvto-navy shadow-sm">
                        <Users size={24} />
                      </div>
                      <span className="text-lg font-light tracking-wide">Private Group Only</span>
                    </div>
                    <div className="flex items-center gap-5 text-stone-600">
                      <div className="w-12 h-12 rounded-2xl bg-jvto-off flex items-center justify-center text-jvto-navy shadow-sm">
                        <ShieldCheck size={24} />
                      </div>
                      <span className="text-lg font-light tracking-wide">Police-Led Safety</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full bg-jvto-orange text-white py-8 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-jvto-orange-hover transition-all flex items-center justify-center gap-4 shadow-xl shadow-jvto-orange/20 group"
                  >
                    Check Availability <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>

                  <div className="mt-10 text-center">
                    <a
                      href={SITE_CONFIG.whatsapp.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-brand-olive text-[10px] font-bold uppercase tracking-[0.3em] transition-colors border-b border-transparent hover:border-brand-olive pb-1"
                    >
                      Or chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-brand-ink p-16 rounded-[64px] text-white shadow-2xl shadow-brand-ink/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <h4 className="text-3xl font-serif mb-6 leading-tight">Verify Your <br /> <span className="italic font-light text-brand-accent">Operator</span></h4>
                  <p className="text-white/40 mb-12 text-base font-light leading-relaxed tracking-wide">Don&apos;t book based on guesswork. Verify our legal status and safety record before you commit.</p>
                  <div className="space-y-8">
                    <Link href="/verify-jvto" className="flex items-center gap-5 group/link">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover/link:bg-brand-accent group-hover/link:text-brand-ink transition-all shadow-lg">
                        <ShieldCheck size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Open Proof Library</span>
                    </Link>
                    <Link href="/why-jvto/reviews" className="flex items-center gap-5 group/link">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover/link:bg-brand-accent group-hover/link:text-brand-ink transition-all shadow-lg">
                        <Star size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Guest Reviews</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <InquiryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        tourTitle={tour.name}
      />
    </main>
  );
}

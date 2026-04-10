// app/tours/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Star, Calendar, MapPin, Users, ShieldCheck, CheckCircle2, ArrowRight, Clock, Info, Heart, Activity } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { useCurrency } from '@/hooks/useCurrency';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { useState } from 'react';
import InquiryForm from '@/components/InquiryForm';
import Link from 'next/link';
import { TOURS, DESTINATIONS } from '@/lib/jvtoData';
import { MEDICAL_PARTNERS } from '@/lib/verificationData';

export default function TourDetailPage() {
  const { slug } = useParams();
  const tour = TOURS.find(t => t.slug === slug);
  const { formatPrice } = useCurrency();
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!tour) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-page">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4 text-text-primary">Tour Not Found</h1>
          <p className="text-text-secondary mb-8">The tour you are looking for does not exist or has been moved.</p>
          <Link href="/tours" className="text-accent font-bold underline">Back to Tours</Link>
        </div>
      </main>
    );
  }

  const tourSchema = {
    "@type": "Product",
    "name": tour.name,
    "description": tour.shortDesc,
    "image": tour.image,
    "offers": {
      "@type": "Offer",
      "price": tour.priceFrom,
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    },
    "brand": {
      "@type": "Brand",
      "name": SITE_CONFIG.organization.brandName
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://javavolcano-touroperator.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tours",
        "item": "https://javavolcano-touroperator.com/tours"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tour.name,
        "item": `https://javavolcano-touroperator.com/tours/${tour.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-page">
      <JsonLd data={tourSchema} />
      <JsonLd data={breadcrumbSchema} />
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="flex flex-wrap gap-4 mb-12">
            {tour.destinations.map(destSlug => {
              const dest = DESTINATIONS.find(d => d.slug === destSlug);
              return (
                <span key={destSlug} className="bg-jvto-orange text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
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
          <h1 className="text-6xl md:text-[120px] font-serif text-white mb-10 leading-[0.85] tracking-tight">{tour.name} <br /> <span className="italic font-light text-jvto-orange">Private Expedition</span></h1>
          <div className="flex items-center gap-6 text-jvto-orange">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <span className="text-3xl font-serif text-white">{tour.rating} / 5.0</span>
            <span className="text-white/40 ml-4 font-light tracking-widest text-xs uppercase">(Verified guest reviews)</span>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-32">
              <div>
                <AnswerBlock 
                  text={`${tour.name} is a ${tour.duration} private tour from ${tour.origin} covering ${tour.highlights.join(', ')}. Priced at ${formatPrice(tour.priceFrom)} per group. Includes private transport, expert guide, and all entrance fees. Led by licensed professionals.`}
                />
                <h2 className="text-5xl md:text-7xl font-serif mb-12 text-text-primary leading-[0.9] tracking-tight">Tour <br /> <span className="italic font-light text-jvto-orange">Overview</span></h2>
                <p className="text-2xl text-text-secondary leading-relaxed whitespace-pre-line font-light tracking-wide">{tour.longDesc}</p>
              </div>

              <div>
                <h2 className="text-5xl md:text-7xl font-serif mb-16 text-text-primary leading-[0.9] tracking-tight">Itinerary <br /> <span className="italic font-light text-jvto-orange">Breakdown</span></h2>
                <div className="space-y-12">
                  {tour.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-12 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent border-4 border-card shadow-xl group-hover:scale-125 transition-transform flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
                        {i < tour.itinerary.length - 1 && <div className="w-px h-full bg-accent/10 my-6" />}
                      </div>
                      <div className="pb-8">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-4 block">{item.day}</span>
                        <h4 className="text-3xl font-serif text-text-primary mb-4 leading-tight">{item.title}</h4>
                        <p className="text-text-secondary text-xl font-light leading-relaxed tracking-wide">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-card p-16 rounded-[64px] border border-border-base shadow-2xl shadow-accent/5">
                  <h4 className="text-3xl font-serif mb-10 flex items-center gap-4 text-accent">
                    <CheckCircle2 size={32} /> Inclusions
                  </h4>
                  <ul className="space-y-6 text-text-secondary font-light text-lg">
                    {tour.inclusions.map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="text-jvto-orange mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card p-16 rounded-[64px] border border-border-base shadow-2xl shadow-accent/5">
                  <h4 className="text-3xl font-serif mb-10 flex items-center gap-4 text-text-secondary/50">
                    <Info size={32} /> Exclusions
                  </h4>
                  <ul className="space-y-6 text-text-secondary/60 font-light text-lg">
                    {tour.exclusions.map(item => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="text-border-base mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ijen Mandatory Health Screening Section */}
              {tour.destinations.includes('ijen-crater') && (
                <div className="bg-accent text-white p-20 rounded-[80px] shadow-2xl shadow-accent/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-jvto-orange">
                        <Activity size={40} />
                      </div>
                      <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight">Mandatory Ijen <br /> <span className="italic font-light text-jvto-orange">Health Screening</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                      <div>
                        <h4 className="text-2xl font-serif mb-6 text-jvto-orange italic">What is Required?</h4>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-light tracking-wide">
                          Since early 2024, Ijen National Park authorities mandate an official medical certificate for all visitors. This is to ensure every guest is medically cleared for the 2,386m altitude and sulfur exposure.
                        </p>
                        <h4 className="text-2xl font-serif mb-6 text-jvto-orange italic">Certified Clinics</h4>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-light tracking-wide">
                          We facilitate this check at certified medical clinics in Bondowoso or Banyuwangi. We do not use fake letters; every JVTO check is real and performed by a licensed doctor.
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
                        <h4 className="text-2xl font-serif mb-10 text-jvto-orange italic">What to Expect</h4>
                        <ul className="space-y-6 text-white/80 text-lg mb-12 font-light tracking-wide">
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-jvto-orange mt-1 shrink-0" /> Blood pressure & heart rate check</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-jvto-orange mt-1 shrink-0" /> General physical readiness assessment</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-jvto-orange mt-1 shrink-0" /> 15-30 minutes total duration</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-jvto-orange mt-1 shrink-0" /> Bring your passport (or a photo)</li>
                        </ul>
                        <Link href="/travel-guide/ijen-health-screening" className="inline-flex items-center justify-center w-full gap-4 bg-jvto-orange text-white px-10 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-jvto-orange transition-all shadow-xl shadow-accent/20 group">
                          Detailed Health Guide <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Safety & Health Requirements */}
              <div className="bg-card p-20 rounded-[80px] border border-border-base shadow-2xl shadow-accent/5">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-20 h-20 bg-page rounded-[32px] flex items-center justify-center text-accent">
                    <ShieldCheck size={40} />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif text-text-primary leading-[0.9] tracking-tight">Safety & <br /> <span className="italic font-light text-jvto-orange">Health</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div>
                    <h4 className="text-3xl font-serif mb-6 flex items-center gap-4 text-text-primary">
                      <Heart className="text-jvto-orange" size={32} /> Health Screening
                    </h4>
                    <p className="text-text-secondary text-xl leading-relaxed mb-10 font-light tracking-wide">
                      For Ijen Crater, a mandatory medical certificate is required by local authorities. We facilitate this at a certified clinic before the hike.
                    </p>
                    <Link href="/travel-guide/ijen-health-screening" className="text-accent font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-accent/20 pb-2 hover:border-accent">
                      Read Health Guide <ArrowRight size={20} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif mb-6 flex items-center gap-4 text-text-primary">
                      <Activity className="text-accent" size={32} /> Physical Intensity
                    </h4>
                    <p className="text-text-secondary text-xl leading-relaxed mb-10 font-light tracking-wide">
                      This tour involves moderate to high physical activity. Please ensure you are in good health and have appropriate footwear for volcanic terrain.
                    </p>
                    <Link href="/travel-guide/packing-list" className="text-accent font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-accent/20 pb-2 hover:border-accent">
                      View Packing List <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-12">
                <div className="bg-card p-16 rounded-[64px] shadow-2xl shadow-accent/10 border border-border-base">
                  <div className="text-[10px] font-bold text-text-secondary/50 uppercase tracking-[0.3em] mb-6 ml-2">Private Group Pricing</div>
                  <div className="space-y-4 mb-12">
                    {tour.pricingTable.map((item) => (
                      <div key={item.pax} className="flex justify-between items-center py-3 border-b border-border-base last:border-0">
                        <span className="text-sm font-bold text-text-primary uppercase tracking-widest">{item.pax} {item.pax === 5 ? '5+ Pax' : 'Pax'}</span>
                        <span className="text-xl font-display font-bold text-jvto-orange">{formatPrice(item.price)} <span className="text-[10px] text-text-secondary/50 font-normal uppercase tracking-widest">/ Person</span></span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-5 text-text-secondary">
                      <div className="w-12 h-12 rounded-2xl bg-page flex items-center justify-center text-text-primary shadow-sm">
                        <Users size={24} />
                      </div>
                      <span className="text-lg font-light tracking-wide">Private Group Only</span>
                    </div>
                    <div className="flex items-center gap-5 text-text-secondary">
                      <div className="w-12 h-12 rounded-2xl bg-page flex items-center justify-center text-text-primary shadow-sm">
                        <ShieldCheck size={24} />
                      </div>
                      <span className="text-lg font-light tracking-wide">Police-Led Safety</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="w-full bg-jvto-orange text-white py-8 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-jvto-orange/90 transition-all flex items-center justify-center gap-4 shadow-xl shadow-jvto-orange/20 group"
                  >
                    Check Availability <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <div className="mt-10 text-center">
                    <a 
                      href={SITE_CONFIG.whatsapp.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary/50 hover:text-accent text-[10px] font-bold uppercase tracking-[0.3em] transition-colors border-b border-transparent hover:border-accent pb-1"
                    >
                      Or chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-black p-16 rounded-[64px] text-white shadow-2xl shadow-black/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <h4 className="text-3xl font-serif mb-6 leading-tight">Verify Your <br /> <span className="italic font-light text-jvto-orange">Operator</span></h4>
                  <p className="text-white/40 mb-12 text-base font-light leading-relaxed tracking-wide">Don&apos;t book based on guesswork. Verify our legal status and safety record before you commit.</p>
                  <div className="space-y-8">
                    <Link href="/verify-jvto" className="flex items-center gap-5 group/link">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-jvto-orange group-hover/link:bg-jvto-orange group-hover/link:text-black transition-all shadow-lg">
                        <ShieldCheck size={24} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Open Proof Library</span>
                    </Link>
                    <Link href="/why-jvto/reviews" className="flex items-center gap-5 group/link">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-jvto-orange group-hover/link:bg-jvto-orange group-hover/link:text-black transition-all shadow-lg">
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

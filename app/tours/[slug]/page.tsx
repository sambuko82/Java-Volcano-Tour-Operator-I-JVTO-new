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
      <main className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Tour Not Found</h1>
          <p className="text-stone-600 mb-8">The tour you are looking for does not exist or has been moved.</p>
          <Link href="/tours" className="text-brand-olive font-bold underline">Back to Tours</Link>
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
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={tourSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="flex flex-wrap gap-3 mb-6">
            {tour.destinations.map(destSlug => {
              const dest = DESTINATIONS.find(d => d.slug === destSlug);
              return (
                <span key={destSlug} className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  {dest ? dest.name : destSlug}
                </span>
              );
            })}
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Clock size={14} /> {tour.duration}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Activity size={14} /> {tour.physicality}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-4">{tour.name} Private Expedition</h1>
          <div className="flex items-center gap-2 text-orange-400">
            <Star size={20} fill="currentColor" />
            <span className="text-xl font-bold text-white">{tour.rating} / 5.0</span>
            <span className="text-stone-400 ml-2">(Based on verified guest reviews)</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <AnswerBlock 
                  text={`${tour.name} is a ${tour.duration} private tour from ${tour.origin} covering ${tour.highlights.join(', ')}. Priced at ${formatPrice(tour.priceFrom)} per group. Includes private transport, expert guide, and all entrance fees. Led by licensed professionals.`}
                />
                <h2 className="text-3xl font-display font-bold mb-6">Tour Overview</h2>
                <p className="text-lg text-stone-600 leading-relaxed whitespace-pre-line">{tour.longDesc}</p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Itinerary Breakdown</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-orange-500" />
                        {i < tour.itinerary.length - 1 && <div className="w-0.5 h-full bg-stone-200 my-2" />}
                      </div>
                      <div>
                        <span className="text-sm font-bold text-orange-600 uppercase tracking-widest">{item.day}</span>
                        <h4 className="text-xl font-bold text-stone-900">{item.title}</h4>
                        <p className="text-stone-500 mt-2">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-600">
                    <CheckCircle2 size={20} /> Inclusions
                  </h4>
                  <ul className="space-y-3 text-stone-600">
                    {tour.inclusions.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-600">
                    <Info size={20} /> Exclusions
                  </h4>
                  <ul className="space-y-3 text-stone-600">
                    {tour.exclusions.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ijen Mandatory Health Screening Section */}
              {tour.destinations.includes('ijen-crater') && (
                <div className="bg-orange-50 p-10 rounded-3xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-8">
                    <Heart className="text-orange-500" size={32} />
                    <h2 className="text-3xl font-display font-bold">Mandatory Ijen Health Screening</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="font-bold mb-4">What is Required?</h4>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Since early 2024, Ijen National Park authorities mandate an official medical certificate for all visitors. This is to ensure every guest is medically cleared for the 2,386m altitude and sulfur exposure.
                      </p>
                      <h4 className="font-bold mb-4">Certified Clinics</h4>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        We facilitate this check at certified medical clinics in Bondowoso or Banyuwangi. We do not use fake letters; every JVTO check is real and performed by a licensed doctor.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {MEDICAL_PARTNERS.slice(0, 2).map((partner, i) => (
                          <span key={i} className="bg-white px-3 py-1 rounded-lg border border-orange-100 text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                            {partner.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-4">What to Expect</h4>
                      <ul className="space-y-3 text-stone-600 text-sm mb-6">
                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" /> Blood pressure & heart rate check</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" /> General physical readiness assessment</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" /> 15-30 minutes total duration</li>
                        <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" /> Bring your passport (or a clear photo)</li>
                      </ul>
                      <Link href="/travel-guide/ijen-health-screening" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all">
                        View Detailed Health Guide <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Safety & Health Requirements */}
              <div className="bg-stone-50 p-10 rounded-3xl border border-stone-200">
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="text-orange-500" size={32} />
                  <h2 className="text-3xl font-display font-bold">Safety & Health Requirements</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Heart className="text-red-500" size={18} /> Health Screening
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      For Ijen Crater, a mandatory medical certificate is required by local authorities. We facilitate this at a certified clinic before the hike.
                    </p>
                    <Link href="/travel-guide/ijen-health-screening" className="text-brand-olive font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Read Health Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Activity className="text-orange-500" size={18} /> Physical Intensity
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      This tour involves moderate to high physical activity. Please ensure you are in good health and have appropriate footwear for volcanic terrain.
                    </p>
                    <Link href="/travel-guide/packing-list" className="text-brand-olive font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      View Packing List <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                  <div className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">Starting From</div>
                  <div className="text-4xl font-display font-bold text-brand-olive mb-6">{formatPrice(tour.priceFrom)}</div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-stone-600">
                      <Users size={18} className="text-orange-500" />
                      <span>Private Group Only</span>
                    </div>
                    <div className="flex items-center gap-3 text-stone-600">
                      <ShieldCheck size={18} className="text-orange-500" />
                      <span>Police-Led Safety</span>
                    </div>
                    <div className="flex items-center gap-3 text-stone-600">
                      <CheckCircle2 size={18} className="text-orange-500" />
                      <span>Instant Confirmation</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                  >
                    Check Availability <ArrowRight size={20} />
                  </button>
                  
                  <div className="mt-6 text-center">
                    <a 
                      href={SITE_CONFIG.whatsapp.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-brand-olive text-sm font-bold transition-colors"
                    >
                      Or chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-brand-olive p-8 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4">Verify Your Operator</h4>
                  <p className="text-stone-300 mb-6 text-sm">Don&apos;t book based on guesswork. Verify our legal status and safety record before you commit.</p>
                  <div className="space-y-4">
                    <Link href="/verify-jvto" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                      <ShieldCheck className="text-orange-400" />
                      <span className="text-sm font-bold">Open Proof Library</span>
                    </Link>
                    <Link href="/why-jvto/reviews" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                      <Star className="text-orange-400" />
                      <span className="text-sm font-bold">Verified Guest Reviews</span>
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

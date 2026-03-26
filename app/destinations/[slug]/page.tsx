'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { MapPin, Star, ChevronRight, Info, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

import { DESTINATIONS, TOURS } from '@/lib/jvtoData';

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = DESTINATIONS.find(d => d.slug === slug);

  if (!destination) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Destination Not Found</h1>
          <p className="text-stone-600 mb-8">The destination you are looking for does not exist or has been moved.</p>
          <Link href="/destinations" className="text-brand-olive font-bold underline">Back to Destinations</Link>
        </div>
      </main>
    );
  }

  const associatedTours = TOURS.filter(t => t.destinations.includes(destination.slug));

  const placeSchema = {
    "@type": "Place",
    "name": destination.name,
    "description": destination.fullDesc,
    "image": destination.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": destination.region,
      "addressCountry": "Indonesia"
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
        "name": "Destinations",
        "item": "https://javavolcano-touroperator.com/destinations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": destination.name,
        "item": `https://javavolcano-touroperator.com/destinations/${destination.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={placeSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex justify-center gap-3 mb-6">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">{destination.region}</span>
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">{destination.altitude}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold text-white mb-6"
          >
            {destination.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-200"
          >
            {destination.shortDesc}
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <AnswerBlock 
                  text={`${destination.name} is a premier travel destination in ${destination.region} known for ${destination.shortDesc}. JVTO offers ${associatedTours.length} verified private tours in this region, led by SAR-certified guides.`}
                />
                <h2 className="text-3xl font-display font-bold mb-6">Top Highlights of {destination.name}</h2>
                <p className="text-lg text-stone-600 leading-relaxed whitespace-pre-line mb-8">{destination.fullDesc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                      <CheckCircle2 className="text-orange-500" size={20} />
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {destination.practicalNotes && (
                <div className="bg-stone-100 p-8 rounded-3xl border border-stone-200">
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <Info className="text-brand-olive" /> Practical Notes
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{destination.practicalNotes}</p>
                </div>
              )}

              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Associated Private Tours</h2>
                {associatedTours.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {associatedTours.map((tour, index) => (
                      <TourCard key={tour.slug} tour={tour} index={index} />
                    ))}
                  </div>
                ) : (
                  <p className="text-stone-500 italic">No specific tours listed for this destination yet. Contact us for a custom itinerary.</p>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                  <h4 className="text-xl font-bold mb-6">Why Visit {destination.name}?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={18} />
                      <span className="text-stone-600">Unparalleled natural beauty and volcanic landscapes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={18} />
                      <span className="text-stone-600">Rich cultural heritage and local traditions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={18} />
                      <span className="text-stone-600">Adventure opportunities for all fitness levels.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-500 p-8 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4">Plan Your Trip</h4>
                  <p className="text-orange-100 mb-6 text-sm">Get a customized itinerary for your {destination.name} adventure.</p>
                  <a 
                    href={SITE_CONFIG.whatsapp.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-orange-600 py-3 rounded-xl font-bold text-center hover:bg-stone-100 transition-colors"
                  >
                    Contact Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

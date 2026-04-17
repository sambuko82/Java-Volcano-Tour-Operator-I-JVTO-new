'use client';

import { motion } from 'motion/react';
import { Star, Users, ShieldCheck, CheckCircle2, ArrowRight, Clock, Info, Heart, Activity, CreditCard, FileText, Lock, Building2, Car, Utensils, Zap, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnswerBlock from '@/components/AnswerBlock';
import JsonLd, { buildTourPackageSchema } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { useCurrency } from '@/hooks/useCurrency';
import { SITE_CONFIG } from '@/lib/siteConfig';
import Link from 'next/link';
import { Tour, TOURS, DESTINATIONS } from '@/lib/jvtoData';
import { MEDICAL_PARTNERS, RECOGNITIONS } from '@/lib/verificationData';
import RouteFactsBar from '@/components/RouteFactsBar';
import TourCard from '@/components/TourCard';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';

interface TourDetailClientProps {
  tour: Tour;
}

export default function TourDetailClient({ tour }: TourDetailClientProps) {
  const { formatPrice } = useCurrency();

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

  const hasIjen = tour.destinations.includes('ijen-crater');

  return (
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={tourSchema} />
      <JsonLd data={breadcrumbSchema} includeOrganization={false} />
      <Navbar />

      {/* [1] Hero (paket name, hero image, from-price, CTA) */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover scale-105"
          priority
          unoptimized
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
          </div>
          <h1 className="text-6xl md:text-[120px] font-serif text-white mb-10 leading-[0.85] tracking-tight">{tour.name} <br /> <span className="italic font-light text-brand-accent">Private Expedition</span></h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12">
            <div className="flex items-center gap-6 text-brand-accent">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="text-3xl font-serif text-white">{tour.rating} / 5.0</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right hidden md:block">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">From</p>
                <p className="text-3xl font-serif text-brand-accent">{formatPrice(tour.priceFrom)}</p>
              </div>
              <Link href={`/checkout/${tour.slug}`} className="bg-jvto-orange text-white px-12 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-jvto-orange-hover transition-all shadow-2xl shadow-jvto-orange/40 flex items-center gap-4">
                Secure This Route <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* [2] Structured route data */}
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
                  text={`${tour.name} is a ${tour.duration} private tour from ${tour.origin} covering ${tour.highlights.join(', ')}. Pricing starts from ${formatPrice(tour.priceFrom)} per person based on group size.`}
                />
                <h2 className="text-5xl md:text-7xl font-serif mb-12 text-brand-ink leading-[0.9] tracking-tight">Expedition <br /> <span className="italic font-light text-brand-accent">Overview</span></h2>
                <p className="text-2xl text-stone-500 leading-relaxed whitespace-pre-line font-light tracking-wide">{tour.longDesc}</p>
              </div>

              {/* [3] Gallery / visual route */}
              {tour.gallery && tour.gallery.length > 0 && (
                <div>
                  <h3 className="text-2xl font-serif mb-12 text-brand-ink">Route Visualization</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {tour.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                        <Image src={img} alt={`${tour.name} view ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* [4] Route fit (who this trip is for) */}
              <div className="bg-white p-12 rounded-[48px] border border-stone-100 shadow-lg shadow-brand-olive/5">
                <h3 className="text-2xl font-serif mb-8 text-brand-ink italic">Is This Expedition Right For You?</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-6 py-3 bg-brand-cream rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-olive border border-brand-olive/20">Best For: {tour.bestFor}</span>
                </div>
                <p className="text-stone-500 font-light leading-relaxed">{tour.idealTraveler}</p>
              </div>

              {/* [5] Route rhythm (day-by-day or stage-by-stage) */}
              <div>
                <h2 className="text-5xl md:text-7xl font-serif mb-16 text-brand-ink leading-[0.9] tracking-tight">Route <br /> <span className="italic font-light text-brand-accent">Rhythm</span></h2>
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

              {/* [6, 7, 8] Hotel, Vehicle, Meals */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-[40px] border border-stone-50 shadow-xl shadow-brand-olive/5">
                  <Building2 size={32} className="text-brand-accent mb-6" />
                  <h4 className="text-xl font-serif mb-4 text-brand-ink">Stay</h4>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{tour.accommodation || 'Standard or customized local lodge coordination.'}</p>
                </div>
                <div className="bg-white p-10 rounded-[40px] border border-stone-50 shadow-xl shadow-brand-olive/5">
                  <Car size={32} className="text-brand-accent mb-6" />
                  <h4 className="text-xl font-serif mb-4 text-brand-ink">Transport</h4>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{tour.vehicleDetails || 'Private AC vehicle for entire expedition.'}</p>
                </div>
                <div className="bg-white p-10 rounded-[40px] border border-stone-50 shadow-xl shadow-brand-olive/5">
                  <Utensils size={32} className="text-brand-accent mb-6" />
                  <h4 className="text-xl font-serif mb-4 text-brand-ink">Meals</h4>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{tour.mealsIncluded || 'Breakfast and refreshments per itinerary.'}</p>
                </div>
              </div>

              {/* [9] Ijen readiness block */}
              {hasIjen && (
                <div className="bg-brand-olive text-white p-20 rounded-[80px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-brand-accent">
                        <Activity size={40} />
                      </div>
                      <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight">Ijen Health <br /> <span className="italic font-light text-brand-accent">Screening Flow</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                      <div>
                        <p className="text-white/80 text-lg leading-relaxed mb-10 font-light tracking-wide">
                          Official Ijen access rules can require a recent local medical certificate. JVTO coordinates this at certified clinics like <span className="text-brand-accent">Klinik Bakti Husada</span> to ensure your safety and compliance.
                        </p>
                        <Link href="/travel-guide/ijen-health-screening" className="inline-flex items-center justify-center w-full gap-4 bg-brand-accent text-brand-ink px-10 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-brand-olive/20 group">
                          Detailed Health Guide <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                      <div className="bg-white/5 p-12 rounded-[64px] border border-white/10 backdrop-blur-md">
                        <ul className="space-y-6 text-white/80 text-lg font-light tracking-wide">
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> Real local medical check</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> Blood pressure & SpO2 focus</li>
                          <li className="flex items-start gap-4"><CheckCircle2 size={24} className="text-brand-accent mt-1 shrink-0" /> 15-30 mins duration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* [10, 11] Policy & Payment summary */}
              <div className="bg-white p-20 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-20 h-20 bg-brand-cream rounded-[32px] flex items-center justify-center text-brand-olive">
                    <ShieldCheck size={40} />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif text-brand-ink leading-[0.9] tracking-tight">Policy <br /> <span className="italic font-light text-brand-accent">Summary</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div>
                    <h4 className="text-2xl font-serif mb-6 flex items-center gap-4 text-brand-ink">
                      <CreditCard className="text-brand-accent" size={28} /> Deposit & Balance
                    </h4>
                    <p className="text-stone-500 text-lg leading-relaxed mb-8 font-light">
                      Standard deposit: {BOOKING_POLICY.payment.standardDeposit}. Balance due 14 days before departure or per custom invoice.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-6 flex items-center gap-4 text-brand-ink">
                      <Zap className="text-brand-olive" size={28} /> Vouchers
                    </h4>
                    <p className="text-stone-500 text-lg leading-relaxed mb-8 font-light">
                      JVTO issues the Official E-Voucher / Invoice PDF only after approved payment. No booking is confirmed without it.
                    </p>
                  </div>
                </div>
                <Link href="/policy/booking-payment-cancellation" className="text-brand-olive font-bold text-xs flex items-center gap-3 hover:gap-6 transition-all uppercase tracking-[0.2em] border-b border-brand-olive/20 pb-2 hover:border-brand-olive w-fit">
                  Full Booking Policy <ArrowRight size={20} />
                </Link>
              </div>

              {/* [13] Closest alternative */}
              {relatedTours.length > 0 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-12 text-brand-ink leading-tight italic">Recommended <span className="font-light text-brand-accent">Alternatives</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {relatedTours.map((t, i) => <TourCard key={t.slug} tour={t} index={i} />)}
                  </div>
                </div>
              )}

              {/* [14] Ijen proof rail (if applicable) */}
              {hasIjen && (
                <div className="py-20 border-t border-b border-stone-100 flex flex-wrap justify-between items-center gap-12 grayscale opacity-50">
                  <div className="flex items-center gap-3"><ShieldCheck size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest">HPWKI Registered</span></div>
                  <div className="flex items-center gap-3"><ShieldCheck size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest">BBKSDA Permitted</span></div>
                  <div className="flex items-center gap-3"><ShieldCheck size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest">Dinkes Verified</span></div>
                  <div className="flex items-center gap-3"><ShieldCheck size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest">NIB: 1102230032918</span></div>
                </div>
              )}

              {/* [16] FAQ */}
              {tour.faq && tour.faq.length > 0 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-12 text-brand-ink flex items-center gap-4">
                    <HelpCircle size={32} className="text-brand-accent" /> Route <span className="italic font-light text-brand-accent">FAQs</span>
                  </h2>
                  <FAQSection items={tour.faq} />
                </div>
              )}

              {/* [17] Final CTA */}
              <div className="bg-brand-ink text-white p-20 rounded-[80px] text-center shadow-2xl">
                <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[0.9] tracking-tight">Start Your <br /> <span className="italic font-light text-brand-accent">Journey Now</span></h2>
                <p className="text-white/40 mb-12 text-xl font-light tracking-wide max-w-2xl mx-auto">Don&apos;t settle for shared groups. Experience the volcanoes with private comfort and documented safety.</p>
                <Link href={`/checkout/${tour.slug}`} className="bg-jvto-orange text-white px-16 py-8 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-jvto-orange-hover transition-all inline-flex items-center gap-4">
                  Proceed to Checkout <ArrowRight size={20} />
                </Link>
              </div>

            </div>

            {/* Sidebar (Price/Checkout) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-12">
                <div className="bg-white p-16 rounded-[64px] shadow-2xl shadow-brand-olive/10 border border-stone-50">
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-6 ml-2">Private Expedition Pricing</div>
                  <div className="space-y-4 mb-12">
                    {tour.pricingTable.map((item) => (
                      <div key={item.pax} className="flex justify-between items-center py-4 border-b border-stone-100 last:border-0">
                        <span className="text-sm font-bold text-jvto-navy uppercase tracking-widest">{item.pax} {item.pax >= 5 ? '5+ Pax' : 'Pax'}</span>
                        <span className="text-xl font-display font-bold text-jvto-orange">{formatPrice(item.price)} <span className="text-[10px] text-stone-400 font-normal uppercase tracking-widest">/ Person</span></span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/checkout/${tour.slug}`} className="w-full bg-jvto-orange text-white py-8 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-jvto-orange-hover transition-all flex items-center justify-center gap-4 shadow-xl shadow-jvto-orange/20 group">
                    Secure Booking <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <p className="text-[10px] text-stone-400 text-center mt-6 uppercase tracking-widest font-bold">100% Private • All-Inclusive</p>
                </div>

                {/* [15] Verify-before-book CTA */}
                <div className="bg-brand-olive p-16 rounded-[64px] text-white shadow-2xl relative overflow-hidden group">
                  <h4 className="text-3xl font-serif mb-6 leading-tight">Verify <br /> <span className="italic font-light text-brand-accent">Credentials</span></h4>
                  <p className="text-white/40 mb-12 text-base font-light leading-relaxed">View our NIB, police credentials, and media recognition before you book.</p>
                  <Link href="/verify-jvto" className="flex items-center gap-5 group/link">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent group-hover/link:bg-brand-accent group-hover/link:text-brand-ink transition-all">
                      <ShieldCheck size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors">Proof Library</span>
                  </Link>
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

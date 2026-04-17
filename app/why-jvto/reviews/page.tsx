// app/why-jvto/reviews/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { Star, Quote, ExternalLink, ShieldCheck, Users, MapPin, ArrowRight, MessageSquare, Heart, Loader2, AlertCircle } from 'lucide-react';

interface TripAdvisorReview {
  id: string;
  rating: number;
  published_date: string;
  title: string;
  text: string;
  user: {
    username: string;
    user_location?: {
      name: string;
    };
  };
}

const reviews = [
  {
    name: "Tan Yong Xue Jayden",
    location: "Singapore",
    text: "Our tour guide (KiKi) and driver (Nur) was amazing. Communication was easy, instructions were clear, and they made the experience fun and safe. Kiki also took amazing photos for us. 100% recommend",
    rating: 5,
    source: "Trustpilot"
  },
  {
    name: "Nina Kliem",
    location: "Germany",
    text: "We did the 3D2N Bromo and Mount Ijen tour. It was organised very well and our tourguide Rendi as well as our driver Holili were super kind and helpful! Great experience :) the accommodations were very nice as well.",
    rating: 5,
    source: "Trustpilot"
  },
  {
    name: "Patarachai Sereerat",
    location: "Thailand",
    text: "Had an amazing trip visiting Bromo, Ijen Crater, and Tumpak Sewu Waterfall! Everything was well organized and the price was really good. The staff were super kind and helpful — special thanks to Yandi (our driver) and Boy (our guide to Ijen crater). They were so friendly and shared lots of useful info. Highly recommended",
    rating: 5,
    source: "Trustpilot"
  },
  {
    name: "Jiang Tianjian",
    location: "China",
    text: "The tour guides were extremely friendly and accommodating. One of our friends was injured and they helped him as well. Overall, fantastic planning from the team!",
    rating: 5,
    source: "Trustpilot"
  }
];

export default function ReviewsPage() {
  const [taReviews, setTaReviews] = useState<TripAdvisorReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews/tripadvisor');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch reviews');
        }
        const data = await response.json();
        setTaReviews(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const reviewsSchema = {
    "@type": "WebPage",
    "name": "Guest Reviews",
    "description": "Read what our guests say about their Java Volcano Tour Operator experience."
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={reviewsSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Guest Voices: Real Experiences, Independently Verified</h1>
            <p className="text-xl text-stone-300">Operational certainty is best described by those who have experienced it. Real voices, independently verified.</p>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{SITE_CONFIG.reputation.aggregateRating}★</div>
                <div className="text-xs uppercase tracking-widest text-stone-400">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{SITE_CONFIG.reputation.totalReviews}+</div>
                <div className="text-xs uppercase tracking-widest text-stone-400">Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Platforms & Live Feed */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-display font-bold mb-6 text-stone-900">Independent Proof</h2>
              <p className="text-stone-600 mb-8 text-sm leading-relaxed">We don&apos;t host our own reviews. We point you to the platforms where we have no control over the content.</p>
              
              <div className="space-y-4">
                <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-2xl border border-stone-200 hover:border-orange-500 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600"><ExternalLink size={16} /></div>
                    <span className="font-bold text-sm">TripAdvisor</span>
                  </div>
                  <ArrowRight size={16} className="text-stone-300 group-hover:text-orange-500 transition-all" />
                </a>
                <a href={SITE_CONFIG.reputation.trustpilot} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-2xl border border-stone-200 hover:border-orange-500 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><ExternalLink size={16} /></div>
                    <span className="font-bold text-sm">Trustpilot</span>
                  </div>
                  <ArrowRight size={16} className="text-stone-300 group-hover:text-orange-500 transition-all" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-display font-bold">Live TripAdvisor Feed</h3>
                <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" className="text-xs font-bold text-brand-olive hover:text-orange-500 transition-colors">Write a Review</a>
              </div>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 bg-white rounded-3xl border border-stone-100">
                  <Loader2 className="text-orange-500 animate-spin mb-3" size={32} />
                  <p className="text-stone-400 text-xs font-medium">Fetching latest reviews...</p>
                </div>
              ) : error ? (
                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 text-center">
                  <p className="text-stone-600 text-xs mb-4">Feed temporarily unavailable. View all reviews on TripAdvisor.</p>
                  <a href={SITE_CONFIG.reputation.tripadvisor} target="_blank" className="text-xs font-bold text-brand-olive underline">View on TripAdvisor</a>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {taReviews.slice(0, 4).map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-2xl border border-stone-100 flex flex-col shadow-sm">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className={i < review.rating ? "fill-orange-500 text-orange-500" : "text-stone-300"} />
                        ))}
                      </div>
                      <h4 className="font-bold text-stone-900 text-sm mb-2 line-clamp-1">{review.title}</h4>
                      <p className="text-stone-600 text-xs mb-4 line-clamp-3 italic flex-grow">&quot;{review.text}&quot;</p>
                      <div className="pt-4 border-t border-stone-50 mt-auto flex justify-between items-center">
                        <span className="font-bold text-[10px] text-stone-900">{review.user.username}</span>
                        <span className="text-[10px] text-stone-400 font-mono">{new Date(review.published_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What Guests Consistently Mention */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">What Guests Consistently Mention</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Common themes in our guest feedback that define the JVTO experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <ShieldCheck className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Safety & Professionalism</h3>
              <p className="text-stone-600 text-sm">Guests frequently highlight our police-informed safety mindset and the peace of mind it provides in unpredictable environments.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <Users className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Private Tour Flexibility</h3>
              <p className="text-stone-600 text-sm">The ability to control the pace and customize the route is a major highlight for our private tour guests.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <MapPin className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Local Expertise</h3>
              <p className="text-stone-600 text-sm">Our guides&apos; deep knowledge of East Java and their ability to navigate complex logistics are consistently praised.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Guest Testimonials */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Direct Guest Testimonials</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">A selection of recent reviews from our guests.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-stone-100 relative shadow-sm"
              >
                <Quote className="absolute top-8 right-8 text-stone-100" size={48} />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-lg text-stone-700 italic mb-8 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900">{review.name}</h4>
                    <p className="text-sm text-stone-500">{review.location}</p>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-olive bg-brand-olive/5 px-3 py-1 rounded-full">
                    {review.source}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Handle Feedback */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">How We Handle Feedback</h2>
            <p className="text-stone-600">We listen to every guest to improve our operational standards.</p>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Continuous Improvement</h3>
                <p className="text-stone-600 leading-relaxed">Every review is reviewed by our leadership team. We use guest feedback to refine our safety protocols, guide training, and logistics execution.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Guest Support Commitment</h3>
                <p className="text-stone-600 leading-relaxed">If a guest has a concern, we address it immediately. Our commitment to operational certainty means being accountable for every aspect of the journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
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

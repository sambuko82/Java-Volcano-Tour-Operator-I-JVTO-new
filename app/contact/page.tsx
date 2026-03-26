// app/contact/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Shield, ArrowRight, CheckCircle2, Info, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSchema = {
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": SITE_CONFIG.organization.name,
      "telephone": SITE_CONFIG.organization.phone,
      "email": SITE_CONFIG.organization.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.organization.address.street,
        "addressLocality": SITE_CONFIG.organization.address.city,
        "addressRegion": SITE_CONFIG.organization.address.region,
        "postalCode": SITE_CONFIG.organization.address.postalCode,
        "addressCountry": SITE_CONFIG.organization.address.country
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={contactSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Contact the JVTO Team: Direct Access to Operational Certainty</h1>
            <p className="text-xl text-stone-300">Operational certainty starts with a conversation. Reach out to our team for expert planning, safety advice, and booking support.</p>
          </motion.div>
        </div>
      </section>

      {/* Direct Communication Channels */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href={SITE_CONFIG.whatsapp.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <MessageSquare className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">WhatsApp Support</h3>
              <p className="text-stone-600 text-sm mb-6">Fastest response for urgent inquiries and real-time planning support.</p>
              <span className="text-brand-olive font-bold flex items-center gap-2">
                Chat on WhatsApp <ArrowRight size={16} />
              </span>
            </a>
            <a 
              href={`mailto:${SITE_CONFIG.organization.email}`}
              className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <Mail className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Email Planning</h3>
              <p className="text-stone-600 text-sm mb-6">Best for detailed itineraries, group bookings, and formal inquiries.</p>
              <span className="text-brand-olive font-bold flex items-center gap-2">
                Send an Email <ArrowRight size={16} />
              </span>
            </a>
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm">
              <MapPin className="text-stone-400 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Office Location</h3>
              <p className="text-stone-600 text-sm mb-2">{SITE_CONFIG.organization.address.street}</p>
              <p className="text-stone-400 text-xs">{SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include in Your Inquiry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">What to Include in Your Inquiry</h2>
              <p className="text-lg text-stone-600 mb-8">To provide the most accurate operational advice, please include the following details:</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl">Origin & Destination</h4>
                    <p className="text-stone-600 text-sm">Where are you starting (e.g., Surabaya, Bali) and where do you want to go?</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl">Travel Dates & Group Size</h4>
                    <p className="text-stone-600 text-sm">When are you planning to travel and how many people are in your private group?</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl">Specific Safety Concerns</h4>
                    <p className="text-stone-600 text-sm">Do you have any health conditions or specific safety questions we should address?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 p-10 md:p-16 rounded-[40px] border border-stone-100 shadow-xl">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Message Sent!</h2>
                  <p className="text-stone-600 mb-8">Thank you for reaching out. Our team will get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-olive font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-stone-500">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-stone-500">Message</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell us about your travel plans..."
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-olive text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-olive/90 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Response Standard */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Our Response Standard</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">We believe in human-led communication for complex travel planning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Users className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Real Human Response</h3>
              <p className="text-stone-400 text-sm">Every inquiry is handled by a member of our operational team who knows the routes and safety conditions personally.</p>
            </div>
            <div>
              <Shield className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No Automated Bots</h3>
              <p className="text-stone-400 text-sm">We do not use automated bots for planning. Your safety is too important for generic, machine-generated advice.</p>
            </div>
            <div>
              <Info className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Expert Operational Advice</h3>
              <p className="text-stone-400 text-sm">We provide advice based on current volcano status, weather conditions, and logistical reality, not just sales goals.</p>
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

// app/contact/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
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
    <main className="min-h-screen bg-brand-cream">
      <JsonLd data={contactSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
          alt="Contact JVTO"
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
            className="inline-flex items-center gap-3 bg-brand-olive/80 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full mb-10 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl"
          >
            Operational <span className="text-brand-accent italic">Certainty</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-[120px] font-serif text-white mb-10 leading-[0.85] tracking-tight"
          >
            Contact the <br /> <span className="italic font-light text-brand-accent">JVTO Team</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Operational certainty starts with a conversation. Reach out to our team for expert planning, safety advice, and booking support.
          </p>
        </div>
      </section>

      {/* Direct Communication Channels */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <a 
              href={SITE_CONFIG.whatsapp.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-12 rounded-[64px] border border-stone-50 shadow-xl shadow-brand-olive/5 hover:shadow-2xl hover:shadow-brand-olive/10 transition-all group"
            >
              <MessageSquare className="text-brand-accent mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-3xl font-serif text-brand-ink mb-6 leading-tight">WhatsApp Support</h3>
              <p className="text-stone-500 font-light leading-relaxed text-lg mb-10">Fastest response for urgent inquiries and real-time planning support.</p>
              <span className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                Chat on WhatsApp <ArrowRight size={20} />
              </span>
            </a>
            <a 
              href={`mailto:${SITE_CONFIG.organization.email}`}
              className="bg-white p-12 rounded-[64px] border border-stone-50 shadow-xl shadow-brand-olive/5 hover:shadow-2xl hover:shadow-brand-olive/10 transition-all group"
            >
              <Mail className="text-brand-accent mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-3xl font-serif text-brand-ink mb-6 leading-tight">Email Planning</h3>
              <p className="text-stone-500 font-light leading-relaxed text-lg mb-10">Best for detailed itineraries, group bookings, and formal inquiries.</p>
              <span className="text-brand-olive font-bold text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                Send an Email <ArrowRight size={20} />
              </span>
            </a>
            <div className="bg-brand-olive text-white p-12 rounded-[64px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <MapPin className="text-brand-accent mb-8 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-3xl font-serif mb-6 leading-tight">Office Location</h3>
              <p className="text-white/80 font-light leading-relaxed text-lg mb-4">{SITE_CONFIG.organization.address.street}</p>
              <p className="text-brand-accent font-bold uppercase tracking-[0.2em] text-[10px]">{SITE_CONFIG.organization.address.city}, {SITE_CONFIG.organization.address.region}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include in Your Inquiry */}
      <section className="py-40 bg-white rounded-[80px] shadow-2xl shadow-brand-olive/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-serif text-brand-ink mb-12 leading-[0.9] tracking-tight">What to Include <br /> <span className="italic font-light text-brand-accent">in Your Inquiry</span></h2>
              <p className="text-2xl text-stone-500 mb-16 font-light leading-relaxed tracking-wide">To provide the most accurate operational advice, please include the following details:</p>
              <div className="space-y-10">
                {[
                  { title: "Origin & Destination", desc: "Where are you starting (e.g., Surabaya, Bali) and where do you want to go?" },
                  { title: "Travel Dates & Group Size", desc: "When are you planning to travel and how many people are in your private group?" },
                  { title: "Specific Safety Concerns", desc: "Do you have any health conditions or specific safety questions we should address?" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-olive shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif text-brand-ink mb-2">{item.title}</h4>
                      <p className="text-stone-500 font-light leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-cream p-12 md:p-20 rounded-[80px] border border-stone-50 shadow-2xl shadow-brand-olive/5">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive mx-auto mb-10">
                    <Send size={40} />
                  </div>
                  <h2 className="text-4xl font-serif text-brand-ink mb-6">Message Sent!</h2>
                  <p className="text-xl text-stone-500 mb-12 font-light leading-relaxed">Thank you for reaching out. Our team will get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-olive font-bold text-xs uppercase tracking-widest border-b border-brand-olive/20 pb-1 hover:border-brand-olive transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 ml-4">Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full px-8 py-6 rounded-[32px] bg-white border border-stone-100 focus:outline-none focus:ring-4 focus:ring-brand-olive/5 transition-all text-lg font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 ml-4">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full px-8 py-6 rounded-[32px] bg-white border border-stone-100 focus:outline-none focus:ring-4 focus:ring-brand-olive/5 transition-all text-lg font-light"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 ml-4">Message</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="Tell us about your travel plans..."
                      className="w-full px-8 py-6 rounded-[32px] bg-white border border-stone-100 focus:outline-none focus:ring-4 focus:ring-brand-olive/5 transition-all text-lg font-light resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-olive text-white py-8 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-ink transition-all flex items-center justify-center gap-4 disabled:opacity-70 shadow-xl shadow-brand-olive/20 group"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Response Standard */}
      <section className="py-40 bg-brand-ink text-white rounded-[80px] -mt-20 relative z-10 shadow-2xl shadow-brand-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tight">Our Response <br /> <span className="italic font-light text-brand-accent">Standard</span></h2>
            <p className="text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">We believe in human-led communication for complex travel planning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Users, title: "Real Human Response", desc: "Every inquiry is handled by a member of our operational team who knows the routes personally." },
              { icon: Shield, title: "No Automated Bots", desc: "We do not use automated bots for planning. Your safety is too important for machine-generated advice." },
              { icon: Info, title: "Expert Operational Advice", desc: "We provide advice based on current volcano status and logistical reality, not just sales goals." }
            ].map((item, i) => (
              <div key={i} className="group">
                <item.icon className="text-brand-accent mb-8 group-hover:scale-110 transition-transform" size={56} />
                <h3 className="text-3xl font-serif mb-6 leading-tight">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-lg tracking-wide">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-40 bg-brand-olive text-white rounded-t-[80px] shadow-2xl shadow-brand-olive/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-serif mb-16 leading-[0.9] tracking-tight">Ready for Operational <br /> <span className="italic font-light text-brand-accent">Certainty?</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/tours" className="bg-brand-accent text-brand-ink px-16 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-4 group shadow-xl shadow-brand-olive/20">
              Explore Private Tours <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/verify-jvto" className="bg-white/10 border border-white/20 text-white px-16 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all backdrop-blur-md shadow-xl">
              Verify JVTO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

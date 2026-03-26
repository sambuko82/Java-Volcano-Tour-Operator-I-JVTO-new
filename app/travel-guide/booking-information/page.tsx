// app/travel-guide/booking-information/page.tsx
'use client';

import { motion } from 'motion/react';
import { Calendar, CreditCard, Mail, CheckCircle, ExternalLink, Info, Clock, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

const bookingSteps = [
  {
    icon: <Mail className="text-orange-500" />,
    title: 'Inquiry',
    desc: 'Contact us via WhatsApp or email with your preferred dates and group size.'
  },
  {
    icon: <Calendar className="text-orange-500" />,
    title: 'Confirmation',
    desc: 'We verify availability and send you a detailed itinerary and price quote.'
  },
  {
    icon: <CreditCard className="text-orange-500" />,
    title: 'Deposit',
    desc: 'A small deposit is required to secure your booking and permits.'
  },
  {
    icon: <CheckCircle className="text-orange-500" />,
    title: 'Final Details',
    desc: 'We send you a final confirmation and pickup details for your tour.'
  }
];

export default function BookingInformationPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Booking Information",
    "description": "Step-by-step guide on how to book a private tour with Java Volcano Tour Operator."
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={schema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Booking Information: How It Works</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Our booking process is designed for transparency and certainty. We provide clear steps and secure payment options for all private tours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {bookingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <Info className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">Important Booking Notes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-orange-500" /> Lead Time
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    We recommend booking at least 2-4 weeks in advance, especially for high season (July-August), to ensure permit availability for Ijen and Bromo.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <Shield size={20} className="text-orange-500" /> Cancellation Policy
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    Our cancellation policy is designed to be fair to both guests and our local team. Full details can be found in our <a href="/policy/booking-payment-cancellation" className="text-brand-olive font-bold underline">Booking Policy</a>.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                    <CreditCard size={20} className="text-orange-500" /> Payment Methods
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    We accept bank transfers (IDR), international wire transfers (Wise), and major credit cards via secure payment links.
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href={SITE_CONFIG.whatsapp.waLink} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand-olive text-white rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg"
                  >
                    Start Your Inquiry <ExternalLink size={18} />
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

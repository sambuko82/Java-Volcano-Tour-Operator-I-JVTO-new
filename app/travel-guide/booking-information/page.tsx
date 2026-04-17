// app/travel-guide/booking-information/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Calendar, CreditCard, Mail, CheckCircle, ExternalLink, Info, Clock, Shield, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';

const stepIcons = [Calendar, Mail, Shield, CreditCard, FileText, CheckCircle];

export default function BookingInformationPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Booking Information - How JVTO Private Tours Work",
    "description": "Plain-language booking guide for JVTO private tours: inquiry, deposit, balance payment, Official E-Voucher, changes, and Travel Credit."
  };

  return (
    <main className="min-h-screen bg-stone-50">
      <JsonLd data={schema} />
      <Navbar />

      <section className="bg-brand-olive text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-orange-300 uppercase tracking-[0.25em] text-xs font-bold mb-6">Booking Guide</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Booking Information: How JVTO Private Tours Work</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              This is the plain-language flow for choosing a route, checking availability, paying the required deposit, receiving your Official E-Voucher, and understanding Travel Credit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <Info className="text-orange-500 mb-5" size={34} />
              <h2 className="text-2xl font-display font-bold mb-3">Current Website Flow</h2>
              <p className="text-stone-600 leading-relaxed">{BOOKING_POLICY.currentBookingMode}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <Shield className="text-orange-500 mb-5" size={34} />
              <h2 className="text-2xl font-display font-bold mb-3">When Booking Is Confirmed</h2>
              <p className="text-stone-600 leading-relaxed">{BOOKING_POLICY.confirmationRule}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <CreditCard className="text-orange-500 mb-5" size={34} />
              <h2 className="text-2xl font-display font-bold mb-3">Deposit Rule</h2>
              <p className="text-stone-600 leading-relaxed">
                Standard deposit is {BOOKING_POLICY.payment.standardDeposit}. {BOOKING_POLICY.payment.closeDepartureRule}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm mb-12">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle className="text-brand-olive" size={32} />
              <h2 className="text-3xl font-display font-bold">How to Book</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BOOKING_POLICY.howToBook.map((step, index) => {
                const Icon = stepIcons[index] || CheckCircle;
                return (
                  <div key={step} className="flex gap-5 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-500 shrink-0 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-400 mb-2">Step {index + 1}</p>
                      <p className="text-stone-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-6">Payment Summary</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>Official pricing and accounting use {BOOKING_POLICY.payment.currency}.</p>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">Balance deadlines</h3>
                  <ul className="space-y-2">
                    {BOOKING_POLICY.payment.balanceDeadlines.map((item) => (
                      <li key={item} className="flex gap-3"><CheckCircle size={18} className="text-orange-500 shrink-0 mt-1" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">Accepted balance methods</h3>
                  <ul className="space-y-2">
                    {BOOKING_POLICY.payment.balanceMethods.map((item) => (
                      <li key={item} className="flex gap-3"><CheckCircle size={18} className="text-orange-500 shrink-0 mt-1" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-6">Changes, Cancellation & Travel Credit</h2>
              <div className="space-y-5 text-stone-600 leading-relaxed">
                <p>{BOOKING_POLICY.cancellation.atLeast48h}</p>
                <p>{BOOKING_POLICY.cancellation.lessThan48h}</p>
                <p>{BOOKING_POLICY.cancellation.travelCredit}</p>
                <p>{BOOKING_POLICY.cancellation.closures}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-brand-olive text-white p-8 md:p-10 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-display font-bold mb-4">Use Official Channels Only</h2>
                <p className="text-white/75 leading-relaxed">
                  JVTO is not responsible for offers, payment requests, or instructions sent outside the official website, WhatsApp, or email listed on this site.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a href={SITE_CONFIG.whatsapp.waLink} target="_blank" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all">
                  Start Inquiry <ExternalLink size={18} />
                </a>
                <Link href="/policy/booking-payment-cancellation" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                  Read Policy <Clock size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

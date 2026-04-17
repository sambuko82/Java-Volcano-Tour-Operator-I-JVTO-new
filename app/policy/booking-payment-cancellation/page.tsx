// app/policy/booking-payment-cancellation/page.tsx
'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ExternalLink, Info, Scale, Shield, CreditCard, FileText, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';

export default function BookingPolicyPage() {
  const schema = {
    "@type": "WebPage",
    "name": "JVTO Booking, Payment & Cancellation Policy",
    "description": "Official JVTO booking, payment, cancellation, rescheduling, Travel Credit, and payment verification terms."
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
            <p className="text-orange-300 uppercase tracking-[0.25em] text-xs font-bold mb-6">Official Policy</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">JVTO Booking, Payment & Cancellation Policy</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Contractual booking terms for {BOOKING_POLICY.brand}, operated by {BOOKING_POLICY.operator}.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-14">
            <section id="official-channels">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">1. Operator Identity & Official Channels</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>This policy applies to enquiries, quotations, bookings, amendments, cancellations, and tour participation with {BOOKING_POLICY.brand}.</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="p-5 bg-stone-50 rounded-2xl"><strong>Website</strong><br />{BOOKING_POLICY.officialChannels.website}</li>
                  <li className="p-5 bg-stone-50 rounded-2xl"><strong>WhatsApp</strong><br />{BOOKING_POLICY.officialChannels.whatsapp}</li>
                  <li className="p-5 bg-stone-50 rounded-2xl"><strong>Email</strong><br />{BOOKING_POLICY.officialChannels.email}</li>
                </ul>
                <p>JVTO is not responsible for offers, instructions, or payment requests made outside these official channels.</p>
              </div>
            </section>

            <section id="precedence">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">2. Order of Precedence</h2>
              <ol className="space-y-3 text-stone-600 leading-relaxed">
                {BOOKING_POLICY.precedence.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="confirmation">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">3. When a Booking Is Confirmed</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>{BOOKING_POLICY.confirmationRule}</p>
                <p>Enquiries, messages, and quotations are not binding until this confirmation rule is complete.</p>
                <p>JVTO operates private, all-inclusive tours. Only items explicitly written on the official tour page and/or your Official E-Voucher / Invoice are contractually binding.</p>
              </div>
            </section>

            <section id="payment">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">4. Payments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 leading-relaxed">
                <div className="space-y-4">
                  <CreditCard className="text-orange-500" size={32} />
                  <p>Official pricing and accounting are in <strong>{BOOKING_POLICY.payment.currency}</strong>.</p>
                  <p>Standard deposit: <strong>{BOOKING_POLICY.payment.standardDeposit}</strong>.</p>
                  <p>{BOOKING_POLICY.payment.closeDepartureRule}</p>
                </div>
                <div className="space-y-4">
                  <FileText className="text-orange-500" size={32} />
                  <h3 className="font-bold text-stone-900">Balance deadlines</h3>
                  {BOOKING_POLICY.payment.balanceDeadlines.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </section>

            <section id="payment-security">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">5. Payment Security & Anti-Fraud</h2>
              <ul className="space-y-3 text-stone-600 leading-relaxed">
                {BOOKING_POLICY.payment.antiFraud.map((item) => (
                  <li key={item} className="flex gap-3"><Shield size={18} className="text-orange-500 shrink-0 mt-1" />{item}</li>
                ))}
              </ul>
            </section>

            <section id="cancellation">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">6. Cancellation, Closures & Travel Credit</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>{BOOKING_POLICY.cancellation.atLeast48h}</p>
                <p>{BOOKING_POLICY.cancellation.lessThan48h}</p>
                <p>{BOOKING_POLICY.cancellation.travelCredit}</p>
                <p>{BOOKING_POLICY.cancellation.closures}</p>
              </div>
            </section>

            <section id="rescheduling">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">7. Amendments & Rescheduling</h2>
              <ul className="space-y-3 text-stone-600 leading-relaxed">
                {BOOKING_POLICY.rescheduling.map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle size={18} className="text-orange-500 shrink-0 mt-1" />{item}</li>
                ))}
              </ul>
            </section>

            <section id="liability">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">8. Liability & Insurance</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>Volcano tourism involves inherent risk. Guests are responsible for comprehensive travel insurance and accurate disclosure of relevant health or logistics information.</p>
                <p>JVTO may adjust or cancel a route when weather, official access rules, volcanic activity, health screening, or local safety conditions require it.</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-center">
            <p className="text-stone-500 text-sm">Last Updated: {BOOKING_POLICY.lastUpdated}</p>
            <Link href="/travel-guide/booking-information" className="text-brand-olive font-bold hover:text-orange-500 transition-colors flex items-center gap-2">
              Plain-Language Booking Guide <Info size={16} />
            </Link>
            <a href={SITE_CONFIG.whatsapp.waLink} target="_blank" className="text-brand-olive font-bold hover:text-orange-500 transition-colors flex items-center gap-2">
              Verify Payment Details <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

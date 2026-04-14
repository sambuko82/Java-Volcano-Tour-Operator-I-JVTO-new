// app/policy/booking-payment-cancellation/page.tsx
'use client';

import { motion } from 'motion/react';
import { FileText, Shield, CheckCircle, ExternalLink, Info, Scale, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function BookingPolicyPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Booking, Payment & Cancellation Policy",
    "description": "Official policy regarding booking, payment, and cancellation for all Java Volcano Tour Operator services."
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Booking, Payment & Cancellation Policy</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Official contractual terms for all services provided by PT Java Volcano Rendezvous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl border border-stone-200 shadow-sm space-y-12">
            
            <section id="booking">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">1. Booking Process</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>1.1. All bookings must be made through our official communication channels (WhatsApp or Email).</p>
                <p>1.2. A booking is considered confirmed only after the required deposit has been received and a confirmation voucher has been issued by JVTO.</p>
                <p>1.3. Guests are responsible for providing accurate information, including full names, passport details (for permits), and any health conditions.</p>
              </div>
            </section>

            <section id="payment">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">2. Payment Terms</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>2.1. All prices are quoted in Indonesian Rupiah (IDR). We provide approximate conversions for USD, EUR, AUD, and SGD based on our fixed internal rates.</p>
                <p>2.2. A non-refundable deposit (typically 20-30%) is required at the time of booking to secure permits and logistics.</p>
                <p>2.3. The remaining balance must be paid either before the tour commences (via bank transfer/credit card) or in cash (IDR) on the first day of the tour.</p>
              </div>
            </section>

            <section id="cancellation">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">3. Cancellation & Refunds</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>3.1. Cancellations made more than 30 days before the tour start date: The deposit is non-refundable, but can be applied to a future booking within 12 months.</p>
                <p>3.2. Cancellations made 15-30 days before the tour start date: 50% of the total tour price is due.</p>
                <p>3.3. Cancellations made less than 15 days before the tour start date: 100% of the total tour price is due.</p>
                <p>3.4. If a destination is closed by national park authorities (e.g., due to volcanic activity), we will offer an alternative route or a partial refund for the specific destination fees.</p>
              </div>
            </section>

            <section id="liability">
              <h2 className="text-3xl font-display font-bold mb-6 text-brand-olive border-b border-stone-100 pb-4">4. Liability & Insurance</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>4.1. While we implement structured safety standards, adventure travel involves inherent risks. Guests are responsible for their own travel insurance.</p>
                <p>4.2. JVTO is not liable for any personal injury, loss, or damage to property during the tour, except where caused by our gross negligence.</p>
              </div>
            </section>

          </div>

          <div className="mt-12 text-center">
            <p className="text-stone-500 text-sm mb-6">Last Updated: March 2026</p>
            <a 
              href={SITE_CONFIG.whatsapp.waLink} 
              target="_blank"
              className="text-brand-olive font-bold hover:text-orange-500 transition-colors flex items-center justify-center gap-2"
            >
              Contact Legal Support <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

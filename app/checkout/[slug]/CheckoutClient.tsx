'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  CreditCard,
  FileText,
  Lock,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BOOKING_POLICY } from '@/lib/bookingPolicy';
import { SITE_CONFIG } from '@/lib/siteConfig';
import type { Tour } from '@/lib/jvtoData';

interface CheckoutClientProps {
  tour: Tour;
}

function formatIDR(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

function isWithinFourteenDays(dateValue: string): boolean {
  if (!dateValue) return false;
  const selected = new Date(`${dateValue}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = (selected.getTime() - today.getTime()) / 86_400_000;
  return diffDays >= 0 && diffDays <= 14;
}

export default function CheckoutClient({ tour }: CheckoutClientProps) {
  const [form, setForm] = useState({
    preferredDate: '',
    groupSize: 2,
    leadName: '',
    email: '',
    whatsapp: '',
    pickup: tour.origin,
    dropoff: '',
  });

  const pricing = useMemo(() => {
    const requestedPax = Number.isFinite(form.groupSize) ? Math.max(1, form.groupSize) : 1;
    const row =
      tour.pricingTable.find((item) => item.pax === requestedPax) ??
      tour.pricingTable.find((item) => item.pax >= requestedPax) ??
      tour.pricingTable[tour.pricingTable.length - 1]!;
    const total = row.price * requestedPax;
    const fullPaymentLikely = isWithinFourteenDays(form.preferredDate);
    const deposit = fullPaymentLikely ? total : Math.round(total * 0.2);
    const balance = Math.max(total - deposit, 0);

    return {
      requestedPax,
      pricePerPerson: row.price,
      total,
      deposit,
      balance,
      fullPaymentLikely,
    };
  }, [form.groupSize, form.preferredDate, tour.pricingTable]);

  const checkoutMessage = encodeURIComponent(
    [
      `Direct checkout request: ${tour.name}`,
      `Preferred date: ${form.preferredDate || 'not set'}`,
      `Group size: ${pricing.requestedPax}`,
      `Lead guest: ${form.leadName || 'not set'}`,
      `Email: ${form.email || 'not set'}`,
      `WhatsApp: ${form.whatsapp || 'not set'}`,
      `Pickup: ${form.pickup || 'not set'}`,
      `Drop-off: ${form.dropoff || 'not set'}`,
      `Estimated total: ${formatIDR(pricing.total)}`,
      `Required payment gate: ${formatIDR(pricing.deposit)}`,
      'Please verify availability and issue the official secure checkout/payment link.',
    ].join('\n')
  );

  const checkoutHref = `${SITE_CONFIG.whatsapp.waLink}?text=${checkoutMessage}`;

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />

      <section className="relative min-h-[74vh] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover scale-105"
          priority
          unoptimized
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-ink/55 to-brand-ink/15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="inline-flex items-center gap-2 bg-brand-accent text-brand-ink px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.24em] mb-8">
              <CreditCard size={14} /> Direct Checkout
            </p>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
              {tour.name} <br />
              <span className="italic font-light text-brand-accent">Booking Gate</span>
            </h1>
            <p className="text-xl text-white/75 leading-relaxed max-w-3xl">
              One package-specific checkout path for date, group size, deposit logic, policy terms, and Official E-Voucher confirmation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  ['1', 'Route locked', tour.duration],
                  ['2', 'Availability gate', 'Before payment confirmation'],
                  ['3', 'Payment gate', pricing.fullPaymentLikely ? 'Full payment may apply' : '20% deposit'],
                  ['4', 'Official proof', 'E-Voucher / Invoice PDF'],
                ].map(([number, title, detail]) => (
                  <div key={title} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                    <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Step {number}</p>
                    <h2 className="text-xl font-display font-bold mb-2 text-brand-ink">{title}</h2>
                    <p className="text-stone-500 text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <Calendar className="text-orange-500" size={32} />
                  <h2 className="text-3xl font-display font-bold">Checkout Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Preferred Date</span>
                    <input
                      type="date"
                      value={form.preferredDate}
                      onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Group Size</span>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={form.groupSize}
                      onChange={(event) => setForm({ ...form, groupSize: Number(event.target.value) })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Lead Guest Name</span>
                    <input
                      type="text"
                      value={form.leadName}
                      onChange={(event) => setForm({ ...form, leadName: event.target.value })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                      placeholder="name@example.com"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">WhatsApp</span>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(event) => setForm({ ...form, whatsapp: event.target.value })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                      placeholder="+62..."
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Pickup</span>
                    <input
                      type="text"
                      value={form.pickup}
                      onChange={(event) => setForm({ ...form, pickup: event.target.value })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                    />
                  </label>
                  <label className="space-y-2 md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Drop-off</span>
                    <input
                      type="text"
                      value={form.dropoff}
                      onChange={(event) => setForm({ ...form, dropoff: event.target.value })}
                      className="w-full px-4 py-3 bg-stone-100 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-400"
                      placeholder="Surabaya, Bali, Malang, Ketapang, or custom"
                    />
                  </label>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="text-orange-500" size={32} />
                  <h2 className="text-3xl font-display font-bold">Policy Logic</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    BOOKING_POLICY.confirmationRule,
                    BOOKING_POLICY.cancellation.atLeast48h,
                    BOOKING_POLICY.cancellation.lessThan48h,
                    BOOKING_POLICY.payment.antiFraud[1],
                  ].map((item) => (
                    <p key={item} className="flex gap-3 text-stone-600 leading-relaxed">
                      <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-1" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl shadow-brand-olive/10">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-400 mb-3">Estimated Checkout</p>
                  <h2 className="text-3xl font-display font-bold text-brand-ink mb-8">{tour.name}</h2>
                  <div className="space-y-5 text-stone-600">
                    <div className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                      <span>Price per person</span>
                      <strong className="text-brand-ink">{formatIDR(pricing.pricePerPerson)}</strong>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                      <span>Group size</span>
                      <strong className="text-brand-ink">{pricing.requestedPax} pax</strong>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                      <span>Total estimate</span>
                      <strong className="text-brand-ink">{formatIDR(pricing.total)}</strong>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-stone-100 pb-4">
                      <span>{pricing.fullPaymentLikely ? 'Payment gate' : '20% deposit gate'}</span>
                      <strong className="text-orange-600">{formatIDR(pricing.deposit)}</strong>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Balance after gate</span>
                      <strong className="text-brand-ink">{formatIDR(pricing.balance)}</strong>
                    </div>
                  </div>
                  {pricing.fullPaymentLikely && (
                    <p className="mt-6 p-4 bg-orange-50 text-orange-800 rounded-2xl text-sm leading-relaxed">
                      Day 1 appears within 14 days, so full payment may be required under JVTO policy.
                    </p>
                  )}
                  <a
                    href={checkoutHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-jvto-orange text-white py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-jvto-orange-hover transition-all shadow-xl shadow-jvto-orange/20"
                  >
                    Request Secure Checkout <ArrowRight size={18} />
                  </a>
                  <p className="mt-5 text-xs text-stone-400 leading-relaxed">
                    This button sends the package checkout summary to JVTO through the official WhatsApp channel for availability lock and secure payment-link issuance.
                  </p>
                </div>

                <div className="bg-brand-ink text-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <Lock className="text-brand-accent" size={24} />
                    <h2 className="font-display font-bold text-xl">Official Channel Rule</h2>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Use only the official website, WhatsApp, email, secure checkout link, or bank accounts published in JVTO policy.
                  </p>
                  <Link href="/policy/booking-payment-cancellation" className="text-brand-accent text-xs font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2">
                    Read Payment Policy <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-stone-200">
                  <div className="flex items-center gap-3 mb-5">
                    <ShieldCheck className="text-orange-500" size={24} />
                    <h2 className="font-display font-bold text-xl">Voucher Priority</h2>
                  </div>
                  <ol className="space-y-3 text-sm text-stone-600">
                    {BOOKING_POLICY.precedence.slice(0, 4).map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-orange-500 font-bold">{index + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

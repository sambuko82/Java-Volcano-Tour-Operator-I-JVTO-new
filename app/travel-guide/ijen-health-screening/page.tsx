// app/travel-guide/ijen-health-screening/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { Activity, ShieldCheck, AlertTriangle, CheckCircle, ExternalLink, Info, FileText, Heart, XCircle, Clock, MapPin, ArrowRight, Stethoscope, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { MEDICAL_PARTNERS } from '@/lib/verificationData';

const healthFaqs = [
  {
    question: "What happens if I fail the health check?",
    answer: "If the medical professional at the certified clinic determines that you are not fit for the Ijen hike (e.g., due to high blood pressure), we will respect their decision. We will provide alternative low-altitude activities or a partial refund according to our policy. Your safety is more important than the tour."
  },
  {
    question: "Can I bring my own medical certificate?",
    answer: "While you can bring a certificate from your home country, local regulations often require a certificate from a recognized Indonesian clinic within 3 days of the tour. We include a visit to a certified local clinic to ensure your documentation is 100% compliant."
  }
];

export default function IjenHealthScreeningPage() {
  const schema = {
    "@type": "WebPage",
    "name": "Ijen Health Screening",
    "description": "Mandatory health screening and safety protocols for visiting Ijen Crater."
  };

  return (
    <main className="min-h-screen bg-white">
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
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Ijen Health Certificate: Mandatory Safety Requirements</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Operational certainty at Ijen Crater starts with a real medical assessment. We ensure every guest is medically cleared for the 2,386m altitude and sulfur exposure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Check is Mandatory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Why This Check is Mandatory</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Altitude & Sulfur Exposure</h3>
                    <p className="text-stone-600 leading-relaxed">Ijen Crater is at 2,386m altitude. The descent into the crater involves exposure to high concentrations of sulfur gas. This combination can be dangerous for guests with underlying respiratory or cardiac conditions.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Official Regulation Compliance</h3>
                    <p className="text-stone-600 leading-relaxed">Since early 2024, the Ijen National Park authorities have mandated a medical certificate for all visitors. We follow this regulation to ensure your entry is legal and your health is protected.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Ijen Health Safety"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How the JVTO Health Check Works & Verified Partners */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">How it Works</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Certified Clinic Visit</h3>
                    <p className="text-stone-600 text-sm">We take you to a certified medical clinic in Bondowoso or Banyuwangi before the tour begins.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Real Medical Assessment</h3>
                    <p className="text-stone-600 text-sm">A licensed medical professional checks your blood pressure, heart rate, and general physical readiness for the hike.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Official Certification</h3>
                    <p className="text-stone-600 text-sm">If cleared, you receive an official medical certificate required for park entry. We handle the paperwork and fees.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 text-orange-500 mb-6">
                <Stethoscope size={24} />
                <h3 className="text-2xl font-display font-bold text-stone-900">Verified Medical Partners</h3>
              </div>
              <div className="space-y-6">
                {MEDICAL_PARTNERS.map((partner, i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b border-stone-100 last:border-0 last:pb-0">
                    <div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-brand-olive shrink-0">
                      {partner.type.includes('Clinic') || partner.type.includes('Center') ? <Building2 size={20} /> : <Stethoscope size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{partner.name}</h4>
                      <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-1">{partner.type}</p>
                      <div className="flex items-center gap-3 text-[10px] text-stone-500">
                        <span className="flex items-center gap-1"><MapPin size={10} /> {partner.location}</span>
                        <span className="flex items-center gap-1 text-green-600 font-bold"><CheckCircle size={10} /> {partner.verification}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Not Do */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">What We Do Not Do</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">We refuse to participate in industry shortcuts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <XCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No Fake Health Letters</h3>
              <p className="text-stone-400 text-sm">Many operators provide fake or pre-signed letters. We refuse this practice. Every JVTO check is real and performed by a doctor.</p>
            </div>
            <div>
              <XCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No Skipping the Clinic</h3>
              <p className="text-stone-400 text-sm">We do not &apos;bypass&apos; the health check. It is a mandatory part of our operational protocol for every Ijen guest.</p>
            </div>
            <div>
              <XCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">No Shortcuts on Guest Safety</h3>
              <p className="text-stone-400 text-sm">We prioritize your health over the tour schedule. If you are not fit to hike, we will not take you to the crater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Logistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Practical Logistics</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">What to expect during the health screening process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">Timing & Location</h3>
              <p className="text-stone-600 text-sm">The check takes approximately 15-30 minutes and is performed at a clinic on the way to your accommodation or the park.</p>
            </div>
            <div>
              <FileText className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">What to Bring</h3>
              <p className="text-stone-600 text-sm">You only need your passport or a clear copy/photo of it for registration at the clinic.</p>
            </div>
            <div>
              <AlertTriangle className="text-orange-500 mx-auto mb-6" size={40} />
              <h3 className="text-xl font-bold mb-2">What Happens if You Fail</h3>
              <p className="text-stone-600 text-sm">We will discuss alternative activities or refund options. We never force a guest to hike against medical advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={healthFaqs} />

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-brand-olive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/travel-guide" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Back to Travel Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

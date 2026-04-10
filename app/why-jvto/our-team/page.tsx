// app/why-jvto/our-team/page.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Shield, Users, Star, ArrowRight, CheckCircle2, Heart, Award, Briefcase } from 'lucide-react';
import { DESTINATIONS, TOURS, CREW } from '@/lib/jvtoData';

export default function TeamPage() {
  const teamSchema = {
    "@type": "WebPage",
    "name": "Our Team",
    "description": "Meet the local experts behind Java Volcano Tour Operator."
  };

  return (
    <main className="min-h-screen bg-page">
      <JsonLd data={teamSchema} />
      <Navbar />
      
      {/* Header */}
      <section className="bg-accent text-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Local Team, Daily Execution</h1>
            <p className="text-xl text-white/70">The local experts behind your East Java expedition, trained for real logistics and consistent execution.</p>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Safety Oversight */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
                alt="Agung Sambuko"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-text-primary">Leadership & Safety Oversight</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-accent">Agung Sambuko (Founder & Safety Lead)</h3>
                  <p className="text-text-secondary leading-relaxed">As an active Tourist Police officer, Agung brings a unique authority-backed perspective to our operations. He oversees all safety protocols and emergency response training, ensuring that JVTO operates with a &apos;duty-first&apos; mindset.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-accent">Operational Command Structure</h3>
                  <p className="text-text-secondary leading-relaxed">Our team follows a clear command structure for safety decisions. When conditions change on a volcano, the decision to proceed or abort is made by our safety lead, removing any conflict of interest between sales and guest security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Field Team */}
      <section className="py-24 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">The Field Team</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Our 14-person local team is trained for real East Java logistics and guest support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-3xl border border-border-base">
              <Award className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Certified Local Guides</h3>
              <p className="text-text-secondary text-sm">Our guides are not just storytellers; they are trained in first aid, volcanic safety, and guest management.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border-base">
              <Briefcase className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Professional Drivers</h3>
              <p className="text-text-secondary text-sm">Expert drivers with impeccable safety records and deep knowledge of East Java&apos;s rugged terrain.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border-base">
              <Users className="text-jvto-orange mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Logistics Support</h3>
              <p className="text-text-secondary text-sm">A dedicated back-office team ensuring that every private tour runs with operational precision.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CREW.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all bg-card flex items-center justify-center border border-border-base">
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Users size={64} className="text-text-secondary/30" />
                  )}
                </div>
                <h3 className="text-xl font-display font-bold mb-1 text-text-primary">{member.name}</h3>
                <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.about || member.highlights}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Standards */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-text-primary">Training Standards</h2>
            <p className="text-text-secondary">We invest in our team to ensure your safety.</p>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-jvto-orange/10 rounded-full flex items-center justify-center text-jvto-orange shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Safety & Emergency Response</h3>
                <p className="text-text-secondary">All field staff undergo regular training in first aid, evacuation procedures, and volcanic gas safety protocols.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-jvto-orange/10 rounded-full flex items-center justify-center text-jvto-orange shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Guest Support Protocols</h3>
                <p className="text-text-secondary">Our team is trained in international guest service standards, ensuring clear communication and proactive support throughout your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Impact & Continuity */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Local Impact & Continuity</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-jvto-orange">Why We Hire Locally</h3>
                  <p className="text-stone-400 leading-relaxed">We believe that the best hosts are those who call East Java home. Hiring locally ensures deep cultural knowledge and a genuine passion for the region.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-jvto-orange">Long-Term Team Commitment</h3>
                  <p className="text-stone-400 leading-relaxed">Many of our team members have been with us since 2015. This continuity ensures a consistent level of service and a shared commitment to our safety-first mission.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://javavolcano-touroperator.com/assets/img/hero/home.webp"
                alt="Local Team"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Operational Certainty? */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready for Operational Certainty?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-jvto-orange text-white px-10 py-4 rounded-full font-bold hover:bg-jvto-orange/90 transition-all shadow-lg shadow-jvto-orange/20 flex items-center gap-2">
              Explore Private Tours <ArrowRight size={20} />
            </Link>
            <Link href="/why-jvto/our-story" className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

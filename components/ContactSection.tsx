'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    tourType: 'Custom / Not Sure',
    message: '',
    contactMethod: 'WhatsApp'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="section-padding bg-jvto-navy text-white overflow-hidden">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Trust & Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="micro-label inline-block px-6 py-2 bg-white/5 rounded-full text-jvto-orange">
                Direct Connection
              </div>
              <h2 className="text-5xl md:text-7xl leading-tight">Ready to Start <br /> Your <span className="text-jvto-orange">Journey?</span></h2>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
                Our team is ready to help you craft the perfect private itinerary. Whether you have a specific route in mind or need expert advice, we&apos;re just a message away.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-jvto-orange">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="micro-label text-white/40 mb-2">Police-Led Safety</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">Every Bromo tour is overseen by active tourist police officers for maximum security.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-jvto-lime">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="micro-label text-white/40 mb-2">Medical Verification</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">Official health screenings for Ijen routes, ensuring compliance with local regulations.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-jvto-orange group-hover:bg-jvto-orange group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="micro-label text-white/30 mb-1">WhatsApp Support</div>
                  <div className="text-xl font-bold">{SITE_CONFIG.whatsapp.number}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-jvto-orange group-hover:bg-jvto-orange group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="micro-label text-white/30 mb-1">Email Inquiry</div>
                  <div className="text-xl font-bold">{SITE_CONFIG.organization.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Structured Form */}
          <div className="bg-white rounded-[60px] p-10 md:p-16 text-jvto-navy shadow-2xl relative">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-8"
              >
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-bold">Inquiry Received</h3>
                <p className="text-jvto-muted font-light">Our team will contact you via {formData.contactMethod} within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-jvto-navy font-bold uppercase tracking-widest text-xs underline underline-offset-8"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="micro-label ml-4">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-8 py-5 bg-jvto-off border border-jvto-border rounded-full focus:bg-white focus:border-jvto-navy transition-all outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="micro-label ml-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-8 py-5 bg-jvto-off border border-jvto-border rounded-full focus:bg-white focus:border-jvto-navy transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="micro-label ml-4">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="+62..."
                      className="w-full px-8 py-5 bg-jvto-off border border-jvto-border rounded-full focus:bg-white focus:border-jvto-navy transition-all outline-none text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="micro-label ml-4">Preferred Contact</label>
                    <div className="flex gap-3">
                      {['WhatsApp', 'Email'].map(method => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({...formData, contactMethod: method})}
                          className={`flex-1 py-5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${
                            formData.contactMethod === method 
                              ? 'bg-jvto-navy text-white shadow-xl' 
                              : 'bg-jvto-off text-jvto-muted border border-jvto-border hover:bg-stone-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="micro-label ml-4">Route Interest</label>
                  <div className="relative">
                    <select 
                      value={formData.tourType}
                      onChange={e => setFormData({...formData, tourType: e.target.value})}
                      className="w-full px-8 py-5 bg-jvto-off border border-jvto-border rounded-full focus:bg-white focus:border-jvto-navy transition-all outline-none appearance-none text-sm"
                    >
                      <option>Custom / Not Sure</option>
                      <option>Bromo Midnight (1D1N)</option>
                      <option>Bromo & Ijen (3D2N)</option>
                      <option>Full East Java Circuit (4D+)</option>
                      <option>Family Safari Adventure</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-jvto-muted">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="micro-label ml-4">Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your group size, travel dates, or any special requirements..."
                    className="w-full px-8 py-6 bg-jvto-off border border-jvto-border rounded-[32px] focus:bg-white focus:border-jvto-navy transition-all outline-none resize-none text-sm"
                  />
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-jvto-navy text-white py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-jvto-navy-mid transition-all shadow-2xl shadow-jvto-navy/20 flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Inquiry <Send size={18} />
                    </>
                  )}
                </button>
                
                <p className="text-center micro-label text-jvto-muted/50">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

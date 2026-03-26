'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, ShieldCheck, Activity } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Trust & Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-stone-400 text-lg max-w-lg">
                Our team is ready to help you craft the perfect private itinerary. Whether you have a specific route in mind or need expert advice, we&apos;re just a message away.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-orange-500">
                  <ShieldCheck size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">Police-Led Safety</span>
                </div>
                <p className="text-stone-500 text-sm">Every Bromo tour is overseen by active tourist police officers for maximum security.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-olive">
                  <Activity size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">Medical Verification</span>
                </div>
                <p className="text-stone-500 text-sm">Official health screenings for Ijen routes, ensuring compliance with local regulations.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-500">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest font-bold">WhatsApp Support</div>
                  <div className="text-lg font-bold">{SITE_CONFIG.whatsapp.number}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-500">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest font-bold">Email Inquiry</div>
                  <div className="text-lg font-bold">{SITE_CONFIG.organization.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Structured Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-stone-900 shadow-2xl relative">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold">Inquiry Received</h3>
                <p className="text-stone-600">Our team will contact you via {formData.contactMethod} within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-olive font-bold underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="+62..."
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Preferred Contact</label>
                    <div className="flex gap-2">
                      {['WhatsApp', 'Email'].map(method => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({...formData, contactMethod: method})}
                          className={`flex-1 py-4 rounded-2xl font-bold text-sm transition-all ${
                            formData.contactMethod === method 
                              ? 'bg-stone-900 text-white shadow-lg' 
                              : 'bg-stone-50 text-stone-400 border border-stone-100 hover:bg-stone-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Route Interest</label>
                  <select 
                    value={formData.tourType}
                    onChange={e => setFormData({...formData, tourType: e.target.value})}
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none appearance-none"
                  >
                    <option>Custom / Not Sure</option>
                    <option>Bromo Midnight (1D1N)</option>
                    <option>Bromo & Ijen (3D2N)</option>
                    <option>Full East Java Circuit (4D+)</option>
                    <option>Family Safari Adventure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your group size, travel dates, or any special requirements..."
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none resize-none"
                  />
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-orange-500 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Inquiry <Send size={20} />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-stone-400">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

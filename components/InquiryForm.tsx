'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle?: string;
}

export default function InquiryForm({ isOpen, onClose, tourTitle }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    departureCity: 'Surabaya',
    preferredDate: '',
    groupSize: 1,
    message: tourTitle ? `I'm interested in the ${tourTitle} tour.` : ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Mocking submission for now
    setTimeout(() => {
      setStatus('success');
      // In a real app: await fetch('/api/inquiry', { method: 'POST', body: JSON.stringify(formData) })
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          <div className="md:col-span-2 bg-brand-olive p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Plan Your Adventure</h2>
              <p className="text-stone-300 mb-8">Tell us your travel plans and our expert team will craft the perfect private itinerary for you.</p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-orange-400" />
                <span>100% Private Tours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-orange-400" />
                <span>Expert Local Guides</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-orange-400" />
                <span>Police-Led Safety</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Inquiry Sent!</h3>
                  <p className="text-stone-600 mb-8">Thank you for reaching out. Our team will contact you within 24 hours via email or WhatsApp.</p>
                  <button 
                    onClick={onClose}
                    className="bg-brand-olive text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-all"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-stone-500">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-stone-500">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-stone-500">WhatsApp (Optional)</label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="+62..."
                        className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-stone-500">Departure City</label>
                      <select
                        value={formData.departureCity}
                        onChange={e => setFormData({...formData, departureCity: e.target.value})}
                        className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none appearance-none"
                      >
                        <option>Surabaya</option>
                        <option>Malang</option>
                        <option>Bali</option>
                        <option>Yogyakarta</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-stone-500">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                        className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase text-stone-500">Group Size</label>
                      <input
                        type="number"
                        min="1"
                        value={formData.groupSize}
                        onChange={e => setFormData({...formData, groupSize: parseInt(e.target.value)})}
                        className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-stone-500">Message / Special Requirements</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="Any specific requests or questions?"
                      className="w-full px-4 py-2 bg-stone-100 border-transparent focus:bg-white focus:border-orange-400 rounded-xl transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    disabled={status === 'submitting'}
                    className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Inquiry <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

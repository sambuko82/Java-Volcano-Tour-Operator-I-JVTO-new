// components/TrustBar.tsx
'use client';

import { Shield, CheckCircle, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  { icon: <Shield size={20} />, text: 'Police-Led Safety' },
  { icon: <CheckCircle size={20} />, text: 'Licensed Operator' },
  { icon: <Award size={20} />, text: 'ISIC Verified' },
  { icon: <Users size={20} />, text: '100% Private' }
];

export default function TrustBar() {
  return (
    <div className="bg-card border-y border-border-base py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-text-secondary font-medium text-sm tracking-wide uppercase"
            >
              <span className="text-accent">{item.icon}</span>
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

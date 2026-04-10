// app/loading.tsx
'use client';

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-jvto-off flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative w-24 h-24 mx-auto">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 border-4 border-jvto-orange/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 border-t-4 border-jvto-orange rounded-full"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-jvto-navy font-display font-bold text-xs uppercase tracking-[0.3em]"
        >
          Initializing Operational Certainty...
        </motion.p>
      </div>
    </div>
  );
}

// components/TrustpilotWidget.tsx
'use client';

import { Star } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export default function TrustpilotWidget() {
  const { aggregateRating, totalReviews, trustpilot } = SITE_CONFIG.reputation;

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#00b67a] p-3 rounded-lg">
            <Star className="text-white fill-current" size={24} />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="font-bold text-xl text-stone-900">Trustpilot</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-5 h-5 flex items-center justify-center ${
                      i < Math.floor(Number(aggregateRating)) ? 'bg-[#00b67a]' : 'bg-stone-200'
                    }`}
                  >
                    <Star className="text-white fill-current" size={12} />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-stone-600">TrustScore {aggregateRating}</span>
            </div>
          </div>
        </div>

        <div className="h-px w-full md:h-12 md:w-px bg-stone-200" />

        <div className="text-center md:text-left">
          <p className="text-sm text-stone-500 uppercase tracking-widest font-bold mb-1">Verified Reviews</p>
          <p className="text-2xl font-display font-bold text-stone-900">{totalReviews}+ Travelers</p>
        </div>

        <a 
          href={trustpilot}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-stone-800 transition-all flex items-center gap-2"
        >
          View All Reviews
        </a>
      </div>
    </div>
  );
}

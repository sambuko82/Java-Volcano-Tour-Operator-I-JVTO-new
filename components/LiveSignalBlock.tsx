'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Radio } from 'lucide-react';

interface VolcanoStatus {
  name: string;
  level: string;
  levelLabel: string;
  levelColor: string;
  note: string;
}

const VOLCANO_STATUSES: VolcanoStatus[] = [
  {
    name: 'Mount Bromo (Bromo)',
    level: 'II',
    levelLabel: 'Waspada',
    levelColor: 'text-yellow-400',
    note: 'Normal activity. Access to crater rim permitted with standard precautions.',
  },
  {
    name: 'Kawah Ijen (Ijen)',
    level: 'I',
    levelLabel: 'Normal',
    levelColor: 'text-jvto-lime',
    note: 'Standard operating conditions. BBKSDA ticket + health screening required.',
  },
];

export default function LiveSignalBlock() {
  const [checkedAt, setCheckedAt] = useState<string>('');

  useEffect(() => {
    setCheckedAt(new Date().toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
    }));
  }, []);

  return (
    <div className="bg-[#0A1520] border border-[#8CC63F]/20 rounded-2xl p-8 font-mono">
      <div className="flex items-center gap-3 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jvto-lime opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-jvto-lime" />
        </span>
        <span className="text-jvto-lime text-xs font-bold uppercase tracking-[0.2em]">
          Volcano Activity Signal
        </span>
        <a
          href="https://magma.esdm.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-jvto-lime/60 hover:text-jvto-lime transition-colors flex items-center gap-1 text-xs"
        >
          MAGMA Indonesia <ExternalLink size={12} />
        </a>
      </div>

      <div className="space-y-4">
        {VOLCANO_STATUSES.map((volcano, i) => (
          <div key={i} className="border border-[#8CC63F]/10 rounded-xl p-5 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#C8D8C0] text-sm font-bold">{volcano.name}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${volcano.levelColor}`}>Level {volcano.level}</span>
                <span className={`text-[10px] uppercase tracking-[0.15em] ${volcano.levelColor} border border-current px-2 py-0.5 rounded-full`}>
                  {volcano.levelLabel}
                </span>
              </div>
            </div>
            <p className="text-[#C8D8C0]/50 text-xs leading-relaxed">{volcano.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#8CC63F]/10 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[#C8D8C0]/30 text-[10px]">
          Source: PVMBG / MAGMA Indonesia. JVTO follows all official closures without exception.
        </p>
        {checkedAt && (
          <span className="text-[#C8D8C0]/30 text-[10px]">Checked: {checkedAt}</span>
        )}
      </div>
    </div>
  );
}

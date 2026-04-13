import { Clock, MapPin, Activity, Users, Banknote } from 'lucide-react';

interface RouteFactsBarProps {
  duration: string;
  origin: string;
  physicality: string;
  maxPax: number;
  priceFrom: number;
}

const physicalityLabel: Record<string, string> = {
  easy: 'Easy',
  moderate: 'Moderate',
  hard: 'Challenging',
};

const physicalityColor: Record<string, string> = {
  easy: 'text-green-600',
  moderate: 'text-jvto-orange',
  hard: 'text-red-500',
};

export default function RouteFactsBar({ duration, origin, physicality, maxPax, priceFrom }: RouteFactsBarProps) {
  const facts = [
    { icon: <Clock size={16} />, label: 'Duration', value: duration },
    { icon: <MapPin size={16} />, label: 'Departure', value: `From ${origin}` },
    { icon: <Activity size={16} />, label: 'Intensity', value: physicalityLabel[physicality] ?? physicality, colorClass: physicalityColor[physicality] },
    { icon: <Users size={16} />, label: 'Group Type', value: `Private — up to ${maxPax} pax` },
    { icon: <Banknote size={16} />, label: 'Starts From', value: `IDR ${(priceFrom / 1000).toFixed(0)}k / person` },
  ];

  return (
    <div className="bg-white border-b border-jvto-border sticky top-[64px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-0 divide-x divide-jvto-border overflow-x-auto">
          {facts.map((fact, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-4 min-w-max">
              <span className="text-jvto-muted">{fact.icon}</span>
              <div>
                <div className="micro-label text-jvto-muted">{fact.label}</div>
                <div className={`text-sm font-semibold text-jvto-navy mt-0.5 ${fact.colorClass ?? ''}`}>
                  {fact.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

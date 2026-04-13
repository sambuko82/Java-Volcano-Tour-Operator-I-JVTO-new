// lib/crewData.ts
// @deprecated — This file is superseded by the CREW export in lib/jvtoData.ts
// which contains the full 14-member SSOT-aligned crew dataset with canonical image URLs.
// components/CrewGrid.tsx imports from lib/jvtoData.ts. Do not add data here.

export interface CrewMember {
  id: string;
  name: string;
  role: 'Driver' | 'Guide';
  tags: string[];
  imageUrl: string;
  description: string;
  specialty: string;
  mentions: number;
  quote: string;
  category: 'Safety' | 'Experience' | 'VIP';
  kta?: string;
}

export interface CrewPairing {
  driverId: string;
  guideId: string;
  sentiment: string;
  recommendation: string;
}

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: '39',
    name: 'Gufron',
    role: 'Guide',
    tags: ['Photography Expert', 'Fun Vibe'],
    imageUrl: 'https://legacy.javavolcano-touroperator.com/assets/img/guide/1725528674_GUFRO.jpeg',
    description: 'Senior Guide & Photography Specialist. Known for creating a fun atmosphere and taking professional-quality guest photos.',
    specialty: 'Photography & Vibe Management',
    mentions: 18,
    quote: 'Gufron was excellent... always willing to help you get your best photo. - Adrián M.',
    category: 'Experience',
    kta: 'KTA-39-2024'
  },
  {
    id: '13',
    name: 'Rendi',
    role: 'Guide',
    tags: ['Ijen Specialist', 'Safety Pro'],
    imageUrl: 'https://legacy.javavolcano-touroperator.com/assets/img/guide/1725528903_RENDI.JPG',
    description: 'Lead Guide - Expedition Safety. Ijen Blue Fire specialist, known for strong physical support and deep geological knowledge.',
    specialty: 'Volcanic Safety & Geology',
    mentions: 20,
    quote: 'Rendi made sure we were safe... held our hands to prevent us from falling. - Wing Shan Lui',
    category: 'Safety',
    kta: 'KTA-13-2024'
  },
  {
    id: '77',
    name: 'Pras',
    role: 'Driver',
    tags: ['Fluent English', 'VIP Service'],
    imageUrl: 'https://legacy.javavolcano-touroperator.com/assets/img/guide/1755928162_prasojo.jpg',
    description: 'Expert Driver with fluent English. Guarantees punctuality and comfort for complex itineraries.',
    specialty: 'Communication & VIP Logistics',
    mentions: 19,
    quote: 'Prudent at the wheel and with a constant smile. - Veronica R.',
    category: 'VIP',
    kta: 'KTA-77-2024'
  },
  {
    id: '7',
    name: 'Fredi',
    role: 'Driver',
    tags: ['Safety Captain', 'Punctual'],
    imageUrl: 'https://legacy.javavolcano-touroperator.com/assets/img/guide/1725528837_FREDI.JPG',
    description: 'Reliable logistics provider. Known for meticulousness and a constant smile. Highly favored by East Asian markets.',
    specialty: 'Logistics Reliability',
    mentions: 15,
    quote: 'Fredi provided logistical reliability that allowed us to focus on the experience.',
    category: 'Safety',
    kta: 'KTA-07-2024'
  },
  {
    id: '1',
    name: 'Yandi',
    role: 'Driver',
    tags: ['Family Friendly', 'Reliable'],
    imageUrl: 'https://legacy.javavolcano-touroperator.com/assets/img/guide/1725528930_YANDI.JPG',
    description: 'The "Father Figure" of the fleet. Creates a strong sense of family and psychological safety for guests.',
    specialty: 'Family Care & Reliability',
    mentions: 12,
    quote: 'Tamu sering merasa diadopsi oleh keluarga lokal, yang meningkatkan rasa aman psikologis.',
    category: 'Experience',
    kta: 'KTA-01-2024'
  },
  {
    id: '68',
    name: 'Boy',
    role: 'Guide',
    tags: ['High Energy', 'Candid'],
    imageUrl: 'https://legacy.javavolcano-touroperator.com/assets/img/guide/1725528760_BOY.JPG',
    description: 'High-energy guide specializing in candid moments and energetic trekking.',
    specialty: 'Energy & Candid Photography',
    mentions: 10,
    quote: 'Boy brings a vibrant energy to the trek that keeps everyone motivated.',
    category: 'Experience',
    kta: 'KTA-68-2024'
  }
];

export const CREW_PAIRINGS: CrewPairing[] = [
  {
    driverId: '7',
    guideId: '39',
    sentiment: 'Fun, Great Photos, Punctual',
    recommendation: 'Ideal for Young Couples, Honeymooners, and Influencers.'
  },
  {
    driverId: '1',
    guideId: '13',
    sentiment: 'Family, Safe, Trekking Support',
    recommendation: 'Ideal for Family Groups, Seniors, and Beginner Trekkers.'
  }
];

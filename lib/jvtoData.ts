// lib/jvtoData.ts

export interface Destination {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Hard';
  highlights: string[];
  practicalNotes: string[];
  altitude?: number;
  region: string;
  geoCoordinates?: { latitude: number; longitude: number };
  hazardousSubstance?: string;
}

export interface Tour {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  origin: string;
  priceFrom: number;
  image: string;
  rating: number;
  highlights: string[];
  destinations: string[]; // slugs
  itinerary: { day?: string; title?: string; activity?: string; desc?: string; summary?: string }[];
  inclusions: string[];
  exclusions: string[];
  physicality: 'easy' | 'moderate' | 'hard';
  bestFor: string;
  idealTraveler: string;
  pricingTable: { pax: number; price: number }[];
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  archetype: string;
  highlights: string;
  languages: string;
  about: string | null;
  photoUrl: string | null;
  displayPriority: number;
  kta?: string; // Kartu Tanda Anggota / License ID
  forensicReviewQuote?: string; // Verbatim guest quote from reviews
  ktaCardUrl?: string; // URL to official Ijen guide license card image
  schemaKnowsAbout?: string[]; // Override for JSON-LD knowsAbout — per GEO Blueprint persona mapping
  schemaJobTitle?: string; // Override for JSON-LD jobTitle — per GEO Blueprint persona mapping
}

const VALID_MEDIA_FALLBACK = 'https://javavolcano-touroperator.com/assets/img/hero/home.webp';

export const DESTINATIONS: Destination[] = [
  {
    slug: 'mount-bromo',
    name: 'Mount Bromo',
    shortDesc: 'The iconic active volcano of East Java, famous for its otherworldly sea of sand and sunrise views.',
    fullDesc: 'Mount Bromo is an active volcano within the Tengger Caldera, famed for its sunrise views from Kingkong Hill, the Sea of Sand jeep adventure, and the Tenggerese Hindu rituals at Pura Luhur Poten.',
    image: 'https://javavolcano-touroperator.com/uploads/1764649856442-820608003-bromo-new.jpg',
    difficulty: 'Moderate',
    region: 'Tengger Highlands',
    altitude: 2329,
    geoCoordinates: { latitude: -7.9425, longitude: 112.9531 },
    hazardousSubstance: 'Volcanic ash and sulfuric gas emissions',
    highlights: [
      'Sunrise over Tengger Caldera',
      'Sea of Sand jeep adventure',
      'Tenggerese Hindu rituals at Pura Luhur Poten',
      'Climbing the crater rim'
    ],
    practicalNotes: [
      'National Park entry fee: Foreign tourists IDR 220,000 (weekdays), IDR 320,000 (weekends).',
      'Temperatures: 5-15°C at night/sunrise, 15-25°C during day.',
      'JVTO includes all permits.'
    ]
  },
  {
    slug: 'ijen-crater',
    name: 'Kawah Ijen',
    shortDesc: 'Home to the world\'s largest acidic crater lake and the rare "Blue Fire" phenomenon.',
    fullDesc: 'Kawah Ijen is the world\'s largest acidic crater lake and one of only two places where natural blue fire appears at night. It is also a site of traditional sulfur mining.',
    image: 'https://javavolcano-touroperator.com/uploads/1764649921055-338810628-1687447803_whatsapp_image_2019-05-12_at_4.46.53_pm.jpeg',
    difficulty: 'Moderate',
    region: 'Bondowoso',
    altitude: 2769,
    geoCoordinates: { latitude: -8.0584, longitude: 114.2420 },
    hazardousSubstance: 'Sulfur Dioxide (SO₂) — up to 50,000 ppm at crater rim',
    highlights: [
      'Blue fire phenomenon',
      'Acidic turquoise crater lake',
      'Traditional sulfur mining',
      'Stunning sunrise over the caldera'
    ],
    practicalNotes: [
      'Health-certificate screening is coordinated when current access rules require it.',
      'Gas masks and trekking poles provided by JVTO.',
      'Temperature: 5-10°C at night, 15-25°C during day.'
    ]
  },
  {
    slug: 'madakaripura-waterfall',
    name: 'Madakaripura Waterfall',
    shortDesc: 'A majestic "eternal" waterfall hidden in a deep canyon, linked to the history of the Majapahit Empire.',
    fullDesc: 'A sacred 200-meter canyon waterfall believed to be the final meditation site of Gajah Mada, symbolizing loyalty and unity from the Majapahit legacy.',
    image: 'https://javavolcano-touroperator.com/uploads/1764650020192-295296217-madakaripura1.jpg',
    difficulty: 'Moderate',
    region: 'Lumbang, Probolinggo',
    altitude: 620,
    geoCoordinates: { latitude: -7.9136, longitude: 113.0472 },
    highlights: [
      'Sacred 200-meter canyon waterfall',
      'Gajah Mada\'s meditation site',
      'Lush, prehistoric canyon atmosphere',
      'Walking through waterfall spray'
    ],
    practicalNotes: [
      'You will get wet; JVTO provides helmets.',
      'Water shoes are recommended.',
      'JVTO includes all entrance fees.'
    ]
  },
  {
    slug: 'tumpak-sewu-waterfall',
    name: 'Tumpak Sewu Waterfall',
    shortDesc: 'The "Thousand Waterfalls," a massive semi-circular curtain of water cascading into a lush jungle ravine.',
    fullDesc: 'A multi-stream semicircular waterfall formed by Mount Semeru\'s volcanic erosion, known for its canyon trail and panoramic viewpoint with Semeru backdrop.',
    image: 'https://javavolcano-touroperator.com/uploads/1764650032945-926940542-tumpak-sewu1.jpg',
    difficulty: 'Hard',
    region: 'Lumajang–Malang Border',
    altitude: 500,
    geoCoordinates: { latitude: -8.2342, longitude: 112.9158 },
    highlights: [
      'Thousand-stream waterfall curtain',
      'Mount Semeru backdrop',
      'Challenging canyon trek',
      'Panoramic viewpoint'
    ],
    practicalNotes: [
      'The descent involves steep bamboo ladders and slippery surfaces.',
      'Proper hiking sandals with good grip are mandatory.',
      'JVTO includes all fees and guides.'
    ]
  },
  {
    slug: 'papuma-beach',
    name: 'Papuma Beach',
    shortDesc: 'A pristine white sand beach with dramatic rock formations rising from the Indian Ocean.',
    fullDesc: 'Beautiful white sand beach with unique rock formations and clear turquoise waters in Jember, East Java. A perfect contrast stop for multi-day tours.',
    image: 'https://javavolcano-touroperator.com/uploads/1764650056490-963808584-papuma1.jpg',
    difficulty: 'Easy',
    region: 'Jember',
    altitude: 5,
    geoCoordinates: { latitude: -8.2780, longitude: 113.6283 },
    highlights: [
      'White sand and turquoise water',
      'Unique rock formations',
      'Stunning sunset views',
      'Quiet, protected forest area'
    ],
    practicalNotes: [
      'Entrance fee included in JVTO packages.',
      'Best visited during the dry season (April–October).',
      'Ideal for a rest day between hikes.'
    ]
  }
];

export const TOURS: Tour[] = [
  {
    image: 'https://javavolcano-touroperator.com/img/destinations/surabaya-mt.-bromo-1-day-tour-1692564153744/bromo11.webp',
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Time-sensitive travelers',
    idealTraveler: 'Solo or couples with limited time',
    pricingTable: [
      { pax: 1, price: 1850000 },
      { pax: 2, price: 1000000 },
      { pax: 3, price: 850000 },
      { pax: 4, price: 750000 },
      { pax: 5, price: 650000 }
    ],
    highlights: ['Midnight departure', '4WD Jeep experience', 'Bromo crater exploration', 'Whispering Sand'],
    destinations: ['mount-bromo'],
    itinerary: [
      { day: 'Day 1', title: 'Overnight Adventure in Bromo', summary: 'Midnight pickup from Surabaya. Jeep tour for sunrise at Kingkong Hill. Hike to Bromo crater. Return to Surabaya by noon.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Complimentary T-shirt'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'bromo-2d1n',
    name: '2D1N Bromo & Madakaripura',
    shortDesc: 'A perfect short escape combining the majesty of Bromo with the splendor of Madakaripura.',
    longDesc: 'Your adventure begins when we pick you up from Surabaya. Enjoy a comfortable ride as the scenery changes from the city to the cool Tengger mountains. Witness the iconic Bromo sunrise and trek through the canyon of the legendary Madakaripura Waterfall.',
    duration: '2 Days, 1 Night',
    origin: 'Surabaya',
    priceFrom: 1750000,
    image: 'https://javavolcano-touroperator.com/img/destinations/2d-1n-surabaya-bromo-1-day-tours-1679725846337/bromo14.webp',
    rating: 5.0,
    physicality: 'moderate',
    bestFor: 'Short escapes',
    idealTraveler: 'Couples and small groups',
    pricingTable: [
      { pax: 2, price: 1750000 },
      { pax: 3, price: 1450000 },
      { pax: 4, price: 1250000 },
      { pax: 5, price: 1100000 }
    ],
    highlights: ['Bromo Sunrise', 'Milky Way stargazing', 'Madakaripura Waterfall', '4WD Jeep adventure'],
    destinations: ['mount-bromo', 'madakaripura-waterfall'],
    itinerary: [
      { day: 'Day 1', title: 'Journey to Mount Bromo', summary: 'Pickup from Surabaya. Drive to Cemoro Lawang village on the rim of Bromo crater. Check-in and rest.' },
      { day: 'Day 2', title: 'Bromo & Madakaripura', summary: 'Early morning sunrise tour. Bromo crater hike. Madakaripura Waterfall trek. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Daily Breakfast', 'Complimentary T-shirt'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-2d1n',
    name: '2D1N Ijen Blue Fire',
    shortDesc: 'Witness the world-famous Ijen blue fire phenomenon and turquoise crater lake.',
    longDesc: 'This long journey is the perfect transition from the hustle and bustle of Surabaya to the tranquility of the mountains. Witness the mesmerizing blue fire phenomenon at Ijen before sunrise and see the stunning turquoise sulfuric crater lake at dawn.',
    duration: '2 Days, 1 Night',
    origin: 'Surabaya',
    priceFrom: 1550000,
    image: 'https://javavolcano-touroperator.com/img/destinations/2d-1n-surabaya-ijen-1-day-tours-1679724664576/ijen12.webp',
    rating: 4.8,
    physicality: 'moderate',
    bestFor: 'Ijen specialists',
    idealTraveler: 'Adventure seekers',
    pricingTable: [
      { pax: 2, price: 1550000 },
      { pax: 3, price: 1250000 },
      { pax: 4, price: 1050000 },
      { pax: 5, price: 950000 }
    ],
    highlights: ['Ijen Blue Fire', 'Turquoise Crater Lake', 'Sulfur Miners', 'Malabar Coffee Plantation'],
    destinations: ['ijen-crater'],
    itinerary: [
      { day: 'Day 1', title: 'Overland to Bondowoso', summary: 'Pickup from Surabaya. Drive to Bondowoso highlands. Mandatory health check at hotel. Dinner.' },
      { day: 'Day 2', title: 'Ijen Expedition', summary: 'Midnight hike to Ijen for Blue Fire and sunrise. Crater lake exploration. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'bromo-madakaripura-ijen-3d2n',
    name: '3D2N Bromo–Madakaripura–Ijen (→ Bali)',
    shortDesc: 'The classic East Java circuit from Surabaya ending in Bali.',
    longDesc: 'Experience the two most iconic volcanoes of East Java in one seamless private journey. This tour takes you from the sunrise peaks of Mount Bromo to the mystical blue fires of Ijen Crater, with a stop at the sacred Madakaripura Waterfall. Ends with a ferry crossing to Bali.',
    duration: '3 Days, 2 Nights',
    origin: 'Surabaya',
    priceFrom: 2450000,
    image: 'https://javavolcano-touroperator.com/img/destinations/fb4.jpg',
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'The Classic Circuit',
    idealTraveler: 'First-time East Java visitors',
    pricingTable: [
      { pax: 2, price: 2450000 },
      { pax: 3, price: 2150000 },
      { pax: 4, price: 1950000 },
      { pax: 5, price: 1750000 }
    ],
    highlights: ['Bromo Sunrise', 'Madakaripura Waterfall', 'Ijen Blue Fire', 'Java-Bali Ferry'],
    destinations: ['mount-bromo', 'madakaripura-waterfall', 'ijen-crater'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bromo', summary: 'Pickup from Surabaya. Drive to Cemoro Lawang. Check-in and rest.' },
      { day: 'Day 2', title: 'Bromo & Madakaripura to Ijen', summary: 'Sunrise tour. Bromo crater. Madakaripura Waterfall. Drive to Bondowoso. Health check.' },
      { day: 'Day 3', title: 'Ijen to Bali', summary: 'Ijen night hike. Ferry crossing to Bali. Drop-off at your Bali hotel.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Ferry Tickets', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-bromo-madakaripura-3d2n',
    name: '3D2N Ijen–Bromo–Madakaripura',
    shortDesc: 'A comprehensive 3-day tour starting and ending in Surabaya.',
    longDesc: 'Witness the best of East Java: the blue fires of Ijen, the sunrise peaks of Bromo, and the hidden canyon of Madakaripura. Perfect for those who want to see the absolute highlights with professional support and private comfort.',
    duration: '3 Days, 2 Nights',
    origin: 'Surabaya',
    priceFrom: 2450000,
    image: 'https://javavolcano-touroperator.com/img/destinations/surabaya---ijen---bromo-(3d-2n)-1676510962600/bromo2.webp',
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Full Volcanic Experience',
    idealTraveler: 'Surabaya round-trip travelers',
    pricingTable: [
      { pax: 2, price: 2450000 },
      { pax: 3, price: 2150000 },
      { pax: 4, price: 1950000 },
      { pax: 5, price: 1750000 }
    ],
    highlights: ['Ijen Blue Fire', 'Bromo Sunrise', 'Madakaripura Waterfall', 'Private Transport'],
    destinations: ['ijen-crater', 'mount-bromo', 'madakaripura-waterfall'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bondowoso', summary: 'Pickup from Surabaya. Drive to Ijen highlands. Health check. Dinner.' },
      { day: 'Day 2', title: 'Ijen to Bromo', summary: 'Ijen night hike. Drive to Bromo area. Check-in and rest.' },
      { day: 'Day 3', title: 'Bromo & Madakaripura', summary: 'Sunrise tour. Bromo crater. Madakaripura Waterfall. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'safari-bromo-madakaripura-3d2n',
    name: '3D2N Safari–Bromo–Madakaripura (Family)',
    shortDesc: 'A perfect family adventure combining wildlife and volcanic landscapes.',
    longDesc: 'The day begins with a guided safari at Taman Safari Prigen, interacting with wildlife up close. Then, witness the iconic Bromo sunrise and explore the mystical Madakaripura Waterfall. Designed for families with children.',
    duration: '3 Days, 2 Nights',
    origin: 'Surabaya',
    priceFrom: 3450000,
    image: 'https://javavolcano-touroperator.com/img/destinations/1736406701_baobab4.jpg',
    rating: 5.0,
    physicality: 'easy',
    bestFor: 'Families with kids',
    idealTraveler: 'Families and nature lovers',
    pricingTable: [
      { pax: 2, price: 3450000 },
      { pax: 3, price: 3150000 },
      { pax: 4, price: 2950000 },
      { pax: 5, price: 2750000 }
    ],
    highlights: ['Taman Safari Prigen', 'Bromo Sunrise', 'Madakaripura Waterfall', 'Family Friendly'],
    destinations: ['mount-bromo', 'madakaripura-waterfall'],
    itinerary: [
      { day: 'Day 1', title: 'Safari Adventure', summary: 'Pickup from Surabaya. Explore Prigen Safari Park. Drive to Bromo area.' },
      { day: 'Day 2', title: 'Bromo Sunrise', summary: 'Sunrise tour. Bromo crater hike. Rest and enjoy the mountain air.' },
      { day: 'Day 3', title: 'Waterfall & Return', summary: 'Madakaripura Waterfall trek. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Safari Tickets', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-bromo-madakaripura-4d3n',
    name: '4D3N Ijen–Bromo–Madakaripura',
    shortDesc: 'A deeper 4-day exploration of East Java\'s volcanic heart.',
    longDesc: 'Experience Kawah Ijen, Mount Bromo, and Madakaripura Waterfall with more time at each destination. This deeper itinerary allows for a more relaxed pace and thorough exploration of the region\'s natural wonders.',
    duration: '4 Days, 3 Nights',
    origin: 'Surabaya',
    priceFrom: 3025000,
    image: 'https://javavolcano-touroperator.com/img/destinations/mt.-ijen---bromo---madakaripura---surabaya-night-market-tour-(4d-3n)-1676513053011/bromo1.webp',
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Relaxed pace',
    idealTraveler: 'Travelers who prefer comfort',
    pricingTable: [
      { pax: 2, price: 3025000 },
      { pax: 3, price: 2725000 },
      { pax: 4, price: 2525000 },
      { pax: 5, price: 2325000 }
    ],
    highlights: ['Ijen Blue Fire', 'Bromo Sunrise', 'Madakaripura Waterfall', 'Surabaya City Stay'],
    destinations: ['ijen-crater', 'mount-bromo', 'madakaripura-waterfall'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bondowoso', summary: 'Pickup from Surabaya. Drive to Ijen highlands. Health check. Dinner.' },
      { day: 'Day 2', title: 'Ijen to Bromo', summary: 'Ijen night hike. Drive to Bromo area. Check-in and rest.' },
      { day: 'Day 3', title: 'Bromo & Madakaripura', summary: 'Sunrise tour. Bromo crater. Madakaripura Waterfall. Drive to Surabaya.' },
      { day: 'Day 4', title: 'Departure', summary: 'Breakfast at hotel. Transfer to Juanda Airport for your flight.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-papuma-tumpak-sewu-bromo-4d3n',
    name: '4D3N Ijen–Papuma–Tumpak Sewu–Bromo',
    shortDesc: 'The full East Java circuit covering volcanoes, beaches, and waterfalls.',
    longDesc: 'A mix of extreme adventure and relaxation. Witness the blue fire of Ijen, the golden sunset of Papuma Beach, the thousand-stream Tumpak Sewu Waterfall, and the iconic Bromo sunrise. Our most diverse 4-day journey.',
    duration: '4 Days, 3 Nights',
    origin: 'Surabaya',
    priceFrom: 3125000,
    image: VALID_MEDIA_FALLBACK,
    rating: 5.0,
    physicality: 'moderate',
    bestFor: 'Diverse landscapes',
    idealTraveler: 'Photography enthusiasts',
    pricingTable: [
      { pax: 2, price: 3125000 },
      { pax: 3, price: 2825000 },
      { pax: 4, price: 2625000 },
      { pax: 5, price: 2425000 }
    ],
    highlights: ['Ijen Blue Fire', 'Papuma Beach', 'Tumpak Sewu Waterfall', 'Bromo Sunrise'],
    destinations: ['ijen-crater', 'papuma-beach', 'tumpak-sewu-waterfall', 'mount-bromo'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bondowoso', summary: 'Pickup from Surabaya. Drive to Ijen highlands. Health check. Dinner.' },
      { day: 'Day 2', title: 'Ijen to Papuma', summary: 'Ijen night hike. Drive to Jember coast. Sunset at Papuma Beach.' },
      { day: 'Day 3', title: 'Jember to Tumpak Sewu', summary: 'Drive to Lumajang. Prepare for waterfall adventure.' },
      { day: 'Day 4', title: 'Tumpak Sewu & Bromo', summary: 'Tumpak Sewu trek. Bromo sunrise. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'tumpak-sewu-bromo-ijen-4d3n',
    name: '4D3N Tumpak Sewu–Bromo–Ijen (→ Bali)',
    shortDesc: 'A spectacular 4-day overland journey from Surabaya to Bali.',
    longDesc: 'This journey takes you south from Surabaya to the magnificent Tumpak Sewu, then up to the volcanic landscape of Bromo, and finally to the blue fires of Ijen before crossing to Bali. A seamless adventure across East Java.',
    duration: '4 Days, 3 Nights',
    origin: 'Surabaya',
    priceFrom: 3125000,
    image: VALID_MEDIA_FALLBACK,
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Surabaya to Bali overland',
    idealTraveler: 'Backpackers and adventurers',
    pricingTable: [
      { pax: 2, price: 3125000 },
      { pax: 3, price: 2825000 },
      { pax: 4, price: 2625000 },
      { pax: 5, price: 2425000 }
    ],
    highlights: ['Tumpak Sewu Waterfall', 'Bromo Sunrise', 'Ijen Blue Fire', 'Java-Bali Ferry'],
    destinations: ['tumpak-sewu-waterfall', 'mount-bromo', 'ijen-crater'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Tumpak Sewu', summary: 'Pickup from Surabaya. Drive to Lumajang. Experience the countryside.' },
      { day: 'Day 2', title: 'Tumpak Sewu to Bromo', summary: 'Waterfall trek. Drive to Bromo area. Check-in and rest.' },
      { day: 'Day 3', title: 'Bromo to Ijen', summary: 'Sunrise tour. Bromo crater. Drive to Bondowoso. Health check.' },
      { day: 'Day 4', title: 'Ijen to Bali', summary: 'Ijen night hike. Ferry crossing to Bali. Drop-off at your Bali hotel.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Ferry Tickets', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-bromo-madakaripura-malang-5d4n',
    name: '5D4N Ijen–Bromo–Madakaripura–Malang',
    shortDesc: 'The best of East Java\'s volcanic and cultural highlights.',
    longDesc: 'Witness the blue fires of Ijen, the sunrise peaks of Bromo, and the hidden canyon of Madakaripura, plus a cultural exploration of Malang and Batu. A perfect balance of adventure and discovery.',
    duration: '5 Days, 4 Nights',
    origin: 'Surabaya',
    priceFrom: 3850000,
    image: VALID_MEDIA_FALLBACK,
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Culture & Nature',
    idealTraveler: 'Cultural explorers',
    pricingTable: [
      { pax: 2, price: 3850000 },
      { pax: 3, price: 3550000 },
      { pax: 4, price: 3350000 },
      { pax: 5, price: 3150000 }
    ],
    highlights: ['Ijen Blue Fire', 'Bromo Sunrise', 'Madakaripura Waterfall', 'Malang City Tour'],
    destinations: ['ijen-crater', 'mount-bromo', 'madakaripura-waterfall'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bondowoso', summary: 'Pickup from Surabaya. Drive to Ijen highlands. Health check. Dinner.' },
      { day: 'Day 2', title: 'Ijen to Bromo', summary: 'Ijen night hike. Drive to Bromo area. Check-in and rest.' },
      { day: 'Day 3', title: 'Bromo to Malang', summary: 'Sunrise tour. Bromo crater. Madakaripura Waterfall. Drive to Malang.' },
      { day: 'Day 4', title: 'Malang & Batu', summary: 'Explore Batu city, Rainbow Village, and flower gardens. Return to Surabaya.' },
      { day: 'Day 5', title: 'Departure', summary: 'Breakfast at hotel. Transfer to Juanda Airport.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-papuma-tumpak-sewu-bromo-5d4n',
    name: '5D4N Ijen–Papuma–Tumpak Sewu–Bromo',
    shortDesc: 'An extended nature trip covering the absolute best of East Java.',
    longDesc: 'More time at each stop compared to the 4-day version. Experience the blue fire of Ijen, the pristine Papuma Beach, the grand Tumpak Sewu Waterfall, and the iconic Bromo sunrise at a more relaxed pace.',
    duration: '5 Days, 4 Nights',
    origin: 'Surabaya',
    priceFrom: 3650000,
    image: VALID_MEDIA_FALLBACK,
    rating: 5.0,
    physicality: 'moderate',
    bestFor: 'The Ultimate Nature Trip',
    idealTraveler: 'Nature photographers',
    pricingTable: [
      { pax: 2, price: 3650000 },
      { pax: 3, price: 3350000 },
      { pax: 4, price: 3150000 },
      { pax: 5, price: 2950000 }
    ],
    highlights: ['Ijen Blue Fire', 'Papuma Beach', 'Tumpak Sewu Waterfall', 'Bromo Sunrise'],
    destinations: ['ijen-crater', 'papuma-beach', 'tumpak-sewu-waterfall', 'mount-bromo'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bondowoso', summary: 'Pickup from Surabaya. Drive to Ijen highlands. Health check. Dinner.' },
      { day: 'Day 2', title: 'Ijen to Papuma', summary: 'Ijen night hike. Drive to Jember coast. Sunset at Papuma Beach.' },
      { day: 'Day 3', title: 'Jember to Tumpak Sewu', summary: 'Relax at Papuma. Drive to Lumajang in the afternoon.' },
      { day: 'Day 4', title: 'Tumpak Sewu to Bromo', summary: 'Tumpak Sewu trek. Drive to Bromo area. Check-in and rest.' },
      { day: 'Day 5', title: 'Bromo & Return', summary: 'Bromo sunrise. Bromo crater. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-papuma-tumpak-sewu-bromo-malang-6d5n',
    name: '6D5N Ijen–Papuma–Tumpak Sewu–Bromo–Malang',
    shortDesc: 'JVTO\'s most comprehensive itinerary covering the entire East Java circuit.',
    longDesc: 'The ultimate East Java discovery. From the blue fires of Ijen and the white sands of Papuma to the thousand streams of Tumpak Sewu, the sunrise peaks of Bromo, and the creative charm of Malang. No highlights are missed.',
    duration: '6 Days, 5 Nights',
    origin: 'Surabaya',
    priceFrom: 4750000,
    image: VALID_MEDIA_FALLBACK,
    rating: 5.0,
    physicality: 'moderate',
    bestFor: 'The Complete Circuit',
    idealTraveler: 'Slow travelers',
    pricingTable: [
      { pax: 2, price: 4750000 },
      { pax: 3, price: 4450000 },
      { pax: 4, price: 4250000 },
      { pax: 5, price: 4050000 }
    ],
    highlights: ['Ijen Blue Fire', 'Papuma Beach', 'Tumpak Sewu Waterfall', 'Bromo Sunrise', 'Malang City'],
    destinations: ['ijen-crater', 'papuma-beach', 'tumpak-sewu-waterfall', 'mount-bromo'],
    itinerary: [
      { day: 'Day 1', title: 'Surabaya to Bondowoso', summary: 'Pickup from Surabaya. Drive to Ijen highlands. Health check. Dinner.' },
      { day: 'Day 2', title: 'Ijen to Papuma', summary: 'Ijen night hike. Drive to Jember coast. Sunset at Papuma Beach.' },
      { day: 'Day 3', title: 'Jember to Tumpak Sewu', summary: 'Relax at Papuma. Drive to Lumajang in the afternoon.' },
      { day: 'Day 4', title: 'Tumpak Sewu to Bromo', summary: 'Tumpak Sewu trek. Drive to Bromo area. Check-in and rest.' },
      { day: 'Day 5', title: 'Bromo to Malang', summary: 'Bromo sunrise. Bromo crater. Drive to Malang city.' },
      { day: 'Day 6', title: 'Malang & Return', summary: 'Explore Batu city and Malang attractions. Return to Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'bromo-ijen-3d2n-bali',
    name: '3D2N Bromo & Ijen (round-trip Bali)',
    shortDesc: 'A cross-island adventure from Bali to Java\'s volcanic heart.',
    longDesc: 'Get ready for an epic journey! This route is designed for true adventurers, taking you from Bali, across the strait, and straight on to a long overland journey across East Java to Mount Bromo and Ijen Crater. Returns you back to Bali.',
    duration: '3 Days, 2 Nights',
    origin: 'Bali',
    priceFrom: 2850000,
    image: VALID_MEDIA_FALLBACK,
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Bali round-trip',
    idealTraveler: 'Bali-based travelers',
    pricingTable: [
      { pax: 2, price: 2850000 },
      { pax: 3, price: 2550000 },
      { pax: 4, price: 2350000 },
      { pax: 5, price: 2150000 }
    ],
    highlights: ['Bromo Sunrise', 'Ijen Blue Fire', 'Ferry Crossing', 'Round-trip Bali'],
    destinations: ['mount-bromo', 'ijen-crater'],
    itinerary: [
      { day: 'Day 1', title: 'Bali to Bromo', summary: 'Pickup from Bali hotel. Ferry to Java. Long drive to Bromo area. Check-in.' },
      { day: 'Day 2', title: 'Bromo to Ijen', summary: 'Bromo sunrise tour. Bromo crater. Drive to Bondowoso. Health check.' },
      { day: 'Day 3', title: 'Ijen to Bali', summary: 'Ijen night hike. Ferry crossing back to Bali. Drop-off at your hotel.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Ferry Tickets', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-papuma-tumpak-sewu-bromo-4d3n-bali',
    name: '4D3N Ijen–Papuma–Tumpak Sewu–Bromo (Bali → Surabaya)',
    shortDesc: 'The ultimate East Java circuit starting from Bali.',
    longDesc: 'A comprehensive 4-day journey from Bali to Surabaya. Experience the blue fire of Ijen, the white sands of Papuma, the thousand streams of Tumpak Sewu, and the sunrise peaks of Bromo. Ferry crossing included.',
    duration: '4 Days, 3 Nights',
    origin: 'Bali',
    priceFrom: 3475000,
    image: VALID_MEDIA_FALLBACK,
    rating: 5.0,
    physicality: 'moderate',
    bestFor: 'Bali to Surabaya overland',
    idealTraveler: 'Cross-island travelers',
    pricingTable: [
      { pax: 2, price: 3475000 },
      { pax: 3, price: 3175000 },
      { pax: 4, price: 2975000 },
      { pax: 5, price: 2775000 }
    ],
    highlights: ['Ijen Blue Fire', 'Papuma Beach', 'Tumpak Sewu Waterfall', 'Bromo Sunrise', 'Bali to Surabaya'],
    destinations: ['ijen-crater', 'papuma-beach', 'tumpak-sewu-waterfall', 'mount-bromo'],
    itinerary: [
      { day: 'Day 1', title: 'Bali to Ijen', summary: 'Pickup from Bali. Ferry to Java. Drive to Bondowoso. Health check.' },
      { day: 'Day 2', title: 'Ijen to Papuma', summary: 'Ijen night hike. Drive to Jember. Sunset at Papuma Beach.' },
      { day: 'Day 3', title: 'Jember to Tumpak Sewu', summary: 'Drive to Lumajang. Prepare for waterfall adventure.' },
      { day: 'Day 4', title: 'Tumpak Sewu & Bromo to Surabaya', summary: 'Tumpak Sewu trek. Bromo sunrise. Drop-off in Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Ferry Tickets', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  },
  {
    slug: 'ijen-papuma-tumpak-sewu-bromo-5d4n-bali',
    name: '5D4N Ijen–Papuma–Tumpak Sewu–Bromo (Bali → Surabaya)',
    shortDesc: 'An extended East Java exploration starting from Bali.',
    longDesc: 'More time to soak in the natural beauty of East Java. From the blue fires of Ijen to the iconic Bromo sunrise, this 5-day tour from Bali to Surabaya covers all the major highlights at a balanced pace.',
    duration: '5 Days, 4 Nights',
    origin: 'Bali',
    priceFrom: 4050000,
    image: VALID_MEDIA_FALLBACK,
    rating: 4.9,
    physicality: 'moderate',
    bestFor: 'Extended Bali to Surabaya',
    idealTraveler: 'Explorers starting from Bali',
    pricingTable: [
      { pax: 2, price: 4050000 },
      { pax: 3, price: 3750000 },
      { pax: 4, price: 3550000 },
      { pax: 5, price: 3350000 }
    ],
    highlights: ['Ijen Blue Fire', 'Papuma Beach', 'Tumpak Sewu Waterfall', 'Bromo Sunrise', 'Bali to Surabaya'],
    destinations: ['ijen-crater', 'papuma-beach', 'tumpak-sewu-waterfall', 'mount-bromo'],
    itinerary: [
      { day: 'Day 1', title: 'Bali to Ijen', summary: 'Pickup from Bali. Ferry to Java. Drive to Bondowoso. Health check.' },
      { day: 'Day 2', title: 'Ijen to Papuma', summary: 'Ijen night hike. Drive to Jember. Sunset at Papuma Beach.' },
      { day: 'Day 3', title: 'Relax at Papuma', summary: 'Enjoy the beach. Drive to Lumajang in the afternoon.' },
      { day: 'Day 4', title: 'Tumpak Sewu to Bromo', summary: 'Waterfall trek. Drive to Bromo area. Check-in.' },
      { day: 'Day 5', title: 'Bromo & Return to Surabaya', summary: 'Bromo sunrise. Bromo crater. Drop-off in Surabaya.' }
    ],
    inclusions: ['Private AC Transport', 'English Speaking Guide', 'All Entrance Fees', 'Jeep for Bromo', 'Ijen Health-Certificate Coordination', 'Gas Masks', 'Ferry Tickets', 'Daily Breakfast'],
    exclusions: ['Flights', 'VISA', 'Travel Insurance', 'Tipping']
  }
];

export const CREW: CrewMember[] = [
  {
    id: 'gufron',
    name: 'Gufron',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Knowledgeable guide, Great logistics',
    languages: 'English, Indonesian',
    about: 'I\'m someone who enjoys meaningful conversations on virtually any topic. In my professional life, I place the highest priority on safety and risk management – what some might call strict, I view as a fundamental matter of integrity and responsibility.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768225567764-405955176-gufron.png',
    displayPriority: 1,
    kta: 'KTA-G-2024-001',
    ktaCardUrl: 'https://javavolcano-touroperator.com/uploads/1771428741674-842615436-kta_gufron.jpg',
    forensicReviewQuote: '"Always willing to help you get your best photo." — Adrián Martínez, Google Reviews',
    schemaKnowsAbout: ['Volcano Photography', 'Geology', 'Volcanic terrain navigation', 'Ijen crater safety procedures', 'East Java cultural heritage'],
  },
  {
    id: 'rendi',
    name: 'Rendi',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Safety-first, Great logistics',
    languages: 'English, Indonesian',
    about: 'Love meeting people from different backgrounds and making every trip feel easy and enjoyable. I like to have new friend especially from overseas because can share about our unique culture.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768228514527-518051332-rendi.png',
    displayPriority: 1,
    kta: 'KTA-G-2024-002',
    ktaCardUrl: 'https://javavolcano-touroperator.com/uploads/1771428760524-516116110-kta_rendi.jpg',
    forensicReviewQuote: '"When we went down the steep crater, he held our hands to prevent us from falling." — Wing Shan Lui, Google Reviews',
    schemaKnowsAbout: ['Expedition Safety', 'Mountain Rescue', 'First Aid', 'Logistics Management', 'Ijen crater safety procedures', 'East Java cultural heritage'],
    schemaJobTitle: 'Lead Guide & Safety Officer',
  },
  {
    id: 'yandi',
    name: 'Yandi',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Great logistics, Knowledgeable guide',
    languages: 'English, Indonesian',
    about: 'Love meeting people from different backgrounds and making every trip feel easy and enjoyable. always make sure safety during the trip and make unforgettable moment along a journey.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768270364125-144711646-yandi.png',
    displayPriority: 1,
    kta: 'KTA-D-2024-003'
  },
  {
    id: 'boy',
    name: 'Boy (Ahboy)',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Knowledgeable guide, Safety-first',
    languages: 'English, Indonesian',
    about: 'I am a local resident who enjoys welcoming visitors and sharing stories about this area. I\'m happy to help travelers explore the natural beauty, local culture, and unique experiences.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768228191022-893381041-boy.png',
    displayPriority: 1,
    kta: 'KTA-G-2024-004',
    forensicReviewQuote: '"Incredibly knowledgeable and went out of his way to make sure everything we needed was sorted." — Jason Li, Trustpilot'
  },
  {
    id: 'fredi',
    name: 'Fredi',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Great logistics, Always on time',
    languages: 'English, Indonesian',
    about: 'Experienced Tour Driver committed to making your travels memorable. I combine safe driving skills with a friendly, helpful attitude to provide a stress-free experience.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768276791622-262250680-freddy.png',
    displayPriority: 1,
    kta: 'KTA-D-2024-005',
    forensicReviewQuote: '"Always on time no matter what time of the day. Exceptional driving skills." — Pooja Prakash, Google Reviews'
  },
  {
    id: 'anjas',
    name: 'Anjas',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Great logistics, Great photos',
    languages: 'English, Indonesian',
    about: 'I\'m a chill guy and nerdy enough to talk about brainrote meme. love playing games and listening to any kind of music. let me show you around how beautiful east java is.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768270423657-690185912-anjas.png',
    displayPriority: 1,
    kta: 'KTA-G-2024-006',
    ktaCardUrl: 'https://javavolcano-touroperator.com/uploads/1771428583288-513992233-kta_anjas.jpg',
    forensicReviewQuote: '"Creative at taking fun photos... Anjas was the highlight for the trip." — Wang Zhe, Google Reviews',
    schemaKnowsAbout: ['Volcanic Photography', 'Astrophotography', 'Youth Culture', 'East Java cultural heritage', 'Volcanic terrain navigation'],
    schemaJobTitle: 'Senior Tour Guide & Photography Specialist',
  },
  {
    id: 'taufik',
    name: 'Taufik',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Knowledgeable guide, Great logistics',
    languages: 'English, Indonesian',
    about: 'Reliable and organized individual with strong communication skills. I thrive in dynamic environments and enjoy taking on new challenges.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768228083285-919198019-taufik_1_.png',
    displayPriority: 1,
    kta: 'KTA-G-2024-007',
    ktaCardUrl: 'https://javavolcano-touroperator.com/uploads/1771428704448-911506028-kta_taufik.jpg'
  },
  {
    id: 'kiki',
    name: 'Kiki',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Knowledgeable guide',
    languages: 'English, Indonesian',
    about: '"It is He who made the earth manageable for you—so walk among its slopes and eat of His provision—and to Him is the resurrection." (67:15)',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768271545598-834784538-kiki.png',
    displayPriority: 2,
    kta: 'KTA-G-2024-008',
    ktaCardUrl: 'https://javavolcano-touroperator.com/uploads/1771428489070-55145932-kta_kiki.jpg'
  },
  {
    id: 'holili',
    name: 'Holili',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Great logistics',
    languages: 'Indonesian',
    about: 'I am a Java Volcano driver who dedicates myself to serving all Java Volcano customers wholeheartedly.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768277053384-470130286-holili.jpg',
    displayPriority: 2,
    kta: 'KTA-D-2024-009'
  },
  {
    id: 'fauzi',
    name: 'Fauzi',
    role: 'Guide',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Great photos',
    languages: 'Indonesian',
    about: 'I\'m a friendly guide who loves taking photos for guests and quickly connects with people. I enjoy making trips fun, relaxed, and memorable.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768226003889-338819579-fauzi.png',
    displayPriority: 2,
    kta: 'KTA-G-2024-010'
  },
  {
    id: 'joyo',
    name: 'Joyo',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Professional driver, Clean and safe',
    languages: 'Indonesian',
    about: 'I\'m a professional driver who combines speed with precision and care. I drive fast, but always cleanly, smoothly, and safely.',
    photoUrl: 'https://javavolcano-touroperator.com/uploads/1768277336049-911840775-joyo.png',
    displayPriority: 2,
    kta: 'KTA-D-2024-011'
  },
  {
    id: 'yusuf',
    name: 'Yusuf',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Experienced driver',
    languages: 'Indonesian',
    about: null,
    photoUrl: null,
    displayPriority: 3,
    kta: 'KTA-D-2024-012'
  },
  {
    id: 'dika',
    name: 'Dika',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Experienced driver',
    languages: 'Indonesian',
    about: null,
    photoUrl: null,
    displayPriority: 3,
    kta: 'KTA-D-2024-013'
  },
  {
    id: 'pras',
    name: 'Pras',
    role: 'Driver',
    archetype: 'Reliable Operator',
    highlights: 'Friendly & fun, Great logistics, Safety-first',
    languages: 'English, Indonesian',
    about: null,
    photoUrl: null,
    displayPriority: 3,
    kta: 'KTA-D-2024-014'
  }
];


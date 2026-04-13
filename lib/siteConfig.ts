// lib/siteConfig.ts
export const SITE_CONFIG = {
  organization: {
    name: "Java Volcano Tour Operator",
    brandName: "JVTO",
    legalName: "PT Java Volcano Rendezvous",
    alternateName: "JVTO",
    foundingDate: "2016-01-01",
    description: "Java Volcano Tour Operator (JVTO) is a registered Indonesian travel company based in Bondowoso and led by an active Tourist Police officer. We design private, all-inclusive itineraries to Mount Bromo, Ijen Crater and Tumpak Sewu with clear safety rules, transparent pricing and real local impact.",
    nib: "1102230032918",
    phone: "+6282244788833",
    email: "hello@javavolcano-touroperator.com",
    address: {
      street: "Jl. Khairil Anwar No.102 A, Badean",
      city: "Bondowoso",
      region: "Jawa Timur",
      postalCode: "68214",
      country: "Indonesia",
      mapUrl: "https://www.google.com/maps?cid=1266403973589689021"
    },
    founder: {
      name: "Agung Sambuko (Mr. Sam)",
      title: "Founder & Active Tourist Police Officer",
      image: "https://javavolcano-touroperator.com/founder/agung_sambuko.jpg"
    }
  },
  reputation: {
    tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g297715-d19983165-Reviews-Java_Volcano_Tour_Operator-Surabaya_East_Java_Java.html",
    trustpilot: "https://trustpilot.com/review/javavolcano-touroperator.com",
    isic: "https://www.isic.org/discounts/?providerId=259268",
    indecon: "https://www.indecon.id/spotlight-networks/java-volcano-tour-operator",
    googleMaps: "https://www.google.com/maps?cid=1266403973589689021",
    aggregateRating: "4.9",
    totalReviews: 112
  },
  whatsapp: {
    number: "+6282244788833",
    waLink: "https://wa.me/6282244788833"
  },
  exchangeRates: {
    USD: 16250,
    EUR: 17800,
    AUD: 10300,
    SGD: 12000
  },
  exchangeRatesLastUpdated: "2026-03-01"
} as const;

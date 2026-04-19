// app/page.tsx
// JVTO Homepage — orchestration of unique advantages, not a generic tour-operator template.
// Section logic targets the JVTO traits no East Java competitor can match:
// founder police authority, real medical layer, lifetime credit, documented temporal proof,
// named accountable people, and self-service verification.
'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import JsonLd, {
  buildSiteNavigationSchema,
  buildFounderSchema,
  buildBookCitationNode,
  buildDetikPressNode,
  buildRadarJemberPressNode,
} from '@/components/JsonLd';
import FounderSpotlight from '@/components/FounderSpotlight';
import TrustSummary from '@/components/TrustSummary';
import Hero from '@/components/Hero';
import RouteSelector from '@/components/RouteSelector';
import HomeUniqueAdvantages from '@/components/HomeUniqueAdvantages';
import HomeTemporalProof from '@/components/HomeTemporalProof';
import HomeBookingPromise from '@/components/HomeBookingPromise';
import HomeVerifyChecklist from '@/components/HomeVerifyChecklist';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { DESTINATIONS } from '@/lib/jvtoData';

const homeFaqs = [
  {
    question: 'Is JVTO a legitimate company?',
    answer:
      'Yes. JVTO operates as PT Java Volcano Rendezvous (NIB 1102230032918). The license is publicly verifiable on Indonesia\u2019s OSS portal, and our proof library lists every credential with a direct external check link.',
  },
  {
    question: 'What is unique about JVTO compared to other operators?',
    answer:
      'Three things no other East Java operator offers together: (1) the founder is an active Tourist Police officer; (2) Ijen routes include a real vitals check by a licensed physician with a QR-coded health pass; (3) cancellations 48 hours ahead convert to a transferable Lifetime Travel Credit.',
  },
  {
    question: 'Are all your tours private?',
    answer:
      'Yes. 100% private by default. You will have your own vehicle, driver, and guide. We never mix strangers into one car, and the product cannot be downgraded to a shared tour.',
  },
  {
    question: 'Is the Ijen health screening included in the tour price?',
    answer:
      'Yes. For routes that include Mount Ijen, JVTO includes the pre-ascent vitals check by Dr. Ahmad Irwandanu (or partner clinic) and the QR-coded health pass via health.mountijen.com. No extra charge.',
  },
  {
    question: 'What happens if weather or volcanic conditions change the plan?',
    answer:
      'JVTO follows official PVMBG / MAGMA Indonesia closures without exception. If access changes, we run an alternative-route SOP using equivalent destinations, or convert your booking to a Lifetime Travel Credit \u2014 your deposit is never lost to weather.',
  },
  {
    question: 'How do I verify JVTO before booking?',
    answer:
      'Use the 60-second verify checklist on our homepage or the full Proof Library at /verify-jvto. Every claim links to a government registry, licensed professional, or external review platform.',
  },
];

export default function Home() {
  const homeSchema = [
    buildFounderSchema(),
    buildBookCitationNode(),
    buildDetikPressNode(),
    buildRadarJemberPressNode(),
    buildSiteNavigationSchema(),
    {
      '@type': 'WebPage',
      '@id': 'https://javavolcano-touroperator.com/#webpage',
      url: 'https://javavolcano-touroperator.com',
      name: 'Java Volcano Tour Operator \u2014 Tourist Police-Led Private Volcano Tours from Surabaya & Bali',
      description: SITE_CONFIG.organization.description,
      isPartOf: { '@id': 'https://javavolcano-touroperator.com/#website' },
      about: { '@id': 'https://javavolcano-touroperator.com/#organization' },
      mainEntity: { '@id': 'https://javavolcano-touroperator.com/#home-faq' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://javavolcano-touroperator.com' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://javavolcano-touroperator.com/#home-faq',
      mainEntity: homeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  // SSOT canonical destinations only (no surabaya-city, no malang-city).
  const featuredDestinations = DESTINATIONS.filter((d) =>
    ['mount-bromo', 'ijen-crater', 'madakaripura-waterfall', 'tumpak-sewu-waterfall', 'papuma-beach'].includes(d.slug)
  ).slice(0, 4);

  return (
    <main className="min-h-screen bg-jvto-off">
      <JsonLd data={homeSchema} includeWebSite />
      <TrustSummary />
      <Navbar />

      {/* 1. Hero — exact narrative from live site (do not paraphrase) */}
      <Hero
        title={'Tourist Police-Led Private Volcano Tours in East Java'}
        tagline={
          'Private Bromo, Ijen & Tumpak Sewu tours from Surabaya or Bali. Licensed operator (No.1102230032918), led by an active Tourist Police officer.'
        }
        ctaPrimaryLabel={'Private Tours'}
        ctaPrimaryHref={'/tours'}
        ctaSecondaryLabel={'Verify JVTO'}
        ctaSecondaryHref={'/verify-jvto'}
        heroImageSrc={'https://javavolcano-touroperator.com/assets/img/hero/home.webp'}
        heroImageAlt={'Java Volcano landscape'}
        rating={SITE_CONFIG.reputation.aggregateRating}
        nib={SITE_CONFIG.organization.nib}
        magmaStatus={'MAGMA: Normal'}
      />

      {/* 2. Three Unique Advantages — what only JVTO offers (Police / Medical / Lifetime Credit) */}
      <HomeUniqueAdvantages />

      {/* 3. Temporal Proof — operating since 2015, defends against entity hijacking */}
      <HomeTemporalProof />

      {/* 4. Iconic Destinations — 5 SSOT canonical (Bromo / Ijen / Madakaripura / Tumpak Sewu / Papuma) */}
      <section id="destinations" className="section-padding bg-white rounded-b-[64px] shadow-2xl shadow-jvto-navy/5">
        <div className="container-width">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6 text-jvto-navy">
              Iconic <span className="text-jvto-orange">Landscapes</span>
            </h2>
            <p className="text-jvto-muted max-w-2xl mx-auto font-light text-lg">
              From the blue fire of Ijen to the thousand streams of Tumpak Sewu.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {featuredDestinations.map((dest, index) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="relative aspect-[3/4] rounded-[48px] overflow-hidden group cursor-pointer shadow-xl shadow-jvto-navy/10"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    unoptimized
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jvto-navy/90 via-jvto-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-10 left-8 right-8 text-white">
                    <h3 className="text-2xl md:text-3xl mb-2">{dest.name}</h3>
                    <p className="micro-label text-white/60">{dest.highlights[0]}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Route Browser — self-service route picker (Surabaya / Bali origin tabs) */}
      <section id="tours" className="section-padding bg-white rounded-t-[64px] shadow-2xl shadow-jvto-navy/5">
        <div className="container-width text-center mb-20">
          <h2 className="text-5xl md:text-7xl mb-6 text-jvto-navy">
            Find Your <span className="text-jvto-orange">Perfect Route</span>
          </h2>
          <p className="text-jvto-muted max-w-2xl mx-auto font-light text-lg">
            16 private routes from Surabaya or Bali, 1 to 6 days. All-inclusive, with the same
            police-informed safety and medical workflow on every package.
          </p>
        </div>
        <RouteSelector />
      </section>

      {/* 6. People Spotlight — the founder behind the operation */}
      <FounderSpotlight />

      {/* 7. Booking Promise — 4 verifiable operational guarantees */}
      <HomeBookingPromise />

      {/* 8. 60-Second Verify Checklist — independent verification entry */}
      <HomeVerifyChecklist />

      {/* 9. FAQ — Operational Certainty */}
      <FAQSection title="Operational Certainty: Frequently Asked Questions" items={homeFaqs} />

      {/* 10. Final lime CTA — closes the page with a clear verify path */}
      <div className="bg-jvto-lime py-3 px-4 text-center">
        <Link
          href="/verify-jvto"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-jvto-navy hover:underline underline-offset-4"
        >
          ✓ All documents verifiable — Verify JVTO Legal Identity <ArrowRight size={14} />
        </Link>
      </div>

      <Footer />
    </main>
  );
}

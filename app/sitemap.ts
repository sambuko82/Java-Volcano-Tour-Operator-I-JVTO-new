import { MetadataRoute } from 'next';
import { TOURS, DESTINATIONS } from '@/lib/jvtoData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://javavolcano-touroperator.com';

  const tourEntries: MetadataRoute.Sitemap = TOURS.map(tour => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const destinationEntries: MetadataRoute.Sitemap = DESTINATIONS.map(dest => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = ([
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/tours`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/tours/from-surabaya`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/tours/from-bali`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/destinations`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/why-jvto`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/why-jvto/our-story`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/why-jvto/our-team`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/why-jvto/reviews`, priority: 0.6, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/why-jvto/the-jvto-difference`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/why-jvto/community-standards`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/verify-jvto`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/verify-jvto/legal`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/verify-jvto/police-safety`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/verify-jvto/press-recognition`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/verify-jvto/history-artifacts`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/booking-information`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/ijen-health-screening`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/mount-bromo-logistics`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/tumpak-sewu-logistics`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/packing-list`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/packing-and-fitness`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/weather-and-closures`, priority: 0.6, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/travel-guide/safety-on-tours`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/travel-guide/police-escort-for-groups`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/policy`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/policy/booking-payment-cancellation`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/policy/inclusions-exclusions`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/policy/privacy`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
  ] as const).map(entry => ({ ...entry, lastModified: new Date() }));

  return [...staticPages, ...tourEntries, ...destinationEntries];
}

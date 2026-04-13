import type {Metadata} from 'next';
import { Inter, Raleway, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import { SITE_CONFIG } from '@/lib/siteConfig';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://javavolcano-touroperator.com'),
  title: {
    default: `${SITE_CONFIG.organization.brandName} – Private Volcano Tours in East Java`,
    template: `%s | ${SITE_CONFIG.organization.brandName}`,
  },
  description: SITE_CONFIG.organization.description,
  keywords: [
    'Mount Bromo tour', 'Ijen Crater tour', 'Kawah Ijen blue fire',
    'private volcano tour East Java', 'Java volcano tour operator',
    'tourist police led tour Indonesia', 'Tumpak Sewu waterfall tour',
  ],
  authors: [{ name: SITE_CONFIG.organization.founder.name }],
  creator: SITE_CONFIG.organization.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://javavolcano-touroperator.com',
    siteName: SITE_CONFIG.organization.name,
    title: `${SITE_CONFIG.organization.brandName} – Private Volcano Tours in East Java`,
    description: SITE_CONFIG.organization.description,
    images: [{
      url: `${SITE_CONFIG.organization.founder.image}`,
      width: 1200,
      height: 630,
      alt: `${SITE_CONFIG.organization.name} – Private Volcano Tours`,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.organization.brandName} – Private Volcano Tours in East Java`,
    description: SITE_CONFIG.organization.description,
    images: [SITE_CONFIG.organization.founder.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://javavolcano-touroperator.com',
  },
};

import ThemeWrapper from '@/components/ThemeWrapper';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="antialiased transition-colors duration-300">
        <ThemeWrapper>
          <ErrorBoundary>
            {children}
            <WhatsAppFAB />
          </ErrorBoundary>
        </ThemeWrapper>
      </body>
    </html>
  );
}

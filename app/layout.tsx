import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import { SITE_CONFIG } from '@/lib/siteConfig';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.organization.brandName} - ${SITE_CONFIG.organization.name}`,
  description: SITE_CONFIG.organization.description,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-brand-cream text-brand-ink antialiased">
        <ErrorBoundary>
          {children}
          <WhatsAppFAB />
        </ErrorBoundary>
      </body>
    </html>
  );
}

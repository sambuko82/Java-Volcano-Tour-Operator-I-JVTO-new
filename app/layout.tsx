import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

import { SITE_CONFIG } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.organization.brandName} - ${SITE_CONFIG.organization.name}`,
  description: SITE_CONFIG.organization.description,
};

import WhatsAppFAB from '@/components/WhatsAppFAB';
import JsonLd from '@/components/JsonLd';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-stone-50 text-stone-900 antialiased">
        <ErrorBoundary>
          {children}
          <WhatsAppFAB />
        </ErrorBoundary>
      </body>
    </html>
  );
}

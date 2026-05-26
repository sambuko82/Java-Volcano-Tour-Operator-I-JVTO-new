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
  title: `${SITE_CONFIG.organization.brandName} - ${SITE_CONFIG.organization.name}`,
  description: SITE_CONFIG.organization.description,
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

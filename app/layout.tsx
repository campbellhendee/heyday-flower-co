import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import { BRAND } from '@/lib/constants';
import Script from 'next/script';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap'
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

// Prefer env if provided (Vercel), else fallback
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Floral artistry for celebrations and spaces`,
    template: `%s — ${BRAND.name}`
  },
  description:
    'Custom blooms crafted for weddings, events, and refined daily environments in Houston, Texas.',
  openGraph: {
    title: `${BRAND.name}`,
    description:
      'Custom blooms crafted for weddings, events, and refined daily environments in Houston, Texas.',
    url: SITE_URL,
    siteName: BRAND.name,
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — Floral artistry`
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name}`,
    description:
      'Custom blooms crafted for weddings, events, and refined daily environments in Houston, Texas.',
    images: ['/og-default.jpg']
  },
  alternates: {
    canonical: SITE_URL
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: BRAND.name,
    email: BRAND.email,
    telephone: BRAND.phoneHuman,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    areaServed: 'Houston, Texas',
    url: SITE_URL
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SkipLink />
        <Header />
        <main id="main" className="site-main">
          {children}
        </main>
        <Footer />

        <Script
          id="jsonld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

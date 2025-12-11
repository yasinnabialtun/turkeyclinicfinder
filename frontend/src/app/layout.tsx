import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import StructuredData from '../components/StructuredData';
import CookieConsent from '../components/CookieConsent';
import GoogleAdSense from '../components/GoogleAdSense';
import AdBanner from '../components/AdBanner';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema, generateMedicalBusinessSchema, siteConfig } from '../lib/seo';

// Font optimization for PageSpeed 100
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Turkey Clinic Finder - Best Medical Clinics in Turkey | Medical Tourism',
    template: '%s | Turkey Clinic Finder',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'TurkeyClinicFinder' }],
  creator: 'TurkeyClinicFinder',
  publisher: 'TurkeyClinicFinder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR', 'ar_SA'],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Turkey Clinic Finder - Best Medical Clinics in Turkey',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkey Clinic Finder - Best Medical Clinics in Turkey',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@turkeyclinicfinder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en': siteConfig.url,
      'tr': `${siteConfig.url}/tr`,
      'ar': `${siteConfig.url}/ar`,
      'x-default': siteConfig.url,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and viewport */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* SEO and structured data */}
        <GoogleAdSense />
        <StructuredData data={[
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateWebSiteSchema(),
          generateMedicalBusinessSchema(),
        ]} />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ModernHeader />
        <main className="pt-20">{children}</main>
        <ModernFooter />
        <CookieConsent />
      </body>
    </html>
  );
}

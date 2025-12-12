import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ModernHeader from '../components/ModernHeader';
import Footer from '../components/Footer';
import { generateOrganizationSchema, siteConfig } from '../lib/seo';
import StructuredData from '../components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Turkey Clinic Finder - Find Best Medical Clinics in Turkey 2026',
    template: '%s | Turkey Clinic Finder',
  },
  description: 'Find the best medical clinics in Turkey. Compare prices, read reviews, and book your medical tourism journey. Hair transplant, dental care, plastic surgery, IVF, and more. Verified clinics with JCI accreditation.',
  keywords: [
    'medical tourism turkey',
    'turkey clinics',
    'hair transplant turkey',
    'dental tourism turkey',
    'plastic surgery turkey',
    'ivf turkey',
    'medical tourism',
    'turkey medical tourism',
    'best clinics turkey',
    'verified clinics turkey',
    'hair transplant cost turkey',
    'dental implants turkey',
    'rhinoplasty turkey',
    'turkey clinic finder',
    'medical tourism 2026',
  ],
  authors: [{ name: 'Turkey Clinic Finder' }],
  creator: 'Turkey Clinic Finder',
  publisher: 'Turkey Clinic Finder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
      'ar-SA': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Turkey Clinic Finder - Find Best Medical Clinics in Turkey 2026',
    description: 'Find the best medical clinics in Turkey. Compare prices, read reviews, and book your medical tourism journey.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Turkey Clinic Finder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkey Clinic Finder - Find Best Medical Clinics in Turkey',
    description: 'Find the best medical clinics in Turkey. Compare prices, read reviews, and book your medical tourism journey.',
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
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
  verification: {
    google: 'your-google-verification-code',
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
        <StructuredData data={generateOrganizationSchema()} />
      </head>
      <body className={inter.className}>
        <ModernHeader />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

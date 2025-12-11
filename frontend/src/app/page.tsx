import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { siteConfig } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Find Best Medical Clinics in Turkey | Hair Transplant, Dental, Plastic Surgery',
  description: 'Compare 500+ verified medical clinics in Turkey. Get transparent pricing, read real patient reviews, and book your treatment. Hair transplant, dental care, plastic surgery, and more.',
  keywords: [
    'medical tourism turkey',
    'hair transplant turkey',
    'dental turkey',
    'plastic surgery turkey',
    'istanbul clinics',
    'ankara clinics',
    'medical tourism',
    'turkey medical tourism',
    'best clinics turkey',
    'verified clinics turkey',
  ],
  openGraph: {
    title: 'Turkey Clinic Finder - Best Medical Clinics in Turkey',
    description: 'Find and compare verified medical clinics in Turkey. Read reviews, compare prices, and book your treatment.',
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Turkey Clinic Finder',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkey Clinic Finder - Best Medical Clinics in Turkey',
    description: 'Find and compare verified medical clinics in Turkey.',
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
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
};

export default function Home() {
  return <HomeClient />;
}

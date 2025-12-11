import type { Metadata } from 'next';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Browse Medical Clinics in Turkey | Compare Prices & Reviews',
  description: 'Browse and compare 500+ verified medical clinics in Turkey. Find the best clinics for hair transplant, dental care, plastic surgery, and more. Read reviews and compare prices.',
  keywords: 'turkey clinics, medical clinics turkey, hair transplant clinics turkey, dental clinics turkey, plastic surgery turkey, istanbul clinics, ankara clinics, medical tourism clinics',
  openGraph: {
    title: 'Browse Medical Clinics in Turkey | Turkey Clinic Finder',
    description: 'Find and compare verified medical clinics in Turkey. Read reviews, compare prices, and book your treatment.',
    type: 'website',
    url: `${siteConfig.url}/clinics`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Turkey Clinic Finder - Browse Clinics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse Medical Clinics in Turkey',
    description: 'Find and compare verified medical clinics in Turkey.',
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/clinics`,
  },
};


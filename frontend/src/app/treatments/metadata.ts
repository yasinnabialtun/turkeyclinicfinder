import type { Metadata } from 'next';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Medical Treatments in Turkey - Complete Guide',
  description: 'Explore all medical treatments available in Turkey. Hair transplant, dental care, plastic surgery, orthopedics, and more. Find the best clinics for your treatment.',
  keywords: 'medical treatments turkey, turkey medical procedures, hair transplant, dental care, plastic surgery turkey',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/treatments`,
  },
};


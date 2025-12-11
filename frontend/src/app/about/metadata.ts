import type { Metadata } from 'next';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'About Us - Turkey Clinic Finder | Your Medical Tourism Partner',
  description: 'Learn about Turkey Clinic Finder. We help patients find verified medical clinics in Turkey, compare prices, and make informed decisions for their medical journey.',
  keywords: 'about turkey clinic finder, medical tourism platform, turkey medical tourism guide',
  openGraph: {
    title: 'About Us - Turkey Clinic Finder',
    description: 'Your trusted partner for medical tourism in Turkey.',
    type: 'website',
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'About Turkey Clinic Finder',
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};


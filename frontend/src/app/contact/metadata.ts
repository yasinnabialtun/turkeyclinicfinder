import type { Metadata } from 'next';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Contact Us - Turkey Clinic Finder | Get in Touch',
  description: 'Contact Turkey Clinic Finder for support, questions, or inquiries about medical tourism in Turkey. We\'re here to help you on your medical journey.',
  keywords: 'contact turkey clinic finder, medical tourism support, turkey clinic finder help',
  openGraph: {
    title: 'Contact Us - Turkey Clinic Finder',
    description: 'Get in touch with Turkey Clinic Finder for support and inquiries.',
    type: 'website',
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Contact Turkey Clinic Finder',
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};


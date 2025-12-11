import type { Metadata } from 'next';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Medical Tourism Blog | Turkey Clinic Finder',
  description: 'Read expert articles about medical tourism in Turkey. Learn about hair transplant, dental care, plastic surgery, and more. Get tips and guides for your medical journey.',
  keywords: 'medical tourism blog, turkey medical tourism articles, hair transplant guide, dental tourism turkey, plastic surgery turkey, medical tourism tips',
  openGraph: {
    title: 'Medical Tourism Blog | Turkey Clinic Finder',
    description: 'Read expert articles about medical tourism and treatments in Turkey.',
    type: 'website',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Turkey Clinic Finder Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Tourism Blog',
    description: 'Read expert articles about medical tourism in Turkey.',
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


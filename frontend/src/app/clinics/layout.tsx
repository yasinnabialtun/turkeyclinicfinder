import type { Metadata } from 'next';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Browse Medical Clinics in Turkey | Verified Clinics Directory',
  description: 'Browse 500+ verified medical clinics in Turkey. Filter by city, treatment, price, and ratings. Find the perfect clinic for hair transplant, dental care, plastic surgery, and more.',
  keywords: [
    'turkey clinics',
    'medical clinics turkey',
    'istanbul clinics',
    'ankara clinics',
    'hair transplant clinics',
    'dental clinics turkey',
  ],
  openGraph: {
    title: 'Browse Medical Clinics in Turkey',
    description: 'Find verified medical clinics in Turkey',
    type: 'website',
    url: `${siteConfig.url}/clinics`,
  },
  alternates: {
    canonical: `${siteConfig.url}/clinics`,
  },
};

export default function ClinicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

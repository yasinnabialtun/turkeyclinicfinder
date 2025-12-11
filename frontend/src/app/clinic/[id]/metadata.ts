import type { Metadata } from 'next';
import { siteConfig } from '../../../lib/seo';

export function generateClinicMetadata(clinic: any): Metadata {
  const title = `${clinic.name_en || clinic.name} - Turkey Clinic Finder`;
  const description = clinic.description_en || clinic.description || `Find detailed information about ${clinic.name_en || clinic.name} in ${clinic.city}. Read reviews, compare prices, and book your treatment.`;

  return {
    title,
    description,
    keywords: [
      clinic.name_en || clinic.name,
      `${clinic.city} clinics`,
      'medical tourism turkey',
      'turkey medical clinics',
      clinic.treatments?.map((t: any) => t.name_en || t.name).join(', ') || '',
    ].filter(Boolean).join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteConfig.url}/clinic/${clinic.id}`,
      images: [
        {
          url: clinic.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: clinic.name_en || clinic.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [clinic.image || siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/clinic/${clinic.id}`,
    },
  };
}


export const siteConfig = {
  name: 'Turkey Clinic Finder',
  url: 'https://turkeyclinicfinder.com',
  description: 'Find the best medical clinics in Turkey. Compare prices, read reviews, and book your medical tourism journey. Hair transplant, dental care, plastic surgery, and more.',
  keywords: 'medical tourism turkey, turkey clinics, hair transplant turkey, dental tourism turkey, plastic surgery turkey, medical tourism, turkey medical tourism, best clinics turkey, verified clinics turkey',
  ogImage: 'https://turkeyclinicfinder.com/og-image.jpg',
  twitterHandle: '@turkeyclinicfinder',
};

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

export function generateStructuredData(type: string, data: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return baseSchema;
}

export function generateOrganizationSchema() {
  return generateStructuredData('Organization', {
    name: 'Turkey Clinic Finder',
    url: 'https://turkeyclinicfinder.com',
    logo: 'https://turkeyclinicfinder.com/logo.png',
    description: 'Your trusted partner for medical tourism in Turkey. Find verified medical clinics, compare prices, and read authentic reviews.',
    sameAs: [
      'https://www.facebook.com/turkeyclinicfinder',
      'https://www.twitter.com/turkeyclinicfinder',
      'https://www.instagram.com/turkeyclinicfinder',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@ynadijital.com',
      contactType: 'Customer Service',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Turkish', 'Arabic'],
    },
  });
}

export function generateLocalBusinessSchema() {
  return generateStructuredData('LocalBusiness', {
    name: 'Turkey Clinic Finder',
    image: 'https://turkeyclinicfinder.com/og-image.jpg',
    '@id': 'https://turkeyclinicfinder.com',
    url: 'https://turkeyclinicfinder.com',
    telephone: '+90-XXX-XXX-XX-XX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Istanbul',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082,
      longitude: 28.9784,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  });
}

export function generateMedicalBusinessSchema() {
  return generateStructuredData('MedicalBusiness', {
    name: 'Turkey Clinic Finder',
    description: 'Find verified medical clinics in Turkey for hair transplant, dental care, plastic surgery, and more.',
    url: 'https://turkeyclinicfinder.com',
    medicalSpecialty: [
      'Hair Transplant',
      'Dental Care',
      'Plastic Surgery',
      'Orthopedics',
      'Cardiology',
    ],
  });
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function generateClinicSchema(clinic: any) {
  return generateStructuredData('MedicalBusiness', {
    name: clinic.name_en || clinic.name,
    description: clinic.description_en || clinic.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: clinic.city,
      addressCountry: 'TR',
    },
    aggregateRating: clinic.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: clinic.rating,
          reviewCount: clinic.review_count || 0,
        }
      : undefined,
    priceRange: '$$',
    telephone: clinic.phone,
    url: `https://turkeyclinicfinder.com/clinic/${clinic.id}`,
  });
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  publishedAt: string;
  author?: string;
  image?: string;
  url: string;
}) {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.description,
    image: article.image || 'https://turkeyclinicfinder.com/og-image.jpg',
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author || 'Turkey Clinic Finder',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Turkey Clinic Finder',
      logo: {
        '@type': 'ImageObject',
        url: 'https://turkeyclinicfinder.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  });
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });
}

export function generateWebSiteSchema() {
  return generateStructuredData('WebSite', {
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/clinics?query={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  });
}

export function generateItemListSchema(items: Array<{ name: string; url: string; description?: string }>) {
  return generateStructuredData('ItemList', {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
    })),
  });
}

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://turkeyclinicfinder.vercel.app';

  // Blog articles
  const blogArticles = [
    'is-hair-transplant-safe-in-turkey',
    'how-much-does-hair-transplant-cost-in-turkey',
    'what-to-expect-after-hair-transplant-turkey',
    'hair-transplant-turkey-2026',
    'dental-tourism-turkey-2026',
    '2026-medical-tourism-turkey-trends',
    'plastic-surgery-turkey-2026',
    'best-hair-transplant-clinic-turkey',
    'hair-transplant-turkey-reviews',
    'dental-implants-turkey-cost',
    'rhinoplasty-turkey-cost',
    'ivf-treatment-turkey',
    'hair-transplant-turkey-how-long',
    'dental-implants-turkey-pain',
    'medical-tourism-turkey-visa-travel',
    'rhinoplasty-recovery-turkey',
    'payment-methods-medical-tourism-turkey',
  ];

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/clinics`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const blogRoutes = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}

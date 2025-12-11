import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/_error', '/404', '/500'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/sitemap`,
    ],
    host: siteConfig.url,
  };
}


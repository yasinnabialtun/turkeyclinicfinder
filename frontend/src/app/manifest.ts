import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'TCF',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['medical', 'health', 'tourism'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait',
  };
}

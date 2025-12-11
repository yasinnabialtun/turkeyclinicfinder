import type { Metadata } from 'next';
import { siteConfig } from '../../../lib/seo';

export function generateBlogMetadata(article: any): Metadata {
  const title = `${article.title} - Turkey Clinic Finder Blog`;
  const description = article.excerpt || article.description || `Read about ${article.title} on Turkey Clinic Finder blog.`;

  return {
    title,
    description,
    keywords: [
      article.title,
      'medical tourism turkey',
      'turkey medical tourism',
      article.category || '',
      'medical tourism blog',
    ].filter(Boolean).join(', '),
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteConfig.url}/blog/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author || 'Turkey Clinic Finder'],
      images: [
        {
          url: article.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [article.image || siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${article.slug}`,
    },
  };
}


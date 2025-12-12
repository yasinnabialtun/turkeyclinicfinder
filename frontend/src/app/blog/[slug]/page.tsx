'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { generateArticleSchema, generateBreadcrumbSchema } from '../../../lib/seo';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const fetchArticle = async () => {
    // Mock data - replace with actual API call
    const articles: Record<string, any> = {
      'hair-transplant-turkey-guide': {
        title: 'Complete Guide to Hair Transplant in Turkey',
        content: `
# Complete Guide to Hair Transplant in Turkey

Turkey has become one of the world's leading destinations for hair transplant procedures. With state-of-the-art clinics, experienced surgeons, and competitive prices, thousands of patients travel to Turkey each year for hair restoration.

## Why Choose Turkey for Hair Transplant?

Turkey offers several advantages for hair transplant procedures:

- **Cost-Effective**: Hair transplants in Turkey cost significantly less than in Western countries, often 50-70% cheaper
- **Expert Surgeons**: Turkish surgeons are highly trained and experienced, performing thousands of procedures annually
- **Modern Facilities**: Clinics use the latest technology including FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation)
- **Tourism Package**: Many clinics offer all-inclusive packages including accommodation and transfers

## Types of Hair Transplant Procedures

### FUE (Follicular Unit Extraction)
FUE is the most popular method, involving individual extraction of hair follicles from the donor area.

### DHI (Direct Hair Implantation)
DHI uses a special pen-like device to implant hair directly, providing natural-looking results.

### FUT (Follicular Unit Transplantation)
FUT involves removing a strip of scalp from the donor area, less common but still used in some cases.

## What to Expect

The procedure typically takes 6-8 hours and is performed under local anesthesia. Recovery time is usually 7-10 days, with full results visible after 12-18 months.

## Choosing the Right Clinic

When selecting a clinic, consider:
- Surgeon's experience and qualifications
- Clinic's accreditation and certifications
- Patient reviews and before/after photos
- Transparent pricing with no hidden fees
- Post-operative care and follow-up

## Conclusion

Turkey offers excellent value for hair transplant procedures with world-class facilities and experienced surgeons. Research thoroughly and choose a verified clinic for the best results.
        `,
        excerpt: 'Everything you need to know about hair transplant procedures in Turkey, including costs, recovery, and what to expect.',
        publishedAt: '2024-01-15',
        author: 'Turkey Clinic Finder',
        category: 'Hair Transplant',
      },
      'dental-tourism-turkey': {
        title: 'Dental Tourism in Turkey: What to Expect',
        content: `
# Dental Tourism in Turkey: What to Expect

Turkey has emerged as a premier destination for dental tourism, offering high-quality treatments at affordable prices.

## Why Turkey for Dental Care?

- Affordable prices (up to 70% savings)
- Experienced dentists with international training
- Modern dental clinics with latest technology
- Beautiful country to combine treatment with vacation

## Popular Dental Treatments

- Dental implants
- Veneers and crowns
- Teeth whitening
- Full mouth restoration
- Orthodontic treatments

## What to Expect

Most dental procedures in Turkey are performed with the same standards as Western countries, often using German or Swiss dental materials.
        `,
        excerpt: 'Learn about dental treatments, costs, and what to expect when visiting Turkey for dental care.',
        publishedAt: '2024-01-10',
        author: 'Turkey Clinic Finder',
        category: 'Dental',
      },
    };

    const data = articles[slug] || articles['hair-transplant-turkey-guide'];
    setArticle(data);
    setLoading(false);
  };

  if (loading || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: article.title, href: `/blog/${slug}` },
  ];

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    publishedAt: article.publishedAt,
    author: article.author,
    url: `/blog/${slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{article.author}</span>
            </div>
          </header>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((line: string, index: number) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold mb-4 mt-8">{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mb-4 mt-6">{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mb-3 mt-4">{line.substring(4)}</h3>;
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>;
                } else if (line.trim() === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
                }
              })}
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              ← Back to Blog
            </Link>
            <div className="flex space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import StructuredData from '../../components/StructuredData';
import AdBanner from '../../components/AdBanner';
import { generateItemListSchema, siteConfig } from '../../lib/seo';

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setArticles([
      {
        id: 1,
        title: 'Is Hair Transplant Safe in Turkey? Complete Safety Guide 2026',
        excerpt: 'Is hair transplant safe in Turkey? Learn about safety standards, clinic accreditation, surgeon qualifications, risks, and how to choose a safe clinic.',
        slug: 'is-hair-transplant-safe-in-turkey',
        publishedAt: '2026-02-01',
        category: 'Safety Guide',
        image: 'bg-gradient-to-br from-green-400 to-emerald-600',
      },
      {
        id: 2,
        title: 'How Much Does Hair Transplant Cost in Turkey? 2026 Price Guide',
        excerpt: 'How much does hair transplant cost in Turkey? Complete price guide with FUE, DHI costs, what\'s included, hidden fees to avoid, and cost comparison.',
        slug: 'how-much-does-hair-transplant-cost-in-turkey',
        publishedAt: '2026-02-05',
        category: 'Cost Guide',
        image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      },
      {
        id: 7,
        title: 'What to Expect After Hair Transplant in Turkey? Complete Recovery Guide',
        excerpt: 'What to expect after hair transplant in Turkey? Complete recovery timeline, healing process, when you can return to work, and post-operative care.',
        slug: 'what-to-expect-after-hair-transplant-turkey',
        publishedAt: '2026-02-10',
        category: 'Recovery Guide',
        image: 'bg-gradient-to-br from-teal-400 to-cyan-600',
      },
      {
        id: 3,
        title: 'Hair Transplant in Turkey 2026: Complete Guide, Costs & Best Clinics',
        excerpt: 'Complete 2026 guide to hair transplant in Turkey. Learn about FUE, DHI, Sapphire techniques, costs, recovery, and how to choose the best clinic.',
        slug: 'hair-transplant-turkey-2026',
        publishedAt: '2026-01-20',
        category: 'Hair Transplant',
        image: 'bg-gradient-to-br from-purple-400 to-pink-600',
      },
      {
        id: 4,
        title: 'Dental Tourism in Turkey 2026: Complete Guide to Treatments & Costs',
        excerpt: 'Comprehensive 2026 guide to dental tourism in Turkey. Learn about dental implants, veneers, all-on-4, costs, best clinics, and what to expect.',
        slug: 'dental-tourism-turkey-2026',
        publishedAt: '2026-01-25',
        category: 'Dental',
        image: 'bg-gradient-to-br from-teal-400 to-cyan-600',
      },
      {
        id: 5,
        title: '2026 Medical Tourism Turkey: Trends, Statistics & Future Outlook',
        excerpt: 'Discover the latest 2026 medical tourism trends in Turkey. Learn about market growth, popular treatments, AI integration, and why Turkey leads.',
        slug: '2026-medical-tourism-turkey-trends',
        publishedAt: '2026-01-15',
        category: 'Medical Tourism',
        image: 'bg-gradient-to-br from-indigo-400 to-purple-600',
      },
      {
        id: 6,
        title: 'Plastic Surgery in Turkey 2026: Complete Overview & Best Procedures',
        excerpt: 'Comprehensive guide to plastic surgery options, costs, and recovery in Turkey. Learn about rhinoplasty, breast augmentation, and more.',
        slug: 'plastic-surgery-turkey-2026',
        publishedAt: '2026-01-30',
        category: 'Plastic Surgery',
        image: 'bg-gradient-to-br from-orange-400 to-red-600',
      },
      {
        id: 8,
        title: 'Best Hair Transplant Clinic in Turkey: How to Choose in 2026',
        excerpt: 'How to find the best hair transplant clinic in Turkey? Complete guide with clinic selection criteria, red flags to avoid, and recommendations.',
        slug: 'best-hair-transplant-clinic-turkey',
        publishedAt: '2026-02-15',
        category: 'Clinic Selection',
        image: 'bg-gradient-to-br from-indigo-400 to-purple-600',
      },
      {
        id: 9,
        title: 'Hair Transplant Turkey Reviews: Real Patient Experiences 2026',
        excerpt: 'Read real hair transplant reviews from patients who underwent procedures in Turkey. Learn about experiences, results, and recovery.',
        slug: 'hair-transplant-turkey-reviews',
        publishedAt: '2026-02-20',
        category: 'Patient Reviews',
        image: 'bg-gradient-to-br from-pink-400 to-rose-600',
      },
      {
        id: 10,
        title: 'Dental Implants Cost in Turkey: Complete Price Guide 2026',
        excerpt: 'How much do dental implants cost in Turkey? Complete price guide with single implant, all-on-4 costs, and cost comparisons.',
        slug: 'dental-implants-turkey-cost',
        publishedAt: '2026-02-25',
        category: 'Cost Guide',
        image: 'bg-gradient-to-br from-cyan-400 to-blue-600',
      },
      {
        id: 11,
        title: 'Rhinoplasty Cost in Turkey: Nose Job Price Guide 2026',
        excerpt: 'How much does rhinoplasty cost in Turkey? Complete price guide for nose jobs, including revision rhinoplasty and recovery.',
        slug: 'rhinoplasty-turkey-cost',
        publishedAt: '2026-03-01',
        category: 'Plastic Surgery',
        image: 'bg-gradient-to-br from-violet-400 to-purple-600',
      },
      {
        id: 12,
        title: 'IVF Treatment in Turkey: Cost, Success Rates & Best Clinics 2026',
        excerpt: 'Complete guide to IVF treatment in Turkey. Learn about costs, success rates, process, and best clinics for fertility treatment.',
        slug: 'ivf-treatment-turkey',
        publishedAt: '2026-03-05',
        category: 'Fertility',
        image: 'bg-gradient-to-br from-emerald-400 to-teal-600',
      },
      {
        id: 13,
        title: 'How Long Does Hair Transplant Take in Turkey? Complete Timeline Guide 2026',
        excerpt: 'How long does hair transplant take in Turkey? Learn about procedure duration, recovery time, when you can return home, and complete timeline.',
        slug: 'hair-transplant-turkey-how-long',
        publishedAt: '2026-03-10',
        category: 'Hair Transplant',
        image: 'bg-gradient-to-br from-amber-400 to-orange-600',
      },
      {
        id: 14,
        title: 'Do Dental Implants Hurt in Turkey? Pain Level & Recovery Guide 2026',
        excerpt: 'Do dental implants hurt in Turkey? Learn about pain levels during and after dental implant surgery, pain management, and recovery process.',
        slug: 'dental-implants-turkey-pain',
        publishedAt: '2026-03-12',
        category: 'Dental',
        image: 'bg-gradient-to-br from-rose-400 to-pink-600',
      },
      {
        id: 15,
        title: 'Medical Tourism Turkey: Visa, Travel & Accommodation Guide 2026',
        excerpt: 'Complete guide to medical tourism in Turkey: visa requirements, travel arrangements, accommodation options, insurance, and everything you need to know.',
        slug: 'medical-tourism-turkey-visa-travel',
        publishedAt: '2026-03-15',
        category: 'Travel Guide',
        image: 'bg-gradient-to-br from-sky-400 to-blue-600',
      },
      {
        id: 16,
        title: 'Rhinoplasty Recovery in Turkey: Complete Timeline & Aftercare Guide 2026',
        excerpt: 'Complete guide to rhinoplasty recovery in Turkey. Learn about recovery timeline, swelling, bruising, when you can return home, and post-operative care.',
        slug: 'rhinoplasty-recovery-turkey',
        publishedAt: '2026-03-18',
        category: 'Plastic Surgery',
        image: 'bg-gradient-to-br from-fuchsia-400 to-purple-600',
      },
      {
        id: 17,
        title: 'Payment Methods for Medical Tourism in Turkey: Complete Guide 2026',
        excerpt: 'How to pay for medical treatment in Turkey? Learn about payment methods, currency, payment plans, insurance coverage, and payment security.',
        slug: 'payment-methods-medical-tourism-turkey',
        publishedAt: '2026-03-20',
        category: 'Payment Guide',
        image: 'bg-gradient-to-br from-lime-400 to-green-600',
      },
    ]);
    setLoading(false);
  }, []);

  return (
    <>
      <StructuredData data={generateItemListSchema(
        articles.map(article => ({
          name: article.title,
          url: `${siteConfig.url}/blog/${article.slug}`,
          description: article.excerpt,
        }))
      )} />
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">
            Latest articles about medical tourism and treatments in Turkey
          </p>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdBanner position="in-content" size="medium" className="mb-8" />
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`h-48 ${article.image} relative overflow-hidden`}>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  {/* Decorative Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  {/* Medical Icon Overlay */}
                  <div className="absolute bottom-4 right-4 text-white/30 text-6xl font-bold">
                    {article.category === 'Hair Transplant' ? '💇' : 
                     article.category === 'Dental' ? '🦷' : 
                     article.category === 'Plastic Surgery' ? '✨' : 
                     article.category === 'Fertility' ? '👶' : 
                     article.category === 'Cost Guide' ? '💰' : 
                     article.category === 'Safety Guide' ? '🛡️' : 
                     article.category === 'Recovery Guide' ? '🏥' : 
                     article.category === 'Medical Tourism' ? '✈️' : '🏥'}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(article.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center gap-1">
                      Devamını Oku
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

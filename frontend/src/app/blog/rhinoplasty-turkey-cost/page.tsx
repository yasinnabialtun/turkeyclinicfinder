import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import { generateArticleSchema, generateFAQSchema } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'Rhinoplasty Cost in Turkey: Nose Job Price Guide 2026',
  description: 'How much does rhinoplasty cost in Turkey? Complete 2026 price guide for nose jobs, including revision rhinoplasty, recovery, and what to expect.',
  keywords: 'rhinoplasty cost turkey, nose job price turkey, rhinoplasty turkey price, cheap rhinoplasty turkey, nose surgery cost turkey 2026',
  openGraph: {
    title: 'Rhinoplasty Cost in Turkey: Complete Price Guide 2026',
    description: 'Everything about rhinoplasty costs in Turkey. Nose job prices, revision costs, recovery, and cost comparisons.',
    type: 'article',
    publishedTime: '2026-03-01T00:00:00Z',
    authors: ['Turkey Clinic Finder'],
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/rhinoplasty-turkey-cost`,
  },
};

const articleData = {
  title: 'Rhinoplasty Cost in Turkey: Nose Job Price Guide 2026',
  description: 'Complete guide to rhinoplasty costs in Turkey including primary and revision procedures, recovery, and cost comparisons.',
  publishedAt: '2026-03-01T00:00:00Z',
  author: 'Turkey Clinic Finder',
  image: siteConfig.ogImage,
  url: `${siteConfig.url}/blog/rhinoplasty-turkey-cost`,
};

const faqs = [
  {
    question: 'How much does rhinoplasty cost in Turkey?',
    answer: 'Rhinoplasty in Turkey costs $2,500-$5,000, which is 60-70% less than in the US/UK where similar procedures cost $7,000-$15,000. Revision rhinoplasty costs $3,500-$7,000 in Turkey.',
  },
  {
    question: 'Why is rhinoplasty cheaper in Turkey?',
    answer: 'Lower operating costs, favorable exchange rates, high competition among clinics, and government support for medical tourism make Turkey an affordable destination while maintaining high quality standards.',
  },
  {
    question: 'What is included in rhinoplasty cost in Turkey?',
    answer: 'Typically includes: consultation, pre-operative tests, surgery, anesthesia, hospital stay, medications, follow-up appointments, and sometimes accommodation and transfers. Always confirm what\'s included.',
  },
  {
    question: 'How much does revision rhinoplasty cost in Turkey?',
    answer: 'Revision rhinoplasty costs $3,500-$7,000 in Turkey, compared to $10,000-$20,000 in Western countries. Revision is more complex and requires experienced surgeons.',
  },
];

export default function RhinoplastyCostPage() {
  const articleSchema = generateArticleSchema(articleData);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <StructuredData data={[articleSchema, faqSchema]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' / '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' / '}
            <span className="text-gray-900">Rhinoplasty Cost Turkey</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rhinoplasty Cost in Turkey: Nose Job Price Guide 2026
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span className="mx-2">•</span>
              <span>10 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Cost Guide
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Answer</p>
              <p className="text-gray-700">
                <strong>Primary rhinoplasty in Turkey:</strong> $2,500 - $5,000<br />
                <strong>Revision rhinoplasty:</strong> $3,500 - $7,000<br />
                <strong>Savings:</strong> 60-70% compared to US/UK
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              How Much Does Rhinoplasty Cost in Turkey?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rhinoplasty (nose job) is one of the most popular cosmetic procedures in Turkey, offering 
              exceptional value with costs 60-70% lower than in Western countries. The average cost ranges 
              from $2,500 to $5,000 for primary rhinoplasty, making it accessible to many patients.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Turkey Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">US/UK Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Primary Rhinoplasty</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$2,500 - $5,000</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$7,000 - $15,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">60-70%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Revision Rhinoplasty</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$3,500 - $7,000</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$10,000 - $20,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">65-70%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Ethnic Rhinoplasty</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$3,000 - $6,000</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$8,000 - $18,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">60-70%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Rhinoplasty + Septoplasty</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$3,500 - $6,500</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$10,000 - $20,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">65-70%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Factors Affecting Rhinoplasty Cost
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Surgeon Experience</h3>
                <p className="text-gray-700">
                  Board-certified plastic surgeons with 10+ years of experience and international training 
                  typically charge more but offer better results and safety.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Procedure Complexity</h3>
                <p className="text-gray-700">
                  Simple tip refinement costs less than complete nose reconstruction. Revision rhinoplasty 
                  is more complex and expensive.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Clinic Reputation</h3>
                <p className="text-gray-700">
                  JCI-accredited clinics with modern facilities may charge slightly more but provide better 
                  safety standards and post-operative care.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Location</h3>
                <p className="text-gray-700">
                  Clinics in Istanbul may charge slightly more than other cities, but offer more experienced 
                  surgeons and better facilities.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              What's Included in the Price?
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Typically Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pre-operative consultation and examination</li>
                <li>• Medical tests and imaging</li>
                <li>• Anesthesia (local or general)</li>
                <li>• Surgical procedure</li>
                <li>• Hospital/clinic stay (if needed)</li>
                <li>• Post-operative medications</li>
                <li>• Follow-up appointments</li>
                <li>• Splint and dressings</li>
                <li>• Sometimes: Airport transfers and accommodation</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Revision Rhinoplasty Cost
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Revision rhinoplasty (correcting a previous nose job) is more complex and costs $3,500-$7,000 
              in Turkey. This is because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>More complex surgery due to scar tissue</li>
              <li>Requires highly experienced surgeons</li>
              <li>Longer operating time</li>
              <li>May require additional procedures (grafting, etc.)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rhinoplasty in Turkey offers excellent value with costs 60-70% lower than in Western countries. 
              Primary rhinoplasty costs $2,500-$5,000, while revision procedures cost $3,500-$7,000. Always 
              prioritize surgeon experience and clinic accreditation over price alone.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Rhinoplasty Clinics</h3>
              <p className="text-gray-700 mb-6">
                Browse verified rhinoplasty clinics in Turkey with transparent pricing.
              </p>
              <Link 
                href="/clinics?treatment=Plastic+Surgery" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Browse Rhinoplasty Clinics
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import { generateArticleSchema, generateFAQSchema } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'IVF Treatment in Turkey: Cost, Success Rates & Best Clinics 2026',
  description: 'Complete guide to IVF treatment in Turkey. Learn about costs, success rates, process, best clinics, and what to expect from IVF in Turkey.',
  keywords: 'ivf turkey, ivf cost turkey, ivf treatment turkey, ivf success rate turkey, best ivf clinic turkey, fertility treatment turkey',
  openGraph: {
    title: 'IVF Treatment in Turkey: Complete Guide 2026',
    description: 'Everything about IVF treatment in Turkey: costs, success rates, process, and best clinics.',
    type: 'article',
    publishedTime: '2026-03-05T00:00:00Z',
    authors: ['Turkey Clinic Finder'],
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/ivf-treatment-turkey`,
  },
};

const articleData = {
  title: 'IVF Treatment in Turkey: Cost, Success Rates & Best Clinics 2026',
  description: 'Comprehensive guide to IVF treatment in Turkey including costs, success rates, process, and clinic selection.',
  publishedAt: '2026-03-05T00:00:00Z',
  author: 'Turkey Clinic Finder',
  image: siteConfig.ogImage,
  url: `${siteConfig.url}/blog/ivf-treatment-turkey`,
};

const faqs = [
  {
    question: 'How much does IVF cost in Turkey?',
    answer: 'IVF treatment in Turkey costs $3,000-$5,000 per cycle, which is 50-70% less than in the US/UK where similar procedures cost $10,000-$20,000. This includes medications, monitoring, egg retrieval, fertilization, and embryo transfer.',
  },
  {
    question: 'What is the IVF success rate in Turkey?',
    answer: 'IVF success rates in Turkey are comparable to international standards: 50-65% for women under 35, 40-50% for ages 35-40, and 20-30% for ages 40-45. Top clinics achieve success rates matching or exceeding European averages.',
  },
  {
    question: 'Is IVF legal in Turkey?',
    answer: 'Yes, IVF is legal and well-regulated in Turkey. Turkish IVF clinics follow strict regulations set by the Ministry of Health and use internationally approved techniques and protocols.',
  },
  {
    question: 'How long does IVF treatment take in Turkey?',
    answer: 'A complete IVF cycle in Turkey takes 4-6 weeks: 2 weeks of ovarian stimulation, egg retrieval, fertilization (3-5 days), and embryo transfer. You\'ll need to stay 2-3 weeks in Turkey for the procedure.',
  },
];

export default function IVFTreatmentPage() {
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
            <span className="text-gray-900">IVF Treatment Turkey</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IVF Treatment in Turkey: Cost, Success Rates & Best Clinics 2026
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <time dateTime="2026-03-05">March 5, 2026</time>
              <span className="mx-2">•</span>
              <span>14 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Fertility Treatment
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Summary</p>
              <p className="text-gray-700">
                <strong>IVF Cost in Turkey:</strong> $3,000 - $5,000 per cycle<br />
                <strong>Success Rate:</strong> 50-65% (under 35), comparable to international standards<br />
                <strong>Savings:</strong> 50-70% compared to US/UK
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Turkey for IVF Treatment?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Turkey has become a leading destination for IVF treatment, offering world-class fertility 
              clinics with experienced specialists, modern technology, and significantly lower costs. 
              Turkish IVF clinics maintain success rates comparable to or exceeding international standards 
              while being 50-70% more affordable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Advantages</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 50-70% cost savings</li>
                  <li>• High success rates (comparable to Europe)</li>
                  <li>• Experienced fertility specialists</li>
                  <li>• Modern technology and equipment</li>
                  <li>• Comprehensive packages</li>
                  <li>• English-speaking staff</li>
                  <li>• JCI-accredited clinics</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Success Rates</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Under 35: 50-65%</li>
                  <li>• 35-40: 40-50%</li>
                  <li>• 40-45: 20-30%</li>
                  <li>• Over 45: 5-15%</li>
                  <li className="text-xs text-gray-600 mt-2">*Rates vary by clinic and individual factors</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              IVF Cost in Turkey: Complete Breakdown
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Treatment</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Turkey Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">US/UK Price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">IVF Cycle (Standard)</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$3,000 - $5,000</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$10,000 - $20,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">50-70%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">IVF + ICSI</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$3,500 - $6,000</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$12,000 - $25,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">60-75%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">IVF + PGS/PGD</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$5,000 - $8,000</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$15,000 - $30,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">65-75%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Frozen Embryo Transfer</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$1,500 - $2,500</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$4,000 - $6,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-semibold">60-65%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              What's Included in IVF Cost?
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Typically Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Initial consultation and fertility assessment</li>
                <li>• Hormone medications (stimulation drugs)</li>
                <li>• Monitoring ultrasounds and blood tests</li>
                <li>• Egg retrieval procedure</li>
                <li>• Sperm preparation</li>
                <li>• Fertilization (IVF or ICSI)</li>
                <li>• Embryo culture (3-5 days)</li>
                <li>• Embryo transfer</li>
                <li>• Pregnancy test</li>
                <li>• Follow-up consultations</li>
                <li>• Sometimes: Accommodation and transfers</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              IVF Process in Turkey: Step by Step
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Initial Consultation (Day 1)</h3>
                <p className="text-gray-700 text-sm">
                  Comprehensive fertility assessment, medical history review, and treatment plan development. 
                  Usually done via video call before travel.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Ovarian Stimulation (Days 2-12)</h3>
                <p className="text-gray-700 text-sm">
                  Daily hormone injections to stimulate multiple egg production. Regular monitoring via ultrasound 
                  and blood tests to track follicle development.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Egg Retrieval (Day 13-14)</h3>
                <p className="text-gray-700 text-sm">
                  Minor surgical procedure under sedation to retrieve eggs. Takes 15-30 minutes. Rest for a few 
                  hours before discharge.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Fertilization (Days 14-18)</h3>
                <p className="text-gray-700 text-sm">
                  Eggs are fertilized with sperm (IVF or ICSI). Embryos are cultured for 3-5 days. Best quality 
                  embryos are selected for transfer.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 5: Embryo Transfer (Day 18-20)</h3>
                <p className="text-gray-700 text-sm">
                  Selected embryos are transferred to the uterus. Simple procedure, no anesthesia needed. 
                  Rest for 1-2 days before returning home.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 6: Pregnancy Test (2 weeks later)</h3>
                <p className="text-gray-700 text-sm">
                  Blood test to confirm pregnancy. Can be done at home or at the clinic. Follow-up support 
                  continues regardless of location.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              How to Choose the Best IVF Clinic in Turkey
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Selection Criteria:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Success Rates:</strong> Ask for clinic-specific success rates for your age group</li>
                <li><strong>Accreditation:</strong> JCI-accredited clinics meet international standards</li>
                <li><strong>Experience:</strong> Look for clinics with 10+ years of experience and 1000+ cycles</li>
                <li><strong>Technology:</strong> Modern labs, PGS/PGD capabilities, embryo freezing</li>
                <li><strong>Specialists:</strong> Board-certified reproductive endocrinologists</li>
                <li><strong>Reviews:</strong> Read verified patient reviews and testimonials</li>
                <li><strong>Transparency:</strong> Clear pricing, no hidden fees, detailed treatment plans</li>
              </ul>
            </div>

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
              IVF treatment in Turkey offers excellent value with costs 50-70% lower than in Western countries 
              while maintaining high success rates. With experienced specialists, modern technology, and 
              comprehensive care, Turkey is an excellent choice for fertility treatment.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find IVF Clinics</h3>
              <p className="text-gray-700 mb-6">
                Browse verified IVF clinics in Turkey with transparent pricing and success rates.
              </p>
              <Link 
                href="/clinics?treatment=IVF+Treatment" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Browse IVF Clinics
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import { generateArticleSchema, generateFAQSchema } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'How Long Does Hair Transplant Take in Turkey? Complete Timeline Guide 2026',
  description: 'How long does hair transplant take in Turkey? Learn about procedure duration, recovery time, when you can return home, and complete timeline from consultation to results.',
  keywords: 'how long does hair transplant take turkey, hair transplant duration turkey, hair transplant timeline, how long stay turkey hair transplant, hair transplant recovery time turkey',
  openGraph: {
    title: 'How Long Does Hair Transplant Take in Turkey? Complete Timeline 2026',
    description: 'Complete guide to hair transplant timeline in Turkey: procedure duration, recovery, and when you can return home.',
    type: 'article',
    publishedTime: '2026-03-10T00:00:00Z',
    authors: ['Turkey Clinic Finder'],
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/hair-transplant-turkey-how-long`,
  },
};

const articleData = {
  title: 'How Long Does Hair Transplant Take in Turkey? Complete Timeline Guide 2026',
  description: 'Complete guide to hair transplant timeline in Turkey including procedure duration, recovery time, stay duration, and when you can return home.',
  publishedAt: '2026-03-10T00:00:00Z',
  author: 'Turkey Clinic Finder',
  image: siteConfig.ogImage,
  url: `${siteConfig.url}/blog/hair-transplant-turkey-how-long`,
};

const faqs = [
  {
    question: 'How long does a hair transplant procedure take in Turkey?',
    answer: 'A hair transplant procedure in Turkey typically takes 6-10 hours, depending on the number of grafts. For 2,000-3,000 grafts (most common), expect 6-8 hours. For 4,000+ grafts, it can take 8-10 hours. The procedure is performed in one day.',
  },
  {
    question: 'How long do you need to stay in Turkey for hair transplant?',
    answer: 'Most patients stay in Turkey for 2-3 days for a hair transplant. Day 1: Procedure. Day 2: First wash and check-up. Day 3: Final check-up and departure. Some clinics recommend staying 3-4 days for optimal recovery.',
  },
  {
    question: 'When can you return home after hair transplant in Turkey?',
    answer: 'You can typically return home 2-3 days after the procedure. Most patients fly home on day 3. It\'s safe to travel after the first wash and check-up. Avoid long flights (over 8 hours) immediately after the procedure if possible.',
  },
  {
    question: 'How long is the recovery time after hair transplant?',
    answer: 'Initial recovery takes 7-10 days (return to work). Scabs fall off after 10-14 days. Normal appearance after 2-4 weeks. New hair growth starts at 3-4 months. Full results are visible at 12-18 months.',
  },
  {
    question: 'How long does it take to see results after hair transplant?',
    answer: 'First signs of growth appear at 3-4 months. Noticeable improvement at 6 months (40-50% of final result). Significant growth at 9 months (70-80%). Full results are visible at 12-18 months.',
  },
];

export default function HairTransplantHowLongPage() {
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
            <span className="text-gray-900">How Long Does Hair Transplant Take</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Long Does Hair Transplant Take in Turkey? Complete Timeline Guide 2026
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <time dateTime="2026-03-10">March 10, 2026</time>
              <span className="mx-2">•</span>
              <span>15 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Timeline Guide
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Answer</p>
              <p className="text-gray-700">
                <strong>Procedure duration:</strong> 6-10 hours (one day)<br />
                <strong>Stay in Turkey:</strong> 2-3 days<br />
                <strong>Return to work:</strong> 7-10 days<br />
                <strong>Full results:</strong> 12-18 months
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              How Long Does the Hair Transplant Procedure Take?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              One of the most common questions patients ask is: <strong>"How long does a hair transplant take?"</strong> 
              The answer depends on several factors, but here's a comprehensive breakdown:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Number of Grafts</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure Duration</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Breakdown</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">1,000 - 1,500 grafts</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>4-6 hours</strong></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Smaller procedures, faster completion</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">2,000 - 3,000 grafts</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>6-8 hours</strong></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Most common, standard duration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">3,500 - 4,000 grafts</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>8-10 hours</strong></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Larger procedures, longer duration</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">4,500+ grafts</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>10-12 hours</strong></td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">May require two-day procedure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              Procedure Timeline Breakdown
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Typical 6-8 Hour Procedure (2,000-3,000 grafts):</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">08:00</span>
                  <div>
                    <strong>Arrival & Preparation:</strong> Check-in, paperwork, pre-operative photos, hairline design
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">09:00</span>
                  <div>
                    <strong>Anesthesia:</strong> Local anesthesia administered (30-45 minutes)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">09:30</span>
                  <div>
                    <strong>Donor Area Extraction:</strong> FUE extraction begins (2-3 hours for 2,000-3,000 grafts)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">12:00</span>
                  <div>
                    <strong>Lunch Break:</strong> 30-45 minute break (you can eat, rest)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">12:45</span>
                  <div>
                    <strong>Recipient Area Preparation:</strong> Creating channels for grafts (30-60 minutes)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">13:30</span>
                  <div>
                    <strong>Graft Implantation:</strong> Placing grafts into recipient area (3-4 hours)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">17:00</span>
                  <div>
                    <strong>Final Check & Bandaging:</strong> Post-operative care instructions, bandaging
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">17:30</span>
                  <div>
                    <strong>Discharge:</strong> Return to hotel with medications and care instructions
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              How Long Do You Need to Stay in Turkey?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most patients stay in Turkey for <strong>2-3 days</strong> for a hair transplant. Here's the typical schedule:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Day 1: Procedure Day</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Morning: Arrive at clinic, consultation, procedure begins</li>
                  <li>• Afternoon: Procedure continues (6-10 hours)</li>
                  <li>• Evening: Return to hotel, rest, follow post-op instructions</li>
                  <li>• <strong>Stay overnight in hotel</strong></li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Day 2: First Wash & Check-up</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Morning: Return to clinic for first wash</li>
                  <li>• Clinic staff performs first gentle wash</li>
                  <li>• Check-up to ensure everything is healing properly</li>
                  <li>• Receive washing instructions for home</li>
                  <li>• <strong>Stay overnight in hotel</strong></li>
                </ul>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Day 3: Final Check-up & Departure</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Morning: Final check-up at clinic</li>
                  <li>• Receive final instructions and medications</li>
                  <li>• Airport transfer arranged</li>
                  <li>• <strong>Fly home</strong> (safe to travel after 48 hours)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💡 Extended Stay Option</h3>
              <p className="text-gray-700 text-sm mb-2">
                Some clinics recommend staying <strong>3-4 days</strong> for:
              </p>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Better recovery before travel</li>
                <li>Additional check-ups</li>
                <li>Second wash at clinic</li>
                <li>Reduced risk of complications during travel</li>
                <li>Combining treatment with tourism</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              When Can You Return Home After Hair Transplant?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can typically return home <strong>2-3 days after the procedure</strong>. Most patients fly home on day 3. 
              Here's what you need to know:
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Safe to Travel After:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>48 hours:</strong> Minimum recommended time before flying</li>
                <li>• <strong>First wash completed:</strong> Clinic should perform first wash before you leave</li>
                <li>• <strong>No complications:</strong> Check-up confirms normal healing</li>
                <li>• <strong>Medications received:</strong> You have all necessary post-op medications</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ Travel Considerations:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Long flights (8+ hours):</strong> Consider staying an extra day if possible</li>
                <li>• <strong>Multiple connections:</strong> Avoid if possible, or stay longer</li>
                <li>• <strong>High altitude:</strong> Generally safe, but stay hydrated</li>
                <li>• <strong>Pressure changes:</strong> Usually not an issue, but inform clinic if concerned</li>
                <li>• <strong>Travel insurance:</strong> Ensure you have coverage for medical procedures</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Complete Recovery Timeline
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Days 1-7: Initial Recovery</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Days 1-3: Swelling, redness, mild discomfort</li>
                  <li>• Days 4-7: Scabs form, swelling subsides</li>
                  <li>• <strong>Return to work:</strong> Office work after 5-7 days, physical work after 10-14 days</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weeks 2-4: Healing Phase</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Weeks 2-3: Scabs fall off naturally</li>
                  <li>• Week 4: Scalp looks normal, redness fades</li>
                  <li>• Shock loss may begin (normal!)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Months 3-6: New Growth Begins</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Month 3: First signs of new hair (fine, thin)</li>
                  <li>• Month 4: 20-30% of final result visible</li>
                  <li>• Month 6: 40-50% of final result visible</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Months 12-18: Full Results</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Month 12: 90-95% of final result</li>
                  <li>• Month 18: 100% of final result visible</li>
                  <li>• Hair is fully grown, natural-looking</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Factors Affecting Procedure Duration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Number of Grafts</h3>
                <p className="text-gray-700 text-sm">
                  More grafts = longer procedure. 1,000 grafts takes 4-6 hours, while 4,000+ grafts can take 10-12 hours.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technique Used</h3>
                <p className="text-gray-700 text-sm">
                  DHI may take slightly longer than FUE. Sapphire FUE is similar to standard FUE in duration.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Surgeon Experience</h3>
                <p className="text-gray-700 text-sm">
                  Experienced surgeons work more efficiently, potentially reducing procedure time while maintaining quality.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Size</h3>
                <p className="text-gray-700 text-sm">
                  Larger teams can work faster. Some clinics use multiple technicians for extraction and implantation.
                </p>
              </div>
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
              Conclusion: Understanding Hair Transplant Timeline
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A hair transplant in Turkey typically takes <strong>6-10 hours</strong> for the procedure itself, 
              and you'll need to stay in Turkey for <strong>2-3 days</strong>. You can return home after 48 hours, 
              and most patients return to work after <strong>7-10 days</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Key takeaway:</strong> Plan for a 2-3 day stay in Turkey, with the procedure taking one full day. 
              Recovery at home takes 7-10 days before returning to work, and full results are visible at 12-18 months. 
              The investment in time is minimal compared to the lifetime of results you'll enjoy.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Your Hair Transplant Journey</h3>
              <p className="text-gray-700 mb-6">
                Find clinics that offer comprehensive packages including accommodation and transfers for your stay in Turkey.
              </p>
              <Link 
                href="/clinics?treatment=Hair+Transplant" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Find Hair Transplant Clinics
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import { generateArticleSchema, generateFAQSchema } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'Rhinoplasty Recovery in Turkey: Complete Timeline & Aftercare Guide 2026',
  description: 'Complete guide to rhinoplasty recovery in Turkey. Learn about recovery timeline, swelling, bruising, when you can return home, and post-operative care instructions.',
  keywords: 'rhinoplasty recovery turkey, nose job recovery time, rhinoplasty healing process, rhinoplasty aftercare turkey, nose surgery recovery timeline',
  openGraph: {
    title: 'Rhinoplasty Recovery in Turkey: Complete Timeline & Aftercare 2026',
    description: 'Everything about rhinoplasty recovery in Turkey: timeline, swelling, bruising, and aftercare instructions.',
    type: 'article',
    publishedTime: '2026-03-18T00:00:00Z',
    authors: ['Turkey Clinic Finder'],
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/rhinoplasty-recovery-turkey`,
  },
};

const articleData = {
  title: 'Rhinoplasty Recovery in Turkey: Complete Timeline & Aftercare Guide 2026',
  description: 'Complete guide to rhinoplasty recovery in Turkey including timeline, swelling, bruising, post-operative care, and when you can return home.',
  publishedAt: '2026-03-18T00:00:00Z',
  author: 'Turkey Clinic Finder',
  image: siteConfig.ogImage,
  url: `${siteConfig.url}/blog/rhinoplasty-recovery-turkey`,
};

const faqs = [
  {
    question: 'How long is rhinoplasty recovery in Turkey?',
    answer: 'Initial recovery takes 7-10 days (splint removal, return to work). Swelling subsides significantly by 2-4 weeks. Most swelling resolves by 3-6 months. Final results are visible at 12-18 months. You can typically return home 5-7 days after surgery.',
  },
  {
    question: 'When can I return home after rhinoplasty in Turkey?',
    answer: 'Most patients can return home 5-7 days after rhinoplasty. You\'ll have the splint removed before leaving, and swelling/bruising will be manageable. Avoid long flights (8+ hours) immediately after surgery if possible. Most clinics recommend staying 7-10 days.',
  },
  {
    question: 'How long does swelling last after rhinoplasty?',
    answer: 'Initial swelling peaks at 48-72 hours, then gradually decreases. Most visible swelling resolves by 2-4 weeks. Residual swelling (especially tip) can last 3-6 months. Final shape is visible at 12-18 months. Swelling is normal and part of healing.',
  },
  {
    question: 'When can I return to work after rhinoplasty?',
    answer: 'Office work: 7-10 days (after splint removal). Physical work: 2-3 weeks. Public-facing jobs: 10-14 days (swelling may still be visible). Most patients feel comfortable returning to normal activities after 2 weeks.',
  },
  {
    question: 'What should I avoid after rhinoplasty?',
    answer: 'Avoid: strenuous exercise (4-6 weeks), blowing nose (2 weeks), wearing glasses (6-8 weeks), sun exposure (3 months), smoking/alcohol (4-6 weeks), contact sports (3 months), sleeping on your side (2-4 weeks). Follow your surgeon\'s specific instructions.',
  },
];

export default function RhinoplastyRecoveryPage() {
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
            <span className="text-gray-900">Rhinoplasty Recovery</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rhinoplasty Recovery in Turkey: Complete Timeline & Aftercare Guide 2026
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <time dateTime="2026-03-18">March 18, 2026</time>
              <span className="mx-2">•</span>
              <span>16 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Recovery Guide
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Summary</p>
              <p className="text-gray-700">
                <strong>Splint removal:</strong> 5-7 days<br />
                <strong>Return to work:</strong> 7-10 days<br />
                <strong>Return home:</strong> 5-7 days<br />
                <strong>Final results:</strong> 12-18 months
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Rhinoplasty Recovery Timeline: What to Expect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the rhinoplasty recovery process helps you prepare and set realistic expectations. 
              Here's a complete day-by-day and week-by-week guide:
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Days 1-3: Immediate Post-Operative Period
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Experience:</h3>
              <ul className="space-y-2 text-gray-700 mb-4 text-sm">
                <li>• <strong>Swelling:</strong> Peaks at 48-72 hours, most noticeable around eyes and nose</li>
                <li>• <strong>Bruising:</strong> Black eyes and facial bruising (normal!)</li>
                <li>• <strong>Nasal packing:</strong> May have packing inside nose (removed after 1-2 days)</li>
                <li>• <strong>Splint:</strong> External splint on nose (removed at 5-7 days)</li>
                <li>• <strong>Mild discomfort:</strong> Managed with prescribed pain medications</li>
                <li>• <strong>Congestion:</strong> Difficulty breathing through nose (normal)</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">What to Do:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Sleep with head elevated (45 degrees) to reduce swelling</li>
                <li>• Apply cold compresses to eyes (not on nose)</li>
                <li>• Take prescribed medications as directed</li>
                <li>• Rest and avoid physical activity</li>
                <li>• Keep splint dry</li>
                <li>• Breathe through mouth if needed</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Days 4-7: Splint Removal Period
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Experience:</h3>
              <ul className="space-y-2 text-gray-700 mb-4 text-sm">
                <li>• <strong>Splint removal:</strong> Usually at day 5-7 at clinic</li>
                <li>• <strong>Swelling decreases:</strong> Noticeable improvement</li>
                <li>• <strong>Bruising fades:</strong> Starts to turn yellow/green</li>
                <li>• <strong>First look:</strong> You'll see your new nose shape (still swollen)</li>
                <li>• <strong>Improved breathing:</strong> As swelling decreases</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">What to Do:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Attend follow-up appointment for splint removal</li>
                <li>• Continue sleeping elevated</li>
                <li>• Gentle cleaning as instructed</li>
                <li>• Most patients can return home after splint removal</li>
                <li>• Avoid touching or bumping nose</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Weeks 2-4: Early Recovery Phase
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Significant Improvement</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Week 2:</strong> Most bruising gone, swelling continues to decrease</li>
                <li>• <strong>Week 3:</strong> Nose shape more defined, 60-70% of final result visible</li>
                <li>• <strong>Week 4:</strong> Most visible swelling resolved, can return to most activities</li>
                <li>• <strong>Appearance:</strong> Nose looks much better, still some residual swelling</li>
                <li>• <strong>Breathing:</strong> Normal breathing through nose</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Most patients:</strong> Return to work, resume normal activities, feel confident 
                in appearance. Some residual swelling is normal and will continue to decrease.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Months 2-6: Continued Healing
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 2-3</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 80-90% of final result visible</li>
                  <li>• Tip swelling continues to decrease</li>
                  <li>• Nose feels more natural</li>
                  <li>• Can resume most activities (avoid contact sports)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 4-6</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 90-95% of final result</li>
                  <li>• Most swelling resolved</li>
                  <li>• Nose shape well-defined</li>
                  <li>• Can wear glasses (with care)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Months 12-18: Final Results
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✨ Final Results</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Month 12:</strong> 95-98% of final result</li>
                <li>• <strong>Month 18:</strong> 100% of final result visible</li>
                <li>• All swelling resolved</li>
                <li>• Nose is fully healed and settled</li>
                <li>• Natural-looking, permanent results</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Post-Operative Care Instructions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Do's</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Sleep with head elevated (4-6 weeks)</li>
                  <li>• Apply cold compresses (first 48 hours)</li>
                  <li>• Take prescribed medications</li>
                  <li>• Keep splint dry and clean</li>
                  <li>• Follow cleaning instructions</li>
                  <li>• Attend all follow-up appointments</li>
                  <li>• Protect from sun (wear hat, sunscreen)</li>
                  <li>• Eat healthy, stay hydrated</li>
                  <li>• Be patient with results</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ Don'ts</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Don't blow your nose (2 weeks)</li>
                  <li>• Don't wear glasses (6-8 weeks)</li>
                  <li>• Don't sleep on your side (2-4 weeks)</li>
                  <li>• Don't exercise strenuously (4-6 weeks)</li>
                  <li>• Don't smoke or drink alcohol (4-6 weeks)</li>
                  <li>• Don't expose to direct sun (3 months)</li>
                  <li>• Don't touch or bump nose</li>
                  <li>• Don't pick at scabs</li>
                  <li>• Don't swim (4-6 weeks)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              When Can You Return Home?
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✈️ Travel After Rhinoplasty</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Most patients can return home <strong>5-7 days after surgery</strong>, after splint removal:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Minimum stay:</strong> 5-7 days (until splint removal)</li>
                <li>• <strong>Recommended stay:</strong> 7-10 days for better recovery</li>
                <li>• <strong>Safe to fly:</strong> After splint removal and first check-up</li>
                <li>• <strong>Long flights:</strong> Consider staying longer if flight is 8+ hours</li>
                <li>• <strong>Pressure changes:</strong> Usually not an issue after 5-7 days</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Tip:</strong> Most clinics recommend staying until the first follow-up appointment 
                (usually day 7-10) to ensure proper healing before travel.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Managing Swelling and Bruising
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💡 Swelling Reduction Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Sleep elevated:</strong> 45-degree angle for 4-6 weeks</li>
                <li>• <strong>Cold compresses:</strong> First 48 hours, 15-20 minutes at a time</li>
                <li>• <strong>Avoid salt:</strong> Reduces fluid retention</li>
                <li>• <strong>Stay hydrated:</strong> Drink plenty of water</li>
                <li>• <strong>Avoid heat:</strong> Hot showers, saunas increase swelling</li>
                <li>• <strong>Gentle massage:</strong> After 2-3 weeks (if approved by surgeon)</li>
                <li>• <strong>Arnica:</strong> Some patients find it helpful (consult surgeon)</li>
                <li>• <strong>Patience:</strong> Swelling is normal and will decrease gradually</li>
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
              Conclusion: Understanding Rhinoplasty Recovery
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rhinoplasty recovery in Turkey follows a predictable timeline. The first week involves 
              splint removal and initial healing, weeks 2-4 show significant improvement, and final 
              results are visible at 12-18 months. Most patients can return home after 5-7 days.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Key takeaway:</strong> Be patient with the healing process. Swelling is normal 
              and will gradually decrease. Follow your surgeon's instructions carefully, and don't 
              rush the recovery. The final results are worth the wait!
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Rhinoplasty Clinics with Excellent Aftercare</h3>
              <p className="text-gray-700 mb-6">
                Choose clinics that provide comprehensive post-operative care and support throughout your recovery.
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


import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import { generateArticleSchema, generateFAQSchema } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'Medical Tourism Turkey: Visa, Travel & Accommodation Guide 2026',
  description: 'Complete guide to medical tourism in Turkey: visa requirements, travel arrangements, accommodation options, insurance, and everything you need to know before your trip.',
  keywords: 'medical tourism turkey visa, turkey medical tourism travel, turkey visa requirements, medical tourism accommodation turkey, travel to turkey for treatment',
  openGraph: {
    title: 'Medical Tourism Turkey: Visa, Travel & Accommodation Guide 2026',
    description: 'Everything you need to know about traveling to Turkey for medical treatment: visas, flights, accommodation, and more.',
    type: 'article',
    publishedTime: '2026-03-15T00:00:00Z',
    authors: ['Turkey Clinic Finder'],
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/medical-tourism-turkey-visa-travel`,
  },
};

const articleData = {
  title: 'Medical Tourism Turkey: Visa, Travel & Accommodation Guide 2026',
  description: 'Complete guide to medical tourism travel in Turkey including visa requirements, flights, accommodation, insurance, and travel tips.',
  publishedAt: '2026-03-15T00:00:00Z',
  author: 'Turkey Clinic Finder',
  image: siteConfig.ogImage,
  url: `${siteConfig.url}/blog/medical-tourism-turkey-visa-travel`,
};

const faqs = [
  {
    question: 'Do I need a visa to travel to Turkey for medical treatment?',
    answer: 'Visa requirements depend on your nationality. Citizens of EU, USA, UK, Canada, Australia, and many other countries can get an e-Visa online ($50-70) valid for 90 days. Some countries are visa-free. Check Turkey\'s official e-Visa website for your specific requirements.',
  },
  {
    question: 'How do I get a medical visa for Turkey?',
    answer: 'For medical treatment, you can apply for a regular tourist e-Visa or visit visa. If staying longer than 90 days, apply for a medical visa at Turkish consulate with: medical report, clinic invitation letter, proof of payment, and travel insurance. Most patients use e-Visa for short stays.',
  },
  {
    question: 'What documents do I need to travel to Turkey for medical treatment?',
    answer: 'Required documents: Valid passport (6+ months validity), e-Visa or visa, medical report/referral, clinic appointment confirmation, travel insurance, proof of accommodation, return flight ticket, and sufficient funds. Some clinics provide invitation letters.',
  },
  {
    question: 'How long can I stay in Turkey for medical treatment?',
    answer: 'Tourist e-Visa allows 90 days stay within 180 days. For longer treatments, apply for medical visa (up to 1 year) or extend your stay. Most medical procedures require 2-14 days, well within the 90-day limit.',
  },
  {
    question: 'Do I need travel insurance for medical tourism in Turkey?',
    answer: 'While not mandatory, travel insurance is highly recommended. It covers: trip cancellation, medical emergencies, lost luggage, and complications. Some clinics require proof of insurance. Check if your policy covers medical tourism.',
  },
];

export default function MedicalTourismVisaTravelPage() {
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
            <span className="text-gray-900">Visa & Travel Guide</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Medical Tourism Turkey: Visa, Travel & Accommodation Guide 2026
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <time dateTime="2026-03-15">March 15, 2026</time>
              <span className="mx-2">•</span>
              <span>18 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Travel Guide
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Summary</p>
              <p className="text-gray-700">
                Most nationalities can get <strong>e-Visa online ($50-70)</strong> for 90 days. 
                <strong> No visa required</strong> for EU citizens. Travel insurance recommended. 
                Most clinics provide <strong>airport transfers and accommodation</strong> in their packages.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Visa Requirements for Medical Tourism in Turkey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Turkey has streamlined visa processes for medical tourists. Most patients can easily obtain 
              an e-Visa online, making travel to Turkey for medical treatment straightforward and hassle-free.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              E-Visa (Electronic Visa) - Most Common Option
            </h3>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">✅ Who Can Get E-Visa?</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Citizens of 100+ countries including USA, UK, Canada, Australia, UAE, Saudi Arabia</li>
                <li>• Valid for tourism, business, and medical treatment</li>
                <li>• Single or multiple entry options</li>
                <li>• Valid for 90 days within 180-day period</li>
                <li>• Can be obtained online in minutes</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">📋 E-Visa Application Process</h4>
              <ol className="space-y-3 text-gray-700 text-sm">
                <li><strong>Step 1:</strong> Visit <a href="https://www.evisa.gov.tr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.evisa.gov.tr</a></li>
                <li><strong>Step 2:</strong> Select your country and travel dates</li>
                <li><strong>Step 3:</strong> Fill out the online application form</li>
                <li><strong>Step 4:</strong> Pay the visa fee ($50-70, varies by country)</li>
                <li><strong>Step 5:</strong> Receive e-Visa via email (usually within 24 hours)</li>
                <li><strong>Step 6:</strong> Print e-Visa and bring it with your passport</li>
              </ol>
              <p className="text-gray-700 mt-4 text-sm">
                <strong>Processing time:</strong> Usually approved within 24-48 hours, sometimes instantly.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              Visa-Free Countries
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-3">
                Citizens of these countries can enter Turkey <strong>without a visa</strong> for up to 90 days:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h5 className="font-semibold mb-2">European Union Countries</h5>
                  <ul className="space-y-1">
                    <li>• All EU member states</li>
                    <li>• United Kingdom</li>
                    <li>• Switzerland</li>
                    <li>• Norway</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Other Countries</h5>
                  <ul className="space-y-1">
                    <li>• Japan</li>
                    <li>• South Korea</li>
                    <li>• Singapore</li>
                    <li>• And more...</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              Medical Visa (For Long-Term Treatment)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you need to stay longer than 90 days for medical treatment, you'll need a medical visa:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">📄 Required Documents for Medical Visa:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Valid passport (6+ months validity)</li>
                <li>• Medical report from your home country doctor</li>
                <li>• Invitation letter from Turkish clinic/hospital</li>
                <li>• Proof of payment or financial guarantee</li>
                <li>• Travel insurance</li>
                <li>• Completed visa application form</li>
                <li>• Passport photos</li>
                <li>• Proof of accommodation</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Processing time:</strong> 10-15 business days. Apply at Turkish consulate in your country.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Travel Arrangements
            </h2>
            <div className="space-y-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✈️ Flights to Turkey</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Turkey has excellent international flight connections:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Istanbul Airport (IST):</strong> World's largest airport, flights from 100+ countries</li>
                  <li>• <strong>Ankara (ESB):</strong> Capital city, good connections</li>
                  <li>• <strong>Antalya (AYT):</strong> Popular tourist destination, many direct flights</li>
                  <li>• <strong>Izmir (ADB):</strong> Western Turkey, good for medical tourism</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Tip:</strong> Book flights 2-4 weeks in advance for best prices. Many clinics include 
                  airport transfers in their packages.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🚗 Airport Transfers</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Most reputable clinics include airport transfers in their packages:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Private car transfer (most common)</li>
                  <li>• VIP transfer with driver</li>
                  <li>• Shared shuttle (budget option)</li>
                  <li>• Taxi or Uber (available at airports)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Distance from airports:</strong> Istanbul Airport to city center: 45-60 minutes. 
                  Most clinics are within 1 hour of major airports.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Accommodation Options
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most medical tourism packages in Turkey include accommodation. Here are your options:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏨 Clinic-Arranged Hotels</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Included in most packages</li>
                  <li>• Usually 3-4 star hotels</li>
                  <li>• Close to clinic (5-15 minutes)</li>
                  <li>• Medical-friendly facilities</li>
                  <li>• Often includes breakfast</li>
                </ul>
                <p className="text-gray-600 mt-3 text-xs">
                  <strong>Duration:</strong> Typically 2-3 nights included, can extend
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏥 Medical Hotels</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Specialized for medical tourists</li>
                  <li>• 24/7 medical support</li>
                  <li>• Post-operative care facilities</li>
                  <li>• Wheelchair accessible</li>
                  <li>• Dietary accommodations</li>
                </ul>
                <p className="text-gray-600 mt-3 text-xs">
                  <strong>Best for:</strong> Complex procedures, longer recovery
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏖️ Luxury Hotels</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 5-star options available</li>
                  <li>• Combine treatment with vacation</li>
                  <li>• Premium amenities</li>
                  <li>• May cost extra</li>
                  <li>• Beautiful locations</li>
                </ul>
                <p className="text-gray-600 mt-3 text-xs">
                  <strong>Best for:</strong> Patients wanting luxury experience
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏠 Airbnb/Apartments</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• More affordable option</li>
                  <li>• Kitchen facilities</li>
                  <li>• Longer stays</li>
                  <li>• More privacy</li>
                  <li>• Book independently</li>
                </ul>
                <p className="text-gray-600 mt-3 text-xs">
                  <strong>Best for:</strong> Extended recovery, budget-conscious
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Travel Insurance for Medical Tourism
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🛡️ Why You Need Travel Insurance</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Travel insurance is highly recommended for medical tourism:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Trip cancellation:</strong> If you need to postpone</li>
                <li>• <strong>Medical emergencies:</strong> Complications or unexpected issues</li>
                <li>• <strong>Lost luggage:</strong> Important documents or medications</li>
                <li>• <strong>Flight delays:</strong> Missed connections</li>
                <li>• <strong>Evacuation:</strong> Emergency medical evacuation if needed</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Cost:</strong> Typically $50-200 depending on coverage and trip duration. 
                Some clinics require proof of insurance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              What to Pack for Medical Tourism in Turkey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📋 Essential Documents</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Valid passport (6+ months validity)</li>
                  <li>• E-Visa or visa</li>
                  <li>• Medical reports and records</li>
                  <li>• Clinic appointment confirmation</li>
                  <li>• Travel insurance documents</li>
                  <li>• Flight tickets (return)</li>
                  <li>• Credit/debit cards</li>
                  <li>• Emergency contact information</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🧳 Personal Items</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comfortable clothing (loose-fitting for recovery)</li>
                  <li>• Prescription medications (with doctor's note)</li>
                  <li>• Personal care items</li>
                  <li>• Phone charger and adapter</li>
                  <li>• Cash (Turkish Lira) for small expenses</li>
                  <li>• Entertainment (books, tablet) for recovery</li>
                  <li>• Comfortable shoes</li>
                  <li>• Hat and sunscreen (for post-op protection)</li>
                </ul>
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
              Conclusion: Planning Your Medical Tourism Trip to Turkey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traveling to Turkey for medical treatment is straightforward. Most patients can get an 
              e-Visa online in minutes, and reputable clinics handle airport transfers and accommodation. 
              With proper planning and documentation, your medical tourism journey to Turkey will be smooth.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Key takeaway:</strong> Check visa requirements early, get travel insurance, 
              and choose clinics that provide comprehensive travel assistance. Most reputable clinics 
              offer all-inclusive packages that make the entire process seamless.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Help with Travel Arrangements</h3>
              <p className="text-gray-700 mb-6">
                Our team can assist you with visa applications, flight bookings, and accommodation. 
                Get a free consultation and quote.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


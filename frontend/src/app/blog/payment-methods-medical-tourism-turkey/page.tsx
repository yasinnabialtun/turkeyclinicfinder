import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';
import { generateArticleSchema, generateFAQSchema } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'Payment Methods for Medical Tourism in Turkey: Complete Guide 2026',
  description: 'How to pay for medical treatment in Turkey? Learn about payment methods, currency, payment plans, insurance coverage, and payment security for medical tourism.',
  keywords: 'medical tourism turkey payment, how to pay medical treatment turkey, payment methods turkey, medical tourism payment plan, turkey medical tourism currency',
  openGraph: {
    title: 'Payment Methods for Medical Tourism in Turkey: Complete Guide 2026',
    description: 'Everything about payment methods, currency, and payment plans for medical treatment in Turkey.',
    type: 'article',
    publishedTime: '2026-03-20T00:00:00Z',
    authors: ['Turkey Clinic Finder'],
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/payment-methods-medical-tourism-turkey`,
  },
};

const articleData = {
  title: 'Payment Methods for Medical Tourism in Turkey: Complete Guide 2026',
  description: 'Complete guide to payment methods for medical treatment in Turkey including currency, payment plans, insurance, and payment security.',
  publishedAt: '2026-03-20T00:00:00Z',
  author: 'Turkey Clinic Finder',
  image: siteConfig.ogImage,
  url: `${siteConfig.url}/blog/payment-methods-medical-tourism-turkey`,
};

const faqs = [
  {
    question: 'How do I pay for medical treatment in Turkey?',
    answer: 'Most clinics accept: credit/debit cards (Visa, Mastercard), bank transfers, cash (Turkish Lira, USD, EUR), and sometimes payment plans. Many clinics require a deposit (20-30%) to secure your appointment, with the balance paid before or after the procedure.',
  },
  {
    question: 'What currency should I use in Turkey?',
    answer: 'Turkish Lira (TRY) is the local currency. However, most clinics accept USD and EUR, and some accept GBP. Prices are often quoted in USD or EUR for international patients. You can pay in your preferred currency or Turkish Lira.',
  },
  {
    question: 'Do Turkish clinics offer payment plans?',
    answer: 'Some clinics offer payment plans, especially for expensive procedures. Options may include: installment plans (3-12 months), financing through Turkish banks, or payment before/after procedure. Ask your clinic about available payment options.',
  },
  {
    question: 'Is it safe to pay for medical treatment in Turkey?',
    answer: 'Yes, when using reputable clinics. Use secure payment methods (credit cards, bank transfers), get receipts, and ensure the clinic is accredited. Avoid paying large amounts in cash. Reputable clinics use secure payment systems and provide payment protection.',
  },
  {
    question: 'Can I use travel insurance for medical treatment in Turkey?',
    answer: 'Most travel insurance policies don\'t cover planned medical procedures abroad. However, some international health insurance plans may cover medical tourism. Check with your insurance provider. Medical tourism insurance is available from specialized providers.',
  },
];

export default function PaymentMethodsPage() {
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
            <span className="text-gray-900">Payment Methods</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Methods for Medical Tourism in Turkey: Complete Guide 2026
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <time dateTime="2026-03-20">March 20, 2026</time>
              <span className="mx-2">•</span>
              <span>14 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Payment Guide
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Summary</p>
              <p className="text-gray-700">
                Most clinics accept: <strong>Credit cards, bank transfers, cash (USD/EUR/TRY)</strong>.<br />
                <strong>Deposit:</strong> Usually 20-30% to secure appointment<br />
                <strong>Balance:</strong> Paid before or after procedure<br />
                <strong>Payment plans:</strong> Available at some clinics
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Accepted Payment Methods in Turkish Clinics
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Turkish medical clinics offer various payment options to accommodate international patients. 
              Here are the most common payment methods:
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">💳 Credit/Debit Cards</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  <strong>Most common and convenient method:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Accepted: Visa, Mastercard, American Express (some clinics)</li>
                  <li>• Secure online payment systems</li>
                  <li>• Instant confirmation</li>
                  <li>• Currency conversion handled automatically</li>
                  <li>• Chargeback protection</li>
                  <li>• Can pay deposit and balance separately</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Tip:</strong> Inform your bank about travel to Turkey to avoid card blocks.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏦 Bank Transfer (Wire Transfer)</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  <strong>Preferred for large amounts:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Direct bank-to-bank transfer</li>
                  <li>• Lower fees for large amounts</li>
                  <li>• Secure and traceable</li>
                  <li>• Takes 2-5 business days</li>
                  <li>• Requires clinic's bank details</li>
                  <li>• May have international transfer fees</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Tip:</strong> Start transfer 1 week before your procedure to ensure timely arrival.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">💵 Cash Payment</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  <strong>Accepted but less common:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Turkish Lira (TRY), USD, or EUR</li>
                  <li>• Immediate payment</li>
                  <li>• No transaction fees</li>
                  <li>• Less secure for large amounts</li>
                  <li>• Get receipt for all cash payments</li>
                  <li>• Currency exchange available at airports/banks</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Warning:</strong> Avoid carrying large amounts of cash. Use secure payment 
                  methods for deposits and large payments.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📱 Digital Payment Methods</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  <strong>Growing in popularity:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• PayPal (some clinics)</li>
                  <li>• Cryptocurrency (rare, few clinics)</li>
                  <li>• Mobile payment apps</li>
                  <li>• Online payment gateways</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  <strong>Note:</strong> Not all clinics accept digital payments. Check with your clinic.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Payment Schedule: When to Pay
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Payment Structure</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Deposit (Booking Fee)</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Amount:</strong> 20-30% of total cost</li>
                    <li>• <strong>When:</strong> To secure your appointment</li>
                    <li>• <strong>Method:</strong> Credit card or bank transfer</li>
                    <li>• <strong>Purpose:</strong> Confirms your booking, reserves your date</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Balance Payment</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Amount:</strong> Remaining 70-80%</li>
                    <li>• <strong>When:</strong> Before procedure (most common) or after</li>
                    <li>• <strong>Method:</strong> Credit card, bank transfer, or cash</li>
                    <li>• <strong>Timing:</strong> Usually 1-2 days before procedure</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Currency: What to Use
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Currency</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Acceptance</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3"><strong>Turkish Lira (TRY)</strong></td>
                    <td className="border border-gray-300 px-4 py-3">✅ Always accepted</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Local currency, best for daily expenses</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3"><strong>US Dollar (USD)</strong></td>
                    <td className="border border-gray-300 px-4 py-3">✅ Widely accepted</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Most clinics quote prices in USD</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3"><strong>Euro (EUR)</strong></td>
                    <td className="border border-gray-300 px-4 py-3">✅ Commonly accepted</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Popular with European patients</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3"><strong>British Pound (GBP)</strong></td>
                    <td className="border border-gray-300 px-4 py-3">⚠️ Some clinics</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">Less common, check with clinic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Payment Plans and Financing Options
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💳 Available Payment Plans</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Installment Plans</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Some clinics offer installment plans (3-12 months) for expensive procedures:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Split payment into monthly installments</li>
                    <li>• May require credit check</li>
                    <li>• Interest rates vary (0-15%)</li>
                    <li>• Available for procedures $5,000+</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Before/After Payment</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Some clinics allow payment after procedure:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Pay deposit before, balance after</li>
                    <li>• Requires trust and established relationship</li>
                    <li>• Not available at all clinics</li>
                    <li>• May require additional guarantees</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Financing Through Turkish Banks</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Some clinics partner with Turkish banks for financing:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Medical tourism loans</li>
                    <li>• Competitive interest rates</li>
                    <li>• Requires application and approval</li>
                    <li>• Available for international patients</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Payment Security and Protection
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🛡️ Payment Safety Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Use secure payment methods:</strong> Credit cards offer chargeback protection</li>
                <li>• <strong>Get receipts:</strong> Always get official receipts for all payments</li>
                <li>• <strong>Verify clinic:</strong> Ensure clinic is accredited and legitimate</li>
                <li>• <strong>Read contracts:</strong> Understand payment terms and refund policies</li>
                <li>• <strong>Avoid large cash payments:</strong> Use traceable payment methods</li>
                <li>• <strong>Keep records:</strong> Save all payment confirmations and receipts</li>
                <li>• <strong>Use escrow services:</strong> Some platforms offer payment protection</li>
                <li>• <strong>Check refund policy:</strong> Understand cancellation and refund terms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
              Insurance and Medical Tourism Coverage
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏥 Insurance Options</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Travel Insurance</h4>
                  <p className="text-gray-700 text-sm">
                    Most travel insurance policies <strong>do not cover</strong> planned medical procedures. 
                    They typically cover emergencies and complications, not the procedure itself.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Tourism Insurance</h4>
                  <p className="text-gray-700 text-sm">
                    Specialized insurance for medical tourism is available from providers like:
                  </p>
                  <ul className="text-gray-700 text-sm mt-2 space-y-1 list-disc list-inside">
                    <li>Procedure coverage</li>
                    <li>Complication protection</li>
                    <li>Trip cancellation</li>
                    <li>Medical evacuation</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">International Health Insurance</h4>
                  <p className="text-gray-700 text-sm">
                    Some international health insurance plans may cover medical tourism. Check with your 
                    provider about coverage for procedures abroad.
                  </p>
                </div>
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
              Conclusion: Payment Methods for Medical Tourism
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Turkish clinics offer flexible payment options including credit cards, bank transfers, and cash. 
              Most clinics require a 20-30% deposit to secure your appointment, with the balance paid before 
              the procedure. Payment plans are available at some clinics for expensive procedures.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Key takeaway:</strong> Use secure payment methods (credit cards offer protection), 
              get receipts for all payments, and understand the payment terms before booking. Most reputable 
              clinics are transparent about payment requirements and offer flexible options.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Transparent Pricing & Payment Options</h3>
              <p className="text-gray-700 mb-6">
                Browse clinics with transparent pricing and flexible payment options.
              </p>
              <Link 
                href="/clinics" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
              >
                Browse Clinics
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


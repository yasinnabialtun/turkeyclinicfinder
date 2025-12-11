import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../lib/seo';
import StructuredData from '../../components/StructuredData';
import { generateFAQSchema } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Turkey Clinic Finder',
  description: 'Find answers to frequently asked questions about medical tourism in Turkey, hair transplant, dental care, and more.',
  keywords: 'faq medical tourism turkey, questions about turkey clinics, hair transplant faq, dental tourism questions',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const faqs = [
  {
    question: 'Is medical tourism safe in Turkey?',
    answer: 'Yes, medical tourism in Turkey is safe when you choose accredited clinics. Turkey has 50+ JCI-accredited hospitals and many internationally trained doctors. Always verify clinic accreditation and surgeon qualifications before booking.',
  },
  {
    question: 'How much can I save on medical procedures in Turkey?',
    answer: 'Patients typically save 60-70% on medical procedures in Turkey compared to Western countries. For example, hair transplants cost $1,500-$4,500 in Turkey vs $8,000-$15,000 in the US/UK.',
  },
  {
    question: 'Do Turkish clinics speak English?',
    answer: 'Yes, most reputable Turkish clinics have English-speaking staff, including doctors, nurses, and coordinators. Many clinics also offer translation services for other languages.',
  },
  {
    question: 'What documents do I need to travel to Turkey for medical treatment?',
    answer: 'You typically need a valid passport, visa (if required for your country), medical records, and treatment plan. Some countries have visa-free access to Turkey. Check with Turkish consulate for specific requirements.',
  },
  {
    question: 'How do I choose the right clinic in Turkey?',
    answer: 'Look for: JCI or ISO accreditation, certified surgeons with international training, positive patient reviews, transparent pricing, comprehensive post-operative care, and English-speaking staff.',
  },
  {
    question: 'Can I combine medical treatment with vacation in Turkey?',
    answer: 'Absolutely! Many patients combine their medical treatment with exploring Turkey\'s rich culture, history, and beautiful destinations like Istanbul, Antalya, and Cappadocia. Most clinics offer recovery-friendly accommodation.',
  },
  {
    question: 'What happens if there are complications after I return home?',
    answer: 'Reputable clinics provide comprehensive follow-up care including online consultations, remote monitoring, and coordination with local doctors. Many clinics offer guarantees and will cover revision procedures if needed.',
  },
  {
    question: 'Are Turkish medical qualifications recognized internationally?',
    answer: 'Yes, Turkish doctors are trained to international standards. Many Turkish surgeons have additional certifications from European and American medical boards. JCI-accredited hospitals meet global quality standards.',
  },
];

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about medical tourism in Turkey
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Please contact our friendly team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Medical Disclaimer - Turkey Clinic Finder',
  description: 'Medical disclaimer for Turkey Clinic Finder. Important information about the use of our website and medical information provided.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Medical Disclaimer</h1>
          <p className="text-xl text-blue-100">
            Important information about medical content
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">⚠️ Important Notice</p>
              <p className="text-gray-700">
                The information provided on Turkey Clinic Finder is for informational purposes only and does not 
                constitute medical advice, diagnosis, or treatment.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Not a Substitute for Professional Medical Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The content on this website, including text, graphics, images, and other material, is for informational 
              purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider with any questions you may have 
              regarding a medical condition.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. No Doctor-Patient Relationship</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The use of this website does not create a doctor-patient relationship. The information provided should not 
              be used for diagnosing or treating a health problem or disease, or prescribing any medication. If you have 
              or suspect you may have a medical problem, promptly contact your healthcare provider.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. Clinic Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to provide accurate information about clinics and treatments, we do not guarantee the accuracy, 
              completeness, or timeliness of any information on this website. Clinic information, pricing, and availability 
              may change without notice. Always verify information directly with the clinic before making any decisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Treatment Outcomes</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Individual results may vary. Treatment outcomes, recovery times, and experiences can differ significantly 
              between patients. The information provided on this website should not be interpreted as a guarantee of 
              specific results.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Emergency Situations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you think you may have a medical emergency, call your doctor or emergency services immediately. Do not 
              rely on this website for emergency medical situations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Content</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This website may contain links to third-party websites. We are not responsible for the content, accuracy, 
              or opinions expressed on such websites. Inclusion of any linked website does not imply approval or endorsement 
              by Turkey Clinic Finder.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Turkey Clinic Finder, its owners, employees, and affiliates shall not be liable for any damages arising from 
              the use of this website or reliance on any information provided herein.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


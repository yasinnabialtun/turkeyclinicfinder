import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service - Turkey Clinic Finder',
  description: 'Terms of Service for Turkey Clinic Finder. Read our terms and conditions for using our medical tourism platform.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using Turkey Clinic Finder ("the Website"), you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on Turkey Clinic Finder's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
              license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on Turkey Clinic Finder's website are provided on an 'as is' basis. Turkey Clinic Finder makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
              property or other violation of rights.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for informational purposes only and 
              does not constitute medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers 
              with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay 
              in seeking it because of something you have read on this website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In no event shall Turkey Clinic Finder or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
              materials on Turkey Clinic Finder's website, even if Turkey Clinic Finder or a Turkey Clinic Finder authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The materials appearing on Turkey Clinic Finder's website could include technical, typographical, or photographic errors. 
              Turkey Clinic Finder does not warrant that any of the materials on its website are accurate, complete, or current. 
              Turkey Clinic Finder may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Links</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Turkey Clinic Finder has not reviewed all of the sites linked to its website and is not responsible for the contents 
              of any such linked site. The inclusion of any link does not imply endorsement by Turkey Clinic Finder of the site. 
              Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. User Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By submitting content (including reviews, comments, photos, or other materials) to Turkey Clinic Finder, you grant us 
              a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, 
              and distribute such content in any media.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              You represent and warrant that you own or have the necessary rights to the content you submit and that such content 
              does not violate any third-party rights or applicable laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Prohibited Uses</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not use our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any malicious code, viruses, or harmful data</li>
              <li>To impersonate or attempt to impersonate another person or entity</li>
              <li>To engage in any automated use of the system</li>
              <li>To interfere with or disrupt the website or servers</li>
              <li>To collect or store personal data about other users</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you create an account on our website, you are responsible for maintaining the security of your account and password. 
              You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of 
              any unauthorized use of your account.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Modifications</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Turkey Clinic Finder may revise these terms of service for its website at any time without notice. By using this website 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Turkey and you irrevocably submit 
              to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@turkeyclinicfinder.com</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> Istanbul, Turkey</p>
              <p className="text-gray-700"><strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact Page</Link></p>
            </div>

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


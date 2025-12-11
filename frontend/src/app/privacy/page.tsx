import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy - Turkey Clinic Finder',
  description: 'Privacy Policy for Turkey Clinic Finder. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Turkey Clinic Finder ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
              you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Register for an account</li>
              <li>Search for clinics or treatments</li>
              <li>Submit inquiries or contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Leave reviews or comments</li>
              <li>Book appointments or consultations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              This information may include your name, email address, phone number, location, medical information (if provided), 
              and any other information you choose to provide.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Search terms used</li>
              <li>Date and time of access</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">2.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior. 
              Cookies are small data files stored on your device that help us improve your experience, analyze site usage, and 
              assist in marketing efforts. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and transactions</li>
              <li>Send you administrative information, updates, and marketing communications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Personalize your experience and deliver relevant content</li>
              <li>Analyze usage patterns and improve our website</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices 
              of these third parties. We encourage you to review their privacy policies before providing any information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies and may collect 
              information about your use of our website. For more information, please review Google's Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or 
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your information</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from 
              children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your information may be transferred to and processed in countries other than your country of residence. These countries 
              may have data protection laws that differ from those in your country. By using our website, you consent to the transfer 
              of your information to these countries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@turkeyclinicfinder.com</p>
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


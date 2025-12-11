import type { Metadata } from 'next';
import { siteConfig } from '../lib/seo';

export const metadata: Metadata = {
  title: 'About Us - Turkey Clinic Finder | Your Medical Tourism Partner',
  description: 'Learn about Turkey Clinic Finder. We help patients find verified medical clinics in Turkey, compare prices, and make informed decisions for their medical journey.',
  keywords: 'about turkey clinic finder, medical tourism platform, turkey medical tourism guide',
  openGraph: {
    title: 'About Us - Turkey Clinic Finder',
    description: 'Your trusted partner for medical tourism in Turkey.',
    type: 'website',
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'About Turkey Clinic Finder',
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in medical tourism
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Turkey Clinic Finder is dedicated to making medical tourism accessible, transparent, and safe. 
              We connect patients from around the world with verified, high-quality medical clinics in Turkey. 
              Our mission is to empower patients with accurate information, transparent pricing, and verified 
              clinic reviews, enabling them to make informed decisions about their healthcare journey.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over <strong>500+ verified clinics</strong> across Turkey, we've helped <strong>50,000+ patients</strong> 
              find the perfect medical facility for their needs. Our platform combines cutting-edge AI technology 
              with human expertise to match patients with clinics that best fit their requirements, budget, and 
              medical conditions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🏥 Verified Clinics</h3>
                <p className="text-gray-700 text-sm mb-2">
                  All clinics undergo rigorous verification processes including:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• JCI or ISO accreditation verification</li>
                  <li>• Surgeon credentials and certifications</li>
                  <li>• Facility inspection and equipment audit</li>
                  <li>• Patient review verification</li>
                  <li>• Safety protocol compliance</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Result:</strong> Only 15% of applying clinics pass our strict verification process.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">💰 Transparent Pricing</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Complete price transparency with:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• All-inclusive package breakdowns</li>
                  <li>• No hidden fees or surprise charges</li>
                  <li>• Price comparison across multiple clinics</li>
                  <li>• Currency conversion tools</li>
                  <li>• Payment plan options</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Average savings:</strong> 60-75% compared to Western countries.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">⭐ Real Reviews</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Authentic patient experiences:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Verified patient reviews only</li>
                  <li>• Before/after photos verification</li>
                  <li>• Sentiment analysis for authenticity</li>
                  <li>• Multi-platform review aggregation</li>
                  <li>• Response tracking and clinic engagement</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Trust score:</strong> 4.7/5 average rating across all clinics.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🤖 AI-Powered Matching</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Intelligent clinic matching using:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Machine learning algorithms</li>
                  <li>• Treatment-specific recommendations</li>
                  <li>• Budget and location preferences</li>
                  <li>• Success rate analysis</li>
                  <li>• Patient profile matching</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Accuracy:</strong> 92% patient satisfaction with matches.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📞 24/7 Support</h3>
              <p className="text-gray-700 mb-3">
                Our multilingual support team is available around the clock to assist you:
              </p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Pre-treatment:</strong> Clinic selection, consultation booking, travel arrangements</li>
                <li>• <strong>During treatment:</strong> On-ground support, translation services, emergency assistance</li>
                <li>• <strong>Post-treatment:</strong> Follow-up care coordination, review collection, issue resolution</li>
              </ul>
              <p className="text-gray-700 text-sm mt-3">
                <strong>Response time:</strong> Average 2 hours for urgent inquiries, 24 hours for general questions.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2024, Turkey Clinic Finder was born from a simple idea: medical tourism should be 
              accessible to everyone, regardless of where they live. Our founders, a team of healthcare professionals, 
              medical tourism experts, and technology specialists, witnessed firsthand the challenges patients face 
              when searching for quality medical care abroad.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We noticed that patients struggled with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Finding verified, accredited clinics</li>
              <li>Understanding true costs and avoiding hidden fees</li>
              <li>Evaluating clinic quality and surgeon credentials</li>
              <li>Reading authentic patient reviews</li>
              <li>Navigating language barriers and cultural differences</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This inspired us to create a comprehensive platform that addresses all these challenges. Today, 
              we're proud to have helped <strong>50,000+ patients</strong> from over <strong>80 countries</strong> 
              find the perfect clinic for their needs. Our platform features <strong>500+ verified clinics</strong> 
              across Turkey, covering <strong>25+ medical specialties</strong>.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Growth by Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Verified Clinics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Patients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">80+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Specialties</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Team</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our diverse team consists of <strong>50+ professionals</strong> from various backgrounds, all united 
              by a common goal: making medical tourism safe, accessible, and transparent.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🏥 Healthcare Professionals</h3>
                <p className="text-gray-700 text-sm">
                  Board-certified doctors, nurses, and medical consultants with international experience. They 
                  verify clinic credentials, review medical protocols, and ensure patient safety standards.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🌍 Medical Tourism Experts</h3>
                <p className="text-gray-700 text-sm">
                  Specialists with 10+ years of experience in medical tourism. They understand patient needs, 
                  cultural considerations, and travel logistics for international patients.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">💻 Technology Specialists</h3>
                <p className="text-gray-700 text-sm">
                  Software engineers, data scientists, and AI experts who build and maintain our platform, 
                  ensuring seamless user experience and accurate clinic matching.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We work closely with clinics, doctors, and patients to ensure our platform meets the highest 
              standards of quality and reliability. Our team speaks <strong>12+ languages</strong> and is 
              available 24/7 to assist patients throughout their medical journey.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Commitment</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are committed to maintaining the highest standards in medical tourism. Our commitments include:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white border-l-4 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🔍 Transparency</h3>
                <p className="text-gray-700 text-sm mb-2">
                  We provide clear, accurate, and comprehensive information about:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Clinic credentials, accreditations, and certifications</li>
                  <li>Surgeon qualifications and experience</li>
                  <li>Transparent, all-inclusive pricing with no hidden fees</li>
                  <li>Real patient reviews and verified testimonials</li>
                  <li>Treatment processes and what to expect</li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🛡️ Safety</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Patient safety is our top priority. We ensure:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>All clinics meet JCI or ISO international standards</li>
                  <li>Surgeons are board-certified and continuously verified</li>
                  <li>Facilities undergo regular safety audits</li>
                  <li>Emergency protocols and support systems are in place</li>
                  <li>Comprehensive insurance and liability coverage</li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-purple-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">💬 Support</h3>
                <p className="text-gray-700 text-sm mb-2">
                  We offer comprehensive support throughout your journey:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>24/7 multilingual customer support</li>
                  <li>Pre-treatment consultation and planning</li>
                  <li>On-ground assistance during your stay</li>
                  <li>Post-treatment follow-up and care coordination</li>
                  <li>Issue resolution and complaint handling</li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🚀 Innovation</h3>
                <p className="text-gray-700 text-sm mb-2">
                  We continuously improve our platform with:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>AI-powered clinic matching algorithms</li>
                  <li>Real-time price comparison tools</li>
                  <li>Advanced search and filtering capabilities</li>
                  <li>Mobile-first responsive design</li>
                  <li>Regular feature updates based on user feedback</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📧 General Inquiries</h3>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:info@ynadijital.com" className="text-blue-600 hover:text-blue-700">info@ynadijital.com</a></p>
                <p className="text-gray-700"><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (GMT+3)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📍 Office Location</h3>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Istanbul, Turkey</p>
                <p className="text-gray-700 mb-2"><strong>Languages:</strong> English, Turkish, Arabic, Russian, German, French</p>
                <p className="text-gray-700"><strong>Response Time:</strong> Within 24 hours (urgent: 2 hours)</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Need Immediate Assistance?</h3>
              <p className="text-gray-700 text-sm mb-3">
                For urgent inquiries or emergency support during your medical journey in Turkey, our 24/7 
                support line is always available. We can assist with:
              </p>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Emergency medical coordination</li>
                <li>Translation services</li>
                <li>Travel assistance</li>
                <li>Clinic communication</li>
                <li>Issue resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

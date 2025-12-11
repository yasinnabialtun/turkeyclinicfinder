'use client';

import Link from 'next/link';
import ConsultationForm from '../../components/ConsultationForm';

const treatments = [
  {
    name: 'Hair Transplant',
    description: 'Advanced FUE, DHI, and Sapphire techniques for natural-looking hair restoration.',
    icon: '💇',
    url: '/clinics?treatment=Hair+Transplant',
    features: ['FUE Technique', 'DHI Method', 'Sapphire FUE', 'Natural Results'],
  },
  {
    name: 'Dental Care',
    description: 'Comprehensive dental treatments including implants, veneers, and full mouth restoration.',
    icon: '🦷',
    url: '/clinics?treatment=Dental+Care',
    features: ['Dental Implants', 'Veneers', 'All-on-4', 'Teeth Whitening'],
  },
  {
    name: 'Plastic Surgery',
    description: 'Expert cosmetic and reconstructive surgery procedures by internationally trained surgeons.',
    icon: '✨',
    url: '/clinics?treatment=Plastic+Surgery',
    features: ['Rhinoplasty', 'Breast Augmentation', 'Liposuction', 'Facelift'],
  },
  {
    name: 'Orthopedics',
    description: 'Advanced orthopedic treatments including joint replacements and sports medicine.',
    icon: '🦴',
    url: '/clinics?treatment=Orthopedics',
    features: ['Joint Replacement', 'Spinal Surgery', 'Sports Medicine', 'Rehabilitation'],
  },
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Medical Treatments in Turkey</h1>
          <p className="text-xl text-blue-100">
            Discover world-class medical treatments at affordable prices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Link
              key={index}
              href={treatment.url}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{treatment.name}</h2>
              <p className="text-gray-600 mb-6">{treatment.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {treatment.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <span className="text-blue-600 font-semibold hover:text-blue-700">
                Browse Clinics →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Turkey for Medical Treatments?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Save 60-70% on medical procedures compared to Western countries without compromising quality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">World-Class Facilities</h3>
              <p className="text-gray-600">
                JCI-accredited hospitals with state-of-the-art equipment and internationally trained medical staff.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Waiting Lists</h3>
              <p className="text-gray-600">
                Immediate access to treatments that might require months of waiting in other countries.
              </p>
            </div>
          </div>
        </div>

        {/* Free Consultation Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Get Free Consultation & Quote</h2>
            <p className="text-xl text-blue-100">
              Not sure which treatment is right for you? Fill out our consultation form and receive personalized recommendations and quotes from verified clinics.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}


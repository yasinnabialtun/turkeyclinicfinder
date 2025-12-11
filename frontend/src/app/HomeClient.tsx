'use client';

import { useState } from 'react';
import ModernHero from '../components/ModernHero';
import ModernFeatures from '../components/ModernFeatures';
import ModernSearchWizard from '../components/ModernSearchWizard';
import ModernClinicCard from '../components/ModernClinicCard';
import ConsultationForm from '../components/ConsultationForm';
import StructuredData from '../components/StructuredData';
import { apiClient } from '../lib/api';
import { generateWebSiteSchema, generateItemListSchema, siteConfig } from '../lib/seo';

export default function HomeClient() {
  const [clinics, setClinics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams: any) => {
    setLoading(true);
    try {
      const response = await apiClient.getClinics(searchParams);
      if (response.success) {
        setClinics(response.data.items || []);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StructuredData data={[
        generateWebSiteSchema(),
        generateItemListSchema([
          { name: 'Hair Transplant Clinics', url: `${siteConfig.url}/clinics?treatment=Hair+Transplant`, description: 'Find the best hair transplant clinics in Turkey' },
          { name: 'Dental Clinics', url: `${siteConfig.url}/clinics?treatment=Dental+Care`, description: 'Top-rated dental clinics in Turkey' },
          { name: 'Plastic Surgery Clinics', url: `${siteConfig.url}/clinics?treatment=Plastic+Surgery`, description: 'Verified plastic surgery clinics in Turkey' },
        ]),
      ]} />
      <ModernHero />
      <ModernFeatures />
      
      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Thousands of Patients Worldwide</h2>
            <p className="text-xl text-blue-100">Join over 50,000 patients who found their perfect clinic through Turkey Clinic Finder</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-lg">Verified Clinics</div>
              <div className="text-blue-200 text-sm mt-1">JCI & ISO Accredited</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 text-lg">Patients Helped</div>
              <div className="text-blue-200 text-sm mt-1">From 80+ Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100 text-lg">Medical Specialties</div>
              <div className="text-blue-200 text-sm mt-1">Comprehensive Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4.7/5</div>
              <div className="text-blue-100 text-lg">Average Rating</div>
              <div className="text-blue-200 text-sm mt-1">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Turkey Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Turkey for Medical Treatment?</h2>
            <p className="text-xl text-gray-600">Turkey has become a global leader in medical tourism, offering world-class healthcare at affordable prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">60-75% Cost Savings</h3>
              <p className="text-gray-700">
                Medical procedures in Turkey cost 60-75% less than in Western countries while maintaining 
                the same high quality standards. Save thousands without compromising on care.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">World-Class Facilities</h3>
              <p className="text-gray-700">
                Over 50 JCI-accredited hospitals and clinics with state-of-the-art equipment, internationally 
                trained surgeons, and modern medical technology.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Travel & Tourism</h3>
              <p className="text-gray-700">
                Combine your medical treatment with a beautiful vacation. Turkey offers stunning destinations, 
                rich culture, and excellent hospitality for international patients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free Consultation Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 text-white">
            <h2 className="text-4xl font-bold mb-4">📧 Get Free Consultation & Personalized Quote</h2>
            <p className="text-xl text-blue-100 mb-2">
              Fill out the form below and receive personalized treatment recommendations and quotes from verified clinics
            </p>
            <p className="text-lg text-blue-200">
              Our medical tourism experts will contact you within 24 hours via email with detailed information, pricing, and treatment plans
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </div>

      {/* Popular Treatments Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Medical Treatments in Turkey</h2>
            <p className="text-xl text-gray-600">Discover the most sought-after medical procedures in Turkey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/clinics?treatment=Hair+Transplant" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group">
              <div className="text-3xl mb-3">💇</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Hair Transplant</h3>
              <p className="text-gray-600 text-sm mb-3">FUE, DHI, Sapphire techniques. $1,500-$4,500</p>
              <div className="text-blue-600 font-semibold text-sm">Explore →</div>
            </a>
            <a href="/clinics?treatment=Dental+Care" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group">
              <div className="text-3xl mb-3">🦷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Dental Care</h3>
              <p className="text-gray-600 text-sm mb-3">Implants, veneers, all-on-4. $800-$15,000</p>
              <div className="text-blue-600 font-semibold text-sm">Explore →</div>
            </a>
            <a href="/clinics?treatment=Plastic+Surgery" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Plastic Surgery</h3>
              <p className="text-gray-600 text-sm mb-3">Rhinoplasty, breast augmentation. $2,500-$8,000</p>
              <div className="text-blue-600 font-semibold text-sm">Explore →</div>
            </a>
            <a href="/clinics?treatment=IVF+Treatment" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">IVF Treatment</h3>
              <p className="text-gray-600 text-sm mb-3">Fertility treatments. $3,000-$5,000</p>
              <div className="text-blue-600 font-semibold text-sm">Explore →</div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ModernSearchWizard onSearch={handleSearch} />
        <div className="mt-12">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading clinics...</p>
            </div>
          ) : clinics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinics.map((clinic) => (
                <ModernClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No clinics found. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

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
      
      {/* Enhanced Statistics Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Trusted by Thousands of Patients Worldwide</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Join over 50,000 patients who found their perfect clinic through Turkey Clinic Finder</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Verified Clinics', sublabel: 'JCI & ISO Accredited', icon: '🏥' },
              { value: '50K+', label: 'Patients Helped', sublabel: 'From 80+ Countries', icon: '👥' },
              { value: '25+', label: 'Medical Specialties', sublabel: 'Comprehensive Coverage', icon: '⚕️' },
              { value: '98%', label: 'Satisfaction Rate', sublabel: 'Patient Approved', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2 text-blue-200">{stat.value}</div>
                <div className="text-blue-100 text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Why Turkey Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Choose Turkey for Medical Treatment?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Turkey has become a global leader in medical tourism, offering world-class healthcare at affordable prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: '💰', 
                title: '60-75% Cost Savings', 
                description: 'Medical procedures in Turkey cost 60-75% less than in Western countries while maintaining the same high quality standards. Save thousands without compromising on care.',
                gradient: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: '🏆', 
                title: 'World-Class Facilities', 
                description: 'Over 50 JCI-accredited hospitals and clinics with state-of-the-art equipment, internationally trained surgeons, and modern medical technology.',
                gradient: 'from-blue-400 to-indigo-500'
              },
              { 
                icon: '✈️', 
                title: 'Easy Travel & Tourism', 
                description: 'Combine your medical treatment with a beautiful vacation. Turkey offers stunning destinations, rich culture, and excellent hospitality for international patients.',
                gradient: 'from-purple-400 to-pink-500'
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Free Consultation Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">100% Free Consultation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get Free Consultation & Personalized Quote</h2>
            <p className="text-xl text-blue-100 mb-2 max-w-3xl mx-auto">
              Fill out the form below and receive personalized treatment recommendations and quotes from verified clinics
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
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

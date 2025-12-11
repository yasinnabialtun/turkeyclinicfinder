'use client';

import { useState, useEffect } from 'react';
import ModernClinicCard from '../../components/ModernClinicCard';
import ModernSearchWizard from '../../components/ModernSearchWizard';
import InternalLinks from '../../components/InternalLinks';
import AdBanner from '../../components/AdBanner';
import ConsultationForm from '../../components/ConsultationForm';
import StructuredData from '../../components/StructuredData';
import { apiClient } from '../../lib/api';
import { generateItemListSchema, siteConfig } from '../../lib/seo';

export default function ClinicsPage() {
  const [clinics, setClinics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    loadAllClinics();
  }, []);

  const loadAllClinics = async () => {
    setLoading(true);
    try {
      const response = await apiClient.getClinics({});
      if (response.success) {
        setClinics(response.data.items || []);
      }
    } catch (error) {
      console.error('Error loading clinics:', error);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  };

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
      <StructuredData data={generateItemListSchema(
        clinics.map(clinic => ({
          name: clinic.name_en || clinic.name,
          url: `${siteConfig.url}/clinic/${clinic.id}`,
          description: clinic.description_en || clinic.description,
        }))
      )} />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Browse Clinics</h1>
            <p className="text-xl text-blue-100">
              Discover verified medical clinics across Turkey
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ModernSearchWizard onSearch={handleSearch} />
          <AdBanner position="in-content" size="medium" className="mb-8" />
          <InternalLinks className="mb-8" />
          
          {loading && initialLoad ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
              <p className="mt-6 text-gray-600 text-lg">Loading clinics...</p>
            </div>
          ) : clinics.length > 0 ? (
            <>
              <div className="mb-6 text-gray-600">
                <p className="text-lg">
                  Found <span className="font-bold text-gray-900">{clinics.length}</span> clinic{clinics.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clinics.map((clinic) => (
                  <ModernClinicCard key={clinic.id} clinic={clinic} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No clinics found</h3>
              <p className="text-gray-600 text-lg">
                Try adjusting your search criteria or browse all clinics
              </p>
              <button
                onClick={loadAllClinics}
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Show All Clinics
              </button>
            </div>
          )}

          {/* Free Consultation Section */}
          {!loading && (
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8 text-white">
                <h2 className="text-4xl font-bold mb-4">📧 Get Free Consultation & Quote</h2>
                <p className="text-xl text-blue-100">
                  Can't find the perfect clinic? Fill out our consultation form and receive personalized recommendations and quotes from verified clinics.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <ConsultationForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

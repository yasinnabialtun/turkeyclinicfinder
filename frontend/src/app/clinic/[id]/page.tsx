'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';
import ReviewList from '../../../components/ReviewList';
import PriceEstimator from '../../../components/PriceEstimator';
import AdBanner from '../../../components/AdBanner';
import { apiClient } from '../../../lib/api';
import { generateClinicSchema, siteConfig } from '../../../lib/seo';
import StructuredData from '../../../components/StructuredData';

export default function ClinicPage() {
  const params = useParams();
  const clinicId = params?.id as string;
  const [clinic, setClinic] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (clinicId) {
      fetchClinic();
    }
  }, [clinicId]);

  const fetchClinic = async () => {
    try {
      const response = await apiClient.getClinic(parseInt(clinicId));
      if (response.success) {
        setClinic(response.data);
      }
    } catch (error) {
      console.error('Error fetching clinic:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading clinic details...</p>
        </div>
      </div>
    );
  }

  if (!clinic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Clinic not found</h1>
          <Link href="/clinics" className="text-blue-600 hover:text-blue-700">
            Browse all clinics
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: `${siteConfig.url}` },
    { name: 'Clinics', url: `${siteConfig.url}/clinics` },
    { name: clinic.name_en || clinic.name, url: `${siteConfig.url}/clinic/${clinic.id}` },
  ];

  const clinicSchema = generateClinicSchema(clinic);

  return (
    <>
      <StructuredData data={clinicSchema} />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold mb-4">{clinic.name_en || clinic.name}</h1>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{clinic.city}</span>
              </div>
              {clinic.rating && (
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(clinic.rating) ? 'fill-current' : 'text-gray-400'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span>{clinic.rating.toFixed(1)} ({clinic.review_count || 0} reviews)</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Clinic Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Clinic</h2>
                <p className="text-gray-700 leading-relaxed">
                  {clinic.description_en || clinic.description || 'No description available.'}
                </p>
              </div>

              {/* Treatments */}
              {clinic.treatments && clinic.treatments.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Treatments</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {clinic.treatments.map((treatment: any, index: number) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900">{treatment.name_en || treatment.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              <ReviewList clinicId={clinic.id} />
            </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <PriceEstimator clinicId={clinic.id} />
                
                <ConsultationForm 
                  clinicId={clinic.id} 
                  treatment={clinic.treatments?.[0]?.name_en || clinic.treatments?.[0]?.name}
                  className="mt-6"
                />
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get More Information</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Fill out the consultation form above to receive detailed information, pricing, and personalized treatment recommendations from this clinic.
                  </p>
                  {clinic.email && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a href={`mailto:${clinic.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                        {clinic.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

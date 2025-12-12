'use client';

import Link from 'next/link';

interface ModernClinicCardProps {
  clinic: {
    id: number;
    name: string;
    name_en?: string;
    city: string;
    description?: string;
    description_en?: string;
    price_range?: string;
  };
}

export default function ModernClinicCard({ clinic }: ModernClinicCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Verified
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
            {clinic.name_en || clinic.name}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium">{clinic.city}</span>
        </div>

        {clinic.price_range && (
          <p className="text-sm text-blue-600 font-semibold mb-3">{clinic.price_range}</p>
        )}

        {clinic.description_en || clinic.description ? (
          <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
            {clinic.description_en || clinic.description}
          </p>
        ) : null}

        <Link
          href={`/clinic/${clinic.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-md"
        >
          Get Quote / Başvuru Yap
        </Link>
      </div>
    </div>
  );
}


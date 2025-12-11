'use client';

import Link from 'next/link';

interface ModernClinicCardProps {
  clinic: {
    id: number;
    name_en: string;
    city: string;
    rating: number;
    review_count: number;
    description_en?: string;
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
            {clinic.name_en}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium">{clinic.city}</span>
        </div>

        {clinic.description_en && (
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
            {clinic.description_en}
          </p>
        )}

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(clinic.rating) ? 'fill-current' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 font-semibold text-gray-900">{clinic.rating.toFixed(1)}</span>
            <span className="ml-2 text-sm text-gray-500">({clinic.review_count})</span>
          </div>
        </div>

        <Link
          href={`/clinic/${clinic.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}


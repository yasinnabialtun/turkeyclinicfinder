'use client';

import Link from 'next/link';

interface ClinicCardProps {
  clinic: {
    id: number;
    name_en: string;
    city: string;
    rating: number;
    review_count: number;
    description_en?: string;
  };
}

export default function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{clinic.name_en}</h3>
        <p className="text-gray-600 mb-4">{clinic.city}</p>
        {clinic.description_en && (
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {clinic.description_en}
          </p>
        )}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-medium">{clinic.rating.toFixed(1)}</span>
            <span className="ml-2 text-sm text-gray-500">
              ({clinic.review_count} reviews)
            </span>
          </div>
        </div>
        <Link
          href={`/clinic/${clinic.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}


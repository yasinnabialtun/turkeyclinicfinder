'use client';

import Link from 'next/link';

interface ClinicCardProps {
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

export default function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{clinic.name_en || clinic.name}</h3>
        <p className="text-gray-600 mb-2">{clinic.city}</p>
        {clinic.price_range && (
          <p className="text-sm text-blue-600 font-medium mb-2">{clinic.price_range}</p>
        )}
        {clinic.description_en || clinic.description ? (
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {clinic.description_en || clinic.description}
          </p>
        ) : null}
        <Link
          href={`/clinic/${clinic.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Get Quote / Başvuru Yap
        </Link>
      </div>
    </div>
  );
}


'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ModernClinicCardProps {
  clinic: {
    id: number;
    name: string;
    name_en?: string;
    city: string;
    description?: string;
    description_en?: string;
    price_range?: string;
    treatments?: string[];
  };
}

export default function ModernClinicCard({ clinic }: ModernClinicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Placeholder with Gradient Overlay */}
      <div className="h-56 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`}></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/95 backdrop-blur-sm text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Verified
          </span>
        </div>

        {/* City Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {clinic.city}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2 line-clamp-2">
            {clinic.name_en || clinic.name}
          </h3>
          
          {clinic.price_range && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-500">Price Range:</span>
              <span className="text-lg font-bold text-blue-600">{clinic.price_range}</span>
            </div>
          )}
        </div>

        {clinic.description_en || clinic.description ? (
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
            {clinic.description_en || clinic.description}
          </p>
        ) : null}

        {clinic.treatments && clinic.treatments.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {clinic.treatments.slice(0, 3).map((treatment, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
              >
                {treatment}
              </span>
            ))}
            {clinic.treatments.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{clinic.treatments.length - 3} more
              </span>
            )}
          </div>
        )}

        <Link
          href={`/clinic/${clinic.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3.5 px-6 rounded-xl font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get Free Quote
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </Link>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
}

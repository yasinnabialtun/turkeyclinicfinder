'use client';

import { useState } from 'react';

interface SearchParams {
  city?: string;
  treatment?: string;
  min_rating?: number;
  max_price?: number;
}

interface ModernSearchWizardProps {
  onSearch: (params: SearchParams) => void;
}

export default function ModernSearchWizard({ onSearch }: ModernSearchWizardProps) {
  const [city, setCity] = useState('');
  const [treatment, setTreatment] = useState('');
  const [minRating, setMinRating] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      city: city || undefined,
      treatment: treatment || undefined,
      min_rating: minRating ? parseFloat(minRating) : undefined,
      max_price: maxPrice ? parseFloat(maxPrice) : undefined,
    });
  };

  const cities = ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bursa'];
  const treatments = ['Hair Transplant', 'Dental Care', 'Plastic Surgery', 'Orthopedics', 'Cardiology'];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Find Your Perfect Clinic
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* City Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Treatment Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Treatment
            </label>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="">All Treatments</option>
              {treatments.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Minimum Rating
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              <option value="">Any Rating</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4.0">4.0+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
              <option value="3.0">3.0+ Stars</option>
            </select>
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Maximum Price (USD)
            </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="e.g., 5000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg transform hover:scale-105"
          >
            Search Clinics
          </button>
        </div>
      </form>
    </div>
  );
}


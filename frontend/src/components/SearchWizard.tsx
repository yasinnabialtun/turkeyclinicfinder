'use client';

import { useState } from 'react';

interface SearchWizardProps {
  onSearch: (params: any) => void;
}

export default function SearchWizard({ onSearch }: SearchWizardProps) {
  const [treatment, setTreatment] = useState('');
  const [city, setCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      treatment: treatment || undefined,
      city: city || undefined,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="treatment" className="block text-sm font-medium mb-2">
              Treatment
            </label>
            <input
              type="text"
              id="treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              placeholder="e.g., Hair Transplant"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-2">
              City
            </label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">All Cities</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Antalya">Antalya</option>
              <option value="Ankara">Ankara</option>
            </select>
          </div>
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium mb-2">
              Min Price (USD)
            </label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium mb-2">
              Max Price (USD)
            </label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="10000"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Search Clinics
        </button>
      </form>
    </div>
  );
}


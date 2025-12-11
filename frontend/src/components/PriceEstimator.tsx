'use client';

import { useState } from 'react';

interface PriceEstimatorProps {
  clinicId: number;
}

export default function PriceEstimator({ clinicId }: PriceEstimatorProps) {
  const [treatmentType, setTreatmentType] = useState('');
  const [units, setUnits] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleEstimate = () => {
    // Simple price estimation logic
    const basePrices: Record<string, number> = {
      'hair_transplant': 3000,
      'dental': 1500,
      'plastic_surgery': 5000,
    };

    const basePrice = basePrices[treatmentType] || 2000;
    const total = basePrice * units;
    setEstimatedPrice(total);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Treatment Type
          </label>
          <select
            value={treatmentType}
            onChange={(e) => setTreatmentType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select treatment</option>
            <option value="hair_transplant">Hair Transplant</option>
            <option value="dental">Dental</option>
            <option value="plastic_surgery">Plastic Surgery</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Units</label>
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(parseInt(e.target.value) || 1)}
            min="1"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          onClick={handleEstimate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Estimate Price
        </button>
        {estimatedPrice && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="font-semibold">Estimated Price:</p>
            <p className="text-2xl font-bold">${estimatedPrice.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}


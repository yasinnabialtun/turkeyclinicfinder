'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClinicsManagementPage() {
  const [clinics, setClinics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Clinic Management</h1>
            <Link
              href="/admin/clinics/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Add New Clinic
            </Link>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search clinics..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-4">
            {clinics.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">No clinics found</p>
                <Link
                  href="/admin/clinics/new"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Add your first clinic
                </Link>
              </div>
            ) : (
              clinics.map((clinic) => (
                <div key={clinic.id} className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{clinic.name}</h3>
                    <p className="text-sm text-gray-600">{clinic.city}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/admin/clinics/${clinic.id}/edit`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      Edit
                    </Link>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


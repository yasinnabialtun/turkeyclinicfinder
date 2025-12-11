'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdSenseManagementPage() {
  const [adSlots, setAdSlots] = useState([
    {
      id: '1',
      name: 'Top Banner',
      position: 'top',
      size: 'large',
      adSlot: '',
      enabled: true,
    },
    {
      id: '2',
      name: 'Sidebar Ad 1',
      position: 'sidebar',
      size: 'medium',
      adSlot: '',
      enabled: true,
    },
    {
      id: '3',
      name: 'Sidebar Ad 2',
      position: 'sidebar',
      size: 'small',
      adSlot: '',
      enabled: false,
    },
    {
      id: '4',
      name: 'In-Content Ad',
      position: 'in-content',
      size: 'medium',
      adSlot: '',
      enabled: true,
    },
    {
      id: '5',
      name: 'Bottom Banner',
      position: 'bottom',
      size: 'large',
      adSlot: '',
      enabled: false,
    },
  ]);

  const publisherId = 'pub-3511256754647083';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Google AdSense Management</h1>
              <p className="text-sm text-gray-600 mt-1">Publisher ID: <strong>{publisherId}</strong></p>
            </div>
            <Link
              href="/admin/ads"
              className="text-blue-600 hover:text-blue-700"
            >
              ← Back to Ads
            </Link>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">AdSense Setup Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
              <li>Go to <a href="https://www.google.com/adsense" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google AdSense</a></li>
              <li>Create ad units for each position (top, sidebar, in-content, bottom)</li>
              <li>Copy the Ad Slot ID (data-ad-slot value) from each ad unit</li>
              <li>Paste the Ad Slot ID in the corresponding field below</li>
              <li>Enable/disable ads as needed</li>
            </ol>
          </div>

          <div className="space-y-4">
            {adSlots.map((slot) => (
              <div key={slot.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{slot.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        slot.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {slot.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 capitalize">
                        {slot.position} - {slot.size}
                      </span>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Slot ID (from Google AdSense)
                      </label>
                      <input
                        type="text"
                        value={slot.adSlot}
                        onChange={(e) => {
                          setAdSlots(adSlots.map(s => 
                            s.id === slot.id ? { ...s, adSlot: e.target.value } : s
                          ));
                        }}
                        placeholder="e.g., 1234567890"
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Find this in your AdSense account → Ads → Ad units
                      </p>
                    </div>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => {
                        setAdSlots(adSlots.map(s => 
                          s.id === slot.id ? { ...s, enabled: !s.enabled } : s
                        ));
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        slot.enabled
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-800 hover:bg-green-200'
                      }`}
                    >
                      {slot.enabled ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ AdSense Configuration Complete</h3>
            <p className="text-gray-700 text-sm mb-4">
              Your ads.txt file is configured with Publisher ID: <strong>{publisherId}</strong>
            </p>
            <p className="text-gray-700 text-sm">
              Once you add Ad Slot IDs above and enable the ads, they will automatically appear on your website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


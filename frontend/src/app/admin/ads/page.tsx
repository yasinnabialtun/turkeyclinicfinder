'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Ad {
  id: string;
  position: string;
  size: string;
  enabled: boolean;
  adCode?: string;
  adType: 'banner' | 'google-adsense' | 'custom';
  clickUrl?: string;
  imageUrl?: string;
  title?: string;
}

export default function AdManagementPage() {
  const [ads, setAds] = useState<Ad[]>([
    {
      id: '1',
      position: 'top',
      size: 'large',
      enabled: true,
      adType: 'banner',
      title: 'Top Banner Ad',
    },
    {
      id: '2',
      position: 'sidebar',
      size: 'medium',
      enabled: true,
      adType: 'google-adsense',
      title: 'Sidebar Ad',
    },
    {
      id: '3',
      position: 'bottom',
      size: 'large',
      enabled: false,
      adType: 'custom',
      title: 'Bottom Banner',
    },
    {
      id: '4',
      position: 'in-content',
      size: 'medium',
      enabled: true,
      adType: 'banner',
      title: 'In-Content Ad',
    },
  ]);

  const [editingAd, setEditingAd] = useState<Ad | null>(null);

  const handleEdit = (ad: Ad) => {
    setEditingAd(ad);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this ad?')) {
      setAds(ads.filter(ad => ad.id !== id));
    }
  };

  const handleToggle = (id: string) => {
    setAds(ads.map(ad => 
      ad.id === id ? { ...ad, enabled: !ad.enabled } : ad
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Ad Management</h1>
            <Link
              href="/admin/ads/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Create New Ad
            </Link>
          </div>
        </div>

        <div className="p-6">
          {/* Ad Positions Overview */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Ad Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['top', 'sidebar', 'bottom', 'in-content'].map((position) => {
                const positionAds = ads.filter(ad => ad.position === position);
                const enabledCount = positionAds.filter(ad => ad.enabled).length;
                return (
                  <div key={position} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 capitalize mb-2">{position}</h3>
                    <p className="text-sm text-gray-600">
                      {enabledCount} / {positionAds.length} enabled
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ads List */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">All Ads</h2>
            {ads.map((ad) => (
              <div key={ad.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{ad.title || `${ad.position} - ${ad.size}`}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ad.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {ad.enabled ? 'Active' : 'Inactive'}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 capitalize">
                        {ad.adType}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Position:</span> {ad.position}
                      </div>
                      <div>
                        <span className="font-medium">Size:</span> {ad.size}
                      </div>
                      <div>
                        <span className="font-medium">Type:</span> {ad.adType}
                      </div>
                      <div>
                        <span className="font-medium">ID:</span> {ad.id}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleToggle(ad.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        ad.enabled
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-800 hover:bg-green-200'
                      }`}
                    >
                      {ad.enabled ? 'Disable' : 'Enable'}
                    </button>
                    <button
                      onClick={() => handleEdit(ad)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ad.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


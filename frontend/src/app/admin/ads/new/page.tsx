'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewAdPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    position: 'top',
    size: 'medium',
    adType: 'banner',
    enabled: true,
    adCode: '',
    clickUrl: '',
    imageUrl: '',
    googleAdsenseId: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to API
    console.log('Saving ad:', formData);
    router.push('/admin/ads');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Create New Ad</h1>
            <Link
              href="/admin/ads"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Ads
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ad Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Top Banner Ad"
              required
            />
          </div>

          {/* Position and Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position
              </label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="top">Top</option>
                <option value="sidebar">Sidebar</option>
                <option value="bottom">Bottom</option>
                <option value="in-content">In-Content</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <select
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="small">Small (320x50)</option>
                <option value="medium">Medium (300x250 / 336x280)</option>
                <option value="large">Large (728x90 / 970x250)</option>
              </select>
            </div>
          </div>

          {/* Ad Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ad Type
            </label>
            <select
              value={formData.adType}
              onChange={(e) => setFormData({ ...formData, adType: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="banner">Banner (Image)</option>
              <option value="google-adsense">Google AdSense</option>
              <option value="custom">Custom HTML/JavaScript</option>
            </select>
          </div>

          {/* Ad Type Specific Fields */}
          {formData.adType === 'banner' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/ad-image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Click URL
                </label>
                <input
                  type="url"
                  value={formData.clickUrl}
                  onChange={(e) => setFormData({ ...formData, clickUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com"
                />
              </div>
            </>
          )}

          {formData.adType === 'google-adsense' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Google AdSense Ad Unit ID
              </label>
              <input
                type="text"
                value={formData.googleAdsenseId}
                onChange={(e) => setFormData({ ...formData, googleAdsenseId: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ca-pub-1234567890"
              />
            </div>
          )}

          {formData.adType === 'custom' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom HTML/JavaScript Code
              </label>
              <textarea
                value={formData.adCode}
                onChange={(e) => setFormData({ ...formData, adCode: e.target.value })}
                rows={10}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                placeholder="<div>Your ad code here</div>"
              />
            </div>
          )}

          {/* Enabled Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="enabled"
              checked={formData.enabled}
              onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="enabled" className="ml-2 text-sm font-medium text-gray-700">
              Enable this ad immediately
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <Link
              href="/admin/ads"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Create Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


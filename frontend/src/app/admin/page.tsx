'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => {
    if (pathname?.includes('/adsense')) return 'adsense';
    if (pathname?.includes('/ads')) return 'ads';
    return 'dashboard';
  });

  const stats = {
    totalClinics: 0,
    totalUsers: 0,
    totalBookings: 0,
    totalRevenue: 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin User</span>
              <button className="text-sm text-red-600 hover:text-red-700">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'dashboard', name: 'Dashboard', icon: '📊' },
                { id: 'leads', name: 'Leads', icon: '📧' },
                { id: 'clinics', name: 'Clinics', icon: '🏥' },
                { id: 'ads', name: 'Ad Management', icon: '📢' },
                { id: 'adsense', name: 'AdSense', icon: '💰' },
                { id: 'content', name: 'Content', icon: '📝' },
                { id: 'users', name: 'Users', icon: '👥' },
                { id: 'settings', name: 'Settings', icon: '⚙️' },
              ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Clinics</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalClinics}</p>
                  </div>
                  <div className="text-4xl">🏥</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
                  </div>
                  <div className="text-4xl">👥</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalBookings}</p>
                  </div>
                  <div className="text-4xl">📅</div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">${stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/admin/clinics/new"
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition text-center"
                >
                  <div className="text-3xl mb-2">➕</div>
                  <p className="font-semibold text-gray-900">Add New Clinic</p>
                </Link>
                <Link
                  href="/admin/ads"
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition text-center"
                >
                  <div className="text-3xl mb-2">📢</div>
                  <p className="font-semibold text-gray-900">Manage Ads</p>
                </Link>
                <Link
                  href="/admin/content/blog/new"
                  className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition text-center"
                >
                  <div className="text-3xl mb-2">📝</div>
                  <p className="font-semibold text-gray-900">New Blog Post</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Lead Management</h2>
            <p className="text-gray-600 mb-4">
              View and manage consultation requests from patients. Leads are automatically collected from consultation forms.
            </p>
            <Link href="/admin/leads" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 inline-block">
              View All Leads
            </Link>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>How it works:</strong> When patients fill out consultation forms on your website, 
                leads are automatically saved to the database and email notifications are sent to <strong>info@ynadijital.com</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Lead Management</h2>
            <p className="text-gray-600 mb-4">
              View and manage consultation requests from patients. Leads are automatically collected from consultation forms.
            </p>
            <Link href="/admin/leads" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 inline-block">
              View All Leads
            </Link>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>How it works:</strong> When patients fill out consultation forms on your website, 
                leads are automatically saved to the database and email notifications are sent to <strong>info@ynadijital.com</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Ad Management Tab */}
        {activeTab === 'ads' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Ad Management</h2>
              <Link
                href="/admin/ads/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                + Add New Ad
              </Link>
            </div>
            <AdManagementContent />
          </div>
        )}

        {/* AdSense Tab */}
        {activeTab === 'adsense' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Google AdSense</h2>
              <Link
                href="/admin/adsense"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Manage AdSense
              </Link>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AdSense Status</h3>
              <p className="text-gray-700 mb-4">
                <strong>Publisher ID:</strong> pub-3511256754647083
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Status:</strong> <span className="text-green-600 font-semibold">Active</span>
              </p>
              <p className="text-gray-700 text-sm">
                Configure your AdSense ad units and manage ad placements from the AdSense management page.
              </p>
            </div>
          </div>
        )}

        {/* Other tabs content will be added */}
      </div>
    </div>
  );
}

function AdManagementContent() {
  const [ads, setAds] = useState([
    { id: '1', position: 'top', size: 'large', enabled: true, type: 'banner' },
    { id: '2', position: 'sidebar', size: 'medium', enabled: true, type: 'google-adsense' },
    { id: '3', position: 'bottom', size: 'large', enabled: false, type: 'custom' },
  ]);

  return (
    <div className="space-y-4">
      {ads.map((ad) => (
        <div key={ad.id} className="border rounded-lg p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">
              {ad.position.charAt(0).toUpperCase() + ad.position.slice(1)} - {ad.size}
            </h3>
            <p className="text-sm text-gray-600">Type: {ad.type}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm ${ad.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {ad.enabled ? 'Enabled' : 'Disabled'}
            </span>
            <button className="text-blue-600 hover:text-blue-700">Edit</button>
            <button className="text-red-600 hover:text-red-700">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}


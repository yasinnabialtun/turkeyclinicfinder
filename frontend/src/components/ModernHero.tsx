'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ModernHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-blue-200">Medical Clinic</span>
            <span className="block">in Turkey</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Trusted by thousands of patients worldwide. Compare clinics, read reviews, and make informed decisions for your medical journey.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg shadow-2xl p-2">
              <input
                type="text"
                placeholder="Search clinics, treatments, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <Link
                href={`/clinics?query=${searchQuery}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div>
              <div className="text-4xl font-bold text-blue-200">500+</div>
              <div className="text-blue-100 mt-2">Verified Clinics</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200">50K+</div>
              <div className="text-blue-100 mt-2">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200">98%</div>
              <div className="text-blue-100 mt-2">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200">24/7</div>
              <div className="text-blue-100 mt-2">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}


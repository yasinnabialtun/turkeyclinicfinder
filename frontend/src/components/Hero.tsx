'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find the Best Medical Clinics in Turkey
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Your trusted partner for medical tourism. Compare clinics, read reviews, and make informed decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/clinics"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            Browse Clinics
          </Link>
          <Link
            href="/blog"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
}


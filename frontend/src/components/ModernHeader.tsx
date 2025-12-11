'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TCF</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              TurkeyClinicFinder
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/clinics"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Clinics
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/treatments"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Treatments
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/admin"
              className={`font-medium transition hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-white rounded-lg shadow-lg mt-2">
            <div className="space-y-2 px-4">
              <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/clinics" className="block py-2 text-gray-700 hover:text-blue-600">
                Clinics
              </Link>
              <Link href="/blog" className="block py-2 text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TurkeyClinicFinder</h3>
            <p className="text-gray-400">
              Find the best medical clinics in Turkey. Your trusted medical tourism partner.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="hover:text-white transition">
                  Clinics
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/treatments/hair-transplant" className="hover:text-white transition">
                  Hair Transplant
                </Link>
              </li>
              <li>
                <Link href="/treatments/dental" className="hover:text-white transition">
                  Dental Care
                </Link>
              </li>
              <li>
                <Link href="/treatments/plastic-surgery" className="hover:text-white transition">
                  Plastic Surgery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:info@ynadijital.com" className="text-blue-600 hover:text-blue-700">info@ynadijital.com</a></li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TurkeyClinicFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


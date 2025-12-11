'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-700 text-sm md:text-base">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.{' '}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
          >
            Reject
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}


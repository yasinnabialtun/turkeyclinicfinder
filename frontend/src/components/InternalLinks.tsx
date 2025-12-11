'use client';

import Link from 'next/link';

interface InternalLinksProps {
  className?: string;
}

export default function InternalLinks({ className = '' }: InternalLinksProps) {
  const popularLinks = [
    { href: '/clinics?treatment=Hair+Transplant', text: 'Hair Transplant Clinics' },
    { href: '/clinics?treatment=Dental+Care', text: 'Dental Clinics' },
    { href: '/clinics?treatment=Plastic+Surgery', text: 'Plastic Surgery Clinics' },
    { href: '/clinics?city=Istanbul', text: 'Istanbul Clinics' },
    { href: '/clinics?city=Ankara', text: 'Ankara Clinics' },
    { href: '/blog', text: 'Medical Tourism Blog' },
  ];

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h3>
      <div className="flex flex-wrap gap-2">
        {popularLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition text-sm"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}


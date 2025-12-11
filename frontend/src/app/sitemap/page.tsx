import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Sitemap - Turkey Clinic Finder',
  description: 'Complete sitemap of Turkey Clinic Finder. Find all pages, clinics, blog posts, and resources.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  const pages = [
    { title: 'Home', url: '/' },
    { title: 'Browse Clinics', url: '/clinics' },
    { title: 'Blog', url: '/blog' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Privacy Policy', url: '/privacy' },
    { title: 'Terms of Service', url: '/terms' },
  ];

  const blogPosts = [
    { title: 'Is Hair Transplant Safe in Turkey?', url: '/blog/is-hair-transplant-safe-in-turkey' },
    { title: 'How Much Does Hair Transplant Cost in Turkey?', url: '/blog/how-much-does-hair-transplant-cost-in-turkey' },
    { title: 'What to Expect After Hair Transplant in Turkey?', url: '/blog/what-to-expect-after-hair-transplant-turkey' },
    { title: 'Hair Transplant in Turkey 2026', url: '/blog/hair-transplant-turkey-2026' },
    { title: 'Dental Tourism in Turkey 2026', url: '/blog/dental-tourism-turkey-2026' },
    { title: '2026 Medical Tourism Turkey Trends', url: '/blog/2026-medical-tourism-turkey-trends' },
    { title: 'Plastic Surgery in Turkey 2026', url: '/blog/plastic-surgery-turkey-2026' },
  ];

  const treatments = [
    { title: 'Hair Transplant', url: '/clinics?treatment=Hair+Transplant' },
    { title: 'Dental Care', url: '/clinics?treatment=Dental+Care' },
    { title: 'Plastic Surgery', url: '/clinics?treatment=Plastic+Surgery' },
    { title: 'Orthopedics', url: '/clinics?treatment=Orthopedics' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-blue-100">
            Find all pages and resources on our website
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-blue-600 hover:text-blue-700 hover:underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Posts</h2>
            <ul className="space-y-2">
              {blogPosts.map((post) => (
                <li key={post.url}>
                  <Link href={post.url} className="text-blue-600 hover:text-blue-700 hover:underline text-sm">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatments</h2>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment.url}>
                  <Link href={treatment.url} className="text-blue-600 hover:text-blue-700 hover:underline">
                    {treatment.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


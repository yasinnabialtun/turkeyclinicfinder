import { ReactNode } from 'react';
import type { Metadata } from 'next';
import AdminAuth from '../../components/AdminAuth';

/**
 * Admin paneli metadata - NOINDEX
 * Arama motorlarında görünmemeli
 */
export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Admin panel',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
  openGraph: {
    robots: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </AdminAuth>
  );
}

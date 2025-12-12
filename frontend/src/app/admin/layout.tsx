'use client';

import { ReactNode } from 'react';
import AdminAuth from '../../components/AdminAuth';

export const metadata = {
  title: 'Admin Panel - Turkey Clinic Finder',
  description: 'Admin panel for managing Turkey Clinic Finder',
  robots: {
    index: false,
    follow: false,
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

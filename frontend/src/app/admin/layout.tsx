'use client';

import { ReactNode } from 'react';
import AdminAuth from '../../components/AdminAuth';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </AdminAuth>
  );
}

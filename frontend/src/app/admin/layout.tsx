import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Admin Panel - Turkey Clinic Finder',
  description: 'Admin panel for managing Turkey Clinic Finder',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No authentication required - public admin access

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}


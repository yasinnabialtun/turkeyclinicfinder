import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clinic Details - Turkey Clinic Finder',
  description: 'View detailed information about medical clinics in Turkey, including reviews, treatments, and pricing.',
};

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


'use client';

import Link from 'next/link';
import { generateBreadcrumbSchema } from '../lib/seo';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <StructuredData data={schema} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-blue-600 transition">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

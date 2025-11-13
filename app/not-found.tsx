'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <p className="text-xl text-neutral-600 mb-6">Page not found</p>
        <Link href="/" className="text-safari-600 font-semibold hover:text-safari-700">
          Go back home
        </Link>
      </div>
    </div>
  );
}

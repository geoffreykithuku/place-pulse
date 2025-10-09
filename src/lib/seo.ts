import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
  };
  jsonLd?: object;
}

const baseTitle = 'Spot A Crib';
const baseDescription = 'Find your perfect home in Kenya faster. Connect with verified house hunters who know the best available rentals in your area.';
const baseUrl = 'https://spotacrib.co.ke';

export function generateSEO({
  title,
  description = baseDescription,
  keywords = [],
  canonical,
  openGraph,
  jsonLd,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} - Find it. Spot it. Crib it.`;
  
  const defaultKeywords = [
    'house hunting Kenya',
    'rental houses Nairobi',
    'bedsitter Kenya',
    'apartment hunting',
    'house scouts Kenya',
    'rental properties',
    'Kenya housing',
    'find house Kenya'
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: 'Spot A Crib Team' }],
    creator: 'Spot A Crib',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || baseUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: openGraph?.type || 'website',
      locale: 'en_KE',
      url: canonical || baseUrl,
      siteName: baseTitle,
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || description,
      images: [
        {
          url: openGraph?.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: openGraph?.title || fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@spotacrib',
      creator: '@spotacrib',
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || description,
      images: [openGraph?.image || '/og-image.jpg'],
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'application/ld+json': JSON.stringify(jsonLd),
    },
  };
}

export const defaultJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spot A Crib',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: baseDescription,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KE',
    addressLocality: 'Nairobi',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-XXX-XXX-XXX',
    contactType: 'customer service',
    availableLanguage: ['English', 'Swahili'],
  },
  sameAs: [
    'https://facebook.com/spotacrib',
    'https://twitter.com/spotacrib',
    'https://instagram.com/spotacrib',
  ],
};
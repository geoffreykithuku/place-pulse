import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: object;
}

const baseTitle = "Spot A Crib";
const baseDescription =
  "Find your perfect home in Kenya faster. Connect with verified house hunters who know the best available rentals in your area.";
const baseUrl = "https://spotacrib.co.ke";

export const useSEO = ({
  title,
  description = baseDescription,
  keywords = [],
  canonical,
  ogImage,
  ogType = "website",
  jsonLd,
}: SEOProps = {}) => {
  const fullTitle = title
    ? `${title} | ${baseTitle}`
    : `${baseTitle} - Find it. Spot it. Crib it.`;

  const defaultKeywords = [
    "house hunting Kenya",
    "rental houses Nairobi",
    "bedsitter Kenya",
    "apartment hunting",
    "house scouts Kenya",
    "rental properties",
    "Kenya housing",
    "find house Kenya",
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");
  const canonicalUrl =
    canonical ||
    (typeof window !== "undefined" ? window.location.href : baseUrl);
  const imageUrl = ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    canonical: canonicalUrl,
    ogImage: imageUrl,
    ogType,
    jsonLd,
  };
};

export const SEOHead = (props: SEOProps) => {
  const seo = useSEO(props);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:site_name" content={baseTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@spotacrib" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />

      {/* JSON-LD */}
      {seo.jsonLd && (
        <script type="application/ld+json">{JSON.stringify(seo.jsonLd)}</script>
      )}
    </Helmet>
  );
};

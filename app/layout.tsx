import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotacrib.co.ke"),
  title: {
    default: "Spot A Crib - Find Your Perfect Home in Kenya",
    template: "%s | Spot A Crib",
  },
  description:
    "Connect with verified house hunters and find your perfect home in Kenya. Browse bedsitters, apartments, and family homes across Nairobi, Mombasa, Kisumu, and more.",
  keywords: [
    "house hunting",
    "apartments Kenya",
    "bedsitters Nairobi",
    "rental homes",
    "house scouts",
    "property search Kenya",
  ],
  authors: [{ name: "Spot A Crib" }],
  creator: "Spot A Crib",
  publisher: "Spot A Crib",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://spotacrib.co.ke",
    title: "Spot A Crib - Find Your Perfect Home in Kenya",
    description:
      "Connect with verified house hunters who know the best available rentals in your area.",
    siteName: "Spot A Crib",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spot A Crib - House Hunting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot A Crib - Find Your Perfect Home in Kenya",
    description:
      "Connect with verified house hunters who know the best available rentals in your area.",
    images: ["/og-image.jpg"],
    creator: "@spotacrib",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

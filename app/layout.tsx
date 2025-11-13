import type { Metadata } from 'next';
import '../styles/globals.css';
import Layout from '../src/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Spot A Crib - House Hunting Platform',
  description: 'Connect with verified house hunters and find your perfect home in Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

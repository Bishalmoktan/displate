import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Offer from '@/components/Offer';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cart | Displate',
  description: 'Displate cart page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.webp"
        />
      </head>
      <body className={`${inter.className}`}>
        <Offer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

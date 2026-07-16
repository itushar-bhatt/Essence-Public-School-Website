import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { schoolConfig } from '@/config/school.config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: schoolConfig.seo.title,
  description: schoolConfig.seo.description,
  keywords: schoolConfig.seo.keywords,
  openGraph: {
    title: schoolConfig.seo.title,
    description: schoolConfig.seo.description,
    images: [schoolConfig.seo.ogImage || ''],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: schoolConfig.seo.title,
    description: schoolConfig.seo.description,
    images: [schoolConfig.seo.ogImage || ''],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
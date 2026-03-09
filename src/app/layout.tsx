import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'optional',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ammar Ansari',
  description: 'A constant learner striving for perfection',
  authors: [{ name: 'Ammar Ansari' }],
  openGraph: { type: 'website' },
  twitter: { card: 'summary_large_image' },
  other: { 'theme-color': '#08070b' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable} data-scroll-behavior='smooth'>
      <body className={inter.className}>
        <div className='flex flex-col relative z-0'>
          <main className='p-0'>{children}</main>

          <Footer className='absolute bottom-0 w-full' />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

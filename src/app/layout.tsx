import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/navbar/navbar';
import HashScroll from '@/components/hash-scroll';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-body',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
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
    <html lang='en' className={`${dmSans.variable} ${sora.variable}`} data-scroll-behavior='smooth'>
      <body className={dmSans.className}>
        <div className='relative z-0 h-dvh overflow-y-auto snap-y snap-mandatory'>
          <a
            href='#main-content'
            className='sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:rounded-base focus:text-sm focus:font-medium'
          >
            Skip to content
          </a>
          <div className='sticky top-0 z-20 h-0'>
            <Navbar />
          </div>
          <main id='main-content' className='p-0'>
            {children}
          </main>
        </div>
        <HashScroll />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

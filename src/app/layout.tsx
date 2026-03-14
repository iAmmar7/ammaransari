import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/navbar/navbar';
import HashScroll from '@/components/hash-scroll';
import { PersonJsonLd, WebSiteJsonLd } from '@/components/json-ld';
import { site } from '@/data/site';
import './globals.css';

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
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/manifest.json',
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
        <PersonJsonLd />
        <WebSiteJsonLd />
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

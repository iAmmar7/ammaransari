/* eslint-disable @next/next/no-page-custom-font */
// FIXME: Fix the font loading to resolve the ESLint warning
import type { Metadata } from 'next';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

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
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=optional'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

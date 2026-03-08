import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'optional',
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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

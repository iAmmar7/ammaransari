import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ammar Ansari - Software Engineer',
  description: 'Personal portfolio of Ammar Ansari, Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}

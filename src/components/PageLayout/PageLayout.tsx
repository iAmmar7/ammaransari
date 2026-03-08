'use client';

import { motion } from 'motion/react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  tagline: string;
  summary?: string;
  maxWidth?: string;
  children: React.ReactNode;
}

export default function PageLayout({
  tagline,
  summary,
  maxWidth = 'max-w-4xl',
  children,
}: PageLayoutProps) {
  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <Navbar />
      <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto'>
        <div className='text-sm sm:text-base relative z-10 h-full py-5 px-0'>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{
              y: 0,
              transition: { ease: 'easeInOut', duration: 0.5 },
            }}
            viewport={{ once: false }}
            className={`my-0 mx-auto py-0 px-5 relative ${maxWidth}`}
          >
            <div className='mb-5'>
              <h1 className='text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-linear-to-r from-accent to-highlight text-center sm:text-left'>
                {tagline}
              </h1>
              {summary && <p className='text-muted text-sm text-center sm:text-left'>{summary}</p>}
            </div>
            {children}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'motion/react';

import Footer from '@/components/footer';
import Button from '@/components/ui/button';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.6 },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 12, stiffness: 200 },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: 'spring' as const, damping: 12, stiffness: 200 },
  },
};

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto grid relative'>
        <div className='flex flex-col gap-y-2 items-center sm:justify-center mt-10 md:mt-0 px-4'>
          <div className='flex flex-col gap-y-2 items-center'>
            <motion.h1
              variants={container}
              initial='hidden'
              animate='visible'
              className='flex overflow-hidden flex-wrap text-7xl sm:text-9xl font-display font-bold leading-[1.2] sm:leading-[1.1] mb-2 sm:mb-5'
            >
              {[4, 0, 4].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className={clsx(
                    'relative',
                    letter
                      ? 'text-accent'
                      : 'text-foreground -top-3 animate-pulse transform rotate-12'
                  )}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <p className='text-muted text-base md:text-md mb-6 text-center'>
              Whoops! It seems like you are lost.
            </p>
            <div className='flex gap-2'>
              <Link href='/' title='View home page'>
                <Button>Go to home</Button>
              </Link>
              <Link href='/#contact' title='Contact Ammar Ansari'>
                <Button type='secondary' className='border border-accent'>
                  Contact me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 right-0 h-40 w-40 sm:h-72 sm:w-72 md:h-96 md:w-96'>
          <div className='relative h-full'>
            <Image
              src='https://framerusercontent.com/images/p11yBuLiUWx3p905Pw2W33JBtEM.gif'
              alt='404 guy'
              priority
              fill
              sizes='(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw'
              quality={100}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

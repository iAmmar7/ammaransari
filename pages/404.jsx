import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import Meta from '../components/Meta';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.6 },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

function Custom404(props) {
  return (
    <Fragment>
      <Meta {...props} />

      <div className='flex flex-col min-h-screen relative z-0'>
        <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
        <Navbar />
        <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto grid relative'>
          <div className='flex flex-col gap-y-2 items-center sm:justify-center mt-10 md:mt-0 px-4'>
            <div className='flex flex-col gap-y-2 items-center'>
              <motion.h1
                variants={container}
                initial='hidden'
                animate='visible'
                className='flex overflow-hidden flex-wrap text-7xl sm:text-9xl font-display font-bold leading-[1.2] sm:leading-[1.1] mb-2 sm:mb-5'
              >
                {[4, 0, 4].map((letter, index) => {
                  return (
                    <motion.span
                      key={index}
                      variants={child}
                      className={clsx(
                        'relative',
                        letter
                          ? 'text-secondary'
                          : 'text-primary -top-3 animate-pulse transform rotate-12'
                      )}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </motion.h1>
              <p className='text-muted text-base md:text-md mb-6 text-center'>
                Whoops! It seems like you are lost.
              </p>
              <div className='flex gap-2'>
                <Link href='/' title='View home page'>
                  <Button>Go to home</Button>
                </Link>
                <Link href='/#contact' title='Contact Ammar Ansari'>
                  <Button type='secondary' className='border border-secondary'>
                    Contact me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 h-[10rem] w-[10rem] sm:h-[18rem] sm:w-[18rem] md:h-[24rem] md:w-[24rem]'>
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
    </Fragment>
  );
}

export default Custom404;

export async function getStaticProps() {
  return {
    props: {
      title: '404 - Ammar Ansari',
      description: 'A constant learner striving for perfection',
      image: '/images/home-meta.jpeg',
    },
  };
}

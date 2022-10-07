import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';

import Meta from '../components/Meta';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import clsx from 'clsx';

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
        <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto grid'>
          <div className='flex flex-col gap-y-2 items-center justify-center px-4'>
            <motion.h1
              variants={container}
              initial='hidden'
              animate='visible'
              className='flex overflow-hidden flex-wrap text-3xl sm:text-9xl font-display font-bold leading-[1.1] mt-4 sm:mt-2 mb-2 sm:mb-5'
            >
              {[4, 0, 4].map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    variants={child}
                    className={clsx(
                      'relative',
                      letter ? 'text-secondary' : 'text-primary -top-3 animate-pulse transform rotate-12'
                    )}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h1>
            <p className='text-muted md:text-lg mb-6 text-center'>Whoops! It seems like you are lost.</p>
            <div className='flex gap-2'>
              <Link href='/' passHref>
                <Button as='a' title='View home page'>
                  Go to home
                </Button>
              </Link>
              <Link href='/#contact' passHref>
                <Button as='a' title='Contact Ammar Ansari' type='secondary' className='border border-secondary'>
                  Contact me
                </Button>
              </Link>
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

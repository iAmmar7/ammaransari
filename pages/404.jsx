import Lottie from 'lottie-react';
import Link from 'next/link';
import { Fragment } from 'react';

import { Meta, Footer, Navbar, Button } from '../components';
import icon404 from '../public/icons/404.json';

function Custom404(props) {
  return (
    <Fragment>
      <Meta {...props} />

      <div className='flex flex-col min-h-screen relative z-0'>
        <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
        <Navbar />
        <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto grid'>
          <div className='flex flex-col gap-y-2 items-center justify-center px-4'>
            <Lottie className='h-auto' animationData={icon404} />
            <p className='text-muted md:text-lg mb-6 tracking-wider text-center'>Whoops! It seems like you are lost.</p>
            <Link href='/' passHref>
              <Button as='a' title='View home page'>
                Go to home
              </Button>
            </Link>
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

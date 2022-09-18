import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { Icon, Button, Footer } from '../components';

function Home(props) {
  const { children } = props;
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScrollToTop(true);
      if (window.scrollY <= 200) setShowScrollToTop(false);
    };

    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-col relative z-0'>
      <main className='p-0'>{children}</main>
      <AnimatePresence>
        {showScrollToTop && (
          <Link href='#home' passHref scroll={false}>
            <motion.div
              key='top-navigator'
              className='fixed bottom-5 right-5 z-20'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.6 } }}
            >
              <Button type='secondary' rounded={true} size='sm'>
                <Icon icon='ri-arrow-up-s-line' className='text-inherit text-xl md:text-2xl' />
              </Button>
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
      <Footer className='absolute bottom-0 w-full' />
    </div>
  );
}

export default Home;

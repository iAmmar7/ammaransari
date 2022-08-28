import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { Icon } from '../components';

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
            <motion.a
              key='top-navigator'
              className='fixed bottom-5 right-5 bg-secondary rounded-full py-2 px-3 no-underline z-20 bg-gradient-to-b from-muted to-muted bg-top bg-repeat-x bg-[length:0px_0px] transition-all duration-md ease-base hover:bg-[length:4px_50px] group'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.6 } }}
            >
              <Icon
                icon='ri-arrow-up-s-line'
                className='text-secondary text-xl md:text-2xl group-hover:text-primary transition-colors duration-md ease-base'
              />
            </motion.a>
          </Link>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;

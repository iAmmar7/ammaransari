'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiArrowUpSLine } from '@remixicon/react';

import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key='top-navigator'
          className='fixed bottom-5 right-5 z-20'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ x: 100, opacity: 0, transition: { duration: 0.6 } }}
          title='Scroll to top'
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Button variant='secondary' rounded size='sm'>
            <Icon icon={RiArrowUpSLine} className='text-inherit text-xl md:text-2xl' />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

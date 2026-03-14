'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export default function DetailsWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: 'easeInOut', duration: 0.5, delay: 0.6 },
      }}
      viewport={{ once: true }}
      className='mx-auto w-full px-4 md:px-0 md:w-10/12 max-w-6xl relative'
    >
      {children}
    </motion.section>
  );
}

'use client';

import { motion, AnimatePresence } from 'motion/react';
import type { ReactNode } from 'react';

interface CollapseProps {
  initial?: boolean;
  show?: boolean;
  children: ReactNode;
}

export default function Collapse({ initial = false, show = false, children }: CollapseProps) {
  return (
    <AnimatePresence initial={initial}>
      {show && (
        <motion.div
          key='content'
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.5 }}
          className='overflow-hidden w-full'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

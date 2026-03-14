'use client';

import { memo } from 'react';
import { motion } from 'motion/react';
import { RiStarFill, RiStarLine, RiStarHalfLine } from '@remixicon/react';

interface StarProps {
  delay?: number;
  fill?: boolean;
  half?: boolean;
  hovered?: boolean;
}

const starVariants = {
  initial: { scale: 0 },
  animate: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.25,
      type: 'spring',
      stiffness: 175,
    },
  }),
};

function Star({ delay = 1, fill = true, half = false, hovered = false }: StarProps) {
  let StarIcon = RiStarFill;
  if (!fill) StarIcon = RiStarLine;
  if (half) StarIcon = RiStarHalfLine;

  return (
    <motion.span
      className='inline-flex'
      initial='initial'
      whileInView='animate'
      variants={{
        ...starVariants,
        animate: (i: number) => ({
          scale: hovered ? 1.4 : 1,
          transition: {
            delay: i * 0.04,
            duration: 0.25,
            type: 'spring',
            stiffness: 175,
          },
        }),
      }}
      viewport={{ once: true }}
      custom={delay}
    >
      <StarIcon size='1em' className='inline-block' />
    </motion.span>
  );
}

export default memo(Star);

'use client';

import { memo } from 'react';
import { motion } from 'motion/react';

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
  let icon = 'ri-star-fill';
  if (!fill) icon = 'ri-star-line';
  if (half) icon = 'ri-star-half-line';

  return (
    <motion.i
      className={icon}
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
    />
  );
}

export default memo(Star);

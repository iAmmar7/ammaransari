'use client';

import { motion } from 'motion/react';
import type { ElementType } from 'react';

import { isEmpty } from '@/lib/utils';

interface WavyTextProps {
  text: string;
  as?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 12, stiffness: 200 },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: 'spring' as const, damping: 12, stiffness: 200 },
  },
};

export default function WavyText({
  text,
  as = 'p',
  delay = 0,
  duration = 0.05,
  className,
  ...otherProps
}: WavyTextProps) {
  const letters = Array.from(text);

  if (isEmpty(letters)) return null;

  const Component = motion[as as keyof typeof motion] as ElementType;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex overflow-hidden flex-wrap ${className ?? ''}`}
      {...otherProps}
    >
      {letters.map((letter: string, index: number) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </Component>
  );
}

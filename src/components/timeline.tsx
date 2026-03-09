'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface TimelineProps {
  date?: string;
  title?: ReactNode;
  subHeading?: ReactNode;
  children?: ReactNode;
}

export default function Timeline({ date, title, subHeading, children }: TimelineProps) {
  return (
    <div className='relative block items-start rounded-full border-white/20 first:mt-0 md:flex'>
      {date ? (
        <motion.span
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
          exit={{ x: -200, opacity: 0 }}
          viewport={{ once: true }}
          className='absolute top-0 left-12 mt-7 mr-12 min-w-40 rounded-full bg-surface-secondary p-1 text-center text-sm leading-none md:relative md:left-0'
        >
          {date}
        </motion.span>
      ) : (
        <span className='absolute top-0 left-12 mt-7 mr-12 min-w-40 rounded-full bg-transparent p-1 text-center text-sm leading-none md:relative md:left-0' />
      )}
      <div
        className={clsx('relative border-l-4 border-white/20 pt-16 pl-12 md:pt-6', !date && 'pt-6')}
      >
        <span className='absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white/20'>
          <span className='absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white/20 bg-surface' />
          <span
            className={clsx(
              'absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white/20',
              date && ' md:left-1/2 md:w-20 md:-translate-x-1/2'
            )}
          />
        </span>
        {title && <h5 className='mb-0 font-bold text-lg'>{title}</h5>}
        {subHeading && <p className='mb-2 max-w-fit'>{subHeading}</p>}
        {children}
      </div>
    </div>
  );
}

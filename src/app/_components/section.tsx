'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  id: string;
  footer?: React.ReactNode;
}

export default function Section({ title, description, children, id, footer }: SectionProps) {
  return (
    <section id={id} className='h-dvh snap-start relative z-0 overflow-hidden'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='absolute inset-x-0 top-0 h-16 -z-5 bg-linear-to-b from-surface/80 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 h-16 -z-5 bg-linear-to-t from-surface/80 to-transparent' />
      <div className={clsx('h-dvh flex flex-col pt-32 md:pt-28', footer ? 'pb-0' : 'pb-4')}>
        <div className='flex-1 flex flex-col justify-center'>
          <div className='mx-auto container relative'>
            <div className='px-0 my-0 overflow-hidden flex flex-col items-center'>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { ease: 'easeInOut', duration: 0.5 },
                }}
                viewport={{ once: false }}
                className='my-0 mx-auto w-full max-w-3xl py-0 px-4 sm:px-5'
              >
                {title && (
                  <h1
                    className={clsx(
                      'text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-linear-to-r from-accent to-highlight text-center',
                      description ? 'mb-0' : 'mb-5'
                    )}
                  >
                    {title}
                  </h1>
                )}
                {description && (
                  <p className='text-muted text-sm text-center mb-5'>{description}</p>
                )}
                {children}
              </motion.div>
            </div>
          </div>
        </div>
        {footer}
      </div>
    </section>
  );
}

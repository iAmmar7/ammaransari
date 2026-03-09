'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';

import Navbar from '@/components/navbar/navbar';
import Icon from '@/components/ui/icon';
import { useFullPageScroll } from './full-page-scroll';

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  id: string;
  showNext?: boolean;
  footer?: React.ReactNode;
}

export default function Section({ title, description, children, id, showNext = true, footer }: SectionProps) {
  const { goNext } = useFullPageScroll();

  return (
    <section
      id={id}
      data-section
      className="h-full overflow-y-auto scrollbar-none relative z-0"
    >
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-home-gradient opacity-40" />
      <div className="min-h-full flex flex-col pt-32 md:pt-28 pb-4">
        <div className="flex-1 flex flex-col justify-center">
          <div className="mx-auto container relative">
            <div className="px-0 my-0 overflow-hidden flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { ease: 'easeInOut', duration: 0.5 },
                }}
                viewport={{ once: false }}
                className="my-0 mx-auto max-w-3xl py-0 px-4 sm:px-5"
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
                  <p className="text-muted text-sm text-center mb-5 sm:text-left">{description}</p>
                )}
                {children}
              </motion.div>
            </div>
          </div>
        </div>
        {showNext && (
          <div className="text-center text-muted pb-4 sm:pb-6">
            <button
              onClick={goNext}
              className="appearance-none bg-transparent border-none cursor-pointer group"
              title="Move to next section"
            >
              <span className="inline-flex flex-row-reverse gap-x-1">
                <span className="group-hover:text-accent text-sm text-muted transition duration-200">
                  More
                </span>
                <Icon
                  icon="ri-arrow-down-line"
                  className="animate-bounce mt-0.5 group-hover:text-accent text-muted transition duration-200"
                />
              </span>
            </button>
          </div>
        )}
        {footer}
      </div>
    </section>
  );
}

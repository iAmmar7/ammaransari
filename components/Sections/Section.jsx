import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Navbar from '../Navbar/Navbar';
import Icon from '../Icon/Icon';

function Section(props) {
  const { title, description, children, id, next } = props;

  return (
    <section
      id={id}
      className='min-h-screen overflow-hidden flex flex-col justify-center relative z-0 py-32 md:py-28 snap-always snap-start'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Navbar />
      </motion.div>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='mx-auto container relative'>
        <div className='px-0 my-0 overflow-hidden flex flex-col items-center'>
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { ease: 'easeInOut', duration: 0.5 },
            }}
            viewport={{ once: false }}
            className='my-0 mx-auto max-w-3xl py-0 px-4 sm:px-5'
          >
            {title && (
              <h1
                className={clsx(
                  'text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-secondary to-tertiary text-center',
                  description ? 'mb-0' : 'mb-5'
                )}
              >
                {title}
              </h1>
            )}
            {description && <p className='text-muted text-sm text-center mb-5 sm:text-left'>{description}</p>}
            {children}
          </motion.div>
        </div>
      </div>
      {next && (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
          <div className='absolute inset-x-0 top-auto bottom-4 sm:bottom-8 w-full justify-between text-center text-muted'>
            <Link href={`#${next}`} scroll={false}>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='inline-flex flex-row-reverse gap-x-2 cursor-pointer group'
                title='Move to next section'
              >
                <span className='group-hover:text-secondary'>More</span>
                <Icon icon='ri-arrow-down-line' className='animate-bounce mt-[2px] group-hover:text-secondary' />
              </motion.a>
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Section;

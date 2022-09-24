import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Navbar from '../Navbar/Navbar';
import Icon from '../Icon/Icon';

function Section(props) {
  const { title, description, children, id, navViewAmount = 1 } = props;
  const { ref, inView } = useInView({
    threshold: navViewAmount,
  });

  return (
    <section id={id} className='min-h-screen overflow-hidden flex flex-col justify-center relative z-0 py-32 md:py-28'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: inView ? 1 : 0 }} viewport={{ once: false }}>
        <Navbar />
      </motion.div>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='mx-auto container relative' ref={ref}>
        <div className='px-0 my-0 overflow-hidden flex flex-col items-center'>
          <div className='my-0 mx-auto max-w-3xl py-0 px-0 sm:px-5'>
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
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: inView ? 1 : 0 }} viewport={{ once: false }}>
        <div className='absolute inset-x-0 top-auto bottom-4 sm:bottom-8 w-full justify-between text-center text-muted'>
          <Link href='#about' scroll={false}>
            <a className='inline-flex flex-row-reverse gap-x-2 cursor-pointer group'>
              <span className='group-hover:text-secondary'>More</span>
              <Icon icon='ri-arrow-down-line' className='animate-bounce mt-[2px] group-hover:text-secondary' />
            </a>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Section;

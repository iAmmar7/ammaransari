import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Navbar from '../Navbar/Navbar';

function Section(props) {
  const { title, description, children, footer, id, navViewAmount = 1 } = props;
  const { ref, inView } = useInView({
    threshold: navViewAmount,
  });

  return (
    <section
      id={id}
      className='min-h-screen overflow-hidden flex flex-col justify-center relative snap-start py-32 md:py-28'
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: inView ? 1 : 0 }} viewport={{ once: false }}>
        <Navbar />
      </motion.div>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative' ref={ref}>
        {title && (
          <h1
            className={clsx(
              'text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-secondary to-tertiary text-center sm:text-left',
              description ? 'mb-0' : 'mb-5'
            )}
          >
            {title}
          </h1>
        )}
        {description && <p className='text-muted text-sm text-left mb-5 sm:text-left'>{description}</p>}
        {children}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: inView ? 1 : 0 }} viewport={{ once: false }}>
        {footer}
      </motion.div>
    </section>
  );
}

export default Section;

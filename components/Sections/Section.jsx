import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Navbar from '../Navbar/Navbar';

function Section(props) {
  const { children, footer, id } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <section
      id={id}
      ref={ref}
      className='min-h-screen overflow-hidden flex flex-col justify-center relative snap-start py-28'
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: isInView ? 1 : 0 }}>
        <Navbar />
      </motion.div>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative'>{children}</div>
      {footer}
    </section>
  );
}

export default Section;

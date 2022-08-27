import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Navbar from '../Navbar/Navbar';

function Section(props) {
  const { children, footer, id, navViewAmount = 1 } = props;
  const { ref, inView } = useInView({
    threshold: navViewAmount,
  });

  return (
    <section id={id} className='min-h-screen overflow-hidden flex flex-col justify-center relative snap-start py-32'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: inView ? 1 : 0 }} viewport={{ once: false }}>
        <Navbar />
      </motion.div>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative' ref={ref}>
        {children}
      </div>
      {footer}
    </section>
  );
}

export default Section;

import { motion } from 'framer-motion';

const starVariants = {
  initial: {
    scale: 0,
  },
  animate: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.25,
      type: 'spring',
      stiffness: 175,
    },
  }),
  exit: (i) => ({
    scale: 0,
    transition: {
      duration: 0.25,
      delay: 0.2 - i * 0.04,
    },
  }),
};

function Star(props) {
  const { delay = 1, fill = true, half = false } = props;

  let icon = 'ri-star-fill';
  if (!fill) icon = 'ri-star-line';
  if (half) icon = 'ri-star-half-line';

  return (
    <motion.i
      className={icon}
      initial='initial'
      whileInView='animate'
      exit='exit'
      variants={starVariants}
      viewport={{ once: true }}
      custom={delay}
    />
  );
}

export default Star;

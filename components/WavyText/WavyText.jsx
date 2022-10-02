import { motion } from 'framer-motion';

import { isEmpty } from '../../lib/utils';

function WavyText(props) {
  const { text, as, delay = 0, duration = 0.05, className, ...otherProps } = props;
  const letters = Array.from(text);

  if (isEmpty(letters)) return null;

  const Component = motion[as] ?? motion.p;

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Component
      variants={container}
      initial='hidden'
      animate='visible'
      className={'flex overflow-hidden flex-wrap' + ` ${className}`}
      {...otherProps}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </Component>
  );
}

export default WavyText;

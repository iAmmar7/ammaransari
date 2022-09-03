import { motion, AnimatePresence } from 'framer-motion';

function Collapse(props) {
  const { initial = false, show = false, children, ...otherProps } = props;

  return (
    <AnimatePresence initial={initial}>
      {show && (
        <motion.div
          key='content'
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.5 }}
          className='overflow-hidden w-full'
          {...otherProps}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Collapse;

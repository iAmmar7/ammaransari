// import { motion } from 'framer-motion';

import { useMemo } from 'react';
import Star from '../Star/Star';

const maxRatings = 5;

const Ratings = (props) => {
  const { ratings = 0 } = props;

  const stars = useMemo(() => {
    const starsArray = [];
    const dec = ratings % 1;
    const integ = ratings - dec;
    for (let i = 0; i < integ; i++) starsArray.push({ id: i + 1, fill: true, half: false });
    if (dec !== 0) starsArray.push({ id: starsArray.length + 1, fill: false, half: true });
    if (starsArray.length < maxRatings) {
      const rem = maxRatings - starsArray.length;
      for (let i = 0; i < rem; i++) starsArray.push({ id: starsArray.length + 1, fill: false, half: false });
    }
    return starsArray;
  }, [ratings]);

  return (
    <div className='w-full h-full'>
      <div className='flex text-2xl text-secondary'>
        {stars.map(({ id, fill, half }) => (
          // <motion.div className='relative w-14 my-0 mx-4 grid place-items-center' key={i}>
          <Star key={id} delay={id} fill={fill} half={half} />
          // </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;

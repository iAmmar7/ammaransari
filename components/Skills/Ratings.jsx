import { memo, useMemo } from 'react';
import Star from './Star';

const maxRatings = 5;

const Ratings = memo((props) => {
  const { ratings = 0, hovered = false } = props;

  const stars = useMemo(() => {
    const starsArray = [];
    const dec = ratings % 1;
    const integ = ratings - dec;
    for (let i = 0; i < integ; i++) starsArray.push({ id: i + 1, fill: true, half: false });
    if (dec !== 0) {
      starsArray.push({ id: starsArray.length + 1, fill: false, half: true, last: true });
    } else {
      starsArray[starsArray.length - 1] = { ...starsArray[starsArray.length - 1], last: true };
    }
    if (starsArray.length < maxRatings) {
      const rem = maxRatings - starsArray.length;
      for (let i = 0; i < rem; i++) starsArray.push({ id: starsArray.length + 1, fill: false, half: false });
    }
    return starsArray;
  }, [ratings]);

  return (
    <div className='w-full h-full'>
      <div className='flex text-xl text-secondary'>
        {stars.map(({ id, fill, half, last }) => (
          <Star key={id} delay={id} fill={fill} half={half} hovered={last && hovered} />
        ))}
      </div>
    </div>
  );
});

Ratings.displayName = 'Ratings';

export default Ratings;

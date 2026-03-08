'use client';

import { memo, useMemo } from 'react';
import Star from './Star';

const MAX_RATINGS = 5;

interface StarData {
  id: number;
  fill: boolean;
  half: boolean;
  last?: boolean;
}

interface StarRatingProps {
  ratings?: number;
  hovered?: boolean;
}

const StarRating = memo(function StarRating({ ratings = 0, hovered = false }: StarRatingProps) {
  const stars = useMemo<StarData[]>(() => {
    const starsArray: StarData[] = [];
    const dec = ratings % 1;
    const integ = ratings - dec;

    for (let i = 0; i < integ; i++) {
      starsArray.push({ id: i + 1, fill: true, half: false });
    }

    if (dec !== 0) {
      starsArray.push({ id: starsArray.length + 1, fill: false, half: true, last: true });
    } else if (starsArray.length > 0) {
      starsArray[starsArray.length - 1] = { ...starsArray[starsArray.length - 1], last: true };
    }

    const remaining = MAX_RATINGS - starsArray.length;
    for (let i = 0; i < remaining; i++) {
      starsArray.push({ id: starsArray.length + 1, fill: false, half: false });
    }

    return starsArray;
  }, [ratings]);

  return (
    <div className='w-full h-full'>
      <div className='flex text-xl text-accent'>
        {stars.map(({ id, fill, half, last }) => (
          <Star key={id} delay={id} fill={fill} half={half} hovered={last === true && hovered} />
        ))}
      </div>
    </div>
  );
});

export default StarRating;

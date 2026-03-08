'use client';

import { useState, useEffect } from 'react';

interface Dimensions {
  width: number | null;
  height: number | null;
}

function getDimensions(): Dimensions {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
}

export default function useDimensions(): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>(() => {
    if (typeof window === 'undefined') return { width: null, height: null };
    return getDimensions();
  });

  useEffect(() => {
    const handleSetDimensions = () => setDimensions(getDimensions());
    window.addEventListener('resize', handleSetDimensions);

    return () => {
      window.removeEventListener('resize', handleSetDimensions);
    };
  }, []);

  return dimensions;
}

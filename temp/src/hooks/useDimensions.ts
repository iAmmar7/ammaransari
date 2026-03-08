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
  const [dimensions, setDimensions] = useState<Dimensions>({ width: null, height: null });

  useEffect(() => {
    setDimensions(getDimensions());

    const handleSetDimensions = () => setDimensions(getDimensions());
    window.addEventListener('resize', handleSetDimensions);

    return () => {
      window.removeEventListener('resize', handleSetDimensions);
    };
  }, []);

  return dimensions;
}

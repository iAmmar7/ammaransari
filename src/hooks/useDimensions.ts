'use client';

import { useEffect, useRef, useState } from 'react';

interface Dimensions {
  width: number | null;
  height: number | null;
}

const serverDimensions: Dimensions = { width: null, height: null };

export default function useDimensions(): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>(serverDimensions);
  const ref = useRef(typeof document !== 'undefined' ? document.documentElement : null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDimensions({ width, height });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return dimensions;
}

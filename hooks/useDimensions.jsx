import { useState, useEffect } from 'react';

function getDimensions() {
  const { innerWidth, innerHeight } = window;
  return {
    width: innerWidth,
    height: innerHeight,
  };
}

function useDimensions() {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

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

export default useDimensions;

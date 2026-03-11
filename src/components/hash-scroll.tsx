'use client';

import { useEffect } from 'react';

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView();
    }
  }, []);

  return null;
}

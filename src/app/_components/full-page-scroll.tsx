'use client';

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  Children,
  type ReactNode,
} from 'react';
import { motion } from 'motion/react';

interface FullPageScrollContextValue {
  currentIndex: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  totalSections: number;
}

const FullPageScrollContext = createContext<FullPageScrollContextValue | null>(null);

export function useFullPageScroll() {
  const ctx = useContext(FullPageScrollContext);
  if (!ctx) throw new Error('useFullPageScroll must be used within FullPageScroll');
  return ctx;
}

interface FullPageScrollProps {
  children: ReactNode;
  sectionIds: string[];
}

export default function FullPageScroll({ children, sectionIds }: FullPageScrollProps) {
  const sections = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      if (index < 0 || index >= sectionIds.length) return;
      if (index === currentIndexRef.current) return;
      isAnimating.current = true;
      currentIndexRef.current = index;
      setCurrentIndex(index);
    },
    [sectionIds.length]
  );

  const goNext = useCallback(() => goTo(currentIndexRef.current + 1), [goTo]);
  const goPrev = useCallback(() => goTo(currentIndexRef.current - 1), [goTo]);

  // Sync URL hash on section change
  useEffect(() => {
    const id = sectionIds[currentIndex];
    if (id) window.history.replaceState(null, '', `#${id}`);
  }, [currentIndex, sectionIds]);

  // Handle initial hash + external hash changes (e.g. navbar Contact link)
  useEffect(() => {
    const navigateToHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const index = sectionIds.indexOf(hash);
        if (index >= 0 && index !== currentIndexRef.current) {
          currentIndexRef.current = index;
          setCurrentIndex(index);
        }
      }
    };

    navigateToHash();
    window.addEventListener('hashchange', navigateToHash);
    return () => window.removeEventListener('hashchange', navigateToHash);
  }, [sectionIds]);

  // Lock body scroll + register all input handlers
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';

    const handleWheel = (e: WheelEvent) => {
      const sectionEl = (e.target as HTMLElement).closest('[data-section]') as HTMLElement | null;

      if (sectionEl) {
        const { scrollTop, scrollHeight, clientHeight } = sectionEl;

        if (scrollHeight > clientHeight + 1) {
          const atTop = scrollTop <= 0;
          const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
          if (e.deltaY > 0 && !atBottom) return;
          if (e.deltaY < 0 && !atTop) return;
        }
      }

      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return;
      if (e.deltaY > 0) goNext();
      else goPrev();
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 80) return;
      if (diff > 0) goNext();
      else goPrev();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(sectionIds.length - 1);
          break;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goNext, goPrev, goTo, sectionIds.length]);

  return (
    <FullPageScrollContext.Provider
      value={{ currentIndex, goTo, goNext, goPrev, totalSections: sectionIds.length }}
    >
      <div className='fixed inset-0 overflow-hidden'>
        <motion.div
          animate={{ y: `-${currentIndex * 100}dvh` }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            isAnimating.current = false;
          }}
        >
          {sections.map((child, i) => (
            <div key={sectionIds[i]} className='h-dvh w-full overflow-hidden'>
              {child}
            </div>
          ))}
        </motion.div>

        <nav
          className='fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-3'
          aria-label='Page sections'
        >
          {sectionIds.map((id, i) => (
            <button
              key={id}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ease-base cursor-pointer ${
                i === currentIndex ? 'bg-accent scale-150' : 'bg-white/20 hover:bg-white/50'
              }`}
              title={id.charAt(0).toUpperCase() + id.slice(1)}
              aria-label={`Go to ${id} section`}
              aria-current={i === currentIndex ? 'true' : undefined}
            />
          ))}
        </nav>
      </div>
    </FullPageScrollContext.Provider>
  );
}

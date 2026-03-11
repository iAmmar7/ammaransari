'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, LayoutGroup } from 'motion/react';

import Logo from '@/components/logo';
import NavItem from './nav-item';
import Icon from '@/components/ui/icon';
import { NAV_LINKS } from './constants';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  return (
    <LayoutGroup>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='flex items-center justify-center text-xs min-h-15 w-full flex-wrap relative mt-2 sm:mt-0 bg-background/80 backdrop-blur-md'
      >
        <Logo />
        <div className='relative flex-1 order-2 basis-full sm:basis-auto overflow-hidden'>
          <nav
            ref={navRef}
            className='text-center overflow-x-auto overflow-y-hidden scrollbar-none'
          >
            <ul className='inline-flex relative md:justify-around'>
              {NAV_LINKS.map((page) => (
                <NavItem key={page.name} {...page} />
              ))}
            </ul>
          </nav>
          <button
            type='button'
            aria-label='Scroll for more'
            onClick={() => navRef.current?.scrollBy({ left: 100, behavior: 'smooth' })}
            className={`absolute right-0 inset-y-0 flex items-center pl-4 pr-1 bg-linear-to-l from-surface-muted from-60% to-transparent transition-opacity duration-300 sm:hidden ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Icon icon='ri-arrow-right-s-line' className='text-muted text-base' />
          </button>
        </div>
        <div className='flex item-center ml-auto mr-1 sm:mr-3 sm:order-3'>
          <a
            className='appearance-none bg-transparent rounded-base text-sm outline-0 py-2 px-3 no-underline cursor-pointer transition-all duration-500 ease-base hover:bg-surface-muted hover:opacity-100 inline-flex items-center justify-center gap-x-1 group overflow-hidden'
            download
            role='button'
            href='/doc/AmmarAnsari_Resume.pdf'
            title='Download resume'
          >
            <div className='w-fit grid'>
              <div className='[grid-area:1/1] flex items-center justify-center transition ease-in-out translate-y-0 duration-300 group-hover:translate-y-10'>
                <Icon
                  icon='ri-download-line'
                  className='text-muted group-hover:text-foreground transition-all duration-500 ease-base'
                />
              </div>
              <div className='[grid-area:1/1] flex items-center justify-center transition ease-in-out -translate-y-10 duration-300 group-hover:translate-y-0'>
                <Icon
                  icon='ri-download-line'
                  className='text-muted group-hover:text-foreground transition-all duration-500 ease-base'
                />
              </div>
            </div>
            <span className='text-muted group-hover:text-foreground transition-all duration-500 ease-base'>
              Resume
            </span>
          </a>
        </div>
      </motion.header>
    </LayoutGroup>
  );
}

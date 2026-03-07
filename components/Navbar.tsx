'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';

const NAV_LINKS = [
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className='fixed top-0 z-50 w-full border-b border-border/50 bg-bg/80 backdrop-blur-xl'>
      <Container className='flex h-14 items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='font-display text-lg tracking-tight text-fg transition-colors hover:text-accent'
        >
          ammar<span className='text-accent'>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className='hidden items-center gap-1 sm:flex'>
          {NAV_LINKS.map(({ name, path }) => {
            const isActive = path === '/#contact' ? false : pathname.startsWith(path);
            return (
              <Link
                key={name}
                href={path}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-fg-muted hover:text-fg hover:bg-bg-raised'
                }`}
              >
                {name}
              </Link>
            );
          })}
          <a
            href='/doc/AmmarAnsari_Resume.pdf'
            download
            className='ml-2 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-border-hover hover:text-fg'
          >
            <svg
              className='h-3.5 w-3.5'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className='inline-flex items-center justify-center rounded-md p-2 text-fg-muted transition-colors hover:bg-bg-raised hover:text-fg sm:hidden'
          aria-label='Toggle menu'
          aria-expanded={mobileOpen}
        >
          <svg
            className='h-5 w-5'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {mobileOpen ? (
              <>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </>
            ) : (
              <>
                <line x1='4' y1='8' x2='20' y2='8' />
                <line x1='4' y1='16' x2='20' y2='16' />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className='border-t border-border/50 bg-bg/95 backdrop-blur-xl sm:hidden'>
          <Container className='flex flex-col gap-1 py-4'>
            {NAV_LINKS.map(({ name, path }) => {
              const isActive = path === '/#contact' ? false : pathname.startsWith(path);
              return (
                <Link
                  key={name}
                  href={path}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-accent bg-accent-muted'
                      : 'text-fg-muted hover:text-fg hover:bg-bg-raised'
                  }`}
                >
                  {name}
                </Link>
              );
            })}
            <a
              href='/doc/AmmarAnsari_Resume.pdf'
              download
              className='mt-1 inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg hover:bg-bg-raised'
            >
              <svg
                className='h-3.5 w-3.5'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' />
                <polyline points='7 10 12 15 17 10' />
                <line x1='12' y1='15' x2='12' y2='3' />
              </svg>
              Resume
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

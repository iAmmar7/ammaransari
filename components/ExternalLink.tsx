import type { AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '', ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-hover ${className}`}
      {...props}
    >
      {children}
      <svg
        className='h-3.5 w-3.5'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M7 17L17 7' />
        <path d='M7 7h10v10' />
      </svg>
    </a>
  );
}

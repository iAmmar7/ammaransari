'use client';

import Link from 'next/link';

interface ProjectFiltersProps {
  activeSkill?: string;
}

export function ProjectFilters({ activeSkill }: ProjectFiltersProps) {
  if (!activeSkill) return null;

  return (
    <div className='mt-6 flex items-center gap-2'>
      <span className='text-sm text-fg-muted'>Filtered by:</span>
      <span className='inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-medium text-accent'>
        {activeSkill}
        <Link
          href='/projects'
          className='ml-1 text-accent/60 transition-colors hover:text-accent'
          aria-label='Clear filter'
        >
          &times;
        </Link>
      </span>
    </div>
  );
}

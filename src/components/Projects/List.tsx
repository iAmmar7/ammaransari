'use client';

import { AnimatePresence } from 'motion/react';
import clsx from 'clsx';

import { take } from '@/lib/utils';
import type { Project } from '@/types/project';
import Card from './Card';

interface ListProps {
  projects: Project[];
  count?: number;
  className?: string;
}

export default function List({ projects, count, className }: ListProps) {
  return (
    <ul className={clsx('grid grid-cols-6 gap-4 sm:gap-7', className)}>
      <AnimatePresence>
        {take(projects, count).map((proj) => (
          <Card
            key={proj.id}
            id={proj.id}
            name={proj.name}
            summary={proj.summary}
            image={proj.thumbnail}
            url={proj.url}
            code={proj.code}
            domain={proj.domain}
            tech={take(proj.technologies, 2)}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import type { Project } from '@/types';

const PAGE_SIZE = 9;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <>
      <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {shown.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Card className='flex h-full flex-col'>
              <h3 className='text-lg font-semibold text-fg'>{project.name}</h3>
              <p className='mt-1 flex-1 text-sm text-fg-muted'>{project.summary}</p>
              {project.company && (
                <p className='mt-3 text-xs text-fg-faint'>{project.company}</p>
              )}
              <div className='mt-3 flex flex-wrap gap-1.5'>
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className='rounded-md bg-bg px-2 py-0.5 text-xs text-fg-faint'
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className='rounded-md bg-bg px-2 py-0.5 text-xs text-fg-faint'>
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className='mt-8 text-center'>
          <Button variant='secondary' onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Load more projects
          </Button>
        </div>
      )}
    </>
  );
}

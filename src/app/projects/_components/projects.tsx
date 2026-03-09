'use client';

import { lazy, Suspense, useCallback, useMemo, useState } from 'react';

import useSkillFilter from '@/hooks/useSkillFilter';
import { isEmpty } from '@/lib/utils';
import projects from '@/data/projects';
import Button from '@/components/ui/button';
import ProjectListSkeleton from './skeletons/list';
import ProjectFiltersSkeleton from './skeletons/filters';

const Filters = lazy(() => import('./filters'));
const List = lazy(() => import('@/components/projects/list'));

const initialCount = 9;

function getInitialCount(): number {
  if (typeof window === 'undefined') return initialCount;
  return parseInt(sessionStorage.getItem('count') || String(initialCount));
}

export default function Projects() {
  const { filters } = useSkillFilter();
  const [count, setCount] = useState(getInitialCount);

  const handleSetCount = useCallback(() => {
    sessionStorage.setItem('count', String(count + 3));
    setCount(count + 3);
  }, [count]);

  const filteredProjects = useMemo(() => {
    if (isEmpty(filters) || isEmpty(filters[0])) return projects;
    return projects.filter((proj) => filters.some((filter) => proj.technologies.includes(filter)));
  }, [filters]);

  const currentView = useMemo(() => {
    const length = filteredProjects.length;
    let currCount = count;
    if (currCount > length) currCount = length;
    const remaining = length - currCount;
    return { visible: currCount + '/' + length, remaining };
  }, [filteredProjects, count]);

  return (
    <div>
      <Suspense fallback={<ProjectFiltersSkeleton />}>
        <Filters />
      </Suspense>
      <p className='text-sm text-muted text-right mt-2 sm:mt-4 mb-2 mr-1'>{currentView.visible}</p>
      <Suspense fallback={<ProjectListSkeleton />}>
        <List projects={filteredProjects} count={count} />
      </Suspense>
      {count < filteredProjects.length && (
        <div className='mt-10 text-center'>
          <Button type='primary' onClick={handleSetCount}>
            Load {currentView.remaining} More
          </Button>
        </div>
      )}
    </div>
  );
}

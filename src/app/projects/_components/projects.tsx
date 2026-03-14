'use client';

import { lazy, Suspense, useCallback, useMemo } from 'react';

import useSkillFilter from '@/hooks/useSkillFilter';
import useSessionStorage from '@/hooks/useSessionStorage';
import { isEmpty } from '@/lib/utils';
import projects from '@/data/projects';
import Button from '@/components/ui/button';
import ProjectListSkeleton from './skeletons/list';
import ProjectFiltersSkeleton from './skeletons/filters';

const List = lazy(() => import('@/components/projects/list'));
const Filters = lazy(() => import('./filters'));

const initialCount = 9;

export default function Projects() {
  const { filters } = useSkillFilter();
  const [count, setCount] = useSessionStorage('count', initialCount);

  const handleSetCount = useCallback(() => {
    setCount((prev) => prev + 3);
  }, [setCount]);

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
          <Button variant='primary' onClick={handleSetCount}>
            Load {currentView.remaining} More
          </Button>
        </div>
      )}
    </div>
  );
}

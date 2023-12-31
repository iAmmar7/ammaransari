import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useSkillFilter } from '../../hooks';
import { isEmpty } from '../../lib/utils';
import PROJECTS from '../../data/projects';
import Button from '../Button';
import ListSkeleton from './Skeletons/List';
import FiltersSkeleton from './Skeletons/Filters';

const Filters = dynamic(import('./Filters'), { loading: FiltersSkeleton });
const List = dynamic(import('./List'), { loading: ListSkeleton });

const initialCount = 9;

function Projects() {
  const { filters, updateFilters } = useSkillFilter();
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const COUNT_FROM_STORAGE = parseInt(sessionStorage.getItem('count') || initialCount);
    setCount(COUNT_FROM_STORAGE);
  }, []);

  const handleSetCount = useCallback(() => {
    sessionStorage.setItem('count', count + 3);
    setCount(count + 3);
  }, [count]);

  const projects = useMemo(() => {
    if (isEmpty(filters) || isEmpty(filters[0])) return PROJECTS;
    const filteredProjects = PROJECTS.filter((proj) =>
      filters.some((filter) => proj.technologies.includes(filter))
    );
    return filteredProjects;
  }, [filters]);

  const currentView = useMemo(() => {
    const length = projects.length;
    let currCount = count;
    if (currCount > length) currCount = length;
    const remaining = length - currCount;
    return { visible: currCount + '/' + length, remaining };
  }, [projects, count]);

  return (
    <div>
      <Filters filters={filters} updateFilters={updateFilters} />
      <p className='text-sm text-muted text-right mt-2 sm:mt-4 mb-2 mr-1'>{currentView.visible}</p>
      <List projects={projects} count={count} />
      {count < projects.length && (
        <div className='text-center mt-10'>
          <Button type='primary' className='ml-[51px]' onClick={handleSetCount}>
            Load {currentView.remaining} More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Projects;

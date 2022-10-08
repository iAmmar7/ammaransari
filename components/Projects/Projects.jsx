import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';

import { useSkillFilter } from '../../hooks';
import { isEmpty } from '../../lib/utils';
import PROJECTS from '../../data/projects';
import Button from '../Button';
import ListSkeleton from './Skeletons/List';
import FiltersSkeleton from './Skeletons/Filters';

const Filters = dynamic(import('./Filters'), { loading: FiltersSkeleton });
const List = dynamic(import('./List'), { loading: ListSkeleton });

function Projects() {
  const { filters, updateFilters } = useSkillFilter();
  const [count, setCount] = useState(6);

  useEffect(() => {
    const COUNT_FROM_STORAGE = parseInt(sessionStorage.getItem('count') || 6);
    setCount(COUNT_FROM_STORAGE);
  }, []);

  const handleSetCount = () => {
    sessionStorage.setItem('count', count + 3);
    setCount(count + 3);
  };

  const projects = useMemo(() => {
    if (isEmpty(filters) || isEmpty(filters[0])) return PROJECTS;
    const filteredProjects = PROJECTS.filter((proj) => filters.some((filter) => proj.technologies.includes(filter)));
    return filteredProjects;
  }, [filters]);

  return (
    <div>
      <Filters filters={filters} updateFilters={updateFilters} />
      <List projects={projects} count={count} className='mt-6 sm:mt-12' />
      {count <= projects.length && (
        <div className='text-center mt-10'>
          <Button type='primary' className='ml-[51px]' onClick={handleSetCount}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Projects;

import { useMemo, useState } from 'react';

import { useSkillFilter } from '../../hooks';
import { isEmpty } from '../../lib/utils';
import PROJECTS from '../../data/projects';
import Button from '../Button/Button';
import Filters from './Filters';
import List from './List';

function Projects() {
  const { filters, updateFilters } = useSkillFilter();
  const [count, setCount] = useState(6);

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
          <Button type='primary' className='ml-[51px]' onClick={() => setCount(count + 3)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default Projects;

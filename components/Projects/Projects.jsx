import { useState } from 'react';

import { useSkillFilter } from '../../hooks';
import { take } from '../../lib/utils';
import PROJECTS from '../../data/projects';
import Button from '../Button/Button';
import Filters from './Filters';
import Card from './Card';

function Projects() {
  const { filters, updateFilters } = useSkillFilter();
  const [count, setCount] = useState(6);

  return (
    <div>
      <Filters filters={filters} updateFilters={updateFilters} />
      <ul className='mt-12 grid grid-cols-6 gap-7' style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
        {take(PROJECTS, count).map((proj) => {
          return (
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
          );
        })}
      </ul>
      {count !== PROJECTS.length && (
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

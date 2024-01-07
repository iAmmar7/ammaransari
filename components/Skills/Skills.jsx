import { useState } from 'react';
import Link from 'next/link';

import skills from '../../data/skills';
import { capitalize, groupBy } from '../../lib/utils';
import StarRating from './Ratings';
import { hasProjectBySkillId } from '../../lib/helpers';

const groupedSkills = groupBy(skills, 'domain');

const SkillTitle = ({ title }) => (
  <div className='mb-4'>
    <h4 className='font-bold mb-1 text-lg sm:text-xl'>{title}</h4>
    <span className='relative block m-0 h-1.5 w-10 overflow-hidden rounded-full bg-secondary bg-opacity-100'>
      <span className='absolute left-0 top-0 inline-block h-full w-1.5  rounded-full bg-text-secondary' />
    </span>
  </div>
);

const DomainSection = ({ domain }) => {
  const [hovered, setHovered] = useState(null);

  if (!groupedSkills[domain]) return null;

  return (
    <div className='mb-10'>
      <SkillTitle title={capitalize(domain)} />
      <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
        {groupedSkills[domain].map(({ id, name, ratings }) => {
          if (!hasProjectBySkillId(id)) {
            return (
              <span
                key={id}
                className='md:min-w-[9rem] group'
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className='text-sm'>{name}</p>
                <StarRating ratings={ratings} hovered={hovered === id} />
              </span>
            );
          }
          return (
            <Link
              key={id}
              href={`/projects?skill=${id}`}
              className='md:min-w-[9rem] group'
              title={`View ${name} projects`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className='text-sm'>{name}</p>
              <StarRating ratings={ratings} hovered={hovered === id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

function Skills() {
  return (
    <div className='flex flex-col flex-nowrap mx-auto'>
      <DomainSection domain='web' />
      <DomainSection domain='server' />
      <DomainSection domain='mobile' />
      <DomainSection domain='databases' />
      <DomainSection domain='cloud' />
      <DomainSection domain='general' />
      <DomainSection domain='languages' />
      <DomainSection domain='softwares' />
    </div>
  );
}

export default Skills;

import { useState } from 'react';
import Link from 'next/link';

import skills from '../../data/skills';
import { capitalize, groupBy } from '../../lib/utils';
import StarRating from './Ratings';

const skillMapper = (name) => {
  switch (name) {
    case 'JavaScript':
    case 'Data Structures':
    case 'OOP':
    case 'Algorithms':
    case 'Git':
    case 'GithHub/BitBucket/GitLab':
    case 'C++':
      return '';
    case 'RESTful API':
      return 'Express JS';
    default:
      return name;
  }
};

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
        {groupedSkills[domain].map(({ name, ratings }) => {
          const query = skillMapper(name);
          return (
            <Link key={name} href={`/projects?skill=${query}`}>
              <a
                className='md:min-w-[9rem] group'
                title={`View ${query} projects`}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className='text-sm'>{name}</p>
                <StarRating ratings={ratings} hovered={hovered === name} />
              </a>
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

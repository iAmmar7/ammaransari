import skills from '../../data/skills';
import { capitalize, groupBy } from '../../lib/utils';
import StarRating from './Ratings';

const groupedSkills = groupBy(skills, 'domain');

const SkillTitle = ({ title }) => (
  <div className='mb-4'>
    <h4 className='text-xl font-bold mb-1'>{title}</h4>
    <span className='relative block m-0 h-1.5 w-10 overflow-hidden rounded-full bg-secondary bg-opacity-100'>
      <span className='absolute left-0 top-0 inline-block h-full w-1.5  rounded-full bg-text-secondary' />
    </span>
  </div>
);

const DomainSection = ({ domain }) => (
  <div className='mb-10'>
    <SkillTitle title={capitalize(domain)} />
    <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
      {groupedSkills[domain].map(({ name, ratings }) => {
        return (
          <div key={name} className='md:min-w-[9rem]'>
            <p className='text-sm'>{name}</p>
            <StarRating ratings={ratings} />
          </div>
        );
      })}
    </div>
  </div>
);

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

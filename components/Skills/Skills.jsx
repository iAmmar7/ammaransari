import StarRating from './Ratings';
import skills from '../../data/skills';

function Skills() {
  return (
    <div className='flex flex-col flex-nowrap'>
      {skills.map(({ id, domain, skills }) => {
        return (
          <div key={id} className='mb-10'>
            <h4 className='text-xl font-bold mb-4'>{domain}</h4>
            <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
              {skills.map(({ id, name, ratings }) => {
                return (
                  <div key={id} className='min-w-[9rem]'>
                    <p className='text-sm'>{name}</p>
                    <StarRating ratings={ratings} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;

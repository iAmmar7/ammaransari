import StarRating from './Ratings';
import skills from '../../data/skills';

function Skills() {
  return (
    <div className='flex flex-col flex-nowrap mx-auto'>
      {skills.map(({ id, domain, skills }) => {
        return (
          <div key={id} className='mb-10'>
            <div className='mb-4'>
              <h4 className='text-xl font-bold mb-1'>{domain}</h4>
              <span className='relative block m-0 h-1.5 w-10 overflow-hidden rounded-full bg-secondary bg-opacity-100'>
                <span className='absolute left-0 top-0 inline-block h-full w-1.5  rounded-full bg-text-secondary' />
              </span>
            </div>
            <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
              {skills.map(({ id, name, ratings }) => {
                return (
                  <div key={id} className='md:min-w-[9rem]'>
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

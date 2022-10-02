import { useMemo } from 'react';
import Link from 'next/link';

import { isArray, isEmpty, take } from '../../lib/utils';
import PROJECTS from '../../data/projects';
import Badge from '../Badge/Badge';
import List from './List';

const Title = ({ text }) => (
  <h2 className='text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-tertiary to-secondary'>
    {text}
  </h2>
);

function ProjectDetails(props) {
  const { id, features, technologies, description, contribution } = props;

  const relatedProjects = useMemo(() => {
    const projects = PROJECTS.reduce((acc, proj) => {
      if (proj.id === id) return acc;
      const techCount = technologies.filter((tech) => proj.technologies.includes(tech)).length;
      if (techCount > 0) acc.push({ ...proj, count: techCount });
      return acc;
    }, []);
    return projects.sort((a, b) => b.count - a.count);
  }, [id, technologies]);

  return (
    <div className='mt-8 flex flex-col gap-y-5'>
      {description && (
        <section>
          <Title text='Description' />
          <div className='leading-8 mt-2' dangerouslySetInnerHTML={{ __html: description }}></div>
        </section>
      )}
      {features && (
        <section>
          <Title text='Features' />
          <ul className='list-circle ml-4'>
            {features.map((feat) => (
              <li key={feat} dangerouslySetInnerHTML={{ __html: feat }} className='my-2'></li>
            ))}
          </ul>
        </section>
      )}
      {contribution && (
        <section>
          <Title text='Contribution' />
          {isArray(contribution) ? (
            <ul className='list-circle ml-4'>
              {contribution.map((cont) => (
                <li key={cont} dangerouslySetInnerHTML={{ __html: cont }} className='my-2'></li>
              ))}
            </ul>
          ) : (
            <div className='leading-8 mt-2' dangerouslySetInnerHTML={{ __html: contribution }}></div>
          )}
        </section>
      )}
      {technologies && (
        <section>
          <Title text='Tech-Stack' />
          <div className='flex flex-wrap mt-4 gap-2'>
            {technologies.map((tech) => (
              <Link key={tech} href={`/projects?skill=${tech}`} passHref>
                <Badge
                  type='tertiary'
                  as='a'
                  className='text-white cursor-pointer'
                  title={`View more ${tech} projects`}
                >
                  {tech}
                </Badge>
              </Link>
            ))}
          </div>
        </section>
      )}
      {!isEmpty(relatedProjects) && (
        <section className='border-t mt-10 pt-10'>
          <Title text='Related projects' />
          <List projects={take(relatedProjects, 3)} count={3} className='mt-4' />
        </section>
      )}
    </div>
  );
}

export default ProjectDetails;

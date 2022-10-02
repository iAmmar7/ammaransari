import Link from 'next/link';
import { isArray } from '../../lib/utils';
import Badge from '../Badge/Badge';

const Title = ({ text }) => (
  <h2 className='text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-tertiary to-secondary'>
    {text}
  </h2>
);

function ProjectDetails(props) {
  const { features, technologies, description, contribution } = props;

  return (
    <div className='mt-8 flex flex-col gap-y-5'>
      {description && (
        <div>
          <Title text='Description' />
          <div className='leading-8 mt-2' dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      )}
      {features && (
        <div>
          <Title text='Features' />
          <ul className='list-circle ml-4'>
            {features.map((feat) => (
              <li key={feat} dangerouslySetInnerHTML={{ __html: feat }} className='my-2'></li>
            ))}
          </ul>
        </div>
      )}
      {contribution && (
        <div>
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
        </div>
      )}
      {technologies && (
        <div>
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
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;

import Link from 'next/link';

import Button from '../Button';
import Icon from '../Icon';
import Section from './Section';
import CURRENT_TECH_STACK from '../../data/currentTechStack';
import { toLowerCase } from '../../lib/utils';

import { TypeScriptSVG, ReactSVG, NodeSVG, TailwindSVG, NextSVG, SwrSVG, FirebaseSVG, MySqlSVG } from '../SVG/svgs';
import clsx from 'clsx';

const skillToSVGMapper = (skill) => {
  if (toLowerCase(skill).includes('typescript'))
    return { Component: TypeScriptSVG, color: 'group-hover:text-typescript' };
  if (toLowerCase(skill).includes('react')) return { Component: ReactSVG, color: 'group-hover:text-react' };
  if (toLowerCase(skill).includes('node')) return { Component: NodeSVG, color: 'group-hover:text-node' };
  if (toLowerCase(skill).includes('tailwind')) return { Component: TailwindSVG, color: 'group-hover:text-tailwind' };
  if (toLowerCase(skill).includes('next')) return { Component: NextSVG, color: 'group-hover:text-next' };
  if (toLowerCase(skill).includes('swr')) return { Component: SwrSVG, color: 'group-hover:text-swr' };
  if (toLowerCase(skill).includes('firebase')) return { Component: FirebaseSVG, color: 'group-hover:text-firebase' };
  if (toLowerCase(skill).includes('mysql')) return { Component: MySqlSVG, color: 'group-hover:text-mysql' };
};

function SkillSection() {
  return (
    <Section id='skills' title='Current tech-stack' next='projects'>
      <ul className='grid grid-cols-3 sm:grid-cols-4 gap-4 px-2 md:px-0 mt-6'>
        {CURRENT_TECH_STACK.map((tech) => {
          const SVG = skillToSVGMapper(tech.name);
          return (
            <Link
              key={tech.name}
              href={{ pathname: '/projects', query: { skill: tech.name === 'TypeScript' ? null : tech.name } }}
              passHref
            >
              <a
                className='group relative bg-muted cursor-pointer rounded-base shadow-md backdrop-blur-md transition-all ease-base duration-md hover:translate-x-0 hover:-translate-y-1.5 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-100 hover:scale-y-100'
                title={`View ${tech.name} projects`}
              >
                <SVG.Component
                  className={clsx(
                    'flex items-center justify-center sm:max-w-[112px] sm:h-28 max-w-[86px] h-20 rounded-base aagn-middle font-semibold p-2 sm:p-4 transition duration-md ease-base group-hover:opacity-10',
                    SVG.color
                  )}
                  height='100%'
                  width='100%'
                />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center transition duration-md ease-base opacity-0 group-hover:opacity-100 font-bold text-sm sm:text-lg'>
                  {tech.name}
                </p>
              </a>
            </Link>
          );
        })}
      </ul>
      <Link href='/skills' passHref>
        <Button
          as='a'
          type='default'
          size='sm'
          className='mt-4'
          endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
          title='Go to skills page'
        >
          Other skills
        </Button>
      </Link>
    </Section>
  );
}

export default SkillSection;

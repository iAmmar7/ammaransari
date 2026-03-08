'use client';

import { useState } from 'react';
import Link from 'next/link';

import skills from '@/data/skills';
import { capitalize, groupBy } from '@/lib/utils';
import { hasProjectBySkillId } from '@/lib/helpers';
import type { SkillDomain } from '@/types/skill';
import StarRating from './StarRating';

const groupedSkills = groupBy(skills, 'domain');

const DOMAINS: SkillDomain[] = [
  'web',
  'server',
  'mobile',
  'databases',
  'cloud',
  'general',
  'languages',
];

function SkillTitle({ title }: { title: string }) {
  return (
    <div className='mb-4'>
      <h4 className='font-bold mb-1 text-lg sm:text-xl'>{title}</h4>
      <span className='relative block m-0 h-1.5 w-10 overflow-hidden rounded-full bg-surface-secondary'>
        <span className='absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-accent' />
      </span>
    </div>
  );
}

function DomainSection({ domain }: { domain: SkillDomain }) {
  const [hovered, setHovered] = useState<string | null>(null);

  if (!groupedSkills[domain]) return null;

  return (
    <div className='mb-10'>
      <SkillTitle title={capitalize(domain)} />
      <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
        {groupedSkills[domain].map(({ id, name, ratings }) => {
          const hasProject = hasProjectBySkillId(id);
          const commonProps = {
            className: 'md:min-w-[9rem] group',
            onMouseEnter: () => setHovered(id),
            onMouseLeave: () => setHovered(null),
          };

          if (!hasProject) {
            return (
              <span key={id} {...commonProps}>
                <p className='text-sm'>{name}</p>
                <StarRating ratings={ratings} hovered={hovered === id} />
              </span>
            );
          }

          return (
            <Link
              key={id}
              href={`/projects?skill=${id}`}
              title={`View ${name} projects`}
              {...commonProps}
            >
              <p className='text-sm'>{name}</p>
              <StarRating ratings={ratings} hovered={hovered === id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className='flex flex-col flex-nowrap mx-auto'>
      {DOMAINS.map((domain) => (
        <DomainSection key={domain} domain={domain} />
      ))}
    </div>
  );
}

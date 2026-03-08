'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Collapse from '@/components/Collapse';
import { useBreakpoints, useSkillFilter } from '@/hooks';
import { isEmpty, take, takeRight } from '@/lib/utils';
import { sortSkillsByUsage } from '@/lib/helpers';

const TOP_SKILLS = sortSkillsByUsage().filter((skill) => skill.major);

function getInitialCollapsed(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = sessionStorage.getItem('collapsed');
  return stored ? stored === 'true' : true;
}

export default function Filters() {
  const { filters, updateFilters } = useSkillFilter();
  const [collapsed, setCollapsed] = useState(getInitialCollapsed);
  const router = useRouter();
  const { sm, md, lg, xl, ...breakpoints } = useBreakpoints();

  const handleCollapse = () => {
    const next = !collapsed;
    sessionStorage.setItem('collapsed', String(next));
    setCollapsed(next);
  };

  const handleFilter = useCallback(
    (val?: string) => {
      const newSkill = val && !isEmpty(val) ? updateFilters(val) : [];
      const params = new URLSearchParams();
      newSkill.forEach((s) => params.append('skill', s));
      const query = params.toString();
      router.replace(`/projects${query ? `?${query}` : ''}`, { scroll: false });
    },
    [router, updateFilters]
  );

  const topFiltersCount = useMemo(() => {
    if (sm) return 3;
    if (md) return 5;
    if (lg) return 6;
    if (xl) return 9;
    if (breakpoints['2xl'] || breakpoints['3xl']) return 10;
    return 2;
  }, [sm, md, lg, xl, breakpoints]);

  return (
    <div className='w-full'>
      <div className='flex items-center flex-wrap'>
        <div className='flex flex-wrap gap-2'>
          <Button
            type={isEmpty(filters) || isEmpty(filters[0]) ? 'primary' : 'secondary'}
            onClick={() => handleFilter()}
          >
            All
          </Button>
          {take(TOP_SKILLS, topFiltersCount).map((skill) => (
            <Button
              key={`${skill.domain}-${skill.id}`}
              type={filters.includes(skill.id) ? 'primary' : 'secondary'}
              onClick={() => handleFilter(skill.id)}
            >
              {skill.name}
            </Button>
          ))}
        </div>
        <Button
          type='tertiary'
          role='button'
          aria-expanded={!collapsed}
          aria-controls='skill-extended-filters'
          className='mx-2'
          onClick={handleCollapse}
        >
          <span className='flex items-center gap-x-1'>
            More
            <Icon
              icon={collapsed ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'}
              className='min-w-3.5'
            />
          </span>
        </Button>
      </div>
      <Collapse show={!collapsed}>
        <div className='flex flex-wrap gap-2 mt-2'>
          {takeRight(TOP_SKILLS, TOP_SKILLS.length - topFiltersCount).map((skill) => (
            <Button
              key={`${skill.domain}-${skill.id}`}
              type={filters.includes(skill.id) ? 'primary' : 'secondary'}
              onClick={() => handleFilter(skill.id)}
            >
              {skill.name}
            </Button>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

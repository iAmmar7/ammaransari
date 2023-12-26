import { useCallback, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '../Button';
import Icon from '../Icon';
import Collapse from '../Collapse';
import { useBreakpoints } from '../../hooks';
import { isEmpty, take, takeRight } from '../../lib/utils';
import { sortSkillsByUsage } from '../../lib/helpers';

const TOP_SKILLS = sortSkillsByUsage().filter((skill) => skill.major);

function Filters(props) {
  const { filters, updateFilters } = props;
  const [collapsed, setCollapsed] = useState(true);
  const { replace } = useRouter();
  const { sm, md, lg, xl, ...breakpoints } = useBreakpoints();

  useEffect(() => {
    const COLLAPSED_FROM_STORAGE = sessionStorage.getItem('collapsed');
    const isCollapsed = COLLAPSED_FROM_STORAGE ? COLLAPSED_FROM_STORAGE === 'true' : true;
    setCollapsed(isCollapsed);
  }, []);

  const handleCollapse = () => {
    sessionStorage.setItem('collapsed', !collapsed);
    setCollapsed(!collapsed);
  };

  const handleFilter = useCallback(
    (val) => {
      const newSkill = !isEmpty(val) ? updateFilters(val) : [];
      replace(
        {
          pathname: '/projects',
          query: {
            skill: newSkill,
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    },
    [replace, updateFilters]
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
            onClick={handleFilter}
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
              className='min-w-[14px]'
            />
          </span>
        </Button>
      </div>
      <Collapse show={!collapsed} id='skill-extended-filters'>
        <div className='flex flex-wrap gap-2 mt-2 '>
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

export default Filters;

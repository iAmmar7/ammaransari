import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Collapse from '../Collapse/Collapse';
import skills from '../../data/skills';
import { useBreakpoints } from '../../hooks';
import { isEmpty, take, takeRight } from '../../lib/utils';

const skillsName = skills.filter((skill) => skill.major).sort((a, b) => a.priority - b.priority);

function Filters(props) {
  const { filters, updateFilters } = props;
  const [collapsed, setCollapsed] = useState(true);
  const { replace } = useRouter();
  const { sm, md, lg, xl, ...breakpoints } = useBreakpoints();

  const handleCollapse = () => setCollapsed(!collapsed);

  const handleFilter = (val) => {
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
  };

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
          <Button type={isEmpty(filters) || isEmpty(filters[0]) ? 'primary' : 'secondary'} onClick={handleFilter}>
            All
          </Button>
          {take(skillsName, topFiltersCount).map((skill) => (
            <Button
              key={`${skill.domain}-${skill.name}`}
              type={filters.includes(skill.name) ? 'primary' : 'secondary'}
              onClick={() => handleFilter(skill.name)}
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
            <Icon icon={collapsed ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'} className='min-w-[14px]' />
          </span>
        </Button>
      </div>
      <Collapse show={!collapsed} id='skill-extended-filters'>
        <div className='flex flex-wrap gap-2 mt-2 '>
          {takeRight(skillsName, skillsName.length - topFiltersCount).map((skill) => (
            <Button
              key={`${skill.domain}-${skill.name}`}
              type={filters.includes(skill.name) ? 'primary' : 'secondary'}
              onClick={() => handleFilter(skill.name)}
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

import { useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Collapse from '../Collapse/Collapse';
import skills from '../../data/skills';
import { isEmpty, take, takeRight } from '../../lib/utils';

const skillsName = skills.filter((skill) => skill.major).sort((a, b) => a.priority - b.priority);

function Filters(props) {
  const { filters, updateFilters } = props;
  const [collapsed, setCollapsed] = useState(true);
  const { replace } = useRouter();

  const handleCollapse = () => setCollapsed(!collapsed);

  const handleFilter = (val) => {
    const newSkill = !isEmpty(val) ? updateFilters(val) : [];
    replace(
      {
        pathname: '/',
        hash: 'projects',
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

  return (
    <div className='min-h-[200px] min-w-[856px]'>
      <div className='flex items-center flex-wrap'>
        <div className='flex flex-wrap gap-2'>
          <Button type={isEmpty(filters) ? 'primary' : 'secondary'} onClick={handleFilter}>
            All
          </Button>
          {take(skillsName, 7).map((skill) => (
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
          className='ml-[51px]'
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
          {takeRight(skillsName, skillsName.length - 7).map((skill) => (
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

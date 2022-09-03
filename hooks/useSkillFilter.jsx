import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { isArray, isEmpty, isString } from '../lib/utils';

function useSkillFilter() {
  const {
    query: { skill = [] },
  } = useRouter();

  const updateFilters = useCallback(
    (newVal) => {
      let newFilters = [];
      if (isString(skill) && skill !== newVal) newFilters.push(skill, newVal);
      else if (isArray(skill) && isEmpty(skill)) newFilters.push(newVal);
      else if (isArray(skill) && !isEmpty(skill)) {
        const skillIndex = skill.findIndex((s) => s === newVal);
        if (skillIndex === -1) newFilters.push(...skill, newVal);
        else {
          newFilters = skill;
          newFilters.splice(skillIndex, 1);
        }
      }
      return newFilters;
    },
    [skill]
  );

  return { filters: !isArray(skill) ? [skill] : skill, updateFilters };
}

export default useSkillFilter;

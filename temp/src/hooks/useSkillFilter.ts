'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { isArray, isEmpty, isString } from '@/lib/utils';

export default function useSkillFilter() {
  const searchParams = useSearchParams();
  const skill = searchParams.getAll('skill');

  const filters = skill.length === 0 ? [] : skill;

  const updateFilters = useCallback(
    (newVal: string) => {
      let newFilters: string[] = [];
      if (isString(skill[0]) && skill.length === 1 && skill[0] !== newVal) {
        newFilters.push(skill[0], newVal);
      } else if (isArray(skill) && isEmpty(skill)) {
        newFilters.push(newVal);
      } else if (isArray(skill) && !isEmpty(skill)) {
        const skillIndex = skill.findIndex((s) => s === newVal);
        if (skillIndex === -1) {
          newFilters.push(...skill, newVal);
        } else {
          newFilters = [...skill];
          newFilters.splice(skillIndex, 1);
        }
      }
      return newFilters;
    },
    [skill]
  );

  return { filters, updateFilters };
}

import skills from '@/data/skills';
import projects from '@/data/projects';

const MIN_PROJECTS_FOR_FILTER = 3;

const skillFrequency = new Map<string, number>();
projects.forEach((project) => {
  project.technologies.forEach((tech) => {
    skillFrequency.set(tech, (skillFrequency.get(tech) || 0) + 1);
  });
});

export const getSkillProjectCount = (skillId: string): number => {
  return skillFrequency.get(skillId) || 0;
};

export const hasProjectBySkillId = (skillId: string): boolean => {
  return getSkillProjectCount(skillId) >= MIN_PROJECTS_FOR_FILTER;
};

export const getSkillNameBySkillId = (skillId: string): string | undefined => {
  const skill = skills.find((s) => s.id === skillId);
  return skill?.name ?? skillId;
};

export const sortSkillsByUsage = () => {
  return [...skills]
    .filter((skill) => getSkillProjectCount(skill.id) >= MIN_PROJECTS_FOR_FILTER)
    .sort((a, b) => {
      const freqA = skillFrequency.get(a.id) || 0;
      const freqB = skillFrequency.get(b.id) || 0;
      if (freqA === freqB) return b.ratings - a.ratings;
      return freqB - freqA;
    });
};

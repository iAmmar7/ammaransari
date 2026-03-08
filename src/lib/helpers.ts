import skills from '@/data/skills';
import projects from '@/data/projects';

export const hasProjectBySkillId = (skillId: string): boolean => {
  return projects.some((project) => project.technologies.includes(skillId));
};

export const getSkillNameBySkillId = (skillId: string): string | undefined => {
  const skill = skills.find((s) => s.id === skillId);
  return skill?.name ?? skillId;
};

export const sortSkillsByUsage = () => {
  const skillFrequency = new Map<string, number>();

  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      skillFrequency.set(tech, (skillFrequency.get(tech) || 0) + 1);
    });
  });

  return [...skills].sort((a, b) => {
    const freqA = skillFrequency.get(a.id) || 0;
    const freqB = skillFrequency.get(b.id) || 0;
    if (freqA === freqB) return b.ratings - a.ratings;
    return freqB - freqA;
  });
};

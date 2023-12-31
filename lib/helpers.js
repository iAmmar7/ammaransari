import SKILLS from '../data/skills';
import PROJECTS from '../data/projects';

export const sortSkillsByUsage = (skills = SKILLS, projects = PROJECTS) => {
  const skillFrequency = new Map();

  // Iterate over the projects to count the frequency of each skill
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      skillFrequency.set(tech, (skillFrequency.get(tech) || 0) + 1);
    });
  });

  // Sort the skills array based on frequency, then by ratings
  const sorted = skills.sort((a, b) => {
    const freqA = skillFrequency.get(a.id) || 0;
    const freqB = skillFrequency.get(b.id) || 0;

    // Sort by frequency first, then by ratings if frequencies are equal
    if (freqA === freqB) {
      return b.ratings - a.ratings; // Higher ratings first
    }
    return freqB - freqA; // Higher frequency first
  });

  return sorted;
};

export const getSkillNameBySkillId = (skillId) => {
  if (!skillId) return undefined;

  const skill = SKILLS.find((skill) => skill.id === skillId);

  if (!skill) return skillId;

  return skill.name;
};

export const hasProjectBySkillId = (skillId) => {
  if (!skillId) return undefined;

  const projects = PROJECTS.filter((project) => project.technologies.includes(skillId));

  return projects.length ? true : false;
};

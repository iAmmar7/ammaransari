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
  return skills.sort((a, b) => {
    const freqA = skillFrequency.get(a.id) || 0;
    const freqB = skillFrequency.get(b.id) || 0;

    // Sort by frequency first, then by ratings if frequencies are equal
    if (freqA === freqB) {
      return b.ratings - a.ratings; // Higher ratings first
    }
    return freqB - freqA; // Higher frequency first
  });
};

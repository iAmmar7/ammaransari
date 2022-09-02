import Button from '../Button/Button';
import skills from '../../data/skills';
import { take } from '../../lib/utils';

const skillsName = skills
  .reduce((ctx, skill) => {
    const domainSkills = skill.skills.reduce((c, s) => {
      if (!s.major) return c;
      c.push({ id: `${skill.domain}-${s.id}`, name: s.name, priority: s.priority ?? Number.MAX_SAFE_INTEGER });
      return c;
    }, []);
    ctx.push(...domainSkills);
    return ctx;
  }, [])
  .sort((a, b) => a.priority - b.priority);

const topSkills = take(skillsName, 5);

console.log('topSkills', skillsName, topSkills);

function Filters() {
  return (
    <div className='flex flex-wrap gap-x-2 gap-y-2'>
      {topSkills.map((skill) => (
        <Button key={skill.id}>{skill.name}</Button>
      ))}
    </div>
  );
}

export default Filters;

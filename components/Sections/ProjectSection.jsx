import Section from './Section';
import Projects from '../Projects/Projects';

function SkillSection() {
  return (
    <Section id='projects' title='Projects' navViewAmount={0.1} maxWidth='max-w-6xl'>
      <Projects />
    </Section>
  );
}

export default SkillSection;

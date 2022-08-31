import Section from './Section';
import Skills from '../Skills/Skills';

function SkillSection() {
  return (
    <Section id='skills' title='Skills' description='Technologies I have used throughout my career' navViewAmount={0.1}>
      <Skills />
    </Section>
  );
}

export default SkillSection;

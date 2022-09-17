import Section from './Section';
import WorkExperience from '../WorkExperience/WorkExperience';
import { useBreakpoints } from '../../hooks';

function ExperienceSection() {
  const { sm } = useBreakpoints();

  return (
    <Section id='experience' title='Work Experience' navViewAmount={!sm ? 0.3 : 0.1} maxWidth='max-w-6xl'>
      <WorkExperience />
    </Section>
  );
}

export default ExperienceSection;

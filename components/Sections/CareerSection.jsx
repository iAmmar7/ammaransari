import Section from './Section';
import WorkExperience from '../WorkExperience/WorkExperience';

function CareerSection() {
  return (
    <Section id='experience' navViewAmount={0.5}>
      <WorkExperience />
    </Section>
  );
}

export default CareerSection;

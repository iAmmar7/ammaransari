import AboutMe from '../AboutMe';
import Section from './Section';
import { useBreakpoints } from '../../hooks';

function AboutSection() {
  const { sm } = useBreakpoints();

  return (
    <Section id='about' title='About me' navViewAmount={!sm ? 0.8 : 0.4} maxWidth='max-w-4xl'>
      <AboutMe />
    </Section>
  );
}

export default AboutSection;

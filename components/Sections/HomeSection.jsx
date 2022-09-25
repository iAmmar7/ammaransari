import Hero from '../Hero/Hero';
import Section from './Section';

function HomeSection(props) {
  return (
    <Section id='home' next='experience'>
      <Hero {...props} />
    </Section>
  );
}

export default HomeSection;

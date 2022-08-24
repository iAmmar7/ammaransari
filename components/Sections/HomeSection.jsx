import Link from 'next/link';

import Hero from '../Hero/Hero';
import Icon from '../Icon/Icon';
import Section from './Section';

function HomeSection(props) {
  return (
    <Section
      footer={
        <div className='absolute inset-x-0 top-auto bottom-10 w-full justify-between text-center text-muted'>
          <Link href='#about-me' scroll={false}>
            <a className='inline-flex flex-row-reverse gap-x-2 cursor-pointer group'>
              <span className='group-hover:text-secondary'>More</span>
              <Icon icon='ri-arrow-down-line' className='animate-bounce mt-[2px] group-hover:text-secondary' />
            </a>
          </Link>
        </div>
      }
    >
      <Hero {...props} />
    </Section>
  );
}

export default HomeSection;

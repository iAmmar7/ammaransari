import Image from 'next/image';

import { Meta, Icon } from '../components';
import Base from '../layouts/Base';
import { blurryDataProfile } from '../lib/blurryData';
import { socialLinks } from '../lib/socialMedia';

function About(props) {
  const funFact = (
    <div className='bg-muted border-l-4 border-secondary p-2 rounded-r-base text-center sm:text-left'>
      <p>
        Fun fact about me: I`ve been the team`s <span className='text-primary'>youngest engineer</span> in most of the
        companies where I`ve worked.
      </p>
    </div>
  );

  return (
    <div>
      <Meta {...props} />
      <div className='flex flex-col sm:flex-row-reverse sm:gap-x-0'>
        <div className='mt-0 w-auto sm:w-1/2 text-center sm:text-inherit'>
          <Image
            alt='Ammar'
            src='/images/ammar.jpg'
            width='340'
            height='400'
            quality={100}
            placeholder='blur'
            blurDataURL={blurryDataProfile}
            priority
            className='rounded-base'
          />
          <h2 className='text-center text-3xl text-primary font-bold'>Ammar Ansari</h2>
          <p className='text-center text-base'>Software Engineer</p>
          <div className='flex justify-center gap-x-2'>
            <strong>
              <a className='text-green-500 no-underline' href='https://careem.com' target='blank'>
                Careem
              </a>
            </strong>
            <span>-</span>
            <strong>
              <a className='text-red-500 no-underline' href='https://venturedive.com' target='blank'>
                VentureDive
              </a>
            </strong>
          </div>
          <div className='flex items-center justify-center gap-x-3 mt-2'>
            {socialLinks.map(({ title, url, icon }) => {
              return (
                <a
                  key={title}
                  href={url}
                  className='text-muted no-underline transition-colors duration-md ease-base focus:text-primary cursor-pointer group'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon
                    icon={icon}
                    className={`text-2xl text-primary group-hover:md:animate-pulse group-hover:text-secondary`}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className='w-auto sm:w-1/2 mt-3 sm:mt-0 text-center sm:text-left'>
          <p className=''>
            Hi, I`m <span className='text-primary'>Ammar</span>, currently working as a Software Engineer at Careem in
            the CareemPay team.
          </p>
          <p className='mt-2'>
            I am proud to have a unique background that combines system engineering, computer networking, and software
            development. From <span className='text-primary'>small-scale startups</span> to{' '}
            <span className='text-primary'>well-established organizations</span>, I have worked in various teams using
            multiple technologies and working in different domains. In my various roles, I have found myself regularly
            called upon to tackle technical challenges, resolve coding issues and engage with different teams working on
            different projects. <span className='text-primary'>My love of coding</span> drives me internally and I
            relish every opportunity to tackle the deepest technical challenges.
          </p>
          <div className='hidden md:block mt-6'>{funFact}</div>
        </div>
      </div>
      <div className='block md:hidden mt-6'>{funFact}</div>
    </div>
  );
}

About.Layout = Base;

export default About;

export async function getStaticProps() {
  const meta = {
    title: 'About - Ammar Ansari',
    description:
      'I am proud to have a unique background that combines system engineering, computer networking, and software development. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges.',
    tagline: 'About me',
    image: '/images/meta-bw.jpeg',
    route: '/about',
  };

  return { props: meta };
}

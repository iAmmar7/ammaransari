import { Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { blurryDataProfile } from '../../lib/blurryData';
import ExternalLink from '../ExternalLink/ExternalLink';
import SocialLinks from '../SocialLinks/SocialLinks';

function AboutMe() {
  const funFact = (
    <div className='bg-muted border-l-4 border-secondary p-2 rounded-r-base text-center sm:text-left'>
      <p>
        Fun fact about me: I`ve been the team`s <strong className='font-normal text-primary'>youngest engineer</strong>{' '}
        in most of the companies where I`ve worked.
      </p>
    </div>
  );

  return (
    <Fragment>
      <div className='flex flex-col sm:flex-row-reverse gap-x-0 sm:gap-x-2'>
        <div className='mt-0 w-auto sm:w-1/2 text-center sm:text-inherit'>
          <Image
            alt='Ammar'
            src='/images/ammar.jpg'
            width='320'
            height='380'
            quality={100}
            placeholder='blur'
            blurDataURL={blurryDataProfile}
            priority
            className='rounded-base z-10'
          />
          <motion.div
            initial={{ y: -200 }}
            whileInView={{ y: 0, transition: { ease: 'easeInOut', duration: 0.5 } }}
            exit={{ y: -200 }}
            viewport={{ once: true }}
          >
            <h2 className='text-center text-3xl text-primary font-bold'>Ammar Ansari</h2>
            <p className='text-center text-base'>Software Engineer</p>
            <div className='flex justify-center gap-x-2 leading-6'>
              <strong>
                <ExternalLink color='careem' href='https://careem.com' underline>
                  Careem
                </ExternalLink>
              </strong>
              <span>-</span>
              <strong>
                <ExternalLink color='venturedive' href='https://venturedive.com' underline>
                  VentureDive
                </ExternalLink>
              </strong>
            </div>
            <SocialLinks className='justify-center mt-1' />
          </motion.div>
        </div>
        <div className='w-auto sm:w-1/2 mt-3 sm:mt-0 text-center sm:text-left'>
          <p className=''>
            Hi, I`m <strong className='font-normal text-primary'>Ammar</strong>, currently working as a Software
            Engineer at Careem in the CareemPay team.
          </p>
          <p className='mt-2'>
            I am proud to have a unique background that combines system engineering, computer networking, and software
            development. From <strong className='font-normal text-primary'>small-scale startups</strong> to{' '}
            <strong className='font-normal text-primary'>well-established organizations</strong>, I have worked in
            various teams using multiple technologies and working in different domains. In my various roles, I have
            found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with
            different teams working on different projects.{' '}
            <strong className='font-normal text-primary'>My love of coding</strong> drives me internally and I relish
            every opportunity to tackle the deepest technical challenges.
          </p>
          <div className='hidden md:block mt-6'>{funFact}</div>
        </div>
      </div>
      <div className='block md:hidden mt-6'>{funFact}</div>
      <div className='mt-6 text-center sm:text-left'>
        On the academic side, I graduated from NED University with a Bachelor`s degree in{' '}
        <strong className='font-normal text-primary'>Computer Systems Engineering</strong>. I have a high degree of{' '}
        <strong className='font-normal text-primary'>adaptability</strong> and am constantly eager to learn new things
        and impart my knowledge to others.
      </div>
    </Fragment>
  );
}

export default AboutMe;

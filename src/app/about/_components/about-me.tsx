'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { blurryDataProfile } from '@/lib/blurryData';
import { site } from '@/data/site';
import SocialLinks from '@/components/social-links';

export default function AboutMe() {
  const funFact = (
    <div className='bg-surface-muted border-l-4 border-accent p-2 rounded-r-base text-center sm:text-left'>
      <p>
        Fun fact about me: I&apos;ve been the team&apos;s{' '}
        <strong className='font-normal text-foreground'>youngest engineer</strong> in most of the
        companies where I&apos;ve worked.
      </p>
    </div>
  );

  return (
    <div className='text-muted leading-8 text-base'>
      <div className='flex flex-col sm:flex-row-reverse gap-x-0 sm:gap-x-2'>
        <div className='mt-0 w-auto sm:w-1/2 text-center sm:text-inherit flex flex-col'>
          <div className='relative flex-1 mb-2 min-h-100 sm:min-h-auto'>
            <Image
              alt='Ammar'
              src='/images/ammar.jpg'
              fill
              sizes='(max-width: 640px) 100vw, 50vw'
              quality={100}
              placeholder='blur'
              blurDataURL={blurryDataProfile}
              priority
              style={{ objectFit: 'cover' }}
              className='rounded-md z-10'
            />
          </div>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
            exit={{ y: -200 }}
            viewport={{ once: true }}
          >
            <h2 className='text-center text-2xl sm:text-3xl text-foreground font-bold'>
              {site.name}
            </h2>
            <p className='text-center'>{site.jobTitle}</p>
            <SocialLinks className='justify-center mt-1' />
          </motion.div>
        </div>
        <div className='w-auto sm:w-1/2 mt-3 sm:mt-0 text-center sm:text-left'>
          <p>
            Hi, I&apos;m <strong className='font-normal text-foreground'>Ammar</strong> - a{' '}
            {site.jobTitle} specializing in{' '}
            <strong className='font-normal text-foreground'>full-stack development</strong>,{' '}
            <strong className='font-normal text-foreground'>SDK & library design</strong>, and{' '}
            <strong className='font-normal text-foreground'>real-time communication systems</strong>
            . I help organizations architect and deliver scalable web, mobile, and desktop
            applications, SDKs, and developer-friendly tools used by thousands of developers
            worldwide.
          </p>
          <p className='mt-2'>
            With a unique background that combines system engineering, computer networking, and
            software development, I help teams ship reliable, production-ready products. From{' '}
            <strong className='font-normal text-foreground'>small-scale startups</strong> to{' '}
            <strong className='font-normal text-foreground'>well-established organizations</strong>,
            I&apos;ve worked across diverse teams and tech stacks — consistently tackling complex
            technical challenges and collaborating across projects.{' '}
            <strong className='font-normal text-foreground'>My love of coding</strong> drives me,
            and I relish every opportunity to solve deep technical problems.
          </p>
          <div className='hidden md:block mt-6'>{funFact}</div>
        </div>
      </div>
      <div className='block md:hidden mt-6'>{funFact}</div>
      <div className='mt-6 text-center sm:text-left'>
        On the academic side, I graduated with a Bachelor&apos;s degree in{' '}
        <strong className='font-normal text-foreground'>Computer Systems Engineering</strong>.
        I&apos;m highly <strong className='font-normal text-foreground'>adaptable</strong>, always
        eager to learn and share knowledge with others.
      </div>
    </div>
  );
}

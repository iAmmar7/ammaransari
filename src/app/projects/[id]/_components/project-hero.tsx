'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { RiArrowLeftLine, RiCodeSSlashFill, RiExternalLinkLine } from '@remixicon/react';

import Icon from '@/components/ui/icon';
import ExternalLink from '@/components/ui/external-link';
import Badge from '@/components/ui/badge';
import { capitalize, take, isEmpty } from '@/lib/utils';
import { blurryDataProfile } from '@/lib/blurryData';
import { PLACEHOLDER_200 } from '@/lib/constants';
import WavyText from './wavy-text';

interface ProjectHeroProps {
  name: string;
  summary: string;
  domain: string;
  technologies: string[];
  code?: string;
  url?: string;
  thumbnail?: string;
}

export default function ProjectHero({
  name,
  summary,
  domain,
  technologies,
  code,
  url,
  thumbnail,
}: ProjectHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: 'easeInOut', duration: 0.5, delay: 0 },
      }}
      viewport={{ once: true }}
      className='w-full flex justify-center items-center transition-all duration-500'
    >
      <div className='mx-auto w-full px-4 md:px-0 md:w-10/12 max-w-6xl relative'>
        {/* Go back */}
        <div className='flex flex-row items-center mb-2'>
          <Link
            href='/projects'
            title='Go back'
            className='flex items-center gap-1 justify-center rounded-full bg-neutrals-900/20'
          >
            <Icon icon={RiArrowLeftLine} className='text-xl' />
            <span className='text-sm text-muted'>projects</span>
          </Link>
        </div>

        {/* Thumbnail */}
        <figure>
          <div className='bg-surface-muted rounded-base shadow-md backdrop-blur-md'>
            <div className='relative overflow-hidden rounded-base flex h-96 w-full'>
              <Image
                alt={name}
                src={!isEmpty(thumbnail) ? thumbnail! : PLACEHOLDER_200}
                fill
                sizes='(max-width: 768px) 100vw, 83vw'
                quality={80}
                placeholder='blur'
                style={{ objectFit: 'cover' }}
                blurDataURL={blurryDataProfile}
              />
            </div>
          </div>

          {/* Summary */}
          <figcaption>
            <div className='w-full mt-4'>
              <Badge className='text-xs md:text-sm'>{capitalize(domain)}</Badge>
              <WavyText
                as='h1'
                className='text-3xl sm:text-5xl font-display font-bold leading-[1.1] mt-4 sm:mt-2 mb-2 sm:mb-5 text-highlight min-h-[2.2rem] md:min-h-[3.3rem]'
                text={name}
                delay={0.6}
              />
              <p className='text-sm lg:text-base leading-relaxed mb-12'>{summary}</p>
              <div className='flex gap-x-2 border-b-[0.5px] border-muted pb-3'>
                {take(technologies, 3).map((tech) => (
                  <Badge className='text-xs md:text-sm' key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* External links */}
            <div className='absolute flex items-center space-x-4 bottom-3 right-4 md:right-0'>
              {code && (
                <ExternalLink title='View source code' aria-label='View source code' href={code}>
                  <Icon
                    icon={RiCodeSSlashFill}
                    className='text-base md:text-xl hover:text-highlight transition-colors duration-200 ease-base'
                  />
                </ExternalLink>
              )}
              {url && (
                <ExternalLink
                  title='View live application'
                  aria-label='View live application'
                  href={url}
                >
                  <Icon
                    icon={RiExternalLinkLine}
                    className='text-base md:text-lg hover:text-highlight transition-colors duration-200 ease-base'
                  />
                </ExternalLink>
              )}
            </div>
          </figcaption>
        </figure>
      </div>
    </motion.section>
  );
}

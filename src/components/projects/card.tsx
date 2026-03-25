'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'motion/react';
import { RiCodeSSlashLine, RiExternalLinkLine } from '@remixicon/react';

import Icon from '@/components/ui/icon';
import Badge from '@/components/ui/badge';
import { blurryDataProfile } from '@/lib/blurryData';
import { toLowerCase } from '@/lib/utils';
import { PLACEHOLDER_200 } from '@/lib/constants';

interface CardProps {
  id: string;
  name: string;
  summary: string;
  image?: string;
  url?: string;
  code?: string;
  domain: string;
  tech: string[];
}

export default function Card({ id, name, summary, image, url, code, domain, tech }: CardProps) {
  const router = useRouter();

  return (
    <motion.li
      className='col-span-6 sm:col-span-3 lg:col-span-2 list-none'
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
      exit={{ scale: 0, transition: { ease: 'easeInOut', duration: 0.5 } }}
      viewport={{ once: true }}
      layout
    >
      <article
        className='relative bg-surface-muted rounded-base shadow-md backdrop-blur-md transition-transform ease-base duration-500 p-4 md:p-5 hover:-translate-y-1.5 cursor-pointer'
        onClick={() => router.push(`/projects/${id}`)}
        role='link'
        tabIndex={0}
        aria-label={`${name} details`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            router.push(`/projects/${id}`);
          }
        }}
      >
        <figure>
          <div className='relative overflow-hidden rounded-base'>
            <picture className='box-border block overflow-hidden bg-none opacity-100 border-none m-0 p-0 relative h-60 w-full'>
              <Image
                src={image || PLACEHOLDER_200}
                alt={`Screenshot of ${name} project`}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                quality={80}
                placeholder='blur'
                style={{ objectFit: 'cover' }}
                blurDataURL={blurryDataProfile}
              />
            </picture>
          </div>
          <figcaption className='mt-4'>
            <div className='flex items-start justify-between gap-2'>
              <div className='min-w-0'>
                <h5 className='mb-0 font-bold'>{name}</h5>
                <p className='truncate text-muted'>{summary}</p>
              </div>
              {(code || url) && (
                <div className='relative z-10 flex gap-2 shrink-0'>
                  {code && (
                    <a
                      className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface hover:bg-surface-secondary transition-colors duration-200'
                      href={code}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Project code'
                      aria-label='Project code'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon icon={RiCodeSSlashLine} className='text-base' />
                    </a>
                  )}
                  {url && (
                    <a
                      className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface hover:bg-surface-secondary transition-colors duration-200'
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Project live'
                      aria-label='Project live'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon icon={RiExternalLinkLine} className='text-base' />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className='flex gap-x-1 items-end mt-1'>
              <Badge variant='secondary' className='text-sm'>
                {domain}
              </Badge>
              {tech.map((t) => (
                <Badge variant='secondary' key={t} className='text-sm'>
                  {toLowerCase(t)}
                </Badge>
              ))}
            </div>
          </figcaption>
        </figure>
      </article>
    </motion.li>
  );
}

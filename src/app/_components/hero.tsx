'use client';

import Link from 'next/link';
import { RiArrowRightLine } from '@remixicon/react';
import SocialLinks from '@/components/social-links';
import ExternalLink from '@/components/ui/external-link';
import Icon from '@/components/ui/icon';
import Button from '@/components/ui/button';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <div className='text-base text-muted mx-auto w-fit'>
      <h1 className='heading-h1'>{site.name}</h1>
      <div className='mb-3 mx-0 text-foreground flex flex-col gap-y-1'>
        <p>
          {site.jobTitle} at{' '}
          <ExternalLink
            underline
            color='signalwire'
            href={site.employer.url}
            title={site.employer.description}
          >
            {site.employer.name}
          </ExternalLink>
        </p>
        <span className='text-muted mt-2'>{site.tagline}.</span>
      </div>
      <div className='min-h-12.5'>
        <SocialLinks />
      </div>
      <Link href='/about'>
        <Button
          size='sm'
          variant='default'
          endEnhancer={<Icon icon={RiArrowRightLine} className='ml-1' />}
          className='-ml-2 mt-2'
          title='Go to about page'
        >
          About me
        </Button>
      </Link>
    </div>
  );
}

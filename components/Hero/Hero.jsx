import Link from 'next/link';

import SocialLinks from '../SocialLinks';
import ExternalLink from '../ExternalLink';
import Icon from '../Icon';
import Button from '../Button';

function Hero(props) {
  const { title, description } = props;

  return (
    <div className='text-base text-muted'>
      <h1 className='heading-h1'>{title}</h1>
      <div className='mb-3 mx-0 text-primary flex flex-col gap-y-1'>
        <p>
          Software Engineer at{' '}
          <ExternalLink
            underline
            color='venturedive'
            href='https://venturedive.com'
            title='VentureDive: Software Development &amp; Product Design Partner'
          >
            VentureDive
          </ExternalLink>
        </p>
        <p>
          Software Engineer at{' '}
          <ExternalLink
            underline
            color='careem'
            href='https://careem.com'
            title='Get a ride, drive, order food and pay with Careem'
          >
            Careem
          </ExternalLink>{' '}
          (a subsidiary of{' '}
          <ExternalLink underline color='uber' href='https://uber.com' title='Earn Money by Driving or Get a Ride Now'>
            Uber
          </ExternalLink>
          )
        </p>
        <span className='text-muted mt-2'>{description}.</span>
      </div>
      <div className='min-h-[50px]'>
        <SocialLinks />
      </div>
      <Link href='/about' passHref>
        <Button
          as='a'
          size='sm'
          type='default'
          endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
          className='-ml-2 mt-2'
          title='Go to about page'
        >
          About me
        </Button>
      </Link>
    </div>
  );
}

export default Hero;

import Link from 'next/link';

import SocialLinks from '../SocialLinks/SocialLinks';
import ExternalLink from '../ExternalLink/ExternalLink';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

function Hero(props) {
  const { title, description } = props;

  return (
    <div className='px-0 my-0 overflow-hidden flex flex-col items-center'>
      <div className='text-base text-muted relative z-10 h-full py-5 px-0'>
        <div className='my-0 mx-auto max-w-3xl py-0 px-0 sm:px-5'>
          <div>
            <h1 className='heading-h1'>{title}</h1>
            <div className='mb-3 mx-0 text-primary flex flex-col gap-y-1'>
              <p>
                Software Engineer at{' '}
                <ExternalLink underline color='venturedive' href='https://venturedive.com'>
                  VentureDive
                </ExternalLink>
              </p>
              <p>
                Software Engineer at{' '}
                <ExternalLink underline color='careem' href='https://careem.com'>
                  Careem
                </ExternalLink>{' '}
                (a subsidiary of{' '}
                <ExternalLink underline color='uber' href='https://uber.com'>
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
                size='sm'
                type='default'
                endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
                className='-ml-2 mt-2'
              >
                More about me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

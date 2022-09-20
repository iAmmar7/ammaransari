import SocialLinks from '../SocialLinks/SocialLinks';
import ExternalLink from '../ExternalLink/ExternalLink';

function Hero(props) {
  const { title, description } = props;

  return (
    <div className='px-0 my-0 overflow-hidden flex flex-col items-center'>
      <div className='text-base text-muted relative z-10 h-full py-5 px-0'>
        <div className='my-0 mx-auto max-w-3xl py-0 px-5'>
          <div>
            <h1 className='heading-h1'>{title}</h1>
            <div className='mb-3 mx-0 text-primary flex flex-col gap-y-1'>
              <p>
                <strong>
                  Software Engineer at{' '}
                  <ExternalLink underline color='venturedive' href='https://venturedive.com'>
                    VentureDive
                  </ExternalLink>
                </strong>
              </p>
              <p>
                <strong>
                  Software Engineer at{' '}
                  <ExternalLink underline color='careem' href='https://careem.com'>
                    Careem
                  </ExternalLink>{' '}
                  (a subsidiary of{' '}
                  <ExternalLink underline color='uber' href='https://uber.com'>
                    Uber
                  </ExternalLink>
                  )
                </strong>
              </p>
              <span className='text-muted mt-2'>{description}.</span>
            </div>
            <div className='min-h-[50px]'>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

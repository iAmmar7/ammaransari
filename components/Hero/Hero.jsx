import SocialLinks from '../SocialLinks/SocialLinks';

function Hero(props) {
  const { title, description } = props;

  return (
    <div className='px-0 my-0 overflow-hidden flex flex-col items-center'>
      <div className='text-base leading-8 text-muted relative z-10 h-full py-5 px-0'>
        <div className='my-0 mx-auto max-w-3xl py-0 px-5'>
          <div>
            <h1 className='heading-h1'>{title}</h1>
            <p className='my-5 mx-0 text-primary'>
              <strong>
                Software Engineer at{' '}
                <a className='external-link text-red-500' href='https://venturedive.com' target='blank'>
                  VentureDive
                </a>
              </strong>
              <br />
              <strong>
                Software Engineer at{' '}
                <a className='external-link text-green-500' href='https://careem.com' target='blank'>
                  Careem
                </a>{' '}
                (a subsidiary of{' '}
                <a className='external-link text-gray-500' href='https://uber.com' target='blank'>
                  Uber
                </a>
                )
              </strong>
              <br />
              <span className='text-muted'>{description}.</span>
            </p>
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

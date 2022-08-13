import React from 'react';

function Hero(props) {
  const { title, description } = props;

  return (
    <main className='py-24 px-0 sm:py-15 overflow-hidden flex-auto items-center flex my-0 mx-auto'>
      <div className='text-base leading-8 text-secondary bg-background relative z-10 h-full py-5 px-0'>
        <div className='my-0 mx-auto max-w-3xl py-0 px-5'>
          <div>
            <h1 className='heading-h1'>{title}</h1>
            <p className='my-5 mx-0 text-primary'>
              <strong>
                Software Engineer at{' '}
                <a className='external-link text-green-500' href='https://careem.com' target='blank'>
                  Careem
                </a>{' '}
                (a subsidiary of{' '}
                <a className='external-link text-gray-500' href='https://uber.com' target='blank'>
                  Uber
                </a>
                ).
              </strong>
              <br />
              <span className='text-secondary'>{description}.</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

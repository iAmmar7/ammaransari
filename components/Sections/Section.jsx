function Section(props) {
  const { children, footer } = props;

  return (
    <section id='section-home' className='min-h-screen overflow-hidden flex flex-col justify-center'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative'>{children}</div>
      {footer}
    </section>
  );
}

export default Section;

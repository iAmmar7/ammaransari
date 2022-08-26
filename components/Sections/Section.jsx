function Section(props) {
  const { children, footer, id } = props;

  return (
    <section id={id} className='min-h-screen overflow-hidden flex flex-col justify-center relative snap-start py-28'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative'>{children}</div>
      {footer}
    </section>
  );
}

export default Section;

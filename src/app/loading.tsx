export default function Loading() {
  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <div className='flex-auto flex items-center justify-center'>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex gap-2'>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className='h-2.5 w-2.5 rounded-full bg-accent animate-pulse'
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
          <p className='text-muted text-sm tracking-wide'>Loading</p>
        </div>
      </div>
    </div>
  );
}

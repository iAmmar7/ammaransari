function ProjectFiltersSkeleton() {
  return (
    <div className='w-full flex items-center flex-wrap gap-2'>
      {[1, 2, 3].map((n) => (
        <div key={n} className='shadow rounded-base bg-muted w-24 h-10 animate-pulse'></div>
      ))}
    </div>
  );
}

export default ProjectFiltersSkeleton;

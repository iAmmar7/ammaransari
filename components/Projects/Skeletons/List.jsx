function ProjectListSkeleton() {
  return (
    <div className='grid grid-cols-6 gap-4 sm:gap-7 mt-6 sm:mt-12'>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          className='col-span-6 sm:col-span-3 lg:col-span-2 shadow rounded-base bg-muted h-60 animate-pulse'
        ></div>
      ))}
    </div>
  );
}

export default ProjectListSkeleton;

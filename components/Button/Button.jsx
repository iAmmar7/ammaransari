import { useMemo } from 'react';
import clsx from 'clsx';

function Button(props) {
  const { type = 'secondary', rounded = false, size = 'md', children, ...otherProps } = props;

  const colors = useMemo(() => {
    if (type === 'secondary') return 'bg-secondary text-secondary hover:text-black';
    return 'bg-text-secondary text-black';
  }, [type]);

  const padding = useMemo(() => {
    if (size === 'sm') return 'py-1 px-2';
    return 'py-2 px-3';
  }, [size]);

  return (
    <button
      className={clsx(
        "relative inline-block h-auto min-h-0 w-auto cursor-pointer overflow-hidden opacity-100 text-center align-middle text-sm font-medium z-0 transition-all ease-base duration-500 after:content-[''] after:absolute after:left-0 after:top-0 after:inline-block after:h-full after:w-full after:origin-bottom after:scale-y-0 after:transform after:opacity-100 after:bg-white after:transition-transform after:ease-base after:duration-md hover:after:origin-top hover:after:scale-y-100 hover:after:transform active:transition-all active:ease-base active:duration-md",
        colors,
        padding,
        rounded ? 'rounded-full' : 'rounded-base'
      )}
      {...otherProps}
    >
      <span className='z-10 text-inherit transition-none relative'>{children}</span>
    </button>
  );
}

export default Button;

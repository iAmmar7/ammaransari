import { useMemo } from 'react';
import clsx from 'clsx';
import { isValidElement } from 'react';

function Button(props) {
  const {
    type = 'primary',
    rounded = false,
    size = 'md',
    className = '',
    as,
    startEnhancer,
    endEnhancer,
    children,
    ...otherProps
  } = props;

  const Component = as ?? 'button';

  const colors = useMemo(() => {
    if (type === 'secondary') return 'bg-secondary text-secondary hover:text-black';
    if (type === 'tertiary') return 'bg-muted text-muted hover:text-black';
    return 'bg-text-secondary text-black';
  }, [type]);

  const padding = useMemo(() => {
    if (size === 'sm') return 'py-1 px-2';
    return 'py-2 px-3';
  }, [size]);

  return (
    <Component
      className={clsx(
        "relative inline-block h-auto min-h-0 w-auto cursor-pointer overflow-hidden opacity-100 text-center align-middle text-sm font-medium z-0 transition-all ease-base duration-500 after:content-[''] after:absolute after:left-0 after:top-0 after:inline-block after:h-full after:w-full after:origin-bottom after:scale-y-0 after:transform after:opacity-100 after:bg-white after:transition-transform after:ease-base after:duration-md hover:after:origin-top hover:after:scale-y-100 hover:after:transform active:transition-all active:ease-base active:duration-md",
        colors,
        padding,
        rounded ? 'rounded-full' : 'rounded-base',
        className
      )}
      {...otherProps}
    >
      <span className='z-10 text-inherit transition-none relative flex items-center justify-center'>
        {isValidElement(startEnhancer) && startEnhancer}
        {children}
        {isValidElement(endEnhancer) && endEnhancer}
      </span>
    </Component>
  );
}

export default Button;

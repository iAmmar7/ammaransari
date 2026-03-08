'use client';

import {
  forwardRef,
  useMemo,
  isValidElement,
  type ElementType,
  type ReactNode,
  type Ref,
} from 'react';
import clsx from 'clsx';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'default' | 'submit' | 'button' | 'reset';
type ButtonSize = 'sm' | 'md';

interface ButtonProps {
  type?: ButtonType;
  rounded?: boolean;
  size?: ButtonSize;
  className?: string;
  as?: ElementType;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  [key: string]: unknown;
}

const Button = forwardRef(
  (
    {
      type = 'primary',
      rounded = false,
      size = 'md',
      className = '',
      as,
      startEnhancer,
      endEnhancer,
      children,
      disabled = false,
      ...otherProps
    }: ButtonProps,
    ref: Ref<HTMLElement>
  ) => {
    const Component = as ?? 'button';

    const colors = useMemo(() => {
      if (type === 'default')
        return 'bg-transparent text-muted hover:text-accent hover:bg-surface-secondary after:bg-surface-secondary';
      if (type === 'secondary')
        return 'bg-surface-secondary text-accent hover:text-black after:bg-white';
      if (type === 'tertiary') return 'bg-surface-muted text-muted hover:text-black after:bg-white';
      return 'bg-accent text-black after:bg-white';
    }, [type]);

    const padding = useMemo(() => {
      if (size === 'sm') return 'py-1 px-2';
      return 'py-2 px-3';
    }, [size]);

    return (
      <Component
        ref={ref}
        className={clsx(
          "relative inline-block h-auto min-h-0 w-auto cursor-pointer overflow-hidden opacity-100 text-center align-middle text-sm font-medium z-0 transition-all ease-base duration-500 after:content-[''] after:absolute after:left-0 after:top-0 after:inline-block after:h-full after:w-full after:origin-bottom after:scale-y-0 after:transform after:opacity-100 after:transition-transform after:ease-base after:duration-500 active:transition-all active:ease-base active:duration-500",
          colors,
          padding,
          rounded ? 'rounded-full' : 'rounded-base',
          className,
          disabled
            ? 'cursor-not-allowed opacity-90'
            : 'hover:after:origin-top hover:after:scale-y-100 hover:after:transform'
        )}
        {...(['submit', 'button', 'reset'].includes(type) && { type })}
        disabled={disabled}
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
);

Button.displayName = 'Button';

export default Button;

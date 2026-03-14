'use client';

import {
  forwardRef,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type Ref,
} from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'default';
type ButtonSize = 'sm' | 'md';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
  rounded?: boolean;
  size?: ButtonSize;
  as?: ElementType;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  default:
    'bg-transparent text-muted hover:text-accent hover:bg-surface-secondary after:bg-surface-secondary',
  secondary: 'bg-surface-secondary text-accent hover:text-black after:bg-white',
  tertiary: 'bg-surface-muted text-muted hover:text-black after:bg-white',
  primary: 'bg-accent text-black after:bg-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-1 px-2',
  md: 'py-2 px-3',
};

const Button = forwardRef(
  (
    {
      variant = 'primary',
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

    return (
      <Component
        ref={ref}
        className={clsx(
          "relative inline-block h-auto min-h-0 w-auto cursor-pointer overflow-hidden opacity-100 text-center align-middle text-sm font-medium z-0 transition-all ease-base duration-500 after:content-[''] after:absolute after:left-0 after:top-0 after:inline-block after:h-full after:w-full after:origin-bottom after:scale-y-0 after:transform after:opacity-100 after:transition-transform after:ease-base after:duration-500 active:transition-all active:ease-base active:duration-500",
          variantStyles[variant],
          sizeStyles[size],
          rounded ? 'rounded-full' : 'rounded-base',
          className,
          disabled
            ? 'cursor-not-allowed opacity-90'
            : 'hover:after:origin-top hover:after:scale-y-100 hover:after:transform'
        )}
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

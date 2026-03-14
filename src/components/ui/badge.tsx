'use client';

import { forwardRef, type ComponentPropsWithoutRef, type ElementType, type Ref } from 'react';
import clsx from 'clsx';

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'muted';

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  variant?: BadgeVariant;
  as?: ElementType;
};

const bgColorMapper: Record<BadgeVariant, string> = {
  primary: 'bg-surface',
  secondary: 'bg-surface-secondary',
  tertiary: 'bg-surface-tertiary',
  muted: 'bg-surface-muted',
};

const textColorMapper: Record<BadgeVariant, string> = {
  primary: 'text-foreground',
  secondary: 'text-accent',
  tertiary: 'text-highlight',
  muted: 'text-muted',
};

const Badge = forwardRef(
  (
    { variant = 'muted', as, className, children, ...otherProps }: BadgeProps,
    ref: Ref<HTMLElement>
  ) => {
    const Component = as ?? 'span';

    return (
      <Component
        ref={ref}
        className={clsx(
          'py-1 px-2 rounded-base',
          bgColorMapper[variant],
          textColorMapper[variant],
          className
        )}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;

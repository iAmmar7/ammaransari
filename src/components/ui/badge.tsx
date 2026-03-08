'use client';

import { forwardRef, useMemo, type ElementType, type Ref } from 'react';
import clsx from 'clsx';

type BadgeType = 'primary' | 'secondary' | 'tertiary' | 'muted';

interface BadgeProps {
  type?: BadgeType;
  as?: ElementType;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const bgColorMapper = (type?: BadgeType) => {
  if (type === 'primary') return 'bg-surface';
  if (type === 'secondary') return 'bg-surface-secondary';
  if (type === 'tertiary') return 'bg-surface-tertiary';
  return 'bg-surface-muted';
};

const textColorMapper = (type?: BadgeType) => {
  if (type === 'primary') return 'text-foreground';
  if (type === 'secondary') return 'text-accent';
  if (type === 'tertiary') return 'text-highlight';
  return 'text-muted';
};

const Badge = forwardRef(
  ({ type, as, className, children, ...otherProps }: BadgeProps, ref: Ref<HTMLElement>) => {
    const Component = as ?? 'span';

    const bgColor = useMemo(() => bgColorMapper(type), [type]);
    const textColor = useMemo(() => textColorMapper(type), [type]);

    return (
      <Component
        ref={ref}
        className={clsx('py-1 px-2 rounded-base', bgColor, textColor, className)}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;

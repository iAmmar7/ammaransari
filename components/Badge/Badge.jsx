import { forwardRef, useMemo } from 'react';
import clsx from 'clsx';

const bgColorMapper = (type) => {
  let bgColor = 'bg-muted';
  if (type === 'primary') bgColor = 'bg-primary';
  if (type === 'secondary') bgColor = 'bg-secondary';
  if (type === 'tertiary') bgColor = 'bg-tertiary';
  return bgColor;
};

const textColorMapper = (type) => {
  let textColor = 'text-muted';
  if (type === 'primary') textColor = 'text-primary';
  if (type === 'secondary') textColor = 'text-secondary';
  if (type === 'tertiary') textColor = 'text-tertiary';
  return textColor;
};

const Badge = forwardRef((props, _ref) => {
  const { type, as, className, children, ...otherProps } = props;

  const Component = as ?? 'span';

  const bgColor = useMemo(() => bgColorMapper(type), [type]);
  const textColor = useMemo(() => textColorMapper(type), [type]);

  return (
    <Component className={clsx('py-1 px-2 rounded-base', bgColor, textColor, className)} {...otherProps}>
      {children}
    </Component>
  );
});

Badge.displayName = 'Badge';

export default Badge;

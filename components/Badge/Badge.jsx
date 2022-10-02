import { useMemo } from 'react';
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

function Badge(props) {
  const { type, className, children } = props;

  const bgColor = useMemo(() => bgColorMapper(type), [type]);
  const textColor = useMemo(() => textColorMapper(type), [type]);

  return <span className={clsx('py-1 px-2 rounded-base', bgColor, textColor, className)}>{children}</span>;
}

export default Badge;

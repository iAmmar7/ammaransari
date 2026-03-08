import clsx from 'clsx';

interface IconProps {
  icon?: string;
  className?: string;
}

export default function Icon({ icon, className }: IconProps) {
  if (!icon) return null;

  return <i className={clsx(icon, 'opacity-100', className)} />;
}

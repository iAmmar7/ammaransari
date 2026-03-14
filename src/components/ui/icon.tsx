import clsx from 'clsx';
import type { RemixiconComponentType } from '@remixicon/react';

interface IconProps {
  icon?: RemixiconComponentType;
  className?: string;
}

export default function Icon({ icon: IconComponent, className }: IconProps) {
  if (!IconComponent) return null;

  return <IconComponent size='1em' className={clsx('inline-block', className)} />;
}

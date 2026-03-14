import { type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { RiExternalLinkLine } from '@remixicon/react';

import Icon from './icon';

type LinkColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'muted'
  | 'venturedive'
  | 'careem'
  | 'uber'
  | 'carecloud'
  | 'planz'
  | 'sudofy'
  | 'adres'
  | 'signalwire';

const colorMapper: Record<LinkColor, string> = {
  primary: 'from-foreground text-foreground',
  secondary: 'from-accent text-accent',
  tertiary: 'from-highlight text-highlight',
  muted: 'from-muted text-muted',
  venturedive: 'from-venturedive text-venturedive',
  careem: 'from-careem text-careem',
  uber: 'from-uber text-uber',
  carecloud: 'from-carecloud text-carecloud',
  planz: 'from-planz text-planz',
  sudofy: 'from-sudofy text-sudofy',
  adres: 'from-adres text-adres',
  signalwire: 'from-signalwire text-signalwire',
};

const iconColorMapper: Record<LinkColor, string> = {
  primary: 'text-foreground',
  secondary: 'text-accent',
  tertiary: 'text-highlight',
  muted: 'text-muted',
  venturedive: 'text-venturedive',
  careem: 'text-careem',
  uber: 'text-uber',
  carecloud: 'text-carecloud',
  planz: 'text-planz',
  sudofy: 'text-sudofy',
  adres: 'text-adres',
  signalwire: 'text-signalwire',
};

type ExternalLinkProps = ComponentPropsWithoutRef<'a'> & {
  color?: LinkColor;
  showIcon?: boolean;
  underline?: boolean;
};

export default function ExternalLink({
  href,
  className,
  color = 'muted',
  showIcon = false,
  underline = false,
  children,
  ...otherProps
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        'no-underline group transition-all duration-200 ease-base inline-flex items-center gap-x-1 cursor-pointer',
        className
      )}
      target='_blank'
      rel='noopener noreferrer'
      {...otherProps}
    >
      {underline ? (
        <span
          className={clsx(
            'bg-bottom-left bg-linear-to-r to-muted bg-size-[0%_2px] bg-no-repeat group-hover:bg-size-[100%_2px] transition-all duration-500 ease-base',
            colorMapper[color]
          )}
        >
          {children}
        </span>
      ) : (
        children
      )}
      {showIcon && (
        <Icon icon={RiExternalLinkLine} className={clsx('text-sm', iconColorMapper[color])} />
      )}
    </a>
  );
}

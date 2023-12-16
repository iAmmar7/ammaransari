import clsx from 'clsx';

import Icon from '../Icon';

// FIXME: Tailwind is not reading dynamic colors properly. Ideal solution: `from-${color} text-${color}`
const colorMapper = {
  primary: 'from-primary text-primary',
  secondary: 'from-secondary text-secondary',
  tertiary: 'from-tertiary text-tertiary',
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

function ExternalLink(props) {
  const {
    href,
    className,
    color = 'muted',
    showIcon = false,
    underline = false,
    children,
    ...otherProps
  } = props;

  return (
    <a
      href={href}
      className={clsx(
        'no-underline group transition-all duration-sm ease-base inline-flex items-center gap-x-1 cursor-pointer',
        className
      )}
      target='blank'
      rel='noreferrer'
      {...otherProps}
    >
      {underline ? (
        <span
          className={clsx(
            'bg-left-bottom bg-gradient-to-r to-muted bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-md ease-base',
            colorMapper[color]
          )}
        >
          {children}
        </span>
      ) : (
        children
      )}
      {showIcon && (
        <Icon icon='ri-external-link-line' className={clsx('text-sm', `text-${color}`)} />
      )}
    </a>
  );
}

export default ExternalLink;

import clsx from 'clsx';

import Icon from '../Icon/Icon';

function ExternalLink(props) {
  const { href, className, color = 'muted', showIcon = false, underline = false, children, ...otherProps } = props;

  return (
    <a
      href={href}
      className={clsx(
        'no-underline group transition-all duration-sm ease-base inline-flex items-center gap-x-1',
        className
      )}
      target='blank'
      rel='noreferrer'
      {...otherProps}
    >
      {underline ? (
        <span
          className={clsx(
            'bg-left-bottom bg-gradient-to-r to-muted bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out',
            `from-${color} text-${color}`
          )}
        >
          {children}
        </span>
      ) : (
        children
      )}
      {showIcon && <Icon icon='ri-external-link-line' className={clsx('text-sm', `text-${color}`)} />}
    </a>
  );
}

export default ExternalLink;

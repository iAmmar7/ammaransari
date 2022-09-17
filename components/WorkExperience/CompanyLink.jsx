import clsx from 'clsx';
import Icon from '../Icon/Icon';

function CompanyLink(props) {
  const { name, url, tag } = props;

  return (
    <a className='group transition-all duration-sm ease-base flex items-center gap-x-1' href={url} target='blank'>
      <span
        className={clsx(
          'bg-left-bottom bg-gradient-to-r to-muted bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out',
          tag === 'venturedive' && 'from-venturedive text-venturedive',
          tag === 'adres' && 'from-adres text-adres',
          tag === 'careem' && 'from-careem text-careem',
          tag === 'uber' && 'from-uber text-uber',
          tag === 'carecloud' && 'from-carecloud text-carecloud',
          tag === 'planz' && 'from-planz text-planz',
          tag === 'sudofy' && 'from-sudofy text-sudofy'
        )}
      >
        {name}
      </span>
      {url && (
        <Icon
          icon='ri-external-link-line'
          className={clsx(
            'text-sm',
            tag === 'venturedive' && 'text-venturedive',
            tag === 'adres' && 'text-adres',
            tag === 'careem' && 'text-careem',
            tag === 'uber' && 'text-uber',
            tag === 'carecloud' && 'text-carecloud',
            tag === 'planz' && 'text-planz',
            tag === 'sudofy' && 'text-sudofy'
          )}
        />
      )}
    </a>
  );
}

export default CompanyLink;

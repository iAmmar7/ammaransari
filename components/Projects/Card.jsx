import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Icon from '../Icon';
import Badge from '../Badge';
import { blurryDataProfile } from '../../lib/blurryData';
import { isEmpty, toLowerCase } from '../../lib/utils';

function Card(props) {
  const { id, name, summary, image, url, code, domain, tech } = props;

  return (
    <motion.li
      className='col-span-6 sm:col-span-3 lg:col-span-2 list-none'
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
      exit={{ scale: 0, transition: { ease: 'easeInOut', duration: 0.5 } }}
      viewport={{ once: true }}
      layout
    >
      <article className='bg-muted opacity-100 rounded-base shadow-md backdrop-blur-md transition-all ease-base duration-md p-4 md:p-5 group hover:translate-x-0 hover:-translate-y-1.5 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-100 hover:scale-y-100'>
        <figure>
          <div className='relative overflow-hidden'>
            <div className='blur-none transition-all duration-md group-hover:blur'>
              <picture className='box-border block overflow-hidden bg-none opacity-100 border-none m-0 p-0 relative h-60 w-full'>
                <Image
                  alt={name}
                  src={!isEmpty(image) ? image : 'https://via.placeholder.com/200.png'}
                  quality={100}
                  placeholder='blur'
                  blurDataURL={blurryDataProfile}
                  width={'100%'}
                  height={'100%'}
                  objectFit='cover'
                  layout='responsive'
                />
              </picture>
            </div>
            <div className='absolute left-0 top-0 z-10 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-muted/80 transition-all duration-md group-hover:translate-x-0'>
              <Link href={`/projects/${id}`}>
                <a
                  className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0'
                  title='Project details'
                >
                  <Icon icon='ri-information-line' className='text-xl' />
                </a>
              </Link>
              {code && (
                <a
                  className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0'
                  href={code}
                  target='blank'
                  title='Project code'
                >
                  <Icon icon='ri-code-s-slash-line' className='text-xl' />
                </a>
              )}
              {url && (
                <a
                  className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0'
                  href={url}
                  target='blank'
                  title='Project live'
                >
                  <Icon icon='ri-external-link-line' className='text-xl' />
                </a>
              )}
            </div>
          </div>
          <figcaption>
            <Link href={`/projects/${id}`}>
              <a title={`${name} details`}>
                <div className='mt-4'>
                  <h5 className='mb-0 font-bold'>{name}</h5>
                  <p className='truncate'>{summary}</p>
                  <div className='flex gap-x-1 items-end mt-1'>
                    <Badge type='secondary' className='text-sm'>
                      {domain}
                    </Badge>
                    {tech.map((t) => (
                      <Badge type='secondary' key={t} className='text-sm'>
                        {toLowerCase(t)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            </Link>
          </figcaption>
        </figure>
      </article>
    </motion.li>
  );
}

export default Card;

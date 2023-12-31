import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/Icon';
import ExternalLink from '../components/ExternalLink';
import WavyText from '../components/WavyText';
import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBreakpoints } from '../hooks';
import { capitalize, take, isEmpty, isArray, last } from '../lib/utils';
import { blurryDataProfile } from '../lib/blurryData';

function Project(props) {
  const { children } = props;
  const { xs, sm } = useBreakpoints();

  const component = isArray(children) ? last(children) : children;
  const {
    props: {
      project: { name, summary, domain, technologies, code, url, thumbnail },
    },
  } = component;

  return (
    <div className='flex flex-col min-h-screen relative z-0 text-sm md:text-base'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <Navbar />
      <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto'>
        <motion.section
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: 'easeInOut', duration: 0.5, delay: 0 },
          }}
          viewport={{ once: false }}
          className='w-full flex justify-center items-center transition-all duration-md'
        >
          <div className='mx-auto w-full px-4 md:px-0 md:w-10/12 max-w-6xl relative'>
            {/* Go back */}
            <div className='flex flex-row items-center mb-6 md:mb-8'>
              <Link href='/projects' passHref>
                <a
                  title='Go back'
                  className='flex items-center gap-1 justify-center rounded-full bg-neutrals-900/20'
                >
                  <Icon icon='ri-arrow-left-line' className='text-xl' />
                  <span className='text-sm text-muted'>projects</span>
                </a>
              </Link>
            </div>

            {/* Thumbnail */}
            <figure>
              <div className='bg-muted opacity-100 rounded-base shadow-md backdrop-blur-md transition-all ease-base duration-md p-0 group hover:translate-x-0 hover:-translate-y-1.5 hover:rotate-0 hover:skew-x-0 hover:skew-y-0 hover:scale-x-100 hover:scale-y-100'>
                <div className='relative overflow-hidden rounded-base'>
                  <picture className='blur-none transition-all duration-md group-hover:blur'>
                    <Image
                      alt={name}
                      src={!isEmpty(thumbnail) ? thumbnail : 'https://via.placeholder.com/200.png'}
                      quality={100}
                      placeholder='blur'
                      blurDataURL={blurryDataProfile}
                      width={'100%'}
                      height={xs || sm ? 40 : 30}
                      objectFit='cover'
                      layout='responsive'
                    />
                  </picture>
                  <div className='absolute left-0 top-0 z-10 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-muted/80 transition-all duration-md group-hover:translate-x-0'>
                    {code && (
                      <a
                        className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0'
                        href={code}
                        target='blank'
                      >
                        <Icon icon='ri-code-s-slash-line' className='text-xl' />
                      </a>
                    )}
                    {url && (
                      <a
                        className='inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0'
                        href={url}
                        target='blank'
                      >
                        <Icon icon='ri-external-link-line' className='text-xl' />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <figcaption>
                <div className='w-full mt-4'>
                  <Badge className='text-xs md:text-sm'>{capitalize(domain)}</Badge>
                  <WavyText
                    as='h1'
                    className='text-3xl sm:text-5xl font-display font-bold leading-[1.1] mt-4 sm:mt-2 mb-2 sm:mb-5 text-tertiary'
                    text={name}
                    delay={0.6}
                  />
                  <p className='text-sm lg:text-base leading-relaxed mb-12'>{summary}</p>
                  <div className='flex gap-x-2 border-b-[0.5px] border-muted pb-3'>
                    {take(technologies, 3).map((tech) => (
                      <Badge className='text-xs md:text-sm' key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* External links */}
                <div className='absolute flex items-center space-x-4 bottom-3 right-4 md:right-0'>
                  {code && (
                    <ExternalLink title='View source code'>
                      <Icon
                        icon='ri-code-s-slash-fill'
                        className='text-base md:text-xl hover:text-tertiary transition-colors duration-sm ease-base'
                      />
                    </ExternalLink>
                  )}
                  {url && (
                    <ExternalLink title='View live application'>
                      <Icon
                        icon='ri-external-link-line'
                        className='text-base md:text-lg hover:text-tertiary transition-colors duration-sm ease-base'
                      />
                    </ExternalLink>
                  )}
                </div>
              </figcaption>
            </figure>
          </div>
        </motion.section>

        {/* Children */}
        <motion.section
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: 'easeInOut', duration: 0.5, delay: 0.6 },
          }}
          viewport={{ once: false }}
          className='mx-auto w-full px-4 md:px-0 md:w-10/12 max-w-6xl relative'
        >
          {children}
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default Project;

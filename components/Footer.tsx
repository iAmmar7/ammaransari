import { Container } from './Container';
import { socialLinks } from '@/lib/socialMedia';
import { siteConfig } from '@/data/content';

export function Footer() {
  return (
    <footer className='border-t border-border/50'>
      <Container className='flex flex-col items-center justify-between gap-4 py-8 sm:flex-row'>
        <ul className='flex items-center gap-5'>
          {socialLinks.map(({ name, url }) => (
            <li key={name}>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-fg-muted transition-colors hover:text-accent'
                title={name}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <p className='text-sm text-fg-faint'>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}

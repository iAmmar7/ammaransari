import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { site } from '@/data/site';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New message from {name} via {site.domain}
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                accent: '#2dc8ee',
                surface: '#08070b',
              },
            },
          },
        }}
      >
        <Body className='m-0 bg-gray-100 p-0 font-sans'>
          <Container className='mx-auto max-w-140 px-5 py-10'>
            {/* Header */}
            <Section className='pb-6 text-center'>
              <Text className='m-0 text-lg font-bold tracking-tight text-surface'>
                {site.domain}
              </Text>
            </Section>

            {/* Content */}
            <Section className='rounded-lg border border-gray-200 bg-white px-8 py-9'>
              <Heading
                as='h1'
                className='mb-1.5 mt-0 text-[22px] font-bold leading-tight text-surface'
              >
                New Contact Message
              </Heading>
              <Text className='mb-6 mt-0 text-[15px] leading-relaxed text-gray-500'>
                You received a new message through your portfolio contact form.
              </Text>

              <Hr className='mb-6 border-gray-200' />

              {/* Sender Info */}
              <Section className='mb-6 rounded-md bg-gray-50 px-5 py-4'>
                <table cellPadding='0' cellSpacing='0' className='w-full'>
                  <tbody>
                    <tr>
                      <td className='w-17.5 pb-3 pr-4 align-top text-[13px] font-semibold uppercase tracking-wider text-gray-500'>
                        Name
                      </td>
                      <td className='pb-3 align-top text-[15px] text-surface'>{name}</td>
                    </tr>
                    <tr>
                      <td className='w-17.5 pr-4 align-top text-[13px] font-semibold uppercase tracking-wider text-gray-500'>
                        Email
                      </td>
                      <td className='align-top text-[15px]'>
                        <Link href={`mailto:${email}`} className='text-accent no-underline'>
                          {email}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              {/* Message */}
              <Text className='mb-2 mt-0 text-[13px] font-semibold uppercase tracking-wider text-gray-500'>
                Message
              </Text>
              <Section className='rounded-md border-l-[3px] border-l-accent bg-gray-50 px-5 py-4'>
                <Text className='m-0 whitespace-pre-wrap text-[15px] leading-relaxed text-gray-800'>
                  {message}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className='pt-6 text-center'>
              <Text className='m-0 text-[13px] text-gray-400'>
                This email was sent from the contact form on{' '}
                <Link href={site.url} className='text-accent no-underline'>
                  {site.domain}
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

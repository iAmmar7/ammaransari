'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';

import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Collapse from '@/components/ui/collapse';
import { isEmpty } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SentStatus = 'succeed' | 'failed' | null;

const initFormData: FormData = { name: '', email: '', message: '' };

const fields = [
  {
    id: 'name' as const,
    label: 'Name',
    type: 'text',
    placeholder: 'John Doe',
    autoComplete: 'name',
    component: 'input' as const,
  },
  {
    id: 'email' as const,
    label: 'Email',
    type: 'email',
    placeholder: 'john@doe.com',
    autoComplete: 'email',
    inputMode: 'email' as const,
    component: 'input' as const,
  },
  {
    id: 'message' as const,
    label: 'Message',
    placeholder: 'How can I help you?',
    component: 'textarea' as const,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initFormData);
  const [sentStatus, setSentStatus] = useState<SentStatus>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSentStatus(null);
    setIsSending(true);

    try {
      const { name, email, message } = formData;

      if (isEmpty(name) || isEmpty(email) || isEmpty(message)) return;

      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.status !== 200) {
        setSentStatus('failed');
        return;
      }

      setFormData(initFormData);
      setSentStatus('succeed');
    } catch {
      setSentStatus('failed');
    } finally {
      setIsSending(false);
    }
  };

  const handleResetError = () => {
    setSentStatus(null);
  };

  return (
    <div className='mb-4 md:mb-0 flex flex-col items-center md:items-start'>
      <div className='hidden sm:flex flex-col text-muted'>
        <p>
          How can you connect with me? Well... I can think of two options; <br />
        </p>
        <p className='text-foreground'>1. Fill out this form,</p>
        <p>
          2. Or you may go through{' '}
          <a
            href='https://www.quora.com/How-can-I-train-my-pigeon-to-carry-messages-for-me'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            this
          </a>{' '}
          amazing question on quora. I&apos;ll get back to you... eventually.
        </p>
      </div>
      <div className='w-full flex flex-col items-center'>
        <form
          aria-label='Contact form'
          className='flex flex-col mt-0 sm:mt-4 gap-y-2 w-full md:max-w-md'
          onSubmit={handleSendEmail}
          onBlur={handleResetError}
          noValidate
        >
          {fields.map((field) => {
            const Component = field.component;
            return (
              <div className='flex flex-col mb-3 gap-y-2 min-w-75' key={field.id}>
                <label htmlFor={field.id} className='text-muted uppercase text-xs font-bold'>
                  {field.label}
                </label>
                <Component
                  id={field.id}
                  {...('type' in field ? { type: field.type } : {})}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  required
                  aria-required='true'
                  {...('autoComplete' in field ? { autoComplete: field.autoComplete } : {})}
                  {...('inputMode' in field ? { inputMode: field.inputMode } : {})}
                  {...(field.component === 'textarea' ? { rows: 3 } : {})}
                  className='text-foreground bg-surface border border-muted rounded-base p-2 md:p-3 text-sm md:text-base focus:outline-none focus:border-accent'
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <Collapse show={sentStatus === 'failed'}>
            <p role='alert' className='text-sm text-red-400 mb-2'>
              Unable to send email! Try to send it manually{' '}
              <a
                href='mailto:iammaransari@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='text-accent'
                title='Send email to Ammar Ansari'
              >
                iammaransari@gmail.com
              </a>
            </p>
          </Collapse>
          <Collapse show={sentStatus === 'succeed'}>
            <p role='status' className='text-sm text-green-400 mb-2'>
              Your message has been delivered!
            </p>
          </Collapse>
          <div className='flex flex-col gap-y-2'>
            <Button
              type='submit'
              endEnhancer={
                isSending ? (
                  <Icon icon='ri-loader-4-line' className='ml-2 animate-spin' />
                ) : (
                  <Icon icon='ri-send-plane-fill' className='ml-2' />
                )
              }
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

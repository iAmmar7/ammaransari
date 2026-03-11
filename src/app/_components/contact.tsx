'use client';

import { useState } from 'react';

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

const inputClass =
  'text-foreground bg-surface border border-muted rounded-base p-2 md:p-3 text-sm md:text-base focus:outline-none focus:border-accent';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initFormData);
  const [sentStatus, setSentStatus] = useState<SentStatus>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendEmail = async (event: React.SubmitEvent<HTMLFormElement>) => {
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
    <div className='mb-4 md:mb-0 flex flex-col w-full items-center md:items-start'>
      <div className='hidden sm:flex [@media(max-height:700px)]:hidden flex-col text-muted'>
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
          className='flex flex-col mt-0 sm:mt-4 gap-y-2 w-full max-w-md md:max-w-xl'
          onSubmit={handleSendEmail}
          onBlur={handleResetError}
        >
          <div className='flex flex-col md:flex-row md:gap-x-4'>
            <div className='flex flex-col mb-3 gap-y-2 flex-1'>
              <label htmlFor='name' className='text-muted uppercase text-xs font-bold'>
                Name <span className='text-accent'>*</span>
              </label>
              <input
                id='name'
                type='text'
                placeholder='John Doe'
                value={formData.name}
                required
                aria-required='true'
                autoComplete='name'
                className={inputClass}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col mb-3 gap-y-2 flex-1'>
              <label htmlFor='email' className='text-muted uppercase text-xs font-bold'>
                Email <span className='text-accent'>*</span>
              </label>
              <input
                id='email'
                type='email'
                placeholder='john@doe.com'
                value={formData.email}
                required
                aria-required='true'
                autoComplete='email'
                inputMode='email'
                className={inputClass}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-col mb-3 gap-y-2'>
            <label htmlFor='message' className='text-muted uppercase text-xs font-bold'>
              Message <span className='text-accent'>*</span>
            </label>
            <textarea
              id='message'
              placeholder='How can I help you?'
              value={formData.message}
              required
              aria-required='true'
              rows={3}
              className={inputClass}
              onChange={handleChange}
            />
          </div>
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

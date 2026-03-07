'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Button } from './Button';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.email('Invalid email address').max(320),
  message: z.string().min(1, 'Message is required').max(5000),
});

type Status = 'idle' | 'sending' | 'success' | 'error';
type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors({});

    const parsed = contactSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      const tree = z.treeifyError(parsed.error);
      setFieldErrors({
        name: tree.properties?.name?.errors?.[0],
        email: tree.properties?.email?.errors?.[0],
        message: tree.properties?.message?.errors?.[0],
      });
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        setStatus('error');
        return;
      }

      setName('');
      setEmail('');
      setMessage('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputStyles =
    'w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-accent focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='name'
          className='text-xs font-semibold uppercase tracking-wider text-fg-muted'
        >
          Name
        </label>
        <input
          id='name'
          type='text'
          required
          placeholder='John Doe'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputStyles}
        />
        {fieldErrors.name && <p className='text-xs text-red-400'>{fieldErrors.name}</p>}
      </div>
      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='email'
          className='text-xs font-semibold uppercase tracking-wider text-fg-muted'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          required
          placeholder='john@doe.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyles}
        />
        {fieldErrors.email && <p className='text-xs text-red-400'>{fieldErrors.email}</p>}
      </div>
      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='message'
          className='text-xs font-semibold uppercase tracking-wider text-fg-muted'
        >
          Message
        </label>
        <textarea
          id='message'
          required
          rows={3}
          placeholder='How can I help you?'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputStyles} resize-none`}
        />
        {fieldErrors.message && <p className='text-xs text-red-400'>{fieldErrors.message}</p>}
      </div>

      {status === 'error' && (
        <p className='text-sm text-red-400'>
          Unable to send. Try emailing{' '}
          <a href='mailto:contact@ammaransari.dev' className='text-accent underline'>
            contact@ammaransari.dev
          </a>
        </p>
      )}
      {status === 'success' && (
        <p className='text-sm text-emerald-400'>Your message has been delivered!</p>
      )}

      <Button type='submit' disabled={status === 'sending'} className='mt-1'>
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}

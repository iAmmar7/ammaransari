'use client';

import { useState } from 'react';
import { Button } from './Button';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
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

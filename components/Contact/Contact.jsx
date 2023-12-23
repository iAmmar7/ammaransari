import { useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';
import Collapse from '../Collapse';
import { isEmpty } from '../../lib/utils';

const initFormData = { name: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initFormData);
  const [sentStatus, setSentStatus] = useState(null);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [id]: value,
    }));
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setSentStatus(null);

    try {
      const { name, email, message } = formData;

      if (isEmpty(name) || isEmpty(email) || isEmpty(message)) return;

      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.status !== 200) {
        setSentStatus('failed');
      }

      setFormData(initFormData);
      setSentStatus('succeed');
    } catch (error) {
      setSentStatus('failed');
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
        <p className='text-primary'>1. Fill out this form,</p>
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
          className='flex flex-col mt-0 sm:mt-4 gap-y-2 w-full md:max-w-md'
          onSubmit={handleSendEmail}
          onBlur={handleResetError}
        >
          {[
            {
              id: 'name',
              type: 'text',
              placeholder: 'John Doe',
              component: 'input',
              value: formData['name'],
            },
            {
              id: 'email',
              type: 'email',
              placeholder: 'john@doe.com',
              component: 'input',
              value: formData['email'],
            },
            {
              id: 'message',
              type: 'text',
              placeholder: 'How can I help you?',
              component: 'textarea',
              value: formData['message'],
            },
          ].map((field) => (
            <div className='flex flex-col mb-3 gap-y-2 min-w-[300px]' key={field.id}>
              <label htmlFor={field.id} className='text-muted uppercase text-xs font-bold'>
                {field.id}
              </label>
              <field.component
                id={field.id}
                type={field.text}
                placeholder={field.placeholder}
                value={field.value}
                required
                rows={2}
                className='text-primary bg-primary border border-muted rounded-base p-3 focus:outline-none focus:border-secondary'
                onChange={handleChange}
              />
            </div>
          ))}
          <Collapse show={sentStatus === 'failed'}>
            <p className='text-sm text-red-400 mb-2'>
              Unable to send email! Try to send it manually{' '}
              <a
                href='mailto:iammar7@yahoo.com'
                target='_blank'
                rel='noreferrer'
                className='text-secondary'
                title='Send email to Ammar Ansari'
              >
                iammar7@yahoo.com
              </a>
            </p>
          </Collapse>
          <Collapse show={sentStatus === 'succeed'}>
            <p className='text-sm text-green-400 mb-2'>Your message has been delivered!</p>
          </Collapse>
          <div className='flex flex-col gap-y-2'>
            <Button type='submit' endEnhancer={<Icon icon='ri-send-plane-fill' className='ml-2' />}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

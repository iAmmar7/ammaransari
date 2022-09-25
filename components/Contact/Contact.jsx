import { useState } from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Collapse from '../Collapse/Collapse';

function Contact() {
  const [sendFailed, setSendFailed] = useState(false);

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setSendFailed(false);

    try {
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;

      const res = await fetch(`/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.status !== 200) setSendFailed(true);
    } catch (error) {
      setSendFailed(true);
    }
  };

  const handleResetError = () => {
    if (sendFailed) setSendFailed(false);
  };

  return (
    <div className='mb-4 md:mb-0 flex flex-col items-center md:items-start'>
      <div className='hidden sm:flex flex-col text-muted'>
        <p>
          How can you connect with me? Well... I can think of three options; <br />
        </p>
        <p className='text-primary'>fill this form,</p>
        <p>
          send me an email directly on my email address{' '}
          <a href='mailto:iammar7@yahoo.com' target='_blank' rel='noreferrer' className='text-secondary'>
            iammar7@yahoo.com
          </a>
          ,
        </p>
        <p>
          or you may go through{' '}
          <a
            href='https://www.quora.com/How-can-I-train-my-pigeon-to-carry-messages-for-me'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            this
          </a>{' '}
          amazing question on quora. I&#39;ll try my best to respond in a timely manner.
        </p>
      </div>
      <h2 className='hidden sm:block mt-10 text-xl font-bold'>Send an email</h2>
      <form
        className='flex flex-col mt-0 sm:mt-4 gap-y-2 w-full md:max-w-md'
        onSubmit={handleSendEmail}
        onBlur={handleResetError}
      >
        {[
          { id: 'name', type: 'text', placeholder: 'John Doe', component: 'input' },
          { id: 'email', type: 'email', placeholder: 'john@doe.com', component: 'input' },
          { id: 'message', type: 'text', placeholder: 'How can I help you?', component: 'textarea' },
        ].map((field) => (
          <div className='flex flex-col mb-3 gap-y-2 min-w-[300px]' key={field.id}>
            <label htmlFor={field.id} className='text-muted uppercase text-xs font-bold'>
              {field.id}
            </label>
            <field.component
              id={field.id}
              type={field.text}
              placeholder={field.placeholder}
              required
              className='text-primary bg-primary border border-muted rounded-base p-3 focus:outline-none focus:border-secondary'
            />
          </div>
        ))}
        <Collapse show={sendFailed}>
          <p className='text-sm text-red-400 mb-2'>
            Unable to send email! Try sending it manually{' '}
            <a href='mailto:iammar7@yahoo.com' target='_blank' rel='noreferrer' className='text-secondary'>
              iammar7@yahoo.com
            </a>
          </p>
        </Collapse>
        <div className='flex flex-col gap-y-2'>
          <Button type='submit' endEnhancer={<Icon icon='ri-send-plane-fill' className='ml-2' />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

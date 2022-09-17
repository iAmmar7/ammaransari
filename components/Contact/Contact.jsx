import Button from '../Button/Button';
import Icon from '../Icon/Icon';

function Contact() {
  const handleSendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p className='text-muted'>
        How can you connect with me? Well... I can think of three options; <br />
        <span className='text-primary'>fill this form</span>, <br />
        send me an email directly on my email address{' '}
        <a href='mailto:iammar7@yahoo.com' target='_blank' rel='noreferrer' className='text-secondary'>
          iammar7@yahoo.com
        </a>
        , <br />
        or you may go through{' '}
        <a
          href='https://www.quora.com/How-can-I-train-my-pigeon-to-carry-messages-for-me'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          this
        </a>{' '}
        amazing question on quora. I&#39;ll try my best to respond in a timely manner
      </p>
      <h2 className='mt-10 text-xl font-bold'>Send an email</h2>
      <form className='flex flex-col max-w-md mt-4 gap-y-2' onSubmit={handleSendEmail}>
        {[
          { id: 'name', type: 'text', placeholder: 'John Doe', component: 'input' },
          { id: 'email', type: 'email', placeholder: 'john@doe.com', component: 'input' },
          { id: 'message', type: 'text', placeholder: 'How can I help you?', component: 'textarea' },
        ].map((field) => (
          <div className='flex flex-col mb-3 gap-y-2' key={field.id}>
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
        <div className='flex flex-col mb-3 gap-y-2'>
          <Button type='submit' endEnhancer={<Icon icon='ri-send-plane-fill' className='ml-2' />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

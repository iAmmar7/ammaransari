import { Klotty } from 'klotty';

const klotty = new Klotty(process.env.KLOTTY_API_KEY);

import EmailTemplate from '../../components/EmailTemplate/EmailTemplate';

export default async function sendEmail(req, res) {
  try {
    const data = req.body;

    await klotty.sendEmail({
      from: 'web@ammaransari.com',
      to: 'iammar7@yahoo.com',
      subject: `${data.name} - via ammaransari.com`,
      react: <EmailTemplate {...data} />,
    });

    res.status(200).json({ message: 'Email sent' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

import EmailTemplate from '../../components/EmailTemplate/EmailTemplate';

export default async function sendEmail(req, res) {
  try {
    const body = req.body;

    const { data, error } = await resend.emails.send({
      from: 'Ammar Ansari <contact@ammaransari.dev>',
      to: ['iammaransari@gmail.com'],
      subject: 'Contact - ammaransari.dev',
      react: EmailTemplate({ ...body }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

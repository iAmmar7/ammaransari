import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from './email-template';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Ammar Ansari <contact@ammaransari.dev>',
      to: ['iammaransari@gmail.com'],
      subject: 'Contact - ammaransari.dev',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'An unexpected error occurred';
    return NextResponse.json({ message }, { status: 500 });
  }
}

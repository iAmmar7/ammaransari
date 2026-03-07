import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email().max(320),
  message: z.string().min(1).max(5000),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid input.', details: z.treeifyError(parsed.error) },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  const { error } = await getResend().emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'contact@ammaransari.dev',
    replyTo: email,
    subject: `Portfolio: Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

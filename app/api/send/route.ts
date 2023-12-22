import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response= await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Acme <madhumac@resend.dev>',
      to: ['madhumj623@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });
  
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return NextResponse.json({ success: false, error: error.message });
  }  
}

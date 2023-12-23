import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();
  try {
    const emailTemplate = EmailTemplate({ response });

    // Log the rendered email template for debugging
    console.log('Rendered Email Template:', emailTemplate);

    const emailTo = response?.emailToSend ? response.emailToSend.split("@")[0] : "";

    const data = await resend.emails.send({
      from: 'Acme <madhumac@resend.dev>',
      to: ['madhumj623@gmail.com'],
      subject: emailTo + " Shared File with you",
      react: emailTemplate,
    });

    // Log the response data for debugging
    console.log('Email Sending Response:', data);


    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return NextResponse.json({ success: false, error: error.message });
  }  
}

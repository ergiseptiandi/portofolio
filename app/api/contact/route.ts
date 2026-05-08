import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  generateCsrfToken,
  setCsrfCookie,
  getCsrfTokenFromCookie,
  validateCsrfToken,
} from '@/lib/csrf';

export async function GET() {
  const token = generateCsrfToken();
  await setCsrfCookie(token);
  return NextResponse.json({ csrfToken: token });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, csrfToken } = body;

    const cookieToken = await getCsrfTokenFromCookie();
    if (!validateCsrfToken(cookieToken, csrfToken)) {
      return NextResponse.json({ message: 'Invalid CSRF token' }, { status: 403 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ergiputra321@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

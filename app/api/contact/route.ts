import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  generateCsrfToken,
  setCsrfCookie,
  getCsrfTokenFromCookie,
  validateCsrfToken,
} from '@/lib/csrf';

// ---- In-memory rate limiter ----
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3; // max 3 submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes

function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// Periodically clean up expired entries (every 30 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of rateMap) {
      if (now > val.resetAt) rateMap.delete(key);
    }
  }, 30 * 60 * 1000);
}

// ---- Verify Turnstile token ----
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

// ---- Routes ----

export async function GET() {
  const token = generateCsrfToken();
  await setCsrfCookie(token);
  return NextResponse.json({ csrfToken: token });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, csrfToken, turnstileToken } = body;

    // 1. Rate limit
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ message: 'Rate limited. Try again later.' }, { status: 429 });
    }

    // 2. CSRF check
    const cookieToken = await getCsrfTokenFromCookie();
    if (!validateCsrfToken(cookieToken, csrfToken)) {
      return NextResponse.json({ message: 'Invalid CSRF token' }, { status: 403 });
    }

    // 3. Turnstile check
    if (!turnstileToken) {
      return NextResponse.json({ message: 'Captcha verification required' }, { status: 400 });
    }
    const turnstileValid = await verifyTurnstileToken(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json({ message: 'Captcha verification failed' }, { status: 400 });
    }

    // 4. Send email
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

import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import type { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

async function saveFallback(payload: Record<string, any>) {
  const dir = path.join(process.cwd(), '.debug-mails');
  await fs.mkdir(dir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `contact-${timestamp}.json`;
  const full = path.join(dir, filename);
  await fs.writeFile(full, JSON.stringify({ ...payload, savedAt: new Date().toISOString() }, null, 2), 'utf8');
  return full;
}

export async function POST(req: NextRequest) {
  try {
    console.log('[api/contact] POST received');
    const body = await req.json();
    console.log('[api/contact] body:', JSON.stringify(body));
    const { name, email, phone, date, message } = body || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email and message are required.' }), { status: 400 });
    }

    // Configure transporter. Prefer environment SMTP settings; otherwise create an ethereal test account.
    let transporter;
    let info;
    let previewUrl: string | undefined;

    if (process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS || undefined,
        },
      });
    } else {
      // Create Ethereal account for local testing
      console.log('[api/contact] No SMTP env configured — creating Ethereal test account');
      const testAccount = await nodemailer.createTestAccount();
      console.log('[api/contact] Ethereal account created', { user: testAccount.user });
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
    }

    // Verify transporter connectivity (helpful to fail fast with useful message)
    try {
      // transporter.verify may throw if connection/auth fails
      // Note: some transports (Ethereal) should verify successfully
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await transporter.verify();
      console.log('[api/contact] transporter verified');
    } catch (verifyErr) {
      console.error('[api/contact] transporter.verify failed', verifyErr);
      // Save message locally as fallback so no submissions are lost
      try {
        const saved = await saveFallback({ name, email, phone, date, message });
        return new Response(JSON.stringify({ ok: true, savedTo: saved, warning: 'Transporter verification failed; message saved locally.' }), { status: 200 });
      } catch (saveErr) {
        console.error('[api/contact] failed to save fallback', saveErr);
        const payload: any = { error: 'Transporter verification failed and fallback save failed.' };
        if (process.env.NODE_ENV !== 'production') payload.details = String(verifyErr);
        return new Response(JSON.stringify(payload), { status: 502 });
      }
    }

  // Default recipient: user's requested address. This can be overridden with CONTACT_TO_EMAIL env var.
  const toAddress = process.env.CONTACT_TO_EMAIL || 'info@idaraalkhair.com';

  // Prefer Resend API if configured (better deliverability and no SMTP needed)
  if (process.env.RESEND_API_KEY) {
    try {
      console.log('[api/contact] Sending via Resend API');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const sendResult = await resend.emails.send({
        from: process.env.SENDER_EMAIL || `no-reply@${process.env.NEXT_PUBLIC_SITE_DOMAIN || 'example.com'}`,
        to: toAddress,
        subject: `Website Contact Form: ${name}`,
        html: `<h3>New contact form submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Preferred Date:</strong> ${date || 'N/A'}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      });
      console.log('[api/contact] Resend result:', sendResult);
      // Save a copy locally for admin viewing / audit
      try {
        const saved = await saveFallback({ name, email, phone, date, message, resendId: (sendResult as any)?.id || null });
        return new Response(JSON.stringify({ ok: true, resendId: (sendResult as any)?.id || null, savedTo: saved }), { status: 200 });
      } catch (saveErr) {
        console.error('[api/contact] failed to save fallback after Resend success', saveErr);
        return new Response(JSON.stringify({ ok: true, resendId: (sendResult as any)?.id || null, warning: 'Resend succeeded but saving fallback failed.' }), { status: 200 });
      }
    } catch (resendErr) {
      console.error('[api/contact] Resend send failed', resendErr);
      try {
        const saved = await saveFallback({ name, email, phone, date, message, sendError: String(resendErr) });
        return new Response(JSON.stringify({ ok: true, savedTo: saved, warning: 'Resend send failed; message saved locally.' }), { status: 200 });
      } catch (saveErr) {
        console.error('[api/contact] failed to save fallback after Resend error', saveErr);
        const payload: any = { error: 'Resend failed and fallback save failed.' };
        if (process.env.NODE_ENV !== 'production') payload.details = String(resendErr);
        return new Response(JSON.stringify(payload), { status: 500 });
      }
    }
  }

  try {
    info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: toAddress,
      subject: `Website Contact Form: ${name}`,
      html: `<h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Preferred Date:</strong> ${date || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });
    console.log('[api/contact] sendMail info:', info);
    // Save a copy locally for admin viewing / audit
    try {
      const saved = await saveFallback({ name, email, phone, date, message });
      // If ethereal preview exists, include it as well
      let previewUrl: string | undefined;
      try {
        // @ts-ignore
        previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
      } catch (e) {
        previewUrl = undefined;
      }
      return new Response(JSON.stringify({ ok: true, preview: previewUrl || null, savedTo: saved }), { status: 200 });
    } catch (saveErr) {
      console.error('[api/contact] failed to save fallback after sendMail success', saveErr);
      try {
        // still try to return preview if available
        // @ts-ignore
        const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
        return new Response(JSON.stringify({ ok: true, preview: previewUrl || null, warning: 'Message sent but saving fallback failed.' }), { status: 200 });
      } catch (_) {
        return new Response(JSON.stringify({ ok: true, warning: 'Message sent but saving fallback failed.' }), { status: 200 });
      }
    }
  } catch (sendErr) {
    console.error('[api/contact] sendMail failed', sendErr);
    try {
      const saved = await saveFallback({ name, email, phone, date, message, sendError: String(sendErr) });
      return new Response(JSON.stringify({ ok: true, savedTo: saved, warning: 'sendMail failed; message saved locally.' }), { status: 200 });
    } catch (saveErr) {
      console.error('[api/contact] failed to save fallback after sendMail error', saveErr);
      const payload: any = { error: 'sendMail failed and fallback save failed.' };
      if (process.env.NODE_ENV !== 'production') payload.details = String(sendErr);
      return new Response(JSON.stringify(payload), { status: 500 });
    }
  }

    // If using ethereal, provide preview URL
    try {
      // @ts-ignore
      previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
    } catch (e) {
      previewUrl = undefined;
    }

    return new Response(JSON.stringify({ ok: true, preview: previewUrl || null }), { status: 200 });
  } catch (err: any) {
    console.error('[api/contact] unexpected error', err);
    const payload: any = { error: err?.message || String(err) };
    if (process.env.NODE_ENV !== 'production') {
      payload.stack = err?.stack || null;
    }
    return new Response(JSON.stringify(payload), { status: 500 });
  }
}

// Use Node.js runtime for this route because Nodemailer depends on Node built-ins (stream, buffer, etc.)
export const runtime = 'nodejs';

import fs from 'fs/promises';
import path from 'path';
import type { NextRequest } from 'next/server';
import { getSessionCookieName, verifySessionToken } from '@/lib/auth';

// Simple admin messages endpoint. Protects with a single password checked
// against process.env.ADMIN_PASSWORD (fallback: 'admin123').
export async function GET(req: NextRequest) {
  try {
    const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
    const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
    const session = token ? await verifySessionToken(token) : null;
    if (!session || session.role !== 'ADMIN') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const dir = path.join(process.cwd(), '.debug-mails');
    const files = await fs.readdir(dir).catch((e) => {
      // If directory doesn't exist, return empty list
      if ((e as any)?.code === 'ENOENT') return [] as string[];``
      throw e;
    });

    const contactFiles = (files || []).filter((f) => f.startsWith('contact-') && f.endsWith('.json'));

    const messages = await Promise.all(contactFiles.map(async (fname) => {
      const full = path.join(dir, fname);
      const content = await fs.readFile(full, 'utf8');
      const data = JSON.parse(content);
      return { filename: fname, ...data };
    }));

    // sort by savedAt if available (newest first)
    messages.sort((a, b) => {
      const ta = a.savedAt ? Date.parse(a.savedAt) : 0;
      const tb = b.savedAt ? Date.parse(b.savedAt) : 0;
      return tb - ta;
    });

    return new Response(JSON.stringify({ ok: true, messages }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || String(err) }), { status: 500 });
  }
}

export const runtime = 'nodejs';

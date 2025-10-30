import { NextResponse } from 'next/server';
import { getSessionCookieName } from '@/lib/auth';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  
  response.cookies.set({
    name: getSessionCookieName(),
    value: '',
    expires: new Date(0),
    path: '/',
  });

  return response;
}

export const runtime = 'nodejs';
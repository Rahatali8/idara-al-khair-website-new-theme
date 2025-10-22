import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createSessionToken, getSessionCookieName } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    
    // DEBUG: Input values
    console.log('=== LOGIN DEBUG ===');
    console.log('Email:', email);
    console.log('Password:', password);

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    
    // DEBUG: User from database
    console.log('User from DB:', user);
    console.log('DB PasswordHash:', user?.passwordHash);

    if (!user) {
      console.log('USER NOT FOUND');
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Direct password compare
    const ok = password === user.passwordHash;
    console.log('Password match:', ok);

    if (!ok) {
      console.log('PASSWORD MISMATCH');
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    console.log('LOGIN SUCCESS');
    
    const token = await createSessionToken({ userId: user.id, role: user.role, email: user.email });
    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, role: user.role, name: user.name } });
    res.cookies.set({
      name: getSessionCookieName(),
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (err: any) {
    console.log('ERROR:', err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export const runtime = 'nodejs';
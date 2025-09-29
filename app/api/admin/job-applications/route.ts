import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSessionCookieName, verifySessionToken } from '@/lib/auth';

export async function GET(req: Request) {
  const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
  const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
  const session = token ? await verifySessionToken(token) : null;
  if (!session || session.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apps = await prisma.jobApplication.findMany({
    orderBy: { createdAt: 'desc' },
    include: { job: { select: { title: true } } },
  });
  return NextResponse.json({ ok: true, applications: apps });
}

export const runtime = 'nodejs';



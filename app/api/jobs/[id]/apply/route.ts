import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSessionCookieName, verifySessionToken } from '@/lib/auth';

type Params = { params: { id: string } };

export async function POST(req: Request, ctx: Params) {
  try {
    const jobId = Number(ctx.params.id);
    if (!Number.isFinite(jobId)) return NextResponse.json({ error: 'Invalid job id' }, { status: 400 });

    const { applicantName, applicantEmail, applicantPhone, coverLetter,
      yearsOfExperience, highestEducation, city, resumeUrl } = await req.json();
    if (!applicantName || !applicantEmail) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
    }

    const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
    const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
    const session = token ? await verifySessionToken(token) : null;

    const app = await prisma.jobApplication.create({
      data: {
        jobId,
        applicantName,
        applicantEmail,
        applicantPhone,
        coverLetter,
        resumeUrl: resumeUrl || null,
        yearsOfExperience: typeof yearsOfExperience === 'number' ? yearsOfExperience : null,
        highestEducation: highestEducation || null,
        city: city || null,
        appliedById: session?.userId || null,
      },
    });

    return NextResponse.json({ ok: true, application: app }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export const runtime = 'nodejs';



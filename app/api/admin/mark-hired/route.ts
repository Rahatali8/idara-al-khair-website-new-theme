// app/api/admin/mark-hired/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { candidateId, candidateName, candidateEmail, jobTitle, jobId, applicationId } = body;

    const targetApplicationId = applicationId || candidateId;

    // Check if already hired
    const existing = await prisma.hiredCandidate.findUnique({
      where: { applicationId: targetApplicationId }
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Candidate already hired' },
        { status: 400 }
      );
    }

    // Create hired candidate
    const hiredCandidate = await prisma.hiredCandidate.create({
      data: {
        applicationId: targetApplicationId,
        candidateName,
        candidateEmail,
        jobTitle,
        jobId
      }
    });

    // ✅ CORRECTED: Use JobApplication instead of Application
    if (applicationId) {
      await prisma.jobApplication.update({
        where: { id: applicationId },
        data: { status: 'HIRED' }
      });
    }

    // Remove from interview candidates if exists
    await prisma.interviewCandidate.deleteMany({
      where: { applicationId: targetApplicationId }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Candidate marked as hired',
      candidate: hiredCandidate
    });
  } catch (error) {
    console.error('Mark hired error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
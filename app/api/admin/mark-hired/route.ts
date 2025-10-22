// app/api/admin/mark-hired/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    console.log('🟢 Mark Hired API Called');
    
    const body = await request.json();
    console.log('📦 Request Body:', body);

    const { candidateId, candidateName, candidateEmail, jobTitle, jobId, applicationId } = body;

    // ✅ Validation
    if (!jobId) {
      console.log('❌ Missing jobId');
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    console.log('🔍 Checking existing hired candidate...');
    const targetApplicationId = applicationId || candidateId;

    // Check if already hired
    const existing = await prisma.hiredCandidate.findUnique({
      where: { applicationId: targetApplicationId }
    });

    if (existing) {
      console.log('❌ Candidate already hired');
      return NextResponse.json(
        { error: 'Candidate already hired' },
        { status: 400 }
      );
    }

    console.log('🔄 Updating job status...');
    // ✅ Job ka status update karo
    const updatedJob = await prisma.jobPost.update({
      where: { id: parseInt(jobId) }, // ✅ parseInt add karo
      data: { 
        status: 'HIRED',
        hiredAt: new Date()
      }
    });
    console.log('✅ Job updated:', updatedJob);

    console.log('👤 Creating hired candidate...');
    // Create hired candidate
    const hiredCandidate = await prisma.hiredCandidate.create({
      data: {
        applicationId: targetApplicationId,
        candidateName,
        candidateEmail,
        jobTitle,
        jobId: parseInt(jobId) // ✅ parseInt add karo
      }
    });
    console.log('✅ Hired candidate created:', hiredCandidate);

    // Update job application status
    if (applicationId) {
      console.log('📝 Updating job application...');
      await prisma.jobApplication.update({
        where: { id: applicationId },
        data: { status: 'HIRED' }
      });
    }

    // Remove from interview candidates if exists
    console.log('🗑️ Removing from interview candidates...');
    await prisma.interviewCandidate.deleteMany({
      where: { applicationId: targetApplicationId }
    });

    console.log('🎉 All operations completed successfully');
    return NextResponse.json({ 
      success: true, 
      message: 'Candidate marked as hired and job status updated',
      candidate: hiredCandidate
    });

  } catch (error: any) {
    console.error('❌ Mark hired FULL ERROR:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message,
        code: error.code
      },
      { status: 500 }
    );
  }
}
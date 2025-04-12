import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { telegramId } = await req.json();
    
    const user = await prisma.user.update({
      where: { telegramId },
      data: { points: { increment: 1 } }
    });

    return NextResponse.json({ 
      success: true, 
      points: user.points 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to increase points' },
      { status: 500 }
    );
  }
}

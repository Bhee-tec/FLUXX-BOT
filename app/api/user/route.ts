import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function POST(req: NextRequest) {
  try {
    const { telegramId, username, firstName, lastName } = await req.json();
    
    const user = await prisma.user.upsert({
      where: { telegramId },
      update: { username, firstName, lastName },
      create: {
        telegramId,
        username,
        firstName,
        lastName,
        points: 0 // Initialize with 0 points
      }
    });

    return NextResponse.json({ user });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'User operation failed' },
      { status: 500 }
    );
  }
}

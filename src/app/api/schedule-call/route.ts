import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time } = body;

    console.log('Scheduling call:', body);

    // Mock delay for prototype
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: `Call scheduled for ${date} at ${time}` });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to schedule call' }, { status: 500 });
  }
}

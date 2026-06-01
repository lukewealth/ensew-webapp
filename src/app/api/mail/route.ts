import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, notificationType, shipmentId, status } = body;

    if (notificationType === 'shipment_update') {
      await sendMail({
        to: email,
        subject: `ENSEW Logistics Update: Shipment ${shipmentId}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #D4AF37;">Shipment Status Update</h2>
            <p>Hello,</p>
            <p>The status of your shipment <strong>${shipmentId}</strong> has been updated to: <span style="color: #D4AF37; font-weight: bold;">${status}</span></p>
            <p>Thank you for choosing ENSEW Services.</p>
          </div>
        `
      });
    } else {
      // General Contact Form
      await sendMail({
        to: process.env.SMTP_USER || 'ensewservices@zohomail.com',
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #D4AF37;">New Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Service:</strong> ${service || 'General'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `
      });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully via Zoho Mail' });
  } catch (error) {
    console.error('Mail Route Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

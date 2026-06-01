import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendMail } from '@/lib/mail';

interface ShipmentLog {
  date: string;
  event: string;
  location: string;
  details: string;
}

interface Shipment {
  id: string;
  status: string;
  origin: string;
  destination: string;
  weight: string;
  pieces: string;
  service: string;
  type: string;
  expectedDelivery: string;
  progress: number;
  location: string;
  customerEmail: string;
  customerName: string;
  dimensions: string;
  logs: ShipmentLog[];
}

interface TrackingData {
  shipments: Shipment[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Tracking ID is required' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'src/data/tracking.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data: TrackingData = JSON.parse(fileData);

    const shipment = data.shipments.find((s) => s.id === id);

    if (!shipment) {
      return NextResponse.json({ error: 'Shipment not found' }, { status: 404 });
    }

    return NextResponse.json(shipment);
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to fetch tracking data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), 'src/data/tracking.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data: TrackingData = JSON.parse(fileData);

    const index = data.shipments.findIndex((s) => s.id === body.id);
    let statusChanged = false;
    
    if (index !== -1) {
      if (data.shipments[index].status !== body.status) {
        statusChanged = true;
      }
      data.shipments[index] = { ...data.shipments[index], ...body };
    } else {
      data.shipments.push(body);
      statusChanged = true;
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    if (statusChanged && body.customerEmail) {
      try {
        await sendMail({
          to: body.customerEmail,
          subject: `ENSEW Shipment Update: ${body.id} is now ${body.status}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #D4AF37; margin: 0;">ENSEW GLOBAL</h1>
                <p style="color: #666; font-size: 10px; letter-spacing: 3px; margin: 5px 0 0 0; font-weight: bold; text-transform: uppercase;">Logistics Command</p>
              </div>
              
              <div style="background: #001F3F; color: white; padding: 30px; border-radius: 15px; margin-bottom: 25px;">
                <h3 style="margin: 0; font-size: 18px; color: #D4AF37;">SHIPMENT ALERT</h3>
                <p style="margin: 10px 0 0 0; opacity: 0.8;">The status of your consignment <strong>${body.id}</strong> has been updated.</p>
              </div>

              <div style="padding: 0 10px;">
                <div style="display: flex; margin-bottom: 20px;">
                  <div style="width: 100px; font-weight: bold; color: #999; font-size: 12px; text-transform: uppercase;">Status</div>
                  <div style="font-weight: bold; color: #D4AF37; text-transform: uppercase;">${body.status}</div>
                </div>
                <div style="display: flex; margin-bottom: 20px;">
                  <div style="width: 100px; font-weight: bold; color: #999; font-size: 12px; text-transform: uppercase;">Location</div>
                  <div style="color: #333;">${body.location}</div>
                </div>
                <div style="display: flex; margin-bottom: 20px;">
                  <div style="width: 100px; font-weight: bold; color: #999; font-size: 12px; text-transform: uppercase;">ETA</div>
                  <div style="color: #333;">${body.expectedDelivery}</div>
                </div>
              </div>

              <div style="border-top: 1px solid #eee; margin-top: 25px; padding-top: 25px; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/track?id=${body.id}" style="background: #D4AF37; color: #001F3F; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">TRACK LIVE SHIPMENT</a>
              </div>

              <p style="font-size: 11px; color: #999; margin-top: 40px; text-align: center; line-height: 1.6;">
                This is an automated notification from ENSEW Global Logistics Hub.<br>
                Lagos | London | Houston<br>
                &copy; 2026 ENSEW Services Limited.
              </p>
            </div>
          `,
        });
      } catch (mailError) {
        console.error("Tracking notification email failed:", mailError);
      }
    }

    return NextResponse.json({ success: true, shipment: body });
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to update tracking data' }, { status: 500 });
  }
}

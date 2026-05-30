import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ShipmentLog {
  date: string;
  event: string;
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

    // If ID exists, update it, otherwise create new
    const index = data.shipments.findIndex((s) => s.id === body.id);
    if (index !== -1) {
      data.shipments[index] = { ...data.shipments[index], ...body };
    } else {
      data.shipments.push(body);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, shipment: body });
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to update tracking data' }, { status: 500 });
  }
}

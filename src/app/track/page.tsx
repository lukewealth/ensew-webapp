import TrackPage from "@/components/pages/TrackPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Shipment | ENSEW Services",
  description: "Monitor your global assets and shipments in real-time with ENSEW Services Limited's advanced tracking system.",
};

export default function Page() {
  return <TrackPage />;
}

import AdminDashboardPage from "@/components/pages/AdminDashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Dashboard | ENSEW Services",
  description: "Real-time logistics monitoring and shipment management.",
};

export default function Page() {
  return <AdminDashboardPage />;
}

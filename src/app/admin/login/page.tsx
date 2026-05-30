import AdminLoginPage from "@/components/pages/AdminLoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | ENSEW Ops Hub",
  description: "Secure access for ENSEW Services Limited operational leads.",
};

export default function Page() {
  return <AdminLoginPage />;
}

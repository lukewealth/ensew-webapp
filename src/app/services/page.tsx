import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial & Logistics Services",
  description: "Explore ENSEW Services Limited's core expertise: Import & Export, Industrial Supply, General Contracting, Logistics, and Manufacturing Representation.",
};

export default function Page() {
  return <ServicesPage />;
}

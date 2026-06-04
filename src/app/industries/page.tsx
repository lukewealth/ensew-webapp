import IndustriesPage from "@/components/pages/IndustriesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description: "Tailored industrial and logistics solutions for Manufacturing, Energy, Construction, Agriculture, and Retail Distribution sectors.",
};

export default function Page() {
  return <IndustriesPage />;
}

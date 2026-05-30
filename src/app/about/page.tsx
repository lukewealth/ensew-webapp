import AboutPage from "@/components/pages/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Legacy of Excellence",
  description: "Learn about ENSEW Services Limited's history, mission, vision, and the professional experts driving global industrial excellence in Nigeria and beyond.",
};

export default function Page() {
  return <AboutPage />;
}

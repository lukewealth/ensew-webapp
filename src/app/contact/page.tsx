import ContactPage from "@/components/pages/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Consultation",
  description: "Ready to scale your business operations? Contact ENSEW Services Limited for expert logistics, industrial supply, and strategic business partnerships.",
};

export default function Page() {
  return <ContactPage />;
}

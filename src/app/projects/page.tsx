import ProjectsPage from "@/components/pages/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects & Case Studies",
  description: "View our track record of excellence. Case studies on global logistics, industrial supply, and infrastructure projects delivered across Nigeria and West Africa.",
};

export default function Page() {
  return <ProjectsPage />;
}

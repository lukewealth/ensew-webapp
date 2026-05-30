import type { Metadata } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "ENSEW Services Limited | Global Industrial Solutions",
  description: "Building Global Business Connections Through Smart Industrial Solutions. Logistics, Industrial Supply, Contracting, and more.",
};

import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${poppins.variable} h-full antialiased dark`}
    >
      <body className="bg-background text-on-surface font-inter min-h-full flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

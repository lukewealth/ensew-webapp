import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

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

export const viewport: Viewport = {
  themeColor: "#061A40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ensewservices.com"),
  title: {
    default: "ENSEW Services Limited | Global Industrial Solutions & Logistics",
    template: "%s | ENSEW Services Limited",
  },
  description: "ENSEW Services Limited provides trusted logistics, industrial supply, contracting, and strategic business partnerships across Nigeria and global markets. Building global business connections through smart industrial solutions.",
  keywords: ["Logistics Company Nigeria", "Industrial Services Nigeria", "Import Export Company Nigeria", "Supply Chain Services Nigeria", "General Contracting Nigeria", "Business Solutions Nigeria"],
  authors: [{ name: "ENSEW Services Limited" }],
  creator: "ENSEW Services Limited",
  publisher: "ENSEW Services Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ensewservices.com",
    siteName: "ENSEW Services Limited",
    title: "ENSEW Services Limited | Global Industrial Solutions",
    description: "Smart industrial solutions, logistics, and supply chain excellence across Nigeria and international markets.",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "ENSEW Services Limited - Global Industrial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENSEW Services Limited | Global Industrial Solutions",
    description: "Building Global Business Connections Through Smart Industrial Solutions.",
    images: ["/twitter-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="bg-background text-on-surface font-inter min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

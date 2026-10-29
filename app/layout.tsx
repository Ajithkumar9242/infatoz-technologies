import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import { CalendlyProvider } from "@/components/providers/CalendlyProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Infatoz Technologies — Idea to Impact | Enterprise Software, Cloud & AI",
    template: "%s | Infatoz Technologies",
  },
  description: siteConfig.description,
  keywords: [
    "Infatoz Technologies",
    "Enterprise Software Development",
    "Custom Web Applications",
    "Mobile App Development",
    "ERP Software",
    "Attendance Master Suite",
    "Cloud Application Maintenance",
    "AI Automation",
    "Bengaluru Software Company",
    "Kundapura IT Services",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infatoz Technologies — Idea to Impact | Enterprise Software, Cloud & AI",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.iconUrl,
        width: 640,
        height: 640,
        alt: `${siteConfig.name} - ${siteConfig.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infatoz Technologies — Idea to Impact | Enterprise Software, Cloud & AI",
    description: siteConfig.description,
    images: [siteConfig.iconUrl],
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
  icons: {
    icon: [
      { url: "/images/infatoz.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/infatoz.png",
    apple: "/images/infatoz.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        <CalendlyProvider>{children}</CalendlyProvider>
      </body>
    </html>
  );
}

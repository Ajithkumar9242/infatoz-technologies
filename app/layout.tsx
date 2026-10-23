import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infatoz Technologies — Idea to Impact | Enterprise Software, Cloud & AI",
  description:
    "We deliver secure, scalable, and future-ready digital solutions tailored to your business needs. Custom web applications, mobile development, ERP software, and cloud maintenance.",
  keywords: [
    "Infatoz Technologies",
    "Enterprise Software Development",
    "Custom Web Applications",
    "Mobile App Development",
    "ERP Software",
    "Attendance Master",
    "Cloud Application Maintenance",
    "AI Automation",
    "Bengaluru Software Company",
    "Udupi IT Services",
  ],
  authors: [{ name: "Infatoz Technologies" }],
  creator: "Infatoz Technologies",
  publisher: "Infatoz Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://infatoz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Infatoz Technologies — Idea to Impact | Driving Business Growth Through Technology",
    description:
      "We deliver secure, scalable, and future-ready digital solutions tailored to your business needs.",
    url: "https://infatoz.com",
    siteName: "Infatoz Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infatoz Technologies — Enterprise Digital Engineering",
    description:
      "Delivering secure, scalable, and future-ready digital solutions tailored to your business needs.",
  },
  robots: {
    index: true,
    follow: true,
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

import { CalendlyProvider } from "@/components/providers/CalendlyProvider";

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
      <body className="min-h-full flex flex-col font-sans">
        <CalendlyProvider>{children}</CalendlyProvider>
      </body>
    </html>
  );
}


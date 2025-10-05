import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kamo Oliphant | Strategic Content Marketing Specialist",
  description: "Turn browsers into buyers with AI-enhanced content marketing systems. Proven track record: 1,067% organic traffic growth, $20K+ qualified leads generated.",
  keywords: "content marketing, digital marketing, SEO, email marketing, B2B marketing, financial services marketing",
  authors: [{ name: "Kamo Oliphant" }],
  openGraph: {
    title: "Kamo Oliphant | Strategic Content Marketing",
    description: "Turn browsers into buyers with AI-enhanced content marketing systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://www.upwork.com" />
      </head>
      <ClientBody>
        {children}
        <SpeedInsights />
      </ClientBody>
    </html>
  );
}
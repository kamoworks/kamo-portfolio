import type { Metadata } from "next";
import ClientBody from "./ClientBody";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

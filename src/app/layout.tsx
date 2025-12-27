import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HERAWATI - Food & Meta Ads Creative Solutions",
  description: "HERAWATI adalah pioneer dalam industri makanan dan solusi Meta Ads kreatif di Indonesia. Transformasi digital bisnis kuliner Anda dengan periklanan yang efektif.",
  keywords: ["HERAWATI", "Meta Ads", "Food Industry", "Makanan", "Masakan Olahan", "Advertising", "Creative Solutions", "Digital Marketing", "Indonesia"],
  authors: [{ name: "HERAWATI Team" }],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f97316'/%3E%3Cstop offset='100%25' style='stop-color:%23dc2626'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='45' fill='url(%23grad)'/%3E%3Ctext x='50' y='65' font-family='Arial, sans-serif' font-size='40' font-weight='bold' fill='white' text-anchor='middle'%3EH%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    title: "HERAWATI - Food & Meta Ads Creative Solutions",
    description: "Transformasi digital industri makanan dengan Meta Ads kreatif dan efektif",
    url: "https://herawati.com",
    siteName: "HERAWATI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HERAWATI - Food & Meta Ads Creative",
    description: "Pioneer dalam industri makanan dan solusi Meta Ads kreatif di Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="lqasro7nvlxb155u3kpwsissdrm822" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

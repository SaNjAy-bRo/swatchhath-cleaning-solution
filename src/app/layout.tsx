import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swachhath Cleaning Solution | Professional Deep Cleaning Services Since 2022",
  description: "Professional deep cleaning & washing services in Karnataka. High pressure washing, flat & house cleaning, tank & sump cleaning, solar panel cleaning, and commercial floor polishing. Contact us for a quote.",
  keywords: "cleaning service, deep cleaning, karnataka, tank cleaning, solar panel cleaning, floor scrubbing, house cleaning, swachhath cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}

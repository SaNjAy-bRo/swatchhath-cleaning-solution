import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://swachhathcleaning.com"),
  title: {
    default: "Swachhath Cleaning Solution | Professional Deep Cleaning Services in Karnataka",
    template: "%s | Swachhath Cleaning Solution",
  },
  description:
    "Karnataka's premier professional deep cleaning & pressure washing service since 2022. Expert home & flat cleaning, overhead tank & sump cleaning, solar panel maintenance, commercial floor polishing, and post-construction cleaning in Udupi, Mangalore, and across Coastal Karnataka. Contact us today for a free quote!",
  keywords: [
    "Swachhath Cleaning Solution",
    "deep cleaning services Udupi",
    "house cleaning Mangalore",
    "water tank cleaning Udupi",
    "overhead tank cleaning Karnataka",
    "sump cleaning services",
    "solar panel cleaning Karnataka",
    "pressure washing services Udupi",
    "floor polishing Mangalore",
    "commercial cleaning Karnataka",
    "residential deep cleaning",
    "swachhath cleaning",
    "cleaning contractors Udupi",
    "cleaning company Coastal Karnataka",
  ],
  authors: [{ name: "Swachhath Cleaning Solution", url: "https://swachhathcleaning.com" }],
  creator: "Swachhath Cleaning Solution",
  publisher: "Swachhath Cleaning Solution",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swachhath Cleaning Solution | Professional Deep Cleaning Services",
    description:
      "Karnataka's trusted deep cleaning & pressure washing experts. Specialized in home cleaning, water tank & sump cleaning, solar panel cleaning, and floor polishing across Udupi & Mangalore.",
    url: "https://swachhathcleaning.com",
    siteName: "Swachhath Cleaning Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "Swachhath Cleaning Solution Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swachhath Cleaning Solution | Deep Cleaning Experts in Karnataka",
    description:
      "Professional home, water tank, solar panel & commercial cleaning services across Udupi, Mangalore & Coastal Karnataka.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}


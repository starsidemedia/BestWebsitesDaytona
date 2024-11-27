// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar";
import FooterComponent from "@/components/footer";

// Import your custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define the metadata without the viewport
export const metadata: Metadata = {
  title: "Best Websites Daytona - Professional Web Development & Marketing",
  description:
    "Best Websites Daytona provides high-quality, professional web development and marketing services. Specializing in sleek design and top-notch accessibility to help your business thrive online.",
  keywords:
    "web development, marketing, Daytona, Best Websites Daytona, SEO, accessibility, design",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Best Websites Daytona - Professional Web Development & Marketing",
    description:
      "High-quality, sleek web development and marketing services from Best Websites Daytona.",
    url: "https://bestwebsitesdaytona.com",
    type: "website",
    images: ["/logos/logo_resize.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Websites Daytona",
    description: "Professional web development and marketing services.",
    images: ["/logos/logo_resize.svg"],
  },
};

// Export viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

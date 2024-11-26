import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar";
import FooterComponent from "@/components/footer";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Best Websites Daytona - Professional Web Development & Marketing",
  description:
    "Best Websites Daytona provides high-quality, professional web development and marketing services. Specializing in sleek design and top-notch accessibility to help your business thrive online.",
  keywords:
    "web development, marketing, Daytona, Best Websites Daytona, SEO, accessibility, design",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Best Websites Daytona - Professional Web Development & Marketing",
    description:
      "High-quality, sleek web development and marketing services from Best Websites Daytona.",
    url: "https://bestwebsitesdaytona.com",
    type: "website",
    images: ["/public/logos/logo_resize.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Websites Daytona",
    description: "Professional web development and marketing services.",
    images: ["/public/logos/logo_resize.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </Head>
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

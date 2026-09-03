import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balaji H — Full Stack Developer | MERN Stack Engineer",
  description: "Portfolio of Balaji H — Full Stack Developer specializing in MERN stack architectures, high-performance REST APIs, and AI integrations. View deployed production projects, credentials, and technical skills.",
  keywords: [
    "Balaji H",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Software Engineer Fresher",
    "AI Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Balaji H" }],
  creator: "Balaji H",
  publisher: "Balaji H",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balaji-in.vercel.app/",
    title: "Balaji H — Full Stack Developer | MERN Stack Engineer",
    description: "Architecting scalable web applications, real-time distributed systems, and AI-augmented digital experiences.",
    siteName: "Balaji H Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji H — Full Stack Developer | MERN Stack Engineer",
    description: "Performance-driven Full Stack Developer building scalable MERN applications and intelligent web platforms.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://balaji-in.vercel.app/" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

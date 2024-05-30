/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roberto Cruz - Desarrollador Web Fullstack",
  description: "Soy Roberto Cruz, un desarrollador web fullstack freelancer. Explora mi portafolio y conoce más sobre mi experiencia en desarrollo web con tecnologías como React, TypeScript, Node.js y Next.js.",
  keywords: ["desarrollo web", "react", "typescript", "javascript", "fullstack", "node", "nextjs", "desarrollo agil"],
  authors: { name: "Roberto Cruz" },
  openGraph: {
    title: "Roberto Cruz - Desarrollador Web Fullstack",
    description: "Soy Roberto Cruz, un desarrollador web fullstack freelancer. Explora mi portafolio y conoce más sobre mi experiencia en desarrollo web con tecnologías como React, TypeScript, Node.js y Next.js.",
    siteName: "Roberto Cruz",
    locale: "es_ES",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

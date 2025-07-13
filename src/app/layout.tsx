import type { Metadata } from "next";

import React from "react";
import "./globals.css";
const Header = React.lazy(() => import('@/components/General/Header'));
// const PreBanner = React.lazy(() => import("@/components/HomePage/PreBanner"));
const Footer = React.lazy(() => import("@/components/General/Footer"));
export const metadata: Metadata = {
  title: "Temporary Vehicle Insurance",
  description: "Temporary Vehicle Insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#f8f9fa]"
      >
        <Header />
        {/* <PreBanner /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

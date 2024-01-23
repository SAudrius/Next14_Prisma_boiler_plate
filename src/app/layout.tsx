import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import { Header } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boiler Plate",
};

interface rootLayoutProps {
  readonly children: React.ReactNode;
}

export const RootLayout = ({ children }: rootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

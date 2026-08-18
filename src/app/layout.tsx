import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

import Bubbles from "@/components/Bubbles";

export const metadata: Metadata = {
  title: "FishBasket - Premium Fish & Seafood",
  description: "Your trusted online fish market in Bangladesh. Delivering fresh, chemical-free fish directly from the river to your kitchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Bubbles />
        {children}
      </body>
    </html>
  );
}

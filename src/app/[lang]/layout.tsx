import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Bubbles from "@/components/Bubbles";
import { ReactNode } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "FishBasket - Premium Fish & Seafood",
  description: "Your trusted online fish market in Bangladesh. Delivering fresh, chemical-free fish directly from the river to your kitchen.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.lang} className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Bubbles />
        {children}
      </body>
    </html>
  );
}

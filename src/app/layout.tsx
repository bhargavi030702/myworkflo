import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internship Work Tracker",
  description: "Highly professional, modular Internship Work Tracker & Value Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0F0F0F] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}

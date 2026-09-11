import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bhargavi — Selected Work",
  description:
    "Automation engineering internship at Riya Travel — workflows, data pipelines and delivered projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} font-sans bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raymond Zhang | Portfolio",
  description: "Aspiring SOC Analyst, CTF Competitor, and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {/* pt-16 offsets the fixed navbar height */}
        <main className="flex-1 pt-16">{children}</main>

        <footer className="border-t border-green-900/30 py-6 text-center font-mono text-xs text-green-700">
          <span className="text-green-600">&gt; </span>
          Raymond Zhang &mdash; built with Next.js
          <span className="text-green-600"> _</span>
        </footer>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Fira_Code, VT323 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dylan.dev // terminal",
  description: "Developer portfolio — retro terminal edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${vt323.variable} font-mono antialiased min-h-screen relative`}
      >
        {/* Scanline overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)",
          }}
        />
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

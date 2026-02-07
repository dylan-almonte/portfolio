import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
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
        className={`${firaCode.variable} font-mono antialiased min-h-screen relative`}
      >
        {/* Ambient background glow */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.08), transparent), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(167,139,250,0.06), transparent)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(226,232,240,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

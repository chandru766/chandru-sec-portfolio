import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandrasekar L | Cybersecurity Engineer & SOC Analyst",
  description: "Portfolio of Chandrasekar L (chandru.sec). Specializing in SOC Operations, Threat Hunting, and Web Application Penetration Testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          "antialiased bg-void"
        )}
      >
        {children}
      </body>
    </html>
  );
}

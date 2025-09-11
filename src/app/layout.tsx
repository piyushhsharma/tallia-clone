// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ✅ Use a descriptive variable name, not "config"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tallia Clone",
  description: "A Next.js clone project of Tallia website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AppTheme from "@/theme/AppTheme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 700",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "Create App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppTheme>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      </AppTheme>
    </html>
  );
}

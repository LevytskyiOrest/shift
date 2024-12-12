import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "./_components/Header";
import ActionsProvider from "@/context/ActionsProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shift",
  description: "Manage employee shifts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased flex min-h-dvh flex-col font-geist-sans`}
      >
        <Header />
        <ActionsProvider>
          <div className="p-4 h-full flex-1 flex flex-col">{children}</div>
        </ActionsProvider>
      </body>
    </html>
  );
}

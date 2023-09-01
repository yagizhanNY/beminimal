import Navbar from "@/components/server/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "BeMinimal",
  description: "Minimal products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

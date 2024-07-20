import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/shared/ui/lenis";

const inter = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Nail Moment",
  description: "Найбільша nail конференція в Польщі",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <LenisScroll />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

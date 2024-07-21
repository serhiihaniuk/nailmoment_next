import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/shared/ui/lenis";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Nail Moment",
  description: "Найбільша nail конференція в Польщі",
  keywords:
    "nail, moment, conference, poland, ukraine, конференція, польща, найбільша, квиток",
  openGraph: {
    type: "website",
    url: "https://nailmoment.pl",
    title: "Nail Moment",
    description: "Найбiльша nail конференція в Польщі",
    images: [
      {
        url: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nail_moment_logo-81tOqcPijRyp76eyp0y5B57SIHYFDe",
        width: 500,
        height: 234,
        alt: "Nail Moment",
      },
    ],
    siteName: "Nail Moment",
  },
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
      <SpeedInsights />
      <Analytics />
    </html>
  );
}

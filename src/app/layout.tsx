import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/shared/ui/lenis";
import { AnalyticsWrapper } from "@/entities/analytics";

const inter = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Nail Moment",
  description: "Найбільша nail конференція в Польщі",
  keywords:
    "nail, moment, conference, poland, ukraine, конференція, польща, найбільша, квиток",
  robots: "index,follow",
  openGraph: {
    type: "website",
    url: "https://nailmoment.pl",
    title: "Nail Moment",
    description: "Найбільша nail конференція в Польщі",
    images: [
      {
        url: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nail_moment_logo-CAJzMcYPr9IRL30gwVZ0TH5yifMCx2.png",
        width: 250,
        height: 108,
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
      <body className={inter.className}>
        <AnalyticsWrapper />
        {children}
      </body>
    </html>
  );
}

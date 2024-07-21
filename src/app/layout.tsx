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
    description:
      "Найбільша nail конференція в Польщі. Варшава. 13 жовтня 2024.",
    images: [
      {
        url: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/logo_date-kUpWk5HNz7tNbBSQ7IYEUrM5rHpj69",
        width: 500,
        height: 320,
        alt: "Nail Moment",
      },
    ],
    siteName: "Nail Moment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Moment",
    description:
      "Найбільша nail конференція в Польщі. Варшава. 13 жовтня 2024.",
    images: [
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/logo_date-kUpWk5HNz7tNbBSQ7IYEUrM5rHpj69",
    ],
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

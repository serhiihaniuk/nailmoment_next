import type { Metadata } from "next";
import "./globals.css";
import { LenisScroll } from "@/shared/ui/lenis";
import { AnalyticsWrapper } from "@/entities/analytics";

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PLDKZVXR');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <head></head>
      <LenisScroll />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLDKZVXR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AnalyticsWrapper />
        {children}
      </body>
    </html>
  );
}

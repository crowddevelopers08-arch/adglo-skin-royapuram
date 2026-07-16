import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AdGlo Skin Clinic — Royapuram | Best Skin Clinic in Royapuram",
  description:
    "AdGlo Royapuram — Chennai's premium skin clinic. Gluta IV, Chemical Peels, Aqua Luxe & Micro Needling. FDA-approved tech. 20,000+ happy clients. Book your free skin consultation today.",
  keywords: [
    "skin clinic royapuram",
    "gluta iv royapuram",
    "chemical peel royapuram",
    "aqua luxe therapy royapuram",
    "micro needling royapuram",
    "best skin clinic royapuram",
    "adglo skin clinic",
    "skin treatment chennai",
  ],
  openGraph: {
    title: "AdGlo Skin Clinic — Royapuram | Best Skin Clinic in Royapuram",
    description:
      "Chennai's premium skin clinic. Gluta IV, Chemical Peels, Aqua Luxe & Micro Needling. FDA-approved. 20,000+ happy clients.",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qgqxshf78a");
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WH9MDGHR');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased max-[768px]:pb-14">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH9MDGHR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
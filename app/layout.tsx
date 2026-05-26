import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

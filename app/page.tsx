import SkinStyles          from "@/components/skin/SkinStyles"
import SkinNav             from "@/components/skin/SkinNav"
import SkinHero            from "@/components/skin/SkinHero"
import SkinClinicRow       from "@/components/skin/SkinClinicRow"
import SkinStats           from "@/components/skin/SkinStats"
import SkinTransforms      from "@/components/skin/SkinTransforms"
import SkinServices        from "@/components/skin/SkinServices"
import SkinWhyUs           from "@/components/skin/SkinWhyUs"
import SkinVideos          from "@/components/skin/SkinVideos"
import SkinFAQ             from "@/components/skin/SkinFAQ"
import SkinBookingSection  from "@/components/skin/SkinBookingSection"
import SkinMap             from "@/components/skin/SkinMap"
import SkinFooter          from "@/components/skin/SkinFooter"

export default function SkinPage() {
  return (
    <>
      <SkinStyles />

      {/* Subtle film-grain texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[.025]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      <SkinNav />

      <main>
        {/* Section 1 – Banner / Hero */}
        <SkinHero />
        <SkinClinicRow />
        <SkinStats />

        {/* Section 2 – Before & After */}
        <SkinTransforms />

        {/* Section 3 – What We Provide */}
        <SkinServices />

        {/* Section 4 – Why Choose AdGro */}
        <SkinWhyUs />

        {/* Section 5 – Video Testimonials */}
        <SkinVideos />

        {/* Section 6 – FAQ */}
        <SkinFAQ />

        {/* Section 7 – Book a consultation */}
        {/* <SkinBookingSection /> */}
      </main>

      {/* Full-width Google Map */}
      <SkinMap />

      {/* Footer */}
      <SkinFooter />
    </>
  )
}

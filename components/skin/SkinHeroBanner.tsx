/**
 * SkinHeroBanner
 * Uses <picture> so the browser natively swaps sources at the breakpoint.
 *   ≥ 640 px → landscape desktop banner
 *   <  640 px → portrait mobile banner
 *
 * Swap DESKTOP_SRC / MOBILE_SRC if images appear on the wrong screen.
 */

const DESKTOP_SRC = "/ca4ad087-1a87-41c3-b214-d1794b7a523a.png"
const MOBILE_SRC  = "/30904d23-4bb5-4754-bfc2-014a63557180.png"

export default function SkinHeroBanner() {
  return (
    <section
      className="w-full overflow-hidden leading-0"
      aria-label="Best Skin Clinic in Royapuram – AdGlo GloSkin"
    >
      <picture style={{ display: "block", width: "100%" }}>
        {/* desktop / tablet */}
        <source media="(min-width: 640px)" srcSet={DESKTOP_SRC} />

        {/* mobile fallback (also used when <640 px) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MOBILE_SRC}
          alt="Best Skin Clinic in Royapuram – AdGlo GloSkin, Special Treatments for All Skin Problems"
          style={{
            display:   "block",
            width:     "100%",
            height:    "auto",
            maxWidth:  "100%",
          }}
          fetchPriority="high"
        />
      </picture>
    </section>
  )
}

import AnimateIn from "./AnimateIn"

const reasons = [
  "Expert Hair & Skin Doctors",
  "Advanced Treatment Technology",
  "Personalized Analysis First",
  "Hair & Skin Solutions Together",
  "Royapuram Local Clinic Access",
  "Trusted Patient-Focused Care",
]

export default function SkinWhyUs() {
  return (
    <section
      id="why"
      className="py-[100px] bg-[#faf7f1] relative overflow-hidden
                 max-[768px]:py-[70px]
                 max-[560px]:py-[40px]"
    >
      <div className="max-w-[1360px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8 relative z-10">

        <div className="grid grid-cols-[1fr_1.4fr] gap-[48px] items-start
                        max-[900px]:grid-cols-1 max-[900px]:gap-[48px]">

          {/* Left – sticky heading */}
          <AnimateIn animation="left"
                     className="max-[900px]:static sticky top-[90px]">

            <h2
              className="font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-4"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
            >
              Why Choose
              <br />
              <em className="not-italic text-[#d4202a]">AdGro Royapuram?</em>
            </h2>

            <p className="text-[13px] tracking-[.06em] uppercase text-[#888] mb-6 leading-[1.5]">
              Best Skin Clinic in Royapuram
            </p>

            <p className="text-[15px] leading-[1.7] text-[#3a3a3a] max-w-[460px]
                          max-[900px]:max-w-full">
              We&apos;re not just another clinic. We&apos;re Royapuram&apos;s most trusted
              destination — built on diagnosis, expert care, and real results.
            </p>

            <div className="inline-flex items-center gap-2.5 mt-8
                            bg-[#0a0a0a] text-white text-[11px] tracking-[.18em] uppercase font-semibold
                            px-5 py-3.5">
              <span className="text-[#d4202a] text-[13px]">★</span>
              Trusted · Royapuram
            </div>
          </AnimateIn>

          {/* Right – reasons list */}
          <div className="divide-y divide-black/[.09]">
            {reasons.map((text, i) => (
              <AnimateIn key={i} animation="up" delay={i * 80}>
                <div
                  className="flex items-center gap-5 py-[22px] group cursor-default
                             hover:translate-x-2 transition-transform duration-300
                             max-[560px]:py-[14px]"
                >
                  <span
                    className="shrink-0 font-light text-[#ccc] tracking-[-0.03em] leading-none w-12
                               group-hover:text-[#d4202a] transition-colors duration-300"
                    style={{ fontSize: "clamp(28px, 2.7vw, 38px)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 font-semibold text-[#0a0a0a] leading-[1.25]"
                    style={{ fontSize: "clamp(16px, 1.6vw, 20px)" }}
                  >
                    {text}
                  </span>
                  <span className="shrink-0 text-[#d4202a] text-xl
                                   opacity-0 group-hover:opacity-100
                                   -translate-x-2 group-hover:translate-x-0
                                   transition-all duration-300">
                    →
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

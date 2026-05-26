export default function SkinFinalCTA() {
  const infoRows = [
    { ic: "📍", l1: "Royapuram, Chennai", l2: "Tamil Nadu — 600 013" },
    { ic: "📞", l1: "+91 73580 34097",    l2: "Mon–Sat · 10am–8pm"   },
    { ic: "✦",  l1: "Free initial skin consultation", l2: "No commitment required" },
  ]

  return (
    <section className="py-[100px] bg-[#d4202a] relative overflow-hidden max-[768px]:py-[70px] max-[560px]:py-[42px]" id="book">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(0,0,0,.35), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-[80px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-[50px]">

          {/* Left */}
          <div>
            <div className="text-[12px] tracking-[.2em] uppercase text-white/70 mb-5 font-medium">
              07 · Your Turn
            </div>
            <h2
              className="font-light leading-[.95] tracking-[-0.045em] text-white mb-6"
              style={{ fontSize: "clamp(38px,5vw,72px)" }}
            >
              Your <em className="not-italic font-bold">best skin</em>
              <br />
              starts with one{" "}
              <span className="underline underline-offset-4 decoration-white/50 decoration-2">free</span>
              <br />
              consultation.
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/80 max-w-[580px] mb-10">
              No pressure. No commitments. Just an honest conversation with our skin doctor
              about what&apos;s possible for your skin.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="#consultation-form"
                className="inline-flex items-center gap-3 bg-white text-[#d4202a] px-8 py-4 text-[12px] tracking-[.14em] uppercase font-semibold hover:bg-[#0a0a0a] hover:text-white transition-all duration-[250ms]"
              >
                <span>★</span>
                Book Free Consultation
              </a>
              <a
                href="tel:+917358034097"
                className="inline-flex items-center gap-3 border border-white text-white px-8 py-4 text-[12px] tracking-[.14em] uppercase font-medium hover:bg-white hover:text-[#d4202a] transition-all duration-[250ms]"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right — info card */}
          <div className="bg-white/[.08] backdrop-blur-sm p-10 border border-white/20 max-[560px]:p-7">
            <div className="text-[12px] tracking-[.18em] uppercase text-white/60 mb-4">
              Visit AdGlo Royapuram
            </div>
            <h4 className="text-[22px] font-semibold text-white leading-[1.35] mb-8">
              Premium skin care,{" "}
              <em className="not-italic font-light text-white/75">right in your neighbourhood.</em>
            </h4>
            <div className="flex flex-col gap-6">
              {infoRows.map((row, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-xl shrink-0 mt-0.5">{row.ic}</div>
                  <div>
                    <div className="text-[15px] text-white font-medium">{row.l1}</div>
                    <div className="text-[13px] text-white/60 mt-0.5">{row.l2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

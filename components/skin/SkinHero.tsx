import AnimateIn from "./AnimateIn"

export default function SkinHero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#faf7f1]
                 pt-[56px] pb-[64px] min-h-[700px]
                 max-[1024px]:pt-[48px] max-[1024px]:pb-[52px] max-[1024px]:min-h-[620px]
                 max-[560px]:pt-0 max-[560px]:pb-0 max-[560px]:min-h-[470px]"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-[72%_center]
                   max-[768px]:bg-[74%_center]
                   max-[560px]:bg-[70%_center]"
        style={{ backgroundImage: "url('/saveCopy.png')" }}
        aria-hidden="true"
      />

      {/* Mobile overlay – heavier so text stays legible over the photo */}
      <div
        className="absolute inset-0 hidden max-[560px]:block bg-[#faf7f1]/72"
        aria-hidden="true"
      />

      <div
        className="relative z-10 max-w-[1600px] mx-auto
                   pl-32 pr-16
                   max-[768px]:pl-10 max-[768px]:pr-8
                   max-[560px]:min-h-[470px] max-[560px]:px-4 max-[560px]:flex max-[560px]:items-center"
      >
        <div className="max-w-[760px] max-[560px]:mx-auto max-[560px]:w-full">
          <div className="max-w-[720px] max-[560px]:max-w-full max-[560px]:w-full max-[560px]:text-center">
            <AnimateIn animation="left">
              <div
                className="inline-flex items-center gap-3 mb-6
                           text-[12px] tracking-[.22em] uppercase text-[#666]
                           max-[560px]:mb-5 max-[560px]:justify-center
                           max-[560px]:text-[12px] max-[560px]:tracking-[.2em]"
              >
                <span className="w-8 h-px bg-[#d4202a] max-[560px]:w-7" aria-hidden="true" />
                Royapuram . Chennai
              </div>

              <h1
                className="font-extrabold leading-[0.98] tracking-[-0.05em] text-[#0a0a0a] mb-5
                           max-[560px]:mb-5"
                style={{ fontSize: "clamp(42px, 8.4vw, 88px)" }}
              >
                Best Skin
                <br />
                Clinic in{" "}
                <em className="not-italic text-[#d4202a]">Royapuram</em>
              </h1>

              <p
                className="text-[#3a3a3a] leading-[1.65] max-w-[480px] mb-[36px]
                           max-[560px]:max-w-full max-[560px]:mx-auto max-[560px]:mb-6"
                style={{ fontSize: "clamp(18px, 3vw, 18px)" }}
              >
                Special Treatments for All{" "}
                <strong className="font-semibold text-[#0a0a0a]">Skin Problems</strong>
              </p>

              <a
                id="book"
                href="#consultation-form"
                className="inline-flex items-center gap-4
                           bg-[#d4202a] text-white border-2 border-[#d4202a]
                           px-9 py-5 text-[12px] tracking-[.16em] uppercase font-bold
                           hover:bg-white hover:text-[#d4202a] transition-all duration-300
                           max-[560px]:w-full
                           max-[560px]:justify-center max-[560px]:mx-auto max-[560px]:gap-3
                           max-[560px]:px-4 max-[560px]:py-4
                           max-[560px]:text-[11px] max-[560px]:tracking-[.13em]"
              >
                <span
                  className="relative w-2.5 h-2.5 bg-white rounded-full shrink-0"
                  style={{ boxShadow: "0 0 0 0 rgba(255,255,255,.7)" }}
                >
                  <span
                    className="absolute inset-[-5px] rounded-full border-2 border-white/80"
                    style={{ animation: "sk-pulse 1.8s ease-out infinite" }}
                  />
                </span>
                <span className="whitespace-nowrap">Book Your Free Consultation</span>
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

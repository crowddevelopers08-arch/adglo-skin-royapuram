import AnimateIn      from "./AnimateIn"
import SkinBookingForm from "./SkinBookingForm"

const perks = [
  { icon: "✦", text: "No consultation fee" },
  { icon: "✦", text: "Doctor speaks Tamil & English" },
  { icon: "✦", text: "FDA-approved treatments only" },
  { icon: "✦", text: "We call back within 2 hours" },
]

export default function SkinBookingSection() {
  return (
    <section
      id="book"
      className="py-[100px] bg-[#0a0a0a] relative overflow-hidden
                 max-[768px]:py-[72px] max-[560px]:py-[42px]"
    >
      {/* Faint red radial glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(212,32,42,.12), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8">

        <div
          className="grid grid-cols-[1fr_480px] gap-[72px] items-center
                     max-[1100px]:grid-cols-[1fr_440px]
                     max-[900px]:grid-cols-1  max-[900px]:gap-[52px]"
        >

          {/* ── Left: copy ── */}
          <AnimateIn animation="left">
            <div className="text-[12px] tracking-[.22em] uppercase text-[#d4202a] font-medium mb-5">
              AdGlo Skin Clinic · Royapuram
            </div>

            <h2
              className="font-bold leading-[1.05] tracking-[-0.035em] text-[#f5f1ea] mb-5"
              style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
            >
              Book Your{" "}
              <em className="not-italic text-[#d4202a]">Free</em>
              <br />
              Skin Consultation
            </h2>

            <p className="text-[15px] leading-[1.75] text-[#888] max-w-[440px] mb-10">
              Fill in your details — our skin doctor will review your concern
              and call you back to schedule your visit at Royapuram.
            </p>

            {/* Perks list */}
            <ul className="flex flex-col gap-4">
              {perks.map((p, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#d4202a] text-[10px] font-bold">{p.icon}</span>
                  <span className="text-[14px] text-[#ccc]">{p.text}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* ── Right: form ── */}
          <AnimateIn animation="right" delay={100}>
            <SkinBookingForm />
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

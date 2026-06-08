"use client"

import { useState } from "react"
import AnimateIn from "./AnimateIn"
import { usePopup } from "./PopupContext"

const faqs = [
  {
    q: "Is Gluta IV treatment available in Royapuram?",
    a: "Yes. Gluta IV treatment in Royapuram is available at AdGlo for people looking for skin glow, dull skin care, and fresher-looking skin with doctor-guided consultation.",
  },
  {
    q: "Who can choose Chemical Peel treatment in Royapuram?",
    a: "Chemical Peel in Royapuram is suitable for people dealing with tanning, pigmentation, acne marks, uneven skin tone, or dull skin.",
  },
  {
    q: "What is Aqua Luxe Skin Therapy used for?",
    a: "Aqua Luxe Skin Therapy in Royapuram is used for deep cleansing, hydration, exfoliation, and instant skin freshness.",
  },
  {
    q: "Is Micro Needling good for acne scars?",
    a: "Yes. Micro Needling treatment in Royapuram can help improve acne scars, open pores, and uneven skin texture with proper clinical guidance.",
  },
  {
    q: "Which skin treatment is best for dull skin in Royapuram?",
    a: "For dull skin, treatments like Gluta IV, Aqua Luxe Skin Therapy, and Chemical Peels in Royapuram may be suggested after skin analysis.",
  },
  {
    q: "Can I take these skin treatments before an event?",
    a: "Yes. If you have an upcoming event, visit a skin clinic in Royapuram early so the doctor can plan the right treatment and session timing.",
  },
  {
    q: "Are these treatments done after skin analysis?",
    a: "Yes. At AdGlo Royapuram, treatments like Gluta IV, Chemical Peel, Aqua Luxe, and Micro Needling are planned after checking your skin type and concern.",
  },
  {
    q: "How do I book a skin consultation in Royapuram?",
    a: "You can book a consultation at AdGlo Skin Clinic Royapuram for skin glow, pigmentation, acne marks, dull skin, and texture concerns by clicking the button on this page or filling the booking form.",
  },
]

export default function SkinFAQ() {
  const { openPopup } = usePopup()
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-[100px] bg-white
                 max-[768px]:py-[70px]
                 max-[560px]:py-[40px]"
    >
      <div className="max-w-[1360px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8">

        <div className="grid grid-cols-[1fr_1.6fr] gap-[80px] items-start
                        max-[900px]:grid-cols-1 max-[900px]:gap-[48px] max-[470px]:gap-[22px]">

          {/* ── LEFT: sticky panel ── */}
          <AnimateIn animation="left"
                     className="sticky top-32.5 max-[900px]:static">

            <h2
              className="font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a] mb-3"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              FAQs
            </h2>
            <h3
              className="font-light text-[#d4202a] mb-5 leading-[1.2]"
              style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
            >
              Skin Treatments
              <br />
              in Royapuram
            </h3>

            <p className="text-[15px] leading-[1.7] text-[#555] mb-8 max-w-[430px]
                          max-[900px]:max-w-full">
              Everything you need to know before booking your skin consultation at AdGlo Royapuram.
            </p>

            <button
              onClick={() => openPopup()}
              className="inline-flex items-center gap-3
                         bg-[#d4202a] text-white
                         px-8 py-4 text-[13px] tracking-[.14em] uppercase font-semibold
                         hover:bg-[#0a0a0a] transition-colors duration-300"
            >
              <span>★</span>
              Book Free Consultation
            </button>
          </AnimateIn>

          {/* ── RIGHT: accordion ── */}
          <AnimateIn animation="right" delay={150} className="divide-y divide-black/[.09]">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  className="w-full flex items-start gap-5 py-[22px] text-left group
                             max-[560px]:py-[14px] max-[560px]:gap-3"
                  onClick={() => setOpenIdx(prev => prev === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span
                    className="shrink-0 font-bold text-[#e8e8e8] leading-none mt-[3px]
                               group-hover:text-[#d4202a] transition-colors duration-200
                               max-[560px]:text-[16px]"
                    style={{ fontSize: "clamp(17px, 1.8vw, 20px)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 font-medium text-[#0a0a0a] leading-[1.4]
                               group-hover:text-[#d4202a] transition-colors duration-200"
                    style={{ fontSize: "clamp(16px, 1.6vw, 18px)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={[
                      "shrink-0 w-6 h-6 rounded-full border flex items-center justify-center",
                      "text-[13px] font-bold transition-all duration-300 mt-[2px]",
                      openIdx === idx
                        ? "bg-[#d4202a] border-[#d4202a] text-white rotate-45"
                        : "border-black/20 text-[#999]",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-[360ms] ease-[cubic-bezier(.4,0,.2,1)]"
                  style={{ gridTemplateRows: openIdx === idx ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="text-[#555] leading-[1.75] pb-6 pr-10 max-[560px]:pr-0"
                      style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

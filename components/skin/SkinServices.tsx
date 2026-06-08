"use client"

import AnimateIn from "./AnimateIn"
import SkinCarousel from "./SkinCarousel"
import { usePopup } from "./PopupContext" // used inside ServiceCard

const services = [
  {
    num:      "01",
    name:     "Gluta IV",
    location: "Royapuram",
    img:      "Glutathione.webp",
    alt:      "Gluta IV skin glow treatment Royapuram",
    question: "Dull skin, uneven tone, or tired-looking face bothering you?",
    desc:     "Gluta IV treatment in Royapuram is a clinic-based skin glow therapy planned after expert skin consultation to support brighter, fresher-looking skin.",
  },
  {
    num:      "02",
    name:     "Chemical Peel",
    location: "Royapuram",
    img:      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    alt:      "Chemical peel treatment for pigmentation Royapuram",
    question: "Tanning, pigmentation, acne marks, or uneven skin tone not improving with skincare?",
    desc:     "Chemical Peel treatment in Royapuram helps exfoliate damaged outer skin layers and supports smoother, clearer, and more even-looking skin.",
  },
  {
    num:      "03",
    name:     "Aqua Luxe Skin Therapy",
    location: "Royapuram",
    img:      "images.jpg",
    alt:      "Aqua luxe hydration therapy Royapuram",
    question: "Skin looking dull, dry, congested, or lifeless before an event?",
    desc:     "Aqua Luxe Skin Therapy in Royapuram is a hydrating skin treatment designed for deep cleansing, exfoliation, and fresh glowing skin.",
  },
  {
    num:      "04",
    name:     "Micro Needling",
    location: "Royapuram",
    img:      "microneedling.avif",
    alt:      "Micro needling acne scar treatment Royapuram",
    question: "Acne scars, open pores, or uneven skin texture making your skin look rough?",
    desc:     "Micro Needling treatment in Royapuram supports skin texture improvement by stimulating natural skin repair for smoother-looking skin.",
  },
]

function ServiceCard({ svc }: { svc: typeof services[0] }) {
  const { openPopup } = usePopup()
  return (
    <article className="bg-[#161616] relative group overflow-hidden
                        border border-white/[.08]
                        hover:border-[#d4202a]/60 transition-colors duration-500
                        flex flex-col h-full">
      {/* top red line on hover */}
      <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#d4202a]
                       group-hover:w-full transition-all duration-[600ms] z-10" />

      {/* image */}
      <div className="relative w-full overflow-hidden h-[400px] max-[900px]:h-[320px] max-[640px]:h-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svc.img}
          alt={svc.alt}
          className="w-full h-full object-cover brightness-90
                     group-hover:brightness-100 group-hover:scale-[1.06]
                     transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-black/20" />
      </div>

      {/* body */}
      <div className="p-8 flex flex-col flex-1 gap-0 max-[900px]:p-6">
        <h3 className="font-bold text-white mb-3 leading-[1.2]"
            style={{ fontSize: "clamp(16px, 1.5vw, 21px)" }}>
          {svc.name}
        </h3>
        <p className="text-[13px] text-[#c0c0c0] leading-[1.65] italic
                      border-l-2 border-[#d4202a] pl-3 mb-4">
          &ldquo;{svc.question}&rdquo;
        </p>
        <p className="text-[13px] text-[#999] leading-[1.8] mb-6 flex-1">
          {svc.desc}
        </p>
        <button
          onClick={() => openPopup(svc.name)}
          className="inline-flex items-center gap-2 text-[11px] tracking-[.18em] uppercase
                     font-bold text-[#d4202a] hover:gap-4 transition-all duration-200 mt-auto"
        >
          Book This Treatment →
        </button>
      </div>
    </article>
  )
}

export default function SkinServices() {
  return (
    <section
      id="services"
      className="py-[100px] bg-[#0a0a0a]
                 max-[768px]:py-[70px]
                 max-[560px]:py-[40px]"
    >
      <div className="max-w-[1600px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8">

        {/* Heading */}
        <AnimateIn animation="up" className="text-center mb-[64px] max-[560px]:mb-[30px]">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.03em] text-[#f5f1ea]"
            style={{ fontSize: "clamp(28px, 3.7vw, 50px)" }}
          >
            What We Provide for
            <br />
            <em className="not-italic text-[#d4202a]">Your Skin</em>
          </h2>
          <p className="mt-4 text-[15px] text-[#777] max-w-[620px] mx-auto leading-[1.7]">
            Every treatment is planned after a one-on-one skin analysis with our doctor.
            No upselling — just the right care.
          </p>
        </AnimateIn>

        {/* ── Desktop: 2×2 grid ── */}
        <div className="grid grid-cols-2 gap-6 max-[640px]:hidden">
          {services.map((svc, i) => (
            <AnimateIn key={svc.num} animation="up" delay={i * 90}>
              <ServiceCard svc={svc} />
            </AnimateIn>
          ))}
        </div>

        {/* ── Mobile: carousel ── */}
        <div className="hidden max-[640px]:block">
          <SkinCarousel
            darkMode
            autoPlay
            interval={3000}
            items={services.map((svc) => (
              <ServiceCard key={svc.num} svc={svc} />
            ))}
          />
        </div>
      </div>
    </section>
  )
}

"use client"

export default function SkinNav() {
  return (
    <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-[14px] border-b border-black/10">
      <div
        className="max-w-[1600px] mx-auto flex items-center justify-between gap-4
                   px-16 py-4
                   max-[768px]:px-8 max-[768px]:py-3
                   max-[560px]:px-4 max-[560px]:py-3"
      >
        <a href="#" aria-label="Advanced GloSkin - Skin Glow Forever" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/adglow-rajaji.png"
            alt="Advanced GloSkin - Skin Glow Forever"
            className="h-16 w-auto object-contain
                       max-[768px]:h-12
                       max-[560px]:h-9"
          />
        </a>

        <a
          href="#consultation-form"
          className="inline-flex shrink-0 items-center justify-center text-center
                     bg-[#d4202a] text-white text-[12px] tracking-[.16em] uppercase font-bold
                     px-7 py-3.5 border border-[#d4202a]
                     hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-300
                     max-[560px]:min-h-[38px] max-[560px]:px-4 max-[560px]:py-2.5
                     max-[560px]:text-[10px] max-[560px]:tracking-[.14em]"
        >
          Book Free Consultation
        </a>
      </div>
    </nav>
  )
}

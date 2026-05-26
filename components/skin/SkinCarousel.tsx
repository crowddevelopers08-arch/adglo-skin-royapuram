"use client"

import { useRef, useState, useCallback } from "react"
import type { ReactNode } from "react"

interface Props {
  items: ReactNode[]
  darkMode?: boolean
}

export default function SkinCarousel({ items, darkMode = false }: Props) {
  const [active, setActive] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(items.length - 1, idx))
      setActive(clamped)
      const track = trackRef.current
      if (!track) return
      track.scrollTo({ left: clamped * track.offsetWidth, behavior: "smooth" })
    },
    [items.length]
  )

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const idx = Math.round(track.scrollLeft / track.offsetWidth)
    setActive(Math.max(0, Math.min(items.length - 1, idx)))
  }, [items.length])

  return (
    <div>
      {/* Scroll track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div key={i} className="snap-start shrink-0 w-full">
            {item}
          </div>
        ))}
      </div>

      {/* Navigation — below the track */}
      <div className="flex items-center justify-center gap-4 mt-5">

        {/* Prev */}
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous"
          className={[
            "w-9 h-9 rounded-full border flex items-center justify-center",
            "transition-all duration-200",
            active === 0
              ? "opacity-25 pointer-events-none"
              : "opacity-100",
            darkMode
              ? "bg-black/60 border-white/20 text-white hover:bg-[#d4202a] hover:border-[#d4202a]"
              : "bg-white border-black/15 text-[#0a0a0a] hover:bg-[#d4202a] hover:text-white hover:border-[#d4202a]",
          ].join(" ")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
               className="w-4 h-4">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-7 bg-[#d4202a]"
                  : `w-2 ${darkMode ? "bg-white/25" : "bg-black/20"}`,
              ].join(" ")}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => goTo(active + 1)}
          disabled={active === items.length - 1}
          aria-label="Next"
          className={[
            "w-9 h-9 rounded-full border flex items-center justify-center",
            "transition-all duration-200",
            active === items.length - 1
              ? "opacity-25 pointer-events-none"
              : "opacity-100",
            darkMode
              ? "bg-black/60 border-white/20 text-white hover:bg-[#d4202a] hover:border-[#d4202a]"
              : "bg-white border-black/15 text-[#0a0a0a] hover:bg-[#d4202a] hover:text-white hover:border-[#d4202a]",
          ].join(" ")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
               className="w-4 h-4">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

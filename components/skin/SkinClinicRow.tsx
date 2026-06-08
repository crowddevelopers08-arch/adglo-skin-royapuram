"use client"

import { useRef, useEffect } from "react"

/**
 * Infinite-loop marquee with heading.
 * Auto-scrolls left; drag or swipe to scroll manually.
 * ➜ Drop cr4.png in /public and uncomment the 4th entry.
 */

const images = [
  { src: "/cr1.png", alt: "AdGlo skin clinic Royapuram offer 1" },
  { src: "/cr2.png", alt: "AdGlo skin clinic Royapuram offer 2" },
  { src: "/cr3.png", alt: "AdGlo skin clinic Royapuram offer 3" },
  { src: "/c4.png", alt: "AdGlo skin clinic Royapuram offer 4" },
]

const looped = [...images, ...images, ...images]
const SPEED  = 0.7   // px per frame (~42 px/s at 60 fps)

export default function SkinClinicRow() {
  const trackRef  = useRef<HTMLDivElement>(null)
  const posRef    = useRef(0)
  const rafRef    = useRef<number>(0)
  const dragging  = useRef(false)
  const startX    = useRef(0)
  const startPos  = useRef(0)

  function oneSetWidth() {
    return trackRef.current ? trackRef.current.scrollWidth / 3 : 0
  }

  function normalise(p: number) {
    const w = oneSetWidth()
    if (!w) return p
    return ((p % w) - w) % w
  }

  function applyTranslate(p: number) {
    posRef.current = normalise(p)
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${posRef.current}px)`
  }

  useEffect(() => {
    function tick() {
      if (!dragging.current) applyTranslate(posRef.current - SPEED)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true
    startX.current   = e.clientX
    startPos.current = posRef.current
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current) return
    applyTranslate(startPos.current + (e.clientX - startX.current))
  }
  function stopDrag() { dragging.current = false }

  function onTouchStart(e: React.TouchEvent) {
    dragging.current = true
    startX.current   = e.touches[0].clientX
    startPos.current = posRef.current
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!dragging.current) return
    applyTranslate(startPos.current + (e.touches[0].clientX - startX.current))
  }

  return (
    <section className="w-full overflow-hidden bg-black select-none">

      {/* Heading */}
      <div className="text-center pt-12 pb-8 px-6 max-[560px]:pt-8 max-[470px]:pt-4Skin Transformations max-[560px]:pb-6">
        <div className="inline-flex items-center gap-3 mb-3 text-[12px] tracking-[.22em] uppercase text-[#d4202a] font-medium">
          <span className="w-8 h-px bg-[#d4202a]" />
          Limited Time
          <span className="w-8 h-px bg-[#d4202a]" />
        </div>
        <h2
          className="font-extrabold leading-[1.1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(26px, 3.5vw, 48px)" }}
        >
          <span className="shine-white">Exclusive</span>
          {" "}
          <em className="not-italic shine-red">Offers</em>
        </h2>
      </div>

      {/* Marquee strip */}
      <div
        className="cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ willChange: "transform" }}
        >
          {looped.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              draggable={false}
              className="h-105 w-auto shrink-0 object-contain border-2 border-white/20 max-[768px]:h-96 max-[480px]:h-80"
            />
          ))}
        </div>
      </div>

      <style>{`
        /* ── sweeping shine on heading ── */
        @keyframes shine-sweep {
          0%   { background-position: -250% center }
          100% { background-position: 250% center }
        }

        .shine-white {
          background: linear-gradient(
            90deg,
            #aaaaaa 10%,
            #ffffff 40%,
            #ffffff 55%,
            #aaaaaa 80%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine-sweep 2.8s linear infinite;
        }

        .shine-red {
          background: linear-gradient(
            90deg,
            #d4202a 20%,
            #ff7b7b 45%,
            #d4202a 55%,
            #d4202a 80%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine-sweep 2.8s linear infinite;
          animation-delay: 0.4s;
        }
      `}</style>

    </section>
  )
}

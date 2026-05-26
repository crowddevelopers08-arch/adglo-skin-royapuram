"use client"

import { useEffect, useRef } from "react"
import type { ReactNode, CSSProperties } from "react"

type Anim = "up" | "left" | "right" | "fade" | "scale"

interface Props {
  children: ReactNode
  animation?: Anim
  delay?: number
  duration?: number
  className?: string
}

const start: Record<Anim, CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(32px)" },
  left:  { opacity: 0, transform: "translateX(-40px)" },
  right: { opacity: 0, transform: "translateX(40px)" },
  fade:  { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.93)" },
}

export default function AnimateIn({
  children,
  animation = "up",
  delay = 0,
  duration = 650,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1"
            el.style.transform = "none"
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...start[animation],
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1),
                     transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}

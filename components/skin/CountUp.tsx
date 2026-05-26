"use client"

import React, { useEffect, useRef, useState } from "react"

/* ── parser ── */
type Parsed =
  | { isText: true; text: string }
  | { isText: false; end: number; suffix: string }

function parse(val: string): Parsed {
  // Strip commas, then match leading number + optional K + optional +
  const noComma = val.replace(/,/g, "")
  const m = noComma.match(/^(\d+(?:\.\d+)?)(K?)(\+?)(.*)$/)
  if (m && m[0] === noComma) {
    const num = parseFloat(m[1])
    const suffix = m[2] + m[3] // e.g. "K+" or "+"
    return { isText: false, end: num, suffix }
  }
  return { isText: true, text: val }
}

/* ── component ── */
interface Props {
  value: string
  className?: string
  style?: React.CSSProperties
}

export default function CountUp({ value, className, style }: Props) {
  const info = parse(value)
  const [count, setCount] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    if (info.isText) return
    const end = info.end

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return
        fired.current = true

        const DURATION_MS = 1800
        const FPS = 60
        const FRAMES = Math.round((DURATION_MS / 1000) * FPS)
        let frame = 0

        const timer = setInterval(() => {
          frame++
          // ease-out cubic
          const progress = 1 - Math.pow(1 - frame / FRAMES, 3)
          setCount(Math.round(progress * end))
          if (frame >= FRAMES) {
            setCount(end)
            clearInterval(timer)
          }
        }, 1000 / FPS)
      },
      { threshold: 0.3 },
    )

    if (spanRef.current) obs.observe(spanRef.current)
    return () => obs.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (info.isText) {
    return <span className={className} style={style}>{info.text}</span>
  }

  return (
    <span ref={spanRef} className={className} style={style}>
      {count.toLocaleString()}
      {info.suffix}
    </span>
  )
}

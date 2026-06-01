"use client"

import { useState, useEffect } from "react"
import AnimateIn from "./AnimateIn"

/** Four before/after transformation images – 2 shown at a time, auto-scroll every 3 s */
const transformImages = [
  {
    src: "/72dd1cb1-c839-4fb9-a472-be1a0fbc08a4.png",
    alt: "Skin brightening transformation at AdGlo Royapuram",
    label: "Gluta IV Result",
  },
  {
    src: "/637aad91-97eb-4e02-b1b4-3bc12d72fa05.png",
    alt: "Acne clearing transformation at AdGlo Royapuram",
    label: "Chemical Peel Result",
  },
  {
    src: "/aaf089a7-7445-460a-81b4-825f1e6350f5.png",
    alt: "Pore reduction transformation at AdGlo Royapuram",
    label: "Aqua Luxe Result",
  },
  {
    src: "/178431e9-e30c-43c0-b9cb-88d71a68327c.png",
    alt: "Pigmentation reduction transformation at AdGlo Royapuram",
    label: "Micro Needling Result",
  },
]

const treatments = [
  "Gluta IV",
  "Chemical Peel",
  "Aqua Luxe Skin Therapy",
  "Micro Needling",
]

/** Pairs: [0,1] then [2,3] */
const PAIRS = [[0, 1], [2, 3]]
const INTERVAL_MS = 3000

export default function SkinTransforms() {
  const [name,      setName]      = useState("")
  const [phone,     setPhone]     = useState("")
  const [location,  setLocation]  = useState("")
  const [treatment, setTreatment] = useState("")
  const [status,    setStatus]    = useState<"idle" | "loading" | "error">("idle")
  const [errMsg,    setErrMsg]    = useState("")

  /* which pair is currently visible: 0 → images 0&1, 1 → images 2&3 */
  const [pairIdx, setPairIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPairIdx(p => (p + 1) % PAIRS.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "loading") return

    setStatus("loading")
    setErrMsg("")

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 25_000)

    try {
      const res = await fetch("/api/submit-lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location,
          treatment,
          pageUrl: window.location.href,
        }),
        signal: controller.signal,
      })
      clearTimeout(timer)

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.")

      window.location.href = "/thank-you"

    } catch (err: unknown) {
      clearTimeout(timer)
      let msg = "Something went wrong. Please try again."
      if (err instanceof Error) {
        msg = err.name === "AbortError"
          ? "Request timed out. Please try again."
          : err.message
      }
      setStatus("error")
      setErrMsg(msg)
    }
  }

  const inputCls =
    "w-full rounded-[16px] border border-black/10 bg-white px-5 py-3 " +
    "text-[14px] text-[#111] outline-none transition " +
    "focus:border-[#d4202a] focus:ring-2 focus:ring-[#d4202a]/15"

  const activePair = PAIRS[pairIdx]

  return (
    <section
      id="transforms"
      className="py-[100px] bg-white
                 max-[768px]:py-[70px]
                 max-[560px]:py-[20px]"
    >
      <div className="max-w-[1600px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8 max-[470px]:px-4">
        <AnimateIn animation="up" className="text-center mb-[60px] max-[560px]:mb-[30px]">
          <div
            className="inline-flex items-center gap-3 mb-4
                       text-[13px] tracking-[.22em] uppercase text-[#d4202a] font-medium"
          >
            <span className="w-8 h-px bg-[#d4202a]" />
            Real Results
            <span className="w-8 h-px bg-[#d4202a]" />
          </div>
          <h2
            className="font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a]"
            style={{ fontSize: "clamp(28px, 3.7vw, 50px)" }}
          >
            Our Real Clients
            <br />
            <em className="not-italic font-light text-[#d4202a]">Transformations</em>
          </h2>
          <p className="mt-4 text-[15px] text-[#666] max-w-[620px] mx-auto leading-[1.7]">
            Real treatments. Real results. No filters - just the AdGlo difference.
          </p>
        </AnimateIn>

        <div
          className="mx-auto max-w-[1240px] grid grid-cols-[1fr_500px] gap-3 items-stretch
                     max-[1100px]:grid-cols-1 max-[1100px]:gap-8"
        >
          {/* ── Before / After image carousel ── */}
          <AnimateIn animation="left" className="h-full">
            <div className="h-full w-full overflow-hidden rounded-[30px] border border-black/10 bg-[#faf7f1] p-4 flex flex-col">

              {/* header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] tracking-[.2em] uppercase text-[#d4202a] font-semibold">
                  Skin Transformation
                </p>
                {/* dot indicators */}
                <div className="flex gap-2">
                  {PAIRS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPairIdx(i)}
                      aria-label={`Go to pair ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === pairIdx
                          ? "w-5 h-2 bg-[#d4202a]"
                          : "w-2 h-2 bg-[#d4202a]/30 hover:bg-[#d4202a]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 2-up grid with crossfade */}
              <div className="relative flex-1 min-h-48 max-[640px]:min-h-36">
                {PAIRS.map((pair, pi) => (
                  <div
                    key={pi}
                    className={`absolute inset-0 grid grid-cols-2 gap-3 transition-opacity duration-700 ${
                      pi === pairIdx ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {pair.map(imgIdx => {
                      const img = transformImages[imgIdx]
                      return (
                        <div key={imgIdx} className="relative flex flex-col gap-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover rounded-[20px]"
                          />
                          {/* <span className="absolute bottom-2 left-0 right-0 text-center text-[11px] font-semibold tracking-[.12em] uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                            {img.label}
                          </span> */}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* ── Booking form card ── */}
          <AnimateIn
            animation="right"
            delay={120}
            className="flex h-full w-full"
          >
            <div
              id="consultation-form"
              className="flex h-full w-full flex-col rounded-[30px] border border-black/10 bg-[#faf7f1] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] max-[560px]:p-4"
            >
              <div className="mb-3">
                <p className="text-[12px] tracking-[.22em] uppercase text-[#d4202a] font-semibold">
                  Free Consultation
                </p>
                <h3
                  className="mt-3 font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a]"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
                >
                  Check the right skin treatment for you
                </h3>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col space-y-2">

                {/* Name */}
                <label className="block">
                  <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[.12em] text-[#555]">
                    Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className={inputCls}
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[.12em] text-[#555]">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className={inputCls}
                  />
                </label>

                {/* Location */}
                <label className="block">
                  <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[.12em] text-[#555]">
                    Your Location
                  </span>
                  <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="e.g. Royapuram, Chennai"
                    className={inputCls}
                  />
                </label>

                {/* Treatment */}
                <label className="block">
                  <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[.12em] text-[#555]">
                    Treatments
                  </span>
                  <select
                    value={treatment}
                    onChange={e => setTreatment(e.target.value)}
                    className={inputCls}
                  >
                    <option value="" disabled>Select a treatment</option>
                    {treatments.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>

                {/* Error */}
                {status === "error" && errMsg && (
                  <p className="text-[13px] text-[#d4202a] font-medium pt-1">⚠ {errMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-auto w-full rounded-[16px] bg-[#d4202a] px-5 py-3
                             text-[12px] font-bold uppercase tracking-[.18em] text-white
                             transition hover:bg-[#0a0a0a]
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting…
                    </span>
                  ) : "Submit Now"}
                </button>
              </form>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

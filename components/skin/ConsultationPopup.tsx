"use client"

import { useState, useEffect } from "react"
import { usePopup } from "./PopupContext"

const treatments = [
  "Aqua Luxe Skin Therapy",
  "Gluta IV – Skin Glow",
  "Chemical Peel",
  "Micro Needling",
  "General Consultation",
]

export default function ConsultationPopup() {
  const { isOpen, closePopup, defaultTreatment } = usePopup()

  const [name,      setName]      = useState("")
  const [phone,     setPhone]     = useState("")
  const [location,  setLocation]  = useState("")
  const [treatment, setTreatment] = useState("")
  const [status,    setStatus]    = useState<"idle" | "loading" | "error">("idle")
  const [errMsg,    setErrMsg]    = useState("")

  /* sync default treatment whenever popup opens */
  useEffect(() => {
    if (isOpen) {
      setTreatment(defaultTreatment || treatments[0])
      setStatus("idle")
      setErrMsg("")
    }
  }, [isOpen, defaultTreatment])

  /* close on ESC */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePopup()
    }
    if (isOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closePopup])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "loading") return

    if (!name.trim()) {
      setStatus("error")
      setErrMsg("Please enter your name.")
      return
    }
    if (!phone.trim()) {
      setStatus("error")
      setErrMsg("Please enter your phone number.")
      return
    }

    setStatus("loading")
    setErrMsg("")

    const controller = new AbortController()
    const timer      = setTimeout(() => controller.abort(), 25_000)

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

  if (!isOpen) return null

  return (
    /* ── Overlay ── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ animation: "popup-fade-in 0.22s ease both" }}
    >
      {/* dark backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"
        onClick={closePopup}
        aria-hidden="true"
      />

      {/* ── Modal card ── */}
      <div
        className="relative z-10 w-full max-w-[480px] rounded-[30px] border border-black/10
                   bg-[#faf7f1] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.22)]
                   max-[520px]:p-5 max-h-[90vh] overflow-y-auto"
        style={{ animation: "popup-slide-up 0.28s cubic-bezier(.22,1,.36,1) both" }}
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/[.06]
                     flex items-center justify-center text-[#555]
                     hover:bg-[#d4202a] hover:text-white transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-4">
          <p className="text-[12px] tracking-[.22em] uppercase text-[#d4202a] font-semibold">
            Free Consultation
          </p>
          <h3
            className="mt-2 font-bold leading-[1.1] tracking-[-0.03em] text-[#0a0a0a]"
            style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
          >
            Check the right skin treatment for you
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">

          {/* Name */}
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[.12em] text-[#555]">
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
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[.12em] text-[#555]">
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
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[.12em] text-[#555]">
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
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[.12em] text-[#555]">
              Treatments
            </span>
            <select
              value={treatment}
              onChange={e => setTreatment(e.target.value)}
              className={inputCls}
            >
              {treatments.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>

          {/* Error */}
          {status === "error" && errMsg && (
            <p className="text-[13px] text-[#d4202a] font-medium">⚠ {errMsg}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-1 w-full rounded-[16px] bg-[#d4202a] px-5 py-3.5
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

          <p className="text-center text-[11px] text-[#999] leading-[1.6]">
            No charges · No commitment · We&apos;ll call you within 2 hrs
          </p>
        </form>
      </div>

      {/* Popup animations — injected once */}
      <style>{`
        @keyframes popup-fade-in {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes popup-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(.97) }
          to   { opacity: 1; transform: translateY(0)    scale(1)   }
        }
      `}</style>
    </div>
  )
}

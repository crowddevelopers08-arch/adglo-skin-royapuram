"use client"

import { useState } from "react"

const SKIN_CONCERNS = [
  "Gluta IV – Skin Glow",
  "Chemical Peel",
  "Aqua Luxe Skin Therapy",
  "Micro Needling",
  "General Consultation",
]

export default function SkinBookingForm() {
  const [name,    setName]    = useState("")
  const [phone,   setPhone]   = useState("")
  const [concern, setConcern] = useState("")
  const [status,  setStatus]  = useState<"idle" | "loading" | "error">("idle")
  const [errMsg,  setErrMsg]  = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "loading") return          // prevent double-submit
    setStatus("loading")
    setErrMsg("")

    // Abort the API call if it takes more than 25 seconds
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 25_000)

    try {
      const res = await fetch("/api/submit-lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          treatment: concern,
          location:  "Royapuram, Chennai",
          pageUrl: window.location.href,
        }),
        signal: controller.signal,
      })
      clearTimeout(timer)

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      // Redirect — window.location is more reliable than router.push across all environments
      window.location.href = "/thank-you"

    } catch (err: unknown) {
      clearTimeout(timer)

      let msg = "Something went wrong. Please try again."
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          msg = "Request timed out. Please check your connection and try again."
        } else {
          msg = err.message
        }
      }

      setStatus("error")
      setErrMsg(msg)
    }
  }

  // shared input classes
  const inputCls =
    "w-full bg-[#faf7f1] border border-black/[.12] px-4 py-3 text-[14px] text-[#0a0a0a] " +
    "placeholder:text-[#aaa] outline-none focus:border-[#d4202a] focus:bg-white transition-all duration-200"

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-black/[.08]
                 p-8 shadow-[0_8px_40px_rgba(0,0,0,.14)]
                 max-[560px]:p-6"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="text-[11px] tracking-[.22em] uppercase text-[#d4202a] font-semibold mb-1.5">
          Free Consultation
        </div>
        <h3
          className="font-bold text-[#0a0a0a] leading-[1.2] tracking-[-0.02em]"
          style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
        >
          Book Your Free Skin Check-Up
        </h3>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4 mb-5">

        {/* Name */}
        <div>
          <label
            htmlFor="bf-name"
            className="block text-[11px] tracking-[.12em] uppercase text-[#555] mb-1.5 font-medium"
          >
            Your Name <span className="text-[#d4202a]">*</span>
          </label>
          <input
            id="bf-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className={inputCls}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="bf-phone"
            className="block text-[11px] tracking-[.12em] uppercase text-[#555] mb-1.5 font-medium"
          >
            Phone Number <span className="text-[#d4202a]">*</span>
          </label>
          <input
            id="bf-phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            required
            className={inputCls}
          />
        </div>

        {/* Skin Concern */}
        <div>
          <label
            htmlFor="bf-concern"
            className="block text-[11px] tracking-[.12em] uppercase text-[#555] mb-1.5 font-medium"
          >
            Skin Concern
          </label>
          <div className="relative">
            <select
              id="bf-concern"
              value={concern}
              onChange={e => setConcern(e.target.value)}
              className={`${inputCls} appearance-none cursor-pointer pr-10`}
            >
              <option value="">Select your concern</option>
              {SKIN_CONCERNS.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Error message */}
      {status === "error" && errMsg && (
        <p className="text-[13px] text-[#d4202a] mb-4 font-medium leading-snug">
          ⚠ {errMsg}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#d4202a] text-white font-bold text-[12px] tracking-[.16em] uppercase
                   py-4 px-8 border-2 border-[#d4202a]
                   hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-300
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Booking…
          </span>
        ) : (
          "Book Free Consultation →"
        )}
      </button>

      <p className="text-center text-[11px] text-[#999] mt-3 leading-[1.6]">
        No charges · No commitment · We&apos;ll call you within 2 hrs
      </p>
    </form>
  )
}

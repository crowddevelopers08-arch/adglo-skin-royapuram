"use client"

import { usePopup } from "./PopupContext"

const PHONE_TEL = "tel:+917358034097"

export default function MobileBottomBar() {
  const { openPopup } = usePopup()

  return (
    /* visible only on screens ≤ 768px */
    <div
      className="fixed bottom-0 left-0 right-0 z-[9990]
                 hidden max-[768px]:flex max-[768px]:items-stretch
                 shadow-[0_-4px_24px_rgba(0,0,0,.18)]"
      style={{ height: "56px" }}
    >
      {/* Book Now */}
      <button
        onClick={() => openPopup()}
        className="flex-1 flex items-center justify-center gap-2
                   bg-[#d4202a] text-white
                   text-[12px] font-bold tracking-[.16em] uppercase
                   hover:bg-[#b51b23] active:bg-[#8f1319]
                   transition-colors duration-200"
      >
        {/* calendar icon */}
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        Book Now
      </button>

      {/* Call Now */}
      <a
        href={PHONE_TEL}
        className="flex-1 flex items-center justify-center gap-2
                   bg-[#0a0a0a] text-white
                   text-[12px] font-bold tracking-[.16em] uppercase
                   hover:bg-[#1f1f1f] active:bg-[#333]
                   transition-colors duration-200"
      >
        {/* phone icon */}
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Call Now
      </a>
    </div>
  )
}

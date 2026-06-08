"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface PopupCtx {
  isOpen: boolean
  openPopup: (treatment?: string) => void
  closePopup: () => void
  defaultTreatment: string
}

const PopupContext = createContext<PopupCtx>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
  defaultTreatment: "",
})

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen]                     = useState(false)
  const [defaultTreatment, setDefaultTreatment] = useState("")

  function openPopup(treatment = "") {
    setDefaultTreatment(treatment)
    setIsOpen(true)
    // prevent body scroll while popup is open
    document.body.style.overflow = "hidden"
  }

  function closePopup() {
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup, defaultTreatment }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)

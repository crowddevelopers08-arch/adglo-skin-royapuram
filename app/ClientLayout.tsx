"use client"

import { PopupProvider }     from "@/components/skin/PopupContext"
import ConsultationPopup     from "@/components/skin/ConsultationPopup"
import MobileBottomBar       from "@/components/skin/MobileBottomBar"
import type { ReactNode }    from "react"

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <PopupProvider>
      {children}
      <ConsultationPopup />
      <MobileBottomBar />
    </PopupProvider>
  )
}

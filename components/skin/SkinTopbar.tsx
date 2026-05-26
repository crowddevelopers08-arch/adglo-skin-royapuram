const items = [
  "Now booking · Free skin consultation",
  "20,000+ Happy clients",
  "FDA approved equipment",
  "No-cost EMI available",
  "Royapuram · Chennai",
]

export default function SkinTopbar() {
  return (
    <div className="bg-[#0a0a0a] text-[#f5f1ea] py-[9px] text-[11px] tracking-[.18em] uppercase overflow-hidden whitespace-nowrap border-b border-[rgba(245,241,234,.14)]">
      <div
        style={{
          display: "inline-flex",
          gap: "64px",
          animation: "sk-scroll 38s linear infinite",
          paddingLeft: "40px",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}
          >
            <span className="w-[6px] h-[6px] bg-[#d4202a] rounded-full shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

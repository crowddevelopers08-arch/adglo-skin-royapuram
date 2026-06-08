import AnimateIn from "./AnimateIn"

const trustStats = [
  { num: "5,000+",  label: "Skin Transformations", icon: "✦" },
  { num: "FDA",     label: "Approved Equipments",   icon: "✦" },
  { num: "20K+",    label: "Happy Clients",          icon: "✦" },
  { num: "No Cost", label: "EMI Available",          icon: "✦" },
]

export default function SkinStats() {
  return (
    <div className="bg-black py-10 max-[560px]:py-8">
      <div className="max-w-[1600px] mx-auto px-16 max-[768px]:px-10 max-[560px]:px-5">
        <div className="grid grid-cols-4 gap-4 max-[768px]:gap-3 max-[640px]:grid-cols-2 max-[640px]:gap-3">
          {trustStats.map((s, i) => (
            <AnimateIn
              key={i}
              animation="up"
              delay={i * 90}
            >
              <div
                className="group relative flex flex-col items-center justify-center text-center
                           border border-white/[.08] bg-white/[.03]
                           rounded-2xl px-6 py-8
                           transition-all duration-300
                           hover:border-[#d4202a]/50 hover:bg-[#d4202a]/[.04]
                           hover:shadow-[0_0_32px_rgba(212,32,42,0.15)]
                           max-[640px]:px-4 max-[640px]:py-6"
              >
                {/* top red accent bar */}
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-b-full bg-[#d4202a]
                             group-hover:w-16 transition-all duration-300"
                />

                {/* number */}
                <span
                  className="font-extrabold text-white leading-none tracking-[-0.03em] mt-2 mb-3"
                  style={{ fontSize: "clamp(26px, 2.8vw, 42px)" }}
                >
                  {s.num}
                </span>

                {/* label */}
                <span className="text-[10px] tracking-[.22em] uppercase text-white/30 leading-[1.6] font-medium">
                  {s.label}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  )
}

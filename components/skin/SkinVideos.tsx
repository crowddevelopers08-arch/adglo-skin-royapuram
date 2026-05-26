import AnimateIn from "./AnimateIn"
import SkinCarousel from "./SkinCarousel"

const reels = [
  { id: "DW3zG1wgXkx", tag: "Gluta IV · Royapuram" },
  { id: "DU7gZ8yDIlX", tag: "Chemical Peel · 5 Sessions" },
  { id: "DVvhf3ZyD4j", tag: "Aqua Luxe · Royapuram" },
  { id: "DULZVDBgSAh", tag: "Micro Needling" },
]

function ReelEmbed({ id, tag }: { id: string; tag: string }) {
  return (
    <div className="w-full overflow-hidden bg-[#111] border border-white/[.06]">
      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
        <iframe
          src={`https://www.instagram.com/reel/${id}/embed/`}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          scrolling="no"
          allowFullScreen
          loading="lazy"
          title={`AdGlo Skin Clinic – ${tag}`}
        />
      </div>
    </div>
  )
}

export default function SkinVideos() {
  return (
    <section
      id="testimonials"
      className="py-[100px] bg-[#0a0a0a]
                 max-[768px]:py-[70px]
                 max-[560px]:py-[40px]"
    >
      <div className="max-w-[1360px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8">

        {/* Heading */}
        <AnimateIn animation="up">
          <div className="flex items-end justify-between gap-8 mb-[60px]
                          max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4
                          max-[560px]:mb-[30px]">
            <div>
              <h2
                className="font-bold leading-[1.05] tracking-[-0.03em] text-[#f5f1ea]"
                style={{ fontSize: "clamp(28px, 3.7vw, 50px)" }}
              >
                Video
                <br />
                <em className="not-italic text-[#d4202a]">Testimonials</em>
              </h2>
            </div>
            <p className="text-[15px] leading-[1.7] text-[#666] max-w-[440px]
                          max-[768px]:max-w-full">
              Real stories from real clients — watch their skin transformation on Instagram.
            </p>
          </div>
        </AnimateIn>

        {/* ── Desktop: all 4 in one row ── */}
        <div className="grid grid-cols-4 gap-4
                        max-[1024px]:grid-cols-2 max-[1024px]:gap-5
                        max-[640px]:hidden">
          {reels.map((reel, i) => (
            <AnimateIn key={reel.id} animation="up" delay={i * 90}>
              <ReelEmbed id={reel.id} tag={reel.tag} />
            </AnimateIn>
          ))}
        </div>

        {/* ── Mobile: carousel ── */}
        <div className="hidden max-[640px]:block">
          <SkinCarousel
            darkMode
            items={reels.map((reel) => (
              <ReelEmbed key={reel.id} id={reel.id} tag={reel.tag} />
            ))}
          />
        </div>
      </div>
    </section>
  )
}

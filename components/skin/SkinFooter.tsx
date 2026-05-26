import AnimateIn from "./AnimateIn"

const navLinks = [
  { label: "Treatments",      href: "#services"    },
  { label: "Why AdGro",       href: "#why"          },
  { label: "Transformations", href: "#transforms"  },
  { label: "Testimonials",    href: "#testimonials" },
  { label: "FAQ",             href: "#faq"          },
]

const PHONE       = "7358034097"
const PHONE_TEL   = `tel:+91${PHONE}`
const PHONE_DISPLAY = "+91 73580 34097"
const WA_LINK     = `https://wa.me/91${PHONE}`
const ADDRESS     = "First Floor, No.187, MS Koil St,\nabove Time emporium, Somu Nagar,\nRoyapuram, Chennai, Tamil Nadu 600013"
const IG_LINK     = "https://www.instagram.com/adgloskinclinicroyapuram/"
const FB_LINK     = "https://www.facebook.com/p/Adgrohairclinicroyapuram-61572419323946/"

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function SkinFooter() {
  return (
    <footer className="bg-[#070707] text-[#f5f1ea]">

      {/* ── CTA Band ── */}
      <AnimateIn animation="up">
        <div
          id="contact"
          className="bg-[#d4202a] py-[64px] px-16 text-center
                     max-[768px]:py-[50px] max-[768px]:px-12 max-[560px]:py-[38px] max-[560px]:px-8"
        >
          <p className="text-[13px] tracking-[.24em] uppercase text-white/70 mb-3 font-medium">
            AdGlo Skin Clinic · Royapuram
          </p>
          <h2
            className="font-bold leading-[1.05] tracking-[-0.03em] text-white mb-5"
            style={{ fontSize: "clamp(28px, 3.7vw, 50px)" }}
          >
            Start Your Skin Journey Today
          </h2>
          <p className="text-[15px] text-white/80 max-w-[620px] mx-auto mb-9 leading-[1.7]">
            Book a free consultation and let our skin doctors create the right
            treatment plan just for you.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#consultation-form"
              className="inline-flex items-center gap-3
                         bg-white text-[#d4202a] font-bold
                         px-9 py-4 text-[13px] tracking-[.16em] uppercase
                         hover:bg-[#0a0a0a] hover:text-white transition-all duration-300
                         max-[480px]:px-7"
            >
              <span>★</span>
              Book Free Consultation
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5
                         border-2 border-white text-white font-semibold
                         px-9 py-4 text-[13px] tracking-[.16em] uppercase
                         hover:bg-white hover:text-[#d4202a] transition-all duration-300
                         max-[480px]:px-7"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </AnimateIn>

      {/* ── Footer body ── */}
      <div className="max-w-[1600px] mx-auto px-16 max-[768px]:px-12 max-[560px]:px-8">

        <div className="grid grid-cols-[1.8fr_1fr_1.2fr] gap-[50px] py-[60px] border-b border-white/[.07]
                        max-[900px]:grid-cols-2 max-[900px]:gap-[36px] max-[900px]:py-[48px]
                        max-[560px]:py-[36px] max-[480px]:grid-cols-1">

          {/* Brand */}
          <AnimateIn animation="up" delay={0}>
            {/* Logo — white bg patch so it reads on the dark footer */}
            <div className="inline-block bg-white px-3 py-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/adglow-rajaji.png"
                alt="Advanced GloSkin – Skin Glow Forever"
                className="h-20 w-auto object-contain
                           max-[480px]:h-14"
              />
            </div>
            <p className="text-[15px] leading-[1.7] text-[#666] max-w-[360px] mb-5">
              Royapuram&apos;s most trusted skin clinic. FDA-approved treatments,
              expert doctors, real results.
            </p>
            <div className="flex gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 className="w-9 h-9 border border-white/20 rounded-sm flex items-center justify-center
                            hover:border-[#25d366] hover:bg-[#25d366] transition-all duration-200 group">
                <span className="text-[#666] group-hover:text-white"><WhatsAppIcon /></span>
              </a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-9 h-9 border border-white/20 rounded-sm flex items-center justify-center
                            hover:border-[#d4202a] hover:bg-[#d4202a] transition-all duration-200 group">
                <span className="text-[#666] group-hover:text-white"><InstagramIcon /></span>
              </a>
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="w-9 h-9 border border-white/20 rounded-sm flex items-center justify-center
                            hover:border-[#1877f2] hover:bg-[#1877f2] transition-all duration-200 group">
                <span className="text-[#666] group-hover:text-white"><FacebookIcon /></span>
              </a>
            </div>
          </AnimateIn>

          {/* Quick links */}
          <AnimateIn animation="up" delay={100}>
            <h5 className="text-[13px] tracking-[.2em] uppercase text-[#d4202a] font-semibold mb-5">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                     className="text-[15px] text-[#666] hover:text-[#d4202a]
                                hover:pl-1.5 transition-all duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateIn>

          {/* Contact */}
          <AnimateIn animation="up" delay={200}>
            <h5 className="text-[13px] tracking-[.2em] uppercase text-[#d4202a] font-semibold mb-5">
              Contact Us
            </h5>
            <div className="flex gap-3 mb-5 items-start">
              <span className="text-[#d4202a] mt-0.5"><PinIcon /></span>
              <address className="not-italic text-[15px] text-[#666] leading-[1.75] whitespace-pre-line">
                {ADDRESS}
              </address>
            </div>
            <div className="flex gap-3 mb-3 items-center">
              <span className="text-[#d4202a]"><PhoneIcon /></span>
              <a href={PHONE_TEL}
                 className="text-[15px] text-[#666] hover:text-[#d4202a] transition-colors duration-200">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[#25d366]"><WhatsAppIcon /></span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                 className="text-[15px] text-[#666] hover:text-[#d4202a] transition-colors duration-200">
                WhatsApp Us
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-6 gap-4 flex-wrap
                        text-[13px] tracking-[.08em] text-[#444]
                        max-[600px]:flex-col max-[600px]:text-center">
          <span>© 2026 AdGlo Skin Clinic · Royapuram · Chennai</span>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-[#d4202a] transition-colors duration-200">
              Privacy Policy
            </a>
            {/* <span>·</span>
            <span>Made with <span className="text-[#d4202a]">♥</span> in Chennai</span> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

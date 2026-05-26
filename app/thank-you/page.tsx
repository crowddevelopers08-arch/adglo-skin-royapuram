import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thank You - AdGlo Skin Clinic Royapuram",
  description:
    "Thank you for booking your free consultation at AdGlo Skin Clinic, Royapuram. We will get in touch with you shortly.",
  robots: { index: false, follow: false },
}

const steps = [
  {
    num: "01",
    title: "Confirmation Call",
    desc: "Our team will call you within a few hours to confirm your appointment slot.",
  },
  {
    num: "02",
    title: "Skin Analysis",
    desc: "Our doctor will analyse your skin type, concerns, and medical history during the consultation.",
  },
  {
    num: "03",
    title: "Personalised Plan",
    desc: "You will receive a personalised treatment plan curated specifically for your skin needs.",
  },
  {
    num: "04",
    title: "Your Treatment Begins",
    desc: "Begin your skin transformation journey with expert care and FDA-approved treatments.",
  },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#faf7f1] flex flex-col">
      <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-[14px] border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-10 py-3 flex items-center justify-between max-[768px]:px-6 max-[480px]:px-4">
          <Link href="/" aria-label="AdGlo Skin Clinic - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/adglow-rajaji.png"
              alt="AdGlo Skin Clinic - Royapuram"
              className="h-14 w-auto object-contain max-[768px]:h-12 max-[480px]:h-10"
            />
          </Link>
          <Link
            href="/"
            className="text-[11px] tracking-[.16em] uppercase font-semibold text-[#555] hover:text-[#d4202a] transition-colors duration-200 flex items-center gap-1.5"
          >
            ← Home
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#d4202a]/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] rounded-full bg-[#d4202a]/5 blur-[60px] pointer-events-none" />

          <div className="relative z-10 max-w-[760px] mx-auto px-6 py-[92px] text-center max-[768px]:py-[72px] max-[480px]:px-4 max-[480px]:py-[56px]">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-[74px] h-[74px] rounded-full bg-[#e3202b] mb-7 max-[560px]:w-[62px] max-[560px]:h-[62px]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 max-[560px]:w-6 max-[560px]:h-6"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <div className="inline-flex items-center justify-center gap-3 mb-8 text-[11px] tracking-[.26em] uppercase text-[#e3202b] font-semibold max-[480px]:gap-2 max-[480px]:text-[10px]">
                <span className="w-9 h-px bg-[#e3202b]" />
                <span className="leading-none">Booking Confirmed</span>
                <span className="w-9 h-px bg-[#e3202b]" />
              </div>

              <h1
                className="max-w-[680px] font-bold leading-[0.98] tracking-[-0.045em] text-[#f4efe8] mb-7"
                style={{ fontSize: "clamp(42px, 6vw, 58px)" }}
              >
                Thank You for
                <br />
                <span className="text-[#ef2733]">Choosing AdGlo!</span>
              </h1>

              <p className="max-w-[520px] mx-auto text-[15px] text-[#8e939d] leading-[1.8] mb-12 max-[560px]:text-[14px] max-[560px]:mb-10">
                Your free consultation request has been received. Our team will reach out to you shortly to confirm your appointment at AdGlo Skin Clinic, Royapuram.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap max-[480px]:w-full max-[480px]:gap-3">
                <a
                  href="tel:+917436856789"
                  className="inline-flex min-w-[196px] items-center justify-center gap-3 bg-[#ef2733] text-white font-bold px-8 py-4 text-[12px] tracking-[.16em] uppercase hover:bg-white hover:text-[#ef2733] transition-all duration-300 max-[480px]:w-full"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/917436856789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[196px] items-center justify-center gap-2.5 border border-white/30 text-white font-semibold px-8 py-4 text-[12px] tracking-[.16em] uppercase hover:border-[#25d366] hover:bg-[#25d366] transition-all duration-300 max-[480px]:w-full"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-10 py-[100px] max-[768px]:px-6 max-[768px]:py-[72px] max-[480px]:px-4 max-[480px]:py-[56px]">
          <div className="text-center mb-[64px] max-[560px]:mb-[44px]">
            <div className="inline-flex items-center gap-3 mb-4 text-[11px] tracking-[.22em] uppercase text-[#d4202a] font-medium">
              <span className="w-8 h-px bg-[#d4202a]" />
              Your Journey Starts Here
              <span className="w-8 h-px bg-[#d4202a]" />
            </div>
            <h2
              className="font-bold leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]"
              style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
            >
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[900px]:gap-4 max-[480px]:grid-cols-1 max-[480px]:gap-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white border border-black/[.08] p-7 hover:border-[#d4202a]/30 hover:shadow-sm transition-all duration-300 max-[560px]:p-5"
              >
                <div className="w-[44px] h-[44px] bg-[#d4202a]/10 border border-[#d4202a]/20 flex items-center justify-center mb-5">
                  <span className="text-[12px] font-bold tracking-[.1em] text-[#d4202a]">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-[16px] tracking-[-0.01em] text-[#0a0a0a] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#666]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a0a0a]">
          <div className="max-w-[1280px] mx-auto px-10 py-[60px] max-[768px]:px-6 max-[768px]:py-[48px] max-[480px]:px-4">
            <div className="grid grid-cols-3 gap-10 max-[768px]:grid-cols-1 max-[768px]:gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#d4202a]/10 border border-[#d4202a]/20 shrink-0 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#d4202a]">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] tracking-[.2em] uppercase text-[#d4202a] font-semibold mb-1.5">
                    Our Location
                  </p>
                  <address className="not-italic text-[13px] text-[#888] leading-[1.7]">
                    First Floor, No.187, MS Koil St,
                    <br />
                    above Time emporium, Somu Nagar,
                    <br />
                    Royapuram, Chennai - 600013
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#d4202a]/10 border border-[#d4202a]/20 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#d4202a]">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] tracking-[.2em] uppercase text-[#d4202a] font-semibold mb-1.5">
                    Call / WhatsApp
                  </p>
                  <a
                    href="tel:+917436856789"
                    className="text-[15px] font-semibold text-[#f5f1ea] hover:text-[#d4202a] transition-colors duration-200 block mb-1"
                  >
                    +91 74368 56789
                  </a>
                  <a
                    href="https://wa.me/917436856789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#666] hover:text-[#25d366] transition-colors duration-200"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#d4202a]/10 border border-[#d4202a]/20 shrink-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#d4202a]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] tracking-[.2em] uppercase text-[#d4202a] font-semibold mb-1.5">
                    Free Consultation
                  </p>
                  <p className="text-[13px] text-[#888] leading-[1.7]">
                    Visit us or call to confirm your slot.
                    <br />
                    No hidden charges for your first consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[80px] px-10 text-center max-[768px]:py-[56px] max-[768px]:px-6 max-[480px]:px-4">
          <p className="text-[15px] text-[#888] mb-7 leading-[1.65]">
            While you wait, explore more about our treatments and the clinic.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] text-[#f5f1ea] font-semibold px-10 py-4 text-[12px] tracking-[.16em] uppercase hover:bg-[#d4202a] transition-all duration-300"
          >
            ← Explore AdGlo Skin Clinic
          </Link>
        </div>
      </main>

      <div className="border-t border-black/[.08] bg-white">
        <div className="max-w-[1280px] mx-auto px-10 py-5 flex items-center justify-between flex-wrap gap-3 max-[768px]:px-6 max-[480px]:px-4 max-[600px]:justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/adglow-rajaji.png"
            alt="AdGlo Skin Clinic"
            className="h-10 w-auto object-contain max-[480px]:h-8"
          />
          <div className="flex items-center gap-4 text-[11px] tracking-[.08em] text-[#888]">
            <span>© 2026 AdGlo Skin Clinic · Royapuram</span>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-[#d4202a] transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — AdGlo Skin Clinic Royapuram",
  description: "Privacy Policy for AdGlo Skin Clinic, Royapuram, Chennai. Learn how we collect, use, and protect your personal information.",
  robots: { index: false, follow: false },
}

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you book a consultation or contact us, we may collect your name, phone number, email address, and any health or skin concern information you voluntarily provide.",
      },
      {
        subtitle: "Usage Information",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, pages visited, time spent on pages, and referring website.",
      },
      {
        subtitle: "Communication Data",
        text: "If you contact us via phone, WhatsApp, or any enquiry form, we retain records of that communication to provide better service.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Appointment & Consultation",
        text: "To schedule appointments, send reminders, follow up on consultations, and provide personalised skin treatment recommendations.",
      },
      {
        subtitle: "Communication",
        text: "To respond to your enquiries, send booking confirmations, and share important updates about your treatment plan.",
      },
      {
        subtitle: "Service Improvement",
        text: "To understand how visitors use our website and improve our services, content, and user experience.",
      },
      {
        subtitle: "Legal Compliance",
        text: "To comply with applicable laws, regulations, and legal obligations as required by Indian law.",
      },
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing & Disclosure",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "AdGlo Skin Clinic does not sell, trade, or rent your personal information to third parties for their marketing purposes.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, court order, or governmental authority, or to protect the rights, property, or safety of AdGlo Skin Clinic, its clients, or others.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      {
        subtitle: "Protection Measures",
        text: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
      },
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law. Medical consultation records are retained as per applicable healthcare regulations in India.",
      },
      {
        subtitle: "Limitation",
        text: "No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: [
      {
        subtitle: "What Are Cookies",
        text: "Cookies are small data files stored on your device when you visit our website. They help us remember your preferences and understand how you interact with our site.",
      },
      {
        subtitle: "Google Maps",
        text: "Our website uses Google Maps to display our clinic location. Google Maps may collect usage data subject to Google's Privacy Policy.",
      },
      {
        subtitle: "Analytics",
        text: "We may use website analytics tools to understand visitor behaviour and improve our site. These tools may use cookies to collect anonymised usage data.",
      },
      {
        subtitle: "Your Choices",
        text: "You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of certain parts of our website.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access the personal information we hold about you and request corrections if any information is inaccurate or incomplete.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your personal information, subject to any legal obligations we have to retain certain records.",
      },
      {
        subtitle: "Opt-Out",
        text: "You may opt out of receiving promotional communications from us at any time by contacting us directly.",
      },
      {
        subtitle: "How to Exercise Your Rights",
        text: "To exercise any of these rights, please contact us at the details provided at the bottom of this page. We will respond within a reasonable timeframe.",
      },
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    content: [
      {
        subtitle: "External Websites",
        text: "Our website may contain links to external websites such as Instagram, Facebook, Google Maps, and WhatsApp. We are not responsible for the privacy practices of these external sites.",
      },
      {
        subtitle: "Instagram Embeds",
        text: "Our website may embed Instagram content. Instagram's collection and use of information is governed by Meta's Privacy Policy.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      {
        subtitle: "Updates",
        text: "We may update this Privacy Policy from time to time. When we do, we will revise the 'Last Updated' date at the top of this page. We encourage you to review this policy periodically.",
      },
      {
        subtitle: "Continued Use",
        text: "Your continued use of our website following any changes constitutes your acceptance of the revised Privacy Policy.",
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf7f1]">

      {/* ── Minimal top nav ── */}
      <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-[14px] border-b border-black/10">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between
                        px-10 py-4 max-[768px]:px-5 max-[768px]:py-3">
          <Link href="/" aria-label="AdGlo Skin Clinic">
            <span className="text-[26px] font-light tracking-[-0.04em] text-[#0a0a0a] leading-none
                             max-[480px]:text-[22px]">
              Ad<strong className="font-black text-[#d4202a]">Glo</strong>
              <sup className="text-[#d4202a] font-bold text-[14px]">.</sup>
            </span>
            <span className="block text-[9px] tracking-[.22em] uppercase text-[#888] mt-0.5
                             max-[480px]:hidden">
              Skin Clinic · Royapuram
            </span>
          </Link>
          <Link
            href="/"
            className="text-[12px] tracking-[.14em] uppercase font-semibold text-[#555]
                       hover:text-[#d4202a] transition-colors duration-200 flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* ── Hero band ── */}
      <div className="bg-[#0a0a0a] py-[72px] px-10 text-center max-[768px]:py-[52px] max-[768px]:px-5">
        <div className="inline-flex items-center gap-3 mb-5
                        text-[11px] tracking-[.22em] uppercase text-[#d4202a] font-medium">
          <span className="w-8 h-px bg-[#d4202a]" />
          Legal
          <span className="w-8 h-px bg-[#d4202a]" />
        </div>
        <h1
          className="font-bold leading-[1.05] tracking-[-0.03em] text-[#f5f1ea] mb-4"
          style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-[15px] text-[#666] max-w-[480px] mx-auto leading-[1.65]">
          AdGlo Skin Clinic, Royapuram, Chennai
        </p>
        <p className="text-[13px] text-[#444] mt-3">
          Last Updated: May 2026
        </p>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[860px] mx-auto px-10 py-[80px]
                      max-[768px]:px-5 max-[768px]:py-[56px]">

        {/* Intro */}
        <div className="bg-white border border-black/[.08] p-8 mb-12 max-[560px]:p-6">
          <p className="text-[15px] leading-[1.8] text-[#444]">
            At <strong className="text-[#0a0a0a]">AdGlo Skin Clinic</strong>, we are committed to protecting
            your privacy and ensuring the security of your personal information. This Privacy Policy explains
            how we collect, use, share, and protect information when you visit our website or use our services
            at our clinic located at Royapuram, Chennai. By using our website or services, you agree to the
            practices described in this policy.
          </p>
        </div>

        {/* Table of contents */}
        <div className="mb-12 p-6 bg-[#f5f1ea] border-l-4 border-[#d4202a]">
          <p className="text-[11px] tracking-[.18em] uppercase text-[#d4202a] font-semibold mb-4">
            Contents
          </p>
          <ol className="flex flex-col gap-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[14px] text-[#555] hover:text-[#d4202a] transition-colors duration-200"
                >
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Policy sections */}
        <div className="flex flex-col gap-[56px]">
          {sections.map((section, idx) => (
            <div key={section.id} id={section.id}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-black/[.09]">
                <span className="text-[11px] tracking-[.2em] uppercase text-[#d4202a] font-semibold shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2
                  className="font-bold tracking-[-0.02em] text-[#0a0a0a]"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Subsections */}
              <div className="flex flex-col gap-5">
                {section.content.map((item) => (
                  <div key={item.subtitle} className="pl-6 border-l border-black/[.08]">
                    <h3 className="font-semibold text-[15px] text-[#0a0a0a] mb-1.5">
                      {item.subtitle}
                    </h3>
                    <p className="text-[14px] leading-[1.8] text-[#555]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact box */}
        <div className="mt-[64px] bg-[#0a0a0a] text-[#f5f1ea] p-10 max-[560px]:p-7">
          <div className="inline-flex items-center gap-3 mb-4
                          text-[11px] tracking-[.22em] uppercase text-[#d4202a] font-medium">
            <span className="w-6 h-px bg-[#d4202a]" />
            Contact Us
          </div>
          <h3 className="font-bold text-[20px] tracking-[-0.02em] mb-3">
            Questions About This Policy?
          </h3>
          <p className="text-[14px] text-[#888] leading-[1.75] mb-7 max-w-[480px]">
            If you have any questions, concerns, or requests regarding this Privacy Policy or
            how we handle your personal information, please contact us.
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#d4202a] shrink-0 mt-0.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <address className="not-italic text-[14px] text-[#777] leading-[1.75]">
                First Floor, No.187, MS Koil St, above Time emporium,{"\n"}
                Somu Nagar, Royapuram, Chennai, Tamil Nadu 600013
              </address>
            </div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#d4202a] shrink-0">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <a href="tel:+917436856789"
                 className="text-[14px] text-[#777] hover:text-[#d4202a] transition-colors duration-200">
                +91 74368 56789
              </a>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:+917436856789"
              className="inline-flex items-center gap-2.5
                         bg-[#d4202a] text-white font-semibold
                         px-7 py-3.5 text-[12px] tracking-[.14em] uppercase
                         hover:bg-white hover:text-[#d4202a] transition-all duration-300"
            >
              Call Us Now
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5
                         border border-white/20 text-[#f5f1ea] font-semibold
                         px-7 py-3.5 text-[12px] tracking-[.14em] uppercase
                         hover:border-[#d4202a] hover:text-[#d4202a] transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* ── Minimal footer ── */}
      <div className="border-t border-black/[.08] bg-white py-6 px-10 max-[768px]:px-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-3
                        text-[11px] tracking-[.08em] text-[#888] max-[600px]:justify-center">
          <span>© 2026 AdGlo Skin Clinic · Royapuram · Chennai</span>
          <Link href="/" className="hover:text-[#d4202a] transition-colors duration-200">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

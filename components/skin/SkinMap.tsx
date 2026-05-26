import AnimateIn from "./AnimateIn"

export default function SkinMap() {
  return (
    <section className="w-full">

      {/* Label bar */}
      <AnimateIn animation="up">
        <div className="bg-[#0a0a0a] px-16 py-5 flex items-center justify-between flex-wrap gap-4
                        max-[768px]:px-12 max-[768px]:py-4 max-[560px]:px-8">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#d4202a] shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div>
              <p className="text-[11px] tracking-[.2em] uppercase text-[#555] font-medium mb-0.5">
                Find Us Here
              </p>
              <p className="text-[14px] text-[#f5f1ea] font-medium leading-[1.45]">
                First Floor, No.187, MS Koil St, above Time emporium,
                Somu Nagar, Royapuram, Chennai — 600013
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/qHAVKqq4rveZnE8TA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0
                       bg-[#d4202a] text-white text-[12px] tracking-[.14em] uppercase font-semibold
                       px-5 py-2.5 hover:bg-white hover:text-[#d4202a] transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Get Directions
          </a>
        </div>
      </AnimateIn>

      {/* Map embed */}
      <AnimateIn animation="fade" delay={150}>
        <div className="w-full h-[420px] max-[768px]:h-[320px] max-[480px]:h-[260px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d31092.14420268742!2d80.154022!3d13.066322!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3a526f680ad0db8d%3A0x4dcffb1d5d78d0c!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Royapuram%2C%20First%20Floor%2C%20No.187%2C%20MS%20Koil%20St%2C%20above%20Time%20emporium%2C%20Somu%20Nagar%2C%20Royapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600013!3m2!1d13.113897999999999!2d80.2922894!5e0!3m2!1sen!2sin!4v1779690969214!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AdGlo Skin Clinic – Royapuram, Chennai"
          />
        </div>
      </AnimateIn>
    </section>
  )
}

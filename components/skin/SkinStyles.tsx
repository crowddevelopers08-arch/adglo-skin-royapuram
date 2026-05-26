/* Global keyframe animations injected once at the top of the page */
export default function SkinStyles() {
  return (
    <style>{`
      /* Pulse ring on CTA dot */
      @keyframes sk-pulse {
        0%   { transform: scale(.5);  opacity: 1; }
        100% { transform: scale(2);   opacity: 0; }
      }

      /* Pulsing ring on video play button */
      @keyframes sk-ring {
        0%   { box-shadow: 0 0 0 0    rgba(212, 32, 42, .5); }
        100% { box-shadow: 0 0 0 20px rgba(212, 32, 42, 0);  }
      }

      /* Smooth scroll for anchor links */
      html { scroll-behavior: smooth; }

      /* Remove tap highlight on mobile */
      * { -webkit-tap-highlight-color: transparent; }
    `}</style>
  )
}

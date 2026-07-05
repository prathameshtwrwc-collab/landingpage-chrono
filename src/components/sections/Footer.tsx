import { Moon, Clock, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

interface FooterProps {
  onConsult: () => void;
}

export default function Footer({ onConsult }: FooterProps) {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-14">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* ── Brand + Nav ── */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[#E5E7EB] pb-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17213A] text-white">
              <Moon size={18} />
            </span>
            <span className="font-serif text-xl tracking-tight text-[#17213A]">Chronotype</span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#667085]">
            <a href="#sleep-cycles" className="hover:text-[#17213A]">Sleep Science</a>
            <a href="#chronotypes" className="hover:text-[#17213A]">Chronotypes</a>
            <a href="#about-us" className="hover:text-[#17213A]">About Us</a>
            <a href="#pillars" className="hover:text-[#17213A]">Energy Pillars</a>
            <a href="#faq" className="hover:text-[#17213A]">FAQ</a>
            <button onClick={onConsult} className="hover:text-[#17213A]">Consult a Specialist</button>
          </nav>
        </div>

        {/* ── Clinic Info ── */}
        <div className="grid gap-8 border-b border-[#E5E7EB] py-10 sm:grid-cols-3">
          {/* Hours */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4A853]">
              <Clock size={14} />
              Clinic Hours
            </div>
            <p className="text-sm text-[#667085]">Monday – Saturday</p>
            <p className="text-sm font-semibold text-[#17213A]">11:00 am – 5:00 pm</p>
            <div className="mt-3 rounded-xl border border-[#E5E7EB] bg-white p-3.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5B8DEF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B8DEF]" />
                Chronotype / NIDAN / MindKey Testing
              </div>
              <p className="mt-1.5 text-sm text-[#667085]">
                <strong className="text-[#17213A]">Mon, Wed, Fri</strong> &mdash; 12:00 – 2:00 pm
              </p>
              <p className="mt-0.5 text-xs text-[#98A2B3]">By Appointment Only</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4A853]">
              <Phone size={14} />
              Contact
            </div>
            <a
              href="tel:+918454949400"
              className="block text-sm font-semibold text-[#17213A] transition-colors hover:text-[#5B8DEF]"
            >
              +91 84549 49400
            </a>
            <p className="text-xs text-[#667085]">Mr. Harish Kotian / Raghu Kahar</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4A853]">
              <Mail size={14} />
              Email
            </div>
            <a
              href="mailto:clinic1@welcomecure.com"
              className="text-sm text-[#5B8DEF] transition-colors hover:text-[#17213A] hover:underline"
            >
              clinic1@welcomecure.com
            </a>
          </div>

          {/* Address */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4A853]">
              <MapPin size={14} />
              Address
            </div>
            <p className="text-sm leading-relaxed text-[#667085]">
              <strong className="text-[#17213A]">Welcome Cure Clinic</strong>
              <br />
              201, Ish Kripa, 2nd Floor, Jai Bharat Society
              <br />
              Near Gurudwara &amp; BMC Pump House, 3rd Road (Old Khar)
              <br />
              Khar West, Mumbai – 400052, India
            </p>
            <a
              href="https://g.co/kgs/aCnfZeM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B8DEF] transition-colors hover:text-[#17213A]"
            >
              Open in Google Maps
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <div className="mt-8 space-y-4">
          <p className="text-xs leading-relaxed text-[#667085] sm:text-sm">
            <strong className="text-[#17213A]">Educational Disclaimer:</strong> The content on this page is provided
            for general educational and informational purposes only. It is not intended to be, and should not be
            interpreted as, medical advice, diagnosis, or treatment. Sleep-related concerns vary from person to
            person, and only a qualified healthcare professional or sleep specialist can properly evaluate individual
            symptoms and circumstances. If you are experiencing persistent sleep difficulties or symptoms that affect
            your health, wellbeing, or quality of life, please consult a licensed healthcare provider.
          </p>
          <p className="text-xs text-[#98A2B3]">&copy; {new Date().getFullYear()} Chronotype Sleep Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

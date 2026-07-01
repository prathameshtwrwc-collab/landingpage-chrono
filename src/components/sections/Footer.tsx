import { Moon } from "lucide-react";

interface FooterProps {
  onConsult: () => void;
}

export default function Footer({ onConsult }: FooterProps) {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-14">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
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
            <a href="#pillars" className="hover:text-[#17213A]">Energy Pillars</a>
            <a href="#faq" className="hover:text-[#17213A]">FAQ</a>
            <button onClick={onConsult} className="hover:text-[#17213A]">Consult a Specialist</button>
          </nav>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-xs leading-relaxed text-[#667085] sm:text-sm">
            <strong className="text-[#17213A]">Educational Disclaimer:</strong> The content on this page is provided
            for general educational and informational purposes only. It is not intended to be, and should not be
            interpreted as, medical advice, diagnosis, or treatment. Sleep-related concerns vary from person to
            person, and only a qualified healthcare professional or sleep specialist can properly evaluate individual
            symptoms and circumstances. If you are experiencing persistent sleep difficulties or symptoms that affect
            your health, wellbeing, or quality of life, please consult a licensed healthcare provider.
          </p>
          <p className="text-xs text-[#98A2B3]">© {new Date().getFullYear()} Chronotype Sleep Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

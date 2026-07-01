import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Menu, X } from "lucide-react";
import CTAButton from "../ui/CTAButton";

const links = [
  { label: "Sleep Science", href: "#sleep-cycles" },
  { label: "Chronotypes", href: "#chronotypes" },
  { label: "Energy Pillars", href: "#pillars" },
  { label: "FAQ", href: "#faq" },
];

interface HeaderProps {
  onConsult: () => void;
}

export default function Header({ onConsult }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/85 shadow-[0_10px_30px_-15px_rgba(23,33,58,0.2)] backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17213A] text-white">
            <Moon size={18} />
          </span>
          <span className="font-serif text-xl tracking-tight text-[#17213A]">Chronotype</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-[#34328E] transition hover:text-[#F28C28]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton variant="primary" className="!px-6 !py-3" onClick={onConsult}>
            Consult a Specialist
          </CTAButton>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-col gap-1 bg-white px-6 pb-6 lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#34328E] hover:bg-[#EEF6FF]"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

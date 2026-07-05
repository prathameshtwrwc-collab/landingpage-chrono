import { motion } from "framer-motion";
import { Globe, HeartHandshake, GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedReveal from "../ui/AnimatedReveal";
import CTAButton from "../ui/CTAButton";

interface AboutUsProps {
  onConsult: () => void;
}

const stats = [
  { value: "50+", label: "Years Experience" },
  { value: "50K+", label: "Cases Treated" },
  { value: "4.5M+", label: "Patients Worldwide" },
  { value: "150+", label: "Countries Reached" },
];

const verticals = [
  {
    icon: Globe,
    title: "Techno Care",
    description:
      "Pioneer in homeopathic technology — creator of <strong class='font-semibold text-[#17213A]'>HOMPATH Zomeo</strong>, the largest decision-support system used in <strong class='font-semibold text-[#17213A]'>150+ countries</strong> and <strong class='font-semibold text-[#17213A]'>1000+ institutions</strong>.",
    accent: "#5B8DEF",
    lightBg: "bg-[#EEF6FF]",
    iconBg: "bg-[#5B8DEF]",
  },
  {
    icon: HeartHandshake,
    title: "Patient Care",
    description:
      "Founder of <strong class='font-semibold text-[#17213A]'>WelcomeCure</strong>, the world's largest homeopathic treatment portal. Trusted by <strong class='font-semibold text-[#17213A]'>4.5 million+ patients</strong> worldwide.",
    accent: "#22AD6B",
    lightBg: "bg-[#E6F7EE]",
    iconBg: "bg-[#22AD6B]",
  },
  {
    icon: GraduationCap,
    title: "Edu Care",
    description:
      "Delivered <strong class='font-semibold text-[#17213A]'>500+ seminars</strong> across <strong class='font-semibold text-[#17213A]'>22 countries</strong>. Founder of Enlightenment Education with <strong class='font-semibold text-[#17213A]'>50,000+ learners</strong> in <strong class='font-semibold text-[#17213A]'>108 countries</strong>.",
    accent: "#F28C28",
    lightBg: "bg-[#FFF4E8]",
    iconBg: "bg-[#F28C28]",
  },
];

export default function AboutUs({ onConsult }: AboutUsProps) {
  return (
    <SectionWrapper id="about-us" bg="bg-[#FAF8F3]">
      {/* ═══════════════════════════════════════════
          HERO — Split portrait + credentials
         ═══════════════════════════════════════════ */}
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Image */}
        <AnimatedReveal direction="left">
          <div className="relative overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_25px_60px_-15px_rgba(23,33,58,0.18)]">
            <div className="absolute left-3 top-3 z-10 h-10 w-10 rounded-tl-xl border-l-2 border-t-2 border-[#D4A853]/40" />
            <div className="absolute right-3 top-3 z-10 h-10 w-10 rounded-tr-xl border-r-2 border-t-2 border-[#D4A853]/40" />
            <div className="absolute bottom-3 left-3 z-10 h-10 w-10 rounded-bl-xl border-b-2 border-l-2 border-[#D4A853]/40" />
            <div className="absolute bottom-3 right-3 z-10 h-10 w-10 rounded-br-xl border-b-2 border-r-2 border-[#D4A853]/40" />
            <img
              src="/images/Dr. Shah5 - adjusted.png"
              alt="Dr. Jawahar J. Shah, M.D. (Hom.)"
              className="h-full w-full object-cover"
            />
          </div>
        </AnimatedReveal>

        {/* Credentials */}
        <div className="flex flex-col justify-center">
          <AnimatedReveal>
            <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A853]">
              <span className="h-px w-6 bg-[#D4A853]/50" />
              Five Generations of Healing
            </span>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-tight text-[#17213A] sm:text-5xl lg:text-[3.25rem]">
              Dr. Jawahar J. Shah
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={0.14}>
            <span className="mt-1.5 block text-lg font-medium tracking-wide text-[#D4A853]">
              M.D. (Hom.)
            </span>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-[#667085] sm:text-lg">
              A globally renowned clinician with five generations of family legacy in healing. Over 50 years of clinical experience serving humanity through homeopathic innovation and compassionate care.
            </p>
          </AnimatedReveal>

          {/* Stats grid */}
          <AnimatedReveal delay={0.28}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[#E5E7EB] bg-white px-3 py-4 text-center shadow-[0_8px_20px_-10px_rgba(23,33,58,0.08)]"
                >
                  <div className="font-serif text-2xl font-bold tracking-tight text-[#17213A]">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#667085]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DIVIDER
         ═══════════════════════════════════════════ */}
      <AnimatedReveal>
        <div className="relative my-20 flex items-center justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
          <div className="mx-4 h-2 w-2 rotate-45 border border-[#D4A853]/40" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
        </div>
      </AnimatedReveal>

      {/* ═══════════════════════════════════════════
          PULL QUOTE
         ═══════════════════════════════════════════ */}
      <AnimatedReveal>
        <div className="text-center">
          <p className="font-serif text-3xl italic leading-snug text-[#17213A] sm:text-4xl">
            &ldquo;Bye Bye Disease&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A853]">
            — WelcomeCure HealthTech —
          </p>
        </div>
      </AnimatedReveal>

      {/* ═══════════════════════════════════════════
          THREE VERTICALS
         ═══════════════════════════════════════════ */}
      <div className="mt-18 grid gap-5 md:grid-cols-3">
        {verticals.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_15px_40px_-20px_rgba(23,33,58,0.18)] transition-all duration-500 hover:shadow-[0_25px_50px_-15px_rgba(23,33,58,0.25)]"
            >
              {/* Colored top accent bar */}
              <div
                className="absolute left-0 top-0 h-1 w-0 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: v.accent }}
              />

              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: v.accent }}
              >
                <Icon size={20} />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#17213A]">
                {v.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed text-[#667085]"
                dangerouslySetInnerHTML={{ __html: v.description }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════
          WELCOMECURE FEATURE PANEL
         ═══════════════════════════════════════════ */}
      <AnimatedReveal className="mt-14">
        <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_25px_60px_-20px_rgba(23,33,58,0.18)]">
          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Subtle decorative corner */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D4A853]/5 blur-[60px]" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <Award size={20} className="text-[#D4A853]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A853]">
                  Global HealthTech Leader
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/welcome cure logo.svg"
                  alt="WelcomeCure"
                  className="h-14 w-14 flex-shrink-0 sm:h-16 sm:w-16"
                />
                <h3 className="font-serif text-2xl font-bold text-[#17213A] sm:text-3xl">
                  WelcomeCure HealthTech
                </h3>
              </div>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#667085]">
                Global leader in telemedicine and homeopathic consultation. Focused on holistic healing with health, happiness & harmony. Designed for scalable impact across individuals, corporates, NGOs, and communities.
              </p>
            </div>

            <div className="relative flex flex-col items-start gap-5 lg:items-end">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-[#E6F7EE] px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#22AD6B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#22AD6B]">
                  4.5M+ Patients
                </span>
              </div>
              <CTAButton variant="primary" onClick={onConsult}>
                Consult a Specialist
                <ExternalLink size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </CTAButton>
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </SectionWrapper>
  );
}

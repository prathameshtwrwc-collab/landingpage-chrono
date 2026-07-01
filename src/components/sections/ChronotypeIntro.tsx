import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedReveal from "../ui/AnimatedReveal";
import CTAButton from "../ui/CTAButton";
import { generatedImages } from "../../data/content";

interface ChronotypeIntroProps {
  onConsult: () => void;
}

export default function ChronotypeIntro({ onConsult }: ChronotypeIntroProps) {
  return (
    <SectionWrapper id="chronotypes" bg="bg-[#EAF3FB]" className="relative">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <AnimatedReveal>
            <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#34328E]">
              Your Body Clock
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-[#17213A] sm:text-4xl lg:text-[2.6rem]">
              Not Everyone's Clock Ticks the Same
            </h2>
            <p className="mt-3 font-serif text-xl italic text-[#5B8DEF]">Understanding Chronotypes</p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.16}>
            <p className="mt-5 max-w-lg leading-relaxed text-[#667085]">
              A chronotype is your body's natural inclination toward a particular sleep-wake pattern, shaped largely
              by genetics and internal biological rhythms. It influences when you naturally feel alert, when you feel
              sleepy, and when you perform at your best.
            </p>
            <div className="mt-6 space-y-3 border-l-2 border-[#F28C28]/40 pl-5">
              <p className="font-serif text-lg italic text-[#17213A]">
                The goal is not to fight your biology. The goal is to understand it.
              </p>
              <p className="font-serif text-lg italic text-[#17213A]">
                When you work with your body clock instead of against it, performance becomes more sustainable.
              </p>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.24} className="mt-8">
            <CTAButton variant="primary" icon={<ArrowRight size={16} />} onClick={onConsult}>
              Consult our sleep specialist now!
            </CTAButton>
          </AnimatedReveal>
        </div>

        <AnimatedReveal direction="right">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <motion.img
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              src={generatedImages.chronotypeClock}
              alt="24 hour body clock illustration"
              className="h-full w-full rounded-full object-cover shadow-[0_40px_90px_-30px_rgba(52,50,142,0.4)]"
            />
            <div className="absolute inset-8 rounded-full border border-dashed border-white/40" />
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  );
}

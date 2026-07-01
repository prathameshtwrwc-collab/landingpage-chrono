import { ArrowRight, BookOpen, Compass, Stethoscope } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedReveal from "../ui/AnimatedReveal";
import CTAButton from "../ui/CTAButton";
import { stockImages } from "../../data/content";

interface GuidanceProps {
  onConsult: () => void;
}

export default function Guidance({ onConsult }: GuidanceProps) {
  return (
    <SectionWrapper id="guidance" bg="bg-white">
      <div className="relative overflow-hidden rounded-[44px] bg-gradient-to-br from-[#EAF3FB] via-[#EEF6FF] to-[#FFF4E8] p-8 sm:p-14 lg:p-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#5B8DEF]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#F28C28]/15 blur-3xl" />

        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <AnimatedReveal>
              <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#34328E]">
                Need Additional Guidance?
              </span>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-[#17213A] sm:text-4xl">
                Better sleep starts with better understanding.
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={0.16}>
              <p className="mt-5 max-w-lg leading-relaxed text-[#667085]">
                If sleep difficulties are affecting your health, performance, relationships, or quality of life,
                professional support may help identify underlying causes and provide appropriate guidance.
              </p>
              <p className="mt-4 font-serif text-xl italic text-[#17213A]">
                The right support at the right time can make all the difference.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <CTAButton variant="primary" icon={<ArrowRight size={16} />} onClick={onConsult}>
                Consult a Sleep Specialist
              </CTAButton>
              <CTAButton variant="secondary" icon={<Stethoscope size={16} />}>
                Learn More About Sleep Disorders
              </CTAButton>
              <CTAButton variant="outline" icon={<Compass size={16} />}>
                Explore Sleep Improvement Strategies
              </CTAButton>
            </AnimatedReveal>
          </div>

          <AnimatedReveal direction="right">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[36px] border border-white shadow-[0_35px_80px_-30px_rgba(91,141,239,0.4)]">
              <img src={stockImages.doctorConsult} alt="Consult a sleep specialist" className="h-full w-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF6FF] text-[#5B8DEF]">
                  <BookOpen size={18} />
                </span>
                <p className="text-xs font-medium leading-snug text-[#17213A]">
                  Personalized, professional guidance for your unique sleep needs.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedReveal from "../ui/AnimatedReveal";
import WarningPanel from "../ui/WarningPanel";
import CTAButton from "../ui/CTAButton";
import { stockImages } from "../../data/content";

interface WarningSignsProps {
  onConsult: () => void;
}

export default function WarningSigns({ onConsult }: WarningSignsProps) {
  return (
    <SectionWrapper id="warning-signs" bg="bg-[#FFF4E8]" className="relative">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#F28C28]/10 blur-3xl" />
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <AnimatedReveal direction="left">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[36px] border border-white shadow-[0_30px_70px_-30px_rgba(242,140,40,0.35)]">
            <img src={stockImages.tiredEyes} alt="Warning signs of poor sleep" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17213A]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur">
              <p className="text-sm font-medium text-[#17213A]">
                "Sleep problems may begin at night, but their consequences are often felt throughout the day."
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <div>
          <AnimatedReveal>
            <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F28C28]">
              Warning Signs
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-[#17213A] sm:text-4xl">
              Warning Signs That Should Not Be Ignored
            </h2>
            <p className="mt-4 max-w-xl text-[#667085]">
              If you notice several of these signs regularly, it may be time to take a closer look at your sleep
              health.
            </p>
          </AnimatedReveal>
          <div className="mt-8">
            <WarningPanel />
          </div>
          <AnimatedReveal delay={0.2} className="mt-8">
            <CTAButton variant="primary" icon={<ArrowRight size={16} />} onClick={onConsult}>
              Consult a Sleep Specialist
            </CTAButton>
          </AnimatedReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}

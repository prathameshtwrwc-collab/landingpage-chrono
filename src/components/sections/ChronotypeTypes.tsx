import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import ChronotypeSlider from "../ui/ChronotypeSlider";
import AnimatedReveal from "../ui/AnimatedReveal";
import { Info } from "lucide-react";

export default function ChronotypeTypes() {
  return (
    <SectionWrapper id="chronotype-types" bg="bg-white">
      <SectionHeader
        eyebrow="Three Patterns, One Rhythm"
        title="The Three Common Chronotypes"
        description="While everyone's biology is unique, most people fall broadly into one of three natural rhythms."
      />

      <ChronotypeSlider />

      <AnimatedReveal className="mt-14">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-[28px] bg-[#17213A] p-7 text-white shadow-[0_25px_60px_-25px_rgba(23,33,58,0.5)] sm:p-8">
          <Info size={22} className="mt-0.5 flex-shrink-0 text-[#FFE4A3]" />
          <p className="text-sm leading-relaxed text-white/90 sm:text-[15px]">
            There is no best chronotype. Each chronotype has unique strengths, challenges, and opportunities for
            optimization.
          </p>
        </div>
      </AnimatedReveal>

      <AnimatedReveal className="mt-10 text-center">
        <p className="mx-auto max-w-2xl font-serif text-2xl italic text-[#17213A]">
          Different rhythms. Different strengths. Same potential.
        </p>
      </AnimatedReveal>
    </SectionWrapper>
  );
}

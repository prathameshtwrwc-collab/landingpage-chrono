import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import DisorderSlider from "../ui/DisorderSlider";
import AnimatedReveal from "../ui/AnimatedReveal";

export default function SleepDisorders() {
  return (
    <SectionWrapper id="disorders" bg="bg-white">
      <SectionHeader
        eyebrow="Know the Signs"
        title="Common Sleep Disorders"
        description="Sleep disorders come in many forms — some obvious, some silent. Recognizing them early is the first step toward restoring restful, restorative sleep."
      />
      <DisorderSlider />
      <AnimatedReveal className="mt-14 text-center">
        <p className="mx-auto max-w-2xl font-serif text-2xl italic text-[#17213A]">
          Not all sleep problems look the same. Recognizing the signs is the first step toward improvement.
        </p>
      </AnimatedReveal>
    </SectionWrapper>
  );
}

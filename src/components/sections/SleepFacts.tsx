import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import FactSlider from "../ui/FactSlider";
import AnimatedReveal from "../ui/AnimatedReveal";
import CTAButton from "../ui/CTAButton";
import { Share2 } from "lucide-react";

export default function SleepFacts() {
  return (
    <SectionWrapper id="facts" bg="bg-[#FFF4E8]">
      <SectionHeader
        eyebrow="Did You Know?"
        title="Sleep Facts Worth Sharing"
        description="A few reminders of just how important — and fascinating — sleep really is."
      />
      <FactSlider />
      <AnimatedReveal className="mt-14 text-center">
        <CTAButton variant="primary" icon={<Share2 size={16} />}>
          Share These Facts with your loved ones today!
        </CTAButton>
      </AnimatedReveal>
    </SectionWrapper>
  );
}

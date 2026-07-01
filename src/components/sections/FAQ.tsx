import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import FAQAccordion from "../ui/FAQAccordion";

export default function FAQ() {
  return (
    <SectionWrapper id="faq" bg="bg-[#FAF8F3]">
      <SectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" />
      <FAQAccordion />
    </SectionWrapper>
  );
}

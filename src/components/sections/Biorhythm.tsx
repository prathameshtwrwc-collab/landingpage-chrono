import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import ImageStorySection from "../ui/ImageStorySection";
import AnimatedReveal from "../ui/AnimatedReveal";
import RhythmTimeline from "../ui/RhythmTimeline";
import { biorhythmPoints, stockImages } from "../../data/content";

export default function Biorhythm() {
  return (
    <SectionWrapper id="biorhythm" bg="bg-[#FAF8F3]">
      <ImageStorySection
        image={stockImages.yogaCliff}
        imageAlt="Optimizing daily performance with your biorhythm"
        secondaryImage={stockImages.neckStretch}
        reverse
        eyebrow="Peak Performance"
        title="Use Your Unique Biorhythm to Optimize Performance"
      >
        <p className="text-[17px] font-normal leading-relaxed text-[#4A5568]">
          Once you understand your chronotype, you can begin structuring your day to work with your natural rhythm
          rather than against it — scheduling demanding tasks, exercise, meals and rest at the times your body is
          naturally primed for them.
        </p>
        <p className="font-serif text-2xl font-bold italic text-[#17213A]">
          Peak performance is not about doing more. It is about doing the right things at the right time.
        </p>
      </ImageStorySection>

      <div className="mt-22">
        <AnimatedReveal>
          <RhythmTimeline />
        </AnimatedReveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {biorhythmPoints.map((point, i) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group flex items-center justify-center gap-2.5 rounded-3xl border border-[#E5E7EB] bg-white px-6 py-7 text-center shadow-[0_15px_35px_-20px_rgba(23,33,58,0.22)] transition-all hover:border-[#5B8DEF]/40 hover:shadow-[0_25px_50px_-15px_rgba(91,141,239,0.3)]"
          >
            <Sparkles size={16} className="text-[#F28C28] transition-transform group-hover:rotate-45" />
            <span className="font-serif text-lg font-bold text-[#17213A]">{point}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

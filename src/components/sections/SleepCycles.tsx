import { motion } from "framer-motion";
import { BedDouble, Sparkles } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import AnimatedReveal from "../ui/AnimatedReveal";
import { nremStages, generatedImages } from "../../data/content";

export default function SleepCycles() {
  return (
    <SectionWrapper id="sleep-cycles" bg="bg-[#EEF6FF]">
      <SectionHeader
        eyebrow="The Science of Sleep"
        title="Understanding Sleep Cycles"
        description="Healthy sleep consists of repeating cycles that occur throughout the night.
Each cycle lasts approximately 90 to 120 minutes and includes different stages of sleep, each serving a unique purpose."
      />

      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <AnimatedReveal direction="left">
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              src={generatedImages.sleepCycle}
              alt="Sleep cycle orbit diagram"
              className="h-full w-full rounded-full object-cover shadow-[0_40px_80px_-30px_rgba(91,141,239,0.4)]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white/90 text-center shadow-lg backdrop-blur">
                <BedDouble size={22} className="text-[#5B8DEF]" />
                <span className="mt-1 text-xs font-semibold text-[#17213A]">4–6 cycles</span>
                <span className="text-[10px] text-[#667085]">per night</span>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* Cards */}
        <div className="space-y-6">
          <AnimatedReveal delay={0.05}>
            <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(23,33,58,0.2)]">
              <span className="mb-3 inline-block rounded-full bg-[#EAF3FB] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#34328E]">
                NREM Sleep
              </span>
              <h3 className="font-serif text-2xl text-[#17213A]">Rest, Repair and Recovery</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {nremStages.map((s) => (
                  <div key={s.stage} className="rounded-2xl bg-[#FAF8F3] p-4">
                    <p className="text-sm font-semibold text-[#17213A]">{s.stage}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#667085]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.15}>
            <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(23,33,58,0.2)]">
              <span className="mb-3 inline-block rounded-full bg-[#FFF4E8] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#F28C28]">
                REM Sleep
              </span>
              <h3 className="font-serif text-2xl text-[#17213A]">Learning, Memory and Emotional Processing</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                REM sleep accounts for approximately 20 to 25 percent of total sleep. During REM sleep: Most dreaming occurs , Emotional experiences are processed , Learning is consolidated ,Creativity is enhanced , The brain remains highly active while the body remains relaxed
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.25}>
            <div className="flex items-start gap-4 rounded-[32px] bg-[#17213A] p-8 text-white shadow-[0_25px_60px_-25px_rgba(23,33,58,0.5)]">
              <Sparkles className="mt-1 flex-shrink-0 text-[#FFE4A3]" size={22} />
              <p className="text-sm leading-relaxed text-white/90">
                <strong className="font-semibold text-white">NREM Sleep</strong> supports physical restoration.{" "}
                <strong className="font-semibold text-white">REM Sleep</strong> supports mental and emotional
                restoration. Both are essential for optimal health and performance.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </div>

      <AnimatedReveal className="mt-16 text-center">
        <p className="mx-auto max-w-2xl font-serif text-2xl italic text-[#17213A]">
          Your body heals in sleep. Your brain organizes your future in sleep.
        </p>
      </AnimatedReveal>
    </SectionWrapper>
  );
}

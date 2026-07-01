import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedReveal from "../ui/AnimatedReveal";
import { beyondBedroomBenefits, stockImages } from "../../data/content";

export default function BeyondBedroom() {
  return (
    <SectionWrapper id="beyond-bedroom" bg="bg-white">
      <div className="relative overflow-hidden rounded-[44px] shadow-[0_40px_90px_-35px_rgba(23,33,58,0.4)]">
        <img src={stockImages.friendsHug} alt="Sleep's impact beyond the bedroom" className="h-[560px] w-full object-cover sm:h-[620px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17213A]/85 via-[#17213A]/55 to-transparent" />

        <div className="relative flex h-full flex-col justify-center p-8 sm:p-14 lg:max-w-xl">
          <AnimatedReveal>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              Beyond the Bedroom
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <h2 className="font-serif text-3xl leading-[1.15] text-white sm:text-4xl">
              Sleep's Impact Beyond the Bedroom
            </h2>
            <p className="mt-4 text-white/80">
              The benefits of quality sleep extend far past how you feel in the morning — shaping nearly every part
              of your life.
            </p>
          </AnimatedReveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {beyondBedroomBenefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <CheckCircle2 size={18} className="flex-shrink-0 text-[#FFE4A3]" />
                <span className="text-sm font-medium text-white">{b}</span>
              </motion.div>
            ))}
          </div>

          <AnimatedReveal delay={0.3} className="mt-8">
            <p className="font-serif text-2xl italic text-white">Better nights create better days.</p>
          </AnimatedReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}

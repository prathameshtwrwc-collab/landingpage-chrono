import { motion } from "framer-motion";
import { Brain, HeartPulse, Zap, ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import ImageStorySection from "../ui/ImageStorySection";
import AnimatedReveal from "../ui/AnimatedReveal";
import StatStrip from "../ui/StatStrip";
import CTAButton from "../ui/CTAButton";
import { whySleepStats, whySleepCards, stockImages } from "../../data/content";

const icons = [Brain, HeartPulse, Zap];

export default function WhySleepMatters() {
  return (
    <SectionWrapper id="why-sleep" bg="bg-[#FAF8F3]">
      <ImageStorySection
        image={stockImages.sleepingWoman}
        imageAlt="Peaceful restorative sleep"
        secondaryImage={stockImages.stretchMorning}
        eyebrow="Why Sleep Matters"
        title="Good sleep does not just change your nights."
      >
        <p className="text-[17px] font-normal leading-relaxed text-[#4A5568]">
          Sleep is a natural state of rest that allows the body and mind to repair, recover, and prepare for the demands of the next day.
          Far from being a passive process, sleep is an active biological function that supports virtually every system of the body.
        </p>
        <p className="font-serif text-2xl font-bold italic text-[#17213A]">It changes your life.</p>
        <div className="pt-2">
          <CTAButton variant="secondary" icon={<ArrowRight size={18} />} className="font-semibold text-base">
            Explore Sleep Cycles
          </CTAButton>
        </div>
      </ImageStorySection>

      {/* Upgraded Image-rich Bento cards */}
      <div className="mt-28 grid gap-8 md:grid-cols-3">
        {whySleepCards.map((card, i) => {
          const Icon = icons[i];
          return (
            <AnimatedReveal key={card.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-[#E5E7EB] bg-white shadow-[0_25px_60px_-28px_rgba(23,33,58,0.22)] transition-shadow hover:shadow-[0_35px_80px_-24px_rgba(23,33,58,0.32)]"
              >
                {/* Image Header inside each card */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-[#5B8DEF] shadow-md backdrop-blur">
                      <Icon size={22} />
                    </div>
                    <span className="font-serif text-2xl font-bold text-white drop-shadow-sm">{card.title}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <ul className="space-y-3.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15.5px] font-medium leading-relaxed text-[#344054]">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#F28C28]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedReveal>
          );
        })}
      </div>

      {/* Stats strip */}
      <div className="mt-18">
        <StatStrip stats={whySleepStats} />
      </div>
    </SectionWrapper>
  );
}

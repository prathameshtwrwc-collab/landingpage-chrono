import { motion } from "framer-motion";
import { Brain, Heart, Activity, Briefcase, Users } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import AnimatedReveal from "../ui/AnimatedReveal";
import { qualityOfLifeCards, stockImages } from "../../data/content";

const icons = [Brain, Heart, Activity, Briefcase, Users];

export default function QualityOfLife() {
  return (
    <SectionWrapper id="quality-of-life" bg="bg-[#FAF8F3]">
      <SectionHeader
        eyebrow="The Ripple Effect"
        title="How Poor Sleep Affects Quality of Life"
        description="The effects of poor sleep rarely stay contained to the night. They ripple outward — touching how you think, feel, work and connect with others."
      />

      <div className="relative">
        <AnimatedReveal>
          <div className="group relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[40px] border border-[#E5E7EB] shadow-[0_35px_85px_-28px_rgba(23,33,58,0.35)]">
            <img
              src={stockImages.tiredDesk}
              alt="Impact of poor sleep on daily life"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17213A]/85 via-[#17213A]/25 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-12">
              <p className="max-w-xl font-serif text-2xl font-bold leading-snug text-white drop-shadow sm:text-3xl lg:text-[2.2rem]">
                Poor sleep affects every conversation, every decision, every relationship, and every opportunity.
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {qualityOfLifeCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group flex flex-col justify-between rounded-[32px] border border-[#E5E7EB] bg-white p-7 shadow-[0_20px_50px_-25px_rgba(23,33,58,0.22)] transition-shadow hover:shadow-[0_30px_70px_-20px_rgba(23,33,58,0.32)]"
              >
                <div>
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#EEF6FF] text-[#5B8DEF] transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#17213A]">{card.title}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14.5px] font-medium leading-relaxed text-[#4A5568]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F28C28]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

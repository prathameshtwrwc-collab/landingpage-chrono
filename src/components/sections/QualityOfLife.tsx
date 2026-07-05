import { motion } from "framer-motion";
import { BrainCircuit, HeartHandshake, ShieldCheck, ChartNoAxesCombined, UsersRound } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";
import AnimatedReveal from "../ui/AnimatedReveal";
import { qualityOfLifeCards, stockImages } from "../../data/content";

const icons = [BrainCircuit, HeartHandshake, ShieldCheck, ChartNoAxesCombined, UsersRound];

const cardAccents = [
  { bg: "from-[#EEF6FF] to-[#DCE8FA]", iconBg: "bg-[#5B8DEF]", border: "border-l-[#5B8DEF]" },
  { bg: "from-[#FFF4E8] to-[#FFEBD0]", iconBg: "bg-[#F28C28]", border: "border-l-[#F28C28]" },
  { bg: "from-[#E8FFF6] to-[#D0F5E8]", iconBg: "bg-[#22AD6B]", border: "border-l-[#22AD6B]" },
  { bg: "from-[#F3EEFF] to-[#E8DFFF]", iconBg: "bg-[#7C5CFC]", border: "border-l-[#7C5CFC]" },
  { bg: "from-[#FFF0F5] to-[#FFE0EB]", iconBg: "bg-[#E8497A]", border: "border-l-[#E8497A]" },
];

const bulletAccents = ["bg-[#5B8DEF]", "bg-[#F28C28]", "bg-[#22AD6B]", "bg-[#7C5CFC]", "bg-[#E8497A]"];

export default function QualityOfLife() {
  return (
    <SectionWrapper id="quality-of-life" bg="bg-[#FAF8F3]">
      <SectionHeader
        eyebrow="The Ripple Effect"
        title="How Poor Sleep Affects Quality of Life"
        description="Sleep affects far more than just how rested you feel. Poor sleep affects every conversation, every decision, every relationship, and every opportunity."
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

        {/* Mobile / Tablet: 1-2 column grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:hidden">
          {qualityOfLifeCards.map((card, i) => {
            const Icon = icons[i];
            const accent = cardAccents[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.15 } }}
                className="group flex flex-col rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_15px_40px_-20px_rgba(23,33,58,0.18)] transition-shadow duration-200 hover:shadow-[0_25px_60px_-20px_rgba(23,33,58,0.3)]"
              >
                <div className={`flex items-center gap-4 rounded-t-[28px] bg-gradient-to-br ${accent.bg} px-6 py-5`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${accent.iconBg}`}>
                    <Icon size={20} />
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#17213A]">{card.title}</h3>
                </div>
                <ul className="space-y-2.5 px-6 py-5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] font-medium leading-relaxed text-[#4A5568]">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${bulletAccents[i]}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: 3 + 2 staggered layout */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-12">
          {/* Row 1: first 3 cards */}
          {qualityOfLifeCards.slice(0, 3).map((card, i) => {
            const Icon = icons[i];
            const accent = cardAccents[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.15 } }}
                className="group col-span-4 flex flex-col rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_20px_50px_-25px_rgba(23,33,58,0.22)] transition-shadow duration-200 hover:shadow-[0_30px_70px_-20px_rgba(23,33,58,0.32)]"
              >
                <div className={`flex items-center gap-4 rounded-t-[32px] bg-gradient-to-br ${accent.bg} px-7 py-6`}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm ${accent.iconBg}`}>
                    <Icon size={22} />
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#17213A]">{card.title}</h3>
                </div>
                <ul className="space-y-3 px-7 py-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-[#4A5568]">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${bulletAccents[i]}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Row 2: last 2 cards — centered */}
          <div className="col-span-12 flex justify-center gap-6">
            {qualityOfLifeCards.slice(3).map((card, i) => {
              const idx = i + 3;
              const Icon = icons[idx];
              const accent = cardAccents[idx];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.15 } }}
                  className="w-[calc(50%-12px)] max-w-[440px] flex flex-col rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_20px_50px_-25px_rgba(23,33,58,0.22)] transition-shadow duration-200 hover:shadow-[0_30px_70px_-20px_rgba(23,33,58,0.32)]"
                >
                  <div className={`flex items-center gap-4 rounded-t-[32px] bg-gradient-to-br ${accent.bg} px-7 py-6`}>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm ${accent.iconBg}`}>
                      <Icon size={22} />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#17213A]">{card.title}</h3>
                  </div>
                  <ul className="space-y-3 px-7 py-6">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed text-[#4A5568]">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${bulletAccents[idx]}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

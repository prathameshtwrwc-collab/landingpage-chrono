import { motion } from "framer-motion";
import AnimatedReveal from "./AnimatedReveal";

interface Stat {
  value: string;
  label: string;
}

export default function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-[36px] border border-[#E5E7EB] bg-white/90 p-8 shadow-[0_25px_65px_-30px_rgba(23,33,58,0.25)] backdrop-blur-md sm:grid-cols-4 sm:gap-8 sm:p-10">
      {stats.map((s, i) => (
        <AnimatedReveal key={s.label} delay={i * 0.08}>
          <motion.div
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center rounded-2xl p-3 text-center sm:items-start sm:text-left transition hover:bg-[#EEF6FF]/60"
          >
            <span className="font-serif text-3xl font-extrabold text-[#17213A] sm:text-4xl lg:text-[2.6rem] bg-gradient-to-br from-[#17213A] to-[#34328E] bg-clip-text text-transparent">
              {s.value}
            </span>
            <span className="mt-2.5 text-sm font-semibold leading-snug text-[#4A5568] sm:text-[15px]">{s.label}</span>
          </motion.div>
        </AnimatedReveal>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";
import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

const points = [
  { time: "6 AM", label: "Wake & Light Exposure", icon: Sunrise },
  { time: "10 AM", label: "Peak Alertness", icon: Sun },
  { time: "3 PM", label: "Physical Performance Peak", icon: Sun },
  { time: "7 PM", label: "Wind Down Begins", icon: Sunset },
  { time: "11 PM", label: "Melatonin Rise & Sleep", icon: Moon },
];

export default function RhythmTimeline() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#E5E7EB] bg-gradient-to-r from-[#FFF4E8] via-[#EEF6FF] to-[#EAF3FB] p-8 sm:p-12">
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-[#F28C28] via-[#5B8DEF] to-[#34328E] opacity-40 sm:top-7" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.time}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white text-[#17213A] shadow-[0_10px_25px_-10px_rgba(23,33,58,0.4)]">
                  <Icon size={22} className="text-[#F28C28]" />
                </div>
                <span className="mt-4 font-serif text-lg text-[#17213A]">{p.time}</span>
                <span className="mt-1 max-w-[130px] text-xs leading-snug text-[#667085]">{p.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

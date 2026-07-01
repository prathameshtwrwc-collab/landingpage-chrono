import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { warningSigns } from "../../data/content";

export default function WarningPanel() {
  return (
    <div className="rounded-[36px] border border-[#F28C28]/20 bg-white/90 p-8 shadow-[0_25px_60px_-30px_rgba(242,140,40,0.35)] backdrop-blur sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {warningSigns.map((sign, i) => (
          <motion.div
            key={sign}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-3 rounded-2xl border border-[#F3E8D9] bg-[#FFF4E8]/50 p-4"
          >
            <AlertCircle size={18} className="mt-0.5 flex-shrink-0 text-[#F28C28]" />
            <span className="text-sm leading-relaxed text-[#34328E]">{sign}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

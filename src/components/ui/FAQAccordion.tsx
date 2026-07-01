import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../../data/content";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-[#E5E7EB] overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_20px_60px_-35px_rgba(23,33,58,0.3)]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="px-6 sm:px-9">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-lg text-[#17213A] sm:text-xl">{f.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[#5B8DEF]"
              >
                <Plus size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pr-10 text-sm leading-relaxed text-[#667085] sm:text-[15px]">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

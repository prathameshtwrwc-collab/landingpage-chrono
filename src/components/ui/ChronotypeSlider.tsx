import { motion } from "framer-motion";
import { CheckCircle2, UserCheck } from "lucide-react";
import { chronotypes } from "../../data/content";

export default function ChronotypeSlider() {
  return (
    <div className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-8 pt-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-9 lg:overflow-visible lg:px-0">
      {chronotypes.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -12 }}
          className="group w-[320px] flex-shrink-0 snap-center overflow-hidden rounded-[38px] border border-[#E5E7EB] bg-white shadow-[0_25px_65px_-28px_rgba(23,33,58,0.25)] transition-all hover:shadow-[0_35px_85px_-22px_rgba(23,33,58,0.35)] sm:w-[360px] lg:w-auto"
        >
          {/* High-res human photo showcase */}
          <div className="relative h-80 w-full overflow-hidden sm:h-88">
            <img
              src={c.image}
              alt={`${c.name} human chronotype`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17213A]/90 via-[#17213A]/25 to-transparent" />
            
            {/* Top human badge indicator */}
            <div className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#17213A] shadow-md backdrop-blur">
              <UserCheck size={14} className="text-[#5B8DEF]" />
              <span>Human Rhythm</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFE4A3] drop-shadow">
                  {c.subtitle}
                </p>
                <h3 className="mt-1 font-serif text-3xl font-bold text-white drop-shadow-md sm:text-4xl">
                  {c.name}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-8">
            <ul className="space-y-4">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-3.5 text-[15.5px] font-medium leading-relaxed text-[#344054]">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-[#5B8DEF]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

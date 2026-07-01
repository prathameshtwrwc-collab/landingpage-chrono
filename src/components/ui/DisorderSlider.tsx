import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { disorders } from "../../data/content";

export default function DisorderSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-7 overflow-x-auto pb-8 pt-4"
        style={{ scrollbarWidth: "none" }}
      >
        {disorders.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="group relative h-[450px] w-[320px] flex-shrink-0 snap-start overflow-hidden rounded-[36px] border border-[#E5E7EB] shadow-[0_25px_60px_-25px_rgba(23,33,58,0.28)] sm:w-[360px] transition-shadow hover:shadow-[0_35px_80px_-20px_rgba(23,33,58,0.38)]"
          >
            <img
              src={d.image}
              alt={d.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17213A]/95 via-[#17213A]/40 to-[#17213A]/10" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 font-serif text-base font-bold text-white backdrop-blur-md border border-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white sm:text-[1.7rem]">{d.title}</h3>
                <p className="mt-3 text-[15.5px] font-medium leading-relaxed text-white/90">{d.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-3.5">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous disorder slide"
          className="flex h-13 w-13 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#17213A] shadow-md transition hover:bg-[#EEF6FF] hover:scale-108 active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Next disorder slide"
          className="flex h-13 w-13 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#17213A] shadow-md transition hover:bg-[#EEF6FF] hover:scale-108 active:scale-95"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

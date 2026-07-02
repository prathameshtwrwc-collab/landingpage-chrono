import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, UserCheck } from "lucide-react";
import { chronotypes } from "../../data/content";

export default function ChronotypeSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (!cards[index]) return;
    const card = cards[index] as HTMLElement;
    const offset = card.offsetLeft - scrollRef.current.offsetLeft;
    scrollRef.current.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % chronotypes.length;
        scrollTo(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [isPaused, scrollTo]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cards = scrollRef.current.children;
    let closest = 0;
    let minDist = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const dist = Math.abs(card.offsetLeft - scrollRef.current.offsetLeft - scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    }
    setActiveIdx(closest);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Mobile dot indicators */}
      <div className="mb-5 flex items-center justify-center gap-2 lg:hidden">
        {chronotypes.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveIdx(i); scrollTo(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 4000); }}
            aria-label={`Slide ${i + 1}`}
            className={`h-[6px] rounded-full transition-all duration-400 ${
              i === activeIdx ? "w-8 bg-[#5B8DEF]" : "w-[6px] bg-[#CBD5E1] hover:bg-[#94A3B8]"
            }`}
          />
        ))}
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-8 pt-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-9 lg:overflow-visible lg:px-0"
      >
        {chronotypes.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -12 }}
            className="group w-[320px] flex-shrink-0 snap-center overflow-hidden rounded-[38px] border border-[#E5E7EB] bg-white shadow-[0_25px_65px_-28px_rgba(23,33,58,0.25)] transition-shadow duration-200 hover:shadow-[0_35px_85px_-22px_rgba(23,33,58,0.35)] sm:w-[360px] lg:w-auto"
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
    </div>
  );
}

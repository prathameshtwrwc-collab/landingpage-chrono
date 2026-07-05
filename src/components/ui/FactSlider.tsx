import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Share2, Moon, Brain, Baby, TrendingDown } from "lucide-react";
import { sleepFacts, generatedImages } from "../../data/content";

const icons = [Moon, Brain, Baby, TrendingDown];

export default function FactSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => scrollerRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

  const shareFact = async (title: string) => {
    const text = `Did you know? ${title}`;
    if (navigator.share) {
      try { await navigator.share({ title: "Sleep Facts", text }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(text); } catch {}
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-7 overflow-x-auto pb-8 pt-4"
        style={{ scrollbarWidth: "none" }}
      >
        {sleepFacts.map((f, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.015 }}
              className="group relative flex h-[420px] w-[320px] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[36px] border border-[#E5E7EB] p-7 shadow-[0_25px_60px_-25px_rgba(23,33,58,0.22)] sm:w-[400px] sm:p-8 transition-all hover:shadow-[0_35px_80px_-20px_rgba(23,33,58,0.32)]"
              style={{
                backgroundImage: `linear-gradient(160deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85)), url(${generatedImages.factsPattern})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#EEF6FF] text-[#5B8DEF] shadow-sm transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <span className="font-serif text-4xl font-extrabold text-[#DCEBFF]">0{i + 1}</span>
              </div>
              <div className="flex-1 min-h-0">
                <h3 className="font-serif text-lg font-bold leading-snug text-[#17213A] sm:text-xl">{f.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#4A5568]">{f.desc}</p>
              </div>
              <button onClick={() => shareFact(f.title)} className="flex w-fit items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#17213A] shadow-sm transition hover:bg-[#EEF6FF] hover:border-[#5B8DEF]/40 group-hover:translate-x-1">
                <Share2 size={15} /> Share Fact
              </button>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center gap-3.5">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous sleep fact slide"
          className="flex h-13 w-13 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#17213A] shadow-md transition hover:bg-[#EEF6FF] hover:scale-108 active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Next sleep fact slide"
          className="flex h-13 w-13 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#17213A] shadow-md transition hover:bg-[#EEF6FF] hover:scale-108 active:scale-95"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

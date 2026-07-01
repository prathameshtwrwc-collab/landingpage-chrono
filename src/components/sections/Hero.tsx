import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Moon, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import CTAButton from "../ui/CTAButton";
import { heroSlides } from "../../data/content";

interface HeroProps {
  onConsult: () => void;
}

export default function Hero({ onConsult }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrentSlide((p) => (p + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 1.04 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.98 }),
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF8F3] pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-0 h-[40rem] w-[40rem] rounded-full bg-[#EEF6FF]/80 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#FFE4A3]/25 blur-[100px]" />
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-[#5B8DEF]/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Mobile: Image first, then text */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          {/* IMAGE EDITORIAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-1 w-full lg:order-2 lg:w-[52%] xl:w-[50%]"
          >
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Soft organic backdrop shape behind image */}
              <div className="absolute -inset-3 -z-10 rounded-[44px] bg-gradient-to-br from-[#EEF6FF]/60 via-[#EAF3FB]/40 to-[#FFF4E8]/50 blur-sm sm:-inset-4 sm:rounded-[56px]" />

              {/* Main image viewport — soft editorial frame, no hard border */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36px] shadow-[0_25px_70px_-20px_rgba(91,141,239,0.28)] sm:rounded-[44px] sm:shadow-[0_35px_90px_-25px_rgba(91,141,239,0.32)] lg:aspect-[3.8/5]">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].tagline}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17213A]/60 via-transparent to-[#17213A]/5" />

                {/* Slide info — minimal, floating at bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-7 sm:left-7 sm:right-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`info-${currentSlide}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-fit rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:rounded-3xl sm:px-6 sm:py-5"
                    >
                      <span className="inline-block rounded-full bg-[#EEF6FF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5B8DEF]">
                        {heroSlides[currentSlide].tagline}
                      </span>
                      <p className="mt-1.5 text-sm font-semibold text-[#17213A] sm:text-[15px]">
                        {heroSlides[currentSlide].subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation arrows — top-right, minimal */}
                <div className="absolute top-5 right-5 z-10 flex items-center gap-2 sm:top-7 sm:right-7">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#17213A] shadow-sm backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 sm:h-10 sm:w-10"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-[#17213A] shadow-sm backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 sm:h-10 sm:w-10"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Dot indicators — centered below image */}
              <div className="mt-5 flex items-center justify-center gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-[6px] rounded-full transition-all duration-400 ${
                      i === currentSlide
                        ? "w-8 bg-[#5B8DEF]"
                        : "w-[6px] bg-[#CBD5E1] hover:bg-[#94A3B8]"
                    }`}
                  />
                ))}
              </div>

              {/* Floating badge 1 — Deep Sleep */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-2 top-10 z-20 hidden items-center gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-[0_10px_30px_-10px_rgba(23,33,58,0.25)] backdrop-blur sm:flex lg:-left-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF6FF] text-[#5B8DEF]">
                  <Moon size={16} />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-[#17213A]">Deep Sleep</p>
                  <p className="text-xs font-medium text-[#667085]">Stage 3 · Restorative</p>
                </div>
              </motion.div>

              {/* Floating badge 2 — Body Clock */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 bottom-20 z-20 hidden items-center gap-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-[0_10px_30px_-10px_rgba(23,33,58,0.25)] backdrop-blur sm:flex lg:-right-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4E8] text-[#F28C28]">
                  <Clock size={16} />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-[#17213A]">Your Body Clock</p>
                  <p className="text-xs font-medium text-[#667085]">Chronotype aligned</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 mt-10 w-full lg:order-1 lg:mt-0 lg:w-[48%] xl:w-[50%]"
          >
            <h1 className="font-serif text-[2.8rem] font-bold leading-[1.06] tracking-tight text-[#17213A] sm:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.7rem]">
              Sleep is the foundation.
              <br />
              <span className="bg-gradient-to-r from-[#5B8DEF] to-[#34328E] bg-clip-text text-transparent">
                Chronotype
              </span>{" "}
              is the blueprint.
            </h1>

            <p className="mt-5 max-w-lg text-xl font-semibold tracking-tight text-[#34328E] sm:mt-6 sm:text-[1.35rem]">
              Better Sleep. Better Energy. Better Life.
            </p>

            <p className="mt-4 max-w-lg text-[17px] font-normal leading-[1.7] text-[#4A5568] sm:mt-5">
              Sleep supports physical health, emotional wellbeing, mental performance, recovery and longevity.
              It is the quiet engine behind every good day — restoring the body, organizing the mind, and preparing
              you for whatever comes next.
            </p>

            <div className="mt-6 max-w-lg space-y-2 border-l-[3px] border-[#F28C28] bg-[#FFF4E8]/40 py-2.5 pl-5 pr-4 rounded-r-2xl sm:mt-7 sm:pl-6">
              <p className="font-serif text-lg font-medium italic text-[#17213A]">
                Your days are only as powerful as your nights.
              </p>
              <p className="font-serif text-lg font-medium italic text-[#17213A]">
                Sleep is not lost time. It is an investment in every hour that follows.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <CTAButton
                variant="primary"
                icon={<ArrowRight size={18} />}
                className="!px-7 !py-3.5 text-[15px] font-semibold sm:!px-8 sm:!py-4 sm:text-base"
              >
                Learn About Sleep
              </CTAButton>
              <CTAButton
                variant="secondary"
                className="!px-7 !py-3.5 text-[15px] font-semibold sm:!px-8 sm:!py-4 sm:text-base"
                onClick={onConsult}
              >
                Consult a Sleep Specialist
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

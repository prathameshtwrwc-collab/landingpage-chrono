import { ReactNode } from "react";
import { motion } from "framer-motion";
import AnimatedReveal from "./AnimatedReveal";
import { cn } from "../../utils/cn";

interface ImageStorySectionProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  imageBadge?: ReactNode;
  secondaryImage?: string;
}

export default function ImageStorySection({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse = false,
  imageBadge,
  secondaryImage,
}: ImageStorySectionProps) {
  return (
    <div className={cn("grid items-center gap-12 lg:grid-cols-2 lg:gap-16", reverse && "lg:[direction:rtl]")}>
      <AnimatedReveal direction={reverse ? "right" : "left"} className="relative lg:[direction:ltr]">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[36px] border border-[#E5E7EB] shadow-[0_30px_70px_-30px_rgba(23,33,58,0.3)]">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
          {secondaryImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="absolute -bottom-8 -right-6 hidden aspect-square w-40 overflow-hidden rounded-[24px] border-4 border-white shadow-[0_20px_40px_-15px_rgba(23,33,58,0.4)] sm:block md:w-48"
            >
              <img src={secondaryImage} alt="" className="h-full w-full object-cover" />
            </motion.div>
          )}
          {imageBadge}
        </div>
      </AnimatedReveal>
      <div className="lg:[direction:ltr]">
        {eyebrow && (
          <AnimatedReveal>
            <span className="mb-4 inline-block rounded-full bg-[#FFF4E8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F28C28]">
              {eyebrow}
            </span>
          </AnimatedReveal>
        )}
        <AnimatedReveal delay={0.1}>
          <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-[#17213A] sm:text-4xl lg:text-[2.6rem]">
            {title}
          </h2>
        </AnimatedReveal>
        <AnimatedReveal delay={0.18}>
          <div className="mt-6 space-y-5 text-[#667085]">{children}</div>
        </AnimatedReveal>
      </div>
    </div>
  );
}

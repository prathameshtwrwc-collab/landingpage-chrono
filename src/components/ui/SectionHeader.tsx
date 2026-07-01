import { ReactNode } from "react";
import AnimatedReveal from "./AnimatedReveal";
import { cn } from "../../utils/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-16",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left",
        className
      )}
    >
      {eyebrow && (
        <AnimatedReveal>
          <span className="mb-4 inline-block rounded-full bg-[#EEF6FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5B8DEF]">
            {eyebrow}
          </span>
        </AnimatedReveal>
      )}
      <AnimatedReveal delay={0.08}>
        <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-[#17213A] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </AnimatedReveal>
      {description && (
        <AnimatedReveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-[#667085] sm:text-lg">{description}</p>
        </AnimatedReveal>
      )}
    </div>
  );
}

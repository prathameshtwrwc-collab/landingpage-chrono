import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: string;
}

export default function SectionWrapper({ id, children, className, bg = "bg-white" }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative w-full overflow-hidden py-24 md:py-32 lg:py-36", bg, className)}>
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

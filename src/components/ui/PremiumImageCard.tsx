import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface PremiumImageCardProps {
  image: string;
  title: string;
  description?: ReactNode;
  className?: string;
  imageHeight?: string;
  overlay?: boolean;
  children?: ReactNode;
}

export default function PremiumImageCard({
  image,
  title,
  description,
  className,
  imageHeight = "h-64",
  overlay = true,
  children,
}: PremiumImageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group overflow-hidden rounded-[36px] border border-[#E5E7EB] bg-white shadow-[0_25px_60px_-25px_rgba(23,33,58,0.22)] transition-shadow hover:shadow-[0_35px_80px_-20px_rgba(23,33,58,0.35)]",
        className
      )}
    >
      <div className={cn("relative w-full overflow-hidden", imageHeight)}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {overlay && <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />}
      </div>
      <div className="p-8 sm:p-9">
        <h3 className="font-serif text-2xl font-bold text-[#17213A] sm:text-[1.7rem]">{title}</h3>
        {description && <div className="mt-3.5 text-base font-medium leading-relaxed text-[#4A5568]">{description}</div>}
        {children}
      </div>
    </motion.div>
  );
}

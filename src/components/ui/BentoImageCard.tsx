import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface BentoImageCardProps {
  image: string;
  title: string;
  description: string;
  icon?: ReactNode;
  large?: boolean;
  className?: string;
}

export default function BentoImageCard({ image, title, description, icon, large, className }: BentoImageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[36px] border border-[#E5E7EB] shadow-[0_25px_60px_-25px_rgba(23,33,58,0.25)] transition-all hover:shadow-[0_35px_80px_-20px_rgba(23,33,58,0.38)]",
        large ? "min-h-[460px]" : "min-h-[300px]",
        className
      )}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17213A]/90 via-[#17213A]/35 to-transparent transition-opacity group-hover:opacity-95" />
      <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
        {icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="mb-4.5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md border border-white/25 shadow-sm"
          >
            {icon}
          </motion.div>
        )}
        <h3 className={cn("font-serif font-bold text-white drop-shadow-sm", large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")}>{title}</h3>
        <p className={cn("mt-3.5 font-medium leading-relaxed text-white/90 drop-shadow-sm", large ? "max-w-lg text-lg" : "text-[15.5px]")}>{description}</p>
      </div>
    </motion.div>
  );
}

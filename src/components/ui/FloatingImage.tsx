import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  duration?: number;
  range?: number;
}

export default function FloatingImage({ src, alt, className, duration = 6, range = 14 }: FloatingImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      animate={{ y: [0, -range, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={cn("rounded-[28px] object-cover shadow-[0_30px_60px_-25px_rgba(23,33,58,0.35)]", className)}
    />
  );
}

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export default function AnimatedReveal({
  children,
  delay = 0,
  y = 28,
  className,
  direction = "up",
  duration = 0.9,
}: AnimatedRevealProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y }
      : direction === "left"
      ? { opacity: 0, x: -40 }
      : direction === "right"
      ? { opacity: 0, x: 40 }
      : { opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

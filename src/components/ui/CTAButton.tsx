import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function CTAButton({ children, variant = "primary", icon, className, href, onClick }: CTAButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm sm:text-[15px] font-semibold transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0";

  const styles = {
    primary: "bg-[#17213A] text-white shadow-[0_12px_30px_-10px_rgba(23,33,58,0.5)] hover:bg-[#232f4d] hover:shadow-[0_16px_36px_-8px_rgba(23,33,58,0.55)]",
    secondary: "bg-white text-[#17213A] border border-[#E5E7EB] shadow-[0_8px_20px_-10px_rgba(23,33,58,0.15)] hover:border-[#5B8DEF]/40 hover:bg-[#EEF6FF]/60",
    outline: "bg-transparent text-[#17213A] border border-[#17213A]/15 hover:bg-[#17213A]/5",
  };

  const Comp = href ? "a" : "button";

  return (
    <Comp href={href} onClick={onClick} className={cn(base, styles[variant], className)}>
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </Comp>
  );
}

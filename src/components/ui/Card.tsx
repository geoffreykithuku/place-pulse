import { type ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "elevated" | "outlined" | "glass";
  onClick?: () => void;
}

const Card = ({
  children,
  className,
  hover = false,
  padding = "md",
  variant = "default",
  onClick,
}: CardProps) => {
  const baseClasses = "rounded-2xl transition-all duration-300";

  const variants = {
    default: "bg-white border border-neutral-200 shadow-sm",
    elevated: "bg-white shadow-lg border border-neutral-100",
    outlined: "bg-white border-2 border-neutral-300",
    glass: "bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm",
  };

  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const hoverClasses = hover
    ? "hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <div
      className={clsx(
        baseClasses,
        variants[variant],
        paddings[padding],
        hoverClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

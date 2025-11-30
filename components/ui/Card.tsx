import { type ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hover = false,
  padding = "md",
  onClick,
}: CardProps) {
  const baseClasses = "rounded-lg bg-white border border-neutral-200 transition-all duration-200";

  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "hover:shadow-lg hover:border-neutral-300 cursor-pointer"
    : "shadow-sm";

  return (
    <div
      className={clsx(baseClasses, paddings[padding], hoverClasses, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

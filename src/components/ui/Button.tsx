import { forwardRef, type ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "gradient"
    | "safari"
    | "maasai"
    | "glass";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
  modern?: boolean;
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      modern = false,
      glow = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden",
      modern && "btn-modern transform hover:scale-105 active:scale-95",
      glow && "shadow-glow hover:shadow-glow-lg"
    );

    const variants = {
      primary:
        "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-soft hover:shadow-medium",
      secondary:
        "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 shadow-soft hover:shadow-medium",
      outline:
        "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 focus:ring-primary-500 backdrop-blur-sm",
      ghost:
        "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500 transition-colors duration-200",
      danger:
        "bg-gradient-to-r from-kenyan-600 to-kenyan-700 text-white hover:from-kenyan-700 hover:to-kenyan-800 focus:ring-kenyan-500 shadow-soft hover:shadow-medium",
      gradient:
        "bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-600 text-white hover:from-primary-700 hover:via-secondary-600 hover:to-accent-700 focus:ring-primary-500 shadow-soft hover:shadow-medium",
      safari:
        "bg-gradient-to-r from-safari-600 to-safari-700 text-white hover:from-safari-700 hover:to-safari-800 focus:ring-safari-500 shadow-soft hover:shadow-medium",
      maasai:
        "bg-gradient-to-r from-maasai-600 to-maasai-700 text-white hover:from-maasai-700 hover:to-maasai-800 focus:ring-maasai-500 shadow-soft hover:shadow-medium",
      glass:
        "glass text-neutral-900 hover:bg-white/90 focus:ring-primary-500 shadow-soft hover:shadow-medium border-white/30",
    };

    const sizes = {
      xs: "px-2.5 py-1.5 text-xs font-medium",
      sm: "px-3 py-2 text-sm font-medium",
      md: "px-4 py-2.5 text-base font-medium",
      lg: "px-6 py-3 text-lg font-semibold",
      xl: "px-8 py-4 text-xl font-semibold",
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseClasses,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {children}

        {/* Shimmer effect for modern buttons */}
        {modern && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

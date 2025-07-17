import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";   


export const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const base = "inline-flex items-center justify-center font-medium rounded-xl focus:outline-none transition-colors duration-200";

  const variants = {
    default: "bg-primary-button text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-color)]",
    outline: "border border-[var(--primary-border-color)] text-[var(--primary-text-color)] bg-transparent hover:bg-[var(--primary-border-hover-bg-color)] hover:text-[var(--primary-border-hover-bg-text-color)]",
    ghost: "text-[var(--secondary-text-color)] bg-transparent hover:bg-[var(--primary-border-hover-bg-color)]",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "outline", "ghost", "destructive"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

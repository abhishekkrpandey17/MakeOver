import React from "react";
// import { cn } from "@/lib/utils"; // or remove if not using

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive";
}

export const Badge = ({
  className,
  variant = "default",
  ...props
}: BadgeProps) => {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition";
  const variants = {
    default: "bg-[#f3d6f9] text-[#4b1a54]",
    secondary: "bg-gray-200 text-gray-800",
    destructive: "bg-red-100 text-red-700",
  };

  return (
    <div
      className={`${base} ${variants[variant]} ${className || ""}`}
      {...props}
    />
  );
};

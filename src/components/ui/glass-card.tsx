import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 bg-white/[0.03] border border-white/10 shadow-lg transition-all duration-500 text-base backdrop-blur-xl relative overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-accent/5 before:opacity-0 before:transition-opacity before:duration-500",
        hover && "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-primary/40 hover:bg-white/[0.06] hover:scale-[1.02] hover:-translate-y-1 hover:before:opacity-100",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

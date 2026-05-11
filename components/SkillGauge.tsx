"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillGaugeProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
  color?: string;
  index?: number;
}

/** Lighten a hex color for use on dark backgrounds */
function lightenColor(hex: string, amount = 0.5): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + Math.round((255 - ((num >> 16) & 0xff)) * amount));
  const g = Math.min(255, ((num >> 8) & 0xff) + Math.round((255 - ((num >> 8) & 0xff)) * amount));
  const b = Math.min(255, (num & 0xff) + Math.round((255 - (num & 0xff)) * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

const SkillGauge = ({ name, level, icon, color = "#00f5ff", index = 0 }: SkillGaugeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Lightened version for dark mode readability + glow
  const barColor = lightenColor(color, 0.35);

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          {icon && (
            <span className="shrink-0 rounded-md border border-border bg-muted p-1 text-muted-foreground">
              {icon}
            </span>
          )}
          <span className="text-sm font-medium text-foreground truncate">{name}</span>
        </div>
        <span
          className="ml-2 shrink-0 font-[family-name:var(--font-jetbrains)] text-[0.6rem] font-semibold tabular-nums text-foreground/70"
        >
          {isInView ? level : 0}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${barColor}88, ${barColor})`,
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${level}%` } : { width: "0%" }}
          transition={{
            duration: 0.8,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
};

export default SkillGauge;

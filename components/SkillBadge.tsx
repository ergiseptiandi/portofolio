"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
  delay?: number;
}

const SkillBadge = ({ name, icon, color, className, delay = 0 }: SkillBadgeProps) => {
  return (
    <div 
      className={cn("animate-in fade-in zoom-in duration-500 fill-mode-backwards", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Badge 
        variant="secondary" 
        className="px-4 py-2 text-sm font-medium glass border-primary/20 hover:scale-105 transition-all cursor-default"
        style={{
           boxShadow: color ? `0 0 15px -3px ${color}40` : undefined, // 40 is opacity in hex
           borderColor: color ? `${color}40` : undefined,
        }}
      >
        {icon && <span className="mr-2" style={{ color: color }}>{icon}</span>}
        {name}
      </Badge>
    </div>
  );
};

export default SkillBadge;

"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const SkillBadge = ({ name, icon, className, delay = 0 }: SkillBadgeProps) => {
  return (
    <div 
      className={cn("animate-in fade-in zoom-in duration-500 fill-mode-backwards", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Badge 
        variant="secondary" 
        className="px-4 py-2 text-sm font-medium glass border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {name}
      </Badge>
    </div>
  );
};

export default SkillBadge;

import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
}

const SkillBadge = ({ name, icon, color, className }: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/82 px-3.5 py-2 text-sm font-medium text-foreground/88 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
        className
      )}
      style={{
        borderColor: color ? `${color}26` : undefined,
        boxShadow: color ? `0 16px 30px -24px ${color}` : undefined,
      }}
    >
      {icon ? (
        <span className="rounded-full border border-border/60 bg-background/90 p-1.5" style={{ color }}>
          {icon}
        </span>
      ) : null}
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;

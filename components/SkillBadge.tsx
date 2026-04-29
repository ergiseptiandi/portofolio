import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
  featured?: boolean;
}

const SkillBadge = ({
  name,
  icon,
  color,
  className,
  featured = false,
}: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/82 px-3.5 py-2 text-sm font-medium text-foreground/88 shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
        featured &&
          "border-[#4479A1]/35 bg-gradient-to-br from-[#4479A1]/12 via-background/90 to-[#4479A1]/6 shadow-[0_18px_35px_-24px_rgba(68,121,161,0.45)] dark:from-[#4479A1]/18 dark:via-background/85 dark:to-[#4479A1]/10",
        className
      )}
      style={{
        borderColor: color ? `${color}26` : undefined,
        boxShadow: color ? `0 16px 30px -24px ${color}` : undefined,
      }}
    >
      {icon ? (
        <span
          className={cn(
            "rounded-full border border-border/60 bg-background/90 p-1.5",
            featured && "border-[#4479A1]/40 bg-[#4479A1] text-white"
          )}
          style={{ color: featured ? "#ffffff" : color }}
        >
          {icon}
        </span>
      ) : null}
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;

import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

const SkillBadge = ({ name, icon, className }: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/[0.03]",
        className
      )}
    >
      {icon && (
        <span className="rounded-md border border-border bg-muted p-1 text-muted-foreground">
          {icon}
        </span>
      )}
      <span className="text-[0.8rem]">{name}</span>
    </div>
  );
};

export default SkillBadge;

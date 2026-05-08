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
        "inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm font-medium text-[#e0e0e0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,245,255,0.15)] hover:bg-[rgba(0,245,255,0.03)]",
        className
      )}
    >
      {icon && (
        <span className="rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] p-1 text-[#ccc]">
          {icon}
        </span>
      )}
      <span className="text-[0.8rem]">{name}</span>
    </div>
  );
};

export default SkillBadge;

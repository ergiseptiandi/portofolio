import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto flex max-w-3xl flex-col items-center text-center",
        className
      )}
    >
      <p className="section-label">{label}</p>
      <div className="space-y-4">
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-copy">{description}</p>}
      </div>
    </div>
  );
};

export default SectionHeading;

import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "D3 — Informatics Engineering",
    school: "Batam State Polytechnic (Politeknik Negeri Batam)",
    year: "2022 – 2025",
    description: "Focused on software engineering, web & mobile development, and database systems. Completed PBL (Project-Based Learning) with Tax Center e-filing system.",
  },
];

const Education = () => {
  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <article key={edu.school} className="surface-panel relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6">
          <div className="absolute right-5 top-5 rounded-full bg-primary/8 p-4 text-primary/60">
            <GraduationCap className="h-7 w-7" />
          </div>

          <div className="max-w-[calc(100%-4rem)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Award className="h-3.5 w-3.5" />
              {edu.year}
            </div>
            <h4 className="mt-4 text-xl font-semibold">{edu.degree}</h4>
            <p className="mt-2 text-sm font-medium text-foreground/80">{edu.school}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{edu.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Education;

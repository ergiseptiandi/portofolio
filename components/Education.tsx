import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "D3 — Informatics Engineering",
    school: "Batam State Polytechnic (Politeknik Negeri Batam)",
    year: "2022 – 2025",
    description:
      "Software engineering, web & mobile development, database systems. Completed PBL with Tax Center e-filing system.",
  },
];

const Education = () => {
  return (
    <div className="space-y-3">
      {education.map((edu) => (
        <article
          key={edu.school}
          className="relative rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-border hover:bg-muted"
        >
          <div className="absolute right-4 top-4 rounded-lg bg-primary/10 p-2.5 text-primary/50">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="max-w-[calc(100%-3.5rem)]">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
              <Award className="h-2.5 w-2.5" />
              {edu.year}
            </span>
            <h4 className="mt-3 text-base font-semibold text-foreground">{edu.degree}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
            <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{edu.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Education;

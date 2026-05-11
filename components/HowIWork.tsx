"use client";

import { Search, FileText, Code, Rocket, HeartHandshake } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Understand your goals, requirements, and constraints. Free initial consultation.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning",
    description:
      "Architecture design, tech stack selection, timeline & estimate.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Iterative builds with regular updates. You see progress every step.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment",
    description:
      "CI/CD setup, domain config, SSL, production launch.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Support",
    description:
      "Post-launch maintenance, monitoring, and future iterations.",
  },
];

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const HowIWork = () => {
  return (
    <section id="process" className="section-shell scroll-mt-20">
      <div className="space-y-12">
        {/* Section heading */}
        <RevealSection>
          <SectionHeading
            label="Process"
            title="How I work."
            description="From your idea to a live product — here's how I approach every project."
          />
        </RevealSection>

        {/* Timeline */}
        <div className="relative space-y-8 pl-8 before:absolute before:bottom-2 before:left-[2.15rem] before:top-2 before:w-px before:bg-border">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-6 z-10 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-[3px] border-background bg-primary shadow-[0_0_12px_2px_rgba(0,245,255,0.3)]" />
                </div>

                {/* Step number (visible on larger screens) */}
                <div className="absolute -left-[4.5rem] top-5 hidden w-12 text-right md:block">
                  <span className="font-[family-name:var(--font-jetbrains)] text-[0.65rem] font-bold tracking-wider text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_-12px_rgba(0,245,255,0.12)] sm:flex-row sm:items-start"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      {/* Mobile step number */}
                      <span className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] font-bold tracking-wider text-primary md:hidden">
                        {step.number}
                      </span>
                      <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;

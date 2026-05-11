"use client";

import { Briefcase, Calendar, CheckCircle2, ChevronDown, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type SubProject = {
  name: string;
  description: string;
  techStack?: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  highlights?: string[];
  subProjects?: SubProject[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer & DevOps",
    company: "PT Persero Batam",
    location: "Batam, Indonesia",
    period: "Feb 2025 – Present",
    isCurrent: true,
    description:
      "Core developer handling end-to-end product delivery for internal systems — from HRIS, meeting room management, to deployment automation and mobile operational tools.",
    highlights: [
      "Built HRIS covering full HR lifecycle",
      "Automated CI/CD with GitLab & Docker",
      "Migrated Odoo server without data loss",
      "Delivered 4+ production applications",
    ],
    subProjects: [
      {
        name: "HRIS System (Web + Mobile)",
        description:
          "Full HR platform: automated payroll with tax & BPJS, realtime fingerprint attendance, mobile app with GPS-based attendance and KPI dashboards.",
        techStack: ["Laravel", "Expo", "Oracle Database", "REST API"],
      },
      {
        name: "Meeting Room Application",
        description:
          "Real-time dashboard for room scheduling with WhatsApp API notifications.",
        techStack: ["Laravel", "WhatsApp API", "Real-time Dashboard"],
      },
      {
        name: "DevOps & Server Migration",
        description:
          "GitLab CI/CD workflows, Docker auto-recovery, Odoo cloud-to-on-premise migration.",
        techStack: ["GitLab CI/CD", "Docker", "Odoo", "Nginx"],
      },
      {
        name: "Airport Cargo Mobile App",
        description:
          "Mobile acceptance app for Hang Nadim Airport — QR code scanning into central system.",
        techStack: ["Flutter", "QR Scanning", "API Integration"],
      },
      {
        name: "Mudik Gratis BUMN App",
        description:
          "Laravel registration system with 24/7 status checking, live chat, QRIS payments, and admin dashboard.",
        techStack: ["Laravel", "Payment Gateway", "Dashboard"],
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Batam Toteles Application",
    location: "Batam, Indonesia",
    period: "Feb 2025",
    description:
      "Built a Laravel ERP-like operational management app with interconnected modules, WhatsApp Gateway, and role-based access.",
    highlights: [
      "ERP-style interconnected modules",
      "WhatsApp Gateway integration",
      "Role-based access control",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Candu Roti Bakar",
    location: "Batam, Indonesia",
    period: "Sep 2024 – Oct 2024",
    description:
      "Full-stack POS system with stock management, financial reporting, and Midtrans QRIS payment integration.",
    highlights: [
      "POS with Midtrans QRIS payment",
      "Automated P&L financial reporting",
      "Real-time sales analytics",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "PT Jala Armada Rinjani",
    location: "Remote",
    period: "Project-based",
    description:
      "GPS-based attendance application with cross-day support, leave/sick requests, and history tracking.",
    highlights: [
      "GPS attendance with cross-day support",
      "Leave & sick request workflow",
    ],
  },
  {
    role: "Backend Developer (Magang)",
    company: "Folxcode",
    location: "Remote",
    period: "2023 – 2024",
    description:
      "Backend systems for multiple clients including e-commerce automation, branch management, and 50+ feature school management platform.",
    highlights: [
      "50+ features for music school",
      "E-commerce automation",
      "Multi-client backend delivery",
    ],
  },
  {
    role: "Full Stack Developer (Internship)",
    company: "Tax Center — PBL Project",
    location: "Batam State Polytechnic",
    period: "Aug 2022 – Dec 2022",
    description:
      "Tax calculation optimization, session security, and Virtual Account payment integration.",
    highlights: [
      "Virtual Account payment integration",
      "Tax formula optimization",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative space-y-4 pl-8 before:absolute before:bottom-2 before:left-[0.55rem] before:top-2 before:w-px before:bg-border">
      {experiences.map((exp, index) => {
        const isOpen = openIndex === index;
        const hasExpandableContent =
          exp.description || (exp.highlights && exp.highlights.length > 0) || (exp.subProjects && exp.subProjects.length > 0);

        return (
          <article key={`${exp.company}-${index}`} className="relative">
            {/* Timeline dot */}
            <div
              className={`absolute -left-8 top-5 h-3 w-3 rounded-full border-[3px] border-background ${
                exp.isCurrent
                  ? "bg-primary shadow-[0_0_12px_2px_rgba(0,245,255,0.4)]"
                  : "bg-muted-foreground/20"
              }`}
            />

            {/* Card */}
            <div
              className={`rounded-xl border border-border bg-card p-5 transition-all duration-200 ${
                hasExpandableContent
                  ? "cursor-pointer hover:border-border hover:bg-muted"
                  : ""
              }`}
              onClick={() => hasExpandableContent && toggleItem(index)}
              role={hasExpandableContent ? "button" : undefined}
              tabIndex={hasExpandableContent ? 0 : undefined}
              onKeyDown={(e) => {
                if (hasExpandableContent && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  toggleItem(index);
                }
              }}
            >
              {/* Header — always visible */}
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                    <h4 className="text-base font-semibold text-foreground">{exp.role}</h4>
                    {hasExpandableContent && (
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : -90 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex"
                      >
                        {isOpen ? (
                          <ChevronDown className="h-3.5 w-3.5 text-primary/60" />
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5 text-primary/60" />
                        )}
                      </motion.span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    {exp.location && (
                      <span className="inline-flex items-center gap-0.5 text-xs text-muted-foreground">
                        <MapPin className="h-2.5 w-2.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {exp.isCurrent && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-wider text-primary">
                      Current
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                    <Calendar className="h-2.5 w-2.5" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3">
                      <p className="text-sm leading-[1.7] text-muted-foreground">{exp.description}</p>

                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1 rounded-md border border-primary/15 bg-primary/[0.06] px-2 py-0.5 text-[0.65rem] font-medium text-primary/80"
                            >
                              <CheckCircle2 className="h-2.5 w-2.5" />
                              {h}
                            </span>
                          ))}
                        </div>
                      )}

                      {exp.subProjects && exp.subProjects.length > 0 && (
                        <div className="mt-4 space-y-2 border-t border-border pt-4">
                          <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-primary/60">
                            Key projects delivered
                          </p>
                          <div className="grid gap-2 md:grid-cols-2">
                            {exp.subProjects.map((project) => (
                              <div
                                key={project.name}
                                className="rounded-lg border border-border bg-muted p-3 transition-colors duration-200 hover:border-primary/15"
                              >
                                <div className="flex items-start gap-1.5">
                                  <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary/40" />
                                  <div className="space-y-1">
                                    <p className="text-xs font-semibold text-foreground">{project.name}</p>
                                    <p className="text-[0.72rem] leading-[1.6] text-muted-foreground">{project.description}</p>
                                    {project.techStack && (
                                      <div className="flex flex-wrap gap-1 pt-0.5">
                                        {project.techStack.map((tech) => (
                                          <span
                                            key={tech}
                                            className="rounded bg-muted px-1.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.55rem] text-muted-foreground"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Experience;

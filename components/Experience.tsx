import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin } from "lucide-react";

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
    role: "Full Stack Developer (Freelance)",
    company: "Captura",
    location: "Remote",
    period: "Jan 2026 – Present",
    isCurrent: true,
    description:
      "Optimized the user interface to deliver a more engaging experience with strong responsiveness across mobile and desktop. Built new features, fixed application issues, and developed a real-time queue dashboard that consolidated data from multiple branches and companies.",
    highlights: [
      "Real-time queue dashboard across multiple branches",
      "UI/UX improvements for mobile & desktop",
      "Full-stack feature development & bug fixes",
    ],
  },
  {
    role: "Full Stack Developer & DevOps",
    company: "PT Persero Batam",
    location: "Batam, Indonesia",
    period: "Feb 2025 – Present",
    isCurrent: true,
    description:
      "Core developer handling end-to-end product delivery for internal systems — from HRIS, meeting room management, to deployment automation and mobile operational tools. Working across Laravel, Expo, Flutter, Docker, and GitLab CI/CD.",
    highlights: [
      "Built HRIS covering full HR lifecycle (payroll, BPJS, tax, attendance)",
      "Automated CI/CD with GitLab & Docker auto-recovery",
      "Migrated Odoo server without data loss",
      "Delivered 4+ production applications in-house",
    ],
    subProjects: [
      {
        name: "HRIS System (Web + Mobile)",
        description:
          "Full HR management platform: automated payroll with tax & BPJS calculation, realtime fingerprint attendance, overtime management, and automated payslip delivery. Mobile app (Expo) with GPS-based attendance, fake GPS detection, KPI dashboards, payslip/overtime slip access, and in-app auto updates without Play Store releases.",
        techStack: ["Laravel", "Expo", "MySQL", "REST API"],
      },
      {
        name: "Meeting Room Application",
        description:
          "Real-time dashboard to monitor room status by date and time. Scheduling and management features including participant count, meal requirements, and automated notifications through WhatsApp API.",
        techStack: ["Laravel", "WhatsApp API", "Real-time Dashboard"],
      },
      {
        name: "DevOps & Server Migration",
        description:
          "Automated deployment workflows with GitLab CI/CD jobs, configured Docker services for auto-restart after server outages, and migrated Odoo from cloud to on-premise server without data loss.",
        techStack: ["GitLab CI/CD", "Docker", "Odoo", "Nginx"],
      },
      {
        name: "Hang Nadim Airport — Cargo Mobile App",
        description:
          "Mobile acceptance application to scan and integrate package QR codes directly into the central airport system.",
        techStack: ["Flutter", "QR Scanning", "API Integration"],
      },
      {
        name: "Mudik Gratis BUMN Application",
        description:
          "Built a Laravel-based registration system to replace Google Forms, making participant handling more scalable. Included 24/7 status checking, live chat, automatic email delivery, admin dashboard with stats, participant filtering, QRIS payment handling, and NIK blacklist validation.",
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
      "Built a Laravel-based ERP-like operational management app with interconnected modules: purchase requests, purchase orders, delivery orders, production flows, and UMKM consignment management. Integrated WhatsApp Gateway notifications and configurable user roles.",
    highlights: [
      "ERP-style interconnected operational modules",
      "WhatsApp Gateway integration",
      "Role-based access control system",
    ],
  },
  {
    role: "Full Stack Developer (Laravel & Flutter)",
    company: "Candu Roti Bakar",
    location: "Batam, Indonesia",
    period: "Sep 2024 – Oct 2024",
    description:
      "Built a full-stack solution for product management, stock allocation, and financial reporting (Sales, Profit, COGS). Developed an Android POS system with automated QRIS (Midtrans) payments and real-time sales analytics.",
    highlights: [
      "POS system with Midtrans QRIS payment",
      "Automated financial reporting (P&L, COGS)",
      "Real-time sales analytics dashboard",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "PT Jala Armada Rinjani",
    location: "Remote",
    period: "Project-based",
    description:
      "Built a comprehensive attendance application with admin and employee roles. System handles coordinate-based attendance with cross-day clock-in support, leave and sick request submissions, and complete attendance history tracking.",
    highlights: [
      "GPS-based attendance with cross-day support",
      "Leave & sick request workflow",
    ],
  },
  {
    role: "Backend Developer (Magang)",
    company: "Folxcode",
    location: "Remote",
    period: "2023 – 2024",
    description:
      "Developed backend systems for multiple clients: HappyBeauty (E-commerce automation), Tritunas & Grand Batam Mall (branch management, invoicing, IG integration), and Liszthoven Music School (50+ features including billing and radius-based attendance).",
    highlights: [
      "50+ features for Liszthoven Music School",
      "E-commerce automation for HappyBeauty",
      "Multi-client backend delivery",
    ],
  },
  {
    role: "Full Stack Developer (Internship)",
    company: "Tax Center — PBL Project",
    location: "Batam State Polytechnic",
    period: "Aug 2022 – Dec 2022",
    description:
      "Optimized tax calculation formulas and enhanced session security. Implemented automatic subscription with Virtual Account payments and improved overall application performance.",
    highlights: [
      "Virtual Account payment integration",
      "Tax formula optimization",
    ],
  },
];

const Experience = () => {
  return (
    <div className="relative space-y-5 pl-6 before:absolute before:bottom-2 before:left-[0.45rem] before:top-2 before:w-px before:bg-border/80">
      {experiences.map((exp, index) => (
        <article key={`${exp.company}-${index}`} className="relative pl-6">
          {/* Timeline dot — green pulse for current, static for past */}
          <div
            className={`absolute left-0 top-6 h-3 w-3 rounded-full border-4 border-background shadow-sm ${
              exp.isCurrent
                ? "bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.3)]"
                : "bg-primary"
            }`}
          />

          <div className="surface-panel px-5 py-5 sm:px-6 sm:py-6">
            {/* Header: Role + Company + Period */}
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Briefcase className="h-4 w-4" />
                  <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-sm font-medium text-foreground/80">{exp.company}</p>
                  {exp.location ? (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {exp.isCurrent ? (
                  <span className="rounded-full bg-emerald-500/12 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Current
                  </span>
                ) : null}
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.period}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
              {exp.description}
            </p>

            {/* Highlights — Quick scan for HRD */}
            {exp.highlights && exp.highlights.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-xs font-medium text-primary/90 dark:border-primary/20 dark:bg-primary/10"
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    {highlight}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Sub-projects for grouped entries (e.g. PT Persero Batam) */}
            {exp.subProjects && exp.subProjects.length > 0 ? (
              <div className="mt-5 space-y-3 border-t border-border/60 pt-5">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Key projects delivered
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {exp.subProjects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-2xl border border-border/50 bg-background/60 px-4 py-4 transition-colors duration-200 hover:border-primary/25 hover:bg-primary/[0.03]"
                    >
                      <div className="flex items-start gap-2">
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground/90">
                            {project.name}
                          </p>
                          <p className="text-[0.82rem] leading-6 text-muted-foreground">
                            {project.description}
                          </p>
                          {project.techStack && project.techStack.length > 0 ? (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md bg-muted/60 px-2 py-0.5 text-[0.68rem] font-medium text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Experience;

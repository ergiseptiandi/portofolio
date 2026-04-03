import { Briefcase, Calendar } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  featureSections?: {
    title: string;
    items: string[];
  }[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "PT Jala Armada Rinjani (Aplikasi Absensi)",
    period: "Project-based",
    description:
      "Built a comprehensive attendance application with two user roles: admin and employee. The system handles coordinate-based attendance with cross-day clock-in support, leave and sick request submissions, and complete attendance history tracking.",
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Captura",
    period: "Jan 2026 - Present",
    description:
      "Optimized the user interface to deliver a more engaging experience with strong responsiveness across mobile and desktop. Built new features, fixed application issues, and developed a real-time queue dashboard that consolidated data from multiple branches and companies.",
  },
  {
    role: "DevOps Engineer",
    company: "PT Persero Batam",
    period: "Project-based",
    description:
      "Automated deployment workflows with GitLab CI/CD using GitLab jobs, configured Docker services to restart automatically after server outages, and successfully migrated an Odoo application from a cloud server to an on-premise server without data loss.",
  },
  {
    role: "Full Stack Developer",
    company: "PT Persero Batam (HRIS Project)",
    period: "2024 - Present",
    description:
      "Built mobile and web HRIS applications that transformed manual workflows into a more efficient and automated system, covering attendance, payroll, BPJS, income tax, overtime, and automated payslip delivery. Developed the mobile HRIS app with Expo, including coordinate-based attendance managed from the web admin panel, fake GPS detection and user monitoring, payslip and overtime slip access, attendance history, KPI dashboards for attendance, lateness, leave, and more, plus in-app auto updates without requiring Play Store releases.",
  },
  {
    role: "Full Stack Developer",
    company: "PT Persero Batam (Meeting Room Application)",
    period: "Oct 2025",
    description:
      "Built a Laravel-based meeting room application with a real-time dashboard to monitor room status by date and time. Developed scheduling and meeting management features, including participant count, meal requirements, and automated notifications through the WhatsApp API.",
  },
  {
    role: "Full Stack Developer",
    company: "Batam Toteles Application",
    period: "Feb 2025",
    description:
      "Built a Laravel-based operational management application for Toteles in Batam with interconnected modules similar to an ERP workflow. The system handled purchase requests, purchase orders, delivery orders, production flows, and UMKM consignment management, all linked within one application ecosystem. Also implemented user management with configurable roles and access control directly from the app, integrated WhatsApp Gateway notifications, and delivered more informative reporting for operational monitoring.",
  },
  {
    role: "Full Stack Developer",
    company: "Mudik Gratis BUMN Application",
    period: "2025",
    description:
      "Built a Laravel-based registration system for Mudik Gratis BUMN to replace the previous Google Form process and make participant handling more scalable. The platform included 24/7 status checking, live chat support for user issues, and automatic email delivery for registrants. On the admin side, developed a dashboard with totals for participants, pending verification, approved and rejected applicants, real-time notifications, statistical charts, participant filtering by payment status, automated QRIS payment handling, NIK blacklist validation, and fully system-driven workflows without hardcoded operational steps.",
  },
  {
    role: "Full Stack Developer (Laravel & Flutter)",
    company: "Candu Roti Bakar",
    period: "Sep 2024 - Oct 2024",
    description:
      "Built a full-stack solution for product management, stock allocation, and financial reporting (Sales, Profit, COGS). Developed an Android POS system with automated QRIS (Midtrans) payments and real-time sales analytics.",
  },
  {
    role: "Backend Developer (NestJS)",
    company: "Freelance Projects",
    period: "2023 - 2024",
    description:
      "Developed backend systems for multiple clients: HappyBeauty (E-commerce automation), Tritunas and Grand Batam Mall (Branch, invoice management, and IG integration), plus Liszthoven Music School (50+ features including billing and radius-based attendance).",
  },
  {
    role: "Mobile Developer",
    company: "PT Persero Batam Hang Nadim Airport Project",
    period: "2024",
    description:
      "Created a mobile acceptance application to automatically scan and integrate package QR codes into the airport's central system.",
  },
  {
    role: "Full Stack Developer (Internship)",
    company: "Tax Center - PBL Project",
    period: "Aug 2022 - Dec 2022",
    description:
      "Optimized tax calculation formulas and enhanced session security. Implemented an automatic subscription feature with Virtual Account payments and improved overall application performance.",
  },
];

const Experience = () => {
  return (
    <div className="relative space-y-6 pl-6 before:absolute before:bottom-2 before:left-[0.45rem] before:top-2 before:w-px before:bg-border/80">
      {experiences.map((exp, index) => (
        <article key={`${exp.company}-${index}`} className="relative pl-6">
          <div className="absolute left-0 top-6 h-3 w-3 rounded-full border-4 border-background bg-primary shadow-sm" />
          <div className="surface-panel px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Briefcase className="h-4 w-4" />
                  <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                </div>
                <p className="text-sm font-medium text-foreground/80">{exp.company}</p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {exp.period}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
              {exp.description}
            </p>

            {exp.featureSections ? (
              <div className="mt-5 space-y-4">
                {exp.featureSections.map((section) => (
                  <div key={section.title}>
                    <h5 className="font-mono text-xs uppercase tracking-[0.24em] text-primary/75">
                      {section.title}
                    </h5>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Experience;

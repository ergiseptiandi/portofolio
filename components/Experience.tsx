"use client";

import { motion } from "framer-motion";
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
    role: "Full Stack Developer (Laravel & Flutter)",
    company: "Candu Roti Bakar",
    period: "Sep 2024 - Oct 2024",
    description: "Built a full-stack solution for product management, stock allocation, and financial reporting (Sales, Profit, COGS). Developed an Android POS system with automated QRIS (Midtrans) payments and real-time sales analytics.",
  },
  {
    role: "Backend Developer (NestJS)",
    company: "Freelance Projects",
    period: "2023 - 2024",
    description: "Developed backend systems for multiple clients: 'HappyBeauty' (E-commerce automation), 'Tritunas' & 'Grand Batam Mall' (Branch/Invoice management, IG integration), and 'Liszthoven Music School' (50+ features including billing and radius-based attendance).",
  },
  {
    role: "Mobile Developer",
    company: "PT Persero Batam Hang Nadim Airport Project",
    period: "2024",
    description: "Created a mobile acceptance application to automatically scan and integrate package QR codes into the airport's central system.",
  },
  {
    role: "Full Stack Developer (Internship)",
    company: "Tax Center - PBL Project",
    period: "Aug 2022 - Dec 2022",
    description: "Optimized tax calculation formulas and enhanced session security. Implemented an automatic subscription feature with Virtual Account payments and improved overall application performance.",
  },
];

const Experience = () => {
  return (
    <div className="relative border-l border-primary/30 ml-4 md:ml-6 space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative pl-8 md:pl-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

          <div className="glass-card p-6 md:p-8 hover:bg-primary/5 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {exp.role}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full w-fit">
                <Calendar className="h-3 w-3 mr-2" />
                {exp.period}
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
            {exp.featureSections && (
              <div className="mt-5 space-y-4">
                {exp.featureSections.map((section) => (
                  <div key={section.title}>
                    <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                      {section.title}
                    </h5>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;

"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Persero Batam (HRIS Project)",
    period: "2024 - Present",
    description: "Developed a comprehensive HRIS application integrating salary systems with tax calculations, automated payslips, and overtime requests. Implemented real-time integration between fingerprint attendance devices and the web dashboard.",
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
    company: "Hang Nadim Airport Project",
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
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;

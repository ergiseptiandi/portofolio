"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Leading the frontend team in building scalable web applications using Next.js and React. Implemented comprehensive design systems and improved performance by 40%.",
  },
  {
    role: "Full Stack Developer",
    company: "Creative Digital Agency",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client websites. Worked with Node.js backend and React frontend. Integrated various CMS platforms and payment gateways.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description: "Collaborated with senior developers to create responsive user interfaces. Assisted in bug fixing and code optimization.",
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

"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Student",
    school: "Batam State Polytechnic",
    year: "2022 - 2025",
    description: "Informatics Engineering",
  },
];

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {education.map((edu, index) => (
        <motion.div 
          key={index}
          className="glass-card p-6 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
            <GraduationCap className="h-24 w-24 text-primary" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-primary/10 rounded-lg">
                 <GraduationCap className="h-6 w-6 text-primary" />
               </div>
               <span className="text-sm font-medium text-muted-foreground border border-border px-2 py-1 rounded-md">
                 {edu.year}
               </span>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
            <h4 className="text-lg text-primary/80 mb-4 flex items-center gap-2">
              <Award className="h-4 w-4" />
              {edu.school}
            </h4>
            <p className="text-muted-foreground">
              {edu.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;

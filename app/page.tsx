"use client";

import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ScrollFlow from "@/components/ScrollFlow";
import SkillBadge from "@/components/SkillBadge";
import { motion, Variants } from "framer-motion";
import { Code, Database, Globe, Layers, Layout, Server, Smartphone, Terminal } from "lucide-react";

export default function Home() {
  const skills = [
    { name: "React", icon: <Code className="h-4 w-4" /> },
    { name: "Next.js", icon: <Globe className="h-4 w-4" /> },
    { name: "TypeScript", icon: <Terminal className="h-4 w-4" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-4 w-4" /> },
    { name: "Node.js", icon: <Server className="h-4 w-4" /> },
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
    { name: "Mobile Design", icon: <Smartphone className="h-4 w-4" /> },
    { name: "UI/UX", icon: <Layers className="h-4 w-4" /> },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and admin dashboard.",
      tags: ["Next.js", "Stripe", "Prisma"],
      imageUrl: "",
      githubUrl: "https://github.com",
      demoUrl: "https://vercel.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tags: ["React", "Firebase", "Tailwind"],
      imageUrl: "",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with glassmorphism design and smooth animations.",
      tags: ["Next.js", "Shadcn/UI", "Glassmorphism"],
      githubUrl: "https://github.com",
      demoUrl: "https://vercel.com",
    },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], 
      },
    },
  };

  return (
    <div className="flex flex-col gap-20 pb-20 overflow-x-hidden">
      <ScrollFlow />
      <Hero />
      
      <motion.section 
        id="about" 
        className="container mx-auto px-4 py-12 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* ... existing about content ... */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">About Me</h2>
          <motion.div 
            className="h-1 w-20 bg-primary/50 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
           <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[80px]" />
           
           <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3">
               <motion.div 
                 className="aspect-square relative rounded-2xl overflow-hidden glass border-primary/20 shadow-xl mx-auto max-w-[250px]"
                 whileHover={{ scale: 1.05, rotate: 2 }}
               >
                 {/* Placeholder for profile image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-4xl">
                   👋
                 </div>
               </motion.div>
             </div>
             <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
               <p className="text-lg leading-relaxed text-muted-foreground">
                 Hello! I'm a passionate developer with a knack for creating beautiful and functional web applications. 
                 I specialize in the JavaScript ecosystem, particularly React and Next.js.
               </p>
               <p className="text-lg leading-relaxed text-muted-foreground">
                 My journey started 5 years ago, and I've since worked on diverse projects ranging from small business websites 
                 to complex enterprise applications. I believe in clean code, good design, and user-centric development.
               </p>
               <p className="text-lg leading-relaxed text-muted-foreground">
                 When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
               </p>
             </div>
           </div>
        </div>
      </motion.section>

      <motion.section 
        id="experience" 
        className="container mx-auto px-4 py-12 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="flex flex-col items-center text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">Experience & Education</h2>
           <motion.div 
            className="h-1 w-20 bg-primary/50 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
           />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <span className="text-primary">01.</span> Experience
            </h3>
            <Experience />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <span className="text-primary">02.</span> Education
            </h3>
            <Education />
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        id="skills" 
        className="container mx-auto px-4 py-12 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="flex flex-col items-center text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">Technical Skills</h2>
           <motion.div 
            className="h-1 w-20 bg-primary/50 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
           />
           <p className="text-muted-foreground max-w-2xl">
              I work with a variety of tools and technologies to bring ideas to life. Here are some of my favorites.
           </p>
        </div>
        
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto justify-center">
          {skills.map((skill, index) => (
            <SkillBadge 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon} 
              delay={index * 100}
              className="m-2"
            />
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="container mx-auto px-4 py-12 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
         <div className="flex flex-col items-center text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">Featured Projects</h2>
           <motion.div 
            className="h-1 w-20 bg-primary/50 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
           />
           <p className="text-muted-foreground max-w-2xl">
              A selection of projects that showcase my skills and passion for building.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((project, index) => (
             <ProjectCard 
               key={project.title}
               {...project}
               delay={index * 200}
             />
           ))}
        </div>
      </motion.section>
      
      <motion.section 
        id="contact" 
        className="container mx-auto px-4 py-12 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="flex flex-col items-center text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">Contact Me</h2>
           <motion.div 
            className="h-1 w-20 bg-primary/50 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
           />
        </div>
         <Contact />
      </motion.section>

      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Creative Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GhostCursor from "@/components/GhostCursor";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ScrollFlow from "@/components/ScrollFlow";
import SkillBadge from "@/components/SkillBadge";
import { motion, Variants } from "framer-motion";
import { SiCloudflare, SiDocker, SiFlutter, SiLaravel, SiNestjs, SiNextdotjs, SiNginx, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const skills = [
    { name: "Laravel", icon: <SiLaravel className="h-4 w-4" />, color: "#FF2D20" },
    { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" />, color: "#000000" }, // Black shadow might be invisible in dark mode, but the badge handles opacity.
    { name: "NestJS", icon: <SiNestjs className="h-4 w-4" />, color: "#E0234E" },
    { name: "Flutter", icon: <SiFlutter className="h-4 w-4" />, color: "#02569B" },
    { name: "React", icon: <SiReact className="h-4 w-4" />, color: "#61DAFB" },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-4 w-4" />, color: "#336791" },
    { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4" />, color: "#339933" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" />, color: "#06B6D4" },
    { name: "Cloudflare", icon: <SiCloudflare className="h-4 w-4" />, color: "#F38020" },
    { name: "Docker", icon: <SiDocker className="h-4 w-4" />, color: "#2496ED" },
    { name: "Nginx", icon: <SiNginx className="h-4 w-4" />, color: "#009639" },
  ];

  const projects = [
    {
      title: "HRIS Integrated System",
      description: "Comprehensive HR management for Persero Batam. Features automated payroll with tax calculation, realtime fingerprint attendance integration, and overtime management.",
      tags: ["Laravel", "MySQL", "Realtime Integration", "Bootstrap"],
      imageUrl: "",
      isPrivate: true,
    },
    {
      title: "Smart POS System",
      description: "Full-stack Point of Sale for Candu Roti Bakar. Includes stock management, financial reports (Profit/Loss), and Midtrans QRIS payment integration.",
      tags: ["Laravel", "Flutter", "Midtrans", "MySQL"],
      imageUrl: "",
      isPrivate: true,
    },
    {
      title: "Airport Cargo Mobile",
      description: "Mobile acceptance application for Hang Nadim Airport. Scans and integrates package QR codes directly into the central airport system.",
      tags: ["Flutter", "QR Scanning", "API Integration"],
      imageUrl: "",
      isPrivate: true,
    },
    {
      title: "E-Filing Tax System",
      description: "Tax Center PBL Project. Optimized tax formulas, session security, and implemented recurring payments via Virtual Accounts.",
      tags: ["Web", "Security", "Payment Gateway"],
      imageUrl: "",
      isPrivate: true, // Assuming academic/internship project might not be live public
    },
    {
      title: "Backend Services Portfolio",
      description: "Various backend systems for clients including HappyBeauty (E-commerce), Tritunas, and Grand Batam Mall (IG Automation).",
      tags: ["NestJS", "PostgreSQL", "Automation"],
      imageUrl: "",
      isPrivate: true,
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
    <div className="flex flex-col gap-20 overflow-x-hidden min-h-screen">
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
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">Profile</h2>
          <motion.div
            className="h-1 w-20 bg-primary/50 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[80px]" />

          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="w-full md:w-5/12 flex justify-center">
              <motion.div
                className="aspect-square relative rounded-2xl overflow-hidden glass border-primary/20 shadow-xl w-full max-w-[300px]"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-6xl">
                  👋
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for hire
              </div>

              <h3 className="text-3xl font-bold">Erghi Septiandi Putra</h3>
              <p className="text-lg text-primary font-medium">Fullstack Developer</p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Hello! I'm a versatile Fullstack Developer capable of building complete solutions for Web and Mobile.
                I have extensive experience with <strong>Laravel</strong>, <strong>Next.js</strong>, <strong>NestJS</strong>,
                and <strong>Flutter</strong>. I enjoy creating efficient systems, from robust backends to intuitive and beautiful user interfaces.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                <a
                  href="/cv.html"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                  Download CV (ATS)
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border hover:bg-muted transition-all"
                >
                  Contact Me
                </a>
              </div>
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
              color={skill.color}
              delay={index * 100}
              className="m-2"
            />
          ))}
        </div>
      </motion.section>

      <GhostCursor className="w-full">
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
      </GhostCursor>

      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md py-6 mt-0">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Erghi Septiandi Putra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

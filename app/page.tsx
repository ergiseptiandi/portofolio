"use client";

import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCloudflare,
  SiDocker,
  SiExpo,
  SiFlutter,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

type SkillItem = { name: string; icon: IconType; color: string };
type SkillGroup = { title: string; description: string; projectCount: string; items: SkillItem[] };
type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
};

const careerHighlights = [
  "Built HRIS system serving full HR lifecycle at PT Persero Batam",
  "Delivered 10+ production systems across web, mobile & DevOps",
  "Payment integrations: Midtrans QRIS, Virtual Account",
  "CI/CD automation & server migration without data loss",
];

const skillGroups: SkillGroup[] = [
  {
    title: "Core web stack",
    description: "Go-to tools for product interfaces, admin systems, and full-stack dashboards.",
    projectCount: "6+ projects",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend and data",
    description: "Service architecture, integrations, and data storage for production-ready backends.",
    projectCount: "5+ projects",
    items: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Oracle Database", icon: SiOracle, color: "#F80000" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    ],
  },
  {
    title: "Mobile delivery",
    description: "Cross-platform execution for internal tools and customer-facing mobile products.",
    projectCount: "3+ projects",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Expo", icon: SiExpo, color: "#1F2937" },
    ],
  },
  {
    title: "Infrastructure",
    description: "Deployment, runtime reliability, and operational support around shipped systems.",
    projectCount: "Production",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "GitLab CI/CD", icon: SiGitlab, color: "#FC6D26" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "WhatsApp API Gateway",
    description:
      "Multi-Device WhatsApp API Gateway & Dashboard. A SaaS platform to connect, manage, and automate multiple WhatsApp numbers via a centralized dashboard. Features QR code authentication, dynamic API keys, webhooks, contact sync, and role-based access.",
    tags: ["Next.js", "Baileys", "MySQL", "Prisma", "REST API", "Webhook"],
    demoUrl: "https://whatsapp-gateway.paidev.my.id/",
  },
  {
    title: "PAI JOKI",
    description:
      "Comprehensive freelance service management platform. Handles the entire end-to-end workflow from service catalog, ordering, real-time progress tracking, revision system, automated invoicing, WhatsApp notifications, to OTP & 2FA security.",
    tags: ["Next.js", "Prisma", "Payment Gateway", "WhatsApp OTP", "2FA"],
    demoUrl: "https://paijoki.paidev.my.id/",
  },
  {
    title: "Personal CV Website",
    description:
      "This portfolio website itself. A modern, dark-themed personal site built with Next.js, Tailwind CSS, and Framer Motion. Features 3D tilt project cards, cursor glow, mobile bottom nav, and scroll-triggered animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    demoUrl: "https://portfolio.paidev.my.id/",
  },
  {
    title: "Finance App Mobile",
    description:
      "Personal finance mobile app built with Expo. Covers onboarding, authentication, biometric unlock, wallets, categories, budgets, notifications, and mobile-friendly finance workflows.",
    tags: ["Expo", "React Native", "Biometric", "Push Notifications"],
    githubUrl: "https://github.com/ergiseptiandi/finance-app-mobile",
  },
  {
    title: "Finance App Backend",
    description:
      "Go backend API with package-by-feature architecture. Handles auth, refresh tokens, transactions, notification settings, migrations, Docker, and MySQL.",
    tags: ["Go", "MySQL", "JWT", "Docker", "Vertical Slice"],
    githubUrl: "https://github.com/ergiseptiandi/finance-app",
  },
  {
    title: "HRIS Integrated System",
    description:
      "Comprehensive HR management for Persero Batam. Automated payroll with tax calculation, realtime fingerprint attendance integration, and overtime management.",
    tags: ["Laravel", "Oracle DB", "Realtime", "Bootstrap"],
    isPrivate: true,
  },
  {
    title: "Smart POS System",
    description:
      "Full-stack Point of Sale for Candu Roti Bakar. Stock management, financial reports (Profit/Loss), and Midtrans QRIS payment integration.",
    tags: ["Laravel", "Flutter", "Midtrans", "MySQL"],
    isPrivate: true,
  },
  {
    title: "Airport Cargo Mobile",
    description:
      "Mobile acceptance application for Hang Nadim Airport. Scans and integrates package QR codes directly into the central airport system.",
    tags: ["Flutter", "QR Scanning", "API Integration"],
    isPrivate: true,
  },
  {
    title: "E-Filing Tax System",
    description:
      "Tax Center PBL Project. Optimized tax formulas, session security, and implemented recurring payments via Virtual Accounts.",
    tags: ["Web", "Security", "Payment Gateway"],
    isPrivate: true,
  },
  {
    title: "Backend Services Portfolio",
    description:
      "Various backend systems for clients including HappyBeauty (E-commerce), Tritunas, and Grand Batam Mall (IG Automation).",
    tags: ["NestJS", "PostgreSQL", "Automation"],
    isPrivate: true,
  },
  {
    title: "DevOps & Odoo Migration",
    description:
      "GitLab CI/CD auto-deployment, Docker auto-recovery services, and Odoo migration from cloud to internal server without data loss.",
    tags: ["GitLab CI/CD", "Docker", "Odoo", "Nginx"],
    isPrivate: true,
  },
];

const principles = [
  "Fast implementation without sacrificing structure",
  "Interfaces that stay usable across desktop and mobile",
  "Backends designed for integrations and business workflows",
];

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* About */}
      <section id="about" className="section-shell">
        <RevealSection>
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)]">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[rgba(0,245,255,0.03)]">
                  <Image
                    src="/ergi.jpg"
                    alt="Erghi Septiandi Putra"
                    fill
                    priority
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#0a0a0a]/60 px-3 py-2 backdrop-blur-sm">
                    <p className="font-[family-name:var(--font-syne)] text-sm font-bold text-white">
                      Erghi Septiandi Putra
                    </p>
                    <p className="font-[family-name:var(--font-jetbrains)] text-[0.55rem] uppercase tracking-[0.2em] text-[#888]">
                      Full-stack developer
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  { label: "Role", value: "Freelance Full-Stack Dev & DevOps" },
                  { label: "Company", value: "PT Persero Batam" },
                  { label: "Since", value: "February 2025" },
                  { label: "Based in", value: "Batam, Indonesia" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] px-4 py-3"
                  >
                    <p className="font-[family-name:var(--font-jetbrains)] text-[0.55rem] uppercase tracking-[0.25em] text-[#888]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <SectionHeading
                label="Profile"
                title="Erghi Septiandi Putra"
                description="A freelance full-stack developer open for projects — web, mobile, backend, and DevOps. Experienced in delivering internal systems, customer-facing interfaces, and deployment automation."
              />

              <div className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-4 w-4 text-[#00f5ff]" />
                  <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#00f5ff]/70">
                    Career highlights
                  </p>
                </div>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  {careerHighlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2 rounded-lg bg-[rgba(255,255,255,0.02)] px-3 py-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-[#00f5ff]" />
                      <p className="text-xs leading-relaxed text-[#ccc]">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-[0.9rem] leading-[1.8] text-[#b0b0b0]">
                <p>
                  I&apos;m open for freelance work — fullstack web, mobile, and backend projects.
                  My experience ranges from HRIS platforms and queue dashboards to mobile
                  operational tools, payment-enabled POS systems, and backend automation.
                </p>
                <p>
                  Whether you need a new system built or an existing one improved, I bridge
                  product thinking with solid technical execution — responsive interfaces,
                  stable data flows, and systems that hold up under real traffic.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-11 rounded-full bg-[#00f5ff] px-6 text-sm font-bold text-[#0a0a0a] shadow-[0_0_25px_rgba(0,245,255,0.25)] hover:shadow-[0_0_40px_rgba(0,245,255,0.35)]">
                  <a href="/cv-download">Download CV</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-[rgba(255,255,255,0.08)] bg-transparent px-6 text-sm font-semibold text-[#e0e0e0] hover:border-[rgba(0,245,255,0.2)] hover:bg-[rgba(0,245,255,0.03)]"
                >
                  <a href="#contact">Contact me</a>
                </Button>
              </div>

              <div className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#00f5ff]/70">
                  Working principles
                </p>
                <div className="mt-4 space-y-2">
                  {principles.map((p, i) => (
                    <div key={p} className="flex items-start gap-3 rounded-lg bg-[rgba(255,255,255,0.02)] px-3 py-2.5">
                      <span className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold text-[#00f5ff]/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs leading-relaxed text-[#ccc]">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Projects — THE HERO SECTION */}
      <section id="projects" className="section-shell">
        <RevealSection>
          <SectionHeading
            label="Projects"
            title="Things I've built."
            description="Each project represents a real problem solved. From finance apps to airport systems — I ship products that work. Open for similar freelance projects."
          />
        </RevealSection>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <RevealSection key={project.title}>
              <ProjectCard {...project} index={i} />
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-shell">
        <RevealSection>
          <SectionHeading
            label="Experience"
            title="Where I've shipped."
            description="A selection of work across product engineering, freelance projects, operational systems, integrations, and deployment support."
          />
        </RevealSection>

        <RevealSection className="mt-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
            <div className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#00f5ff]/60">
                    01
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-syne)] text-xl font-bold text-white">
                    Professional experience
                  </h3>
                </div>
                <span className="hidden rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-2.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.12em] text-[#888] sm:block">
                  Timeline
                </span>
              </div>
              <Experience />
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
                <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#00f5ff]/60">
                  02
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-syne)] text-xl font-bold text-white">
                  Education
                </h3>
                <div className="mt-5"><Education /></div>
              </div>

              <div className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
                <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#00f5ff]/60">
                  Approach
                </p>
                <div className="mt-4 space-y-3 text-sm leading-[1.7] text-[#b0b0b0]">
                  <p>
                    I take freelance projects across the stack — building UIs,
                    integrating APIs, automating deployments, and making systems
                    more reliable.
                  </p>
                  <p>
                    Most of my work comes from real business problems, so I
                    prioritize practical solutions over over-engineering.
                    Let&apos;s talk about your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Skills */}
      <section id="skills" className="section-shell">
        <RevealSection>
          <SectionHeading
            label="Skills"
            title="The stack."
            description="Grouped by where I use them most — from interface work to backend operations and infrastructure."
          />
        </RevealSection>

        <RevealSection className="mt-6">
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] px-5 py-3">
            <Zap className="h-3.5 w-3.5 text-[#00f5ff]" />
            <span className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#00f5ff]/70">
              Primary:
            </span>
            <span className="text-xs text-[#ccc]">
              Laravel · Next.js · NestJS · Go · MySQL · React · Flutter · Expo · PostgreSQL · Docker · Nginx · Tailwind CSS
            </span>
          </div>
        </RevealSection>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealSection key={group.title}>
              <article className="rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] p-5 backdrop-blur-xl transition-all duration-200 hover:border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)]">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#00f5ff]/70">
                    {group.title}
                  </p>
                  <span className="rounded-md bg-[rgba(0,245,255,0.06)] px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.55rem] text-[#00f5ff]/60">
                    {group.projectCount}
                  </span>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-[#999]">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(({ icon: Icon, ...item }) => (
                    <SkillBadge
                      key={item.name}
                      name={item.name}
                      icon={<Icon className="h-3.5 w-3.5" />}
                    />
                  ))}
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-shell">
        <RevealSection>
          <SectionHeading
            label="Contact"
            title="Get in touch."
            description="Looking for a freelance developer? Have a project in mind or need help shipping one? Let's talk."
          />
        </RevealSection>
        <RevealSection className="mt-10">
          <Contact />
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-3 text-xs text-[#888] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Erghi Septiandi Putra.</p>
            <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.2em]">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

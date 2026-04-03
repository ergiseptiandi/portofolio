import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import {
  SiCloudflare,
  SiDocker,
  SiExpo,
  SiFlutter,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  title: string;
  description: string;
  items: SkillItem[];
};

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Core web stack",
    description: "Primary tools for product interfaces, admin systems, and full-stack dashboards.",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend and data",
    description: "Service architecture, integrations, and persistence for production workflows.",
    items: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    ],
  },
  {
    title: "Mobile delivery",
    description: "Cross-platform execution for internal tools and customer-facing mobile products.",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Expo", icon: SiExpo, color: "#1F2937" },
    ],
  },
  {
    title: "Infrastructure",
    description: "Deployment, runtime reliability, and operational support around shipped systems.",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "HRIS Integrated System",
    description:
      "Comprehensive HR management for Persero Batam. Features automated payroll with tax calculation, realtime fingerprint attendance integration, and overtime management.",
    tags: ["Laravel", "MySQL", "Realtime Integration", "Bootstrap"],
    imageUrl: "",
    isPrivate: true,
  },
  {
    title: "Captura Queue Dashboard",
    description:
      "Built and improved a realtime queue dashboard for multiple branches and companies, while optimizing the user interface for a more engaging and fully responsive experience across mobile and desktop.",
    tags: ["Next.js", "Realtime Dashboard", "Responsive UI", "Full Stack"],
    imageUrl: "",
    isPrivate: true,
  },
  {
    title: "Smart POS System",
    description:
      "Full-stack Point of Sale for Candu Roti Bakar. Includes stock management, financial reports (Profit/Loss), and Midtrans QRIS payment integration.",
    tags: ["Laravel", "Flutter", "Midtrans", "MySQL"],
    imageUrl: "",
    isPrivate: true,
  },
  {
    title: "Airport Cargo Mobile",
    description:
      "Mobile acceptance application for Hang Nadim Airport. Scans and integrates package QR codes directly into the central airport system.",
    tags: ["Flutter", "QR Scanning", "API Integration"],
    imageUrl: "",
    isPrivate: true,
  },
  {
    title: "E-Filing Tax System",
    description:
      "Tax Center PBL Project. Optimized tax formulas, session security, and implemented recurring payments via Virtual Accounts.",
    tags: ["Web", "Security", "Payment Gateway"],
    imageUrl: "",
    isPrivate: true,
  },
  {
    title: "Backend Services Portfolio",
    description:
      "Various backend systems for clients including HappyBeauty (E-commerce), Tritunas, and Grand Batam Mall (IG Automation).",
    tags: ["NestJS", "PostgreSQL", "Automation"],
    imageUrl: "",
    isPrivate: true,
  },
  {
    title: "DevOps Automation & Odoo Migration",
    description:
      "Implemented GitLab CI/CD auto-deployment workflows, configured Docker services for automatic recovery after server outages, and migrated an Odoo application from a cloud server to an internal server without data loss.",
    tags: ["GitLab CI/CD", "Docker", "Odoo", "DevOps"],
    imageUrl: "",
    isPrivate: true,
  },
];

const principles = [
  "Fast implementation without sacrificing structure",
  "Interfaces that stay usable across desktop and mobile",
  "Backends designed for integrations and business workflows",
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <section id="about" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.75fr)_minmax(0,1.25fr)]">
          <div className="surface-card flex flex-col justify-between gap-8 p-6 sm:p-8">
            <div className="space-y-6">
              <div className="surface-panel flex items-center justify-between px-4 py-3">
                <p className="section-label text-[0.68rem]">Profile snapshot</p>
                <span className="rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Available for hire
                </span>
              </div>

              <div className="surface-panel flex w-full aspect-[4/3] items-center justify-center rounded-[2rem] border-dashed border-primary/25 bg-primary/6 lg:aspect-square">
                <div className="text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
                    EP
                  </p>
                  <p className="mt-3 text-5xl font-semibold text-primary">01</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="surface-panel px-4 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Role
                </p>
                <p className="mt-2 text-lg font-semibold">Full-stack developer</p>
              </div>
              <div className="surface-panel px-4 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold">Web, Mobile Apps, Backend</p>
              </div>
              <div className="surface-panel px-4 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Based in
                </p>
                <p className="mt-2 text-lg font-semibold">Batam, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-6 sm:p-8 lg:p-10">
            <SectionHeading
              label="Profile"
              title="Erghi Septiandi Putra"
              description="A full-stack developer with hands-on experience delivering internal systems, customer-facing interfaces, backend services, mobile workflows, and deployment automation."
            />

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-5 text-[0.98rem] leading-7 text-muted-foreground">
                <p>
                  I build complete solutions from planning to production. My work ranges
                  from HRIS platforms and queue dashboards to mobile operational tools,
                  payment-enabled POS systems, and backend automation for client products.
                </p>
                <p>
                  The strongest part of my process is connecting product experience with
                  implementation detail. I care about responsive interfaces, stable data
                  flows, and shipping systems that still feel clear when they grow.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-11 rounded-full px-6 text-sm font-semibold shadow-[0_18px_45px_-24px_rgba(39,83,214,0.56)]"
                  >
                    <a href="/cv.html" target="_blank" rel="noreferrer">
                      Download CV (ATS)
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-border/70 bg-background/70 px-6 text-sm font-semibold hover:bg-background"
                  >
                    <a href="#contact">Contact me</a>
                  </Button>
                </div>
              </div>

              <div className="surface-panel p-5">
                <p className="section-label text-[0.68rem]">Working principles</p>
                <div className="mt-5 space-y-3">
                  {principles.map((principle, index) => (
                    <div key={principle} className="surface-panel px-4 py-4">
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/88">
                        {principle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell">
        <SectionHeading
          label="Experience"
          title="Product delivery across internal tools, mobile apps, and backend systems."
          description="A selection of work that reflects my range across product engineering, operational systems, integrations, and deployment support."
        />

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          <div className="surface-card p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="section-label text-[0.68rem]">01</p>
                <h3 className="mt-2 text-2xl font-semibold">Professional experience</h3>
              </div>
              <div className="hidden rounded-full border border-border/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground sm:block">
                Timeline
              </div>
            </div>
            <Experience />
          </div>

          <div className="space-y-8">
            <div className="surface-card p-6 sm:p-8">
              <div className="mb-6">
                <p className="section-label text-[0.68rem]">02</p>
                <h3 className="mt-2 text-2xl font-semibold">Education</h3>
              </div>
              <Education />
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="section-label text-[0.68rem]">Approach</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  I am comfortable moving between user-facing polish and backend depth:
                  refining interfaces, integrating external systems, automating deployments,
                  and improving day-to-day operational reliability.
                </p>
                <p>
                  Most of my work is shaped by practical business problems, so I prefer
                  solutions that stay maintainable under real constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <SectionHeading
          label="Skills"
          title="A focused stack for shipping full products, not isolated features."
          description="Grouped by the areas where I use them most often, from interface work to backend operations and infrastructure."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-6 sm:p-7">
              <div className="mb-6 space-y-3">
                <p className="section-label text-[0.68rem]">{group.title}</p>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map(({ icon: Icon, ...item }) => (
                  <SkillBadge
                    key={item.name}
                    name={item.name}
                    color={item.color}
                    icon={<Icon className="h-4 w-4" />}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionHeading
          label="Projects"
          title="Selected systems built for operations, commerce, and internal workflows."
          description="These projects show the range of products I have delivered, from operational dashboards to mobile systems and backend automation."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell">
        <SectionHeading
          label="Contact"
          title="Have a project in mind or need help shipping one?"
          description="Send a short brief, product idea, or implementation problem. I can help across frontend, backend, mobile, and deployment work."
        />
        <div className="mt-10">
          <Contact />
        </div>
      </section>

      <footer className="mt-10 border-t border-border/60 bg-background/78 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Erghi Septiandi Putra.</p>
            <p className="font-mono text-xs uppercase tracking-[0.24em]">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

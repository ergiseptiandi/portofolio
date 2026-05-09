"use client";

import { Globe, Smartphone, Server, Cloud, Workflow, Code, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web apps with Next.js, Laravel, NestJS. From landing pages to complex admin dashboards.",
    tags: ["Next.js", "Laravel", "NestJS", "TypeScript", "Tailwind"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps with Flutter & Expo. Biometric auth, GPS, QR scanning, push notifications.",
    tags: ["Flutter", "Expo", "React Native", "Firebase"],
  },
  {
    icon: Server,
    title: "API & Backend",
    description:
      "RESTful APIs & microservices with Go, NestJS, Node.js. Payment integration (Midtrans QRIS/VA), WhatsApp Gateway, webhooks.",
    tags: ["Go", "NestJS", "Node.js", "REST", "Microservices"],
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description:
      "Docker containerization, CI/CD pipelines (GitLab/GitHub Actions), Nginx reverse proxy, server migration.",
    tags: ["Docker", "CI/CD", "Nginx", "GitLab", "GitHub Actions"],
  },
  {
    icon: Workflow,
    title: "System Integration",
    description:
      "Connect existing systems: WhatsApp API, payment gateways, fingerprint devices, Odoo ERP, Oracle databases.",
    tags: ["WhatsApp API", "Payments", "Odoo ERP", "Oracle"],
  },
  {
    icon: Code,
    title: "Consulting & Audit",
    description:
      "Code review, architecture planning, performance optimization. Fix what's already running.",
    tags: ["Code Review", "Architecture", "Optimization"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 transition-all duration-300 hover:border-[rgba(0,245,255,0.2)] hover:shadow-[0_0_40px_-12px_rgba(0,245,255,0.12)]"
    >
      {/* Icon */}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.06)]">
        <Icon className="h-5 w-5 text-[#00f5ff]" />
      </div>

      {/* Title */}
      <h3 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#00f5ff]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-[1.7] text-[#b0b0b0]">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-2.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.1em] text-[#888]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

const Services = () => {
  return (
    <section id="services" className="section-shell scroll-mt-20">
      <div className="space-y-12">
        {/* Section heading */}
        <RevealSection>
          <SectionHeading
            label="Services"
            title="What I do."
            description="Full-stack freelance services — from concept to production."
          />
        </RevealSection>

        {/* Service cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA card — full width */}
        <RevealSection>
          <motion.a
            href="#contact"
            className="group relative flex items-center justify-between gap-4 rounded-2xl border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.04)] px-8 py-7 transition-all duration-300 hover:border-[rgba(0,245,255,0.35)] hover:shadow-[0_0_60px_-15px_rgba(0,245,255,0.15)] sm:px-10 sm:py-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <p className="font-[family-name:var(--font-jetbrains)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#00f5ff]">
                Start a project
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-syne)] text-xl font-extrabold text-white sm:text-2xl">
                Have a project in mind?
              </h3>
              <p className="mt-1 text-sm text-[#b0b0b0]">
                Let&apos;s talk about your next idea. I&apos;m available for
                freelance work.
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(0,245,255,0.2)] bg-[rgba(0,245,255,0.06)] transition-all duration-300 group-hover:bg-[#00f5ff] group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]">
              <ArrowRight className="h-5 w-5 text-[#00f5ff] transition-colors duration-300 group-hover:text-[#0a0a0a]" />
            </div>
          </motion.a>
        </RevealSection>
      </div>
    </section>
  );
};

export default Services;

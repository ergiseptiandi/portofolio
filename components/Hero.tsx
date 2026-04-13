"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, BriefcaseBusiness, Download, Layers3, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const capabilityCards = [
  {
    title: "Frontend systems",
    description: "Responsive product interfaces with clear hierarchy and reliable states.",
    icon: Layers3,
  },
  {
    title: "Backend delivery",
    description: "Laravel and NestJS services built for scale, integrations, and operations.",
    icon: Server,
  },
  {
    title: "Mobile execution",
    description: "Flutter and Expo apps with pragmatic product workflows and release speed.",
    icon: Smartphone,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4.5rem)] scroll-mt-28 pt-6 md:pt-10"
    >
      <div className="section-shell flex min-h-[calc(100vh-4.5rem)] items-center py-8 md:py-10">
        <div className="surface-card relative w-full overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
          <div className="absolute right-6 top-6 hidden h-28 w-28 rounded-full border border-primary/12 bg-primary/8 blur-2xl lg:block" />

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="surface-panel inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/80">
                    <BriefcaseBusiness className="h-4 w-4 text-primary" />
                    Available for freelance and product work
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    <Building2 className="h-4 w-4" />
                    Currently at PT Persero Batam
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="section-label">Full-stack developer based in Batam</p>
                  <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-[4.6rem]">
                    Building web, mobile, and backend systems that feel{" "}
                    <span className="text-primary">calm</span> under real traffic.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    I design and ship complete product systems across Laravel, Next.js,
                    NestJS, Flutter, Expo mobile, and deployment workflows, with a strong
                    focus on responsive UX and dependable delivery.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full px-7 text-sm font-semibold shadow-[0_18px_45px_-24px_rgba(39,83,214,0.6)]"
                >
                  <a href="#projects">
                    View selected work
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-border/70 bg-background/70 px-7 text-sm font-semibold hover:bg-background"
                >
                  <a href="/cv-download">
                    Download CV
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Quick stats for HRD scanning */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="surface-panel px-4 py-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Experience
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-primary">1+ yr</p>
                  <p className="mt-1 text-xs text-muted-foreground">at current company</p>
                </div>
                <div className="surface-panel px-4 py-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Delivered
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-primary">10+</p>
                  <p className="mt-1 text-xs text-muted-foreground">production systems</p>
                </div>
                <div className="surface-panel px-4 py-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Coding
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-primary">3+ yrs</p>
                  <p className="mt-1 text-xs text-muted-foreground">development experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="surface-panel relative overflow-hidden p-5 sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="section-label text-[0.68rem]">Capability stack</p>
                  <h2 className="text-2xl font-semibold sm:text-[2rem]">
                    End-to-end delivery without handoff friction.
                  </h2>
                </div>

                <div className="space-y-3">
                  {capabilityCards.map(({ title, description, icon: Icon }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.22 + index * 0.08 }}
                      className="surface-panel flex items-start gap-4 px-4 py-4"
                    >
                      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-semibold">{title}</p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="surface-panel grid gap-4 px-4 py-4 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Core stack
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/85">
                      Laravel, Next.js, NestJS, Flutter, PostgreSQL, Docker
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Working style
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/85">
                      Product-minded delivery, quick iteration, and implementation detail.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

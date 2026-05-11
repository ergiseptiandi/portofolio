"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Process", href: "#process", id: "process" },
  { name: "Contact", href: "#contact", id: "contact" },
] as const;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<(typeof NAV_LINKS)[number]["id"]>("home");
  const [scrolled, setScrolled] = useState(false);
  const lockedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (lockedRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as (typeof NAV_LINKS)[number]["id"]);
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: (typeof NAV_LINKS)[number]["id"]) => {
    lockedRef.current = true;
    setActiveSection(id);
    clearTimeout(timerRef.current ?? undefined);
    timerRef.current = setTimeout(() => {
      lockedRef.current = false;
    }, 1200);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 hidden md:block">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={cn(
            "mt-4 flex h-14 items-center justify-between rounded-full border px-4 transition-all duration-300",
            scrolled
              ? "border-border bg-background/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="#home"
            className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-foreground"
          >
            Erghi<span className="text-primary">.</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              <a href="https://github.com/ergiseptiandi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
            >
              <a href="mailto:ergiputra321@gmail.com">
                <Mail className="h-3.5 w-3.5" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Profile", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof NAV_LINKS)[number]["id"]>("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (element): element is HTMLElement => Boolean(element)
    );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id as (typeof NAV_LINKS)[number]["id"]);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeMenu = () => setIsOpen(false);

    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, [isOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="surface-panel flex h-14 items-center justify-between rounded-full px-3 sm:px-4">
          <Link
            href="#home"
            className="rounded-full px-3 py-2 font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            Erghi
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/8"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  ) : null}
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
              className="rounded-full text-muted-foreground hover:bg-background hover:text-foreground"
            >
              <a href="https://github.com/ergiseptiandi" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="h-10 rounded-full px-5 text-sm font-semibold shadow-[0_16px_38px_-24px_rgba(39,83,214,0.56)]"
            >
              <a href="mailto:ergiputra321@gmail.com">
                <Mail className="h-4 w-4" />
                Hire me
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-full text-muted-foreground hover:bg-background hover:text-foreground"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "px-1 pt-3 transition-all duration-200 lg:hidden",
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <div
            className={cn(
              "surface-card overflow-hidden p-2 transition-all duration-200",
              isOpen ? "translate-y-0" : "-translate-y-2"
            )}
          >
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    activeSection === link.id
                      ? "bg-foreground/8 text-foreground"
                      : "text-muted-foreground hover:bg-background hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-2 border-t border-border/60 px-2 pt-4">
              <Button asChild className="h-11 w-full rounded-full text-sm font-semibold">
                <a href="mailto:ergiputra321@gmail.com">
                  <Mail className="h-4 w-4" />
                  Start a conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

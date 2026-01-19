"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      
      // Default to home if near top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass mt-4 flex h-16 items-center justify-between rounded-full px-6 transition-all">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground/90 hover:text-primary transition-colors">
              Portfolio
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1 relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors z-10",
                      isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>


          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <a href="https://github.com/ergiseptiandi" target="_blank" rel="noopener noreferrer">
                   <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full gap-2 border-primary/20 hover:bg-primary/10">
                <a href="mailto:ergiputra321@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span>Hire Me</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "absolute left-0 right-0 top-24 mx-4 p-4 transition-all duration-300 ease-in-out md:hidden",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="glass rounded-2xl p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
             <div className="flex justify-between items-center px-4">
                <span className="text-sm font-medium">Switch Theme</span>
                <ThemeToggle />
             </div>
             <Button asChild className="w-full rounded-full bg-primary/20 text-foreground hover:bg-primary/30 border border-primary/20">
              <a href="mailto:ergiputra321@gmail.com">
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

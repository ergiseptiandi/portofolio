"use client";

import { cn } from "@/lib/utils";
import { Briefcase, Home, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Home", href: "#home", id: "home", icon: Home },
  { name: "Projects", href: "#projects", id: "projects", icon: Briefcase },
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
] as const;

const BottomNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const update = () => {
      const pos = window.scrollY + 200;
      const current = sections.reduce((a, s) =>
        s.offsetTop <= pos ? s : a, sections[0]);
      setActive(current.id);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden">
      <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#0a0a0a]/80 px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 rounded-full px-4 py-2 text-[0.6rem] font-medium transition-colors duration-200",
                isActive ? "text-[#00f5ff]" : "text-[#888] hover:text-[#ccc]"
              )}
            >
              {isActive && (
                <span className="absolute inset-0 -z-10 rounded-full bg-[#00f5ff]/[0.08]" />
              )}
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

"use client";

import { cn } from "@/lib/utils";
import { Briefcase, Home, Mail, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { name: "Home", href: "#home", id: "home", icon: Home },
  { name: "Projects", href: "#projects", id: "projects", icon: Briefcase },
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
] as const;

const BottomNav = () => {
  const [active, setActive] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observerRef.current!.observe(section));

    return () => observerRef.current?.disconnect();
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

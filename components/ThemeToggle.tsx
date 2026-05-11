"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ compact }: { compact?: boolean }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "rounded-full hover:bg-primary/10 transition-colors",
        compact ? "h-7 w-7" : "h-9 w-9"
      )}
    >
      <Sun className={cn(
        "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
        compact ? "h-3.5 w-3.5" : "h-[1.2rem] w-[1.2rem]"
      )} />
      <Moon className={cn(
        "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
        compact ? "h-3.5 w-3.5" : "h-[1.2rem] w-[1.2rem]"
      )} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

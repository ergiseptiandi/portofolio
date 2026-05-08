"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "Builder", "DevOps Engineer", "Shipper"];

const useTypewriter = (words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, start };
};

const stats = [
  { end: 10, suffix: "+", label: "Production systems" },
  { end: 3, suffix: "+", label: "Years building" },
  { end: 5, suffix: "+", label: "Production stacks" },
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const typed = useTypewriter(roles);

  const counter0 = useCounter(stats[0].end);
  const counter1 = useCounter(stats[1].end);
  const counter2 = useCounter(stats[2].end);
  const counters = [counter0, counter1, counter2];

  useEffect(() => {
    const timer = setTimeout(() => {
      counter0.start();
      counter1.start();
      counter2.start();
    }, 800);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen scroll-mt-20">
      <motion.div
        style={{ y, opacity }}
        className="section-shell flex min-h-screen items-center"
      >
        <div className="w-full space-y-12">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/20 bg-[#00f5ff]/[0.06] px-3 py-1.5 font-[family-name:var(--font-jetbrains)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#00f5ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff] animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Hero text */}
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="section-label">Full-stack developer — Batam, ID</p>
              <h1 className="font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-[6rem]">
                I build things
                <br />
                that{" "}
                <span className="text-[#00f5ff]">ship</span>.
              </h1>
              <div className="flex items-center gap-2 text-xl text-[#b0b0b0] sm:text-2xl">
                <span className="font-[family-name:var(--font-jetbrains)] text-[#00f5ff]">&gt;</span>
                <span>{typed}</span>
                <span className="inline-block w-[2px] h-6 animate-pulse bg-[#00f5ff]" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-base leading-[1.8] text-[#b0b0b0] sm:text-lg"
            >
              Web, mobile, and backend systems — from architecture to
              deployment. I obsess over clean implementation and
              production reliability.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-[#00f5ff] px-7 text-sm font-bold text-[#0a0a0a] shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(0,245,255,0.4)]"
            >
              <a href="#projects">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-[rgba(255,255,255,0.1)] bg-transparent px-7 text-sm font-semibold text-[#e0e0e0] hover:border-[rgba(0,245,255,0.3)] hover:bg-[rgba(0,245,255,0.05)]"
            >
              <a href="/cv-download">
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-6 border-t border-[rgba(255,255,255,0.06)] pt-8 sm:gap-10"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-[family-name:var(--font-syne)] text-3xl font-extrabold text-[#00f5ff] sm:text-4xl">
                  {counters[i].count}{stat.suffix}
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.2em] text-[#888]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

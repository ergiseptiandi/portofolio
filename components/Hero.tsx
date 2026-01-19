"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Database, Layout, Smartphone } from "lucide-react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 lg:py-32">
      {/* Decorative blobs are now handled by AnimatedBackground globally */}

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            className="flex flex-col justify-center space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary backdrop-blur-md border border-primary/20"
              >
                Available for freelance work
              </motion.div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 min-h-[120px] sm:min-h-[160px] lg:min-h-[200px]">
                <Typewriter
                  options={{
                    strings: ['Fullstack Developer', 'Laravel & Next.js Expert', 'Mobile Apps with Flutter', 'Backend with NestJS'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                    cursor: "<span class='text-primary'>|</span>",
                  }}
                />
              </h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                I build robust and scalable full-stack applications for Web and Mobile used Laravel, Next.js, NestJS, and Flutter.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button asChild size="lg" className="rounded-full text-base h-12 px-8 shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base h-12 px-8 glass border-primary/20 hover:bg-primary/5 transition-transform hover:scale-105">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile-optimized container: Stacks on very small screens, preserves 3D layout on larger mobile/desktop */}
            <div className="relative h-[400px] w-full max-w-[350px] sm:w-[400px] perspective-1000">
              
              {/* Card 1: Frontend */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 lg:right-0 w-[240px] sm:w-[280px] glass-card transform rotate-6 z-10 p-6 flex flex-col justify-between left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Frontend</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, Tailwind</p>
                </div>
              </motion.div>
              
              {/* Card 2: Backend */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-24 right-4 lg:top-8 lg:right-8 w-[240px] sm:w-[280px] glass-card transform -rotate-6 z-0 bg-secondary/30 p-6 flex flex-col justify-between opacity-80 scale-95 origin-bottom-right left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto"
              >
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                   <Database className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Backend</h3>
                  <p className="text-sm text-muted-foreground">Laravel, NestJS, PostgreSQL</p>
                </div>
              </motion.div>

               {/* Card 3: Mobile & Web */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute top-48 right-8 lg:top-16 lg:right-16 w-[240px] sm:w-[280px] glass-card transform rotate-3 lg:rotate-12 z-20 p-6 flex flex-col justify-between shadow-2xl border-primary/30 mt-0 ml-0 lg:-mr-12 lg:mt-24 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto"
              >
                 <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                   <Smartphone className="h-6 w-6 text-accent-foreground" />
                 </div>
                 <div className="space-y-2">
                    <div className="h-2 w-1/2 rounded bg-foreground/10" />
                    <div className="h-2 w-3/4 rounded bg-foreground/10" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold">Web & Mobile</h3>
                   <p className="text-sm text-muted-foreground">Flutter, Next.js, Laravel</p>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

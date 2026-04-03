"use client";

import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Primary Blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 dark:opacity-20"
      />

      {/* Secondary Blob */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] opacity-50 dark:opacity-20"
      />

      {/* Accent Blob */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-40 dark:opacity-10"
      />
      
      {/* Connecting Line (simulated with standard div for now, will be part of scroll animation) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
};

export default AnimatedBackground;

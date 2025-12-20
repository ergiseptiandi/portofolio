"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollFlow = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-4 top-0 bottom-0 w-1 bg-primary/20 origin-top z-40 hidden md:block"
      style={{ scaleY }}
    >
      <div className="absolute bottom-0 left-[-4px] w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
    </motion.div>
  );
};

export default ScrollFlow;

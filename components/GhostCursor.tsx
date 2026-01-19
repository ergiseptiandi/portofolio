"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

interface GhostCursorProps {
  children: React.ReactNode;
  className?: string;
}

const GhostCursor = ({ children, className }: GhostCursorProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: isHovered ? "none" : "auto" }} // Optional: Hide default cursor
    >
      {/* Ghost Cursor */}
      <motion.div
        className="pointer-events-none absolute h-6 w-6 rounded-full border-2 border-primary bg-primary/20 backdrop-blur-sm z-50 mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
      />
      
      {/* Trailing effect (Optional second dot) */}
       <motion.div
        className="pointer-events-none absolute h-32 w-32 rounded-full bg-primary/20 blur-[40px] z-40"
        style={{
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 0.5 : 0,
        }}
      />

      {children}
    </div>
  );
};

export default GhostCursor;

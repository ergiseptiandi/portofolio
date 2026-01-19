"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PandaProps {
  isCoveringEyes: boolean;
}

const Panda = ({ isCoveringEyes }: PandaProps) => {
  const [isBlinking, setIsBlinking] = useState(false);

  // Auto blinking effect when not covering eyes
  useEffect(() => {
    if (isCoveringEyes) return;

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, [isCoveringEyes]);

  return (
    <div className="relative w-32 h-32 mx-auto -mb-12 z-20">
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
        {/* Ears */}
        <circle cx="35" cy="40" r="12" fill="#333" />
        <circle cx="85" cy="40" r="12" fill="#333" />

        {/* Face */}
        <circle cx="60" cy="70" r="35" fill="white" stroke="#333" strokeWidth="2" />

        {/* Eye Patches */}
        <ellipse cx="45" cy="65" rx="10" ry="14" fill="#333" transform="rotate(30 45 65)" />
        <ellipse cx="75" cy="65" rx="10" ry="14" fill="#333" transform="rotate(-30 75 65)" />

        {/* Eyes (Balls) - Hidden if blinking or covered */}
        {!isBlinking && !isCoveringEyes && (
          <>
            <motion.circle cx="48" cy="63" r="3" fill="white" layoutId="eyeLeft" />
            <motion.circle cx="72" cy="63" r="3" fill="white" layoutId="eyeRight" />
          </>
        )}

        {/* Closed Eyes (Eyelids) - Visible if blinking */}
        {isBlinking && !isCoveringEyes && (
          <>
            <path d="M 40 68 Q 45 70 50 68" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 70 68 Q 75 70 80 68" stroke="white" strokeWidth="2" fill="none" />
          </>
        )}

        {/* Nose */}
        <ellipse cx="60" cy="78" rx="4" ry="3" fill="#333" />

        {/* Mouth */}
        <path d="M 55 85 Q 60 88 65 85" stroke="#333" strokeWidth="2" fill="none" />

        {/* Hands - Animate in to cover eyes */}
        <motion.g
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: isCoveringEyes ? -20 : 0, opacity: isCoveringEyes ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
             {/* Left Hand Paws */}
            <circle cx="45" cy="100" r="12" fill="#333" />
            <ellipse cx="45" cy="95" rx="5" ry="4" fill="#555" />
            
            {/* Right Hand Paws */}
            <circle cx="75" cy="100" r="12" fill="#333" />
             <ellipse cx="75" cy="95" rx="5" ry="4" fill="#555" />
        </motion.g>
      </svg>
    </div>
  );
};

export default Panda;

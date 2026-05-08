"use client";

import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full blur-[120px] transition-opacity duration-300"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default CursorGlow;

"use client";

import { useEffect, useRef } from "react";

const SplashCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Resize handler
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    resize();

    // Pointer tracking
    const pointer = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      moved: false,
    };

    window.addEventListener("mousemove", (e) => {
      pointer.moved = true;
      pointer.vx = (e.clientX - pointer.x) * 0.1; // velocity
      pointer.vy = (e.clientY - pointer.y) * 0.1;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    });

    // Splats (Fluid-like particles)
    const splats: any[] = [];
    const colors = ["#FF2D20", "#000000", "#E0234E", "#02569B", "#61DAFB"]; // Brand colors

    class Splat {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      life: number;
      decay: number;

      constructor(x: number, y: number, vx: number, vy: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = Math.random() * 20 + 20; // Big radius for blending
        this.color = color;
        this.life = 1.0;
        this.decay = Math.random() * 0.01 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.92; // Friction
        this.vy *= 0.92;
        this.life -= this.decay;
        this.radius *= 0.96; // Shrink
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Use globalAlpha for fade out
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    // Animation Loop
    let animationFrameId: number;
    let lastX = pointer.x;
    let lastY = pointer.y;

    const render = () => {
      // Fade out previous frame to create trails
      // ctx.clearRect(0, 0, width, height); // To clear completely
      // OR use a semi-transparent fill for trails
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Fade color (white/background) - Adjust for dark mode?
      // Actually clear rect is better for a clean splash overlay
      ctx.clearRect(0, 0, width, height); 

      // Spawn new splats on significant movement
      const dist = Math.hypot(pointer.x - lastX, pointer.y - lastY);
      if (pointer.moved && dist > 5) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        // Spawn more particles for "liquid" feel
        for (let i = 0; i < 2; i++) {
           splats.push(new Splat(
            pointer.x, 
            pointer.y, 
            pointer.vx * 0.5 + (Math.random() - 0.5) * 2, 
            pointer.vy * 0.5 + (Math.random() - 0.5) * 2, 
            color
          ));
        }
        lastX = pointer.x;
        lastY = pointer.y;
      }

      // Update and draw splats
      for (let i = splats.length - 1; i >= 0; i--) {
        const s = splats[i];
        s.update();
        s.draw(ctx);
        if (s.life <= 0 || s.radius <= 0) {
          splats.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]" style={{ filter: "url(#goo)" }}>
      <canvas ref={canvasRef} className="w-full h-full opacity-70" />
      {/* SVG Filter for Gooey Effect */}
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default SplashCursor;

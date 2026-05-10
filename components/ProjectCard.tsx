"use client";

import { ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  index?: number;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
  isPrivate = false,
  index = 0,
  featured = false,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
    setGlare({ x: x * 100, y: y * 100, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  if (featured) {
    return (
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative col-span-full rounded-2xl border border-[rgba(0,245,255,0.15)] bg-[rgba(255,255,255,0.03)] p-8 transition-shadow duration-300 hover:border-[rgba(0,245,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(0,245,255,0.15)] sm:p-10"
        style={{ transform, transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
      >
        {/* Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0,245,255,${glare.opacity}), transparent 60%)`,
          }}
        />
        <div className="relative z-10">
          {imageUrl && (
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(0,245,255,0.03)]">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
            </div>
          )}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.3em] text-[#00f5ff]/60">
                Featured · {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-extrabold text-white sm:text-3xl">
                {title}
              </h3>
            </div>
            {isPrivate && (
              <span className="flex items-center gap-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.12em] text-[#888]">
                <Lock className="h-2.5 w-2.5" />
                Private
              </span>
            )}
          </div>
          <p className="mb-6 max-w-2xl text-sm leading-[1.8] text-[#b0b0b0] sm:text-base">
            {description}
          </p>
          <div className="mb-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[rgba(0,245,255,0.12)] bg-[rgba(0,245,255,0.04)] px-2.5 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.1em] text-[#00f5ff]/80"
              >
                {tag}
              </span>
            ))}
          </div>
          {!isPrivate && (githubUrl || demoUrl) && (
            <div className="flex items-center gap-4 border-t border-[rgba(255,255,255,0.06)] pt-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#888] transition-colors hover:text-[#00f5ff]"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#888] transition-colors hover:text-[#00f5ff]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full flex-col rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 transition-all duration-300 hover:border-[rgba(0,245,255,0.2)] hover:shadow-[0_0_40px_-12px_rgba(0,245,255,0.12)]"
      style={{ transform, transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
    >
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0,245,255,${glare.opacity}), transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col">
          {imageUrl && (
            <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(0,245,255,0.03)]">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent" />
            </div>
          )}
          <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.3em] text-[#00f5ff]/50">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-syne)] text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#00f5ff]">
              {title}
            </h3>
          </div>
          {isPrivate && (
            <span className="flex items-center gap-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.55rem] uppercase tracking-[0.1em] text-[#888]">
              <Lock className="h-2.5 w-2.5" />
              Private
            </span>
          )}
        </div>

        <p className="mb-5 flex-1 text-sm leading-[1.7] text-[#b0b0b0]">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.1em] text-[#888]"
            >
              {tag}
            </span>
          ))}
        </div>

        {!isPrivate && (githubUrl || demoUrl) && (
          <div className="flex items-center gap-4 border-t border-[rgba(255,255,255,0.05)] pt-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#888] transition-colors hover:text-[#00f5ff]"
              >
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#888] transition-colors hover:text-[#00f5ff]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

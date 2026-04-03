import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
  isPrivate = false,
}: ProjectCardProps) => {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative h-44 w-full bg-gradient-to-br from-primary/10 via-background to-accent/10">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-end justify-between px-6 py-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Project
                </p>
                <p className="mt-2 text-3xl font-semibold text-foreground/80">
                  {isPrivate ? "Private" : "Public"}
                </p>
              </div>
              <div className="rounded-full border border-border/60 bg-background/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Case
              </div>
            </div>
          )}

          {isPrivate ? (
            <div className="absolute right-4 top-4">
              <Badge className="gap-1.5 rounded-full bg-foreground text-background">
                <Lock className="h-3.5 w-3.5" />
                Private
              </Badge>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold transition-colors duration-200 group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {!isPrivate && (githubUrl || demoUrl) ? (
          <div className="mt-auto flex items-center gap-4 border-t border-border/60 pt-6 text-sm">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            ) : null}
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;

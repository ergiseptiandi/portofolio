import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
  delay?: number;
}

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, demoUrl, isPrivate = false, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.001 }}
      className="h-full"
    >
      <div className={`group relative h-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-zinc-300 dark:hover:border-white/20 shadow-sm hover:shadow-lg ${!isPrivate ? 'dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]' : 'cursor-not-allowed opacity-80'}`}>
        
        {/* Lighting Effect */}
        {!isPrivate && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}

        <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800/50">
          {imageUrl ? (
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className={`object-cover transition-transform duration-700 ${!isPrivate ? 'group-hover:scale-110' : ''}`}
            />
          ) : (
            <div className={`h-full w-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 ${!isPrivate && 'group-hover:scale-105 transition-transform duration-500'}`}>
               <span className="text-4xl">{isPrivate ? '🔒' : '💡'}</span>
            </div>
          )}
          
          {isPrivate && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm font-medium">
                <Lock className="h-3.5 w-3.5" />
                Private Project
              </Badge>
            </div>
          )}
        </div>

        <div className="flex flex-col p-6 h-[calc(100%-12rem)]">
          <div className="mb-4">
            <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors text-xs py-0.5 text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {!isPrivate && (
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-white/5">
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
                {demoUrl && (
                  <a 
                    href={demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors ml-auto"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, demoUrl, delay = 0 }: ProjectCardProps) => {
  return (
    <Card className="glass-card overflow-hidden h-full flex flex-col group animate-in fade-in-up duration-700 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none" style={{ animationDelay: `${delay}ms` }}>
      {imageUrl ? (
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
             {githubUrl && (
                <Button size="icon" variant="ghost" className="rounded-full bg-background/80 hover:bg-background h-10 w-10" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {demoUrl && (
                <Button size="icon" variant="ghost" className="rounded-full bg-background/80 hover:bg-background h-10 w-10" asChild>
                   <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
          </div>
        </div>
      ) : (
         <div className="h-48 w-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
            <span className="text-4xl">🚀</span>
         </div>
      )}
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-background/30 border-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-border/50 pt-4 mt-auto">
        {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              <Github className="h-4 w-4" /> Code
            </a>
        )}
        {demoUrl && (
             <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

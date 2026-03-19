"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import projectsData from "../../../our-projects.json";
import ProjectDrawer from "@/components/ui/ProjectDrawer";

const AsteriskIcon = ({ className }: { className?: string }) => (
  <svg 
    width="100" 
    height="100" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={cn("text-primary", className)}
  >
    <path 
      d="M50 10V90M21.7 21.7L78.3 78.3M10 50H90M21.7 78.3L78.3 21.7" 
      stroke="currentColor" 
      strokeWidth="18" 
      strokeLinecap="round"
    />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="hidden md:block py-0 md:py-12 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-muted/40 dark:bg-muted/10 border border-foreground/5 dark:border-white/5 rounded-[4rem] p-8 md:p-20 shadow-inner dark:shadow-none relative flex flex-col">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight uppercase">
            Our Projects
          </h2>
          <p className="max-w-xs text-foreground/70 dark:text-foreground/60 text-sm md:text-base font-medium leading-tight md:text-right">
            Here&apos;s our range of projects that showcase our tools and capabilities.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-wrap justify-center gap-12 mb-24">
          {projectsData.map((project: { id: string, title?: string, name?: string, description: string, seed: string, variant: string, imageHint?: string, imageFile?: string }) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "w-full sm:w-[340px] h-[430px] rounded-[1.75rem] p-1 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group/card",
                project.variant === "card-green" && "bg-card dark:bg-muted/10 border-[3.5px] border-secondary",
                project.variant === "green-solid" && "bg-secondary border-[3.5px] border-secondary shadow-lg shadow-secondary/20",
                project.variant === "card-purple" && "bg-card dark:bg-muted/10 border-[3.5px] border-primary"
              )}
            >
              {/* Top Section: Text & Icon */}
              <div className="p-8 pb-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={cn(
                    "text-4xl font-black leading-[0.85] uppercase tracking-tighter whitespace-pre-line",
                    project.variant === "green-solid" ? "text-secondary-foreground" : "text-foreground"
                  )}>
                    {project.title || project.name}
                  </h3>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover/card:scale-110 shadow-lg",
                    project.variant === "green-solid" ? "bg-background text-foreground" : "bg-primary text-primary-foreground"
                  )}>
                    <Search className="w-6 h-6" />
                  </div>
                </div>
                <p className={cn(
                  "text-[16px] font-bold leading-snug mb-4 max-w-[240px]",
                  project.variant === "green-solid" ? "text-secondary-foreground/80" : "text-foreground/80"
                )}>
                  {project.description}
                </p>
              </div>

              {/* Bottom Section: Illustration Area */}
              <div className="px-6 pb-6 mt-auto">
                <div className="h-44 rounded-[1.25rem] relative overflow-hidden group shadow-sm bg-muted/50 dark:bg-background/40">
                  <Image 
                    src={project.imageFile ? `/top-projects-preview/${project.imageFile}` : `https://picsum.photos/seed/${project.seed || 'fallback'}/600/400`}
                    alt={project.title || project.name || "OFFGRID HQ Project Showcase"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  
                  {/* View Specs Overlay */}
                  <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <span className="bg-foreground text-background text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">VIEW SPECS_</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="flex flex-col items-center justify-center gap-12 py-12 relative text-center">
          
          <div className="space-y-10 w-full max-w-5xl group/cta">
            <h2 className="text-2xl sm:text-4xl md:text-[3.25rem] font-black tracking-tighter leading-[1.15] text-foreground uppercase flex flex-col items-center gap-4 md:gap-6 cursor-default">
              <span className="flex items-center justify-center flex-wrap gap-x-3 md:gap-x-4">
                <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:text-primary">KEEP</span>
                
                <span className="inline-block px-8 py-1 border-[3.5px] border-secondary rounded-full align-middle text-foreground transition-all duration-300 hover:-rotate-2 hover:scale-105 hover:-translate-y-2 hover:bg-secondary hover:text-secondary-foreground hover:shadow-[6px_6px_0_0_currentColor]">
                   CREATING
                </span>
                
                <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:text-primary">UNTIL</span>
                <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:text-primary">YOU</span>
              </span>
              
              <span className="flex items-center justify-center flex-wrap gap-3 md:gap-4 mt-2">
                <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:text-primary">FIND</span>
                <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:text-primary">YOUR</span>
                <span className="inline-block transition-transform duration-500 hover:-translate-y-2 hover:scale-105 hover:text-primary">OWN</span>
                
                <span className="bg-primary text-primary-foreground px-5 py-1 inline-block transition-all duration-300 shadow-[4px_4px_0_0_currentColor] hover:rotate-[3deg] hover:scale-105 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_currentColor]">
                  AUDIENCE.
                </span>
                
                <div className="inline-flex shrink-0 animate-spin group-hover/cta:scale-125 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ animationDuration: '8s' }}>
                  <AsteriskIcon className="w-12 h-12 md:w-20 md:h-20" />
                </div>
              </span>
            </h2>
 
            <div className="flex flex-col items-center gap-1 mt-6">
              <p className="text-xl font-black text-foreground transition-transform duration-300 hover:scale-110 hover:-translate-y-1 cursor-default">OFFGRID HQ</p>
              <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em] transition-transform duration-300 hover:translate-x-2 cursor-default">DUCK AND BUCKET</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="w-full mt-16">
          <div className="w-full h-[1.5px] bg-foreground/10 mb-4" />
          <div className="flex justify-between items-center text-[10px] md:text-xs font-black text-foreground/30 uppercase tracking-[0.2em] px-2">
            <span>Copyright OFFGRID HQ</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      <ProjectDrawer 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}


"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Cpu, Calendar, Activity, ChevronRight, Binary } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title?: string;
  name?: string;
  description: string;
  imageFile?: string;
  variant: string;
  projectUrl?: string;
  launchDate?: string;
  liveStatus?: string;
  techStack?: string[];
}

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [project]);

  // Technical data from projects.json
  const techStack = project?.techStack || ["Next.js", "Tailwind", "Framer", "AI Studio"];
  const buildDate = project?.launchDate || "Q1 2026";
  const uptime = project?.liveStatus || "99.9%";

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[11000] cursor-pointer"
          />

          {/* Drawer Profile Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[32rem] bg-card border-l-[3.5px] border-foreground z-[11001] shadow-[-10px_0_30px_rgba(0,0,0,0.15)] flex flex-col overflow-y-auto"
          >
            {/* Header / Nav Area */}
            <div className="p-6 border-b-[2.5px] border-foreground/10 flex justify-between items-center bg-muted/20">
               <div className="flex flex-col">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">PROJECT OVERVIEW</p>
                  <p className="text-[14px] font-black uppercase">{project.name}</p>
               </div>
               <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border-[2.5px] border-foreground flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-all active:scale-90"
               >
                 <X className="w-5 h-5 stroke-[3]" />
               </button>
            </div>

            {/* Banner Illustration */}
            <div className="w-full aspect-video bg-muted relative overflow-hidden group">
               <img 
                 src={`/top-projects-preview/${project.imageFile || "placeholder.jpg"}`}
                 alt={project.title || project.name}
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 contrast-125"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
               <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none whitespace-pre-line drop-shadow-[2px_2px_0_#FFF]">
                    {project.title || project.name}
                  </h2>
               </div>
            </div>

            {/* Core Specs Grid */}
            <div className="p-8 space-y-10">
               
               {/* Description Terminal */}
               <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-foreground/40">
                     <Binary className="w-3 h-3" /> DESCRIPTION
                  </div>
                  <div className="p-5 border-[2.5px] border-foreground bg-foreground/5 rounded-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 opacity-5">
                       <Cpu className="w-12 h-12" />
                     </div>
                     <p className="text-sm font-bold leading-relaxed text-foreground/80 lowercase italic font-mono">
                       // dispatch result:<br/>
                       &gt; {project.description}
                     </p>
                  </div>
               </div>

               {/* Metrics Row */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-secondary/10 border-[2.5px] border-secondary rounded-2xl flex flex-col gap-1 shadow-[4px_4px_0_0_theme(colors.secondary.DEFAULT)] transition-transform hover:-translate-y-1">
                     <div className="flex items-center gap-2 text-[10px] font-black text-secondary-foreground uppercase">
                        <Calendar className="w-3 h-3" /> LAUNCH DATE
                     </div>
                     <p className="text-xl font-black">{buildDate}</p>
                  </div>
                  <div className="p-6 bg-primary/10 border-[2.5px] border-primary rounded-2xl flex flex-col gap-1 shadow-[4px_4px_0_0_theme(colors.primary.DEFAULT)] transition-transform hover:-translate-y-1">
                     <div className="flex items-center gap-2 text-[10px] font-black text-primary-foreground uppercase">
                        <Activity className="w-3 h-3" /> LIVE STATUS
                     </div>
                     <p className="text-xl font-black">{uptime}</p>
                  </div>
               </div>

               {/* Tech Array */}
               <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-1">TECHNOLOGIES USED</p>
                  <div className="flex flex-wrap gap-2">
                     {techStack.map(tag => (
                       <span key={tag} className="px-5 py-2.5 bg-card border-[2.5px] border-foreground text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-foreground hover:text-background transition-all cursor-default">
                         {tag}
                       </span>
                     ))}
                  </div>
               </div>

               {/* Command / Launch Footer */}
               <div className="pt-8 border-t-[2.5px] border-foreground/10 flex flex-col gap-4">
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-foreground text-background py-5 rounded-2xl font-black uppercase tracking-[0.2em] transform transition-all active:scale-[0.98] active:translate-y-1 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 group"
                  >
                     VISIT WEBSITE <ExternalLink className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  </a>
                  <p className="text-[9px] text-center font-black text-muted-foreground uppercase tracking-widest opacity-40">OFFGRID HQ PROJECT — {project.name}</p>
               </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

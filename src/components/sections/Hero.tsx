"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, Hammer, Users, MessageSquare, Smile, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import projectsData from "../../../projects.json";

// Smart helper function to pick perfectly matching icons based on project keywords
const getFallbackIcon = (name: string, isActive: boolean) => {
  const lower = name.toLowerCase();
  let Icon = Zap; // Default cool icon
  
  if (lower.includes('tool') || lower.includes('build') || lower.includes('daddy')) Icon = Hammer;
  else if (lower.includes('social') || lower.includes('communit')) Icon = Users;
  else if (lower.includes('chat') || lower.includes('message')) Icon = MessageSquare;
  else if (lower.includes('face') || lower.includes('person') || lower.includes('human')) Icon = Smile;
  else if (lower.includes('ai') || lower.includes('next') || lower.includes('smart')) Icon = Sparkles;
  
  return <Icon className={cn("w-8 h-8 stroke-[2.5] text-black transition-opacity duration-500", !isActive && "opacity-50")} />;
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const asteriskRef = useRef<HTMLDivElement>(null);
  const lastHoverTime = useRef<number>(0);

  // Smooth asterisk rotation logic
  useEffect(() => {
    let requestRef: number;
    let currentRotation = 0;
    let targetRotation = 0;

    const updateRotation = () => {
      // Very relaxed easing for background element
      currentRotation += (targetRotation - currentRotation) * 0.05;
      
      if (asteriskRef.current) {
        asteriskRef.current.style.transform = `translateY(-50%) rotate(${currentRotation}deg)`;
      }
      requestRef = requestAnimationFrame(updateRotation);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      targetRotation = scrollY * 0.15; // Slowed down scroll response
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    requestRef = requestAnimationFrame(updateRotation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  const handleMouseEnterCard = (index: number) => {
    const now = Date.now();
    // Fast cooldown avoids snapping if mouse briefly passes over another card
    if (now - lastHoverTime.current >= 200) {
      setActiveIndex(index);
      lastHoverTime.current = now;
    }
  };

  const getCardStyle = (index: number) => {
    const total = projectsData.length;
    let distance = index - activeIndex;

    const half = Math.floor(total / 2);
    if (distance > half) distance -= total;
    if (distance < -half) distance += total;

    const absDistance = Math.abs(distance);

    let scale = 1;
    let translateY = 0;
    // zIndex strict layering keeps the active element on top naturally
    let zIndex = 50 - absDistance;

    if (absDistance === 1) {
      scale = 0.85;
      translateY = 40; 
    } else if (absDistance >= 2) {
      scale = 0.7;
      translateY = 80; 
    }

    // Increased horizontal spread to permanently fix "jigsaw" masking overlaps where text clips over other cards!
    const translateX = distance * 280; 

    return {
      transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${scale})`,
      zIndex,
    };
  };

  return (
    <section className="relative pt-8 pb-32 overflow-hidden bg-background">
      <div className="max-w-[100vw] mx-auto px-6 md:px-12 relative z-10 w-full overflow-hidden">
        <div className="flex flex-col items-center mb-4 relative">
          
          <div 
            ref={asteriskRef}
            className="absolute left-[-13rem] top-[30%] -translate-y-1/2 hidden xl:block will-change-transform pointer-events-none z-0 opacity-100"
            style={{ width: '340px', height: '340px' }} 
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-[#9333ea] drop-shadow-[0_10px_40px_rgba(147,51,234,0.6)]"
            >
              <path 
                d="M50 5V95M18.2 18.2L81.8 81.8M5 50H95M18.2 81.8L81.8 18.2" 
                stroke="currentColor" 
                strokeWidth="12" 
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-black mb-10 leading-[1.1] tracking-tighter uppercase text-center w-full max-w-6xl text-foreground relative z-10 mt-12 md:mt-24">
            LEVEL UP YOUR <br />
            INTERNET <span className="inline-flex items-center align-middle h-10 md:h-16 px-6 md:px-8 bg-secondary rounded-none mx-2 md:mx-4 shadow-lg shadow-secondary/20"><ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-secondary-foreground" /></span> WITH <br />
            <span className="bg-secondary text-secondary-foreground px-4 md:px-6 py-2 md:py-3 inline-block leading-none font-black rounded-none">OFFGRID HQ</span>
          </h1>

          <div className="flex justify-between items-center mb-16 w-full max-w-6xl z-20 px-4">
            <div className="text-left flex flex-col">
              <p className="text-[10px] md:text-[11px] font-black text-muted-foreground uppercase mb-1 tracking-[0.25em]">With more than</p>
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-black uppercase leading-tight tracking-tighter text-foreground">2K+ USERS</span>
                <span className="text-xl md:text-3xl font-black uppercase leading-tight tracking-tighter text-foreground">5+ PROJECTS</span>
              </div>
            </div>

            <button 
              className="flex items-center gap-2 bg-card border border-border/50 rounded-full py-1.5 pl-5 pr-1.5 shadow-sm hover:shadow-md transition-all group pointer-events-auto"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground/80">DONATE</span>
              <div className="bg-secondary text-secondary-foreground w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-inner">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
          </div>
          
          <div className="relative w-full flex justify-center items-start h-[36rem] mt-4">
            {/* Minimal background guide path */}
            <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] h-[3px] bg-black/5 rounded-full" />

            {projectsData.map((project: { id: string, name: string, description: string, logoFile: string, themeColor: string, shadowColor: string, projectUrl: string }, index: number) => {
              const isActive = index === activeIndex;
              const hasError = imageErrors[project.id || index];
              
              return (
                <div
                  key={`${project.id}-${index}`}
                  onMouseEnter={() => handleMouseEnterCard(index)}
                  style={{
                    backgroundColor: project.themeColor,
                    transformOrigin: 'top center',
                    boxShadow: isActive ? `10px 10px 0px 0px ${project.shadowColor}` : `4px 4px 0px 0px #000000`,
                    // We must EXPLICITLY omit z-index here so the rotation system isn't glitchy when sliding left and right
                    transitionProperty: 'transform, opacity, box-shadow, filter, background-color',
                    ...getCardStyle(index),
                  }}
                  className={cn(
                    "absolute left-1/2 top-0 group w-[18rem] md:w-[22rem] h-[24rem] md:h-[28rem] rounded-xl flex flex-col items-start justify-between p-6 md:p-8 select-none cursor-pointer border-[3px] border-black duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "opacity-100" : "opacity-100 grayscale-[0.3]" // Cards strictly opaque so outlines don't bleed through
                  )}
                >
                  {/* Top Row: Icon Container and Checkmark */}
                  <div className="flex justify-between items-start w-full mb-4">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center border-[3px] border-black bg-white group-hover:scale-105 transition-transform duration-500"
                    >
                      {hasError ? (
                        getFallbackIcon(project.name, isActive)
                      ) : (
                        <img 
                          src={`/logos/${project.logoFile}`}
                          alt="" 
                          className={cn("w-8 h-8 object-contain transition-all duration-500", !isActive && "opacity-60 grayscale")}
                          onError={() => {
                            setImageErrors(prev => ({ ...prev, [project.id || index]: true }));
                          }}
                        />
                      )}
                    </div>
                    {/* Checkmark circle */}
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border-[3px] border-black transition-colors duration-500", isActive ? "bg-black text-white" : "bg-black/10 text-black/50")}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  
                  {/* Middle: Title and Subtext */}
                  <div className="mb-auto text-left w-full mt-2">
                     <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter leading-none text-black">
                      {project.name}
                    </h3>
                    <p className="text-xs md:text-sm font-bold leading-relaxed line-clamp-3 text-black/80">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Solid LAUNCH button block inside the card */}
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full py-3 md:py-4 rounded-lg flex items-center justify-center gap-2 font-black text-sm tracking-widest uppercase transition-all mt-4 border-[3px] border-black active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-black hover:text-white bg-white text-black",
                      isActive ? "shadow-[4px_4px_0_0_#000000] pointer-events-auto" : "shadow-none opacity-50 pointer-events-none"
                    )}
                  >
                    LAUNCH
                    <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { Users, Globe, Layers, Award } from "lucide-react";

const stats = [
  { label: "CLASSES", value: "3+", icon: <Layers className="w-4 h-4" /> },
  { label: "MEMBERS", value: "2K+", icon: <Users className="w-4 h-4" /> },
  { label: "TUTORIALS", value: "500+", icon: <Globe className="w-4 h-4" /> },
  { label: "AWARDS", value: "4", icon: <Award className="w-4 h-4" /> },
];

export default function Mission() {
  return (
    <section id="mission" className="py-12 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 text-[10px] font-bold uppercase tracking-wider">
              Our Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight uppercase">
              MASTER THE ART OF <span className="text-primary italic">DIGITAL DESIGN.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed uppercase font-medium">
              We don't just teach tools; we build careers. Our classes are designed to bridge the gap between hobbyist and professional.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="text-primary mb-1 flex items-center gap-2 opacity-60">
                    {stat.icon}
                    <span className="text-[9px] font-black tracking-widest uppercase">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-black group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video md:aspect-square bg-[#1A1C23] rounded-[2rem] flex flex-col justify-center items-center text-center p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full -translate-y-12 translate-x-12 opacity-20 blur-3xl" />
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-[1.5rem] shadow-2xl relative z-10 rotate-1 group-hover:rotate-0 transition-transform duration-500 backdrop-blur-sm">
                <blockquote className="text-lg md:text-xl font-black italic text-white mb-4 leading-snug uppercase">
                  "Good design is obvious. Great design is transparent."
                </blockquote>
                <cite className="text-primary text-xs font-bold not-italic tracking-widest uppercase">— RUANG EDIT TEAM</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
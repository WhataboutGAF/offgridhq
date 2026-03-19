
"use client";

import React, { useState, useEffect } from "react";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Zap className="text-white w-4 h-4" />
            </div>
            <span className="font-headline text-xl font-bold tracking-tighter">OFFGRID HQ</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Careers</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Github className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-muted-foreground opacity-50 uppercase font-black tracking-widest">
          © {year || "..."} OFFGRID HQ. Built for the decentralized frontier.
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Moon, Sun, Monitor } from "lucide-react";

type Theme = 'default' | 'dark' | 'grayscale';

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['default', 'dark', 'grayscale'];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('app-theme', nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark': return <Moon className="w-4 h-4" />;
      case 'grayscale': return <Monitor className="w-4 h-4" />;
      default: return <Sun className="w-4 h-4" />;
    }
  };

  return (
    <nav className="w-full bg-background pt-6 pb-2 border-b border-foreground/5">
      <div className="w-full px-6 md:px-12">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[10px] font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-all duration-300 uppercase relative after:absolute after:-bottom-[6px] after:left-0 after:w-0 hover:after:w-full after:h-[2.5px] after:bg-primary after:transition-all after:duration-300 hover:-translate-y-[2px]">HOME</Link>
            <Link href="/about" className="text-[10px] font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-all duration-300 uppercase relative after:absolute after:-bottom-[6px] after:left-0 after:w-0 hover:after:w-full after:h-[2.5px] after:bg-primary after:transition-all after:duration-300 hover:-translate-y-[2px]">ABOUT US</Link>
          </div>

          <div className="flex items-center gap-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 border-border bg-transparent hover:bg-muted transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center p-0"
              title={`Switch to ${(theme === 'default' ? 'dark' : theme === 'dark' ? 'grayscale' : 'default')} mode`}
            >
              <span className="transition-transform duration-500 ease-out group-hover:rotate-[180deg]">
                 {getThemeIcon()}
              </span>
            </Button>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="rounded-full border-[2px] border-secondary text-[10px] font-black px-6 h-9 bg-transparent transition-all duration-300 group uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0_0_currentColor] active:translate-y-0 active:shadow-none hover:bg-secondary/10"
              >
                CONTACT US <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

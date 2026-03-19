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
            <Link href="/" className="text-[10px] font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase">HOME</Link>
            <Link href="/about" className="text-[10px] font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase">ABOUT US</Link>
          </div>

          <div className="flex items-center gap-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 border-border bg-transparent hover:bg-muted transition-all"
              title={`Switch to ${(theme === 'default' ? 'dark' : theme === 'dark' ? 'grayscale' : 'default')} mode`}
            >
              {getThemeIcon()}
            </Button>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="rounded-full border-[1.5px] border-secondary text-[10px] font-black px-6 h-9 bg-transparent hover:bg-secondary/10 transition-all group uppercase"
              >
                CONTACT US <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
